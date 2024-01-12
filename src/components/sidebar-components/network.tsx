"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import { useQueryState } from "nuqs";

export default function Network() {
  const [_, setMode] = useQueryState("mode");
  return (
    <div className="flex flex-col gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            WLAN Settings
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setMode("network-wlan-basic")}>
            Basic
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setMode("network-wlan-advanced")}>
            Advanced
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setMode("network-wlan-wifi-control")}
          >
            WiFi Control
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setMode("network-wlan-wps")}>
            WPS
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            LAN Settings
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setMode("network-lan-settings")}>
            LAN Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setMode("network-dhcp-mac-bindings")}
          >
            DHCP MAC Bindings
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        onClick={() => setMode("network-broadband-settings")}
        variant={"ghost"}
        className="justify-start rounded-none"
      >
        Broadband Settings
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            onClick={() => setMode("network-remote-management")}
            variant={"ghost"}
            className="justify-start rounded-none"
          >
            Remote Management
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setMode("network-acs-server")}>
            ACS Server
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            Authentication
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => setMode("network-olt-authentication")}
          >
            OLT Authentication
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            onClick={() => setMode("network-voip-settings")}
            variant={"ghost"}
            className="justify-start rounded-none"
          >
            VoIP Settings
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setMode("network-key-parameters")}>
            Key Parameters
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setMode("network-voip-basic")}>
            Basic
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setMode("network-voip-advanced")}>
            Advanced
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setMode("network-voip-dial-and-timeout")}
          >
            Dial And Timeout
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setMode("network-voip-coding")}>
            Coding
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
