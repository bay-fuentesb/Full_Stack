// Funciones de navegación para Level-Up Gamer

// Función de prueba para verificar que JavaScript funciona
function testJavaScript() {
    console.log('JavaScript está funcionando correctamente');
    alert('JavaScript funciona!');
}

// Función para ir a la página principal
function goToHome() {
    window.location.href = 'html/index.html';
}

// Función para ir a la página de productos
function goToProducts() {
    window.location.href = 'Productos.html';
}

// Función para ir a la página de registro
function goToRegister() {
    window.location.href = 'Registro_Usuario.html';
}

// Función para ir a la página de un producto específico
function goToProduct(productId) {
    window.location.href = `producto.html?id=${productId}`;
}

// Función para ir a la página de contacto
function goToContact() {
    window.location.href = '#contacto';
}

// Función para ir a la página de nosotros
function goToAbout() {
    window.location.href = '#nosotros';
}

// Función para ir a la página de blogs
function goToBlogs() {
    window.location.href = '#blogs';
}

// Función para ir a la página de login
function goToLogin() {
    window.location.href = '#login';
}

// Función para ir al carrito
function goToCart() {
    // Abrir el modal del carrito si existe
    if (typeof showCartModal === 'function') {
        showCartModal();
    } else {
        window.location.href = '#cart';
    }
}

// Función genérica para navegar a cualquier URL
function navigateTo(url) {
    window.location.href = url;
}

// Función para navegar con parámetros
function navigateWithParams(baseUrl, params) {
    const url = new URL(baseUrl, window.location.origin);
    Object.keys(params).forEach(key => {
        url.searchParams.append(key, params[key]);
    });
    window.location.href = url.toString();
}

// Función para abrir en nueva pestaña
function openInNewTab(url) {
    window.open(url, '_blank');
}

// Función para ir hacia atrás en el historial
function goBack() {
    window.history.back();
}

// Función para ir hacia adelante en el historial
function goForward() {
    window.history.forward();
}

// Función para recargar la página
function reloadPage() {
    window.location.reload();
}

// Función para navegar con confirmación
function navigateWithConfirmation(url, message = '¿Estás seguro de que quieres salir?') {
    if (confirm(message)) {
        window.location.href = url;
    }
}

// Función para navegar a una sección específica de la misma página
function goToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Si no existe el elemento, intentar navegar por hash
        window.location.href = `#${sectionId}`;
    }
}

// Función para navegar con animación
function navigateWithAnimation(url, animationClass = 'fade-out') {
    const body = document.body;
    body.classList.add(animationClass);
    
    setTimeout(() => {
        window.location.href = url;
    }, 300); // Esperar 300ms para la animación
}

// Función para verificar si el usuario puede navegar
function canNavigate() {
    // Aquí puedes agregar lógica como verificar si hay cambios sin guardar
    return true;
}

// Función para navegar con validación
function navigateWithValidation(url, validator) {
    if (validator && !validator()) {
        alert('No se puede navegar en este momento');
        return false;
    }
    window.location.href = url;
    return true;
}

// Función para navegar a productos por categoría
function goToProductsByCategory(category) {
    const categoryUrls = {
        'consolas': 'Productos.html?categoria=consolas',
        'accesorios': 'Productos.html?categoria=accesorios',
        'computadores': 'Productos.html?categoria=computadores',
        'juegos': 'Productos.html?categoria=juegos'
    };
    
    const url = categoryUrls[category] || 'Productos.html';
    window.location.href = url;
}

// Función para navegar con datos en localStorage
function navigateWithData(url, data) {
    if (data) {
        localStorage.setItem('navigationData', JSON.stringify(data));
    }
    window.location.href = url;
}

// Función para recuperar datos de navegación
function getNavigationData() {
    const data = localStorage.getItem('navigationData');
    if (data) {
        localStorage.removeItem('navigationData'); // Limpiar después de usar
        return JSON.parse(data);
    }
    return null;
}

// Función para navegar con delay (útil para mostrar mensajes)
function navigateWithDelay(url, delay = 1000, message = '') {
    if (message) {
        alert(message);
    }
    setTimeout(() => {
        window.location.href = url;
    }, delay);
}

// Exportar funciones para uso global
window.LevelUpGamer = {
    testJavaScript,
    goToHome,
    goToProducts,
    goToRegister,
    goToProduct,
    goToContact,
    goToAbout,
    goToBlogs,
    goToLogin,
    goToCart,
    navigateTo,
    navigateWithParams,
    openInNewTab,
    goBack,
    goForward,
    reloadPage,
    navigateWithConfirmation,
    goToSection,
    navigateWithAnimation,
    canNavigate,
    navigateWithValidation,
    goToProductsByCategory,
    navigateWithData,
    getNavigationData,
    navigateWithDelay
};

// Ejemplo de uso en HTML:
/*
<button onclick="LevelUpGamer.goToHome()">Ir a Inicio</button>
<button onclick="LevelUpGamer.goToProduct('juego-catan')">Ver Juego Catan</button>
<button onclick="LevelUpGamer.goToProductsByCategory('consolas')">Ver Consolas</button>
<button onclick="LevelUpGamer.navigateWithConfirmation('otra-pagina.html')">Salir con confirmación</button>
*/
