export const fetchCities = () => {
  const url = process.env.NEXT_PUBLIC_CITIES_API_URL;
  const key = process.env.NEXT_PUBLIC_XRAPID_API_KEY as string;
  const host = process.env.NEXT_PUBLIC_XRAPID_API_HOST as string;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": host,
    },
  };

  const cities = async (search: string) => {
    try {
      const res = await fetch(`${url}/cities?namePrefix=${search}`, options);
      const data = await res.json();

      console.log("data", data.data);

      return data.data;
    } catch (error: any) {
      console.log("error", error);
    }
  };

  return {
    cities,
  };
};
