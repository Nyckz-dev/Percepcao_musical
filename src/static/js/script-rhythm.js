const container = document.querySelector(".exercise-options");

if (container) {
    const ritmicos = [
        { titulo: "Claves rítmicas", descricao: "Pratique diferentes padrões rítmicos", link: "/exercises/ritmica/claves" },
        { titulo: "Polirritmia", descricao: "Treine polirritmia e coordenação", link: "/exercises/ritmica/polirritmia" }
    ];

    ritmicos.forEach(ex => {
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
