import NewsDetails from "../modules/News/NewsDetails/NewsDetails";
import PageTop from "../components/utility/PageTop/PageTop";
function NewsItem() {
  return (
    <div className="content">
      <PageTop />
      <h1 className="page_h1">Levenshulme Festival News</h1>
      <NewsDetails />
    </div>
  );
}

export default NewsItem;
