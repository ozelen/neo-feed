module.exports = {
  "globals": {
    "ts-jest": {
      "tsConfigFile": "tsconfig.test.json"
    },
    "API_PREFIX": "/fake-api/v1"
  },
  "moduleNameMapper": {
    "\\.(css|scss|png|svg)$": "identity-obj-proxy",
    "^shared(.*)$": "<rootDir>/src/features/shared$1",
  },
  "transform": {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "testMatch": [
    "<rootDir>/src/**/*.spec.{ts,tsx}",
    "<rootDir>/src/**/*.test.{ts,tsx}",
  ],
  "collectCoverage": true,
  "coverageReporters": ["text-summary"],
  "collectCoverageFrom": [
    "**/*.{ts,tsx}", "!**/node_modules/**", "!**/*.d.ts", "!**/index.{ts,tsx}",
    "!**/*.spec.{ts,tsx}",
    "!**/*.test.{ts,tsx}",
    "!src/actions/*.{ts,tsx}",
    "!src/constants/*.{ts,tsx}",
    "!src/services/history.ts", "!src/services/notification.ts",
    "!src/i18n.ts", "!src/store/*.ts"
  ],
  "silent": true,
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json"
  ],
  "setupFiles": ["babel-polyfill", "jest-localstorage-mock", "<rootDir>/jest.setup.js"]
};
