export function getGreeting(locale: "es" | "en"): string {
  const hour = new Date().getHours();
  if (locale === "es") {
    if (hour < 12) return "Buenos días";
    if (hour < 19) return "Buenas tardes";
    return "Buenas noches";
  }
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}
