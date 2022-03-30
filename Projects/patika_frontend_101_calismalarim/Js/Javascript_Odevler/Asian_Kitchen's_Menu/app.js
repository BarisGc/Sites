const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img:
            "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img:
            "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img:
            "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img:
            "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img:
            "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:
            "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img:
            "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img:
            "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img:
            "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];


xPageMenuDomsFunctions()

function xPageMenuDomsFunctions() {
    xPageMenuFilterButtonsGroupDomFunc()
    xPageMenuListDomFunc("All")
}

function xPageMenuFilterButtonsGroupDomFunc() {

    let xPageMenuFilterButtonGroup = document.querySelector(".btn-container")
    let xPageMenuFilterButton1 = document.createElement("button")
    let xPageMenuFilterButton2 = document.createElement("button")
    let xPageMenuFilterButton3 = document.createElement("button")
    let xPageMenuFilterButton4 = document.createElement("button")

    xPageMenuFilterButton1.setAttribute("data-id", "All")
    xPageMenuFilterButton1.classList.add("btn", "btn-outline-dark", "btn-item")
    xPageMenuFilterButton1.innerHTML = `All`
    xPageMenuFilterButtonGroup.append(xPageMenuFilterButton1)

    xPageMenuFilterButton2.setAttribute("data-id", "Korea")
    xPageMenuFilterButton2.classList.add("btn", "btn-outline-dark", "btn-item")
    xPageMenuFilterButton2.innerHTML = `Korea`
    xPageMenuFilterButtonGroup.append(xPageMenuFilterButton2)

    xPageMenuFilterButton3.setAttribute("data-id", "Japan")
    xPageMenuFilterButton3.classList.add("btn", "btn-outline-dark", "btn-item")
    xPageMenuFilterButton3.innerHTML = `Japan`
    xPageMenuFilterButtonGroup.append(xPageMenuFilterButton3)

    xPageMenuFilterButton4.setAttribute("data-id", "China")
    xPageMenuFilterButton4.classList.add("btn", "btn-outline-dark", "btn-item")
    xPageMenuFilterButton4.innerHTML = `China`
    xPageMenuFilterButtonGroup.append(xPageMenuFilterButton4)

    xPageMenuButtonListeners(xPageMenuFilterButton1, xPageMenuFilterButton2, xPageMenuFilterButton3, xPageMenuFilterButton4)

}

function xPageMenuListDomFunc(menu_selection) {

    let filteredList = menu.filter((element, index, arr) => {
        if (menu_selection === "All") {

            return element
        }
        else {
            return menu_selection === element.category
        }

    })

    //0.0 div >>>>> querySelector(".section-center")
    let xPageMenuListDom = document.querySelector(".section-center") /*.row eklemeyi dene*/

    filteredList.forEach((element) => {

        //1.0 div >>>>> menu-items
        let xPageMenuListMenuItemsDom = document.createElement("div")
        xPageMenuListMenuItemsDom.classList.add("menu-items", "col-lg-6", "col-sm-12")
        xPageMenuListDom.append(xPageMenuListMenuItemsDom)

        //1.1 img >>>>> menu-items-img
        let xPageMenuListMenuItemsImgDom = document.createElement("img")
        xPageMenuListMenuItemsImgDom.setAttribute("src", `${element.img}`)
        xPageMenuListMenuItemsImgDom.setAttribute("alt", `${element.title}`)
        xPageMenuListMenuItemsImgDom.classList.add("photo")
        xPageMenuListMenuItemsDom.append(xPageMenuListMenuItemsImgDom)

        //1.2 div >>>>> menu-info
        let xPageMenuListMenuItemsMenuInfoDom = document.createElement("div")
        xPageMenuListMenuItemsMenuInfoDom.classList.add("menu-info")
        xPageMenuListMenuItemsDom.append(xPageMenuListMenuItemsMenuInfoDom)

        // 1.2.1 div >>>>>  menu-title
        let xPageMenuListMenuItemsMenuInfoMenuTitleDom = document.createElement("div")
        xPageMenuListMenuItemsMenuInfoMenuTitleDom.classList.add("menu-title")
        xPageMenuListMenuItemsMenuInfoDom.append(xPageMenuListMenuItemsMenuInfoMenuTitleDom)

        // 1.2.1.1 h4 >>>>> title
        let xPageMenuListMenuItemsMenuInfoMenuTitleH4Dom1 = document.createElement("h4")
        xPageMenuListMenuItemsMenuInfoMenuTitleH4Dom1.innerHTML = `${element.title}`
        xPageMenuListMenuItemsMenuInfoMenuTitleDom.append(xPageMenuListMenuItemsMenuInfoMenuTitleH4Dom1)

        // 1.2.1.2 h4 >>>>> price
        let xPageMenuListMenuItemsMenuInfoMenuTitleH4Dom2 = document.createElement("h4")
        xPageMenuListMenuItemsMenuInfoMenuTitleH4Dom2.innerHTML = `${element.price}`
        xPageMenuListMenuItemsMenuInfoMenuTitleH4Dom2.classList.add("price")
        xPageMenuListMenuItemsMenuInfoMenuTitleDom.append(xPageMenuListMenuItemsMenuInfoMenuTitleH4Dom2)

        // 1.2.2 div >>>>> menu-text
        let xPageMenuListMenuItemsMenuInfoMenuTextDom = document.createElement("div")
        xPageMenuListMenuItemsMenuInfoMenuTextDom.classList.add("menu-text")
        xPageMenuListMenuItemsMenuInfoMenuTextDom.innerHTML = `${element.desc}`
        xPageMenuListMenuItemsMenuInfoDom.append(xPageMenuListMenuItemsMenuInfoMenuTextDom)

    });

}

function xPageMenuButtonListeners(xPageMenuFilterButton1, xPageMenuFilterButton2, xPageMenuFilterButton3, xPageMenuFilterButton4) {

    const removeChildsFunc = (parent) => {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    };
    
    xPageMenuFilterButton1.addEventListener("click", () => {
        let oldListDom = document.querySelector(".section-center")
        removeChildsFunc(oldListDom)
        xPageMenuListDomFunc("All")
        console.log("all")
    })
    xPageMenuFilterButton2.addEventListener("click", () => {
        let oldListDom = document.querySelector(".section-center")
        removeChildsFunc(oldListDom)
        xPageMenuListDomFunc("Korea")
        console.log("korea")
    })
    xPageMenuFilterButton3.addEventListener("click", () => {
        let oldListDom = document.querySelector(".section-center")
        removeChildsFunc(oldListDom)
        xPageMenuListDomFunc("Japan")
    })
    xPageMenuFilterButton4.addEventListener("click", () => {
        let oldListDom = document.querySelector(".section-center")
        removeChildsFunc(oldListDom)
        xPageMenuListDomFunc("China")
    })
}