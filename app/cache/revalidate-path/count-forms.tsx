
import { revalidatePath } from "next/cache";
import { FormCounter } from "../_components/form-counter";
import { postCountAction } from "../fetchCount";
import { CountAction } from "@/types";

export const CountForms = () => {

    const postActionWithRevalidate = async (action: CountAction) => {
        'use server'; 
        await postCountAction(action)
        revalidatePath('/cache/revalidate-path');
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
      <FormCounter action={decrement} submitTitle="-" />
      <FormCounter action={reset} submitTitle="Reset" />
      <FormCounter action={increment} submitTitle="+" />
    </div>
  );
};
