// dropdown

const dropContent = document.querySelector(".filter-dropdown__list")
const filterDropdown = document.querySelector(".filter-dropdown")

function dropdown () {

    window.addEventListener("click", e => {
        if (e.target === filterDropdown) {
            dropContent.classList.toggle("show")
            filterDropdown.firstElementChild.classList.toggle("transform-arrow")
        } else if (e.target === dropContent) {
            e.stopPropagation()
        } else {
            dropContent.classList.remove("show")
            filterDropdown.firstElementChild.classList.remove("transform-arrow")
        }
    })
}

dropdown()


//Меняет контент в значении по defaul
const sortDefaultValue = document.querySelector(".filter-dropdown__default")

function sorting () {
    dropContent.addEventListener("click", e => {
        if (e.target.classList.contains("filter-dropdown__item")) {
            sortDefaultValue.textContent = e.target.textContent
        }
    })
}

sorting()