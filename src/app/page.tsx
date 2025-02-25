"use client";

import React, { useState, useMemo } from "react";
import DominoCard from "../components/DominoCard";
import DominoButton from "@/components/DominoButton";

type Domino = [number, number];

const initialDominoes: Domino[] = [
  [6, 1],
  [4, 3],
  [5, 1],
  [3, 4],
  [1, 1],
  [3, 4],
  [1, 2],
];

export default function Home() {
  const [dominoes, setDominoes] = useState<Domino[]>(initialDominoes);
  const [removeNumber, setRemoveNumber] = useState<string>("");

  const doubleNumbersCount = useMemo(() => {
    return dominoes.filter(([a, b]) => a === b).length;
  }, [dominoes]);

  const sortAscending = () => {
    const sorted = [...dominoes].sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
    setDominoes(sorted);
  };

  const sortDescending = () => {
    const sorted = [...dominoes].sort((a, b) => b[0] + b[1] - (a[0] + a[1]));
    setDominoes(sorted);
  };

  const flipCards = () => {
    const flipped = dominoes.map(([a, b]) => [b, a] as Domino);
    setDominoes(flipped);
  };

  const removeDuplicates = () => {
    const unique = dominoes.filter(
      (card, index, self) =>
        index === self.findIndex((c) => c[0] === card[0] && c[1] === card[1])
    );
    setDominoes(unique);
  };

  const resetData = () => {
    setDominoes(initialDominoes);
  };

  const removeByNumber = () => {
    const filtered = dominoes.filter(
      ([a, b]) => a + b !== parseInt(removeNumber)
    );
    setDominoes(filtered);
    setRemoveNumber("");
  };

  return (
    <div className="place-self-center w-[50%]">
      <h1 className="font-bold text-4xl">Domino</h1>
      <div className="border border-black rounded-md bg-gray-200 p-2 mb-1">
        <strong>Source:</strong> {JSON.stringify(dominoes)}
      </div>
      <div className="border border-black rounded-md bg-gray-200 p-2 mb-1">
        <strong>Double Numbers:</strong> {doubleNumbersCount}
      </div>

      <div className="flex gap-3 py-3">
        {dominoes.map(([a, b], index) => (
          <DominoCard key={index} a={a} b={b} />
        ))}
      </div>

      <div className="flex items-center gap-3 mb-3">
        <DominoButton onClick={sortAscending}>Sort (ASC)</DominoButton>
        <DominoButton onClick={sortDescending}>Sort (DESC)</DominoButton>
        <DominoButton onClick={flipCards}>Flip</DominoButton>
        <DominoButton onClick={removeDuplicates}>Remove Duplicate</DominoButton>
        <DominoButton onClick={resetData}>Reset</DominoButton>
      </div>
      <div className="flex">
        <input
          className="w-full border border-black mb-2 rounded-md h-10"
          type="number"
          placeholder="Input Number"
          value={removeNumber}
          onChange={(e) => setRemoveNumber(e.target.value)}
        />
      </div>
      <DominoButton onClick={removeByNumber}>Remove</DominoButton>
    </div>
  );
}
