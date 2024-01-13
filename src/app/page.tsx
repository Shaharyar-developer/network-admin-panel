import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { SelectionContent } from "@/components/selection-content";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
export default function Home() {
  return (
    <>
      <Suspense fallback={<Skeleton className="w-full h-full" />}>
        <Navbar />
      </Suspense>
      <div className="flex min-h-[93svh] w-full">
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <Sidebar />
        </Suspense>
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <SelectionContent />
        </Suspense>
      </div>
    </>
  );
}
