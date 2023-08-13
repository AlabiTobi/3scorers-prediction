export const dynamicHeader = (pathname) => {
    if (pathname === "/overview") {
        return "Overview";
    } else if (pathname === "/users") {
        return "Users";
    } else if (pathname === "/admins") {
        return "Admins"
    }
};