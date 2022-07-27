import NewsList from "../modules/News/NewsList/NewsList";
import useNews from "../data/queryHooks/useNews";
import PageTop from "../components/utility/PageTop/PageTop";
function News() {
  const allNewsData = useNews();
  if (allNewsData.isLoading) {
    return null;
  } else {
    return (
      <div className="content">
        <PageTop />
        <h1 className="page_h1">
          Latest News about the Manchester Irish Festival
        </h1>
        <NewsList newsListData={allNewsData.data} />
      </div>
    );
  }
}

export default News;
