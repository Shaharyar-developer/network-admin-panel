"use client";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { useQueryState } from "nuqs";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "./ui/separator";
import Application from "./sidebar-components/application";
import Device from "./sidebar-components/device";
import Network from "./sidebar-components/network";
import Security from "./sidebar-components/security";
import Status from "./sidebar-components/status";
import { toast } from "sonner";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";

import { Menu } from "lucide-react";
import { BreadCrumbs } from "./ui/breadcrumbs";

export const Navbar = () => {
  const [tab, setTab] = useQueryState("tab");
  const [mode, setMode] = useQueryState("mode");

  useEffect(() => {
    if (!tab) setTab("status");
    toast("This App is a work in progress, thus incomplete and buggy")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (tab === "status") setMode("status-device-info");
    if (tab === "network") setMode("network-wlan-settings");
    if (tab === "security") setMode("security-firewall");
    if (tab === "application") setMode("application-ddns");
    if (tab === "device") setMode("device-account-management");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);
  return (
    <>
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant={"ghost"}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="max-w-max flex-col flex">
            <BreadCrumbs>
              <h2>{tab}</h2>
              <h2>{mode}</h2>
            </BreadCrumbs>
            <Button
              variant={"ghost"}
              className="justify-start"
              onClick={(e) =>
                setTab(e.currentTarget.textContent!.toLowerCase())
              }
              disabled={tab === "status"}
            >
              Status
            </Button>
            <Button
              variant={"ghost"}
              className="justify-start"
              onClick={(e) =>
                setTab(e.currentTarget.textContent!.toLowerCase())
              }
              disabled={tab === "network"}
            >
              Network
            </Button>
            <Button
              variant={"ghost"}
              className="justify-start"
              onClick={(e) =>
                setTab(e.currentTarget.textContent!.toLowerCase())
              }
              disabled={tab === "security"}
            >
              Security
            </Button>
            <Button
              variant={"ghost"}
              className="justify-start"
              onClick={(e) =>
                setTab(e.currentTarget.textContent!.toLowerCase())
              }
              disabled={tab === "application"}
            >
              Application
            </Button>
            <Button
              variant={"ghost"}
              className="justify-start"
              onClick={(e) =>
                setTab(e.currentTarget.textContent!.toLowerCase())
              }
              disabled={tab === "device"}
            >
              Device
            </Button>
          </div>
          <Separator />
          <div className="">
            {tab === "status" && <Status />}
            {tab === "device" && <Device />}
            {tab === "application" && <Application />}
            {tab === "network" && <Network />}
            {tab === "security" && <Security />}
          </div>
        </SheetContent>
      </Sheet>
      <nav className="w-full hidden lg:flex justify-center items-center gap-12 border-b h-[7svh]">
        <Button
          variant={"ghost"}
          onClick={(e) => setTab(e.currentTarget.textContent!.toLowerCase())}
          disabled={tab === "status"}
        >
          Status
        </Button>
        <Button
          variant={"ghost"}
          onClick={(e) => setTab(e.currentTarget.textContent!.toLowerCase())}
          disabled={tab === "network"}
        >
          Network
        </Button>
        <Button
          variant={"ghost"}
          onClick={(e) => setTab(e.currentTarget.textContent!.toLowerCase())}
          disabled={tab === "security"}
        >
          Security
        </Button>
        <Button
          variant={"ghost"}
          onClick={(e) => setTab(e.currentTarget.textContent!.toLowerCase())}
          disabled={tab === "application"}
        >
          Application
        </Button>
        <Button
          variant={"ghost"}
          onClick={(e) => setTab(e.currentTarget.textContent!.toLowerCase())}
          disabled={tab === "device"}
        >
          Device
        </Button>
        <ModeToggle />
      </nav>
    </>
  );
};
