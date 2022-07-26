import { getEventDetailData } from "../getDataFunctions/getEventDetailData";
import { useQuery } from "react-query";

function useEventDetails(id) {
  return useQuery(["eventDetails", id], getEventDetailData);
}

export default useEventDetails;
