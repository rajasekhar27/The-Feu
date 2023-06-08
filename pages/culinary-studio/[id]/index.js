//third party imports
// import { useRouter } from 'next/router'

//import components
import BlogDetail from "@/components/BlogDetail";
import Layout from "@/components/Layout";

const index = () => {
  // const router = useRouter()
  // const {id} = router.query

  return (
    <Layout>
      <BlogDetail />
    </Layout>
  );
};

export default index;
