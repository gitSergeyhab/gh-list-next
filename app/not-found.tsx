import { NoContent } from "@/shared/no-content";
import Link from "next/link";

export default function NotFound() {
    return (
    <NoContent title="Page not found">
        <Link href="/">Go to main page</Link>
    </NoContent>
    );
}