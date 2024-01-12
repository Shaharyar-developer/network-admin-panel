"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";

export default function Network() {
  return (
    <div className="flex flex-col gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            WLAN Settings
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Basic</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Advanced</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>WiFi Control</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>WPS</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            LAN Settings
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>LAN Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>DHCP MAC Bindings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant={"ghost"} className="justify-start rounded-none">
        Broadband Settings
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            Remote Management
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>ACS Server</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            Authentication
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>OLT Authentication</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            VoIP Settings
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Key Parameters</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Basic</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Advanced</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Dial And Timeout</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Coding</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
