const bx = document.querySelectorAll(".container .bx");
const p = document.querySelectorAll(".container p");


bx.forEach((a , i) => {
    a.addEventListener("click", () => {        
        
        bx.forEach((e) => {
            e.classList.remove("active");
        })
        p.forEach((n) => {
            n.classList.remove("active");
        })
        p[i].classList.add("active");
        a.classList.add("active");
    })
})