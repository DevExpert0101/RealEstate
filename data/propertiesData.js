import grid_five from "/public/images/property/grid-five.webp";
import grid_four from "/public/images/property/grid-four.webp";
import grid_one from "/public/images/property/grid-one.webp";
import grid_six from "/public/images/property/grid-six.webp";
import grid_three from "/public/images/property/grid-three.webp";
import grid_two from "/public/images/property/grid-two.webp";

const propertiesData = [
  {
    id: "23as72&#",
    city: "Park Cihelní - Ostrava, Czech Republic",
    location: "Park Cihelní - Ostrava, Czech Republic",
    totalInvest: 17,
    investAmount: "7,94,196",
    investPer: 14.73,
    img: grid_one,
    annualReturn: {
      regular: 2.5,
      bonus: 4,
    },
    type: "Commercial",
    investLink: "/property/{id}",
    description: "Welcome to Park Cihelni, our flagship property offering on the vibrant streets of Ostrava, Czech Republic. Nestled across five dynamic phases, this premium development boasts 262 luxurious flats, creating a total gross floor area of 21,000 square meters. It's an irresistible opportunity for astute investors seeking an entry into Central Europe's burgeoning real estate market."
  },
  {
    id: "2as72&#",
    city: "San Francisco, CA",
    location: "3335 21 St, San Francisco",
    totalInvest: 179,
    investAmount: "2,94,196",
    investPer: 54.73,
    img: grid_two,
    annualReturn: {
      regular: 5.5,
      bonus: 4,
    },
    type: "Commercial",
    investLink: "/property/{id}",
  },
  {
    id: "8as7d2&#",
    city: "San Diego",
    location: "356 La Jolla, San Diego",
    totalInvest: 199,
    investAmount: "8,94,196",
    investPer: 64.73,
    img: grid_three,
    annualReturn: {
      regular: 3.5,
      bonus: 2,
    },
    type: "Commercial",
    investLink: "/property/{id}",
  },
  {
    id: "8asw472&#",
    city: "San Diego",
    location: "90071, Grand Avenue, San Diego",
    totalInvest: 59,
    investAmount: "8,94,196",
    investPer: 54.73,
    img: grid_four,
    annualReturn: {
      regular: 7.5,
      bonus: 9,
    },
    type: "Commercial",
    investLink: "/property/{id}",
  },
  {
    id: "8a#",
    city: "The Lily",
    location: "Colorado Springs, CO",
    totalInvest: 559,
    investAmount: "9,94,196",
    investPer: 84.73,
    img: grid_five,
    annualReturn: {
      regular: 7.5,
      bonus: 5,
    },
    type: "Commercial",
    investLink: "/property/{id}",
  },
  {
    id: "8a2s72&#",
    city: "The Weldon",
    location: "Gastonia, NC",
    totalInvest: 139,
    investAmount: "1,14,196",
    investPer: 44.73,
    img: grid_six,
    annualReturn: {
      regular: 5.5,
      bonus: 2,
    },
    type: "Commercial",
    investLink: "/property/{id}",
  },
];

export default propertiesData;
