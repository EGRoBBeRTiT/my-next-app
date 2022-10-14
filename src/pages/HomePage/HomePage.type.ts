export type Language = {
  id: number;
  title: string;
  subTitle: string;
  description: string;
};

export type HomePageProps = {
  data?: Language[];
};
