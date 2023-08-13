import { BsFillGrid1X2Fill } from "react-icons/bs"
import { TbUsers, TbLogout } from "react-icons/tb";
import { LiaUsersSolid } from "react-icons/lia"

export const sidebardata = [
    {
        title: "Overview",
        path: "/overview",
        icon: <BsFillGrid1X2Fill />
    },
    {
        title: "Users",
        path: "/users",
        icon: <TbUsers />
    },
    {
        title: "Admins",
        path: "/admins",
        icon: <LiaUsersSolid size="1.2rem"/>
    },
    {
        title: "Logout",
        path: "/login",
        icon: <TbLogout size="1.2rem"/>
    },
];