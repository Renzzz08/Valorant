document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelectorAll(".top-nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    });


    let textBox = document.getElementById("textBox");
    let hoverContainer = document.getElementById("hoverContainer");
    let classContainer = document.getElementById("classContainer");
    
    fetch("classes.json")
        .then(response => response.json())
        .then(classData => {
            classContainer.innerHTML = "";
            for (let className in classData.classes) {
                let classDiv = document.createElement("div");
                classDiv.classList.add("roles");
                
                let classImg = document.createElement("img");
                classImg.src = `Property 1=${className}.png`;
                classImg.alt = className;
                classImg.dataset.class = className;
                
                let classText = document.createElement("p");
                classText.textContent = className;
                
                classDiv.appendChild(classImg);
                classDiv.appendChild(classText);
                classContainer.appendChild(classDiv);
            }

            document.querySelectorAll(".roles img").forEach(img => {
                img.addEventListener("click", function () {
                    let className = this.dataset.class;
                    let classInfo = classData.classes[className];
                    if (classInfo) {
                        hoverContainer.innerHTML = "";
                        classInfo.agents.forEach(src => {
                            let hoverBox = document.createElement("div");
                            hoverBox.classList.add("hover-box");
                            let hoverImg = document.createElement("img");
                            hoverImg.src = src;
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
                        textBox.textContent = classInfo.description;
                        textBox.style.display = "block";
                        setTimeout(() => { textBox.style.opacity = "1"; }, 300);
                    }
                });
            });
        })
        .catch(error => console.error("Error loading class data:", error));

        fetch("Valos.json")
        .then(response => response.json())
        .then(data => {
            let agentContainer = document.getElementById("agentContainer");
            agentContainer.innerHTML = "";
            
            let agentRow;
            let counter = 0;
            for (let agentKey in data.agents) {
                if (counter % 4 === 0) {
                    agentRow = document.createElement("div");
                    agentRow.classList.add("agent-row");
                    agentContainer.appendChild(agentRow);
                }
                
                let agentBox = document.createElement("div");
                agentBox.classList.add("agent-box");
                
                let agentImg = document.createElement("img");
                agentImg.src = data.agents[agentKey].icon;
                agentImg.alt = ""; // Prevent text from appearing
                agentImg.classList.add("agent-icon");
                agentBox.dataset.agent = agentKey;
                
                agentBox.appendChild(agentImg);
                agentRow.appendChild(agentBox);
                counter++;
            }

            let agentDisplay = document.getElementById("agent-display");
            let mainAgentImage = document.getElementById("main-agent-image");
            let agentName = document.getElementById("agent-name");
            let agentDescription = document.getElementById("agent-description");
            let closeButton = document.createElement("button");
            closeButton.textContent = "X";
            closeButton.classList.add("close-btn");
            closeButton.addEventListener("click", function () {
                agentDisplay.style.display = "none";
            });
            agentDisplay.appendChild(closeButton);
            
            document.querySelectorAll(".agent-box").forEach(box => {
                box.addEventListener("click", function () {
                    let agentKey = this.dataset.agent;
                    let agentInfo = data.agents[agentKey];
                    if (agentInfo) {
                        mainAgentImage.style.opacity = "0";
                        agentName.style.opacity = "0";
                        agentDescription.style.opacity = "0";
                        setTimeout(() => {
                            mainAgentImage.src = agentInfo.image;
                            agentName.textContent = agentInfo.name;
                            agentDescription.textContent = agentInfo.description;
                            agentDisplay.style.display = "flex";
                            mainAgentImage.style.opacity = "1";
                            agentName.style.opacity = "1";
                            agentDescription.style.opacity = "1";
                        }, 300);
                    }
                });
            });
        })
        .catch(error => console.error("Error loading agent data:", error));
});
