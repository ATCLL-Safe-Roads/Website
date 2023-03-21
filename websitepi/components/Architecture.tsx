import React from "react";
type Props = {};

export default function Architecture({ }: Props) {
  return (
    <div className="h-screen flex items-center justify-center text-center overflow-hidden text-7xl">
      <img src="diagram.png" alt="Architecture" className="w-3/4" />
    </div>
  );
}
