import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { addToFavs, removeFromFavs } from "../store/actions/actions";
import { Post, State } from "../types/index";

import {
    DetailsPage,
    DetailContainer,
    BackButton,
    Author
} from "../styling/PostDetail";
import { FavButton } from "../styling/Card";

interface RouteParams {
    id: string;
}

const PostDetail: React.FC = () => {
    // Retrieve :id from params
    let id = parseInt(useParams<RouteParams>().id);

    const { posts, favs, authors } =
        useSelector((state: State) => state.reducer) || [];
    const dispatch = useDispatch();

    const checkFavs = (id: number) => {
        for (const i in favs) {
            if (favs[i].id === id) return true;
        }
        return false;
    };

    const postInFavs: boolean = checkFavs(id);
    const post: Post = posts[id - 1];

    if (!post) {
        return <div />;
    }

    return (
        <DetailsPage>
            <BackButton data-testid="backbutton" to="/">
                Back
            </BackButton>
            <DetailContainer data-testid="postdetail">
                <h1>"{post.title}"</h1>
                <Author>- {authors[post.userId - 1]}</Author>
                <span>{post.body}</span>
                <div
                    data-testid={postInFavs ? `fav${post.id}` : null}
                    onClick={() => {
                        postInFavs
                            ? dispatch(removeFromFavs(post.id))
                            : dispatch(addToFavs(post));
                    }}
                >
                    <FavButton
                        postinfavs={postInFavs.toString()}
                        icon={faHeart}
                    />
                </div>
            </DetailContainer>
        </DetailsPage>
    );
};

export default PostDetail;
