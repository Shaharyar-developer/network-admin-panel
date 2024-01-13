import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { SelectionContent } from "@/components/selection-content";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex h-[93svh] w-full">
        <Sidebar />
        <SelectionContent />
      </div>
    </>
  );
}
