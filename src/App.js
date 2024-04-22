import React, { useEffect } from "react";
import styles from "../src/app.css";
import { RoutesComponent } from "./routes";
import { useDispatch } from "react-redux";
import { fetchHomePageProducts } from "./redux/slices";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomePageProducts());
  }, []);
  return (
    <div className={styles.container}>
      <RoutesComponent />
    </div>
  );
};

export default App;
