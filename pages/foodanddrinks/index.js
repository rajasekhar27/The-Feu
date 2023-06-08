// import  Components

import DessertHeader from "@/components/DessertHeader";

import LiveDesserts from "@/components/LiveDesserts";

import TakeALook from "@/components/TakeALook";

import FoodAndDrinksHeader from "@/components/FoodAndDrinksHeader";

// import data from Data file

import { foodAndDrinksData, foodAndDrinksLiveDessertsData } from "@/Data";
import Layout from "@/components/Layout";
import ArtistryCuisines from "@/components/ArtistryCuisines";
import Seo from "@/components/Seo/seo";

//motion variants

const foodAndDrinksVariants = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5 },
  },
};

const FoodAndDrinks = () => {
  return (
    <Layout>
      <Seo
        title={"The Barn"}
        url={"foodanddrinks"}
        description={
          "Feu Barn: A culinary retreat offering a fusion of global flavors. Relish in our elegant decor, creative cocktails, and impeccable service. A dining experience unlike any other."
        }
      />
      <FoodAndDrinksHeader />
      <LiveDesserts
        title={foodAndDrinksLiveDessertsData?.title}
        description={foodAndDrinksLiveDessertsData?.description}
        imageUrl={foodAndDrinksLiveDessertsData?.imageUrl}
        mainImageUrl={foodAndDrinksLiveDessertsData?.mainImage}
        videoUrl={foodAndDrinksLiveDessertsData?.videoUrl}
      />
      <TakeALook title={`Take a look at our Artistry Foods`} />
      <ArtistryCuisines />
    </Layout>
  );
};

export default FoodAndDrinks;
