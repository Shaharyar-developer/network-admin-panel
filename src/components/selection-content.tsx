"use client";
import { useQueryState } from "nuqs";
import type { FirewallRule, PortForwardingRule, User } from "@/lib/types";
import { useState } from "react";

import {
  NetworkBroadbandSettings,
  NetworkLANSettings,
  NetworkRemoteManagement,
  NetworkVoIPSettings,
  NetworkWLANSettings,
} from "@/components/selections/network";
import {
  SecurityFirewallControl,
  SecurityDDOSControl,
  SecurityHTTPSControl,
} from "@/components/selections/security";
import {
  StatusDeviceInfo,
  StatusLANInfo,
  StatusNetworkInfo,
  StatusWANInfo,
} from "@/components/selections/status";
import {
  ApplicationPortForwarding,
  ApplicationUPNP,
} from "@/components/selections/application";
import {
  DeviceAccountManagement,
  DeviceManagement,
  DeviceLogs,
} from "@/components/selections/device";

export const SelectionContent = () => {
  const [log, setLog] = useState<string[]>([]);
  const [mode] = useQueryState("mode");
  const [firewallRules, setFirewallRules] = useState<FirewallRule[]>([
    { destination: "youtube.com", protocol: "https", source: "192.168.1.*" },
  ]);
  const [portForwardingRules, setPortForwardingRules] = useState<
    PortForwardingRule[]
  >([
    {
      IP: "192.168.1.17",
      name: "Minecraft Server",
      PrivatePort: "25565",
      Protocol: "TCP",
      PublicPort: "25565",
    },
  ]);
  const [users, setUsers] = useState<User[]>([
    {
      name: "Maintainance",
      password: "1995",
      role: "admin",
    },
  ]);
  return (
    <div className="w-full">
      {mode === "status-device-info" && <StatusDeviceInfo />}
      {mode === "status-wireless-status" && <StatusNetworkInfo />}
      {mode === "status-wan-status" && <StatusWANInfo />}
      {mode === "status-lan-status" && <StatusLANInfo />}
      {mode === "network-wlan-settings" && (
        <NetworkWLANSettings setLog={setLog} />
      )}
      {mode === "network-lan-settings" && (
        <NetworkLANSettings setLog={setLog} />
      )}
      {mode === "network-broadband-settings" && (
        <NetworkBroadbandSettings setLog={setLog} />
      )}
      {mode === "network-remote-management" && (
        <NetworkRemoteManagement setLog={setLog} />
      )}
      {mode === "network-voip-settings" && (
        <NetworkVoIPSettings setLog={setLog} />
      )}
      {mode === "security-firewall" && (
        <SecurityFirewallControl
          firewallRules={firewallRules}
          setFirewallRules={setFirewallRules}
          setLog={setLog}
        />
      )}
      {mode === "security-ddos" && <SecurityDDOSControl setLog={setLog} />}
      {mode === "security-https" && <SecurityHTTPSControl setLog={setLog} />}
      {mode === "application-port-forwarding" && (
        <ApplicationPortForwarding
          portForwardingRules={portForwardingRules}
          setPortForwardingRules={setPortForwardingRules}
          setLog={setLog}
        />
      )}
      {mode === "application-upnp" && <ApplicationUPNP setLog={setLog} />}
      {mode === "device-account-management" && (
        <DeviceAccountManagement
          Users={users}
          setUsers={setUsers}
          setLog={setLog}
        />
      )}
      {mode === "device-management" && <DeviceManagement setLog={setLog} />}
      {mode === "device-log" && <DeviceLogs logs={log} />}
    </div>
  );
};
