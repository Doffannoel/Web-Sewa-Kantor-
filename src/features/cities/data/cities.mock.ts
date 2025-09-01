import { City } from "../types/city.types";

const cityNames = [
  "Jakarta Pusat",
  "Jakarta Selatan",
  "Bandung",
  "Surabaya",
  "Yogyakarta",
  "Medan",
  "Semarang",
  "Makassar",
  "Bekasi",
  "Depok",
];

export const cities: City[] = cityNames.map((name, i) => {
  // const officesCount = officeSpaces.filter((space) => space.location === name).length;

  return {
    id: i + 1,
    name,
    officesCount: 1,
    image: `/assets/images/thumbnails/thumbnails-${(i % 3) + 1}.png`, // Generate image path based on index (random)
    slug: name.toLowerCase().replace(/ /g, "-"),
  };
});
