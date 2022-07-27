// import useNewsDetails from "../../../data/queryHooks/useNewsDetails";
import useNewsDetails from "../../../data/queryHooks/useNewsDetails";
import { useParams } from "react-router-dom";
import NewsDetail from "./NewsDetail/NewsDetail";

function NewsDetails() {
  let { id } = useParams();
  const newsDetails = useNewsDetails(id);

  if (newsDetails.status !== "success") {
    return null;
  } else {
    return <NewsDetail data={newsDetails.data[0]} />;
  }
}
export default NewsDetails;
