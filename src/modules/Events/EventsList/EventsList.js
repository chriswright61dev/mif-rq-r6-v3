import EventCard from "../../../components/card/EventCard/EventCard";
import { hasDatePassed } from "../../../utilities/hasDatePassed";
import "./EventsList.css";

function EventsList({ eventListData }) {
  return (
    <div className="events">
      {eventListData.map((event) => {
        return (
          <EventCard
            old={hasDatePassed(event.event_date_time)}
            key={event.id}
            id={event.id}
            link={"events"}
            title={event.event_title}
            name={event.event_name}
            date={event.event_date_time}
            venue={event.event_venue}
            venue_id={event.event_venue_id}
            introduction={event.event_introduction}
            time={event.event_time_text}
            image={event.event_image_1}
          />
        );
      })}
    </div>
  );
}

export default EventsList;
