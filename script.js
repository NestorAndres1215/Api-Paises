let countries = [];

// Función para cargar el JSON de los países
async function loadCountries() {
    const response = await fetch('api.json');
    countries = await response.json();

    // Ordenar los países alfabéticamente por nombre
    countries.sort((a, b) => a.nombre.localeCompare(b.nombre));

    displayCountries(countries); // Inicializa mostrando todos los países
}

// Función para mostrar los países
function displayCountries(filteredCountries) {
    const countriesContainer = document.getElementById('countriesContainer');
    countriesContainer.innerHTML = ''; // Limpiar contenedor

    filteredCountries.forEach(country => {
        const countryCard = `
         <div class="col-md-3">
    <div class="card h-100" style="margin-bottom: 20px; height: 100%; transition: transform 0.2s;">
        <img src="${country.bandera.url}" class="card-img-top" alt="Bandera de ${country.nombre}" style="height: 150px; object-fit: cover; border-top-left-radius: .25rem; border-top-right-radius: .25rem;">
        <div class="card-body" style="display: flex; flex-direction: column; flex-grow: 1;">
            <h5 class="card-title" style="font-weight: bold; color: #0056b3; text-align: center;">${country.nombre}</h5>
            <div class="mt-auto">
                <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#countryModal" onclick="showCountryInfo('${country.nombre}')" style="background-color: #007bff; border: none; border-radius: 20px; transition: background-color 0.3s; padding: 10px 15px; color: white; text-decoration: none; display: inline-block;">Más información</a>
            </div>
        </div>
    </div>
</div>

<style>
    .card:hover {
        transform: scale(1.05); /* Aumenta el tamaño al pasar el mouse */
    }

    .btn-primary:hover {
        background-color: #0056b3; /* Color al pasar el mouse */
    }
</style>

        `;
        countriesContainer.innerHTML += countryCard; // Añadir tarjeta al contenedor
    });
}

// Función para filtrar países
function filterCountries() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const selectedRegion = document.getElementById('regionSelect').value;

    let filteredCountries = countries;

    // Filtrar por región
    if (selectedRegion === 'Americas') {
        filteredCountries = filteredCountries.filter(country => country.region === 'América');
    } else if (selectedRegion === 'Europe') {
        filteredCountries = filteredCountries.filter(country => country.region === 'Europa');
    } else if (selectedRegion === 'Asia') {
        filteredCountries = filteredCountries.filter(country => country.region === 'Asia');
    } else if (selectedRegion === 'Africa') {
        filteredCountries = filteredCountries.filter(country => country.region === 'África');
    } else if (selectedRegion === 'Oceania') {
        filteredCountries = filteredCountries.filter(country => country.region === 'Oceanía');
    }

    // Filtrar por nombre
    if (searchValue) {
        filteredCountries = filteredCountries.filter(country =>
            country.nombre.toLowerCase().includes(searchValue)
        );
    }

    // Ordenar alfabéticamente los países filtrados
    filteredCountries.sort((a, b) => a.nombre.localeCompare(b.nombre));

    displayCountries(filteredCountries); // Mostrar países filtrados
}

// Función para mostrar la información del país en el modal
function showCountryInfo(countryName) {
    const country = countries.find(c => c.nombre === countryName); // Buscar el país

    const content = `

     <div class="modal-content">
            <div class="modal-header" style="background-color: lightsteelblue;">
    <div class="w-100 text-center"> <!-- Centra el contenido -->
        <h5 class="modal-title" style="font-weight: bold; font-family: 'Arial', sans-serif;" id="countryModalLabel">
            ${country.nombre}
            <br><small style="font-weight: normal;">(${country.nombreNativo})</small> <!-- Nombre nativo -->
        </h5>
    </div>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
            <div class="cardt"> 


                <div class="card-body">
                    <div class="row">
     <div class="col-md-6">
                    <p><strong>Capital:</strong> ${country.capital}</p>
                    <p><strong>Población:</strong> ${country.poblacion.toLocaleString()}</p>
                    <p><strong>Zona Horaria:</strong> ${country.zonaHoraria}</p>
                    <p><strong>Fronteras:</strong> ${country.fronteras.join(', ')}</p>
                    <p><strong>Moneda:</strong> ${country.moneda}</p>
                    <p><strong>Gentilicio:</strong> ${country.gentilicio}</p>
                    <p><strong>Independencia:</strong> ${country.independencia.fecha} (${country.independencia.detalles})</p>
                 
                </div>
                <div class="col-md-6">
                   <p><strong>Código de Llamada:</strong> ${country.codigoDeLlamada}</p> <!-- Agregado -->
                    <p><strong>Código Numérico:</strong> ${country.codigoNumerico}</p> <!-- Agregado -->
                    <p><strong>Idiomas:</strong> ${country.idiomas.join(', ')}</p>
                    <p><strong>Subregión:</strong> ${country.subRegion}</p>
                    <p><strong>Presidente:</strong> ${country.presidente.nombre}</p>
                    <p><strong>Partido:</strong> ${country.presidente.partido}</p> <!-- Agregado -->
                    <p><strong>Ciudades Importantes:</strong> ${country.ciudadesImportantes.join(', ')}</p> <!-- Agregado -->
                     <p><strong>Deporte:</strong> ${country.deporte.deportePopular}</p> <!-- Agregado -->
                </div>
                    </div>
                </div>
            </div>
        </div>
`;

    document.getElementById('modalContent').innerHTML = content; // Agregar contenido al modal
}

// Escuchar cambios en el campo de búsqueda
document.getElementById('searchInput').addEventListener('input', filterCountries);

// Lógica para filtrar países al seleccionar una región
document.getElementById('regionSelect').addEventListener('change', filterCountries);

// Cargar países al iniciar
loadCountries();
