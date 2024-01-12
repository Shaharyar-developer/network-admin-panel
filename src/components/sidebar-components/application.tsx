"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";

export default function Application() {
  return (
    <div className="flex flex-col gap-2">
      <Button variant={"ghost"} className="justify-start rounded-none">
        DDNS
      </Button>

      <Button variant={"ghost"} className="justify-start rounded-none">
        Port Forwarding
      </Button>
      <Button variant={"ghost"} className="justify-start rounded-none">
        NAT
      </Button>

      <Button variant={"ghost"} className="justify-start rounded-none">
        UPNP
      </Button>

      <Button variant={"ghost"} className="justify-start rounded-none">
        DMZ
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            Diagnosis
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Ping Diagnosis</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Tracert Diagnosis</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
