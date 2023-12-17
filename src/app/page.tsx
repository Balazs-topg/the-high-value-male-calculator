"use client";

import { useState } from "react";

import { Button, Slider } from "@nextui-org/react";

export default function Home() {
  const [age, setAge] = useState([18, 80]);
  const [maxBFProcent, setMaximumBFProcent] = useState(30);
  const [minIncome, setMinIncome] = useState(30000);
  return (
    <>
      <nav className="sticky top-0 bg-slate-700 shadow-md">
        <div className="mx-auto max-w-2xl p-4 text-xl font-semibold">
          The high value male calculator
        </div>
      </nav>
      <div className="sticky top-0 mx-auto max-w-xl space-y-8 p-6 pt-8">
        <Slider
          defaultValue={age}
          label="Age"
          showTooltip
          minValue={18}
          maxValue={80}
        />
        <Slider
          defaultValue={maxBFProcent}
          label="Maximum Bodyfat Procentage"
          showTooltip
          minValue={8}
          maxValue={40}
        />
        <Slider
          formatOptions={{ style: "currency", currency: "USD" }}
          defaultValue={minIncome}
          label="Minimum Income"
          showTooltip
          step={1000}
          minValue={0}
          maxValue={500000}
        />
        <div className=" mx-auto max-w-xs">
          <Button variant="shadow" color="primary" fullWidth>
            Calculate
          </Button>
        </div>
      </div>
    </>
  );
}
