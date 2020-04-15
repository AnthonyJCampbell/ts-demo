import { actionCreators } from "../actions/actions";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

import { ReducerState } from "../../types/index";

const initialState: ReducerState = {
    posts: [
        {
            userId: 1,
            id: 1,
            title:
                "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body:
                "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
    ],
    favs: [
        {
            userId: 1,
            id: 1,
            title:
                "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body:
                "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
    ],
    searchTerm: "",
    authors: [
        "Marcus Aurelius",
        "Mark Twain",
        "Albert Einstein",
        "Abraham Lincoln",
        "Marilyn Monroe",
        "Winston Churchill",
        "Elon Musk",
        "Marie Curie",
        "Dalai Lama",
        "Buddha",
    ],
};

const myReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionCreators.POSTS_RECEIVED:
            return {
                ...state,
                posts: action.posts,
            };

        case actionCreators.SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.input,
            };

        case actionCreators.ADDING_TO_FAVS:
            return {
                ...state,
                favs: [...state.favs, action.post],
            };

        case actionCreators.REMOVING_FROM_FAVS:
            return {
                ...state,
                favs: state.favs.filter(post => post.id !== action.id),
            };

        // Use Set for O1 look-up

        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    reducer: myReducer,
});

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
