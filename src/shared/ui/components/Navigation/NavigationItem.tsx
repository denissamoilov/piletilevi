import React from "react";
import Link from "next/link";
import cn from "classnames";

type NavigationItemProps = {
  href: string;
  label: string;
  isActive?: boolean;
};

export const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  label,
  isActive,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "relative after:absolute after:bottom-0 after:inset-x-0 after:h-1 after:rounded-full pb-[1.625rem]",
        "hover:text-primary-900 hover:after:bg-primary-100",
        isActive &&
          "text-primary-900 after:bg-primary-900 hover:after:bg-primary-900"
      )}
    >
      {label}
    </Link>
  );
};
