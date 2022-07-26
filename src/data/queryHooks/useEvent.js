import { getEventListData } from "../getDataFunctions/getEventListData";
import { useQuery } from "react-query";
export default function useEvent() {
  return useQuery(["event"], getEventListData);
}
