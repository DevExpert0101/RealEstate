import lily from "/public/images/property/Lily.webp";
import Log from "/public/images/property/los.png";
import san from "/public/images/property/san.png";
import weldon from "/public/images/property/Weldon.webp";
import LosAngeles from "/public/images/property/LosAngeles.webp";
import Sanfrancisco from "/public/images/property/SanFrancisco.webp";
import Ostrava from "/public/images/property/Ostrava-Profilepic.png"


const featuredData = [
  {
    id: "238haas72&#",
    city: "Park Cihelní - Ostrava, Czech Republic",
    location: "",
    totalInvest: 119,
    investAmount: "4,94,196",
    investPer: 54.73,
    goal: "1,500,000",
    img: Ostrava,
    annualReturn: {
      regular: 7.5,
      bonus: 3,
    },
    max_term: 26,
    type: "Commercial",
    distribution: "Monthly",
    security: "1st-Rank",
    investLink: "/investment/{id}",
    detailsLink: "/property/{id}",
    description: "Welcome to Park Cihelni, our flagship property offering on the vibrant streets of Ostrava, Czech Republic. Nestled across five dynamic phases, this premium development boasts 262 luxurious flats, creating a total gross floor area of 21,000 square meters. It's an irresistible opportunity for astute investors seeking an entry into Central Europe's burgeoning real estate market."
  },
  {
    id: "ahs$%@5q272&#",
    city: "San Francisco, CA",
    location: "3335 21 St, San Francisco",
    totalInvest: 179,
    investAmount: "1,64,296",
    investPer: 64.73,
    goal: "5,00,000",
    img: Sanfrancisco,
    annualReturn: {
      regular: 3.5,
      bonus: 6,
    },
    max_term: 48,
    type: "Commercial",
    distribution: "Monthly",
    security: "1st-Rank",
    investLink: "/investment/{id}",
    detailsLink: "/property/{id}",
  },
  {
    id: "ahs$%@272&#",
    city: "The Weldon",
    location: "Gastonia, NC",
    totalInvest: 579,
    investAmount: "4,64,196",
    investPer: 74.33,
    goal: "2,00,000",
    img: weldon,
    annualReturn: {
      regular: 2.5,
      bonus: 2,
    },
    max_term: 36,
    type: "Commercial",
    distribution: "Monthly",
    security: "1st-Rank",
    investLink: "/investment/{id}",
    detailsLink: "/property/{id}",
  },
  {
    id: "ahs$%@2(7272&#",
    city: "The Lily",
    location: "Colorado Springs, CO",
    totalInvest: 359,
    investAmount: "1,14,196",
    investPer: 64.73,
    goal: "5,00,000",
    img: lily,
    annualReturn: {
      regular: 7.5,
      bonus: 2,
    },
    max_term: 36,
    type: "Commercial",
    distribution: "Monthly",
    security: "1st-Rank",
    investLink: "/investment/{id}",
    detailsLink: "/property/{id}",
  },
  {
    id: "a$%@5q272&#",
    city: "San Francisco, CA",
    location: "3335 21 St, San Francisco",
    totalInvest: 179,
    investAmount: "1,64,296",
    investPer: 64.73,
    goal: "5,00,000",
    img: Sanfrancisco,
    annualReturn: {
      regular: 3.5,
      bonus: 6,
    },
    max_term: 48,
    type: "Commercial",
    distribution: "Monthly",
    security: "1st-Rank",
    investLink: "/investment/{id}",
    detailsLink: "/property/{id}",
  },
  {
    id: "23s72&#",
    city: "Los Angeles",
    location: "8706 Herrick Ave, Los Angeles",
    totalInvest: 119,
    investAmount: "4,94,196",
    investPer: 54.73,
    goal: "1,00,000",
    img: LosAngeles,
    annualReturn: {
      regular: 7.5,
      bonus: 3,
    },
    max_term: 26,
    type: "Commercial",
    distribution: "Monthly",
    security: "1st-Rank",
    investLink: "/investment/{id}",
    detailsLink: "/property/{id}",
  },
];

export default featuredData;
