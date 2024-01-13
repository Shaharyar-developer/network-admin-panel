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
    <nav className="hidden lg:block lg:w-[20%] xl:w-[13%] border-r">
      {tab === "status" && <Status />}
      {tab === "network" && <Network />}
      {tab === "application" && <Application />}
      {tab === "security" && <Security />}
      {tab === "device" && <Device />}
    </nav>
  );
};
