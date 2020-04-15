export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export interface ReducerState {
    posts: Post[];
    favs: Post[];
    searchTerm: string;
    authors: string[];
}

export interface State {
    reducer: {
        posts: Post[];
        favs: Post[];
        searchTerm: string;
        authors: string[];
    };
}
export interface CardPost extends Post {
    inFavs: boolean
}
