import {
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHeader,
  TableHead,
} from "../ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Switch } from "@/components/ui/switch";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { ShieldBan, Shield, Plus } from "lucide-react";
import { useRef, useState } from "react";
import type { FirewallRule } from "@/lib/types";
import { toast } from "sonner";

type protocol = "http" | "https";

export const SecurityFirewallControl = ({
  firewallRules,
  setFirewallRules,
}: {
  firewallRules: FirewallRule[];
  setFirewallRules: React.Dispatch<React.SetStateAction<FirewallRule[]>>;
}) => {
  const [firewall, setFirewall] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const sourceRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);
  const [protocol, setProtocol] = useState<protocol>("https");
  const handleSubmit = () => {
    if (sourceRef.current?.value && destinationRef.current?.value && protocol) {
      setFirewallRules([
        ...firewallRules,
        {
          source: sourceRef.current?.value,
          destination: destinationRef.current?.value,
          protocol: protocol,
        },
      ]);
      toast.success("Added new firewall rule.");
      setOpen(false);
    } else {
      toast.error("Please fill in all the fields.");
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <Table className="container mx-auto border border-t-0">
        <TableBody>
          <TableRow>
            <TableCell>Firewall</TableCell>
            <TableCell className="flex items-center gap-2 text-muted-foreground">
              <ShieldBan />
              <Switch
                checked={firewall}
                onCheckedChange={(e) => setFirewall(e)}
              />
              <Shield />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Filter Mode</TableCell>
            <TableCell className="flex items-center gap-3">
              <Select disabled={!firewall} defaultValue="Blacklist">
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Blacklist">Blacklist</SelectItem>
                  <SelectItem value="Whitelist">Whitelist</SelectItem>
                </SelectContent>
              </Select>
              <Button disabled={!firewall} onClick={() => setOpen(true)}>
                <Plus /> Add
              </Button>
              <AlertDialog open={open}>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This will add a new rule to the firewall.
                    </AlertDialogDescription>
                    <Input ref={sourceRef} placeholder="Source" />
                    <Input ref={destinationRef} placeholder="Destination" />
                    <Select
                      onValueChange={(e) => setProtocol(e as protocol)}
                      defaultValue="https"
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="http">http</SelectItem>
                        <SelectItem value="https">https</SelectItem>
                      </SelectContent>
                    </Select>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setOpen(false)}>
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleSubmit}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table className="container mx-auto border">
        <TableHeader>
          <TableRow>
            <TableHead>Source</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Protocol</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {firewallRules.map((rule, idx) => (
            <TableRow key={idx}>
              <TableCell>{rule.source}</TableCell>
              <TableCell>{rule.destination}</TableCell>
              <TableCell className="uppercase">{rule.protocol}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export const SecurityDDOSControl = () => {
  return (
    <Table className="container mx-auto border border-t-0">
      <TableBody>
        <TableRow>
          <TableCell>DDOS</TableCell>
          <TableCell className="flex items-center gap-2 text-muted-foreground">
            <ShieldBan />
            <Switch defaultChecked />
            <Shield />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
export const SecurityHTTPSControl = () => {
  return (
    <Table className="container mx-auto border border-t-0">
      <TableBody>
        <TableRow>
          <TableCell>HTTPS</TableCell>
          <TableCell className="flex items-center gap-2 text-muted-foreground">
            <ShieldBan />
            <Switch defaultChecked />
            <Shield />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
