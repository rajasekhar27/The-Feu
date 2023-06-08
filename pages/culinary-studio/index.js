//compontents import
import Layout from "@/components/Layout";
// import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
// import JoinForAParty from "@/components/JoinForAParty";
// import CulinaryHeader from "@/components/CulinaryHeader";
import dynamic from "next/dynamic";
import Seo from "@/components/Seo/seo";

const CulinaryHeader = dynamic(() => import("@/components/CulinaryHeader"));
const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => <h1>Loading..</h1>,
});
const JoinForAParty = dynamic(() => import("@/components/JoinForAParty"));

export default function CulinaryStudio() {
  return (
    <Layout>
      <Seo
        title={"Kulinary Studio"}
        url={"culinary-studio"}
        description={
          "Feu Kulinary Studio: Unlock culinary secrets with our hands-on classes. Ideal for all ages, these interactive sessions inspire creativity and culinary exploration."
        }
      />
      <CulinaryHeader />
      <Gallery />
      <JoinForAParty />
      {/* <Blog /> */}
    </Layout>
  );
}
