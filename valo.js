document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for nav links with offset adjustment
    document.querySelectorAll(".top-nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
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


            setTimeout(() => {
                document.querySelectorAll(".hover-box").forEach(box => {
                    box.style.opacity = "1";
                    box.style.transform = "translateY(0)";
                });
            }, 100);


            textBox.textContent = text;
            textBox.style.display = "block";
            setTimeout(() => {
                textBox.style.opacity = "1";
            }, 300);
        });
    });

    let agentDisplay = document.getElementById("agent-display");
    let mainAgentImage = document.getElementById("main-agent-image");
    let agentName = document.getElementById("agent-name");
    let agentDescription = document.getElementById("agent-description");
    let agentBoxes = document.querySelectorAll(".agent-box");
    
    agentBoxes.forEach(box => {
        box.addEventListener("click", function () {
            let name = this.getAttribute("onclick").match(/'([^']+)'/g)[0].replace(/'/g, "");
            let description = this.getAttribute("onclick").match(/'([^']+)'/g)[1].replace(/'/g, "");
            let imageSrc = this.getAttribute("onclick").match(/'([^']+)'/g)[2].replace(/'/g, "");

            mainAgentImage.style.opacity = "0";
            agentName.style.opacity = "0";
            agentDescription.style.opacity = "0";

            setTimeout(() => {
                mainAgentImage.src = imageSrc;
                agentName.textContent = name;
                agentDescription.textContent = description;
                agentDisplay.style.display = "flex";
                
                mainAgentImage.style.opacity = "1";
                agentName.style.opacity = "1";
                agentDescription.style.opacity = "1";
            }, 300);
        });
    });
});
