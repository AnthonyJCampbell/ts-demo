import styled from "styled-components";
import { StyleConstants } from "../assets/constants";
import { Link } from "react-router-dom";

export const DetailsPage = styled.div`
    margin: 25px auto;
    max-width: 600px;
`;

export const DetailContainer = styled.div`
    padding: 60px 35px 0px;
    width: 80%;
    max-width: 500px;
    height: 500px;
    background: ${StyleConstants.colors.cardBackgroundLight};
    margin: 5% auto;
    border-radius: ${StyleConstants.dimensions.cardBorderRadius};
    color: white;
    text-decoration: none;
    box-shadow: 3px 3px 8px 4px rgba(255, 255, 255, 0.05);
    text-align: center;
    display: flex;
    flex-direction: column;
    transition: 0.25s;
`;

export const BackButton = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight: bold;
    border: 3px solid white;
    padding: 8px;
    transition: 0.25s;

    &:hover {
        border-color: ${StyleConstants.colors.orangeAccent};
        color: ${StyleConstants.colors.orangeAccent};
    }
`;


export const Author = styled.p`
    font-size: 26px;
    margin-bottom: 20px;
`;