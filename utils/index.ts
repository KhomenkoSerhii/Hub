import { CarProps, FilterProps } from "@/types";

export async function getCars() {
  // filters: FilterProps
  //   const { manufacturer, year, model, limit, fuel } = filters;
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "X-RapidAPI-Key": "bf82171d01mshc90fc46ca1b1ec7p146f61jsneb745a36d109",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    // `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    url,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}

export const calculateCarRent = (cityMpg: number, year: number): string => {
  const basePricePerDay: number = 50; // Base rental price per day in dollars
  const mileageFactor: number = 0.1; // Additional rate per mile driven
  const ageFactor: number = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate: number = cityMpg * mileageFactor;
  const ageRate: number = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay: number = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(2);
};

// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//     const url = new URL("https://cdn.imagin.studio/getimage");
//     const { make, model, year } = car;

//     url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
//     url.searchParams.append('make', make);
//     url.searchParams.append('modelFamily', model.split(" ")[0]);
//     url.searchParams.append('zoomType', 'fullscreen');
//     url.searchParams.append('modelYear', `${year}`);
//     // url.searchParams.append('zoomLevel', zoomLevel);
//     url.searchParams.append('angle', `${angle}`);

//     return `${url}`;
//   }
export const generateCarImageUrl = (car: CarProps, angle?: string): string => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
  );
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);

  if (angle) {
    url.searchParams.append("angle", angle);
  }

  return url.toString();
};

// export const generateImagesFromPexels = async () => {
//   const url = new URL("https://api.pexels.com/v1/search");
//   url.searchParams.append("query", "cars");
//   url.searchParams.append("per_page", "10");

//   const headers: HeadersInit = {
//     Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY || "",
//   };

//   const response = await fetch(url.toString(), {
//     headers: headers,
//   });

//   const result = await response.json();

//   return result;
// };
