import { GetServerSidePropsContext } from "next";
import { LanguagePage } from "../../src/pages/LanguagePage";

const PageLanguage = ({ data }) => {
  return <LanguagePage language={data} />;
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<{ language: string }>
) => {
  if (ctx?.params?.language) {
    const response = await fetch(
      `http://localhost:4200/data/${ctx.params.language}`
    );
    const data = await response.json();
    return {
      props: { data },
    };
  }
  return { notFound: true };
};

export default PageLanguage;
