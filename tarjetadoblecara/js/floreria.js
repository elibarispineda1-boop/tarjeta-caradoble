const t = document.querySelector(".tarjeta");
let mostrarA = true;

function voltear() {
    if (mostrarA) {
        t.style.backgroundColor = "pink";
        t.style.display = "flex";
        t.style.alignItems = "center";
        t.style.justifyContent = "center";

        // Aquí vamos a insertar la imagen con sus estilos específicos
        t.innerHTML = `
            <img src='a.png' alt='Cara B'
                style='width: 150px; height: 150px; border-radius: 20px; object-fit: cover;'>
        `;
        mostrarA = false;
    } else {
        t.innerHTML = "Cara A";
        t.style.backgroundColor = "lightgreen"; // Cambiado de "greenwhi" a un color válido
        t.style.width = "";
        t.style.height = "";
        
        // Opcional: limpiar los estilos de flex si quieres que regrese exactamente a como estaba
        t.style.display = "";
        t.style.alignItems = "";
        t.style.justifyContent = "";
        
        mostrarA = true;
    }
}

t.addEventListener('click', voltear);