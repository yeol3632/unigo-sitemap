import SignUp from "@/components/page-components/AuthPage/SignUp/SignUp";
import { Suspense } from "react";

export default function SignInPage() {
	return (
		<Suspense fallback={<div></div>}>
			<SignUp />
		</Suspense>
	);
}
