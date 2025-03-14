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

    let rolesHeader = document.querySelector(".roles");
    let textBox = document.getElementById("textBox");
    let hoverContainer = document.getElementById("hoverContainer");
    let images = document.querySelectorAll(".classes img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            let roleName = img.getAttribute("alt") || "Selected Role";
            let hoverSrcList = img.getAttribute("data-hover").split(",");
            let text = img.getAttribute("data-text");

            // Update the role title
            rolesHeader.textContent = roleName;

            // Clear previous hover-boxes
            hoverContainer.innerHTML = "";

            hoverSrcList.forEach(src => {
                let hoverBox = document.createElement("div");
                hoverBox.classList.add("hover-box");

                let hoverImg = document.createElement("img");
                hoverImg.src = src.trim();
                hoverImg.classList.add("hover-image");

                hoverBox.appendChild(hoverImg);
                hoverContainer.appendChild(hoverBox);
            });

            // Make hover images appear smoothly
            setTimeout(() => {
                document.querySelectorAll(".hover-box").forEach(box => {
                    box.style.opacity = "1";
                    box.style.transform = "translateY(0)";
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