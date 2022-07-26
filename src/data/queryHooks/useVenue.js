import { getVenuesListData } from "../getDataFunctions/getVenuesListData";
import { useQuery } from "react-query";
export default function useBasic() {
  return useQuery(["venue"], getVenuesListData);
}
