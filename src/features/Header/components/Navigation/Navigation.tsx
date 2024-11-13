import React from "react";
import { NavigationItem } from "./NavigationItem";
const Navigation: React.FC = () => {
  return (
    <nav className="flex items-end h-full space-x-11 font-bold self-end">
      <NavigationItem href="/" label="Back office" isActive={true} />
      <NavigationItem href="/bo" label="Back office" />
      <NavigationItem href="/reports" label="Reports" />
      <NavigationItem href="/help" label="Help" />
    </nav>
  );
};

export default Navigation;
