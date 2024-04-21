import { SignIn } from "@clerk/nextjs";

import "./page.css";

export default function LoginPage() {
  return <SignIn path="/login" />;
}
