import qs from "qs";
import backendApiUrl from "./backendApiUrl";
import axios from "axios";

export async function fetchStrapi(path, urlParams = {}, options = {}) {
  const mergedOptions = {
    headers: {
      "content-type": "application/json",
    },
    ...options,
  };

  const queryString = qs.stringify(urlParams);
  const requestUrl = `${backendApiUrl(
    `${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  const response = await axios.get(requestUrl, mergedOptions);

  if (response.statusText != "ok") {
    try {
      console.error(response.statusText);
    } catch {
      throw new Error(`An error occured please try again`);
    }
  }
  const data = await response.data;
  return data;
}
