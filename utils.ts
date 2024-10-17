const addZero = (num: number) => (num < 10 ? `0${num}` : num);

export const getStringDate = (isoDate: string) => {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${addZero(day)}.${addZero(month)}.${year}`;
};
import { FieldError, Merge } from "react-hook-form";

export const getCheckboxGroupError = (
  data: Merge<FieldError, (FieldError | undefined)[]> | undefined
) => {
  if (!data) return "";
  if (Array.isArray(data)) {
    return data.map((d) => (d ? d.message : "")).join("; ");
  }
  return String(data.message);
};
