let menuVisible=false;

function MostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible=false;
}
//aplica las animaciones de las habilidades
function efectoHabilidades(){
var skills= document.getElementById("skills");
var distancia_skills =window.innerHeight - skills.getBoundingClientRect().top;

if(distancia_skills >=300){
    let habilidades=document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("html-css");
    habilidades[2].classList.add("flutter");
    habilidades[3].classList.add("c");
    habilidades[4].classList.add("sql");
    habilidades[5].classList.add("mariadb");
    habilidades[6].classList.add("firebase");
    habilidades[7].classList.add("genexus");
    habilidades[8].classList.add("springboot");
    habilidades[9].classList.add("java");
    habilidades[10].classList.add("netframework");
    habilidades[11].classList.add("comunicacion");
    habilidades[12].classList.add("equipo");
    habilidades[13].classList.add("creatividad");
    habilidades[14].classList.add("dedicacion");
    habilidades[15].classList.add("proyectM");
    habilidades[16].classList.add("adaptabilidad");
    habilidades[17].classList.add("problemas");
}

}
//detecta el scrollingg para aplicar la animacion de las habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
let currentImageIndex = 0;

function openModal(title, images, description, tecnologias) {
    // Set the title
    document.getElementById("modal-title").textContent = title;

    // Set the description
    document.getElementById("modal-description").textContent = description;
   document.getElementById("modal-tecnologias").textContent = tecnologias;
    // Set the first image in the carousel
    let imageContainer = document.getElementById("modal-image");
    imageContainer.src = images[currentImageIndex];

    // Show the modal
    document.getElementById("modal").style.display = "block";

    // Store images for navigation
    window.imagesInModal = images;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function nextImage() {
    if (currentImageIndex < window.imagesInModal.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }

    // Update the image in the modal
    document.getElementById("modal-image").src = window.imagesInModal[currentImageIndex];
}

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = window.imagesInModal.length - 1;
    }

    // Update the image in the modal
    document.getElementById("modal-image").src = window.imagesInModal[currentImageIndex];
}

    const formulario = document.getElementById('formulario-contacto');
    const mensaje = document.getElementById('mensaje-confirmacion');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita la redirección

        const datos = new FormData(formulario);

        fetch("https://formspree.io/f/mnndejvb", {
            method: "POST",
            body: datos,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
                formulario.reset();
                mensaje.style.display = 'block';
                setTimeout(() => mensaje.style.display = 'none', 5000); // Ocultar mensaje tras 5s
            } else {
                alert("Hubo un problema al enviar el formulario.");
            }
        })
        .catch(err => {
            alert("Error al enviar el formulario.");
        });
    });