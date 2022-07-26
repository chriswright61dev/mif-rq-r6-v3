import useBasic from "../data/queryHooks/useBasic";
import useNews from "../data/queryHooks/useNews";
function Home() {
  const basicFestivalData = useBasic();
  const allNewsData = useNews();
  // gets all the news -  cap at 20 on the api
  if (basicFestivalData.isLoading || allNewsData.isLoading) {
    return null;
    // maybe add placeholder component with text to read until data is loaded
  } else {
    const festData = basicFestivalData.data[0]; //only 1 row
    const newsData = allNewsData.data;
    console.log("festData", festData);
    console.log("newsData", newsData);
    return <div>Home</div>;
  }
}

export default Home;
