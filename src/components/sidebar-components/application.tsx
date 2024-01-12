"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import { useQueryState } from "nuqs";

export default function Application() {
  const [_, setMode] = useQueryState("mode");

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={() => setMode("application-ddns")}
        variant={"ghost"}
        className="justify-start rounded-none"
      >
        DDNS
      </Button>

      <Button
        onClick={() => setMode("application-port-forwarding")}
        variant={"ghost"}
        className="justify-start rounded-none"
      >
        Port Forwarding
      </Button>

      <Button
        onClick={() => setMode("application-nat")}
        variant={"ghost"}
        className="justify-start rounded-none"
      >
        NAT
      </Button>

      <Button
        onClick={() => setMode("application-upnp")}
        variant={"ghost"}
        className="justify-start rounded-none"
      >
        UPNP
      </Button>

      <Button
        onClick={() => setMode("application-dmz")}
        variant={"ghost"}
        className="justify-start rounded-none"
      >
        DMZ
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            Diagnosis
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => setMode("application-ping-diagnosis")}
          >
            Ping Diagnosis
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setMode("application-tracert-diagnosis")}
          >
            Tracert Diagnosis
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
