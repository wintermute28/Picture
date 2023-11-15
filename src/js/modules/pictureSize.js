const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showImg (block) {
        const img = block.querySelector("img");
        //Анимация, по желанию
        img.classList.add("animated", "fadeIn");
        block.classList.remove("animated", "fadeIn");

        img.src = img.src.slice(0, -4) + "-1.png";
        block.querySelectorAll("p:not(.sizes-hit)").forEach(p => {
            p.style.display = "none";
        });
    }

    function hideImg (block) {
        const img = block.querySelector("img");
        img.src = img.src.slice(0, -6) + ".png";
        block.querySelectorAll("p:not(.sizes-hit)").forEach(p => {
            p.style.display = "block";
        });
        //Анимация, по желанию
        img.classList.remove("animated", "fadeIn");
        block.classList.add("animated", "fadeIn");
    }

    blocks.forEach(block => {
        block.addEventListener("mouseover", () => {
            showImg(block);
        });

        block.addEventListener("mouseout", () => {
            hideImg(block);
        });
    });

};

export default pictureSize;