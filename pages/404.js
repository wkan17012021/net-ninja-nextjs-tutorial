import Link from "next/link";
import styles from "../../ninja-list/styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

// useEffect Hook to fire the anon fnc when the component mounts aka when the user first sees the component. The empty angle bracket (dependency array) as an argument means only fire once when the component mounts and not again even if state changes.
// useRouter Hook to access methods to actually redirect the user

const NotFound = () => {
  const router = useRouter(); // router variable now stores an obj (from invoking userRouter fnc) which gives us access to useful routing methods to mimic conventional navigation on a website

  useEffect(() => {
    setTimeout(() => {
      // router.go(1); redirect the user forward in browser history
      // router.go(-1); redirect the user backward in browser history
      router.push("/"); // redirect the user back to homepage
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="not-found">
      <h1 className={styles.title}>Ooops...</h1>
      <h2>Page not found...</h2>
      <p>
        Go back to the <Link href="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
