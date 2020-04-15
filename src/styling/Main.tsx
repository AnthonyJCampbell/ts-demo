import styled from "styled-components";
import { StyleConstants } from "../assets/constants";

export const HeaderContainer = styled.div`
    width: 100%;
    background: ${StyleConstants.colors.cardBackgroundLight};
`;

export const StyledHeader = styled.header`
    max-width: 1280px;
    color: white;
    text-align: center;

    input {
        width: 60%;
        border: none;
        border-radius: 12px;
        padding: 4px;
        height: 24px;
        border: 2px solid rgba(0, 0, 0, 0);

        &:focus {
            outline: none;
            border: 2px solid ${StyleConstants.colors.orangeAccent};
        }
        &:active {
            border: 2px solid ${StyleConstants.colors.orangeAccent};
        }
        @media (min-width: 500px) {
            width: 40%;
        }
        @media (min-width: 900px) {
            width: 240px;
            position: absolute;
            top: 24px;
            right: 24px;
        }
    }
`;

export const Toggle = styled.div`
    display: flex;
    margin: 10px 25%;
    justify-content: space-around;

    div {
        transition: 0.5s;
        min-width: 60px;
        width: 30%;
        border-bottom: 3px solid white;

        &:hover {
            width: 35%;
            color: ${StyleConstants.colors.orangeAccent};
            border-color: ${StyleConstants.colors.orangeAccent};
        }
    }
`;
