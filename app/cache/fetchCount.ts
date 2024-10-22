import { CountAction } from "@/types";

export const getCount = async () => {
  const res = await fetch("https://next-counter-murex.vercel.app/api/counter");

  if (!res.ok) {
    throw new Error("Failed to fetch Count");
  }

  const data = await res.json();
  return data.count;
};

export async function postCountAction(action: CountAction) {
  const res = await fetch("https://next-counter-murex.vercel.app/api/counter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action }),
  });

  if (!res.ok) {
    throw new Error("Failed to post Count Action");
  }

  const data = await res.json();
  return data.count;
}
