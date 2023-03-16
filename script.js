const addBtn = document.querySelector(".plus");
const subBtn = document.querySelector(".minus");
const increment = document.querySelector(".number");

// INCREMENT NUMBERS
addBtn.addEventListener("click", function () {
    increment.textContent ++
});

// DECREMENT NUMBERS
subBtn.addEventListener("click", function () {
    if (increment.textContent <= "0") {
        
    } else {
    increment.textContent --         
    }

});


// ADDING ITEMS TO CART AND CALCULATING AMOUNT
const cartNum = document.querySelector(".checkout-number");
const addToCart = document.querySelector(".add-to-cart-btn");

addToCart.addEventListener("click",  () => {
    if (increment.textContent <= "0") {
        
    } else {
    cartNum.textContent = increment.textContent
    amount.textContent = increment.textContent
    cartNum.style.cssText= "display: flex;"

    checkOutDisplay.style.cssText= "display: flex;"
    emptyCart.style.cssText= "display: none;"

    const total = document.querySelector(".total");
    total.textContent = '$' + eval(125 * amount.textContent) + '.00'        
    }
})


// SHOWING CART MENU
const checkOut = document.querySelector(".checkout")
const cartDisplay = document.querySelector(".cart-display")

checkOut.addEventListener("click", () => {
   cartDisplay.classList.toggle("active-cart")
})


// REMOVE ITEMS FROM CART ON DELETE
const deleteItem = document.querySelector(".delete");
const emptyCart = document.querySelector(".cart-empty");
const checkOutDisplay = document.querySelector(".cart-result-inner");
const amount = document.querySelector(".amount");

deleteItem.addEventListener("click", () => {
    checkOutDisplay.style.cssText= "display: none;"
    cartNum.style.cssText= "display: none;"
    emptyCart.style.cssText= "display: flex;"

    increment.textContent = 0
})



// CHANGING IMAGE SLIDES
const mainImg = document.querySelector("#main-img");
const thumbNail = document.querySelectorAll(".thumbnail");

thumbNail.forEach(nail => {
    nail.addEventListener("click", (e) => {
        mainImg.src = e.target.src.replace('-thumbnail','')

    })
});

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");

one.addEventListener("click", () => {
    one.parentNode.classList.add("active-lightbox");

    two.parentNode.classList.remove("active-lightbox");
    three.parentNode.classList.remove("active-lightbox");
    four.parentNode.classList.remove("active-lightbox");
})

two.addEventListener("click", () => {
    two.parentNode.classList.add("active-lightbox");

    one.parentNode.classList.remove("active-lightbox");
    three.parentNode.classList.remove("active-lightbox");
    four.parentNode.classList.remove("active-lightbox");
})

three.addEventListener("click", () => {
    three.parentNode.classList.add("active-lightbox");

    two.parentNode.classList.remove("active-lightbox");
    one.parentNode.classList.remove("active-lightbox");
    four.parentNode.classList.remove("active-lightbox");
})

four.addEventListener("click", () => {
    four.parentNode.classList.add("active-lightbox");

    two.parentNode.classList.remove("active-lightbox");
    three.parentNode.classList.remove("active-lightbox");
    one.parentNode.classList.remove("active-lightbox");
})

const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".previous")
let index = 0;

const slide = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];

nextBtn.addEventListener("click", () => {
    index < 3 && index ++
    mainImg.src = slide[index]
})

prevBtn.addEventListener("click", () => {
    index > 0 && index --
    mainImg.src = slide[index]
})

const menu = document.querySelector(".menu")
const overLay = document.querySelector(".navbar-overlay")
const close = document.querySelector(".close")

menu.addEventListener("click", () => {
    overLay.style.cssText = "left: 0;"
})

close.addEventListener("click", () => {
    overLay.style.cssText = "left: -100%;"
})