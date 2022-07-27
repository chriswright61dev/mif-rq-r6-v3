import useBasic from "../data/queryHooks/useBasic";
import useEvent from "../data/queryHooks/useEvent";
import useNews from "../data/queryHooks/useNews";
import useVenue from "../data/queryHooks/useVenue";
import useAdverts from "../data/queryHooks/useAdverts";
import FrontPage from "../modules/FrontPage/FrontPage";
import PageTop from "../components/utility/PageTop/PageTop";
import { Link } from "react-router-dom";
function Home() {
  const thisyear = new Date().getFullYear();
  const basicFestivalData = useBasic();
  const allNewsData = useNews(); // gets all the news -  cap at 20 on the api
  const allAdvertsData = useAdverts();
  if (basicFestivalData.isLoading || allNewsData.isLoading) {
    return null;
  } else {
    const festData = basicFestivalData.data[0];
    // const eventData = allEventData.data;
    const newsData = allNewsData.data;
    // const venueData = allVenueData.data;
    const advertsData = allAdvertsData.data;
    let NewsPostSize = 6;
    const latestNews = newsData.slice(0, NewsPostSize);

    return (
      <div className="content">
        <PageTop />
        <h1 className="page_h1">The Manchester Irish Festival {thisyear}</h1>
        <FrontPage
          news_bg={festData.news_header_bg_image}
          introText={festData.festival_intro}
          latestNews={latestNews}
          adverts={advertsData}
        />
        <h4 className="content-text-link">
          <Link to="/news">More News</Link>
        </h4>
        ;
      </div>
    );
  }
}
export default Home;
