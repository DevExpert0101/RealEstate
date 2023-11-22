import lily from "/public/images/property/Lily.webp";
import Log from "/public/images/property/los.png";
import san from "/public/images/property/san.png";
import weldon from "/public/images/property/Weldon.webp";
import LosAngeles from "/public/images/property/LosAngeles.webp";
import Sanfrancisco from "/public/images/property/SanFrancisco.webp";
import Ostrava from "/public/images/property/Ostrava-Profilepic.png"
import Belehradska from "/public/images/property/BĚLEHRADSKÁ.png";
import First from "/public/images/owner.jpg";
import Second from "/public/images/second.jpg";

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
    annualReturn: 7.5,
    monthlyEarning: 1.2,
    yearlyRevenue: "220,199",
    investors: 90,
    propertyOwner: 10,
    projectOwner: "MB „Rego Properties“ - is a company serving as a special vehicle for CEETokenized investments. The CEO of the company - Andrius Rimdeika is a former investment banker, who has worked in investment firms such as ”Morgan Stanley” and “Prime investment”.",
    projectOwnerImage: First,
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
      Park Cihelni or any real estate-backed assets.",
    investmentOverview: "Park Cihelni, strategically located in Ostrava, Czech Republic, stands as a promising investment opportunity within the burgeoning real estate market of the region. This modern residential complex spans across 21,000 square meters and comprises 262 residential flats, divided into five phases. Ostrava, known for its economic growth and development initiatives, presents an attractive investment landscape with a thriving real estate market. Park Cihelni aligns with the growing demand for contemporary living spaces and offers an ideal setting for potential investors seeking stable returns within a vibrant and evolving community.",
    investmentAppeal: "Potential investors should be mindful of several key risks linked to the EDIFICE Investment project. These include regulatory hurdles concerning necessary approvals from the Prague 2 and 4 building departments, infrastructure complexities related to reserved road construction areas and existing rail tracks, as well as uncertainties surrounding zoning alterations and permit adjustments impacting the intended residential unit configuration. Moreover, market fluctuations, construction-related challenges, tenant acquisition difficulties, and economic instabilities within Prague's real estate market could significantly affect project timelines, rental yields, and overall investor returns.",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29121.557129272667!2d18.22578674304041!3d49.823546497482475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1700168021163!5m2!1sen!2sru"
  },
  {
    id: "32424",
    city: "Czech Public",
    location: "Bělehradká st. no. 20, Praha 4",
    totalInvest: 179,
    investAmount: "164,296",
    investPer: 64.73,
    goal: "4,000,000",
    img: Belehradska,
    annualReturn: 15.26,
    monthlyEarning: 1.2,
    yearlyRevenue: "610,400",
    investors: 70,
    propertyOwner: 30,
    projectOwner: "EDIFICE Investment, s.r.o. is a dynamic and innovative investment company dedicated to fostering growth and success in various industries. Renowned for its strategic approach and commitment to financial excellence, EDIFICE Investment specializes in identifying promising investment opportunities, facilitating partnerships, and delivering sustainable value to its stakeholders. With a focus on prudent investment practices and a forward-thinking mindset, EDIFICE Investment stands as a trusted partner, driving prosperity and contributing to the advancement of businesses within its portfolio.",
    projectOwnerImage: Second,
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
    investmentRisks: "Potential investors should be mindful of several key risks linked to the EDIFICE Investment project. These include regulatory hurdles concerning necessary approvals from the Prague 2 and 4 building departments, infrastructure complexities related to reserved road construction areas and existing rail tracks, as well as uncertainties surrounding zoning alterations and permit adjustments impacting the intended residential unit configuration. Moreover, market fluctuations, construction-related challenges, tenant acquisition difficulties, and economic instabilities within Prague's real estate market could significantly affect project timelines, rental yields, and overall investor returns.",
    investmentOverview: "The EDIFICE Investment opportunity presents a strategically positioned development venture in the heart of Prague's Vinohrady residential district. Situated at Bělehradká, Prague, this project occupies property lots 4394/38 and 4394/55, offering a 1570m2 triangular site primed for a re-permitted single-use residential building. With proximity to tram terminals, upcoming metro access, and well-connected roadways, this project capitalizes on accessibility. The development aims to reshape the current permit, housing 36 separate rental units within a vibrant community hub, fostering a dynamic residential landscape.",
    investmentAppeal: "Investing in the EDIFICE Investment project appeals to astute investors seeking opportunities in Prague's evolving real estate landscape. The project boasts a strategic location within a well-established residential district, promising increased vibrancy and convenience with forthcoming metro connectivity. Its design, catering to modern residential demands, emph",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.993362996952!2d14.432455492320788!3d50.06768594142834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94887ea8726d%3A0xde73120a1efea5a!2zQsSbbGVocmFkc2vDoSwgUHJhaGEgNCwgQ3plY2hpYQ!5e0!3m2!1sen!2sru!4v1700659372978!5m2!1sen!2sru"
  },
  {
    id: "3244",
    city: "The Weldon",
    location: "Gastonia, NC",
    totalInvest: 579,
    investAmount: "464,196",
    investPer: 74.33,
    goal: "2,000,000",
    img: weldon,
    annualReturn: {
      regular: 2.5,
      bonus: 2,
    },
    monthlyEarning: 1.2,
    yearlyRevenue: 610400,
    investors: 70,
    propertyOwner: 30,
    projectOwnerImage: First,
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
      Park Cihelni or any real estate-backed assets.",
      investmentOverview: "Park Cihelni, strategically located in Ostrava, Czech Republic, stands as a promising investment opportunity within the burgeoning real estate market of the region. This modern residential complex spans across 21,000 square meters and comprises 262 residential flats, divided into five phases. Ostrava, known for its economic growth and development initiatives, presents an attractive investment landscape with a thriving real estate market. Park Cihelni aligns with the growing demand for contemporary living spaces and offers an ideal setting for potential investors seeking stable returns within a vibrant and evolving community.",
      investmentAppeal: "Potential investors should be mindful of several key risks linked to the EDIFICE Investment project. These include regulatory hurdles concerning necessary approvals from the Prague 2 and 4 building departments, infrastructure complexities related to reserved road construction areas and existing rail tracks, as well as uncertainties surrounding zoning alterations and permit adjustments impacting the intended residential unit configuration. Moreover, market fluctuations, construction-related challenges, tenant acquisition difficulties, and economic instabilities within Prague's real estate market could significantly affect project timelines, rental yields, and overall investor returns.",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.993362996952!2d14.432455492320788!3d50.06768594142834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94887ea8726d%3A0xde73120a1efea5a!2zQsSbbGVocmFkc2vDoSwgUHJhaGEgNCwgQ3plY2hpYQ!5e0!3m2!1sen!2sru!4v1700659372978!5m2!1sen!2sru"
  },
  {
    id: "23245",
    city: "The Lily",
    location: "Colorado Springs, CO",
    totalInvest: 359,
    investAmount: "114,196",
    investPer: 64.73,
    goal: "5,000,000",
    img: lily,
    annualReturn: {
      regular: 7.5,
      bonus: 2,
    },
    monthlyEarning: 1.2,
    yearlyRevenue: 610400,
    investors: 70,
    propertyOwner: 30,
    projectOwnerImage: First,
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
      Park Cihelni or any real estate-backed assets.",
      investmentOverview: "Park Cihelni, strategically located in Ostrava, Czech Republic, stands as a promising investment opportunity within the burgeoning real estate market of the region. This modern residential complex spans across 21,000 square meters and comprises 262 residential flats, divided into five phases. Ostrava, known for its economic growth and development initiatives, presents an attractive investment landscape with a thriving real estate market. Park Cihelni aligns with the growing demand for contemporary living spaces and offers an ideal setting for potential investors seeking stable returns within a vibrant and evolving community.",
      investmentAppeal: "Potential investors should be mindful of several key risks linked to the EDIFICE Investment project. These include regulatory hurdles concerning necessary approvals from the Prague 2 and 4 building departments, infrastructure complexities related to reserved road construction areas and existing rail tracks, as well as uncertainties surrounding zoning alterations and permit adjustments impacting the intended residential unit configuration. Moreover, market fluctuations, construction-related challenges, tenant acquisition difficulties, and economic instabilities within Prague's real estate market could significantly affect project timelines, rental yields, and overall investor returns.",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.993362996952!2d14.432455492320788!3d50.06768594142834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94887ea8726d%3A0xde73120a1efea5a!2zQsSbbGVocmFkc2vDoSwgUHJhaGEgNCwgQ3plY2hpYQ!5e0!3m2!1sen!2sru!4v1700659372978!5m2!1sen!2sru"
  },
  {
    id: "fwgweg",
    city: "San Francisco, CA",
    location: "3335 21 St, San Francisco",
    totalInvest: 179,
    investAmount: "164,296",
    investPer: 64.73,
    goal: "5,000,000",
    img: Sanfrancisco,
    annualReturn: {
      regular: 3.5,
      bonus: 6,
    },
    monthlyEarning: 1.2,
    yearlyRevenue: 610400,
    investors: 70,
    propertyOwner: 30,
    projectOwnerImage: First,
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
      Park Cihelni or any real estate-backed assets.",
      investmentOverview: "Park Cihelni, strategically located in Ostrava, Czech Republic, stands as a promising investment opportunity within the burgeoning real estate market of the region. This modern residential complex spans across 21,000 square meters and comprises 262 residential flats, divided into five phases. Ostrava, known for its economic growth and development initiatives, presents an attractive investment landscape with a thriving real estate market. Park Cihelni aligns with the growing demand for contemporary living spaces and offers an ideal setting for potential investors seeking stable returns within a vibrant and evolving community.",
      investmentAppeal: "Potential investors should be mindful of several key risks linked to the EDIFICE Investment project. These include regulatory hurdles concerning necessary approvals from the Prague 2 and 4 building departments, infrastructure complexities related to reserved road construction areas and existing rail tracks, as well as uncertainties surrounding zoning alterations and permit adjustments impacting the intended residential unit configuration. Moreover, market fluctuations, construction-related challenges, tenant acquisition difficulties, and economic instabilities within Prague's real estate market could significantly affect project timelines, rental yields, and overall investor returns.",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.993362996952!2d14.432455492320788!3d50.06768594142834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94887ea8726d%3A0xde73120a1efea5a!2zQsSbbGVocmFkc2vDoSwgUHJhaGEgNCwgQ3plY2hpYQ!5e0!3m2!1sen!2sru!4v1700659372978!5m2!1sen!2sru"
  },
  {
    id: "23s72wf",
    city: "Los Angeles",
    location: "8706 Herrick Ave, Los Angeles",
    totalInvest: 119,
    investAmount: "494,196",
    investPer: 54.73,
    goal: "1,000,000",
    img: LosAngeles,
    annualReturn: {
      regular: 7.5,
      bonus: 3,
    },
    monthlyEarning: 1.2,
    yearlyRevenue: 610400,
    investors: 70,
    propertyOwner: 30,
    projectOwnerImage: First,
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
      Park Cihelni or any real estate-backed assets.",
      investmentOverview: "Park Cihelni, strategically located in Ostrava, Czech Republic, stands as a promising investment opportunity within the burgeoning real estate market of the region. This modern residential complex spans across 21,000 square meters and comprises 262 residential flats, divided into five phases. Ostrava, known for its economic growth and development initiatives, presents an attractive investment landscape with a thriving real estate market. Park Cihelni aligns with the growing demand for contemporary living spaces and offers an ideal setting for potential investors seeking stable returns within a vibrant and evolving community.",
      investmentAppeal: "Potential investors should be mindful of several key risks linked to the EDIFICE Investment project. These include regulatory hurdles concerning necessary approvals from the Prague 2 and 4 building departments, infrastructure complexities related to reserved road construction areas and existing rail tracks, as well as uncertainties surrounding zoning alterations and permit adjustments impacting the intended residential unit configuration. Moreover, market fluctuations, construction-related challenges, tenant acquisition difficulties, and economic instabilities within Prague's real estate market could significantly affect project timelines, rental yields, and overall investor returns.",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.993362996952!2d14.432455492320788!3d50.06768594142834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94887ea8726d%3A0xde73120a1efea5a!2zQsSbbGVocmFkc2vDoSwgUHJhaGEgNCwgQ3plY2hpYQ!5e0!3m2!1sen!2sru!4v1700659372978!5m2!1sen!2sru"
  },
];

export default featuredData;
