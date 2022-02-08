/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import  userEvent  from "@testing-library/user-event";



import Counter from "./index";

describe("Counter Tests", () => {
    let increaseBtn, decreaseBtn, count;

    beforeEach(() => {
        render(<Counter />);
        increaseBtn = screen.getByText("Increase");
        decreaseBtn = screen.getByText("Decrease")
        count = screen.getByText("0");
        console.log("Her testten önce çalışacağım")
    })

    beforeAll(()=>{
        console.log("ilk başkta bir kere çalışacağım")
    })
    
    afterEach(()=> {
        console.log("her testten sonra çalışacağım")
    })
    afterAll (()=>{
        console.log("en son bir kere çalışacağım")
    })
    /*veya it()*/
    // "increase btn" sadece bir açıklama
    test('increase btn', () => {
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    });

    test('decrease btn', () => {
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");
    });
});