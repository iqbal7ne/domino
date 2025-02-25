import React from "react";

interface DominoCardProps {
  a: number;
  b: number;
}

export default function DominoCard({ a, b }: DominoCardProps) {
  return (
    <div className="border border-black w-6 text-center">
      {a}
      <br />
      -
      <br />
      {b}
    </div>
  );
}
