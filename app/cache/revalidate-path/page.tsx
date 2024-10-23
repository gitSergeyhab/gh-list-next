import { getCount } from "../fetchCount";
import { CountForms } from "./count-forms";

export default async function RevalidatePath() {
  const count = await getCount();

  return (
    <section className="cache-section">
      <p>Ревалидируется сразу после действий на ЭТОЙ странице</p>
      <p className="cache-section__count">{count}</p>
      <CountForms />
    </section>
  );
}
