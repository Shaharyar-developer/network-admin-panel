"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useQueryState } from "nuqs";

import { Button } from "../ui/button";

export default function Status() {
  const [_, setMode] = useQueryState("mode");
  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={() => setMode("status-device-info")}
        variant={"ghost"}
        className="justify-start rounded-none"
      >
        Device Information
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            Wireless Status
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setMode("status-wireless-status")}>
            Wireless Status
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setMode("status-wifi-clients-list")}>
            WiFi Clients List
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setMode("status-sta-status")}>
            STA Status
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setMode("status-wifi-coverage")}>
            WiFi Coverage
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        onClick={() => setMode("status-wan-status")}
        variant={"ghost"}
        className="justify-start rounded-none"
      >
        WAN Status
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            LAN Status
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setMode("status-lan-status")}>
            LAN Status
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setMode("status-ethernet-ports")}>
            Ethernet Ports
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setMode("status-dhcp-clients-list")}>
            DHCP Clients List
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        onClick={() => setMode("status-optical-info")}
        variant={"ghost"}
        className="justify-start rounded-none"
      >
        Optical Info
      </Button>
      <Button
        onClick={() => setMode("status-voip-status")}
        variant={"ghost"}
        className="justify-start rounded-none"
      >
        VoIP Status
      </Button>
    </div>
  );
}
