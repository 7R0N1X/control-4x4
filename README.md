# Control 4x4

Aplicación web que permite gestionar compras dentro de la categoría 4x4, facilitando el control de gastos anuales y evitando superar el límite establecido.

## Instalación

### Requisitos previos

Antes de comenzar, asegúrate de tener instalado y configurado:

- Node.js
- Firebase

### Clonar el repositorio

```bash
  git clone https://github.com/7R0N1X/control-4x4.git
  cd control-4x4
```

### Instalar dependencias

Si no tienes pnpm instalado, primero instala pnpm globalmente:

```bash
  npm install -g pnpm
```
Luego, instala las dependencias del proyecto:

```bash
  pnpm install
```

### Configurar variables de entorno

Renombrar .env.example a .env y completar los valores con los datos de tu proyecto de Firebase:

```bash
  VITE_API_KEY=your_api_key
  VITE_AUTH_DOMAIN=your_auth_domain
  VITE_PROJECT_ID=your_project_id
  VITE_STORAGE_BUCKET=your_storage_bucket
  VITE_MESSAGING_SENDER_ID=your_sender_id
  VITE_APP_ID=your_app_id
```

### Iniciar el servidor

```bash
  pnpm run dev
```

La aplicación estará disponible en http://localhost:5173.

## Tecnologías Utilizadas

![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCB2B?style=for-the-badge&logo=firebase&logoColor=black)

## Licencia

Este proyecto es de código abierto bajo la licencia [GNU Affero General Public License v3.0](https://github.com/7R0N1X/control-4x4/blob/main/LICENSE).
