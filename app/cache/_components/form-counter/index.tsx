import { FC, PropsWithChildren } from "react";
export interface FormCounterProps extends PropsWithChildren {
    action: () => void;
    submitTitle?: string;
}
export const FormCounter: FC<FormCounterProps> = ({action, children, submitTitle = "Submit"}) => {
    return (
        <form className="form-counter" action={action}>
            {children}
            <button type="submit" className="counter-action__btn">
                {submitTitle}
            </button>
        </form>
    )
}