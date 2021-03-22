// note to test prefetching you must use production build only..
// for quick reference like how to test if pre-fetching of a page works or not
// just go to below links:
// https://web.dev/route-prefetching-in-nextjs/
// https://nextjs.org/docs/api-reference/next/router#routerprefetch
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
    router.prefetch("/dashboard"); // here it preloads the component for /dashboard, yikes!!
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Load prefetched page</button>
    </form>
  );
}
