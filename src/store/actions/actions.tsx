export const actionCreators = {
    POSTS_RECEIVED: "POSTS_RECEIVED",

    SET_SEARCH_TERM: "SET_SEARCH_TERM",

    ADDING_TO_FAVS: "ADDING_TO_FAVS",
    REMOVING_FROM_FAVS: "REMOVING_FROM_FAVS",
};

export const fetchPosts = () => (dispatch: any) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts => {
            dispatch({
                type: actionCreators.POSTS_RECEIVED,
                posts,
            });
        });
};

export const setSearchTerm = (input: string) => (dispatch: any) => {
    dispatch({
        type: actionCreators.SET_SEARCH_TERM,
        input,
    });
};

export const addToFavs = (post: object) => (dispatch: any) => {
    dispatch({
        type: actionCreators.ADDING_TO_FAVS,
        post,
    });
};

export const removeFromFavs = (id: number) => (dispatch: any) => {
    dispatch({
        type: actionCreators.REMOVING_FROM_FAVS,
        id,
    });
};
