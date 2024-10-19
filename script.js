document.addEventListener("DOMContentLoaded", function() {
    const projectList = document.getElementById('project-list');

    fetch('https://api.github.com/users/Abdullah-Yilmazer/repos')
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                projectCard.innerHTML = `
                    <h2>${repo.name}</h2>
                    <p>${repo.description || "Açıklama yok."}</p>
                    <a href="${repo.html_url}" target="_blank">GitHub'da Gör</a>
                `;
                projectList.appendChild(projectCard);
            });
        })
        .catch(error => console.error('GitHub API hatası:', error));
});


function searchProjects() {
    const searchInput = document.getElementById('search');
    const searchValue = searchInput.value.toLowerCase();
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(projectCard => {
        const projectName = projectCard.querySelector('h2').textContent.toLowerCase();
        if (projectName.includes(searchValue)) {
            projectCard.style.display = 'block';
        } else {
            projectCard.style.display = 'none';
        }
    });
}

document.getElementById('search').addEventListener('input', searchProjects);
