"use client";

import { useSettingsStore } from "@/stores";
import {
  BookOpen,
  GraduationCap,
  Medal,
  Target,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BottomNavItem {
  href: string;
  icon: React.ElementType;
  labelEs: string;
  labelEn: string;
}

// Only show the 5 most important items on mobile (Duolingo pattern)
const mobileNavItems: BottomNavItem[] = [
  {
    href: "/dashboard",
    icon: GraduationCap,
    labelEs: "Aprender",
    labelEn: "Learn",
  },
  {
    href: "/temario",
    icon: BookOpen,
    labelEs: "Temario",
    labelEn: "Syllabus",
  },
  {
    href: "/clasificacion",
    icon: Medal,
    labelEs: "Ligas",
    labelEn: "Leagues",
  },
  {
    href: "/misiones",
    icon: Target,
    labelEs: "Misiones",
    labelEn: "Quests",
  },
  {
    href: "/profile",
    icon: User,
    labelEs: "Perfil",
    labelEn: "Profile",
  },
];

export function BottomNav() {
  const pathname = usePathname();
  const locale = useSettingsStore((s) => s.locale);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t-2 border-[#E5E5E5] dark:border-white/10 lg:hidden pb-safe">
      <div className="flex items-center justify-around h-[60px] px-1">
        {mobileNavItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex flex-col items-center justify-center gap-0.5 w-full py-1.5 rounded-xl transition-colors
                ${
                  isActive
                    ? "text-[#1CB0F6]"
                    : "text-[#AFAFAF] dark:text-slate-500"
                }
              `}
            >
              <item.icon
                className={`w-6 h-6 ${
                  isActive
                    ? "text-[#1CB0F6]"
                    : "text-[#AFAFAF] dark:text-slate-500"
                }`}
              />
              <span className="text-[10px] font-bold">
                {locale === "es" ? item.labelEs : item.labelEn}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
