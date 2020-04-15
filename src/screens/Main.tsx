import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, setSearchTerm } from "../store/actions/actions";
import { State } from "../types/index";
import {HeaderContainer, StyledHeader, Toggle} from '../styling/Main';

import Posts from "./Posts";

const MainScreen: React.FC = () => {
    const [showPosts, setShowPosts] = useState<boolean>(true);
    const { searchTerm } = useSelector((state: State) => state.reducer);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const inputChangeHandler = (value: string) => {
        dispatch(setSearchTerm(value));
    };

    return (
        <div
            data-testid="main"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <HeaderContainer>
                <StyledHeader>
                    <h1>Quote Central</h1>
                    <input
                        placeholder="Search For Quote"
                        value={searchTerm}
                        onChange={e => inputChangeHandler(e.target.value)}
                    />
                    <Toggle>
                        <div
                            data-testid="postsbutton"
                            style={{
                                color: showPosts ? "#EC5533" : "white",
                                borderColor: showPosts ? "#EC5533" : "white",
                            }}
                            onClick={() => setShowPosts(true)}
                        >
                            Posts
                        </div>
                        <div
                            data-testid="favsbutton"
                            style={{
                                color: showPosts ? "white" : "#EC5533",
                                borderColor: showPosts ? "white" : "#EC5533",
                            }}
                            onClick={() => setShowPosts(false)}
                        >
                            Favorites
                        </div>
                    </Toggle>
                </StyledHeader>
            </HeaderContainer>
            <Posts showPosts={showPosts} />
        </div>
    );
};

export default MainScreen;
