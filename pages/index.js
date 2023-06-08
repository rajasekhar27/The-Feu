// compontents import
import ContactUs from "../components/ContactUs";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo/seo";
import dynamic from "next/dynamic";

const DessertBarKitchen = dynamic(
  () => import("@/components/DessertBarKitchen"),
  {
    ssr: false,
  }
);

const CatchOurInstaActivities = dynamic(
  () => import("@/components/CatchOurInstaActivities"),
  {
    loading: `Loading..`,
    ssr: false,
  }
);

const OurMenu = dynamic(() => import("@/components/OurMenu"), {
  ssr: false,
});

const ReserveYourTable = dynamic(
  () => import("@/components/ReserveYourTable"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      <Layout>
        <Seo
          title={"Home"}
          description={
            "Feu: Home to culinary artistry, global flavors, and interactive cooking classes. Experience our Dessert Bar, Customized Cakes, and elegant Barn dining."
          }
        />
        <DessertBarKitchen />
        <ReserveYourTable />
        <OurMenu />
        <CatchOurInstaActivities />
        <ContactUs />
      </Layout>
    </>
  );
}
