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

export default function Security() {
  const [_, setMode] = useQueryState("mode");
  return (
    <div className="flex flex-col gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            Firewall
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => setMode("security-firewall-control")}
          >
            Firewall Control
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setMode("security-ipv4-filtering")}>
            IPv4 Filtering
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setMode("security-ipv6-filtering")}>
            IPv6 Filtering
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setMode("security-url-filtering")}>
            URL Filtering
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setMode("security-anti-port-scan")}>
            Anti Port Scan
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setMode("security-mac-filtering")}>
            MAC Filtering
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setMode("security-ipv6-mac-filtering")}
          >
            IPv6 MAC Filtering
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant={"ghost"}
        className="justify-start rounded-none"
        onClick={() => setMode("security-ddos")}
      >
        DDOS
      </Button>

      <Button
        variant={"ghost"}
        className="justify-start rounded-none"
        onClick={() => setMode("security-https")}
      >
        HTTPS
      </Button>
    </div>
  );
}
