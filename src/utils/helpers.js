export const dynamicHeader = (pathname) => {
    if (pathname === "/overview") {
        return "Overview";
    } else if (pathname === "/users") {
        return "Users";
    } else if (pathname === "/admins") {
        return "Admins"
    }
};

export const dynamicLocation = (location, path) => {
    return location?.pathname === path;
};

export const capitalizeFirstLetter = (str) => {
    return str?.charAt(0)?.toUpperCase() + str?.slice(1);
}; 