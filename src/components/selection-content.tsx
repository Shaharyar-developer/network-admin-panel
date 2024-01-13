"use client";
import { useQueryState } from "nuqs";
import {
  StatusDeviceInfo,
  StatusNetworkInfo,
  StatusWANInfo,
  StatusLANInfo,
} from "./selections/status";
export const SelectionContent = () => {
  const [mode] = useQueryState("mode");
  const [tab] = useQueryState("tab");
  return (
    <div className="w-full">
      {tab === "status" && mode === "status-device-info" && (
        <StatusDeviceInfo />
      )}
      {tab === "status" && mode === "status-wireless-status" && (
        <StatusNetworkInfo />
      )}
      {tab === "status" && mode === "status-wan-status" && <StatusWANInfo />}
      {tab === "status" && mode === "status-lan-status" && <StatusLANInfo />}
    </div>
  );
};
