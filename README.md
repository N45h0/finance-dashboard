# Dashboard Financiero Personal 📊

## 📱 [Ver Demo En Vivo](https://finance-dashboard-inky.vercel.app/)

Un dashboard financiero personal desarrollado con React y Material-UI que permite visualizar y gestionar préstamos, servicios recurrentes y cuentas bancarias.

## 🌟 Características

### 📊 Panel General
- Resumen mensual total con distribución por titular
- Visualización de gastos totales: $38,196.20
  - LAFIO: $14,676.60
  - Lovia: $23,519.60
- Alerta de vencimientos importantes
- Gráficos interactivos de distribución

### 💰 Gestión de Préstamos
- Capital total gestionado: $51,741.19
- Seguimiento detallado de 5 préstamos activos
- Indicadores de progreso de pagos
- Control de retenciones CEIP
- Alertas de mora y vencimientos

### 💳 Servicios Recurrentes
- Servicios digitales vinculados a cuenta 6039
  - Spotify Premium Familiar: USD 11.99
  - ChatGPT: USD 20.00
  - Claude: USD 20.00
  - Google One: USD 20.00
  - Plan Antel: $520.00
- Calendario de facturación
- Conversión automática USD/UYU

### 🏦 Control de Cuentas
- Gestión de múltiples cuentas bancarias
- Seguimiento de débitos automáticos
- Control de vencimientos de tarjetas
- Organización de servicios por cuenta

## 🛠️ Tecnologías Utilizadas

- React 18
- Material-UI v5
- Recharts para visualizaciones
- Lucide React para iconos
- Vercel para deployment

## 💻 Instalación Local

1. Clona el repositorio
```bash
git clone https://github.com/N45h0/finance-dashboard.git
```

2. Instala las dependencias
```bash
cd finance-dashboard
npm install
```

3. Inicia el servidor de desarrollo
```bash
npm start
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📁 Estructura del Proyecto

```
finance-dashboard/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js         # Componente principal
│   ├── index.js       # Punto de entrada
│   └── index.css      # Estilos globales
├── package.json
└── README.md
```

## 📱 Características Mobile

- Diseño completamente responsive
- Interfaz optimizada para dispositivos móviles
- Navegación intuitiva en pantallas pequeñas
- Visualización adaptativa de gráficos

## 🔐 Seguridad

- Números de cuenta parcialmente ocultos
- Información sensible protegida
- Autenticación requerida para acceso

## 📈 Funcionalidades Principales

### Control de Préstamos
- Seguimiento de capital e intereses
- Alertas de vencimientos
- Cálculo automático de progreso
- Gestión de retenciones CEIP

### Gestión de Servicios
- Organización por categorías
- Conversión automática de monedas
- Calendario de pagos
- Control de suscripciones

### Análisis Financiero
- Gráficos de distribución
- Seguimiento de gastos
- Historial de pagos
- Proyecciones financieras

## 🔄 Actualizaciones Futuras

- [ ] Integración con APIs bancarias
- [ ] Notificaciones push
- [ ] Exportación de reportes
- [ ] Modo offline
- [ ] Multi-idioma

## 👥 Desarrollado por

- [@N45h0](https://github.com/N45h0) - Desarrollo Full Stack

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes alguna pregunta o sugerencia, por favor abre un issue en el repositorio.

## 🙏 Agradecimientos

- Material-UI por los componentes
- Recharts por las visualizaciones
- Vercel por el hosting
