import {
  Wrench,
  ScanLine,
  CircleDot,
  Disc3,
  BatteryCharging,
  Snowflake,
  Car,
  Zap,
  Bike,
  Sailboat,
  Truck,
  ShieldCheck,
  Star,
  ClipboardCheck,
  Clock,
  type LucideProps,
} from "lucide-react";

const map = {
  Wrench,
  ScanLine,
  CircleDot,
  Disc3,
  BatteryCharging,
  Snowflake,
  Car,
  Zap,
  Bike,
  Sailboat,
  Truck,
  ShieldCheck,
  Star,
  ClipboardCheck,
  Clock,
} as const;

export type IconName = keyof typeof map;

/** Renders a Lucide icon by name (used for data-driven service/vehicle lists). */
export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name];
  return <Cmp {...props} />;
}
