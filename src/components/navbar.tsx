"use client";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { useQueryState } from "nuqs";
import { ModeToggle } from "./mode-toggle";
export const Navbar = () => {
  const [tab, setTab] = useQueryState("tab");
  const [mode, setMode] = useQueryState("mode");

  useEffect(() => {
    setTab("status");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (tab === "status") setMode("device-information");
    if (tab === "network") setMode("wlan-settings");
    if (tab === "security") setMode("firewall");
    if (tab === "application") setMode("ddns");
    if (tab === "device") setMode("account-management");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);
  return (
    <nav className="w-full flex justify-center items-center gap-12 border-b h-[7svh]">
      <Button
        variant={"link"}
        onClick={(e) => setTab(e.currentTarget.textContent!.toLowerCase())}
        disabled={tab === "status"}
      >
        Status
      </Button>
      <Button
        variant={"link"}
        onClick={(e) => setTab(e.currentTarget.textContent!.toLowerCase())}
        disabled={tab === "network"}
      >
        Network
      </Button>
      <Button
        variant={"link"}
        onClick={(e) => setTab(e.currentTarget.textContent!.toLowerCase())}
        disabled={tab === "security"}
      >
        Security
      </Button>
      <Button
        variant={"link"}
        onClick={(e) => setTab(e.currentTarget.textContent!.toLowerCase())}
        disabled={tab === "application"}
      >
        Application
      </Button>
      <Button
        variant={"link"}
        onClick={(e) => setTab(e.currentTarget.textContent!.toLowerCase())}
        disabled={tab === "device"}
      >
        Device
      </Button>
      <ModeToggle />
    </nav>
  );
};
