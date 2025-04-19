import { Navigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const session = useSession();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
