# Práctica 9 — [Nombre del Proyecto]

> ✏️ *Reemplaza este subtítulo con una descripción corta de lo que hace tu app.*

---

## 📋 Tabla de contenidos

- [Práctica 9 — \[Nombre del Proyecto\]](#práctica-9--nombre-del-proyecto)
  - [📋 Tabla de contenidos](#-tabla-de-contenidos)
  - [📖 Descripción](#-descripción)
  - [🎯 Objetivo de la práctica](#-objetivo-de-la-práctica)
  - [🛠️ Tecnologías utilizadas](#️-tecnologías-utilizadas)
  - [📁 Estructura del proyecto](#-estructura-del-proyecto)
  - [⚙️ Instalación y configuración](#️-instalación-y-configuración)
    - [Prerrequisitos](#prerrequisitos)
    - [Pasos](#pasos)
    - [Scripts disponibles](#scripts-disponibles)
  - [🚀 Flujo](#-flujo)
  - [**useCustomers.js**](#usecustomersjs)
  - [🧩 Componentes](#-componentes)
    - [Ejemplo de documentación de un componente](#ejemplo-de-documentación-de-un-componente)
      - [src/data/customers.js](#srcdatacustomersjs)
      - [src/services/customerService.js](#srcservicescustomerservicejs)
      - [src/hooks/useCustomers.js](#srchooksusecustomersjs)
      - [src/components/CustomerCard.jsx](#srccomponentscustomercardjsx)
      - [src/components/CustomerList.jsx](#srccomponentscustomerlistjsx)
      - [src/pages/CustomersPage.jsx](#srcpagescustomerspagejsx)
      - [src/App.jsx](#srcappjsx)
  - [🔄 Estado y lógica](#-estado-y-lógica)
    - [Flujo de datos](#flujo-de-datos)
  - [✅ Funcionalidades implementadas](#-funcionalidades-implementadas)
  - [📸 Capturas de pantalla](#-capturas-de-pantalla)
  - [💡 Aprendizajes](#-aprendizajes)
  - [🔮 Pendientes / Mejoras futuras](#-pendientes--mejoras-futuras)
  - [👤 Autor](#-autor)

---

## 📖 Descripción

> ✏️ *Describe brevemente qué hace la aplicación, cuál es su propósito y a quién va dirigida.*

```
Ejemplo:
Aplicación web de gestión de tareas con categorías, filtros y persistencia local.
Permite crear, editar, eliminar y marcar tareas como completadas.
```

---

## 🎯 Objetivo de la práctica

> ✏️ *¿Qué concepto(s) de React o desarrollo web se practican aquí? Lista los temas.*

- [ ] Hooks básicos (`useState`, `useEffect`)
- [ ] Componentes funcionales
- [ ] Props y comunicación entre componentes
- [ ] Manejo de formularios
- [ ] Consumo de API / fetch
- [ ] Context API
- [ ] Otro: _______________

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | 19.x | Biblioteca principal de UI |
| [Vite](https://vite.dev/) | 8.x | Bundler y servidor de desarrollo |
| [ESLint](https://eslint.org/) | 10.x | Linting de código |
| <!-- ✏️ agrega más --> | | |

---

## 📁 Estructura del proyecto

> ✏️ *Actualiza el árbol conforme vayas añadiendo archivos y carpetas.*

```
Practica9/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/             # Imágenes y recursos estáticos
│   ├── components/         # ✏️ Tus componentes irán aquí
│   ├── App.jsx             # Componente raíz
│   ├── App.css             # Estilos globales
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Reset / estilos base
├── .gitignore
├── eslint.config.js
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Instalación y configuración

### Prerrequisitos

- Node.js `>= 18.x`
- npm `>= 9.x` o pnpm / yarn

### Pasos

```bash
# 1. Clona el repositorio
git clone <URL-del-repo>
cd Practica9

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

La app estará disponible en `http://localhost:5173`

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Build de producción en `/dist` |
| `npm run preview` | Vista previa del build de producción |
| `npm run lint` | Ejecuta ESLint en todo el proyecto |

---

## 🚀 Flujo
****customers.js**
    **↓**
**customerService.js**
    **↓**
**useCustomers.js**
---

## 🧩 Componentes

> ✏️ *Documenta cada componente que vayas creando. Usa la tabla de abajo como guía.*

| Componente | Ruta | Descripción | Props |
|---|---|---|---|
| `App` | `src/App.jsx` | Componente raíz | — |
| <!-- ✏️ --> | | | |

### Ejemplo de documentación de un componente
#### src/data/customers.js
- Archivo: customers.js
- Responsabilidad: guardar datos falsos iniciales
- Recibe: nada
- Devuelve: una lista de clientes
- Depende de: nada

#### src/services/customerService.js
Archivo: customerService.js

Responsabilidad:
- Simular una API de clientes

Recibe:
- nada por ahora

Devuelve:
- lista de clientes

Depende de:
- data/customers.js

#### src/hooks/useCustomers.js
Archivo: useCustomers.js

Responsabilidad:
- Controlar el estado de clientes y exponer funciones.

Recibe:
- nada por ahora.

Devuelve:
- customers.

Depende de:
- useState
- customerService.js

#### src/components/CustomerCard.jsx
Archivo: CustomerCard.jsx

Responsabilidad:
- Mostrar un cliente individual.

Recibe:
- customer

Devuelve:
- una tarjeta visual con datos del cliente

Depende de:
- nada por ahora

#### src/components/CustomerList.jsx
Archivo: CustomerList.jsx

Responsabilidad:
- Recorrer la lista de clientes

Recibe:
- customers

Devuelve:
- muchos CustomerCard

Depende de:
- CustomerCard

customers[]
    ↓
CustomerList
    ↓
.map()
    ↓
CustomerCard

#### src/pages/CustomersPage.jsx
Archivo: CustomersPage.jsx

Responsabilidad:
Armar la pantalla de clientes.

Recibe:
nada.

Devuelve:
título + lista de clientes.

Depende de:
useCustomers
CustomerList

#### src/App.jsx
Archivo: App.jsx

Responsabilidad:
Mostrar la página principal de la aplicación.

Recibe:
nada

Devuelve:
CustomersPage

Depende de:
CustomersPage
## 🔄 Estado y lógica

Pages → organizan pantallas
Hooks → manejan lógica/estado
Components → muestran UI

### Flujo de datos

> ✏️ *Describe brevemente cómo fluyen los datos entre componentes (props down, events up, context, etc.).*

```
App
 ├── [ComponenteHijo] ← recibe `data` como prop
 │    └── emite `onChange` hacia arriba
 └── ...
```

---

## ✅ Funcionalidades implementadas

> ✏️ *Marca las que ya hayas terminado conforme avances.*

- [ ] Funcionalidad 1: _______________
- [ ] Funcionalidad 2: _______________
- [ ] Funcionalidad 3: _______________

---

## 📸 Capturas de pantalla

> ✏️ *Añade imágenes cuando tengas algo visual que mostrar.*

| Vista | Captura |
|---|---|
| Pantalla principal | *(pendiente)* |
| <!-- ✏️ --> | |

```markdown
<!-- Para insertar una imagen usa: -->
![Descripción](./screenshots/nombre.png)
```

---

## 💡 Aprendizajes

> ✏️ *Al terminar la práctica, anota qué aprendiste, qué fue difícil y cómo lo resolviste.*

- **Qué aprendí:** ...
- **Qué fue difícil:** ...
- **Cómo lo resolví:** ...
- **Recursos que consulté:** ...

---

## 🔮 Pendientes / Mejoras futuras

> ✏️ *Ideas que no alcanzaste a implementar o mejoras que harías con más tiempo.*

- [ ] ...
- [ ] ...

---

## 👤 Autor

**Carlos** — [@C-arl-os](https://github.com/C-arl-os)

Proyecto desarrollado como parte del curso de desarrollo web.

---

<div align="center">
  <sub>Construido con ⚛️ React + ⚡ Vite</sub>
</div>
