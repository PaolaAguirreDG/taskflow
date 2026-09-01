import type { Task } from '../types'

const raw: Array<[string, string, Task['category'], Task['date'], boolean]> = [

  ['Actualizar portfolio', 'Seleccionar proyectos recientes para agregar al portfolio', 'trabajo', 'today', false],

  ['Hacer las compras', 'Comprar frutas, verduras y productos para la semana', 'hogar', 'tomorrow', false],

  ['Practicar Figma', 'Diseñar una pantalla mobile para mejorar el manejo de componentes', 'estudio', 'today', false],

  ['Salir a caminar', 'Caminar durante 30 minutos para despejarme', 'personal', 'today', false],

  ['Responder mails', 'Contestar los mensajes de trabajo pendientes', 'trabajo', 'today', false],

  ['Ordenar el escritorio', 'Guardar papeles y materiales de trabajo', 'hogar', 'today', true],

  ['Leer sobre UX', 'Investigar buenas prácticas de experiencia de usuario', 'estudio', 'tomorrow', false],

  ['Planificar la semana', 'Organizar actividades y pendientes de los próximos días', 'personal', 'tomorrow', true],

  ['Revisar CV', 'Actualizar experiencia, habilidades y herramientas de diseño', 'trabajo', 'tomorrow', false],

  ['Lavar la ropa', 'Separar la ropa y poner el lavarropas', 'hogar', 'today', false],

  ['Organizar fotos', 'Ordenar las fotos del celular y eliminar las repetidas', 'personal', 'nextWeek', false],

  ['Buscar referencias visuales', 'Guardar inspiración para próximos proyectos de diseño', 'trabajo', 'tomorrow', false],

  ['Preparar la cena', 'Organizar una comida sencilla para la noche', 'hogar', 'today', false],

  ['Practicar prototipado', 'Crear una interacción sencilla entre varias pantallas', 'estudio', 'nextWeek', false],

  ['Actualizar LinkedIn', 'Revisar la información del perfil profesional', 'trabajo', 'nextWeek', false],

  ['Leer un libro', 'Dedicar al menos 20 minutos a leer', 'personal', 'tomorrow', false],

  ['Organizar archivos de diseño', 'Ordenar proyectos y recursos gráficos por carpetas', 'trabajo', 'today', true],

  ['Ordenar la cocina', 'Limpiar la mesada y organizar la alacena', 'hogar', 'tomorrow', false],

  ['Preparar propuesta de diseño', 'Organizar ideas y referencias para presentar al cliente', 'trabajo', 'tomorrow', false],

  ['Preparar cosas para mañana', 'Dejar organizada la ropa y los pendientes del día siguiente', 'personal', 'today', false]
 
]

export const SEED_TASKS: Task[] = raw.map(([title, description, category, date, completed], i) => ({
  id: `seed-${i + 1}`,
  title,
  description,
  category,
  date,
  completed
}))
