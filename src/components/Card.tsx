import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavs, removeFromFavs } from "../store/actions/actions";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
    StyledCard,
    FavButtonContainer,
    FavButton,
    StyledLink,
    Attribution,
    MoreButton,
} from "../styling/Card";

import { CardPost, State } from "../types/index";

const Card: React.FC<CardPost> = post => {
    const { authors } = useSelector((state: State) => state.reducer);
    const dispatch = useDispatch();
    return (
        <StyledCard
            data-testid={`post${post.id}`}
            
        >
            <FavButtonContainer
                data-testid={post.inFavs ? `fav${post.id}` : null}
                onClick={() => {
                    post.inFavs
                        ? dispatch(removeFromFavs(post.id))
                        : dispatch(addToFavs(post));
                }}
            >
                <FavButton postinfavs={post.inFavs.toString()} icon={faHeart} />
            </FavButtonContainer>

            <StyledLink className="link" to={`posts/${post.id}`}>
                <span>"{post.title}"</span>
            </StyledLink>

            <Attribution>- {authors[post.userId - 1]}</Attribution>
            <MoreButton data-testid={`post${post.id}link`} to={`posts/${post.id}`}>More</MoreButton>
        </StyledCard>
    );
};

export default Card;
