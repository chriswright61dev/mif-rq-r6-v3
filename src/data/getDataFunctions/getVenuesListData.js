import { getData } from "../getData";

export async function getVenuesListData() {
  //venue list Data

  const url =
    "https://www.levenshulmecommunityfestival.co.uk/api_mif_venues_list/";
  return getData(url);
}
