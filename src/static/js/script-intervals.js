const container = document.querySelector(".exercise-options");

if (container) {
    const intervalares = [
        { titulo: "Nota Única", descricao: "Treine percepção de notas isoladas", link: "/Nota_Unica" },
        { titulo: "Escalas", descricao: "Pratique escalas musicais", link: "/exercises/scales" },
        { titulo: "Intervalos", descricao: "Treine percepção de intervalos", link: "/exercises/intervals" },
        { titulo: "Acordes", descricao: "Pratique percepção de acordes", link: "/exercises/chords" }
    ];

    intervalares.forEach(ex => {
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
