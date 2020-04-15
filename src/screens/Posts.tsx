import React from "react";
import { State, Post } from "../types/index";
import { useSelector } from "react-redux";

import Card from "../components/Card";

import { PostsContainer } from '../styling/Posts'

const Posts: React.FC<{ showPosts: boolean }> = ({ showPosts }) => {
    // Retrieve posts and favs from store

    const { posts, favs, searchTerm } =
        useSelector((state: State) => state.reducer) || [];

    const listOfPosts = showPosts === true ? posts : favs;

    const postInFavs = (id: number) => {
        for (const i in favs) {
            if (favs[i].id === id) return true;
        }
        return false;
    };

    const generatePosts = (listOfPosts: Post[]) => {
        return listOfPosts.map((post, idx) => (
            <Card
                key={idx}
                id={post.id}
                title={post.title}
                body={post.body}
                userId={post.userId}
                // Checks if post is located in Favorites
                inFavs={postInFavs(post.id)}
            />
        ));
    };
    // Loading message - no posts in store
    if (listOfPosts.length < 1) {
        return <PostsContainer style={{color: "white", fontSize: "24px", margin: "20px"}}>Seems like we can't find any quotes ¯\_(ツ)_/¯</PostsContainer>;
    } else if (searchTerm.length < 1) {
        // Default view with all posts in either Posts or Favs
        // Should only render when user isn't searching for anything
        return <PostsContainer data-testid="posts">{generatePosts(listOfPosts)}</PostsContainer>;
    }

    const FilteredArray = listOfPosts.filter((post: Post) =>
        post.title.includes(searchTerm)
    );

    if (FilteredArray.length < 1) {
        return <PostsContainer style={{color: "white", fontSize: "24px", margin: "20px"}}>Seems like we can't find any quotes ¯\_(ツ)_/¯</PostsContainer>;
    }
    return <PostsContainer data-testid="posts">{generatePosts(FilteredArray)}</PostsContainer>;
};

export default Posts;
