# Tiles

Aplicación SAP Fiori desarrollada con Fiori Tools y OpenUI5/SAPUI5.

## Descripción

Esta aplicación permite gestionar productos, con funcionalidades de listado, detalle y formulario de crear/editar. Incluye soporte para temas claros/oscuro y validación de formularios.

## Scripts disponibles

Puedes ejecutar los siguientes comandos desde la raíz del proyecto:

- `npm install` — Instala las dependencias.
- `npm start` — Inicia la aplicación en modo desarrollo (Fiori Tools).
- `npm run build` — Construye la aplicación para producción.
- `npm run unit-test` — Ejecuta pruebas unitarias (QUnit).
- `npm run int-test` — Ejecuta pruebas de integración (OPA5).
- `npm run deploy` — Despliega la aplicación a SAP BTP.
- `npm run undeploy` — Elimina la aplicación y servicios de SAP BTP.

## Pruebas

- **Unitarias:** en `webapp/test/unit/`
- **Integración:** en `webapp/test/integration/`
- Puedes ejecutarlas con los scripts mencionados arriba o abriendo los archivos `.qunit.html` en un navegador.

## Requisitos Previos

- Node.js LTS
- UI5 CLI (`@ui5/cli`)
- Fiori Tools (`@sap/ux-ui5-tooling`)
- Acceso a SAP BTP para despliegue (opcional)

## Cómo ejecutar la aplicación localmente

1. Instala las dependencias:
   ```sh
   npm install
   ```
2. Inicia la aplicación:
   ```sh
   npm start
   ```
3. Accede a la URL que se abre automáticamente en tu navegador.

## Despliegue

Para desplegar en SAP BTP, asegúrate de tener configurado Cloud Foundry y ejecuta:
```sh
npm run deploy
```

## Estructura de carpetas clave

- **controller/**: Lógica de negocio y eventos de la UI.
- **view/**: Vistas XML y fragmentos reutilizables.
- **model/**: Modelos de datos.
- **localservice/**: Datos simulados para desarrollo.
- **test/**: Pruebas unitarias e integración.
- **css/**: Estilos personalizados.
- **i18n/**: Archivos de internacionalización.

---

Generado con SAP Fiori Tools.  
Autor: [Aron Lloclla]