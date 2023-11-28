import { useLocation, useNavigate } from "react-router-dom";
import Banner from "../Components/MenuUtama/Banner";
import Community from "../Components/MenuUtama/Community";
import FAQ from "../Components/MenuUtama/FAQ";
import Footer from "../Components/MenuUtama/Footer";
import Menu from "../Components/MenuUtama/Menu";
import Navigasi from "../Components/MenuUtama/Navigasi";
import VideoTips from "../Components/MenuUtama/VideoTips";

const MenuUtama = () => {
  const location = useLocation();

  return (
    <div>
      <div className="relative">
        <div className="w-full h-40 bg-amber-400 absolute top-0 -z-10"></div>
        <div className="p-5">
          <Navigasi inputs={location.state} />
          <Banner />
        </div>
      </div>
      <Menu inputs={location.state} />
      <VideoTips />
      <FAQ />
      <Community />
      <Footer />
    </div>
  );
};
export default MenuUtama;
