import { BottomNav } from "@/components/layout/BottomNav";
import { LeftSidebar } from "@/components/layout/LeftSidebar";
import { RightSidebar } from "@/components/layout/RightSidebar";
import { TopBar } from "@/components/layout/TopBar";
import { SupabaseSyncProvider } from "@/components/providers/SupabaseSyncProvider";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SupabaseSyncProvider>
      <div className="min-h-screen bg-background">
        {/* Left sidebar — visible on lg+ */}
        <LeftSidebar />

        {/* Right sidebar — visible on xl+ */}
        <RightSidebar />

        {/* Central content area — shifts right on lg, narrows on xl */}
        <div className="lg:ml-[220px] xl:mr-[280px] min-h-screen flex flex-col">
          <TopBar />
          <main className="flex-1 pb-20 lg:pb-8">{children}</main>
        </div>

        {/* Bottom nav — visible on mobile/tablet (hidden on lg+) */}
        <BottomNav />
      </div>
    </SupabaseSyncProvider>
  );
}
