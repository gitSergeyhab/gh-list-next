import { CountAction } from "../_components/count-action";
import { getCount } from "../fetchCount";

export const fetchCache = "default-no-store";

export default async function NoCache() {
  const count = await getCount();
  return (
    <section className="cache-section">
      <p>Обновляется после любой перезагрузки </p>
      <p className="cache-section__count">{count}</p>
      <CountAction />
    </section>
  );
}
