-- ============================================
-- FIX: Agregar política INSERT para profiles
-- ============================================

-- Permitir a los usuarios crear su propio perfil después del registro
CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT 
  WITH CHECK (auth.uid() = id);

-- ============================================
-- VERIFICAR: Estas políticas deben existir
-- ============================================

-- Si no existen, créalas:

-- Permitir a los usuarios crear/leer/actualizar su propio game_state
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'game_state' 
    AND policyname = 'Users can insert own game state'
  ) THEN
    EXECUTE 'CREATE POLICY "Users can insert own game state" ON public.game_state
      FOR INSERT WITH CHECK (auth.uid() = user_id)';
  END IF;
END $$;

-- Permitir a los usuarios crear/leer/actualizar/eliminar su propio lesson_progress
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'lesson_progress' 
    AND policyname = 'Users can insert own lesson progress'
  ) THEN
    EXECUTE 'CREATE POLICY "Users can insert own lesson progress" ON public.lesson_progress
      FOR INSERT WITH CHECK (auth.uid() = user_id)';
  END IF;
END $$;

-- Permitir a los usuarios crear/leer/actualizar/eliminar su propio topic_progress
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'topic_progress' 
    AND policyname = 'Users can insert own topic progress'
  ) THEN
    EXECUTE 'CREATE POLICY "Users can insert own topic progress" ON public.topic_progress
      FOR INSERT WITH CHECK (auth.uid() = user_id)';
  END IF;
END $$;

-- ============================================
-- NOTA IMPORTANTE
-- ============================================
-- Ejecuta este SQL en el "SQL Editor" de Supabase
-- Esto permitirá que los usuarios:
-- 1. Creen su perfil al registrarse
-- 2. Inserten su game_state inicial
-- 3. Inserten progress de lecciones
-- 4. Inserten progress de temas
