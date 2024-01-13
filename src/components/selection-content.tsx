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
} from "@/components/selections/device";

export const SelectionContent = () => {
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
      {mode === "network-wlan-settings" && <NetworkWLANSettings />}
      {mode === "network-lan-settings" && <NetworkLANSettings />}
      {mode === "network-broadband-settings" && <NetworkBroadbandSettings />}
      {mode === "network-remote-management" && <NetworkRemoteManagement />}
      {mode === "network-voip-settings" && <NetworkVoIPSettings />}
      {mode === "security-firewall" && (
        <SecurityFirewallControl
          firewallRules={firewallRules}
          setFirewallRules={setFirewallRules}
        />
      )}
      {mode === "security-ddos" && <SecurityDDOSControl />}
      {mode === "security-https" && <SecurityHTTPSControl />}
      {mode === "application-port-forwarding" && (
        <ApplicationPortForwarding
          portForwardingRules={portForwardingRules}
          setPortForwardingRules={setPortForwardingRules}
        />
      )}
      {mode === "application-upnp" && <ApplicationUPNP />}
      {mode === "device-account-management" && (
        <DeviceAccountManagement Users={users} setUsers={setUsers} />
      )}
      {mode === "device-management" && <DeviceManagement />}
    </div>
  );
};
