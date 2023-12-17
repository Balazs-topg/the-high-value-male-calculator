"use client";

import { useMemo, useState } from "react";

import integrate from "@/utils/integrate";
import normalDistributionEquation from "@/utils/normalDistributionEquation";

import { Button, Slider } from "@nextui-org/react";

export default function Home() {
  const [age, setAge] = useState([18, 80]);
  const ageDistrobution = normalDistributionEquation(38.1, 20);
  const ageIntergral = useMemo(
    () => integrate(ageDistrobution, age[0], age[1]),
    [age],
  );

  const [maxBFProcent, setMaximumBFProcent] = useState(30);
  const fatDistrobution = normalDistributionEquation(28, 7.5);
  const fatIntergral = useMemo(
    () => integrate(fatDistrobution, 0, maxBFProcent),
    [maxBFProcent],
  );

  const [minIncome, setMinIncome] = useState(30000);
  const incomeDistrobution = normalDistributionEquation(61681, 50000);
  const incomeIntergral = useMemo(
    () => integrate(incomeDistrobution, minIncome, 50000000),
    [minIncome],
  );

  const finalProcentage = ageIntergral * fatIntergral * incomeIntergral;

  return (
    <>
      <nav className="sticky top-0 bg-slate-700 shadow-md">
        <div className="mx-auto max-w-2xl p-4 text-center text-xl font-semibold">
          The high value male calculator
        </div>
      </nav>
      <div className="sticky top-0 mx-auto max-w-xl space-y-8 p-6 pt-8">
        <Slider
          //@ts-ignore
          onChange={(e: number[]) => setAge([e[0], e[1]])}
          defaultValue={age}
          label="Age"
          showTooltip
          minValue={18}
          maxValue={80}
        />
        <Slider
          //@ts-ignore
          onChange={(e: number) => setMaximumBFProcent(e)}
          defaultValue={maxBFProcent}
          label="Maximum Bodyfat Procentage"
          showTooltip
          minValue={8}
          maxValue={40}
        />
        <Slider
          //@ts-ignore
          onChange={(e: number) => setMinIncome(e)}
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
        <div className=" text-center text-2xl">
          {Math.round(finalProcentage * 100000) / 1000}%
        </div>
      </div>
    </>
  );
}
