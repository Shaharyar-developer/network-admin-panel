"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import { useQueryState } from "nuqs";
import React from "react";

export default function Device(): React.JSX.Element {
  const [_, setMode] = useQueryState("mode");

  return (
    <div className="flex flex-col gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            Account Management
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => setMode("device-account-management-user")}
          >
            User Account
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setMode("device-account-management-admin")}
          >
            Maintenance Account
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            Device Management
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setMode("device-restore")}>
            Restore
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setMode("device-restore-all")}>
            Restore All
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setMode("device-local-upgrade")}>
            Local Upgrade
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setMode("device-config-backup")}>
            Config Backup
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setMode("device-ftp-server")}>
            FTP Server
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setMode("device-reboot")}>
            Device Reboot
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setMode("device-ntp-checktime")}>
            NTP Checktime
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setMode("device-catv-settings")}>
            CATV Settings
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        onClick={() => setMode("device-log")}
        variant={"ghost"}
        className="justify-start rounded-none"
      >
        Log
      </Button>
    </div>
  );
}
      