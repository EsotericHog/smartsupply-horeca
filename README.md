# SmartSupply Horeca - Prototipo E-commerce B2B

Este proyecto contiene el prototipo funcional de la plataforma **SmartSupply Horeca**, desarrollado para la asignatura de E-commerce. 

El prototipo simula la **Vista de Usuario** y la **Lógica de Negocio** descrita en el informe, enfocándose en la gestión de abastecimiento B2B, predicción de demanda por IA y control de presupuestos mediante Acuerdos Marco.

---

## 📋 Requisitos Previos

Para ejecutar este proyecto localmente, asegúrese de tener instalado:
* **Node.js** (Versión 18 o superior).
* Un navegador web moderno (Chrome, Edge, Firefox).

---

## 🚀 Instalación y Ejecución

Siga estos pasos para levantar el entorno de desarrollo:

1.  **Abrir la terminal** en la carpeta raíz del proyecto (`smartsupply-horeca`).
2.  **Instalar dependencias:**
    Ejecute el siguiente comando para descargar Astro y Tailwind CSS:
    ```bash
    npm install
    ```
3.  **Iniciar el servidor:**
    Una vez finalizada la instalación, ejecute:
    ```bash
    npm run dev
    ```
4.  **Ver el prototipo:**
    Abra su navegador e ingrese a: `http://localhost:4321`

---

## 📍 Guía de Navegación para la Evaluación

El prototipo cubre los 3 puntos críticos mencionados en el informe técnico. Se recomienda navegar en el siguiente orden:

### 1. Dashboard (Inicio) - *Requisito: Valor Innovador / IA*
* **Qué buscar:** Widget de alerta naranja **"Motor de IA: Sugerencia de Reabastecimiento"**.
* **Validación:** Demuestra la funcionalidad de predicción de demanda descrita en la sección *3.3 (Vista Lógica)* del informe.

### 2. Catálogo B2B - *Requisito: Gestión de Acuerdos Marco*
* **Qué buscar:** En las tarjetas de producto, observe el doble precio.
    * *Precio Lista:* Tachado.
    * *Precio Acuerdo Marco:* Destacado en color y con etiqueta de ahorro.
* **Validación:** Simula la clase `AcuerdoMarco` y `PrecioPactado` del Diagrama de Clases.

### 3. Checkout (Carrito) - *Requisito: Reglas de Aprobación*
* **Qué buscar:** El carrito está precargado con un monto superior a **$1.000.000** (Límite del usuario simulado).
* **Acción:** Al intentar procesar, el sistema bloquea la compra automática.
* **Validación:** Muestra la alerta **"Requiere Aprobación Gerencial"** y cambia el botón de acción, validando el flujo alternativo del Diagrama de Secuencia.

---

## 🛠 Tecnologías Utilizadas
* **Astro Framework:** Generación de sitio estático optimizado.
* **Tailwind CSS:** Estilizado y diseño responsivo.
* **Mock Data:** Simulación de base de datos (`src/data/mockStore.js`) para lógica de negocio sin backend.

---
**Integrantes:**
* Polett Casanga
* Juan Castillo
* Guiliano Punulaf
* Fabrizzio Ramos