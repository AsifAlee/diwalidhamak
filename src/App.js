import "./App.scss";
import Header from "./components/Header";
import { useContext, useEffect, useState } from "react";
import TabButton from "./components/TabButtons";
import DiwaliMela from "./pages/DiwaliMela";
import DecorateHouse from "./pages/DecorateHouse";
import EventGifting from "./pages/EventGifting";
import Guide from "./popups/Guide";
import { AppContext } from "./AppContext";
import ScrollToTopButton from "./components/ScrollToTop";

function App() {
  const [mainTabs, setMainTabs] = useState({
    diwaliMela: true,
    decorateHouse: false,
    gifting: false,
  });
  const { user } = useContext(AppContext);

  const [showGuide, setShowGuide] = useState(false);

  const toggleGuide = () => {
    setShowGuide((prevState) => !prevState);
  };

  // useEffect(() => {
  //   if (user) {
  //     alert(user.token);
  //   }
  // }, [user]);

  const toggleMainTabs = (name) => {
    if (name === "diwalimela") {
      setMainTabs({
        diwaliMela: true,
        decorateHouse: false,
        gifting: false,
      });
    } else if (name === "decorate") {
      setMainTabs({
        diwaliMela: false,
        decorateHouse: true,
        gifting: false,
      });
    }
    if (name === "gifting") {
      setMainTabs({
        diwaliMela: false,
        decorateHouse: false,
        gifting: true,
      });
    }
  };
  return (
    <div className="App">
      <Header />
      <button className="guide-btn" onClick={toggleGuide}></button>
      <div className="main-tabs">
        <TabButton
          handleClick={toggleMainTabs}
          name="diwalimela"
          btnImg={mainTabs.diwaliMela ? "diwali-sel" : "diwali-un"}
          arrowImage={false}
          showArrowImg={false}
        />
        <TabButton
          handleClick={toggleMainTabs}
          name="decorate"
          btnImg={mainTabs.decorateHouse ? "decorate-sel" : "decorate-un"}
          arrowImage={false}
          showArrowImg={false}
        />

        <TabButton
          handleClick={toggleMainTabs}
          name="gifting"
          btnImg={mainTabs.gifting ? "gifting-sel" : "gifting-un"}
          arrowImage={false}
          showArrowImg={false}
        />
      </div>

      {mainTabs.diwaliMela ? (
        <DiwaliMela />
      ) : mainTabs.decorateHouse ? (
        <DecorateHouse />
      ) : (
        <EventGifting />
      )}
      <p className="rights">All rights reserved by streamkar</p>
      <div className="footer">
        <ScrollToTopButton />
      </div>
      {showGuide && <Guide popUpHandeler={toggleGuide} />}
    </div>
  );
}

export default App;
