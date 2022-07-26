// just show news data

import "./FrontPage.css";
// import svglogo from "../../images/miflogo.svg";
import FrontPageNewsDataCard from "../../components/card/FrontPage/FrontPageNewsDataCard";
// import AdvertCards from "../../components/card/AdvertCard/AdvertCards";
function FrontPage({ introText, latestNews, adverts }) {
  return (
    <>
      {/* <AdvertCards adverts={adverts} />4<p>{introText}</p> */}
      <div className="front_page__cards">
        <FrontPageNewsDataCard latestNews={latestNews} />
      </div>
    </>
  );
}

export default FrontPage;