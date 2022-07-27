import VenueDetails from "../modules/Venues/VenueDetails/VenueDetails";
import PageTop from "../components/utility/PageTop/PageTop";
function Venue({ eventListData }) {
  return (
    <div className="content">
      <div className="container">
        <PageTop />
        <h1 className="page_h1">A Manchester Irish Festival Venue</h1>
        <VenueDetails eventListData={eventListData} />
      </div>
    </div>
  );
}

export default Venue;
