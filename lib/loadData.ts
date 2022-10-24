export const loadData = async (link: string) => {
  const response = await fetch(link);
  const data = await response.json();

  return data;
};
