const container = document.querySelector(".exercise-options");

if (container) {
    const exercicios = [
        { titulo: "Percepção intervalar", descricao: "Pratique a sua percepção e comece a tirar músicas de ouvido!", link: "/Menu.pn" },
        { titulo: "Percepção Rítmica", descricao: "Aprenda diferentes estilos musicais e enriqueça a sua jam!", link: "/Menu.rit" },
        { titulo: "Afinação", descricao: "Desenvolva sua afinação e emocione com seu canto!", link: "/Menu.tun" }
    ];

    exercicios.forEach(ex => {
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

