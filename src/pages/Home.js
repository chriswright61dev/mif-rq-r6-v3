// lets simplify this page - just adverts news and logo?
import FrontPage from "../modules/FrontPage/FrontPage";

// data hooks
import useBasic from "../data/queryHooks/useBasic";
// import useEvent from "../data/queryHooks/useEvent";
import useNews from "../data/queryHooks/useNews";
// import useVenue from "../data/queryHooks/useVenue";
import useAdverts from "../data/queryHooks/useAdverts";
// other components

function Home() {
  const thisyear = new Date().getFullYear();
  const basicFestivalData = useBasic();

  const allNewsData = useNews();
  // gets all the news -  cap at 20 on the api
  const allAdvertsData = useAdverts();

  if (basicFestivalData.isLoading || allNewsData.isLoading) {
    return null;
    // maybe add placeholder component with text to read until data is loaded
  } else {
    const festData = basicFestivalData.data[0]; //only 1 row
    const newsData = allNewsData.data;
    const advertsData = allAdvertsData.data;
    let NewsPostSize = 9;
    const latestNews = newsData.slice(0, NewsPostSize);

    return (
      <div className="content">
        <h1 className="page_h1">The Manchester Irish Festival {thisyear}</h1>

        <FrontPage
          introText={festData.festival_intro}
          latestNews={latestNews}
          adverts={advertsData}
        />
      </div>
    );
  }
}

export default Home;
