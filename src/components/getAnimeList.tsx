'use client';

import React, { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import styled from '@emotion/styled'

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

interface Props {
  page: number;
}

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
});

const GET_ANIME_LIST = gql`
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

const AnimeListPage: React.FC<Props> = ({ page }) => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchAnimeList() {
      setLoading(true);
      try {
        const { data } = await client.query<AnimeListData>({
          query: GET_ANIME_LIST,
          variables: {
            page,
            perPage: 10,
          },
        });
        setAnimeList(data.Page.media);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchAnimeList();
  }, [page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul>
        {animeList.map((anime) => (
          <li key={anime.id}>
            <div>{anime.title.english || "---"} | {anime.title.native || "---"}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimeListPage;