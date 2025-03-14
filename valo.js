<<<<<<< HEAD
document.getElementById("scrollBtn").addEventListener("click", function() {
    window.scrollBy({
        top: window.innerHeight, 
        behavior: "smooth"
    });
});
//this is for the classes function
=======
let scrollBtn = document.getElementById("scrollBtn");
if (scrollBtn) {
    scrollBtn.addEventListener("click", function() {
        window.scrollBy({
            top: window.innerHeight, 
            behavior: "smooth"
        });
    });
} 

>>>>>>> 6f78b2de5bff794d54978ff309a7c808da3f71df
document.addEventListener("DOMContentLoaded", function () {
    let textBox = document.getElementById("textBox");
    let hoverContainer = document.getElementById("hoverContainer");
    let images = document.querySelectorAll(".classes img");

    if (textBox && hoverContainer && images.length > 0) {
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
    }
});