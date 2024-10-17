'use client'

import { NoContent } from "@/shared/no-content";

export default function Error ({ error }: { error: Error }) {
    console.error(error);
    return <NoContent title="Ошибка загрузки данных">
        <p>{error.message}</p>
    </NoContent>;
}