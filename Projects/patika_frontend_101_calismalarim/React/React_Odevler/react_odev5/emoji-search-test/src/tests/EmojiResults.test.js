import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "../Header"

describe(("Emoji-Search-HeaderTest"), () => {

    beforeEach(() => {
        render(<App />);
    })

    test('EmojiItem-Render-Test', () => {
        let emojiItem = screen.getByText("Click to copy emoji");
        expect(emojiItem).toBeInTheDocument();
    });

    it('Should render -Filtered List-', () => {
        let searchedItem = "100"
        userEvent.type(input, searchedItem);
        expect(screen.getByText(searchedItem)).toBeInTheDocument()

    })

    it('Should NOT render -Fake Item as Filtered Item-', () => {
        const fakeInput = "fakeItem"
        expect(fakeInput).not.toBeInTheDocument()
        userEvent.type(input, fakeInput)
    })

    // The test below is copied from github user >>>>> dcselek
    it("should copy", () => {
        //öncelikle execCommand'i mockluyoruz.
        document.execCommand = jest.fn(); // execCommand detaylı bakmak için link: https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
        //uygulamayı ayağa kaldırıp console üzerinden document.execCommand("copy") yazdığınızda fareniz ile daha önce seçtiğiniz yeri kopyalar. execCommand'in bunun gibi fonksiyonları var.
        userEvent.click(emoji100) //emoji100 üzerine tıklamayı sağlıyoruz

        expect(document.execCommand).toBeCalledWith('copy') // burada execCommand'in 'copy' olarak çağırılıp çağırılmadığını soruyoruz

        const copyEmoji = window.ClipboardData; //kopyalanan datayı alıyoruz.
        expect(copyEmoji).toEqual(emoji100.value)
    })
})