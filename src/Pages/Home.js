import Intro from "../Components/Intro";
import NavigationBar from "../Components/NavigationBar";
import Sendal from "../Components/Sendal";
import Sepatu from "../Components/Sepatu";
import "../Style/landingPage.css";


const Home = () => {
  return (
    <div>
      {/* Intro Start */}
      <div className="myBg border">
        <NavigationBar />
        <Intro />
      </div>
      {/* Intro End */}

      {/* Sepatu Start */}
      <div
        className="spt"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Sepatu />
      </div>
      {/* Sepatu End */}

      {/* Sendal Start */}
      <div
        className="sdl"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Sendal />
      </div>
      {/* sendal End */}
    </div>
  );
};

export default Home;
