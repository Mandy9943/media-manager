export const formatSecondsTime = (seconds?: number): string => {
  if (!seconds) {
    return "-";
  }
  if (seconds < 60) {
    return `${seconds}`;
  } else {
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const remainingSecondsFinal = remainingSeconds % 60;

    let formattedTime = "";
    if (hours > 0) {
      formattedTime += hours.toString().padStart(2, "0") + ":";
    }
    formattedTime +=
      minutes.toString().padStart(2, "0") +
      ":" +
      remainingSecondsFinal.toString().padStart(2, "0");

    return formattedTime;
  }
};

export const formatNumber = (number: number): string => {
  const numberString = number.toLocaleString();

  return numberString;
};
