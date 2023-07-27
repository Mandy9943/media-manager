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

export const formatDate = (date: Date): string => {
  const utcYear = date.getUTCFullYear();
  const utcMonth = date.getUTCMonth() + 1; // Sumar 1 ya que los meses van de 0 a 11
  const utcDay = date.getUTCDate();

  // Formatear la fecha en una cadena en el formato "DD/MM/YYYY"
  const formattedDate = `${utcDay.toString().padStart(2, "0")}/${utcMonth
    .toString()
    .padStart(2, "0")}/${utcYear}`;

  return formattedDate;
};
