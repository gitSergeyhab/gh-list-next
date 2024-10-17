import { FC, PropsWithChildren } from "react";
import "./style.css";

export interface NoContentProps extends PropsWithChildren {
    title: string;
}

export const NoContent: FC<NoContentProps> = ({title, children}) => {
    return (
        <div className="no-content">
            <h2 className="no-content__title">{title}</h2>
            {children}
        </div>
    )

}