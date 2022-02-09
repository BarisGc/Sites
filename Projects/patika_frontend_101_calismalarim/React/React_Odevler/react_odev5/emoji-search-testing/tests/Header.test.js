import { render, screen } from "@testing-library/react";
import Header from "../Header"

describe('Header', () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Header />);
    });

    test('Header-Render-Image', () => {
        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument()
    });

    test("Header-Render-TextContent", () => {
        const textContent = screen.getByText(/Emoji Search/i)
        expect(textContent).toBeInTheDocument();
    });
});

