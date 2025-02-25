import React from "react";

interface DominoButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function DominoButton({ onClick, children }: DominoButtonProps) {
  return (
    <button
      className="w-1/5 h-10 border-black bg-blue-300 rounded-md hover:bg-blue-500 text-base"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
