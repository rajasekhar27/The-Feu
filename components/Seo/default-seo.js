// import { useSettings } from '@/framework/settings';
import { DefaultSeo as NextDefaultSeo } from "next-seo";
import React from "react";

const settings = {
  siteTitle: "Feu - Culinary Artistry, Customized Cakes & Cooking Classes",
  siteSubtitle: "Feu Restaurant",
  seo: {
    metaTitle: "Feu Restaurant",
    metaDescription:
      "Feu Restaurant offers a culinary oasis with meticulous details aimed at creating an unforgettable dining experience. It offers a fusion menu of global flavors, elegant decor, creative cocktails, and attentive, friendly staff. In addition, Feu Barn hosts hands-on cooking classes for all ages and offers customized cakes for events. The restaurant's Artistry Foods includes offerings like Croissants, Viennoiserie, Tarts, Entremets, Live Desserts, and Macarons.",
    ogTitle: "Feu Restaurant",
    ogDescription:
      "Feu Restaurant is a culinary delight, offering a fusion of global flavors in an elegant setting. It also offers interactive cooking classes and customized cakes for events. The restaurant's Artistry Foods line features delicious offerings like Croissants, Viennoiserie, Tarts, Entremets, Live Desserts, and Macarons. Dive into a world of culinary adventure with Feu Barn.",
    ogImage: {
      thumbnail: "images/FeuLogo.png",
      original: "images/FeuLogo.png",
    },
    twitterHandle: "FeuBarn",
    twitterCardType: "summary_large_image",
    metaTags:
      "Feu Restaurant, culinary oasis, fusion menu, global flavors, elegant decor, creative cocktails, friendly staff, cooking classes, customized cakes, Artistry Foods, Croissants, Viennoiserie, Tarts, Entremets, Live Desserts, Macarons",
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  },
  google: {
    isEnable: true,
    tagManagerId: process.env.NEXT_PUBLIC_GTM_ID,
  },
  facebook: {
    isEnable: false,
    appId: "string",
    pageId: "string",
  },
};

const DefaultSeo = () => {
  return (
    <NextDefaultSeo
      additionalMetaTags={[
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1 maximum-scale=1",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
        {
          name: "keywords",
          content:
            "Feu Barn, Culinary Artistry, Customized Cakes, Cooking Classes, Fusion Menu, Global Flavors, Elegant Decor, Creative Cocktails, Attentive Staff, Interactive Cooking, Hands-on Classes, Personalized Desserts, Live Dessert Experience, Artistry Foods, Croissants, Viennoiserie, Tarts, Entremets, Macarons, Breakfast, Sushi, Oriental, Mexican, Continental, Private Cooking Classes, Food Parties, Foodies, Unique Dining Experience, Unforgettable Dining, Culinary Adventure.",
        },
      ]}
      additionalLinkTags={[
        {
          rel: "apple-touch-icon",
          href: "images/FeuLogo.png",
        },
        {
          rel: "manifest",
          href: "/manifest.json",
        },
      ]}
      title={settings?.seo?.metaTitle}
      titleTemplate={`${
        settings?.seo?.metaTitle || settings?.siteTitle || "Arion"
      } | %s`}
      defaultTitle="Tech Arion"
      description={settings?.seo?.metaDescription || settings?.siteSubtitle}
      canonical={settings?.seo?.canonicalUrl}
      openGraph={{
        title: settings?.seo?.ogTitle,
        description: settings?.seo?.ogDescription,
        type: "website",
        locale: "en_US",
        site_name: settings?.siteTitle,
        images: [
          {
            url: settings?.seo?.ogImage?.original,
            width: 800,
            height: 600,
            alt: settings?.seo?.ogTitle,
          },
        ],
      }}
      twitter={{
        handle: settings?.seo?.twitterHandle,
        site: settings?.siteTitle,
        cardType: settings?.seo?.twitterCardType,
      }}
    />
  );
};

export default DefaultSeo;
