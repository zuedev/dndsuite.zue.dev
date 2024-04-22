import { signOut } from "@/auth";

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="bg-[red] hover:bg-[orange] px-2 py-1">
        Logout
      </button>
    </form>
  );
}
