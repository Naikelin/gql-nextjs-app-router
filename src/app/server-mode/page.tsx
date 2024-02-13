import Link from "next/link";

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

type Props = {
    params: {};
    searchParams: { [key: string]: string | string[] | undefined };
};

const query = gql`
    query ($id: Int, $page: Int, $perPage: Int, $search: String) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media(id: $id, search: $search) {
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

const goToPreviousPage = (currPage: number) => {
    const previrousPage = currPage - 1 === 0 ? 1 : currPage - 1;
    return (
        <Link
            href={"/server-mode?page=" + previrousPage}
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
        >
            Previous Page
        </Link>
    );
};

const goToNextPage = (currentPage: number) => {
    const nextPage = currentPage + 1;
    return (
        <Link
            href={"/server-mode?page=" + nextPage}
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
        >
            Next Page
        </Link>
    );
};

export default async function Page(props: Props) {
    /* get query params */
    const searchParams = props.searchParams;
    const currentPage = parseInt(searchParams.page as string) || 1;
    const perPage = parseInt(searchParams.perPage as string) || 10;

    const { data } = await getClient().query({
        query: query,
        variables: { page: currentPage, perPage: perPage },
    });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <h1> anime list </h1>

                <div className="flex flex-col items-center justify-between">
                    <ul>
                        {data.Page.media.map((anime: Anime) => (
                            <li key={anime.id}>
                                {anime.title.english || "---"} |{" "}
                                {anime.title.native || "---"}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4 flex">
                        {goToPreviousPage(currentPage)}
                        {goToNextPage(currentPage)}
                    </div>
                </div>
            </div>
        </main>
    );
}
