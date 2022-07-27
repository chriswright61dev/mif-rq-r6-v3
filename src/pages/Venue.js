import VenueDetails from "../modules/Venues/VenueDetails/VenueDetails";
import PageTop from "../components/utility/PageTop/PageTop";
function Venue({ eventListData }) {
  return (
    <div className="content">
      <div className="container">
        <PageTop />
        <h1 className="page_h1">A Levenshulme Festival Venue</h1>
        <VenueDetails eventListData={eventListData} />
      </div>

      {/* <aside>
        <h4>Other Venues</h4>
        add a list of other venues for quick switching?
      </aside> */}
    </div>
  );
}

export default Venue;
