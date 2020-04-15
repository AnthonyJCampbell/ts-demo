import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom"

import Main from "../screens/Posts";
import { Provider } from "react-redux";
import store from "../store/reducers/reducers";

const testComponent = (
    <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
            <Main />
        </MemoryRouter>
    </Provider>
);

describe("Posts", () => {
    it("renders without crashing", () => {
        const { getByTestId } = render(testComponent);
        const container = getByTestId("posts");
        expect(container).toBeInTheDocument();
    });

    it("renders a list of cards", () => {
        const { getByTestId } = render(testComponent);
        const container = getByTestId("post1");
        expect(container).toBeInTheDocument();
    });

    // NOTE: Currently not testable since I'm running into an issue with providing a mock store to jest. Therefore the reducer has been pre-populated, invalidating the logic.
    // it("renders a message when there are no cards provided", () => {
    //     const { getByTestId } = render(testComponent);
    //     const container = getByTestId("message");
    //     expect(container).toBeInTheDocument();
    // });

    // NOTE: Running into similar issue as above. Going to focus on styling for the last ~20 minutes.
    // it("takes the user to the /post/:id page when the link is clicked", () => {
    //     const { getByTestId } = render(testComponent);
    //     const container = getByTestId("post1link");
    //     expect(container).toBeInTheDocument();

    //     fireEvent.click(container);
    //     expect(container).toBeVisible(); 
    // });
});
