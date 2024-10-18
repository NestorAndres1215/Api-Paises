# Proyecto: API de Países

## Descripción
La API de Países es una herramienta que proporciona información detallada sobre diferentes países del mundo. La API permite a los usuarios acceder a una amplia variedad de datos sobre cada país, facilitando la búsqueda y consulta de información relevante.

## Información Contenida en la API

La API incluye los siguientes datos para cada país:

- **Nombre del País:** El nombre oficial del país.
- **Código de Llamada:** El prefijo telefónico internacional.
- **Capital:** La ciudad capital del país.
- **Población:** El número total de habitantes.
- **Región:** La región geográfica en la que se encuentra el país (por ejemplo, Europa, América, etc.).
- **Subregión:** La subregión específica (por ejemplo, América Central, Europa del Este, etc.).
- **Gentilicio:** El término que se utiliza para referirse a los habitantes del país.
- **Zona Horaria:** La diferencia horaria con respecto al UTC.
- **Fronteras:** Una lista de países que comparten fronteras con este país.
- **Nombre Nativo:** El nombre del país en su idioma oficial.
- **Código Numérico:** Un código numérico asignado al país.
- **Moneda:** La moneda oficial utilizada en el país.
- **Idiomas:** Los idiomas hablados en el país.
- **Traducciones:** Traducciones del nombre del país en varios idiomas (español, inglés, francés, alemán, etc.).
- **Independencia:** Información sobre la independencia del país, incluyendo la fecha y detalles sobre el proceso.
- **Presidente:** Información sobre el presidente actual, incluyendo su nombre, fecha de asunción y partido político.
- **Deporte Popular:** El deporte más popular en el país y detalles sobre su importancia cultural.
- **Bandera:** Un enlace a la imagen de la bandera del país y una descripción de sus características.

## Ejemplo de Datos
A continuación, se presenta un ejemplo de la información que se puede obtener a través de la API para el país Alemania:

```json
{
    "nombre": "Alemania",
    "codigoDeLlamada": "+49",
    "capital": "Berlín",
    "poblacion": 83783942,
    "region": "Europa",
    "subRegion": "Europa Occidental",
    "gentilicio": "alemán/a",
    "zonaHoraria": "UTC+1",
    "fronteras": [
        "Dinamarca",
        "Polonia",
        "República Checa",
        "Austria",
        "Suiza",
        "Francia",
        "Luxemburgo",
        "Bélgica",
        "Países Bajos"
    ],
    "nombreNativo": "Deutschland",
    "codigoNumerico": "276",
    "moneda": "Euro",
    "idiomas": [
        "Alemán"
    ],
    "independencia": {
        "fecha": "No hay una fecha única; la unificación se completó el 3 de octubre de 1990.",
        "detalles": "Alemania se unificó tras la caída del Muro de Berlín y el colapso de la República Democrática Alemana."
    },
    "presidente": {
        "nombre": "Frank-Walter Steinmeier",
        "fechaDeAsunción": "2017",
        "partido": "Partido Socialdemócrata de Alemania"
    },
    "deporte": {
        "deportePopular": "Fútbol",
        "detalles": "El fútbol es el deporte más popular en Alemania, con una rica historia y éxito en competiciones internacionales."
    },
    "bandera": {
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
        "descripcion": "Bandera de Alemania, con tres franjas horizontales de negro, rojo y dorado."
    }
}
