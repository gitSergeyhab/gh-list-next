import { CountAction } from "../_components/count-action";
import { getCount } from "../fetchCount";

export const revalidate = 10;

export default async function Revalidate() {
  const count = await getCount();

  return (
    <section className="cache-section">
      <p>Ревалидируется через 10 с </p>
      <p className="cache-section__count">{count}</p>
      <CountAction />
    </section>
  );
}
