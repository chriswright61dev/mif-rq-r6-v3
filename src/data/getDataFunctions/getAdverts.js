import { getData } from "../getData";
export async function getAdverts() {
  const url = "https://www.levenshulmecommunityfestival.co.uk/api_mif_ads";

  return getData(url);
}
