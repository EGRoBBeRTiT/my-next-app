import { GetServerSidePropsContext } from "next";
import { BACK_URL } from "../../src/config";
import { loadData } from "../../lib";
import { LanguagePage } from "../../src/pages/LanguagePage";

const PageLanguage = ({ data }) => {
  return <LanguagePage language={data} />;
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<{ language: string }>
) => {
  if (ctx?.params?.language) {
    const data = await loadData(`${BACK_URL}/data/${ctx.params.language}`);

    return {
      props: { data },
    };
  }
  return { notFound: true };
};

export default PageLanguage;
