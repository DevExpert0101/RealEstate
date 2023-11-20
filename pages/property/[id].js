import { useRouter } from 'next/router';
import { useState } from 'react';

import Gallery from "../../components/common/Gallery";
import Market from "../../components/home/Market";
import AllProperties from "../../components/PropertyDetails/AllProperties";
import Details from "../../components/PropertyDetails/Details";

//import data
import featuredData from "../../data/featuredData";

const GetData = (id) => {
  let i;
  for(i = 0; i < featuredData.length; i++)
    if(featuredData[i].id == id) return featuredData[i];
  return {};
}
const PropertyDetails = ({singleItem}) => {
  const router = useRouter();
  const data = GetData(router.query.id);

  return (
    <>
      {/* Details start here */}

      <Details data = { data }/>
      

      {/* Gallery start here */}
      <Gallery imageUrls = { data.propertyGallery }/>

      {/* All Properties start here */}
      <AllProperties />

      {/* Market start here */}
      <Market />
    </>
  );
};

export default PropertyDetails;
