import {
  Users,
  UserPlus,
  List,
  Settings,
  LayoutDashboardIcon,
} from "lucide-react";

export interface MenuItem {
  id: number;
  name: string;
  path: string;
  icon?: React.ComponentType;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    id: 2,
    name: "Clients",
    path: "/client",
    icon: Users,
    // children: [
    //   {
    //     id: 3,
    //     name: "Add User",
    //     path: "/users/add",
    //     icon: UserPlus,
    //   },
    //   {
    //     id: 4,
    //     name: "User List",
    //     path: "/users/list",
    //     icon: List,
    //   },
    // ],
  },
  {
    id: 5,
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];








 export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@aa.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
]
