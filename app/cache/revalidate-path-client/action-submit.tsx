'use client'

import { FC, PropsWithChildren } from "react"
import { useFormStatus } from "react-dom"

export const ActionSubmit: FC<PropsWithChildren> = ({  children }) => {
    const {pending} = useFormStatus()

    return (
        <button type="submit" disabled={pending} className="counter-action__btn">
            {children}
        </button>
    )
}

