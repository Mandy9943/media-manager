import { formatNumber, formatSecondsTime } from "./functions";

describe("formatSecondsTime function", () => {
  test("should format time to hh:mm:ss when greater than 1 hour", () => {
    expect(formatSecondsTime(3660)).toBe("01:01:00");
    expect(formatSecondsTime(7250)).toBe("02:00:50");
    expect(formatSecondsTime(10800)).toBe("03:00:00");
  });

  test("should format time to mm:ss when less than 1 hour but greater than 1 minute", () => {
    expect(formatSecondsTime(75)).toBe("01:15");
    expect(formatSecondsTime(150)).toBe("02:30");
    expect(formatSecondsTime(599)).toBe("09:59");
  });

  test("should format time to ss when less than 1 minute", () => {
    expect(formatSecondsTime(30)).toBe("30");
    expect(formatSecondsTime(45)).toBe("45");
    expect(formatSecondsTime(59)).toBe("59");
  });

  test("should format time to - when time is 0 or undefined", () => {
    expect(formatSecondsTime(0)).toBe("-");
    expect(formatSecondsTime(undefined)).toBe("-");
  });
});

describe("formatNumber function", () => {
  test("should format number with commas for thousands", () => {
    expect(formatNumber(1000)).toBe("1,000");
    expect(formatNumber(22000)).toBe("22,000");
    expect(formatNumber(45600054)).toBe("45,600,054");
    expect(formatNumber(1234567890)).toBe("1,234,567,890");
  });

  test("should not format numbers less than 1000", () => {
    expect(formatNumber(1)).toBe("1");
    expect(formatNumber(999)).toBe("999");
    expect(formatNumber(999.99)).toBe("999.99");
    expect(formatNumber(999999.99)).toBe("999,999.99");
  });
});
