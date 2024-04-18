import React, { useEffect } from "react";
import { RoutesComponent } from "./routes";
import { useDispatch } from "react-redux";
import { fetchHomePageProducts } from "./redux/slices";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomePageProducts());
  }, []);
  return (
    <div>
      <RoutesComponent />
    </div>
  );
};

export default App;
