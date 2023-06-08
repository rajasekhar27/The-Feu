import { Provider } from "react-redux";
import "@/styles/globals.css";
import "react-alice-carousel/lib/alice-carousel.css";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import { store } from "@/store/store";
import TagManager, { TagManagerArgs } from "react-gtm-module";

import HeaderPopup from "@/components/HeaderPopup";

import BookATablePopUp from "@/components/BookATablePopUp";
import TableConfirmationPopUp from "@/components/TableConfirmationPopUp";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import optimiseImage from "@/helper/optimiseImage";
import ContactUsPopup from "@/components/ContactUsPopup";
import FoodItemsPopup from "@/components/FoodItemCard/FoodItemsPopup";
import DefaultSeo from "@/components/Seo/default-seo";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname;

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    TagManager.initialize({ gtmId: gtmId });
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <link rel="feu icon" href={optimiseImage(`/images/FeuDocLogo.png`)} />
        <title>{`FEU`}</title>
      </Head>

      <DefaultSeo />

      <Provider store={store}>
        <BookATablePopUp />
        <HeaderPopup />
        <TableConfirmationPopUp />
        <ContactUsPopup />
        <FoodItemsPopup />

        <Component {...pageProps} />
      </Provider>
    </>
  );
}
