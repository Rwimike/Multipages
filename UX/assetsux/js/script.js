// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  const leyes = [
    {
      nombre: "Ley de Gestalt",
      psicologia: "El cerebro organiza elementos visuales en patrones o grupos significativos.",
      ux: "Agrupa elementos relacionados en secciones claras: botones, formularios, tarjetas.",
      ejemploHTML: `
        <div class="flex space-x-4">
          <div class="w-12 h-12 bg-blue-400 rounded-full"></div>
          <div class="w-12 h-12 bg-blue-400 rounded-full"></div>
          <div class="w-12 h-12 bg-gray-300 rounded-full"></div>
        </div>
        <p class="text-xs text-gray-500 mt-2">Los círculos azules se perciben como un grupo.</p>
      `
    },
    {
      nombre: "Ley de Hick",
      psicologia: "Más opciones = más tiempo para decidir.",
      ux: "Simplifica los menús y evita recargar interfaces con demasiadas decisiones.",
      ejemploHTML: `
        <div class="flex flex-wrap gap-2">
          <button class="bg-indigo-500 text-white px-3 py-1 rounded">Opción 1</button>
          <button class="bg-indigo-500 text-white px-3 py-1 rounded">Opción 2</button>
          <button class="bg-indigo-500 text-white px-3 py-1 rounded">Opción 3</button>
          <button class="bg-indigo-500 text-white px-3 py-1 rounded">Opción 4</button>
          <button class="bg-indigo-500 text-white px-3 py-1 rounded">Opción 5</button>
          <button class="bg-indigo-500 text-white px-3 py-1 rounded">Opción 6</button>
        </div>
        <p class="text-xs text-gray-500 mt-2">Demasiadas opciones pueden ralentizar la decisión.</p>
      `
    },
    {
      nombre: "Ley de Tesler",
      psicologia: "Toda tarea tiene una complejidad mínima que no se puede eliminar.",
      ux: "Simplifica la interfaz absorbiendo la complejidad técnica detrás del diseño.",
      ejemploHTML: `
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-sm">Usuario:</span>
            <input type="text" placeholder="Nombre" class="border rounded px-2 py-1" />
          </div>
          <p class="text-xs text-gray-500">Simplificamos el input para que el usuario no tenga que elegir entre muchas opciones técnicas.</p>
        </div>
      `
    },
    {
      nombre: "Ley de Proximidad",
      psicologia: "Elementos cercanos se perciben como relacionados.",
      ux: "Agrupa elementos relacionados visualmente para facilitar la lectura y comprensión.",
      ejemploHTML: `
        <div class="flex flex-col space-y-1">
          <label class="text-sm">Nombre</label>
          <input type="text" class="border px-2 py-1 rounded" />
          <label class="text-sm mt-4">Correo electrónico</label>
          <input type="email" class="border px-2 py-1 rounded" />
        </div>
        <p class="text-xs text-gray-500 mt-2">Los campos están agrupados visualmente para indicar que pertenecen al mismo formulario.</p>
      `
    },
    {
      nombre: "Efecto de disposición serial",
      psicologia: "Recordamos mejor lo primero y último de una lista.",
      ux: "Coloca elementos clave al principio o final de menús o pasos.",
      ejemploHTML: `
        <ul class="list-disc pl-5">
          <li class="font-bold">Inicio</li>
          <li>Catálogo</li>
          <li>Ofertas</li>
          <li>Perfil</li>
          <li class="font-bold">Cerrar sesión</li>
        </ul>
        <p class="text-xs text-gray-500 mt-2">"Inicio" y "Cerrar sesión" son más memorables por su posición.</p>
      `
    },
    {
      nombre: "Ley de Fitts",
      psicologia: "Cuanto más grande y cercano esté un objetivo, más fácil es interactuar con él.",
      ux: "Aumenta el tamaño y la cercanía de los botones más usados.",
      ejemploHTML: `
        <button class="bg-green-500 text-white px-6 py-3 rounded text-lg">Botón grande y accesible</button>
        <p class="text-xs text-gray-500 mt-2">El tamaño y color mejoran la rapidez de interacción.</p>
      `
    },
    {
      nombre: "Ley de Parkinson",
      psicologia: "El trabajo se expande para llenar el tiempo disponible.",
      ux: "Usa deadlines o timers para mejorar eficiencia y enfoque.",
      ejemploHTML: `
        <div class="flex items-center space-x-2">
          <span class="text-sm">Tienes:</span>
          <span class="bg-red-100 text-red-700 px-2 py-1 rounded">04:59 min</span>
        </div>
        <p class="text-xs text-gray-500 mt-2">El temporizador impulsa la acción del usuario.</p>
      `
    },
    {
      nombre: "Ley de Von Restorff",
      psicologia: "El elemento que más contrasta es más recordado.",
      ux: "Haz destacar CTA o promociones clave visualmente.",
      ejemploHTML: `
        <div class="flex gap-2">
          <button class="bg-gray-200 text-gray-800 px-3 py-1 rounded">Cancelar</button>
          <button class="bg-yellow-400 text-black font-bold px-3 py-1 rounded">¡Compra ya!</button>
        </div>
        <p class="text-xs text-gray-500 mt-2">El botón amarillo resalta entre los neutros.</p>
      `
    },
    {
      nombre: "Ley de Pareto",
      psicologia: "El 80% de los resultados proviene del 20% de las acciones.",
      ux: "Optimiza las funciones que más se usan en tu app.",
      ejemploHTML: `
        <div class="grid grid-cols-5 gap-2">
          <div class="bg-blue-500 h-4 col-span-4"></div>
          <div class="bg-gray-300 h-4 col-span-1"></div>
        </div>
        <p class="text-xs text-gray-500 mt-2">La mayoría del uso viene de pocas funciones.</p>
      `
    },
    {
      nombre: "Ley de Zegarnik",
      psicologia: "Recordamos tareas incompletas más que las completadas.",
      ux: "Muestra tareas pendientes o progreso para mantener la atención.",
      ejemploHTML: `
        <div class="w-full bg-gray-300 rounded">
          <div class="bg-blue-500 text-xs text-white text-center px-2 py-1 rounded w-2/3">66% Completado</div>
        </div>
        <p class="text-xs text-gray-500 mt-2">El progreso visible motiva a terminar la tarea.</p>
      `
    },
    {
      nombre: "Ley de Miller",
      psicologia: "La mente solo puede manejar 7±2 elementos a la vez.",
      ux: "Divide información en bloques pequeños o pasos.",
      ejemploHTML: `
        <ul class="list-decimal pl-5 space-y-1">
          <li>Paso 1</li>
          <li>Paso 2</li>
          <li>Paso 3</li>
          <li>Paso 4</li>
          <li>Paso 5</li>
        </ul>
        <p class="text-xs text-gray-500 mt-2">Evita sobrecargar la mente del usuario.</p>
      `
    },
    {
      nombre: "Ley de Prägnanz",
      psicologia: "Las personas tienden a percibir formas simples y ordenadas.",
      ux: "Evita diseños complejos, prioriza lo simple y simétrico.",
      ejemploHTML: `
        <div class="flex space-x-2">
          <div class="w-8 h-8 bg-black"></div>
          <div class="w-8 h-8 bg-black"></div>
          <div class="w-8 h-8 bg-black"></div>
        </div>
        <p class="text-xs text-gray-500 mt-2">Formas simples y organizadas son más comprensibles.</p>
      `
    },
    {
      nombre: "Ley de Jakob",
      psicologia: "Los usuarios prefieren patrones familiares.",
      ux: "Usa convenciones como íconos conocidos, navegación estándar, etc.",
      ejemploHTML: `
        <nav class="flex gap-4">
          <span>🏠 Inicio</span>
          <span>🛒 Carrito</span>
          <span>🔍 Buscar</span>
        </nav>
        <p class="text-xs text-gray-500 mt-2">Patrones comunes hacen la navegación más intuitiva.</p>
      `
    }
  ];

  const container = document.getElementById("leyesContainer");

  leyes.forEach((ley) => {
    const card = document.createElement("div");
    card.className = "leyCard";
    card.innerHTML = `
      <h2 class="leyCard__title">${ley.nombre}</h2>
      <div class="leyCard__contenido">
        <p class="leyCard__psicologia"><strong>Psicología:</strong> ${ley.psicologia}</p>
        <p class="leyCard__ux"><strong>UX/UI:</strong> ${ley.ux}</p>
        <div class="leyCard__ejemplo mt-4">${ley.ejemploHTML || ''}</div>
      </div>
    `;
    container.appendChild(card);
  });
});
