const t = document.querySelector(".tarjeta");
let mostrarA = true;

function voltear() {
    if (mostrarA) {
        t.style.backgroundColor = "pink";
        t.style.display = "flex";
        t.style.alignItems = "center";
        t.style.justifyContent = "center";

        
        t.innerHTML = `
            <img src='img/flor.png' alt='Cara B'
                style='width: 150px; height: 150px; border-radius: 20px; object-fit: cover;'
                onerror="this.onerror=null; this.parentNode.innerHTML='Error: No se encontró la imagen';">
        `;
        mostrarA = false;
    } else {
        t.innerHTML = "Cara A";
        t.style.backgroundColor = "lightgreen";
        t.style.width = "";
        t.style.height = "";
        
        t.style.display = "";
        t.style.alignItems = "";
        t.style.justifyContent = "";
        
        mostrarA = true;
    }
}

t.addEventListener('click', voltear);