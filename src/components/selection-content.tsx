"use client";
import { useQueryState } from "nuqs";
import {
  StatusDeviceInfo,
  StatusNetworkInfo,
  StatusWANInfo,
  StatusLANInfo,
} from "./selections/status";
import {
  NetworkWLANSettings,
  NetworkLANSettings,
  NetworkBroadbandSettings,
  NetworkRemoteManagement,
  NetworkVoIPSettings,
} from "./selections/network";
export const SelectionContent = () => {
  const [mode] = useQueryState("mode");
  return (
    <div className="w-full">
      {mode === "status-device-info" && <StatusDeviceInfo />}
      {mode === "status-wireless-status" && <StatusNetworkInfo />}
      {mode === "status-wan-status" && <StatusWANInfo />}
      {mode === "status-lan-status" && <StatusLANInfo />}
      {mode === "network-wlan-settings" && <NetworkWLANSettings />}
      {mode === "network-lan-settings" && <NetworkLANSettings />}
      {mode === "network-broadband-settings" && <NetworkBroadbandSettings />}
      {mode === "network-remote-management" && <NetworkRemoteManagement />}
      {mode === "network-voip-settings" && <NetworkVoIPSettings />}
    </div>
  );
};
