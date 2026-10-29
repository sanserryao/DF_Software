// Design tokens de DF Software (Clean SaaS, tema luminoso).
// Se carga justo después de cdn.tailwindcss.com en todas las páginas.
//
//  bosque  → verde bosque / canal hondo (primario de marca, tomado del logo)
//  jade    → verde jade / menta (acento interactivo). DEFAULT #3FAE8A se usa en
//            bordes, brillos y rellenos; para TEXTO sobre fondo claro usar
//            jade-700 (4.9:1) o jade-800 (7.1:1) — el DEFAULT no pasa AA sobre blanco.
//  mint    → fondos suaves para contenedores de iconos y badges
//  ink     → texto de títulos
tailwind.config = {
  theme: {
    extend: {
      colors: {
        bosque: { DEFAULT: "#0B3B39", 700: "#124840", 900: "#072826" },
        jade: { DEFAULT: "#3FAE8A", 300: "#7CD3B5", 600: "#2A9A76", 700: "#1E7F62", 800: "#17644D" },
        mint: { 50: "#F1FBF7", 100: "#DDF5EC", 200: "#BFEBDA" },
        ink: "#0F1F1E",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,31,30,0.05), 0 10px 28px -14px rgba(15,31,30,0.14)",
        window: "0 40px 90px -30px rgba(11,59,57,0.38), 0 8px 24px -12px rgba(15,31,30,0.16)",
      },
    },
  },
};
