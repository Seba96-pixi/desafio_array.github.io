import { propiedadalquiler } from './propiedades.js'; // Asegúrate de tener .js en la importación

export const alquiler = (propiedades) => {
    const container = document.getElementById("containerpropiedades");
    let contenidoHTML = '';

    for (const alquiler of propiedades) {
        contenidoHTML += `
   <div class="col-md-4 mb-4">
            <div class="card">
              <img
              src= ${alquiler.src}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${alquiler.titulo}
                </h5>
                <p class="card-text">
                ${alquiler.subtitulo}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${alquiler.direccion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${alquiler.dormitorio} |
                  <i class="fas fa-bath"></i> ${alquiler.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${alquiler.precio}</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-danger">
                  <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>
              </div>
            </div>
          </div>
        `;
    }
    
    container.innerHTML = contenidoHTML;
};

alquiler(propiedadalquiler);

