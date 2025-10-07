"use client";
import { signOut } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LogOutButton = () => {
  const router = useRouter();
  return (
    <div>
      <span
        onClick={() =>
          signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/sign-in");
                toast.success("Logged out successfully");
              },
            },
          })
        }
      >
        Log Out
      </span>
    </div>
  );
};

export default LogOutButton;
