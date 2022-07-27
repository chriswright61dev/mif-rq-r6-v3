import useBasic from "../data/queryHooks/useBasic";
import useEvent from "../data/queryHooks/useEvent";
import useNews from "../data/queryHooks/useNews";
import useVenue from "../data/queryHooks/useVenue";
import useAdverts from "../data/queryHooks/useAdverts";
import FrontPage from "../modules/FrontPage/FrontPage";
import PageTop from "../components/utility/PageTop/PageTop";

function Home() {
  const thisyear = new Date().getFullYear();
  const basicFestivalData = useBasic();
  const allVenueData = useVenue(); // gets this years data
  const allEventData = useEvent(); // gets this years data
  const allNewsData = useNews(); // gets all the news -  cap at 20 on the api
  const allAdvertsData = useAdverts();
  if (
    basicFestivalData.isLoading ||
    allVenueData.isLoading ||
    allEventData.isLoading ||
    allNewsData.isLoading
  ) {
    return null;
  } else {
    const festData = basicFestivalData.data[0];
    // const eventData = allEventData.data;
    const newsData = allNewsData.data;
    // const venueData = allVenueData.data;
    const advertsData = allAdvertsData.data;
    let NewsPostSize = 10;
    const latestNews = newsData.slice(0, NewsPostSize);
    // const eventHighlights = eventData.filter(
    //   (event) => event.event_highlight === "highlight"
    // );

    // const venueHighlights = venueData.filter(
    //   (venue) => venue.venue_highlight === "highlight"
    // );
    return (
      <div className="content">
        <PageTop />
        <h1 className="page_h1">The Manchester Irish Festival {thisyear}</h1>

        <FrontPage
          news_bg={festData.news_header_bg_image}
          // event_bg={festData.event_header_bg_image}
          // venue_bg={festData.venue_header_bg_image}
          introText={festData.festival_intro}
          // event_highlights={eventHighlights}
          latestNews={latestNews}
          // venueHighlights={venueHighlights}
          adverts={advertsData}
        />
      </div>
    );
  }
}
export default Home;
