import { auth } from "@/auth";
import SignInForm from "./Form";
import { redirect } from "next/navigation";

export default async function SignIn() {

    const session = await auth();

    if (session?.user) {
        redirect("/")
    }

    return (
        <div>
            <SignInForm />
        </div>
    )
}
