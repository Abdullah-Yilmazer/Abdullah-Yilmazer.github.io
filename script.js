document.addEventListener("DOMContentLoaded", function () {
  const projectList = document.getElementById("project-list");

  fetch("https://api.github.com/users/Abdullah-Yilmazer/repos")
    .then((response) => response.json())
    .then((repos) => {
      repos
        .filter((repo) => !repo.fork)
        .forEach((repo) => {
          const screenshotUrl = `https://raw.githubusercontent.com/Abdullah-Yilmazer/${repo.name}/master/screenshot.png`;
          let imgUrl = "default-image.png";
          const projectCard = document.createElement("div");
          projectCard.classList.add("project-card");

          fetch(screenshotUrl)
            .then((response) => {
              if (response.ok) {
                imgUrl = screenshotUrl;
                projectCard.innerHTML += `<div class="screenshot"><img src="${imgUrl}" alt="Screenshot"></div>`;
                projectCard.innerHTML += `
                          <h2>${repo.name}</h2>
                          <p>${repo.description || "Açıklama yok."}</p>
                          <a href="${repo.html_url}" target="_blank">GitHub'da Gör</a>
                          <a href="./demo.html?repo=${repo.name}" target="_blank">demoyu Gör</a>
                          `;
              } else {
                projectCard.innerHTML += `<img src="${imgUrl}" alt="Screenshot">`;
                projectCard.innerHTML += `
                          <h2>${repo.name}</h2>
                          <p>${repo.description || "Açıklama yok."}</p>
                          <a href="${repo.html_url}" target="_blank">GitHub'da Gör</a>
                          `;
              }
            })
            .catch((error) => {
              console.error("Resim yükleme hatası:", error);
              projectCard.innerHTML += `<div class="screenshot"><img src="${imgUrl}" alt="Screenshot"> </div>`;
              projectCard.innerHTML += `
                        <h2>${repo.name}</h2>
                        <p>${repo.description || "Açıklama yok."}</p>
                        <a href="${repo.html_url}" target="_blank">GitHub'da Gör</a>
                        `;
            });
          projectList.appendChild(projectCard);
        });
    })
    .catch((error) => console.error("GitHub API hatası:", error));
});

function searchProjects() {
  const searchInput = document.getElementById("search");
  const searchValue = searchInput.value.toLowerCase();
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((projectCard) => {
    const projectName = projectCard.querySelector("h2").textContent.toLowerCase();
    if (projectName.includes(searchValue)) {
      projectCard.style.display = "block";
    } else {
      projectCard.style.display = "none";
    }
  });
}

document.getElementById("search").addEventListener("input", searchProjects);
