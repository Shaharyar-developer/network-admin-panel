"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";

export default function Device() {
  return (
    <div className="flex flex-col gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            Account Management
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>User Account</DropdownMenuItem>
          <DropdownMenuItem>Maintainance Account</DropdownMenuItem>
          <DropdownMenuItem></DropdownMenuItem>
          <DropdownMenuItem></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            Device Management
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Restore</DropdownMenuItem>
          <DropdownMenuItem>Restore All</DropdownMenuItem>
          <DropdownMenuItem>Local Upgrade</DropdownMenuItem>
          <DropdownMenuItem>Config Backup</DropdownMenuItem>
          <DropdownMenuItem>FTP Server</DropdownMenuItem>
          <DropdownMenuItem>Device Reboot</DropdownMenuItem>
          <DropdownMenuItem>NTP Checktime</DropdownMenuItem>
          <DropdownMenuItem>CATV Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant={"ghost"} className="justify-start rounded-none">
        Log
      </Button>
    </div>
  );
}
