import { ModuleProps } from "@/components/dashboard/modules/moduleProps";

export enum ModuleType {
  dateTime = "dateTime",
}

export interface LayoutConfig extends ModuleProps {
  type: ModuleType | null;
}
