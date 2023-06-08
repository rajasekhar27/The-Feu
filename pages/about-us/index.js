//compontents import
import AboutFounder from "@/components/AboutFounder";
import AboutFue from "@/components/AboutFue";
import AboutOurTeam from "@/components/AboutOurTeam";
import CatchOurInstaActivities from "@/components/CatchOurInstaActivities";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo/seo";
import WhatUsersSayAboutUs from "@/components/WhatUsersSayAboutUs";
import OurAmbiance from "@/components/OurAmbiance";

export default function aboutUsPage() {
  return (
    <div>
      <Layout>
        <Seo
          title={"About-Us"}
          url={"about-us"}
          description={
            "A visionary with a taste for fine cuisine, and aesthetics. Shilpa Datla found inspiration through her travels, experiences and discoveries in different parts of the world. Having set up a now successful Bar, Kitchen and Dessert Bar - Feu, she longed to bring the true culinary experience to the city in the form of fine desserts, pan Asian, continental, dining. You can see the passion that goes into her work as she cares for every little detail from food to service and presentation. When you step into the rustic walls surrounded by nature in Feu, you know you’re about to be taken on a journey."
          }
        />
        <AboutFue />
        <AboutFounder />
        <AboutOurTeam />
        <OurAmbiance />
        <CatchOurInstaActivities />
        <WhatUsersSayAboutUs />
      </Layout>
    </div>
  );
}
