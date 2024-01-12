"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";

export default function Status() {
  return (
    <div className="flex flex-col gap-2">
      <Button variant={"ghost"} className="justify-start rounded-none">
        Device Information
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            Wireless Status
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Wireless Status</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>WiFi Clients List</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>STA Status</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>WiFi Coverage</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant={"ghost"} className="justify-start rounded-none">
        WAN Status
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            LAN Status
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>LAN Status</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Ethernet Ports</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>DHCP Clients List</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant={"ghost"} className="justify-start rounded-none">
        Optical Info
      </Button>
      <Button variant={"ghost"} className="justify-start rounded-none">
        VoIP Status
      </Button>
    </div>
  );
}
