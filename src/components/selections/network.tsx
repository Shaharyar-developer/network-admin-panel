import { Table, TableCell, TableBody, TableRow } from "../ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

import { Input } from "@/components/ui/input";

import { useState } from "react";
import { toast } from "sonner";
import { WifiOff, Wifi, Server, ServerOff } from "lucide-react";
export const NetworkWLANSettings = ({
  setLog,
}: {
  setLog: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [wifi, setWifi] = useState<boolean>(true);
  return (
    <>
      <Table className="container mx-auto border lg:border-t-0">
        <TableBody>
          <TableRow>
            <TableCell>WiFi</TableCell>
            <TableCell className="flex items-center gap-2 text-foreground/75">
              <WifiOff scale={0.4} />
              <Switch
                defaultChecked={wifi}
                onCheckedChange={(e) => {
                  setWifi(e);
                  toast.info("WiFi has been turned " + (e ? "on" : "off"));
                  setLog((prev) => [
                    ...prev,
                    "WiFi has been turned " + (e ? "on" : "off"),
                  ]);
                }}
              />
              <Wifi scale={0.4} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Network Mode</TableCell>
            <TableCell>
              <Select disabled={!wifi} defaultValue="802.11 b/g/n">
                <SelectTrigger className="w-[180px] lg:w-[300px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="802.11 b/g/n">802.11 b/g/n</SelectItem>
                  <SelectItem value="802.11 b/g">802.11 b/g</SelectItem>
                  <SelectItem value="802.11 b">802.11 b</SelectItem>
                  <SelectItem value="802.11 n">802.11 n</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Frequency</TableCell>
            <TableCell>
              <Select
                onValueChange={(value: string) => {
                  setLog((prev) => [
                    ...prev,
                    "Frequency has been set to " + value,
                  ]);
                }}
                disabled={!wifi}
                defaultValue="40Mhz"
              >
                <SelectTrigger className="w-[180px] lg:w-[300px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="20Mhz">20Mhz</SelectItem>
                  <SelectItem value="40Mhz">40Mhz</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Channel</TableCell>
            <TableCell>
              <Select
                onValueChange={(e) => {
                  setLog((prev) => [...prev, "Channel has been set to " + e]);
                }}
                disabled={!wifi}
                defaultValue="11"
              >
                <SelectTrigger className="w-[180px] lg:w-[300px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="7">7</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="9">9</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="11">11</SelectItem>
                  <SelectItem value="12">12</SelectItem>
                  <SelectItem value="13">13</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Guard Interval</TableCell>
            <TableCell>
              <Select
                onValueChange={(e) => {
                  setLog((prev) => [
                    ...prev,
                    "Guard Interval has been set to " + e,
                  ]);
                }}
                disabled={!wifi}
                defaultValue="Auto"
              >
                <SelectTrigger className="w-[180px] lg:w-[300px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Auto">Auto</SelectItem>
                  <SelectItem value="Long">Long</SelectItem>
                  <SelectItem value="Short">Short</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Power Level</TableCell>
            <TableCell>
              <Select
                onValueChange={(e) => {
                  setLog((prev) => [
                    ...prev,
                    "Power Level has been set to " + e,
                  ]);
                }}
                disabled={!wifi}
                defaultValue="Auto"
              >
                <SelectTrigger className="w-[180px] lg:w-[300px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Auto">Auto</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
export const NetworkLANSettings = ({
  setLog,
}: {
  setLog: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  return (
    <>
      <Table className="container mx-auto border lg:border-t-0">
        <TableBody>
          <TableRow>
            <TableCell>LAN Interface</TableCell>
            <TableCell>
              <Input
                onChange={(e) => {
                  setLog((prev) => [
                    ...prev,
                    "LAN Interface has been set to " + e.target.value,
                  ]);
                }}
                className="w-[180px] lg:w-[300px] "
                defaultValue={"192.168.1.1"}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Subnet Mask</TableCell>
            <TableCell>
              <Input
                onChange={(e) => {
                  setLog((prev) => [
                    ...prev,
                    "Subnet Mask has been set to " + e.target.value,
                  ]);
                }}
                className="w-[180px] lg:w-[300px]"
                defaultValue={"255.255.255.0.0"}
              />
            </TableCell>
          </TableRow>
          <TableRow className="mx-auto">
            <TableCell>DHCP Type</TableCell>
            <TableCell>
              <Select
                onValueChange={(e) => {
                  setLog((prev) => [...prev, "DHCP Type has been set to " + e]);
                }}
                defaultValue="Server"
              >
                <SelectTrigger className="w-[180px] lg:w-[300px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Server">Server</SelectItem>
                  <SelectItem value="Disabled">Disabled</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Start IP</TableCell>
            <TableCell>
              <Input
                onChange={(e) => {
                  setLog((prev) => [
                    ...prev,
                    "Start IP has been set to " + e.target.value,
                  ]);
                }}
                className="w-[180px] lg:w-[300px]"
                defaultValue={"192.168.1.2"}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>End IP</TableCell>
            <TableCell>
              <Input
                onChange={(e) => {
                  setLog((prev) => [
                    ...prev,
                    "End IP has been set to " + e.target.value,
                  ]);
                }}
                className="w-[180px] lg:w-[300px]"
                defaultValue={"192.168.1.3"}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>DHCP Subnet Mask</TableCell>
            <TableCell>
              <Input
                onChange={(e) => {
                  setLog((prev) => [
                    ...prev,
                    "DHCP Subnet Mask has been set to " + e.target.value,
                  ]);
                }}
                className="w-[180px] lg:w-[300px]"
                defaultValue={"255.255.255.255"}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>DHCP Primary DNS</TableCell>
            <TableCell>
              <Input
                onChange={(e) => {
                  setLog((prev) => [
                    ...prev,
                    "DHCP Primary DNS has been set to " + e.target.value,
                  ]);
                }}
                className="w-[180px] lg:w-[300px]"
                defaultValue={"8.8.8.8"}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>DHCP Secondary DNS</TableCell>
            <TableCell>
              <Input
                onChange={(e) => {
                  setLog((prev) => [
                    ...prev,
                    "DHCP Secondary DNS has been set to " + e.target.value,
                  ]);
                }}
                className="w-[180px] lg:w-[300px]"
                defaultValue={"8.8.4.4"}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
export const NetworkBroadbandSettings = ({
  setLog,
}: {
  setLog: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  return (
    <>
      <Table className="container mx-auto border lg:border-t-0">
        <TableBody>
          <TableRow>
            <TableCell>WAN</TableCell>
            <TableCell>
              <Select
                onValueChange={(e) => {
                  setLog((prev) => [...prev, "WAN has been set to " + e]);
                }}
                defaultValue="Enabled"
              >
                <SelectTrigger className="w-[180px] lg:w-[300px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Enabled">Enable</SelectItem>
                  <SelectItem value="Disabled">Disable</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Connection Type</TableCell>
            <TableCell>
              <Select
                defaultValue="Route"
                onValueChange={(e) => {
                  setLog((prev) => [
                    ...prev,
                    "Connection Type has been set to " + e,
                  ]);
                }}
              >
                <SelectTrigger className="w-[180px] lg:w-[300px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Route">Route</SelectItem>
                  <SelectItem value="Bridge">Bridge</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>VLAN ID</TableCell>
            <TableCell className="flex items-center gap-2">
              <Input
                onChange={(e) => {
                  setLog((prev) => [
                    ...prev,
                    "VLAN ID has been set to " + e.target.value,
                  ]);
                }}
                pattern="[1-9]|[1-9][0-9]{1,3}|[1-3][0-9]{1,3}|4[0-8][0-9]{1,2}|409[0-4]"
                className="lg:w-[300px]"
                defaultValue={"1"}
              />
              <span className="text-muted-foreground">Between 1 and 4094</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Priority</TableCell>
            <TableCell className="flex items-center gap-2">
              <Input
                onChange={(e) => {
                  setLog((prev) => [
                    ...prev,
                    "Priority has been set to " + e.target.value,
                  ]);
                }}
                pattern="[0-7]"
                className="lg:w-[300px]"
                defaultValue={"0"}
              />
              <span className="text-muted-foreground">Between 0 and 7</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>NAT</TableCell>
            <TableCell>
              <Select
                defaultValue="Enabled"
                onValueChange={(e) => {
                  setLog((prev) => [...prev, "NAT has been set to " + e]);
                }}
              >
                <SelectTrigger className="w-[180px] lg:w-[300px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Enabled">Enable</SelectItem>
                  <SelectItem value="Disabled">Disable</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>DNS Relay</TableCell>
            <TableCell>
              <Select
                defaultValue="Enabled"
                onValueChange={(e) => {
                  setLog((prev) => [...prev, "DNS Relay has been set to " + e]);
                }}
              >
                <SelectTrigger className="w-[180px] lg:w-[300px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Enabled">Enable</SelectItem>
                  <SelectItem value="Disabled">Disable</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>IP Mode</TableCell>
            <TableCell>
              <Select
                onValueChange={(e) => {
                  setLog((prev) => [...prev, "IP Mode has been set to " + e]);
                }}
                defaultValue="Dynamic"
              >
                <SelectTrigger className="w-[180px] lg:w-[300px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Dynamic">Dynamic</SelectItem>
                  <SelectItem value="Static">Static</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>WAN IP Mode</TableCell>
            <TableCell>
              <Select
                defaultValue="Dynamic"
                onValueChange={(e) => {
                  setLog((prev) => [
                    ...prev,
                    "WAN IP Mode has been set to " + e,
                  ]);
                }}
              >
                <SelectTrigger className="w-[180px] lg:w-[300px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Dynamic">Dynamic</SelectItem>
                  <SelectItem value="Static">Static</SelectItem>
                  <SelectItem value="PPPoE">PPPoE</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
export const NetworkRemoteManagement = ({
  setLog,
}: {
  setLog: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [remote, setRemote] = useState<boolean>(true);
  return (
    <>
      <Table className="container mx-auto border lg:border-t-0">
        <TableBody>
          <TableRow>
            <TableCell>Remote Server</TableCell>
            <TableCell className="flex items-center gap-2 text-muted-foreground">
              <ServerOff strokeWidth={1.6} />
              <Switch
                checked={remote}
                onCheckedChange={(e) => {
                  setRemote(e);
                  toast.info(
                    "Remote Server has been turned " + (e ? "on" : "off")
                  );
                }}
              />
              <Server strokeWidth={1.6} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>URL</TableCell>
            <TableCell>
              <Input
                disabled={!remote}
                onChange={(e) => {
                  setLog((prev) => [
                    ...prev,
                    "Remote Server URL has been set to " + e.target.value,
                  ]);
                }}
                className="w-[180px] lg:w-[300px]"
                defaultValue={"127.0.0.1/8080"}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>
              <Input
                disabled={!remote}
                onChange={(e) => {
                  setLog((prev) => [
                    ...prev,
                    "Remote Server Username has been set to " + e.target.value,
                  ]);
                }}
                className="w-[180px] lg:w-[300px]"
                defaultValue={"admin"}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Password</TableCell>
            <TableCell>
              <Input
                disabled={!remote}
                onChange={(e) => {
                  setLog((prev) => [
                    ...prev,
                    "Remote Server Password has been set to " + e.target.value,
                  ]);
                }}
                className="w-[180px] lg:w-[300px]"
                defaultValue={"admin"}
                type="password"
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
export const NetworkVoIPSettings = ({
  setLog,
}: {
  setLog: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  return (
    <Table className="container mx-auto border lg:border-t-0">
      <TableBody>
        <TableRow>
          <TableCell>VoIP Mode</TableCell>
          <TableCell>
            <Select
              onValueChange={(e) => {
                setLog((prev) => [...prev, "VoIP Mode has been set to " + e]);
              }}
              defaultValue="SIP"
            >
              <SelectTrigger className="w-[180px] lg:w-[300px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SIP">SIP</SelectItem>
                <SelectItem value="H.248">H.248</SelectItem>
              </SelectContent>
            </Select>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Port 1</TableCell>
          <TableCell>
            <Select
              defaultValue="Enabled"
              onValueChange={(e) => {
                setLog((prev) => [...prev, "Port 1 has been set to " + e]);
              }}
            >
              <SelectTrigger className="w-[180px] lg:w-[300px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Enabled">Enable</SelectItem>
                <SelectItem value="Disabled">Disable</SelectItem>
              </SelectContent>
            </Select>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>IP</TableCell>
          <TableCell>
            <Input
              onChange={(e) => {
                setLog((prev) => [
                  ...prev,
                  "IP has been set to " + e.target.value,
                ]);
              }}
              className="w-[180px] lg:w-[300px]"
              defaultValue={"127.0.0.1"}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>NetMask</TableCell>
          <TableCell>
            <Input
              onChange={(e) => {
                setLog((prev) => [
                  ...prev,
                  "NetMask has been set to " + e.target.value,
                ]);
              }}
              className="w-[180px] lg:w-[300px]"
              defaultValue={"255.0.0.0"}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Local Port</TableCell>
          <TableCell>
            <Input
              className="w-[180px] lg:w-[300px]"
              defaultValue={"5060"}
              onChange={(e) => {
                setLog((prev) => [
                  ...prev,
                  "Local Port has been set to " + e.target.value,
                ]);
              }}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
