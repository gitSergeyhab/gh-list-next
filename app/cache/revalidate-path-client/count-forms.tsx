import { revalidatePath } from "next/cache";
import { postCountAction } from "../fetchCount";
import { CountAction } from "@/types";
import { ActionSubmit } from "./action-submit";

export const CountForms = () => {

    const postActionWithRevalidate = async (action: CountAction) => {
        'use server'; 
        await postCountAction(action)
        revalidatePath('/cache/revalidate-path-client');
    }
    const increment = async () => { 
        'use server'; 
        await postActionWithRevalidate('increment');
    }
    const decrement = async () => { 
        'use server'; 
        await postActionWithRevalidate('decrement');
    }
    const reset = async () => { 
        'use server'; 
        await postActionWithRevalidate('reset');
    }

  return (
    <div className="counter-action">
       <form className="form-counter" action={decrement}>
        <ActionSubmit>-</ActionSubmit>
       </form>
       <form className="form-counter" action={reset}>
        <ActionSubmit>Reset</ActionSubmit>
       </form>
       <form className="form-counter" action={increment}>
        <ActionSubmit>+</ActionSubmit>
       </form>
    </div>
  );
};
