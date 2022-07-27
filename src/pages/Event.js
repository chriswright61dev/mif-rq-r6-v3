import EventDetails from "../modules/Events/EventDetails/EventDetails";
function Event() {
  return (
    <div className="content">
      <h1 className="page_h1">A Manchester Irish Festival Event </h1>
      <EventDetails />

      {/* once we have old data add this link */}
      {/* <h4 className="content-text-link">
          <Link to="/venuesyear">Events from Previous Years</Link>
        </h4> */}
    </div>
  );
}

export default Event;
