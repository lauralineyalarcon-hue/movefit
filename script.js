```javascript
/* =====================================================
   MOVE FIT — JavaScript de la tienda virtual
   Funciones: productos, filtros, carrito, modal y contacto
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    iniciarMenu();
    iniciarEfectos();
    mostrarProductosInicio();
    iniciarCatalogo();
    iniciarCarrito();
    iniciarContacto();
    actualizarContadorCarrito();
});

/* =====================================================
   1. DATOS DE LOS 100 PRODUCTOS
===================================================== */

const PRODUCTOS_BASE = [
    // TOPS — 15
    ["Top deportivo básico", "tops", 49900],
    ["Top deportivo de soporte medio", "tops", 59900],
    ["Top deportivo de alto soporte", "tops", 69900],
    ["Top con espalda cruzada", "tops", 54900],
    ["Top de tirantes", "tops", 45900],
    ["Top deportivo manga corta", "tops", 52900],
    ["Top deportivo manga larga", "tops", 64900],
    ["Top seamless", "tops", 57900],
    ["Top crop deportivo", "tops", 49900],
    ["Top con espalda descubierta", "tops", 55900],
    ["Top deportivo con cierre", "tops", 74900],
    ["Top deportivo acolchado", "tops", 62900],
    ["Top deportivo de entrenamiento", "tops", 59900],
    ["Top deportivo para running", "tops", 67900],
    ["Top deportivo premium", "tops", 89900],

    // LICRAS — 6
    ["Licra deportiva básica", "licras", 69900],
    ["Licra de cintura alta", "licras", 79900],
    ["Licra seamless", "licras", 89900],
    ["Licra para running", "licras", 84900],
    ["Licra de compresión", "licras", 99900],
    ["Licra deportiva estampada", "licras", 89900],

    // LEGGINGS — 14
    ["Legging negro básico", "leggings", 79900],
    ["Legging gris", "leggings", 79900],
    ["Legging verde salvia", "leggings", 84900],
    ["Legging beige", "leggings", 84900],
    ["Legging con bolsillo lateral", "leggings", 94900],
    ["Legging con cintura cruzada", "leggings", 89900],
    ["Legging flare deportivo", "leggings", 99900],
    ["Legging seamless", "leggings", 94900],
    ["Legging push-up deportivo", "leggings", 99900],
    ["Legging para yoga", "leggings", 84900],
    ["Legging para gimnasio", "leggings", 89900],
    ["Legging para running", "leggings", 94900],
    ["Legging deportivo estampado", "leggings", 89900],
    ["Legging premium", "leggings", 119900],

    // FALDAS — 8
    ["Falda deportiva básica", "faldas", 59900],
    ["Falda con short interno", "faldas", 74900],
    ["Falda para tenis", "faldas", 79900],
    ["Falda para running", "faldas", 69900],
    ["Falda plisada deportiva", "faldas", 84900],
    ["Falda deportiva negra", "faldas", 64900],
    ["Falda deportiva blanca", "faldas", 64900],
    ["Falda deportiva beige", "faldas", 69900],

    // SHORTS — 2
    ["Short deportivo femenino", "shorts", 49900],
    ["Short biker deportivo", "shorts", 59900],

    // MEDIAS — 5
    ["Medias deportivas blancas", "medias", 15900],
    ["Medias deportivas negras", "medias", 15900],
    ["Medias tobilleras", "medias", 12900],
    ["Medias deportivas altas", "medias", 19900],
    ["Medias acolchadas deportivas", "medias", 22900],

    // TENIS — 10
    ["Tenis deportivos blancos", "tenis", 189900],
    ["Tenis deportivos negros", "tenis", 189900],
    ["Tenis para running", "tenis", 229900],
    ["Tenis para gimnasio", "tenis", 199900],
    ["Tenis para entrenamiento", "tenis", 209900],
    ["Tenis deportivos beige", "tenis", 194900],
    ["Tenis deportivos rosados", "tenis", 194900],
    ["Tenis deportivos verdes", "tenis", 199900],
    ["Tenis deportivos ligeros", "tenis", 219900],
    ["Tenis deportivos premium", "tenis", 289900],

    // ACCESORIOS — 20
    ["Ligas de resistencia", "accesorios", 19900],
    ["Set de bandas elásticas", "accesorios", 29900],
    ["Banda de resistencia larga", "accesorios", 22900],
    ["Mancuerna de 2 kg", "accesorios", 29900],
    ["Mancuerna de 4 kg", "accesorios", 49900],
    ["Mancuerna de 6 kg", "accesorios", 69900],
    ["Set de mancuernas", "accesorios", 129900],
    ["Cuerda para saltar", "accesorios", 24900],
    ["Cuerda para saltar profesional", "accesorios", 39900],
    ["Termo deportivo", "accesorios", 34900],
    ["Termo deportivo térmico", "accesorios", 49900],
    ["Botella deportiva", "accesorios", 24900],
    ["Shaker deportivo", "accesorios", 29900],
    ["Mat de yoga", "accesorios", 79900],
    ["Colchoneta deportiva", "accesorios", 89900],
    ["Toalla deportiva", "accesorios", 24900],
    ["Riñonera deportiva", "accesorios", 39900],
    ["Guantes deportivos", "accesorios", 34900],
    ["Banda para el cabello deportiva", "accesorios", 14900],
    ["Bolso deportivo", "accesorios", 99900],

    // SUPLEMENTOS Y NUTRICIÓN — 20
    ["Proteína en polvo", "suplementos", 149900],
    ["Proteína vegetal", "suplementos", 139900],
    ["Bebida deportiva con electrolitos", "suplementos", 9900],
    ["Bebida de recuperación deportiva", "suplementos", 12900],
    ["Barras de proteína", "suplementos", 15900],
    ["Barras energéticas", "suplementos", 12900],
    ["Bebida proteica lista para tomar", "suplementos", 14900],
    ["Avena deportiva empacada", "suplementos", 18900],
    ["Mezcla para pancakes proteicos", "suplementos", 39900],
    ["Bebida de hidratación deportiva", "suplementos", 8900],
    ["Gel energético deportivo", "suplementos", 11900],
    ["Gomitas energéticas para actividad deportiva", "suplementos", 14900],
    ["Mezcla de frutos secos", "suplementos", 16900],
    ["Crema de maní", "suplementos", 22900],
    ["Bebida de carbohidratos para deporte", "suplementos", 19900],
    ["Snack proteico", "suplementos", 9900],
    ["Cereal deportivo", "suplementos", 19900],
    ["Bebida deportiva sin azúcar", "suplementos", 8900],
    ["Mezcla de proteína vegetal y cereales", "suplementos", 34900],
    ["Pack de snacks deportivos", "suplementos", 29900]
];

const CATEGORIAS = {
    tops: "Tops deportivos",
    licras: "Licras",
    leggings: "Leggings",
    faldas: "Faldas deportivas",
    shorts: "Shorts deportivos",
    medias: "Medias deportivas",
    tenis: "Tenis deportivos",
    accesorios: "Accesorios",
    suplementos: "Nutrición deportiva"
};

const COLORES_DISPONIBLES = [
    { nombre: "Negro", codigo: "#202020" },
    { nombre: "Blanco", codigo: "#f7f7f5" },
    { nombre: "Beige", codigo: "#d7c3a5" },
    { nombre: "Rosa suave", codigo: "#edc5cf" },
    { nombre: "Verde salvia", codigo: "#a6b5a0" }
];

const TALLAS_ROPA = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
const TALLAS_TENIS = ["35", "36", "37", "38", "39", "40"];

function esRopa(categoria) {
    return ["tops", "licras", "leggings", "faldas", "shorts"].includes(categoria);
}

function esCalzado(categoria) {
    return categoria === "tenis";
}

function generarDescripcion(nombre, categoria) {
    const descripciones = {
        tops: `Top deportivo ${nombre.toLowerCase()}, diseñado para acompañarte durante tus entrenamientos. Su estilo moderno combina comodidad y libertad de movimiento.`,
        licras: `${nombre}: una prenda versátil para tus rutinas deportivas. Su diseño busca ofrecer comodidad y un ajuste práctico para moverte con confianza.`,
        leggings: `${nombre}: combina un diseño actual con comodidad para tus sesiones de entrenamiento, yoga o actividades del día a día.`,
        faldas: `${nombre}: una opción deportiva, femenina y cómoda, ideal para combinar con tus prendas favoritas.`,
        shorts: `${nombre}: una prenda práctica para entrenar y disfrutar de una gran libertad de movimiento.`,
        medias: `${nombre}: un complemento cómodo para tus entrenamientos y actividades cotidianas.`,
        tenis: `${nombre}: calzado de estilo deportivo pensado para complementar tus outfits activos.`,
        accesorios: `${nombre}: un accesorio práctico para complementar tu rutina de entrenamiento y acompañarte en tus actividades deportivas.`,
        suplementos: `${nombre}: producto de nutrición deportiva. Revisa los ingredientes, la información nutricional y las recomendaciones del fabricante antes de consumirlo.`
    };

    return descripciones[categoria] || `Descubre ${nombre} en MOVE FIT.`;
}

function generarImagen(nombre, categoria, id) {
    const palabras = {
        tops: "women,sports,top",
        licras: "women,fitness,leggings",
        leggings: "women,fitness,leggings",
        faldas: "women,sports,skirt",
        shorts: "women,sports,shorts",
        medias: "sports,socks",
        tenis: "sports,sneakers",
        accesorios: "fitness,sports,equipment",
        suplementos: "sports,nutrition,food"
    };

    return `https://loremflickr.com/700/850/${palabras[categoria] || "fitness,sports"}?lock=${id}`;
}

const PRODUCTOS = PRODUCTOS_BASE.map((producto, indice) => {
    const [nombre, categoria, precio] = producto;
    const id = indice + 1;
    let colores = COLORES_DISPONIBLES.map(color => color.nombre);
    let tallas = [];

    if (esRopa(categoria)) {
        tallas = [...TALLAS_ROPA];
    } else if (esCalzado(categoria)) {
        tallas = [...TALLAS_TENIS];
    }

    if (categoria === "suplementos") {
        colores = [];
    }

    return {
        id,
        nombre,
        categoria,
        precio,
        descripcion: generarDescripcion(nombre, categoria),
        colores,
        tallas,
        imagen: generarImagen(nombre, categoria, id)
    };
});

/* =====================================================
   2. FUNCIONES GENERALES
===================================================== */

function formatoPrecio(valor) {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    }).format(valor);
}

function escaparHTML(texto) {
    return String(texto).replace(/[&<>"']/g, caracter => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[caracter]);
}

function obtenerCarrito() {
    try {
        return JSON.parse(localStorage.getItem("moveFitCart")) || [];
    } catch {
        return [];
    }
}

function guardarCarrito(carrito) {
    localStorage.setItem("moveFitCart", JSON.stringify(carrito));
    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    const carrito = obtenerCarrito();
    const cantidad = carrito.reduce((total, item) => total + item.cantidad, 0);

    document.querySelectorAll(
        "#cartCounter, .cart-counter, [data-cart-counter]"
    ).forEach(elemento => {
        elemento.textContent = cantidad;
        elemento.style.display = cantidad > 0 ? "inline-flex" : "none";
    });
}

function mostrarAviso(mensaje) {
    let aviso = document.querySelector(".toast");

    if (!aviso) {
        aviso = document.createElement("div");
        aviso.className = "toast";
        aviso.setAttribute("role", "status");
        document.body.appendChild(aviso);
    }

    aviso.textContent = mensaje;
    aviso.classList.add("show");

    clearTimeout(mostrarAviso.temporizador);
    mostrarAviso.temporizador = setTimeout(() => {
        aviso.classList.remove("show");
    }, 2800);
}

/* =====================================================
   3. MENÚ RESPONSIVE
===================================================== */

function iniciarMenu() {
    const boton = document.querySelector(
        ".menu-toggle, #menuToggle, [data-menu-toggle]"
    );

    const navegacion = document.querySelector(
        ".nav, .main-nav, #mainNav, nav"
    );

    if (boton && navegacion) {
        boton.addEventListener("click", () => {
            boton.classList.toggle("active");
            navegacion.classList.toggle("active");

            const abierto = navegacion.classList.contains("active");
            boton.setAttribute("aria-expanded", String(abierto));
        });

        navegacion.querySelectorAll("a").forEach(enlace => {
            enlace.addEventListener("click", () => {
                navegacion.classList.remove("active");
                boton.classList.remove("active");
                boton.setAttribute("aria-expanded", "false");
            });
        });
    }

    window.addEventListener("scroll", () => {
        const encabezado = document.querySelector("header");
        if (encabezado) {
            encabezado.classList.toggle("scrolled", window.scrollY > 30);
        }
    });
}

/* =====================================================
   4. EFECTOS Y BOTÓN VOLVER ARRIBA
===================================================== */

function iniciarEfectos() {
    const botonArriba = document.querySelector(
        ".back-to-top, #backToTop"
    );

    window.addEventListener("scroll", () => {
        if (botonArriba) {
            botonArriba.classList.toggle("visible", window.scrollY > 400);
        }
    });

    if (botonArriba) {
        botonArriba.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    if ("IntersectionObserver" in window) {
        const observador = new IntersectionObserver((entradas, observer) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visible");
                    observer.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll(
            ".reveal, .fade-in, .product-card"
        ).forEach(elemento => observador.observe(elemento));
    }
}

/* =====================================================
   5. TARJETAS DE PRODUCTOS
===================================================== */

function crearTarjetaProducto(producto) {
    const coloresHTML = producto.colores.slice(0, 4).map(color => {
        const encontrado = COLORES_DISPONIBLES.find(c => c.nombre === color);
        const codigo = encontrado ? encontrado.codigo : "#cccccc";

        return `
            <span class="color-swatch"
                  title="${escaparHTML(color)}"
                  style="background:${codigo}"
                  aria-label="${escaparHTML(color)}"></span>
        `;
    }).join("");

    const tallasHTML = producto.tallas.length
        ? `<div class="product-sizes">
              ${producto.tallas.slice(0, 5).map(talla =>
                  `<span class="size-option">${talla}</span>`
              ).join("")}
           </div>`
        : "";

    return `
        <article class="product-card" data-product-id="${producto.id}">
            <div class="product-image">
                <img
                    src="${producto.imagen}"
                    alt="${escaparHTML(producto.nombre)}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/700x850/f3eee8/333333?text=MOVE+FIT';"
                >
                <span class="product-category">
                    ${escaparHTML(CATEGORIAS[producto.categoria])}
                </span>
            </div>

            <div class="product-info">
                <h3 class="product-name">${escaparHTML(producto.nombre)}</h3>
                <p class="product-description">
                    ${escaparHTML(producto.descripcion)}
                </p>
                <p class="product-price">${formatoPrecio(producto.precio)}</p>

                ${coloresHTML ? `<div class="product-colors">${coloresHTML}</div>` : ""}
                ${tallasHTML}

                <div class="product-actions">
                    <button class="product-view-btn"
                            type="button"
                            data-view-product="${producto.id}">
                        Ver producto
                    </button>

                    <button class="product-add-btn"
                            type="button"
                            data-add-product="${producto.id}">
                        Agregar
                    </button>
                </div>
            </div>
        </article>
    `;
}

function conectarBotonesProductos(contenedor) {
    if (!contenedor) return;

    contenedor.querySelectorAll("[data-view-product]").forEach(boton => {
        boton.addEventListener("click", () => {
            const producto = PRODUCTOS.find(
                p => p.id === Number(boton.dataset.viewProduct)
            );
            if (producto) abrirModalProducto(producto);
        });
    });

    contenedor.querySelectorAll("[data-add-product]").forEach(boton => {
        boton.addEventListener("click", () => {
            const producto = PRODUCTOS.find(
                p => p.id === Number(boton.dataset.addProduct)
            );

            if (!producto) return;

            if (producto.tallas.length || producto.colores.length) {
                abrirModalProducto(producto);
            } else {
                agregarAlCarrito(producto, "", "", 1);
            }
        });
    });
}

/* =====================================================
   6. PRODUCTOS DESTACADOS EN INICIO
===================================================== */

function mostrarProductosInicio() {
    const contenedor = document.querySelector(
        "#homeProducts, #featuredProducts, [data-home-products]"
    );

    if (!contenedor) return;

    const destacados = PRODUCTOS.filter(p =>
        [1, 3, 16, 22, 27, 51, 70, 74].includes(p.id)
    );

    contenedor.innerHTML = destacados.map(crearTarjetaProducto).join("");
    conectarBotonesProductos(contenedor);
}

/* =====================================================
   7. CATÁLOGO, BÚSQUEDA, FILTROS Y ORDEN
===================================================== */

function iniciarCatalogo() {
    const contenedor = document.querySelector(
        "#productsGrid, #productGrid, [data-products-grid]"
    );

    if (!contenedor) return;

    const campoBusqueda = document.querySelector(
        "#searchInput, #productSearch, [data-product-search]"
    );

    const selectorOrden = document.querySelector(
        "#sortSelect, #sortProducts, [data-product-sort]"
    );

    let categoriaActual = "todos";
    let busquedaActual = "";

    function renderizarCatalogo() {
        let productosFiltrados = [...PRODUCTOS];

        if (categoriaActual !== "todos") {
            productosFiltrados = productosFiltrados.filter(
                p => p.categoria === categoriaActual
            );
        }

        if (busquedaActual) {
            productosFiltrados = productosFiltrados.filter(p =>
                `${p.nombre} ${p.descripcion} ${CATEGORIAS[p.categoria]}`
                    .toLowerCase()
                    .includes(busquedaActual)
            );
        }

        if (selectorOrden) {
            switch (selectorOrden.value) {
                case "price-asc":
                case "precio-menor":
                    productosFiltrados.sort((a, b) => a.precio - b.precio);
                    break;

                case "price-desc":
                case "precio-mayor":
                    productosFiltrados.sort((a, b) => b.precio - a.precio);
                    break;

                case "name-asc":
                case "nombre":
                    productosFiltrados.sort((a, b) =>
                        a.nombre.localeCompare(b.nombre, "es")
                    );
                    break;

                case "name-desc":
                    productosFiltrados.sort((a, b) =>
                        b.nombre.localeCompare(a.nombre, "es")
                    );
                    break;

                default:
                    productosFiltrados.sort((a, b) => a.id - b.id);
            }
        }

        if (productosFiltrados.length) {
            contenedor.innerHTML = productosFiltrados
                .map(crearTarjetaProducto).join("");
        } else {
            contenedor.innerHTML = `
                <div class="no-products">
                    <h3>No encontramos productos</h3>
                    <p>Prueba con otra búsqueda o selecciona otra categoría.</p>
                </div>
            `;
        }

        conectarBotonesProductos(contenedor);

        const contadorResultados = document.querySelector(
            "#resultsCount, .results-count, [data-results-count]"
        );

        if (contadorResultados) {
            contadorResultados.textContent =
                `${productosFiltrados.length} productos encontrados`;
        }
    }

    document.querySelectorAll("[data-filter]").forEach(boton => {
        boton.addEventListener("click", () => {
            categoriaActual = boton.dataset.filter || "todos";

            document.querySelectorAll("[data-filter]").forEach(item => {
                item.classList.remove("active");
                item.setAttribute("aria-pressed", "false");
            });

            boton.classList.add("active");
            boton.setAttribute("aria-pressed", "true");

            renderizarCatalogo();
        });
    });

    if (campoBusqueda) {
        campoBusqueda.addEventListener("input", () => {
            busquedaActual = campoBusqueda.value.trim().toLowerCase();
            renderizarCatalogo();
        });
    }

    if (selectorOrden) {
        selectorOrden.addEventListener("change", renderizarCatalogo);
    }

    renderizarCatalogo();
}

/* =====================================================
   8. MODAL / DETALLES DEL PRODUCTO
===================================================== */

function abrirModalProducto(producto) {
    let modal = document.querySelector("#productModal, .product-modal");

    if (!modal) {
        modal = document.createElement("div");
        modal.id = "productModal";
        modal.className = "product-modal";
        modal.innerHTML = `
            <div class="modal-overlay" data-close-modal></div>
            <div class="modal-content" role="dialog"
                 aria-modal="true" aria-label="Detalles del producto">
                <button class="modal-close" type="button"
                        data-close-modal aria-label="Cerrar">×</button>
                <div id="modalProductContent"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    const contenido = modal.querySelector(
        "#modalProductContent, .modal-product-layout"
    );

    const requiereTalla = producto.tallas.length > 0;
    const requiereColor = producto.colores.length > 0;

    contenido.innerHTML = `
        <div class="modal-product-layout">
            <div class="modal-product-image">
                <img src="${producto.imagen}"
                     alt="${escaparHTML(producto.nombre)}"
                     onerror="this.onerror=null;this.src='https://placehold.co/700x850/f3eee8/333333?text=MOVE+FIT';">
            </div>

            <div class="modal-product-details">
                <span class="product-category">
                    ${escaparHTML(CATEGORIAS[producto.categoria])}
                </span>
                <h2>${escaparHTML(producto.nombre)}</h2>
                <p class="modal-product-price">${formatoPrecio(producto.precio)}</p>
                <p class="modal-product-description">
                    ${escaparHTML(producto.descripcion)}
                </p>

                ${requiereColor ? `
                    <label class="modal-option-title" for="modalColor">
                        Selecciona el color
                    </label>
                    <select id="modalColor" required>
                        <option value="">Elegir color</option>
                        ${producto.colores.map(color =>
                            `<option value="${escaparHTML(color)}">${escaparHTML(color)}</option>`
                        ).join("")}
                    </select>
                ` : ""}

                ${requiereTalla ? `
                    <label class="modal-option-title" for="modalSize">
                        Selecciona la talla
                    </label>
                    <select id="modalSize" required>
                        <option value="">Elegir talla</option>
                        ${producto.tallas.map(talla =>
                            `<option value="${talla}">${talla}</option>`
                        ).join("")}
                    </select>
                ` : ""}

                <label class="modal-option-title" for="modalQuantity">
                    Cantidad
                </label>
                <div class="modal-quantity">
                    <button type="button" id="quantityMinus" aria-label="Disminuir">−</button>
                    <input id="modalQuantity" type="number" min="1" max="20" value="1">
                    <button type="button" id="quantityPlus" aria-label="Aumentar">+</button>
                </div>

                <div class="modal-product-actions">
                    <button type="button" class="product-add-btn" id="modalAddToCart">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    const cantidad = contenido.querySelector("#modalQuantity");

    contenido.querySelector("#quantityMinus").addEventListener("click", () => {
        cantidad.value = Math.max(1, Number(cantidad.value) - 1);
    });

    contenido.querySelector("#quantityPlus").addEventListener("click", () => {
        cantidad.value = Math.min(20, Number(cantidad.value) + 1);
    });

    contenido.querySelector("#modalAddToCart").addEventListener("click", () => {
        const color = contenido.querySelector("#modalColor")?.value || "";
        const talla = contenido.querySelector("#modalSize")?.value || "";
        const unidades = Math.max(1, Math.min(20, Number(cantidad.value) || 1));

        if (requiereColor && !color) {
            mostrarAviso("Selecciona un color para continuar.");
            return;
        }

        if (requiereTalla && !talla) {
            mostrarAviso("Selecciona una talla para continuar.");
            return;
        }

        agregarAlCarrito(producto, color, talla, unidades);
        cerrarModalProducto();
    });

    modal.querySelectorAll("[data-close-modal]").forEach(boton => {
        boton.onclick = cerrarModalProducto;
    });
}

function cerrarModalProducto() {
    const modal = document.querySelector("#productModal, .product-modal");

    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }
}

document.addEventListener("keydown", evento => {
    if (evento.key === "Escape") cerrarModalProducto();
});

/* =====================================================
   9. CARRITO DE COMPRAS
===================================================== */

function agregarAlCarrito(producto, color, talla, cantidad) {
    const carrito = obtenerCarrito();

    const existente = carrito.find(item =>
        item.id === producto.id &&
        item.color === color &&
        item.talla === talla
    );

    if (existente) {
        existente.cantidad += cantidad;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            categoria: producto.categoria,
            precio: producto.precio,
            imagen: producto.imagen,
            color,
            talla,
            cantidad
        });
    }

    guardarCarrito(carrito);
    renderizarCarrito();
    mostrarAviso(`${producto.nombre} se agregó al carrito.`);
}

function cambiarCantidad(indice, cambio) {
    const carrito = obtenerCarrito();

    if (!carrito[indice]) return;

    carrito[indice].cantidad += cambio;

    if (carrito[indice].cantidad <= 0) {
        carrito.splice(indice, 1);
    }

    guardarCarrito(carrito);
    renderizarCarrito();
}

function eliminarDelCarrito(indice) {
    const carrito = obtenerCarrito();
    carrito.splice(indice, 1);
    guardarCarrito(carrito);
    renderizarCarrito();
    mostrarAviso("Producto eliminado del carrito.");
}

function renderizarCarrito() {
    const contenedor = document.querySelector(
        "#cartItems, .cart-items, [data-cart-items]"
    );

    const resumen = document.querySelector(
        "#cartSummary, .cart-summary, [data-cart-summary]"
    );

    if (!contenedor) return;

    const carrito = obtenerCarrito();

    if (!carrito.length) {
        contenedor.innerHTML = `
            <div class="empty-cart">
                <h2>Tu carrito está vacío</h2>
                <p>Descubre nuestros productos y encuentra tus favoritos.</p>
                <a href="productos.html" class="product-add-btn">
                    Explorar productos
                </a>
            </div>
        `;

        if (resumen) resumen.innerHTML = "";
        return;
    }

    contenedor.innerHTML = carrito.map((item, indice) => `
        <article class="cart-item">
            <img src="${item.imagen}"
                 alt="${escaparHTML(item.nombre)}"
                 onerror="this.onerror=null;this.src='https://placehold.co/150x180/f3eee8/333333?text=MOVE+FIT';">

            <div class="cart-product">
                <h3>${escaparHTML(item.nombre)}</h3>
                <p>${formatoPrecio(item.precio)}</p>
                ${item.color ? `<p>Color: ${escaparHTML(item.color)}</p>` : ""}
                ${item.talla ? `<p>Talla: ${escaparHTML(item.talla)}</p>` : ""}
            </div>

            <div class="cart-quantity">
                <button type="button" data-cart-minus="${indice}" aria-label="Disminuir cantidad">−</button>
                <span>${item.cantidad}</span>
                <button type="button" data-cart-plus="${indice}" aria-label="Aumentar cantidad">+</button>
            </div>

            <strong class="cart-item-subtotal">
                ${formatoPrecio(item.precio * item.cantidad)}
            </strong>

            <button type="button"
                    class="remove-cart-item"
                    data-cart-remove="${indice}"
                    aria-label="Eliminar ${escaparHTML(item.nombre)}">
                ×
            </button>
        </article>
    `).join("");

    contenedor.querySelectorAll("[data-cart-minus]").forEach(boton => {
        boton.addEventListener("click", () =>
            cambiarCantidad(Number(boton.dataset.cartMinus), -1)
        );
    });

    contenedor.querySelectorAll("[data-cart-plus]").forEach(boton => {
        boton.addEventListener("click", () =>
            cambiarCantidad(Number(boton.dataset.cartPlus), 1)
        );
    });

    contenedor.querySelectorAll("[data-cart-remove]").forEach(boton => {
        boton.addEventListener("click", () =>
            eliminarDelCarrito(Number(boton.dataset.cartRemove))
        );
    });

    const subtotal = carrito.reduce(
        (total, item) => total + item.precio * item.cantidad, 0
    );

    const envio = subtotal === 0 || subtotal >= 200000 ? 0 : 12000;
    const total = subtotal + envio;

    if (resumen) {
        resumen.innerHTML = `
            <h2>Resumen de compra</h2>
            <div class="summary-row">
                <span>Subtotal</span>
                <span>${formatoPrecio(subtotal)}</span>
            </div>
            <div class="summary-row">
                <span>Envío</span>
                <span>${envio === 0 ? "Gratis" : formatoPrecio(envio)}</span>
            </div>
            ${subtotal > 0 && subtotal < 200000
                ? `<p class="shipping-note">¡Tus compras desde $200.000 tienen envío gratis!</p>`
                : ""}
            <div class="summary-row summary-total">
                <strong>Total</strong>
                <strong>${formatoPrecio(total)}</strong>
            </div>
            <button type="button" class="checkout-btn" id="checkoutBtn">
                Continuar compra
            </button>
            <p class="checkout-note">
                Demostración académica: no se procesan pagos reales.
            </p>
        `;

        resumen.querySelector("#checkoutBtn").addEventListener(
            "click", finalizarCompra
        );
    }
}

function iniciarCarrito() {
    renderizarCarrito();
}

function finalizarCompra() {
    const carrito = obtenerCarrito();

    if (!carrito.length) {
        mostrarAviso("Tu carrito está vacío.");
        return;
    }

    const mensaje = document.querySelector(
        "#checkoutMessage, .checkout-message, [data-checkout-message]"
    );

    const subtotal = carrito.reduce(
        (total, item) => total + item.precio * item.cantidad, 0
    );

    const envio = subtotal >= 200000 ? 0 : 12000;
    const total = subtotal + envio;

    const resumenPedido = carrito.map(item =>
        `${item.cantidad} x ${item.nombre}` +
        `${item.talla ? ` (talla ${item.talla})` : ""}` +
        `${item.color ? `, color ${item.color}` : ""}`
    ).join("\n");

    const texto = `Pedido de demostración MOVE FIT\n\n${resumenPedido}\n\nSubtotal: ${formatoPrecio(subtotal)}\nEnvío: ${envio === 0 ? "Gratis" : formatoPrecio(envio)}\nTotal: ${formatoPrecio(total)}\n\nEste pedido es una simulación académica; no se ha realizado ningún pago.`;

    if (mensaje) {
        mensaje.textContent = texto;
        mensaje.classList.add("show");
    } else {
        alert(texto);
    }
}

/* =====================================================
   10. FORMULARIO DE CONTACTO
===================================================== */

function iniciarContacto() {
    const formulario = document.querySelector(
        "#contactForm, .contact-form, [data-contact-form]"
    );

    if (!formulario) return;

    formulario.addEventListener("submit", evento => {
        evento.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        const nombre = formulario.querySelector(
            '[name="nombre"], [name="name"], #name'
        )?.value.trim() || "";

        const email = formulario.querySelector(
            '[name="correo"], [name="email"], #email'
        )?.value.trim() || "";

        const mensajeFormulario = document.querySelector(
            "#formMessage, .form-message, [data-form-message]"
        );

        const texto = `¡Gracias${nombre ? ", " + nombre : ""}! Tu mensaje fue validado correctamente. Esta es una demostración de la tienda; el formulario todavía no envía correos reales.`;

        if (mensajeFormulario) {
            mensajeFormulario.textContent = texto;
            mensajeFormulario.classList.add("show");
            mensajeFormulario.setAttribute("role", "status");
        } else {
            mostrarAviso(texto);
        }

        formulario.reset();
    });
});

/* =====================================================
   11. AÑO AUTOMÁTICO EN EL PIE DE PÁGINA
===================================================== */

document.querySelectorAll("#currentYear, [data-current-year]").forEach(elemento => {
    elemento.textContent = new Date().getFullYear();
});

/* =====================================================
   12. VERIFICACIÓN EN CONSOLA
===================================================== */

console.log("MOVE FIT está lista.");
console.log(`Productos cargados: ${PRODUCTOS.length}`);
```
