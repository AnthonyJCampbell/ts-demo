import styled from "styled-components";
import { StyleConstants } from "../assets/constants";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledCard = styled.div`
    width: 80%;
    height: 180px;
    padding: 10px;
    background: ${StyleConstants.colors.cardBackgroundLightLinear};
    border-radius: ${StyleConstants.dimensions.cardBorderRadius};
    margin: 15px auto auto;
    color: white;
    text-decoration: none;
    box-shadow: 3px 3px 8px 4px rgba(255, 255, 255, 0.05);
    text-align: center;
    display: flex;
    flex-direction: column;
    transition: 0.25s;

    @media (min-width: 500px) {
        width: 45%;
    }

    @media (min-width: 900px) {
        width: 28%;
    }
    @media (min-width: 1080px) {
        width: 22.5%;
    }

    &:hover {
        transform: scale(1.05);
    }
`;

export const FavButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

interface Props {
    postinfavs: string;
}

export const FavButton = styled(FontAwesomeIcon)<Props>`
    color: ${p => (p.postinfavs === "true" ? "red" : "white")};
    height: 20px;
    width: 20px;
    text-align: center;
    border-radius: 100%;
    margin: 10px;
    transition: 0.25s;

    &:hover {
        transform: scale(1.25);
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight: bold;
`;

export const Attribution = styled.p`
    margin-top: auto;
`;

export const MoreButton = styled(Link)`
    margin: 0px auto 10px;
    border-bottom: 1px solid ${StyleConstants.colors.orangeAccent};
    width: 25%;
    font-size: 18px;
    text-decoration: none;
    color: white;
    justify-self: right;
    transition: 0.5s;

    &:hover {
        width: 35%;
        color: ${StyleConstants.colors.orangeAccent};
    }
`;
