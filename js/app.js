const banderas = document.getElementById('banderas')

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        banderillas(data)
        formularioCliente(data)
        filtros(data)
    } catch (error) {
        console.log(error)
    }
}

const banderillas = data => {
    let elementos = '';
    data.forEach(item => {
        elementos += `
        <article class="card">
            <img src="${item.bandera.url}" alt="Bandera de ${item.bandera.url}" class="img-fluid">
            <div class="card-content">
                <h1>${item.nombre}</h1>
                <p>
                    <a href="pais.html?name=${item.name}">Más info</a>
                </p>
            </div>
        </article>
        `;
    });
    banderas.innerHTML = elementos;
}
