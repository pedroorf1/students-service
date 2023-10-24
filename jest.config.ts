import type { Config } from "jest";

export default async (): Promise<Config> => {
  return {
    verbose: true,
  };
};

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  transform: {
    "^.+\\.{ts|tsx}?$": [
      "ts-jest",
      {
        babel: true,
        tsConfig: "tsconfig.json",
      },
    ],
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
