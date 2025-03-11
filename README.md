# 🌍 API de Países

## 📌 Descripción
La **API de Países** es una herramienta que proporciona información detallada sobre diferentes países del mundo. La API permite a los usuarios acceder a una amplia variedad de datos sobre cada país, facilitando la búsqueda y consulta de información relevante.

## 📖 Información Contenida en la API

### 📋 Datos disponibles por cada país:
- **🌍 Nombre del País:** El nombre oficial del país.
- **📞 Código de Llamada:** Prefijo telefónico internacional.
- **🏙️ Capital:** Ciudad capital del país.
- **👥 Población:** Número total de habitantes.
- **🌏 Región:** Región geográfica del país (Europa, América, etc.).
- **🌍 Subregión:** Subregión específica (América Central, Europa del Este, etc.).
- **🤓 Gentilicio:** Término usado para referirse a los habitantes del país.
- **🌌 Zona Horaria:** Diferencia horaria respecto a UTC.
- **🛏️ Fronteras:** Lista de países con los que comparte frontera.
- **🏛️ Nombre Nativo:** Nombre del país en su idioma oficial.
- **📃 Código Numérico:** Identificación numérica del país.
- **💰 Moneda:** Moneda oficial del país.
- **🎧 Idiomas:** Idiomas hablados en el país.
- **📝 Traducciones:** Traducciones del nombre del país en varios idiomas.
- **🏳️ Independencia:** Fecha y detalles sobre la independencia.
- **🌟 Presidente:** Nombre, fecha de asunción y partido político del presidente actual.
- **🏀 Deporte Popular:** Deporte más practicado en el país.
- **🏳️ Bandera:** Enlace a la imagen de la bandera y su descripción.

## 📚 Ejemplo de Datos
A continuación, se presenta un ejemplo de la información proporcionada por la API para **Alemania**:

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
        "Dinamarca", "Polonia", "República Checa", "Austria",
        "Suiza", "Francia", "Luxemburgo", "Bélgica", "Países Bajos"
    ],
    "nombreNativo": "Deutschland",
    "codigoNumerico": "276",
    "moneda": "Euro",
    "idiomas": ["Alemán"],
    "independencia": {
        "fecha": "3 de octubre de 1990",
        "detalles": "Alemania se unificó tras la caída del Muro de Berlín."
    },
    "presidente": {
        "nombre": "Frank-Walter Steinmeier",
        "fechaDeAsunción": "2017",
        "partido": "Partido Socialdemócrata de Alemania"
    },
    "deporte": {
        "deportePopular": "Fútbol",
        "detalles": "El fútbol es el deporte más popular en Alemania."
    },
    "bandera": {
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
        "descripcion": "Bandera de Alemania con franjas horizontales de negro, rojo y dorado."
    }
}
```
