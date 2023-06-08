//third party packages

import { motion } from "framer-motion";

// import components

import DessertHeader from "@/components/DessertHeader";

import LiveDesserts from "@/components/LiveDesserts";

import TakeALook from "@/components/TakeALook";

// import data from Data file

import { desertData, DessertsLiveDessertsData, desertHeaderData } from "@/Data";
import Layout from "@/components/Layout";
import CraftedCakes from "@/components/CraftedCakes";
import ArtistryDesserts from "@/components/ArtistryDesserts";
import Seo from "@/components/Seo/seo";

const DesertPage = () => {
  const foodAndDrinkImage = [
    { img: `/images/mocks03.webp` },
    { img: `/images/mocks02.webp` },
    { img: `/images/mocks04.webp` },
    { img: `/images/mocks01.webp` },
    { img: `/images/OurMenu12.webp` },
    { img: `/images/OurMenu14.webp` },
    { img: `/images/OurMenu13.webp` },
    { img: `/images/OurMenu15.webp` },
    { img: `/images/OurMenu16.webp` },
    { img: `/images/OurMenu19.webp` },
    { img: `/images/OurMenu18.webp` },
  ];
  return (
    <Layout>
      <Seo
        title={"Dessert Bar & Cakes"}
        url={"dessert"}
        description={
          "Feu: Experience our Dessert Bar & Customized Cakes. Indulge in live dessert experiences, enjoy meticulously adorned pastries, and personalized cakes tailored for your event."
        }
      />
      <DessertHeader />
      <LiveDesserts
        title={DessertsLiveDessertsData?.title}
        description={DessertsLiveDessertsData?.description}
        imageUrl={DessertsLiveDessertsData?.imageUrl}
        mainImageUrl={DessertsLiveDessertsData?.mainImage}
        videoUrl={DessertsLiveDessertsData?.videoUrl}
      />

      <CraftedCakes />

      <TakeALook title={`Take a look at our Artistry Foods`} />
      <ArtistryDesserts foodAndDrinkImage={foodAndDrinkImage} />
      {/* {desertData.map((item) =>
        item?.id % 2 == 1 ? (
          <Entremets item={item} />
        ) : (
          <NakedCakes item={item} />
        )
      )} */}
    </Layout>
  );
};

export default DesertPage;
