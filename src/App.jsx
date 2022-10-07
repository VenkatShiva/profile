import { useEffect, useState } from "react";

import { AppMain } from "./app-styles";
import InitialLoader from "./sections/Loader";
import Navbar from "./sections/Navbar";
import Content from "./sections/content";

function AppContainer() {
  return (
    <AppMain>
      <Navbar />
      <Content />
    </AppMain>
  );
}

function App() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 2050);
  }, []);
  return showLoader ? <InitialLoader /> : <AppContainer />;
}

export default App;
