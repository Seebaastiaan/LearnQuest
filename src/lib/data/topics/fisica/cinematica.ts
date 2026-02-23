import type { Topic } from "@/lib/types";

export const cinematicaTopic: Topic = {
  id: "cinematica",
  slug: "cinematica",
  title: {
    es: "Cinemática",
    en: "Kinematics",
  },
  description: {
    es: "Movimiento rectilíneo uniforme y acelerado",
    en: "Uniform and accelerated linear motion",
  },
  icon: "Gauge",
  color: "violet",
  bgGradient: "bg-linear-to-br from-violet-500 to-purple-600",
  prerequisites: [],
  order: 1,
  lessons: [
    {
      id: "cinematica-mru",
      topicId: "cinematica",
      order: 1,
      title: {
        es: "Movimiento Rectilíneo Uniforme",
        en: "Uniform Linear Motion",
      },
      description: {
        es: "Velocidad constante y gráficas posición-tiempo",
        en: "Constant velocity and position-time graphs",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "fis_cin_01",
          type: "multiple-choice",
          prompt: {
            es: "Un automóvil recorre 120 km en 2 horas con velocidad constante. ¿Cuál es su velocidad en m/s?",
            en: "A car travels 120 km in 2 hours at constant velocity. What is its velocity in m/s?",
          },
          options: [
            { es: "16.67 m/s", en: "16.67 m/s" },
            { es: "60 m/s", en: "60 m/s" },
            { es: "33.33 m/s", en: "33.33 m/s" },
            { es: "120 m/s", en: "120 m/s" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Primero convertimos: 120 km = 120,000 m y 2 h = 7,200 s. La velocidad es $v = \\frac{d}{t} = \\frac{120,000}{7,200} = 16.67$ m/s.",
            en: "First we convert: 120 km = 120,000 m and 2 h = 7,200 s. The velocity is $v = \\frac{d}{t} = \\frac{120,000}{7,200} = 16.67$ m/s.",
          },
          difficulty: 2,
          hints: [
            {
              es: "Convierte kilómetros a metros y horas a segundos antes de calcular.",
              en: "Convert kilometers to meters and hours to seconds before calculating.",
            },
          ],
        },
        {
          id: "fis_cin_02",
          type: "multiple-choice",
          prompt: {
            es: "En el movimiento rectilíneo uniforme (MRU), ¿cuál de las siguientes afirmaciones es correcta?",
            en: "In uniform linear motion (MRU), which of the following statements is correct?",
          },
          options: [
            {
              es: "La velocidad cambia constantemente",
              en: "Velocity changes constantly",
            },
            {
              es: "La aceleración es constante y diferente de cero",
              en: "Acceleration is constant and non-zero",
            },
            {
              es: "La velocidad es constante y la aceleración es cero",
              en: "Velocity is constant and acceleration is zero",
            },
            {
              es: "La distancia recorrida es inversamente proporcional al tiempo",
              en: "Distance traveled is inversely proportional to time",
            },
          ],
          correctAnswer: "2",
          explanation: {
            es: "En el MRU, la velocidad permanece constante en magnitud y dirección, por lo tanto la aceleración es cero. La ecuación es $x = x_0 + vt$.",
            en: "In MRU, velocity remains constant in magnitude and direction, therefore acceleration is zero. The equation is $x = x_0 + vt$.",
          },
          difficulty: 1,
        },
        {
          id: "fis_cin_03",
          type: "multiple-choice",
          prompt: {
            es: "Un ciclista se desplaza con velocidad constante de 5 m/s. ¿Qué distancia recorrerá en 10 minutos?",
            en: "A cyclist moves at constant velocity of 5 m/s. What distance will they cover in 10 minutes?",
          },
          options: [
            { es: "50 m", en: "50 m" },
            { es: "500 m", en: "500 m" },
            { es: "3,000 m", en: "3,000 m" },
            { es: "5,000 m", en: "5,000 m" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "10 minutos = 600 segundos. Usando $d = vt = 5 \\times 600 = 3,000$ m.",
            en: "10 minutes = 600 seconds. Using $d = vt = 5 \\times 600 = 3,000$ m.",
          },
          difficulty: 1,
        },
        {
          id: "fis_cin_04",
          type: "true-false",
          prompt: {
            es: "En una gráfica posición-tiempo de un MRU, la pendiente de la recta representa la velocidad del objeto.",
            en: "In a position-time graph of MRU, the slope of the line represents the velocity of the object.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. La pendiente $m = \\frac{\\Delta x}{\\Delta t}$ es igual a la velocidad. Una mayor pendiente indica mayor velocidad.",
            en: "True. The slope $m = \\frac{\\Delta x}{\\Delta t}$ equals velocity. A steeper slope indicates greater velocity.",
          },
          difficulty: 1,
        },
        {
          id: "fis_cin_05",
          type: "multiple-choice",
          prompt: {
            es: "Dos trenes parten simultáneamente de estaciones separadas 300 km. El tren A viaja a 60 km/h y el tren B a 90 km/h en sentido contrario. ¿En cuánto tiempo se encuentran?",
            en: "Two trains depart simultaneously from stations 300 km apart. Train A travels at 60 km/h and train B at 90 km/h in opposite directions. When do they meet?",
          },
          options: [
            { es: "1 hora", en: "1 hour" },
            { es: "2 horas", en: "2 hours" },
            { es: "3 horas", en: "3 hours" },
            { es: "4 horas", en: "4 hours" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La velocidad relativa es $v_r = 60 + 90 = 150$ km/h. El tiempo de encuentro es $t = \\frac{d}{v_r} = \\frac{300}{150} = 2$ horas.",
            en: "The relative velocity is $v_r = 60 + 90 = 150$ km/h. The meeting time is $t = \\frac{d}{v_r} = \\frac{300}{150} = 2$ hours.",
          },
          difficulty: 2,
        },
        {
          id: "fis_cin_06",
          type: "multiple-choice",
          prompt: {
            es: "La ecuación del MRU es $x = x_0 + vt$. Si un objeto parte del origen ($x_0 = 0$) con velocidad de 8 m/s, ¿en qué posición estará después de 5 segundos?",
            en: "The MRU equation is $x = x_0 + vt$. If an object starts from the origin ($x_0 = 0$) with velocity of 8 m/s, where will it be after 5 seconds?",
          },
          options: [
            { es: "13 m", en: "13 m" },
            { es: "40 m", en: "40 m" },
            { es: "80 m", en: "80 m" },
            { es: "8 m", en: "8 m" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Sustituyendo en la ecuación: $x = 0 + (8)(5) = 40$ m.",
            en: "Substituting in the equation: $x = 0 + (8)(5) = 40$ m.",
          },
          difficulty: 1,
        },
        {
          id: "fis_cin_07",
          type: "fill-blank",
          prompt: {
            es: "La característica principal del MRU es que la _______ permanece constante.",
            en: "The main characteristic of MRU is that the _______ remains constant.",
          },
          correctAnswer: "velocidad",
          explanation: {
            es: "En el movimiento rectilíneo uniforme, la velocidad es constante (no cambia con el tiempo).",
            en: "In uniform linear motion, velocity is constant (does not change with time).",
          },
          difficulty: 1,
        },
        {
          id: "fis_cin_08",
          type: "multiple-choice",
          prompt: {
            es: "Un móvil recorre distancias iguales en intervalos de tiempo iguales. Este fenómeno corresponde a:",
            en: "A mobile covers equal distances in equal time intervals. This phenomenon corresponds to:",
          },
          options: [
            {
              es: "Movimiento rectilíneo uniforme",
              en: "Uniform linear motion",
            },
            {
              es: "Movimiento uniformemente acelerado",
              en: "Uniformly accelerated motion",
            },
            { es: "Caída libre", en: "Free fall" },
            { es: "Movimiento circular", en: "Circular motion" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Recorrer distancias iguales en tiempos iguales significa velocidad constante, que es la definición del MRU.",
            en: "Covering equal distances in equal times means constant velocity, which is the definition of MRU.",
          },
          difficulty: 1,
        },
      ],
    },
    {
      id: "cinematica-mua",
      topicId: "cinematica",
      order: 2,
      title: {
        es: "Movimiento Uniformemente Acelerado",
        en: "Uniformly Accelerated Motion",
      },
      description: {
        es: "Aceleración constante y caída libre",
        en: "Constant acceleration and free fall",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "fis_cin_09",
          type: "multiple-choice",
          prompt: {
            es: "Un automóvil parte del reposo y acelera uniformemente a $2 \\text{ m/s}^2$. ¿Qué velocidad alcanza después de 6 segundos?",
            en: "A car starts from rest and accelerates uniformly at $2 \\text{ m/s}^2$. What velocity does it reach after 6 seconds?",
          },
          options: [
            { es: "8 m/s", en: "8 m/s" },
            { es: "12 m/s", en: "12 m/s" },
            { es: "18 m/s", en: "18 m/s" },
            { es: "36 m/s", en: "36 m/s" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Usando la ecuación $v = v_0 + at$ con $v_0 = 0$: $v = 0 + (2)(6) = 12$ m/s.",
            en: "Using the equation $v = v_0 + at$ with $v_0 = 0$: $v = 0 + (2)(6) = 12$ m/s.",
          },
          difficulty: 1,
        },
        {
          id: "fis_cin_10",
          type: "multiple-choice",
          prompt: {
            es: "La aceleración es una magnitud vectorial que mide:",
            en: "Acceleration is a vector quantity that measures:",
          },
          options: [
            {
              es: "El cambio de posición por unidad de tiempo",
              en: "The change of position per unit time",
            },
            {
              es: "El cambio de velocidad por unidad de tiempo",
              en: "The change of velocity per unit time",
            },
            {
              es: "La distancia total recorrida",
              en: "The total distance traveled",
            },
            {
              es: "La fuerza aplicada al objeto",
              en: "The force applied to the object",
            },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La aceleración se define como $a = \\frac{\\Delta v}{\\Delta t}$, es decir, el cambio de velocidad por unidad de tiempo.",
            en: "Acceleration is defined as $a = \\frac{\\Delta v}{\\Delta t}$, that is, the change in velocity per unit time.",
          },
          difficulty: 1,
        },
        {
          id: "fis_cin_11",
          type: "multiple-choice",
          prompt: {
            es: "Un objeto se deja caer libremente desde una altura de 80 m. Si $g = 10 \\text{ m/s}^2$, ¿cuánto tiempo tarda en llegar al suelo?",
            en: "An object is dropped freely from a height of 80 m. If $g = 10 \\text{ m/s}^2$, how long does it take to reach the ground?",
          },
          options: [
            { es: "2 s", en: "2 s" },
            { es: "4 s", en: "4 s" },
            { es: "8 s", en: "8 s" },
            { es: "16 s", en: "16 s" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Usando $h = \\frac{1}{2}gt^2$: $80 = \\frac{1}{2}(10)t^2 \\rightarrow 80 = 5t^2 \\rightarrow t^2 = 16 \\rightarrow t = 4$ s.",
            en: "Using $h = \\frac{1}{2}gt^2$: $80 = \\frac{1}{2}(10)t^2 \\rightarrow 80 = 5t^2 \\rightarrow t^2 = 16 \\rightarrow t = 4$ s.",
          },
          difficulty: 2,
        },
        {
          id: "fis_cin_12",
          type: "true-false",
          prompt: {
            es: "En la caída libre, todos los objetos caen con la misma aceleración independientemente de su masa (despreciando la resistencia del aire).",
            en: "In free fall, all objects fall with the same acceleration regardless of their mass (neglecting air resistance).",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Galileo demostró que en ausencia de resistencia del aire, todos los cuerpos caen con la misma aceleración $g \\approx 9.8 \\text{ m/s}^2$.",
            en: "True. Galileo demonstrated that in the absence of air resistance, all bodies fall with the same acceleration $g \\approx 9.8 \\text{ m/s}^2$.",
          },
          difficulty: 1,
        },
        {
          id: "fis_cin_13",
          type: "multiple-choice",
          prompt: {
            es: "Un móvil parte con velocidad inicial de 20 m/s y frena con aceleración constante de $-4 \\text{ m/s}^2$. ¿Cuánto tiempo tarda en detenerse?",
            en: "A mobile starts with initial velocity of 20 m/s and brakes with constant acceleration of $-4 \\text{ m/s}^2$. How long does it take to stop?",
          },
          options: [
            { es: "2 s", en: "2 s" },
            { es: "5 s", en: "5 s" },
            { es: "8 s", en: "8 s" },
            { es: "10 s", en: "10 s" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Cuando se detiene, $v = 0$. Usando $v = v_0 + at$: $0 = 20 + (-4)t \\rightarrow 4t = 20 \\rightarrow t = 5$ s.",
            en: "When it stops, $v = 0$. Using $v = v_0 + at$: $0 = 20 + (-4)t \\rightarrow 4t = 20 \\rightarrow t = 5$ s.",
          },
          difficulty: 2,
        },
        {
          id: "fis_cin_14",
          type: "multiple-choice",
          prompt: {
            es: "La ecuación $x = x_0 + v_0 t + \\frac{1}{2}at^2$ se utiliza para calcular:",
            en: "The equation $x = x_0 + v_0 t + \\frac{1}{2}at^2$ is used to calculate:",
          },
          options: [
            {
              es: "La velocidad final de un objeto",
              en: "The final velocity of an object",
            },
            {
              es: "La posición de un objeto con aceleración constante",
              en: "The position of an object with constant acceleration",
            },
            {
              es: "La aceleración de un objeto",
              en: "The acceleration of an object",
            },
            { es: "El tiempo de vuelo", en: "The flight time" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Esta es la ecuación de posición para movimiento con aceleración constante, donde $x$ es la posición final.",
            en: "This is the position equation for motion with constant acceleration, where $x$ is the final position.",
          },
          difficulty: 1,
        },
        {
          id: "fis_cin_15",
          type: "fill-blank",
          prompt: {
            es: "La aceleración de la gravedad en la Tierra es aproximadamente _______ m/s².",
            en: "The acceleration of gravity on Earth is approximately _______ m/s².",
          },
          correctAnswer: "9.8",
          explanation: {
            es: "La aceleración gravitacional estándar es $g = 9.8 \\text{ m/s}^2$ (usualmente se aproxima a 10 m/s² para cálculos rápidos).",
            en: "The standard gravitational acceleration is $g = 9.8 \\text{ m/s}^2$ (usually approximated to 10 m/s² for quick calculations).",
          },
          difficulty: 1,
        },
        {
          id: "fis_cin_16",
          type: "multiple-choice",
          prompt: {
            es: "Un objeto es lanzado verticalmente hacia arriba con velocidad inicial de 30 m/s. Usando $g = 10 \\text{ m/s}^2$, ¿cuál es la altura máxima alcanzada?",
            en: "An object is thrown vertically upward with initial velocity of 30 m/s. Using $g = 10 \\text{ m/s}^2$, what is the maximum height reached?",
          },
          options: [
            { es: "30 m", en: "30 m" },
            { es: "45 m", en: "45 m" },
            { es: "60 m", en: "60 m" },
            { es: "90 m", en: "90 m" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "En el punto máximo, $v = 0$. Usando $v^2 = v_0^2 - 2gh$: $0 = 30^2 - 2(10)h \\rightarrow 20h = 900 \\rightarrow h = 45$ m.",
            en: "At the maximum point, $v = 0$. Using $v^2 = v_0^2 - 2gh$: $0 = 30^2 - 2(10)h \\rightarrow 20h = 900 \\rightarrow h = 45$ m.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "cinematica-fenomenos",
      topicId: "cinematica",
      order: 3,
      title: {
        es: "Fenómenos Mecánicos",
        en: "Mechanical Phenomena",
      },
      description: {
        es: "Análisis de gráficas y problemas integradores",
        en: "Graph analysis and integrative problems",
      },
      type: "quiz",
      xpReward: 30,
      questions: [
        {
          id: "fis_cin_17",
          type: "multiple-choice",
          prompt: {
            es: "En una gráfica velocidad-tiempo de un movimiento uniformemente acelerado, ¿qué representa el área bajo la curva?",
            en: "In a velocity-time graph of uniformly accelerated motion, what does the area under the curve represent?",
          },
          options: [
            { es: "La aceleración", en: "The acceleration" },
            { es: "La velocidad final", en: "The final velocity" },
            { es: "El desplazamiento", en: "The displacement" },
            { es: "El tiempo transcurrido", en: "The elapsed time" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "El área bajo la curva en una gráfica v-t representa el desplazamiento del objeto. Matemáticamente: $\\Delta x = \\int v \\, dt$.",
            en: "The area under the curve in a v-t graph represents the displacement of the object. Mathematically: $\\Delta x = \\int v \\, dt$.",
          },
          difficulty: 2,
        },
        {
          id: "fis_cin_18",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de las siguientes características corresponde a un fenómeno mecánico?",
            en: "Which of the following characteristics corresponds to a mechanical phenomenon?",
          },
          options: [
            { es: "Cambio de temperatura", en: "Temperature change" },
            {
              es: "Cambio de posición o deformación",
              en: "Change of position or deformation",
            },
            { es: "Cambio de color", en: "Color change" },
            { es: "Cambio químico", en: "Chemical change" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Los fenómenos mecánicos involucran cambios en la posición (movimiento) o en la forma (deformación) de los objetos.",
            en: "Mechanical phenomena involve changes in position (motion) or shape (deformation) of objects.",
          },
          difficulty: 1,
        },
        {
          id: "fis_cin_19",
          type: "multiple-choice",
          prompt: {
            es: "Un tren parte del reposo y alcanza una velocidad de 72 km/h en 20 segundos. ¿Cuál es su aceleración en m/s²?",
            en: "A train starts from rest and reaches a velocity of 72 km/h in 20 seconds. What is its acceleration in m/s²?",
          },
          options: [
            { es: "1 m/s²", en: "1 m/s²" },
            { es: "3.6 m/s²", en: "3.6 m/s²" },
            { es: "20 m/s²", en: "20 m/s²" },
            { es: "72 m/s²", en: "72 m/s²" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Primero convertimos: 72 km/h = 20 m/s. Luego: $a = \\frac{v - v_0}{t} = \\frac{20 - 0}{20} = 1 \\text{ m/s}^2$.",
            en: "First we convert: 72 km/h = 20 m/s. Then: $a = \\frac{v - v_0}{t} = \\frac{20 - 0}{20} = 1 \\text{ m/s}^2$.",
          },
          difficulty: 2,
        },
        {
          id: "fis_cin_20",
          type: "order-steps",
          prompt: {
            es: "Ordena los pasos para resolver un problema de caída libre:",
            en: "Order the steps to solve a free fall problem:",
          },
          options: [
            {
              es: "Identificar datos: altura inicial, velocidad inicial = 0, g = 9.8 m/s²",
              en: "Identify data: initial height, initial velocity = 0, g = 9.8 m/s²",
            },
            {
              es: "Elegir la ecuación apropiada según lo que se busca",
              en: "Choose the appropriate equation according to what is sought",
            },
            {
              es: "Sustituir valores en la ecuación",
              en: "Substitute values in the equation",
            },
            {
              es: "Resolver y verificar que la respuesta tenga sentido físico",
              en: "Solve and verify that the answer makes physical sense",
            },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "El método sistemático para resolver problemas de cinemática requiere primero identificar datos, luego elegir ecuación, sustituir y verificar.",
            en: "The systematic method to solve kinematics problems requires first identifying data, then choosing equation, substituting and verifying.",
          },
          difficulty: 2,
        },
        {
          id: "fis_cin_21",
          type: "true-false",
          prompt: {
            es: "Un objeto puede tener velocidad cero y aceleración diferente de cero en el mismo instante.",
            en: "An object can have zero velocity and non-zero acceleration at the same instant.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Ejemplo: un objeto lanzado verticalmente hacia arriba tiene velocidad cero en su altura máxima, pero la aceleración gravitacional sigue actuando ($a = -g$).",
            en: "True. Example: an object thrown vertically upward has zero velocity at its maximum height, but gravitational acceleration is still acting ($a = -g$).",
          },
          difficulty: 2,
        },
        {
          id: "fis_cin_22",
          type: "multiple-choice",
          prompt: {
            es: "Un móvil recorre 100 m en 4 s con aceleración constante partiendo del reposo. ¿Cuál es su aceleración?",
            en: "A mobile covers 100 m in 4 s with constant acceleration starting from rest. What is its acceleration?",
          },
          options: [
            { es: "12.5 m/s²", en: "12.5 m/s²" },
            { es: "25 m/s²", en: "25 m/s²" },
            { es: "6.25 m/s²", en: "6.25 m/s²" },
            { es: "50 m/s²", en: "50 m/s²" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Usando $x = \\frac{1}{2}at^2$ con $x_0 = 0$ y $v_0 = 0$: $100 = \\frac{1}{2}a(4)^2 \\rightarrow 100 = 8a \\rightarrow a = 12.5 \\text{ m/s}^2$.",
            en: "Using $x = \\frac{1}{2}at^2$ with $x_0 = 0$ and $v_0 = 0$: $100 = \\frac{1}{2}a(4)^2 \\rightarrow 100 = 8a \\rightarrow a = 12.5 \\text{ m/s}^2$.",
          },
          difficulty: 2,
        },
        {
          id: "fis_cin_23",
          type: "fill-blank",
          prompt: {
            es: "La pendiente de una gráfica velocidad-tiempo representa la _______.",
            en: "The slope of a velocity-time graph represents the _______.",
          },
          correctAnswer: "aceleración",
          explanation: {
            es: "La pendiente de la curva v-t es $\\frac{\\Delta v}{\\Delta t} = a$, que es la aceleración.",
            en: "The slope of the v-t curve is $\\frac{\\Delta v}{\\Delta t} = a$, which is the acceleration.",
          },
          difficulty: 2,
        },
        {
          id: "fis_cin_24",
          type: "multiple-choice",
          prompt: {
            es: "Dos objetos se sueltan simultáneamente desde diferentes alturas. Si no hay resistencia del aire, ¿cuál llega primero al suelo?",
            en: "Two objects are dropped simultaneously from different heights. If there is no air resistance, which reaches the ground first?",
          },
          options: [
            {
              es: "El que se soltó desde mayor altura",
              en: "The one dropped from greater height",
            },
            {
              es: "El que se soltó desde menor altura",
              en: "The one dropped from lower height",
            },
            {
              es: "Llegan al mismo tiempo",
              en: "They arrive at the same time",
            },
            { es: "Depende de sus masas", en: "It depends on their masses" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "El objeto soltado desde menor altura recorre menos distancia con la misma aceleración, por lo tanto llega primero. El tiempo depende de $t = \\sqrt{\\frac{2h}{g}}$.",
            en: "The object dropped from lower height travels less distance with the same acceleration, therefore arrives first. Time depends on $t = \\sqrt{\\frac{2h}{g}}$.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
