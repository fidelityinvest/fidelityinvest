import axios from "axios";

const fetchCountries = async () => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  return data;
};

export default fetchCountries;
