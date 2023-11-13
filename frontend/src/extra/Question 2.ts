export const rebalanceIndex = (
  assets: string[],
  caps: number[],
  marketCaps: number[],
  totalFundSize: number
): number[] => {
  const totalMarketCap: number = marketCaps.reduce((acc, cap) => acc + cap, 0);

  const allocationPercentages: number[] = marketCaps.map(
    (cap) => cap / totalMarketCap
  );

  const desiredAllocations: number[] = caps.map((cap) => cap * totalFundSize);

  const excessAmounts: number[] = allocationPercentages.map(
    (allocation, index) =>
      Math.max(0, allocation * totalFundSize - desiredAllocations[index])
  );

  const totalExcessAmount: number = excessAmounts.reduce(
    (acc, amount) => acc + amount,
    0
  );

  for (let i = 0; i < excessAmounts.length; i++) {
    if (excessAmounts[i] > 0) {
      allocationPercentages[i] += excessAmounts[i] / totalExcessAmount;
    }
  }

  const finalAllocations: number[] = allocationPercentages.map(
    (allocation) => allocation * totalFundSize
  );

  for (let i = 0; i < finalAllocations.length; i++) {
    if (finalAllocations[i] > caps[i]) {
      finalAllocations[i] = caps[i];
    }
  }

  return finalAllocations;
};
