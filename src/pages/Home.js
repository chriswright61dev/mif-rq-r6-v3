import useBasic from "../data/queryHooks/useBasic";

function Home() {
  const basicFestivalData = useBasic();
  if (basicFestivalData.isLoading) {
    return null;
    // maybe add placeholder component with text to read until data is loaded
  } else {
    const festData = basicFestivalData.data[0]; //only 1 row
    console.log("festData", festData);
    return <div>Home</div>;
  }
}

export default Home;
