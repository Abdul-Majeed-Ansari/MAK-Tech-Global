import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`container p-4 md:p-8 mx-auto md:px-9 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

