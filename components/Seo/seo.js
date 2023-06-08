import { NextSeo } from "next-seo";

const Seo = ({ title, description, keywords, images, url, ...props }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          ...(Boolean(url) && {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/${url}`,
          }),
          title,
          description,
        }}
        {...props}
      />
    </>
  );
};

export default Seo;
