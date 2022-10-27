import { BACK_URL } from "../src/config";
import { loadData } from "../lib";
import { HomePage } from "../src/pages/HomePage";
import { HomePageProps } from "../src/pages/HomePage/HomePage.type";

const Index = ({ data }) => {
  return <HomePage data={data} />;
};

export const getStaticProps = async () => {
  const data = await loadData(`${BACK_URL}/data`);

  return {
    props: { data },
  };
};

export default Index;
