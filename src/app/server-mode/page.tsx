import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";

interface Anime {
  id: number;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
}

interface AnimeListData {
  Page: {
    media: Anime[];
  };
}

const query = gql`
  query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (id: $id, search: $search) {
        id
        title {
          romaji
          english
          native
        }
      }
    }
  }
`;

export default async function Page() {
    const { data } = await getClient().query({ query });

    return (
        <div>
            <h1>Anime List</h1>
            <ul>
                {data.Page.media.map((anime: Anime ) => (
                    <li key={anime.id}>
                        {anime.title.english || anime.title.romaji || anime.title.native}
                    </li>
                ))}
            </ul>
        </div>
    );
}
