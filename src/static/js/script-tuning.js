const container = document.querySelector(".exercise-options");

if (container) {
    const afinacoes = [
        { titulo: "Afinação vocal", descricao: "Pratique cantar afinado", link: "/exercises/afinacao/vocal" },
        { titulo: "Afinação instrumental", descricao: "Treine afinação de instrumentos", link: "/exercises/afinacao/instrumental" }
    ];

    afinacoes.forEach(ex => {
        const card = document.createElement("a");
        card.className = "exercise-card";
        card.href = ex.link;
        card.innerHTML = `
            <h3 class="card-title">${ex.titulo}</h3>
            <p class="card-description">${ex.descricao}</p>
        `;
        container.appendChild(card);
    });
}
