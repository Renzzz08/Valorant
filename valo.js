document.addEventListener("DOMContentLoaded", function () {
    let textBox = document.getElementById("textBox");
    let hoverContainer = document.getElementById("hoverContainer");
    let images = document.querySelectorAll(".classes img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            let hoverSrcList = img.getAttribute("data-hover").split(",");
            let text = img.getAttribute("data-text");

            // Clear previous hover images
            hoverContainer.innerHTML = "";

            // Create and display hover images inside boxes
            hoverSrcList.forEach(src => {
                let hoverBox = document.createElement("div");
                hoverBox.classList.add("hover-box");

                let hoverImg = document.createElement("img");
                hoverImg.src = src.trim();
                hoverImg.classList.add("hover-image");

                hoverBox.appendChild(hoverImg);
                hoverContainer.appendChild(hoverBox);

                // Apply animation with delay
                setTimeout(() => {
                    hoverBox.style.opacity = "1";
                    hoverBox.style.transform = "translateY(0)";
                }, 100);
            });

            // Display text inside the centered box
            textBox.textContent = text;
            textBox.style.display = "block";

            // Apply fade-in effect
            setTimeout(() => {
                textBox.style.opacity = "1";
            }, 300);
        });
    });

    // Smooth scrolling function
    document.querySelectorAll('.top-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
});