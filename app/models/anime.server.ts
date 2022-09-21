export const getAnime = async (page: string | number) => {
  const res = await fetch(
    `https://api.jikan.moe/v4/top/anime?limit=9&page=${page}`
  ).then((res) => res.json());

  return res;
};

export const getAnimeId = async (id: string | undefined) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`).then((res) =>
    res.json()
  );

  return {
    data: res.data,
  };
};
