export const getAnime = async () => {
  const res = await fetch(
    `https://api.jikan.moe/v4/top/anime?limit=9&page=2`
  ).then((res) => res.json());

  return res;
};
