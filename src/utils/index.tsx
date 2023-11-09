const alcoholABV: Record<string, number> = {
  Vodka: 45,
  Rum: 50,
  Whiskey: 50,
  Tequila: 46.5,
  Gin: 43.5,
  Brandy: 47.5,
  Bourbon: 50,
  Wine: 12.5,
  Beer: 7.5,
  Cider: 6,
  Sherry: 17.5,
  Champagne: 12,
  Liqueurs: 22.5,
};

export const getAlcoholABV = (alcohol: string): number => {
  if (alcohol in alcoholABV) {
    return alcoholABV[alcohol];
  } else {
    return 0;
  }
};

export const timeSinceConsumption = (date: string): number => {
  const startTime: Date = new Date(date);
  const currentTime: Date = new Date();
  const timeDifference: number = currentTime.getTime() - startTime.getTime();

  // Calculate time difference in seconds
  const timeDifferenceInSeconds: number = timeDifference / 1000;

  return timeDifferenceInSeconds;
};

export const calculateAlcoholSaturation = (
  abvDrink: number,
  patronWeight: number,
  timeSinceConsumption: number
) => {
  const alcoholMetabolismRate = 20.0; //percent per hour
  const alcoholConsumed =
    abvDrink / (patronWeight * timeSinceConsumption * alcoholMetabolismRate);
  return alcoholConsumed;
};
