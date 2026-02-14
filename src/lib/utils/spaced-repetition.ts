/**
 * Simplified Spaced Repetition (SM-2 variant)
 *
 * Tracks question difficulty and schedules reviews at increasing intervals.
 */

interface ReviewData {
  easeFactor: number; // >= 1.3
  interval: number; // days
  repetitions: number;
}

const MIN_EASE_FACTOR = 1.3;
const INITIAL_EASE_FACTOR = 2.5;

/**
 * Initialize review data for a new question
 */
export function initReviewData(): ReviewData {
  return {
    easeFactor: INITIAL_EASE_FACTOR,
    interval: 0,
    repetitions: 0,
  };
}

/**
 * Update review data based on answer quality
 * @param quality 0-5 (0: complete failure, 5: perfect response)
 */
export function updateReviewData(
  data: ReviewData,
  quality: number,
): ReviewData {
  const { easeFactor, interval, repetitions } = data;

  let newInterval: number;
  let newRepetitions: number;
  let newEaseFactor: number;

  if (quality >= 3) {
    // Correct answer
    if (repetitions === 0) {
      newInterval = 1;
    } else if (repetitions === 1) {
      newInterval = 3;
    } else {
      newInterval = Math.round(interval * easeFactor);
    }
    newRepetitions = repetitions + 1;
  } else {
    // Incorrect answer — reset
    newInterval = 0;
    newRepetitions = 0;
  }

  // Update ease factor
  newEaseFactor =
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  newEaseFactor = Math.max(MIN_EASE_FACTOR, newEaseFactor);

  return {
    easeFactor: newEaseFactor,
    interval: newInterval,
    repetitions: newRepetitions,
  };
}

/**
 * Calculate the next review date
 */
export function getNextReviewDate(interval: number): string {
  const date = new Date();
  date.setDate(date.getDate() + interval);
  return date.toISOString();
}

/**
 * Check if a question is due for review
 */
export function isDueForReview(nextReview: string): boolean {
  return new Date(nextReview) <= new Date();
}

/**
 * Convert correctness boolean to SM-2 quality
 */
export function qualityFromCorrectness(
  isCorrect: boolean,
  timeSpent: number,
): number {
  if (!isCorrect) return 1; // Remembered incorrectly

  // Fast correct answer = higher quality
  if (timeSpent < 5000) return 5; // < 5 seconds
  if (timeSpent < 15000) return 4; // < 15 seconds
  return 3; // Slow but correct
}
