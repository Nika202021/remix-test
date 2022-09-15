import { useLoaderData } from "@remix-run/react";
import Pagination from "./pagination";
import PostSinglePage from "./post-single-page";
import RecommendedList from "./recomended-list";
import { json } from "@remix-run/node";
import { getAnime } from "~/models/anime.server";

export interface PreviewItemType {
  mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
    };
  };
}

type LoaderData = {
  data: Awaited<ReturnType<typeof getAnime>>;
};

export const loader = async () => {
  return json<LoaderData>({
    data: await getAnime(),
  });
};

const Home = () => {
  const {
    data: { data, pagination },
  } = useLoaderData();
  console.log(pagination);
  return (
    <>
      <h1>Hello</h1>
      <RecommendedList items={data} />
      <Pagination />
      <PostSinglePage />
    </>
  );
};

export default Home;
