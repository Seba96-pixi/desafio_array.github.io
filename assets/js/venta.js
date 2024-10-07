import { propiedadventa } from './propiedades.js'; // Asegúrate de tener .js en la importación

export const venta = (propiedades) => {
    const container = document.getElementById("containerpropiedades");
    let contenidoHTML = '';

    for (const venta of propiedades) {
        contenidoHTML += `
   <div class="col-md-4 mb-4">
            <div class="card">
              <img
              src= ${venta.src}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${venta.titulo}
                </h5>
                <p class="card-text">
                ${venta.subtitulo}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${venta.direccion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${venta.dormitorio} |
                  <i class="fas fa-bath"></i> ${venta.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${venta.precio}</p>
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

venta(propiedadventa);
