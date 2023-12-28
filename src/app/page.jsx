import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeRespoinse, reproduce } from "../libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeRespoinse("recommendations/anime", "entry");
  recommendedAnime = reproduce(recommendedAnime, 4);



  return (
    <>
    
      <section>
        <Header title="Most Popular" linkTitle="See All" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header title="Recommendation" linkTitle="See All" linkHref="/new" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
