"use client";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { useQueryState } from "nuqs";
import { ModeToggle } from "./mode-toggle";
export const Navbar = () => {
  const [tab, setTab] = useQueryState("tab");
  const [_, setMode] = useQueryState("mode");

  useEffect(() => {
    setTab("status");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (tab === "status") setMode("status-device-information");
    if (tab === "network") setMode("network-wlan-settings");
    if (tab === "security") setMode("security-firewall");
    if (tab === "application") setMode("application-ddns");
    if (tab === "device") setMode("device-account-management");
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
