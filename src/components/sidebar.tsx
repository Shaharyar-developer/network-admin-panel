"use client";
import { useQueryState } from "nuqs";
import Application from "./sidebar-components/application";
import Device from "./sidebar-components/device";
import Network from "./sidebar-components/network";
import Security from "./sidebar-components/security";
import Status from "./sidebar-components/status";
export const Sidebar = () => {
  const [tab] = useQueryState("tab");

  return (
    <nav className="hidden lg:block w-[10%] border-r">
      {tab === "status" && <Status />}
      {tab === "device" && <Device />}
      {tab === "application" && <Application />}
      {tab === "network" && <Network />}
      {tab === "security" && <Security />}
    </nav>
  );
};
