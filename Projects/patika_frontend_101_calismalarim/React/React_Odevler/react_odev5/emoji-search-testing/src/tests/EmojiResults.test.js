/* eslint-disable no-undef */
/* eslint-disable testing-library/no-render-in-setup */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "../App"

describe(("Emoji-Search-HeaderTest"), () => {
    let emojiItem, input;
    beforeEach(() => {
        render(<App />);
        emojiItem = screen.getByText(/1234/i)
        input = screen.getByPlaceholderText(/what/i)
    })

    test('EmojiItem-Render-Test', () => {
        expect(emojiItem).toBeInTheDocument();
    });

    it('Should render -Filtered List-', () => {
        const fakeInput = "testtest"
        userEvent.type(input, fakeInput)
        expect(emojiItem).not.toBeInTheDocument()
    })

    // The test below is copied from github user >>>>> dcselek
    it("should copy", () => {
        document.execCommand = jest.fn();
        userEvent.click(emojiItem)

        expect(document.execCommand).toBeCalledWith('copy')
        const copyEmoji = window.ClipboardData;
        expect(copyEmoji).toEqual(emojiItem.value)
    })
})