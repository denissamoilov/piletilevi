import React from "react";

type UserProps = {
  name: string;
};

export const User: React.FC<UserProps> = ({ name }) => {
  return <span className="text-sm">{name}</span>;
};
