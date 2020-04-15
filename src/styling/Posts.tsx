import styled from "styled-components";

export const PostsContainer = styled.div`
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    max-width: 1080px;
    flex-wrap: nowrap;

    /* Add media query for ~640px */
    @media (min-width: 500px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;
