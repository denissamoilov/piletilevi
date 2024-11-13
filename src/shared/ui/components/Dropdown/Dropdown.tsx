import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Dropdown: React.FC = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="px-4 py-2 bg-primary text-white rounded">
        Menu
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="bg-white shadow-lg rounded p-2">
        <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100">
          Item 1
        </DropdownMenu.Item>
        <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100">
          Item 2
        </DropdownMenu.Item>
        <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100">
          Item 3
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
