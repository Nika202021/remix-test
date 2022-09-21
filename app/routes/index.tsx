import { useLoaderData } from "@remix-run/react";
import Pagination from "./pagination";
import RecommendedList from "./recomended-list";
import type { LoaderFunction } from "@remix-run/node";
import { getAnime } from "~/models/anime.server";
import Layout from "./layout";

export interface PreviewItemType {
  mal_id: number;
  title: string;
  status: string;
  source: string;
  episodes: number;
  synopsis: string;
  score: number;
  rank: number;
  popularity: number;
  type: string;
  images: {
    webp: {
      image_url: string;
    };
  };
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;
  const posts = await getAnime(page);

  return {
    posts,
    currentPage: page,
  };
};

const Home = () => {
  const data = useLoaderData();
  return (
    <Layout>
      <RecommendedList items={data.posts.data} />
      <Pagination
        currentPage={data.posts.pagination.current_page}
        posts={data.posts.data}
        hasNextPage={data.posts.pagination.has_next_page}
      />
    </Layout>
  );
};

export default Home;
