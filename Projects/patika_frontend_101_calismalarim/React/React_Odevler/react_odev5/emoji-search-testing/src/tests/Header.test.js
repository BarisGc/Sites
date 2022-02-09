import { render, screen } from "@testing-library/react";
import Header from "../Header"
import React from 'react'
describe('Header', () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Header />);
    });

    test('Header-Render-Image', () => {
        const image = screen.getAllByRole('img')
        expect(image[0]).toBeInTheDocument()
        expect(image[1]).toBeInTheDocument()
    });

    test("Header-Render-TextContent", () => {
        const textContent = screen.getByText(/Emoji Search/i)
        expect(textContent).toBeInTheDocument();
    });
});

