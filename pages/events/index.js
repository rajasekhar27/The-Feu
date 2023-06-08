// components import
// import CheckOurEvents from "@/components/CheckOurEvents";
// import EventsFue from "@/components/EventsFue";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo/seo";
import dynamic from "next/dynamic";

const EventsFue = dynamic(() => import("@/components/EventsFue"));
const CheckOurEvents = dynamic(() => import("@/components/CheckOurEvents"));

const events = () => {
  return (
    <>
      <Layout>
        <Seo
          title={"Feu Events"}
          url={"events"}
          description={
            "Feu Events: Perfect for parties, our private cooking classes bring people together. Enjoy interactive, fun culinary adventures with friends and family."
          }
        />
        <EventsFue />
        <CheckOurEvents />
      </Layout>
    </>
  );
};

export default events;
