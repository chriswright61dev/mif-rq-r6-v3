import { getAdverts } from "../getDataFunctions/getAdverts";
import { useQuery } from "react-query";
export default function useAdverts() {
  return useQuery(["adverts"], getAdverts);
}
