import styles from "../styles/Home.module.css";
import {useCallback, useEffect} from "react";
import {useRouter} from "next/router";

export default function Login() {
  const router = useRouter();
  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    router.push("/dashboard");
  }, []);

  useEffect(() => {
    // Prefetch the dashboard page
    // router.prefetch("/dashboard");
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Load non-prefetched page</button>
    </form>
  );
}
