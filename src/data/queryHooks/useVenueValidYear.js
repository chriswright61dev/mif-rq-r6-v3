import { getVenuesValidDataYear } from "../getDataFunctions/getVenuesValidDataYear";
import { useQuery } from "react-query";
export default function useVenueValidYear(year) {
  return useQuery(["current_venue", year], getVenuesValidDataYear);
}
