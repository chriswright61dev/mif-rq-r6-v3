import { getVenueDetailData } from "../getDataFunctions/getVenueDetailData";
import { useQuery } from "react-query";
function useVenueDetails(id) {
  return useQuery(["venueDetails", id], getVenueDetailData);
}

export default useVenueDetails;
