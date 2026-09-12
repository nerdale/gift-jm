const mensajes = [
  {
    titulo: "💛 ¡Feliz cumpleaños amor!",
    texto: "Llegaste a una nueva meta y hoy celebramos tu nuevo año de vida.",
    icono: "🎉"
  },
  {
    titulo: "🚴‍♂️ Eres el número 1",
    texto: "Eres un hombre maravilloso, inteligente, hermoso y talentoso.",
    icono: "🏆"
  },
  {
    titulo: "⛰️ En cada etapa contigo",
    texto: "Gracias por ser mi compañero de ruta, sin duda lo mejor de mi 2026.",
    icono: "🚵‍♂️"
  },
  {
    titulo: "🔥 El líder indiscutido",
    texto: "Te mereces todos los reconocimientos, todas las sonrisas y todo el amor del mundo.",
    icono: "👑"
  },
  {
    titulo: "🏁 ¡Llegada a la meta!",
    texto: "Que este nuevo año de vida esté lleno de rutas increíbles, logros y momentos juntos. ¡Te quiero muchísimo! ❤️",
    icono: "❤️"
  }
];

function mostrarMensaje(index) {
  if (index >= mensajes.length) return;

  const m = mensajes[index];

  Swal.fire({
    title: m.titulo,
    text: m.texto,
    iconHtml: `<span style="font-size: 2.5rem;">${m.icono}</span>`,
    confirmButtonText: index === mensajes.length - 1 ? "¡Te quiero! ❤️" : "Siguiente etapa 🚴‍♂️ ➔",
    allowOutsideClick: false,
    allowEscapeKey: false
  }).then((result) => {
    if (result.isConfirmed) {
      mostrarMensaje(index + 1);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btnIniciar = document.getElementById("btnIniciar");
  if (btnIniciar) {
    btnIniciar.addEventListener("click", () => {
      mostrarMensaje(0);
    });
  }
});