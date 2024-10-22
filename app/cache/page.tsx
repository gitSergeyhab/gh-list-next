import { CountAction } from "./_components/count-action";
import { getCount } from "./fetchCount";

export default async function Cache() {
  const count = await getCount();
  return (
    <section className="cache-section">
      <p>Закэшированное значение, не меняется при перезагрузке</p>
      <p className="cache-section__count">{count}</p>
      <CountAction />
    </section>
  );
}
