import { auth } from "@/auth";
import SignUpForm from "./Form";
import { redirect } from "next/navigation";

export default async function SignUp() {

    const session = await auth()

    if (session?.user) {
        redirect("/")
    }
    
    return (
        <div>
            <SignUpForm />
        </div>
    )
}
