import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom"
import store from '../store/reducers/reducers'

import MainScreen from "../screens/Main";
import { Provider } from "react-redux";

const testComponent = (
    <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
            <MainScreen />
        </MemoryRouter>
    </Provider>
);

describe("Main", () => {
    it("renders without crashing", () => {
        const { getByTestId } = render(testComponent);
        const container = getByTestId("main");
        expect(container).toBeInTheDocument();
    });

    it("shows Posts by default", () => {
        const { getByTestId } = render(testComponent);
        const container = getByTestId("posts");
        expect(container).toBeInTheDocument();
    });

    it("renders toggle buttons for both tabs", () => {
        const { getByTestId } = render(testComponent);
        const postsbutton = getByTestId("postsbutton");
        const favsbutton = getByTestId("favsbutton");
        expect(postsbutton).toBeInTheDocument();
        expect(favsbutton).toBeInTheDocument();
    });

    it("renders favorites when the favorites button is clicked", () => {
        const { getByTestId, queryByTestId } = render(testComponent);
        const container = getByTestId("favsbutton");

        fireEvent.click(container);

        expect(queryByTestId("fav1")).toBeVisible();
    });

    it("can switch back to posts after having rendered favorites", () => {
        const { getByTestId, queryByTestId } = render(testComponent);
        const favbutton = getByTestId("favsbutton");
        const postbutton = getByTestId("postsbutton");

        fireEvent.click(favbutton);

        expect(queryByTestId("fav1")).toBeVisible();

        fireEvent.click(postbutton);

        expect(queryByTestId("post1")).toBeVisible();

    });
});