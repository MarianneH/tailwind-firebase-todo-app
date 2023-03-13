export function convertMsToGermanDate(seconds: number) {
  const date = new Date(seconds * 1000);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  const germanDate = `${day}.${month}.${year}`;

  return germanDate;
}
