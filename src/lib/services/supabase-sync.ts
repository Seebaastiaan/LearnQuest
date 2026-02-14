import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

// ==================== GAME STATE ====================

export interface GameStateDB {
  user_id: string;
  total_xp: number;
  level: number;
  hearts: number;
  current_streak: number;
  longest_streak: number;
  last_practice_date: string | null;
  created_at?: string;
  updated_at?: string;
}

export async function loadGameState(
  userId: string,
): Promise<GameStateDB | null> {
  const { data, error } = await supabase
    .from("game_state")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    console.error("Error loading game state:", {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code,
    });
    return null;
  }

  return data;
}

export async function saveGameState(state: GameStateDB): Promise<boolean> {
  const { error } = await supabase.from("game_state").upsert(
    {
      user_id: state.user_id,
      total_xp: state.total_xp,
      level: state.level,
      hearts: state.hearts,
      current_streak: state.current_streak,
      longest_streak: state.longest_streak,
      last_practice_date: state.last_practice_date,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" },
  );

  if (error) {
    console.error("Error saving game state:", {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code,
    });
    return false;
  }

  return true;
}

// ==================== LESSON PROGRESS ====================

export interface LessonProgressDB {
  id?: string;
  user_id: string;
  lesson_id: string;
  topic_id: string;
  status: "locked" | "available" | "in-progress" | "completed" | "perfect";
  best_score: number;
  attempts: number;
  completed_at?: string | null;
  created_at?: string;
  updated_at?: string;
}

export async function loadLessonProgress(
  userId: string,
): Promise<LessonProgressDB[]> {
  const { data, error } = await supabase
    .from("lesson_progress")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.error("Error loading lesson progress:", {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code,
    });
    return [];
  }

  return data || [];
}

export async function saveLessonProgress(
  progress: LessonProgressDB,
): Promise<boolean> {
  const { error } = await supabase.from("lesson_progress").upsert(
    {
      user_id: progress.user_id,
      lesson_id: progress.lesson_id,
      topic_id: progress.topic_id,
      status: progress.status,
      best_score: progress.best_score,
      attempts: progress.attempts,
      completed_at: progress.completed_at,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,lesson_id" },
  );

  if (error) {
    console.error("Error saving lesson progress:", {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code,
    });
    return false;
  }

  return true;
}

// ==================== TOPIC PROGRESS ====================

export interface TopicProgressDB {
  id?: string;
  user_id: string;
  topic_id: string;
  is_completed: boolean;
  completed_at?: string | null;
  created_at?: string;
  updated_at?: string;
}

export async function loadTopicProgress(
  userId: string,
): Promise<TopicProgressDB[]> {
  const { data, error } = await supabase
    .from("topic_progress")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.error("Error loading topic progress:", {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code,
    });
    return [];
  }

  return data || [];
}

export async function saveTopicProgress(
  progress: TopicProgressDB,
): Promise<boolean> {
  const { error } = await supabase.from("topic_progress").upsert(
    {
      user_id: progress.user_id,
      topic_id: progress.topic_id,
      is_completed: progress.is_completed,
      completed_at: progress.completed_at,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,topic_id" },
  );

  if (error) {
    console.error("Error saving topic progress:", {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code,
    });
    return false;
  }

  return true;
}

// ==================== XP HISTORY ====================

export interface XPHistoryDB {
  id?: string;
  user_id: string;
  amount: number;
  reason: string;
  lesson_id?: string | null;
  created_at?: string;
}

export async function addXPHistory(
  xp: Omit<XPHistoryDB, "id" | "created_at">,
): Promise<boolean> {
  const { error } = await supabase.from("xp_history").insert({
    user_id: xp.user_id,
    amount: xp.amount,
    reason: xp.reason,
    lesson_id: xp.lesson_id,
  });

  if (error) {
    console.error("Error adding XP history:", {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code,
    });
    return false;
  }

  return true;
}

// ==================== USER AUTH ====================

export async function getCurrentUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    if (error) {
      console.error("Error getting current user:", {
        message: error.message,
        code: error.code || error.status,
      });
    }
    return null;
  }

  return user;
}

export async function ensureUserProfile(
  userId: string,
  email: string | undefined,
) {
  // Get user metadata from auth
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const displayName =
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    email?.split("@")[0] ||
    "Usuario";

  const avatarUrl =
    user?.user_metadata?.avatar_url ||
    user?.user_metadata?.picture ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=0ea5e9&color=fff`;

  const { error } = await supabase.from("profiles").upsert(
    {
      id: userId,
      email: email,
      display_name: displayName,
      avatar_url: avatarUrl,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "id" },
  );

  if (error) {
    console.error("Error ensuring user profile:", {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code,
    });
  }
}
