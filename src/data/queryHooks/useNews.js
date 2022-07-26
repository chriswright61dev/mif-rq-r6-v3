import { getNewsListData } from "../getDataFunctions/getNewsListData";
import { useQuery } from "react-query";
export default function useBasic() {
  return useQuery(["news"], getNewsListData);
}
