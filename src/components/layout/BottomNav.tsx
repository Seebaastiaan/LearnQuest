"use client";

import { useSettingsStore } from "@/stores";
import { GraduationCap, Lock, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BottomNavItem {
  href: string;
  icon: React.ElementType;
  labelEs: string;
  labelEn: string;
  disabled?: boolean;
}

// Only show the 5 most important items on mobile (Duolingo pattern)
const mobileNavItems: BottomNavItem[] = [
  {
    href: "/dashboard",
    icon: GraduationCap,
    labelEs: "Aprender",
    labelEn: "Learn",
    disabled: false,
  },
  {
    href: "/coming-soon?feature=curriculum",
    icon: Lock,
    labelEs: "Temario",
    labelEn: "Syllabus",
    disabled: true,
  },
  {
    href: "/coming-soon?feature=leagues",
    icon: Lock,
    labelEs: "Ligas",
    labelEn: "Leagues",
    disabled: true,
  },
  {
    href: "/coming-soon?feature=missions",
    icon: Lock,
    labelEs: "Misiones",
    labelEn: "Quests",
    disabled: true,
  },
  {
    href: "/profile",
    icon: User,
    labelEs: "Perfil",
    labelEn: "Profile",
    disabled: false,
  },
];

export function BottomNav() {
  const pathname = usePathname();
  const locale = useSettingsStore((s) => s.locale);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t-2 border-[#E5E5E5] dark:border-white/10 lg:hidden pb-safe">
      <div className="flex items-center justify-around h-15 px-1">
        {mobileNavItems.map((item) => {
          const isActive =
            (pathname === item.href || pathname.startsWith(`${item.href}/`)) &&
            !item.disabled;

          return (
            <Link
              key={item.href}
              href={item.disabled ? "#" : item.href}
              onClick={(e) => {
                if (item.disabled) {
                  e.preventDefault();
                }
              }}
              className={`
                flex flex-col items-center justify-center gap-0.5 w-full py-1.5 rounded-xl transition-colors
                ${
                  item.disabled
                    ? "text-[#AFAFAF] dark:text-slate-600 cursor-default"
                    : isActive
                      ? "text-[#1CB0F6]"
                      : "text-[#AFAFAF] dark:text-slate-500 hover:text-[#4B4B4B] dark:hover:text-slate-400"
                }
              `}
            >
              <item.icon
                className={`w-6 h-6 ${
                  isActive && !item.disabled
                    ? "text-[#1CB0F6]"
                    : item.disabled
                      ? "text-[#AFAFAF] dark:text-slate-600"
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
