export type FirewallRule = {
  source: string;
  destination: string;
  protocol: "http" | "https";
};
export type PortForwardingRule = {
  name: string;
  IP: string;
  PublicPort: string;
  PrivatePort: string;
  Protocol: "TCP" | "UDP";
};
export type User = {
  name: string;
  password: string;
  role: "admin" | "user";
};
