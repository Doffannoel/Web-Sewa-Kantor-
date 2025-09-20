import { OfficeSpace } from "../types/officeSpace.types";

export const officeSpaces: OfficeSpace[] = [
  {
    id: 1,
    title: "GoWork Jakarta",
    slug: "gowork",
    price: 18560000,
    duration: "20 days",
    location: "Jakarta Pusat",
    rating: 4.5,
    address: "Jl. Angga No. 23, Jakarta Pusat",
    image: "/assets/images/thumbnails/thumbnails-1.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-2.png",
      "/assets/images/thumbnails/thumbnail-details-3.png",
    ],
    tags: ["Popular"],
    about:
      "Whether you need quiet private space away from distractions or collaborate in person...",
    features: ["Global Event", "Privacy", "Free Move", "Extra Snacks", ""],
    salesContacts: [
      {
        name: "Kresna1",
        role: "Chied of Sales and Marketing",
        photo: "/assets/images/photos/photo-1.png",
      },
      {
        name: "Kresna2",
        role: "Chied of Sales and Marketing",
        photo: "/assets/images/photos/photo-1.png",
      },
    ],
    isFullyBooked: true,
    connection: "",
  },
  {
    id: 2,
    title: "Budi Innovation Hub",
    slug: "budi-innovation-hub",
    price: 15000000,
    duration: "15 days",
    location: "Bandung",
    rating: 4.2,
    address: "Jl. Budi No. 45, Bandung",
    image: "/assets/images/thumbnails/thumbnails-2.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-4.png",
      "/assets/images/thumbnails/thumbnail-details-5.png",
    ],
    tags: ["New", "Cheaper"],
    about:
      "A modern workspace designed for startups and creative teams to innovate and grow.",
    features: [
      "High-Speed Internet",
      "Meeting Rooms",
      "Free Coffee",
      "Parking",
    ],
    salesContacts: [
      {
        name: "Edbert",
        role: "Project Sales Manager",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
    isFullyBooked: false,
    connection: "",
  },
  {
    id: 3,
    title: "Intiland Tower Surabaya",
    slug: "Intiland Tower Surabaya",
    price: 21000000,
    duration: "30 days",
    location: "Surabaya",
    rating: 4.8,
    address: "Jl. Citra No. 12, Surabaya",
    image: "/assets/images/thumbnails/thumbnails-3.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-6.png",
      "/assets/images/thumbnails/thumbnail-details-7.png",
    ],
    tags: ["Recommended"],
    about:
      "Premium lounge for business professionals with top-notch amenities and services.",
    features: ["24/7 Access", "Conference Hall", "Catering", "Gym"],
    salesContacts: [
      {
        name: "Doffannoel1",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-3.png",
      },
      {
        name: "Doffannoel2",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-3.png",
      },
      {
        name: "Doffannoel3",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-3.png",
      },
    ],
    isFullyBooked: false,
    connection: "",
  },
];
