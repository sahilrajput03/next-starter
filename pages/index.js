import styles from "../styles/Home.module.css";
import {useCallback, useEffect} from "react";
import {useRouter} from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/1")}>Go to page 1</button>
      <button onClick={() => router.push("/2")}>Go to page 2</button>
    </div>
  );
};

export default Home;
