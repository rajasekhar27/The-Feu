// import  Components
import BookATable from "@/components/BookATable";

import Layout from "@/components/Layout";
import Seo from "@/components/Seo/seo";

const BookATablePage = () => {
  return (
    <Layout>
      <Seo
        title={"Book a Table"}
        url={"booktable"}
        description={
          "Book a Table at Feu: Reserve your spot for an unforgettable culinary journey. Experience global flavors, creative cocktails, and attentive service."
        }
      />
      <BookATable />
    </Layout>
  );
};

export default BookATablePage;
