document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for nav links
    document.querySelectorAll(".top-nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    let textBox = document.getElementById("textBox");
    let hoverContainer = document.getElementById("hoverContainer");
    let images = document.querySelectorAll(".classes img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            let hoverSrcList = img.getAttribute("data-hover").split(",");
            let text = img.getAttribute("data-text");

            // Clear previous hover images
            hoverContainer.innerHTML = "";

            hoverSrcList.forEach(src => {
                let hoverImg = document.createElement("img");
                hoverImg.src = src.trim();
                hoverImg.classList.add("hover-image");
                hoverContainer.appendChild(hoverImg);
            });

            // Make hover images appear smoothly
            setTimeout(() => {
                document.querySelectorAll(".hover-image").forEach(hoverImg => {
                    hoverImg.style.opacity = "1";
                    hoverImg.style.transform = "translateY(0)";
                });
            }, 100);

            // Show text box again
            textBox.textContent = text;
            textBox.style.display = "block";
            setTimeout(() => {
                textBox.style.opacity = "1";
            }, 300);
        });
    });
});