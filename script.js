// 🔥 Función para mostrar/ocultar el menú desplegable
function toggleMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// 🔹 Datos predefinidos para cada opción (EDITA AQUÍ)
const tablesData = {
    1: [
        ["Asignaturas", "P1", "F", "P2", "F", "EF", "F", "Final", "F"],
        ["SOCIEDADES MERCANTILES", "9.8", "", "", "", "", "", "", "0"],
        ["DERECHO PROCESAL DEL TRABAJO", "10.0", "", "", "", "", "", "", "2"],
        ["DERECHO PROCESAL PENAL", "9.5", "", "", "", "", "", "", "0"],
        ["FILOSOFÍA DEL DERECHO", "9.9", "", "", "", "", "", "", "3"],
        ["SEGURIDAD SOCIAL", "10.0", "", "", "", "", "", "", "0"],
        ["NIVEL AVANZADO INGLÉS I", "9.7", "", "", "", "", "", "", "0"]
    ],
    2: [
        ["Asignaturas", "P1", "F", "P2", "F", "EF", "F", "Final", "F"],
        ["HISTORIA DEL DERECHO MEXICANO", "10.0", "", "10.0", "", "9.8", "", "9.9", "2"],
        ["DERECHO COLECTIVO DEL TRABAJO", "9.7", "", "10.0", "", "9.5", "", "9.7", "0"],
        ["DELITO EN PARTICULAR", "10.0", "", "9.5", "", "9.9", "", "9.8", "1"],
        ["CONTRATOS CIVILES", "9.6", "", "10.0", "", "9.8", "", "9.8", "1"],
        ["MECANISMOS ALTERNOS DE SOLUCIÓN Y CONTROVERSIA", "9.4", "", "9.6", "", "8.5", "", "9.1", "4"],
        ["NIVEL INTERMEDIO II INGLÉS", "9.8", "", "10.0", "", "9.9", "", "9.9", "2"]

    ],
    3: [
        ["Asignaturas", "P1", "F", "P2", "F", "EF", "F", "Final", "F"],
        ["DERECHOS HUMANOS", "9.5", "", "9.0", "", "10.0", "", "9.5", "1"],
        ["DERECHO INDIVIDUAL DEL TRABAJO", "10.0", "", "9.9", "", "10.0", "", "9.9", "0"],
        ["DERECHO PENAL", "10.0", "", "9.2", "", "9.9", "", "9.7", "2"],
        ["OBLIGACIONES CIVILES", "9.7", "", "9.6", "", "10.0", "", "9.7", "6"],
        ["INTERPRETACIÓN Y ARGUMENTACIÓN JURÍDICA", "9.4", "", "9.8", "", "10.0", "", "9.7", "0"],
        ["DERECHO ECOLÓGICO", "9.8", "", "9.9", "", "10.0", "", "9.9", "0"],
        ["NIVEL INTERMEDIO I INGLÉS", "10.0", "", "9.9", "", "10.0", "", "9.9", "2"]
    ],
    4: [
        ["Asignaturas", "P1", "F", "P2", "F", "EF", "F", "Final", "F"],
        ["DERECHO CONSTITUCIONAL", "10.0", "", "10.0", "", "10.0", "", "10.0", "0"],
        ["INSTITUCIONES DEL DERECHO ROMANO", "10.0", "", "10.0", "", "9.0", "", "10.0", "0"],
        ["CIENCIA POLÍTICA", "9.7", "", "9.0", "", "8.0", "", "9.0", "1"],
        ["DERECHO DE LOS BIENES Y SUCESIONES", "10", "", "9.0", "", "9.0", "", "9.5", "0"],
        ["DERECHO AGRARIO", "9.0", "", "10", "", "10", "", "10.0", "0"],
        ["TEORÍA GENERAL DEL PROCESO", "9.7", "", "9.6", "", "10.0", "", "9.7", "2"],
        ["NIVEL BÁSICO 2 INGLÉS", "10", "", "10.0", "", "9.0", "", "10.0", "2"]
    ],
    5: [
        ["Asignaturas", "P1", "F", "P2", "F", "EF", "F", "Final", "F"],
        ["INTRODUCCIÓN AL DERECHO", "10.0", "", "10.0", "", "10.", "", "10.0", "0"],
        ["DERECHO ROMANO", "9.4", "", "10", "", "10", "", "10.0", "2"],
        ["TEORÍA DEL ESTADO", "10", "", "10", "", "10", "", "10.0", "0"],
        ["PERSONAS Y FAMILIA", "9.0", "", "10", "", "9.0", "", "9.5", "0"],
        ["METODOLOGÍA DE LA INVESTIGACIÓN", "8.9", "", "9.8", "", "9.3", "", "9.8", "0"],
        ["DERECHO PROCESAL CIVIL", "10.0", "", "10.0", "", "10", "", "10.0", "0"],
        ["NIVEL BÁSICO 1 INGLÉS", "9.5", "", "9.8", "", "9.6", "", "9.7", "0"]
    ],
   
};

// 🔹 Función para mostrar la tabla de la opción seleccionada
function showTable(option) {
    let tableContainer = document.getElementById("table-container");

    let tableHTML = `<table>`;

    // 🔹 Obtener la tabla correspondiente
    let data = tablesData[option] || [];

    // 🔹 Generar la tabla con los datos específicos de cada opción
    for (let row = 0; row < data.length; row++) {
        tableHTML += `<tr>`;
        for (let col = 0; col < data[row].length; col++) {
            if (row === 0) {
                // 🔹 Primera fila (Encabezados con texto azul y negrita)
                tableHTML += `<th>${data[row][col]}</th>`;
            } else {
                // 🔹 Filas con datos
                tableHTML += `<td>${data[row][col]}</td>`;
            }
        }
        tableHTML += `</tr>`;
    }

    tableHTML += `</table>`;

    tableContainer.innerHTML = tableHTML;
}

// 🔹 Mostrar la tabla de la última opción por defecto al cargar la página
window.onload = function () {
    showTable(1); // Cambia el número para mostrar otra tabla por defecto
};
