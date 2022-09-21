import React from "react";
import PostSinglePage from "./post-single-page";
import { useLoaderData } from "@remix-run/react";
import { getAnimeId } from "~/models/anime.server";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";

type LoaderData = {
  result: Awaited<ReturnType<typeof getAnimeId>>;
};

export const loader: LoaderFunction = async ({ params }) => {
  return json({
    result: await getAnimeId(params.id),
  });
};

export interface PostType {
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

const Post: React.FC<PostType> = () => {
  const {
    result: { data },
  } = useLoaderData() as LoaderData;

  return <PostSinglePage data={data} />;
};

export default Post;
