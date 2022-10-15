import { useEffect, useState } from "react";

import { AppMain } from "./app-styles";
import InitialLoader from "./sections/Loader";
import Navbar from "./sections/Navbar";
import Content from "./sections/Content";
import Socials from "./sections/Socials";
import VerticalEmail from "./sections/Email";

function AppContainer() {
  return (
    <AppMain>
      <Navbar />
      <Content />
      <Socials />
      <VerticalEmail />
    </AppMain>
  );
}

function App() {
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false); 
    }, 2350);
  }, []);
  return showLoader ? <InitialLoader /> : <AppContainer />;
}

export default App;
