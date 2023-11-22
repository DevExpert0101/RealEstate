import lily from "/public/images/property/Lily.webp";
import Log from "/public/images/property/los.png";
import san from "/public/images/property/san.png";
import weldon from "/public/images/property/Weldon.webp";
import LosAngeles from "/public/images/property/LosAngeles.webp";
import Sanfrancisco from "/public/images/property/SanFrancisco.webp";
import Ostrava from "/public/images/property/Ostrava-Profilepic.png"
import Belehradska from "/public/images/property/BĚLEHRADSKÁ.png";

const featuredData = [
  {
    id: "2389",
    city: "Ostrava,Moravska, Czech Republic",
    location: "Cihelni, 87",
    totalInvest: 119,
    investAmount: "494,196",
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
    availableFunding: "500,000",
    description: "Welcome to Park Cihelni, our flagship property offering on the vibrant streets of Ostrava, Czech Republic. Nestled across five dynamic phases, this premium development boasts 262 luxurious flats, creating a total gross floor area of 21,000 m². It's an irresistible opportunity for astute investors seeking an entry into Central Europe's burgeoning real estate market. \
    Park Cihelni consist of 5 development phases, each presents a unique chance to partake in the growth story of this meticulously planned residential paradise. With modern architecture and thoughtfully designed living spaces, these flats promise an exquisite lifestyle within a bustling urban landscape. \
    The property not only offers a slice of contemporary living but also stands as a lucrative investment. Its strategic location in Ostrava, a city known for its economic vitality and cultural charm, ensures high demand and potential appreciation for investors. \
    This irresistible offer invites you to be a part of a thriving community, delivering an exceptional living experience while securing an enticing investment opportunity in the heart of Czech Republic's evolving real estate landscape. Embrace Park Cihelni and step into a world where luxury meets promising investment potential.",
    reasons : [
      "Prime Location situated in the heart of Ostrava, Czech Republic, Park Cihelni enjoys a strategic position within a vibrant urban setting, offering convenience and access to essential amenities.",
      "Lucrative Investment Opportunity with 262 upscale flats spread across 21,000 square meters, Park Cihelni presents an enticing investment prospect in Central Europe's thriving real estate market.",
      "Thoughtful Design meticulously planned and architecturally impressive, each phase of Park Cihelni features modern and aesthetically pleasing living spaces, crafted for an exceptional residential experience.",
      "Spread across five distinct phases, investors have the opportunity to engage in different stages of this development, enabling diversified investment strategies tailored to their preferences.",
      "Ostrava, known for its economic dynamism, cultural richness, and ongoing development initiatives, positions Park Cihelni as a promising asset with potential for sustained growth and appreciation.",
      "The high-quality living spaces, combined with the city's expanding job opportunities and amenities, assure a strong demand for rentals, offering investors potential recurring income streams.",
      "Beyond financial gains, Park Cihelni offers residents and investors alike a superior quality of life, combining urban convenience with a sophisticated living experience in a thriving metropolitan environmen.",
    ],
    propertyGallery: [
      '/images/gallery/one.jpg',
      '/images/gallery/two.jpg',
      '/images/gallery/three.jpg',
      '/images/gallery/four.webp',
      '/images/gallery/five.webp',
      '/images/gallery/six.webp',
      '/images/gallery/seven.webp',
      '/images/gallery/eight.webp',
      '/images/gallery/nine.webp',
    ],
    investmentRisks: "This opportunity may be subject to fluctuations influenced by changes in the local real estate market, economic conditions, and demand-supply dynamics. These fluctuations could impact property valuations and potential resale\
      values. Unforeseen economic downturns, changes in interest\
      rates, or financial crises could adversely affect the\
      property&#39;s performance, rental yields, and overall\
      profitability. Vacancy rates or unexpected tenant turnover\
      could result in income disruptions, impacting rental\
      revenues and, consequently, dividend distributions to\
      investors. Unexpected maintenance or repair expenses,\
      higher operational costs, or capital expenditures may\
      affect the property&#39;s net income, potentially reducing\
      the dividends distributed to investors. Investors should\
      carefully assess these risks, conduct thorough due\
      diligence, consider their risk tolerance, and seek\
      professional advice before making investment decisions in\
      Park Cihelni or any real estate-backed assets."
  },
  {
    id: "32424",
    city: "Prague Bělehradská, Czech Public",
    location: "Bělehradká st. no. 20, Praha 4",
    totalInvest: 179,
    investAmount: "164,296",
    investPer: 64.73,
    goal: "4,000,000",
    img: Belehradska,
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
    availableFunding: "4,000,000",
    description: `The site is a triangular shape 1 570 m²  site between the rail tracks on the north — north east, Bělehradská street on the west and Na Ostruvku street in the south. \
                  The site is mostly zoned for mixed residential use except for the strip between the rails and the mixed use zone which needs to be kept as a reserve for future potential\
                  road construction with is not planned in any realistic city traffic strategy but is built into the zoning plan. `,
    reasons: [
      "Strategic location, situated in Prague's Vinohrady residential district, the project site at Bělehradká, Prague, enjoys proximity to the bustling Nuselsky Pivovar residential development by Penta Development. The area promises increased vibrancy with added amenities and services.",
      "Excellent Connectivity positioned just 150m from tram terminals Otakarova and Nam. Bratří synků, and the forthcoming metro line D (expected by 2027), the project ensures swift access to the city center, reducing travel time from 15 to 5 minutes.",
      "Transport Accessibility easily reachable by car via the D1 highway and 5. kvetna street, the location benefits from well-connected transportation links, including the upcoming metro station, enhancing its accessibility.",
      "Cadastral Details located in the cadastral Vinohrady in Prague, the property, spanning property lots 4394/38 and 4394/55, offers a triangular-shaped 1570m2 site, facilitating mixed residential use potential and space for future construction.",
      "Strategic Zoning as the site is primarily zoned for mixed residential use, allowing for a re-permit to develop a single-use residential building. The project aims to reorient the existing permit, maximizing the net rentable area and facilitating 36 separate rental market units.",
      "Parking and Amenities includes provisions for 37 parking spaces across two underground garages, alongside plans for commercial units catering to local retail demands and community services for tenants and residents.",
      "Thoughtful Design orientation emphasizes comfortable living, with facades facing south and west, an internal courtyard to create a serene ambiance, and a thoughtful layout aimed at satisfying future tenants' diverse needs and preferences."
    ],
    propertyGallery: [
      '/images/gallery/0.png',
      '/images/gallery/1.png',
      '/images/gallery/3.png',
      '/images/gallery/4.png',
      '/images/gallery/nine.webp',
      '/images/gallery/one.jpg',
      '/images/gallery/two.webp',
      '/images/gallery/three.webp',
      '/images/gallery/four.webp',
    ],
    allocatedCEETokens: "4,000,000",
    investmentRisks: "Potential investors should be mindful of several key risks linked to the EDIFICE Investment project. These include regulatory hurdles concerning necessary approvals from the Prague 2 and 4 building departments, infrastructure complexities related to reserved road construction areas and existing rail tracks, as well as uncertainties surrounding zoning alterations and permit adjustments impacting the intended residential unit configuration. Moreover, market fluctuations, construction-related challenges, tenant acquisition difficulties, and economic instabilities within Prague's real estate market could significantly affect project timelines, rental yields, and overall investor returns."
  },
  {
    id: "3244",
    city: "The Weldon",
    location: "Gastonia, NC",
    totalInvest: 579,
    investAmount: "464,196",
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
    availableFunding: "500,000",
    propertyGallery: [
      '/images/gallery/one.jpg',
      '/images/gallery/two.jpg',
      '/images/gallery/three.jpg',
      '/images/gallery/four.webp',
      '/images/gallery/five.webp',
      '/images/gallery/six.webp',
      '/images/gallery/seven.webp',
      '/images/gallery/eight.webp',
      '/images/gallery/nine.webp',
    ],
    investmentRisks: "This opportunity may be subject to fluctuations influenced by changes in the local real estate market, economic conditions, and demand-supply dynamics. These fluctuations could impact property valuations and potential resale\
      values. Unforeseen economic downturns, changes in interest\
      rates, or financial crises could adversely affect the\
      property&#39;s performance, rental yields, and overall\
      profitability. Vacancy rates or unexpected tenant turnover\
      could result in income disruptions, impacting rental\
      revenues and, consequently, dividend distributions to\
      investors. Unexpected maintenance or repair expenses,\
      higher operational costs, or capital expenditures may\
      affect the property&#39;s net income, potentially reducing\
      the dividends distributed to investors. Investors should\
      carefully assess these risks, conduct thorough due\
      diligence, consider their risk tolerance, and seek\
      professional advice before making investment decisions in\
      Park Cihelni or any real estate-backed assets."
  },
  {
    id: "23245",
    city: "The Lily",
    location: "Colorado Springs, CO",
    totalInvest: 359,
    investAmount: "114,196",
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
    availableFunding: "500,000",
    propertyGallery: [
      '/images/gallery/one.jpg',
      '/images/gallery/two.jpg',
      '/images/gallery/three.jpg',
      '/images/gallery/four.webp',
      '/images/gallery/five.webp',
      '/images/gallery/six.webp',
      '/images/gallery/seven.webp',
      '/images/gallery/eight.webp',
      '/images/gallery/nine.webp',
    ],
    investmentRisks: "This opportunity may be subject to fluctuations influenced by changes in the local real estate market, economic conditions, and demand-supply dynamics. These fluctuations could impact property valuations and potential resale\
      values. Unforeseen economic downturns, changes in interest\
      rates, or financial crises could adversely affect the\
      property&#39;s performance, rental yields, and overall\
      profitability. Vacancy rates or unexpected tenant turnover\
      could result in income disruptions, impacting rental\
      revenues and, consequently, dividend distributions to\
      investors. Unexpected maintenance or repair expenses,\
      higher operational costs, or capital expenditures may\
      affect the property&#39;s net income, potentially reducing\
      the dividends distributed to investors. Investors should\
      carefully assess these risks, conduct thorough due\
      diligence, consider their risk tolerance, and seek\
      professional advice before making investment decisions in\
      Park Cihelni or any real estate-backed assets."
  },
  {
    id: "fwgweg",
    city: "San Francisco, CA",
    location: "3335 21 St, San Francisco",
    totalInvest: 179,
    investAmount: "164,296",
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
    availableFunding: "500,000",
    propertyGallery: [
      '/images/gallery/one.jpg',
      '/images/gallery/two.jpg',
      '/images/gallery/three.jpg',
      '/images/gallery/four.webp',
      '/images/gallery/five.webp',
      '/images/gallery/six.webp',
      '/images/gallery/seven.webp',
      '/images/gallery/eight.webp',
      '/images/gallery/nine.webp',
    ],
    investmentRisks: "This opportunity may be subject to fluctuations influenced by changes in the local real estate market, economic conditions, and demand-supply dynamics. These fluctuations could impact property valuations and potential resale\
      values. Unforeseen economic downturns, changes in interest\
      rates, or financial crises could adversely affect the\
      property&#39;s performance, rental yields, and overall\
      profitability. Vacancy rates or unexpected tenant turnover\
      could result in income disruptions, impacting rental\
      revenues and, consequently, dividend distributions to\
      investors. Unexpected maintenance or repair expenses,\
      higher operational costs, or capital expenditures may\
      affect the property&#39;s net income, potentially reducing\
      the dividends distributed to investors. Investors should\
      carefully assess these risks, conduct thorough due\
      diligence, consider their risk tolerance, and seek\
      professional advice before making investment decisions in\
      Park Cihelni or any real estate-backed assets."
  },
  {
    id: "23s72wf",
    city: "Los Angeles",
    location: "8706 Herrick Ave, Los Angeles",
    totalInvest: 119,
    investAmount: "494,196",
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
    availableFunding: "500,000",
    propertyGallery: [
      '/images/gallery/one.jpg',
      '/images/gallery/two.jpg',
      '/images/gallery/three.jpg',
      '/images/gallery/four.webp',
      '/images/gallery/five.webp',
      '/images/gallery/six.webp',
      '/images/gallery/seven.webp',
      '/images/gallery/eight.webp',
      '/images/gallery/nine.webp',
    ],
    investmentRisks: "This opportunity may be subject to fluctuations influenced by changes in the local real estate market, economic conditions, and demand-supply dynamics. These fluctuations could impact property valuations and potential resale\
      values. Unforeseen economic downturns, changes in interest\
      rates, or financial crises could adversely affect the\
      property&#39;s performance, rental yields, and overall\
      profitability. Vacancy rates or unexpected tenant turnover\
      could result in income disruptions, impacting rental\
      revenues and, consequently, dividend distributions to\
      investors. Unexpected maintenance or repair expenses,\
      higher operational costs, or capital expenditures may\
      affect the property&#39;s net income, potentially reducing\
      the dividends distributed to investors. Investors should\
      carefully assess these risks, conduct thorough due\
      diligence, consider their risk tolerance, and seek\
      professional advice before making investment decisions in\
      Park Cihelni or any real estate-backed assets."
  },
];

export default featuredData;
