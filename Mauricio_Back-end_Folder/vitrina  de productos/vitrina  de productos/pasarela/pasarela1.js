////////////* Guardado de formulario pasarela *//////////////////////////
const guardarInfoCheckbox = document.getElementById('guardar-info-checkbox');
const formInputs = document.querySelectorAll('input[type="text"], input[type="email"], select');

    // Cargar información almacenada en localStorage
    cargarInformacion();

    // Escuchar el evento de cambio del checkbox
    guardarInfoCheckbox.addEventListener('change', function() {
      if (this.checked) {
        guardarInformacion();
      } else {
        eliminarInformacion();
      }
    });

    // Función para guardar la información en localStorage
    function guardarInformacion() {
      const info = {};
      formInputs.forEach(input => {
        info[input.id] = input.value;
      });
      localStorage.setItem('informacionPersonal', JSON.stringify(info));
    }

    // Función para cargar la información desde localStorage
    function cargarInformacion() {
      const infoGuardada = localStorage.getItem('informacionPersonal');
      if (infoGuardada) {
        const info = JSON.parse(infoGuardada);
        formInputs.forEach(input => {
          input.value = info[input.id] || '';
        });
      }
    }

    // Función para eliminar la información guardada en localStorage
    function eliminarInformacion() {
      localStorage.removeItem('informacionPersonal');
    }

////////////* Guardado de formulario pasarela *//////////////////////////
/* ----------------------------------------------------------------------- */

// Precios de regiones
const regionSelect = document.getElementById('region-select');
const precioRegionDiv = document.getElementById('precio-region');
const subtotalSpan = document.getElementById('subtotal');
const totalSpan = document.getElementById('total');

// Objeto con los precios asociados a cada región, cuando queramos ver reflejado
// el precio tenemos que llamar la constante (funcion)
const preciosRegiones = {
  region1: 1000, // Precio de la región 1
  region2: 2000, // Precio de la región 2
  region3: 3000, // Precio de la región 3
  region4: 4000, // Precio de la región 4
  region5: 5000, // Precio de la región 5
  region6: 6000, // Precio de la región 6
  region7: 7000, // Precio de la región 7
  region8: 8000, // Precio de la región 8
  region9: 9000, // Precio de la región 9
  region10: 10000, // Precio de la región 10
  region11: 11000, // Precio de la región 11
  region12: 12000, // Precio de la región 12
  region13: 13000, // Precio de la región 13
  region14: 14000, // Precio de la región 14
  region15: 15000, // Precio de la región 15

  // Agrega más precios para las demás regiones
};
// Función para actualizar el precio de envío en tiempo real
function actualizarPrecio() {
  const precio = preciosRegiones[regionSelect.value] || 0;
  precioRegionDiv.textContent = ` $${precio}`;
  calcularTotal();
}

// Escuchar el evento de cambio del select
regionSelect.addEventListener('change', actualizarPrecio);

// Función para actualizar el subtotal en tiempo real
function actualizarSubtotal() {
  const subtotal = parseFloat(subtotalSpan.textContent.replace(/\D+/g, ''));
  subtotalSpan.textContent = `$${subtotal}`;
  calcularTotal();
}

// Escuchar el evento de cambio para los elementos que afectan el subtotal
// (Por ejemplo, input del subtotal)
// Agrega el evento correspondiente aquí, si tienes otro elemento que afecte el subtotal.
// Por ejemplo: const subtotalInput = document.getElementById('input-subtotal');
// subtotalInput.addEventListener('input', actualizarSubtotal);

// Función para calcular el total
function calcularTotal() {
  const precioEnvio = preciosRegiones[regionSelect.value] || 0;
  const subtotal = parseFloat(subtotalSpan.textContent.replace(/\D+/g, ''));
  const total = subtotal + precioEnvio;
  totalSpan.textContent = `CLP ${total.toLocaleString()}`;
}

// Llamar a la función actualizarPrecio para mostrar el precio inicial
actualizarPrecio();

// Llamar a la función actualizarSubtotal para mostrar el subtotal inicial
actualizarSubtotal();

// Llamar a la función calcularTotal para mostrar el total inicial
calcularTotal();

