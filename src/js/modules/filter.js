const filter = () => {
    const menu = document.querySelector(".portfolio-menu"),
          items = menu.querySelectorAll("li"),
        //   btnAll = menu.querySelector(".all"),
        //   btnLovers = menu.querySelector(".lovers"),
        //   btnChef = menu.querySelector(".chef"),
        //   btnGirl = menu.querySelector(".girl"),
        //   btnGuy = menu.querySelector(".guy"),
        //   btnGrandmother = menu.querySelector(".grandmother"),
        //   btnGranddad = menu.querySelector(".granddad"),
          wrapper = document.querySelector(".portfolio-wrapper"),
          markAll = wrapper.querySelectorAll(".all"),
        //   markGirl = wrapper.querySelectorAll(".girl"),
        //   markLovers = wrapper.querySelectorAll(".lovers"),
        //   markChef = wrapper.querySelectorAll(".chef"),
        //   markGuy = wrapper.querySelectorAll(".guy"),
          no = document.querySelector(".portfolio-no");

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = "none";
            mark.classList.remove("animated", "fadeIn");
        });

        no.style.display = "none";
        no.classList.remove("animated", "fadeIn");

        if (markType.length) {
            markType.forEach(mark => {
                mark.style.display = "block";
                mark.classList.add("animated", "fadeIn");
            });
        } else {
            no.style.display = "block";
            no.classList.add("animated", "fadeIn");
        }
    };

// Первый вариант
//     btnAll.addEventListener("click", () => {
//         typeFilter(markAll);
//     });

//     btnLovers.addEventListener("click", () => {
//         typeFilter(markLovers);
//     });

//     btnChef.addEventListener("click", () => {
//         typeFilter(markChef);
//     });

//     btnGirl.addEventListener("click", () => {
//         typeFilter(markGirl);
//     });

//     btnGuy.addEventListener("click", () => {
//         typeFilter(markGuy);
//     });

//     btnGrandmother.addEventListener("click", () => {
//         typeFilter();
//     });

//     btnGranddad.addEventListener("click", () => {
//         typeFilter();
//     });

//     menu.addEventListener("click", (e) => {
//         let target = e.target;

//         if (target && target.tagName == "LI") {
//             items.forEach(btn => btn.classList.remove("active"));
//             target.classList.add("active");
//         }
//     });

// Второй вариант

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            const markType = wrapper.querySelectorAll(`.${e.target.classList[0]}`);
            typeFilter(markType);
            
            let target = e.target;
            if (target && target.tagName == "LI") {
                items.forEach(btn => btn.classList.remove("active"));
                target.classList.add("active");
            }
        });
        
    })




};

export default filter;