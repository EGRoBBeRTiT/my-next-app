import { HomePage } from "../src/pages/HomePage";
import { HomePageProps } from "../src/pages/HomePage/HomePage.type";

const Index = ({ data }) => {
  return <HomePage data={data} />;
};

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:4200/data");
  const data = await response.json();
  return {
    props: { data },
  };
};

export default Index;
