import type { Topic } from "@/lib/types";

export const ondasTopic: Topic = {
  id: "ondas",
  slug: "ondas",
  title: {
    es: "Ondas",
    en: "Waves",
  },
  description: {
    es: "Ondas mecánicas, reflexión, refracción e interferencia",
    en: "Mechanical waves, reflection, refraction and interference",
  },
  icon: "Waves",
  color: "cyan",
  bgGradient: "bg-linear-to-br from-cyan-500 to-blue-600",
  prerequisites: [],
  order: 5,
  lessons: [
    {
      id: "ondas-mecanicas",
      topicId: "ondas",
      order: 1,
      title: {
        es: "Ondas Mecánicas",
        en: "Mechanical Waves",
      },
      description: {
        es: "Características y propiedades de las ondas",
        en: "Characteristics and properties of waves",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "fis_ond_01",
          type: "multiple-choice",
          prompt: {
            es: "Una onda es:",
            en: "A wave is:",
          },
          options: [
            {
              es: "Una perturbación que transporta energía sin transportar materia",
              en: "A disturbance that transports energy without transporting matter",
            },
            {
              es: "Un movimiento de partículas en línea recta",
              en: "A movement of particles in straight line",
            },
            { es: "Una forma de materia", en: "A form of matter" },
            {
              es: "Una fuerza aplicada a un objeto",
              en: "A force applied to an object",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Una onda es una perturbación que se propaga transportando energía, pero sin que haya transporte neto de materia.",
            en: "A wave is a disturbance that propagates transporting energy, but without net transport of matter.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ond_02",
          type: "multiple-choice",
          prompt: {
            es: "La longitud de onda ($\\lambda$) es:",
            en: "The wavelength ($\\lambda$) is:",
          },
          options: [
            {
              es: "La distancia entre dos crestas consecutivas",
              en: "The distance between two consecutive crests",
            },
            {
              es: "El número de oscilaciones por segundo",
              en: "The number of oscillations per second",
            },
            {
              es: "La altura máxima de la onda",
              en: "The maximum height of the wave",
            },
            { es: "La velocidad de propagación", en: "The propagation speed" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La longitud de onda es la distancia entre dos puntos equivalentes consecutivos (crestas, valles, o cualquier punto en fase).",
            en: "Wavelength is the distance between two consecutive equivalent points (crests, troughs, or any point in phase).",
          },
          difficulty: 1,
        },
        {
          id: "fis_ond_03",
          type: "multiple-choice",
          prompt: {
            es: "La frecuencia de una onda se mide en:",
            en: "The frequency of a wave is measured in:",
          },
          options: [
            { es: "Metros (m)", en: "Meters (m)" },
            { es: "Hertz (Hz)", en: "Hertz (Hz)" },
            { es: "Segundos (s)", en: "Seconds (s)" },
            { es: "Joules (J)", en: "Joules (J)" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La frecuencia (f) se mide en Hertz (Hz), que equivale a ciclos por segundo o s⁻¹.",
            en: "Frequency (f) is measured in Hertz (Hz), which equals cycles per second or s⁻¹.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ond_04",
          type: "true-false",
          prompt: {
            es: "La amplitud de una onda es la distancia máxima que una partícula se desplaza de su posición de equilibrio.",
            en: "The amplitude of a wave is the maximum distance a particle displaces from its equilibrium position.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. La amplitud (A) mide la altura máxima de la onda desde la línea de equilibrio. Es proporcional a la energía transportada.",
            en: "True. Amplitude (A) measures the maximum height of the wave from the equilibrium line. It is proportional to the energy transported.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ond_05",
          type: "multiple-choice",
          prompt: {
            es: "La relación entre velocidad (v), frecuencia (f) y longitud de onda ($\\lambda$) es:",
            en: "The relationship between velocity (v), frequency (f) and wavelength ($\\lambda$) is:",
          },
          options: [
            { es: "$v = f\\lambda$", en: "$v = f\\lambda$" },
            {
              es: "$v = \\frac{f}{\\lambda}$",
              en: "$v = \\frac{f}{\\lambda}$",
            },
            { es: "$v = f + \\lambda$", en: "$v = f + \\lambda$" },
            { es: "$v = f^2\\lambda$", en: "$v = f^2\\lambda$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La ecuación fundamental de ondas es $v = f\\lambda$. La velocidad es el producto de frecuencia por longitud de onda.",
            en: "The fundamental wave equation is $v = f\\lambda$. Velocity is the product of frequency times wavelength.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ond_06",
          type: "multiple-choice",
          prompt: {
            es: "Una onda tiene frecuencia de 500 Hz y se propaga a 1500 m/s. ¿Cuál es su longitud de onda?",
            en: "A wave has frequency of 500 Hz and propagates at 1500 m/s. What is its wavelength?",
          },
          options: [
            { es: "3 m", en: "3 m" },
            { es: "0.33 m", en: "0.33 m" },
            { es: "750,000 m", en: "750,000 m" },
            { es: "2000 m", en: "2000 m" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Usando $\\lambda = \\frac{v}{f} = \\frac{1500}{500} = 3$ m.",
            en: "Using $\\lambda = \\frac{v}{f} = \\frac{1500}{500} = 3$ m.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ond_07",
          type: "fill-blank",
          prompt: {
            es: "El período (T) de una onda es el tiempo que tarda en completar una oscilación y se relaciona con la frecuencia por T = _______.",
            en: "The period (T) of a wave is the time it takes to complete one oscillation and is related to frequency by T = _______.",
          },
          correctAnswer: "1/f",
          explanation: {
            es: "El período es el inverso de la frecuencia: $T = \\frac{1}{f}$. Se mide en segundos.",
            en: "The period is the inverse of frequency: $T = \\frac{1}{f}$. It is measured in seconds.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ond_08",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de las siguientes NO es una onda mecánica?",
            en: "Which of the following is NOT a mechanical wave?",
          },
          options: [
            { es: "Ondas sonoras", en: "Sound waves" },
            { es: "Ondas en una cuerda", en: "Waves on a string" },
            { es: "Ondas de luz", en: "Light waves" },
            { es: "Ondas sísmicas", en: "Seismic waves" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "Las ondas de luz son ondas electromagnéticas y no requieren medio material. Las ondas mecánicas (sonido, cuerdas, sísmicas) sí necesitan un medio.",
            en: "Light waves are electromagnetic waves and do not require a material medium. Mechanical waves (sound, strings, seismic) do need a medium.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "ondas-reflexion-refraccion",
      topicId: "ondas",
      order: 2,
      title: {
        es: "Reflexión y Refracción",
        en: "Reflection and Refraction",
      },
      description: {
        es: "Comportamiento de ondas en interfaces",
        en: "Wave behavior at interfaces",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "fis_ond_09",
          type: "multiple-choice",
          prompt: {
            es: "La reflexión de ondas ocurre cuando:",
            en: "Wave reflection occurs when:",
          },
          options: [
            {
              es: "Una onda rebota al encontrar un obstáculo",
              en: "A wave bounces when encountering an obstacle",
            },
            { es: "Una onda cambia de medio", en: "A wave changes medium" },
            { es: "La frecuencia aumenta", en: "Frequency increases" },
            { es: "La onda se detiene", en: "The wave stops" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La reflexión ocurre cuando una onda encuentra una barrera y rebota. El ángulo de incidencia es igual al ángulo de reflexión.",
            en: "Reflection occurs when a wave encounters a barrier and bounces. The angle of incidence equals the angle of reflection.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ond_10",
          type: "true-false",
          prompt: {
            es: "En la reflexión, el ángulo de incidencia es igual al ángulo de reflexión.",
            en: "In reflection, the angle of incidence equals the angle of reflection.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Esta es la Ley de Reflexión: $\\theta_i = \\theta_r$, donde los ángulos se miden respecto a la normal.",
            en: "True. This is the Law of Reflection: $\\theta_i = \\theta_r$, where angles are measured from the normal.",
          },
          difficulty: 1,
        },
        {
          id: "fis_ond_11",
          type: "multiple-choice",
          prompt: {
            es: "La refracción es:",
            en: "Refraction is:",
          },
          options: [
            {
              es: "El cambio de dirección de una onda al pasar de un medio a otro",
              en: "The change in direction of a wave when passing from one medium to another",
            },
            { es: "El rebote de una onda", en: "The bouncing of a wave" },
            {
              es: "La absorción completa de una onda",
              en: "The complete absorption of a wave",
            },
            {
              es: "La amplificación de una onda",
              en: "The amplification of a wave",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La refracción ocurre cuando una onda cambia de medio y su velocidad cambia, provocando un cambio en su dirección (excepto si incide perpendicularmente).",
            en: "Refraction occurs when a wave changes medium and its velocity changes, causing a change in its direction (except if incident perpendicularly).",
          },
          difficulty: 1,
        },
        {
          id: "fis_ond_12",
          type: "multiple-choice",
          prompt: {
            es: "La Ley de Snell relaciona:",
            en: "Snell's Law relates:",
          },
          options: [
            {
              es: "Los índices de refracción y los ángulos de incidencia y refracción",
              en: "Refractive indices and angles of incidence and refraction",
            },
            {
              es: "La frecuencia y la longitud de onda",
              en: "Frequency and wavelength",
            },
            { es: "La amplitud y la energía", en: "Amplitude and energy" },
            {
              es: "La velocidad y la aceleración",
              en: "Velocity and acceleration",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La Ley de Snell es $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$, donde $n$ son índices de refracción y $\\theta$ son ángulos respecto a la normal.",
            en: "Snell's Law is $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$, where $n$ are refractive indices and $\\theta$ are angles from the normal.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ond_13",
          type: "multiple-choice",
          prompt: {
            es: "Cuando una onda pasa de un medio menos denso a uno más denso, ¿qué sucede?",
            en: "When a wave passes from a less dense to a more dense medium, what happens?",
          },
          options: [
            {
              es: "Se aleja de la normal",
              en: "It bends away from the normal",
            },
            { es: "Se acerca a la normal", en: "It bends toward the normal" },
            {
              es: "No cambia de dirección",
              en: "It does not change direction",
            },
            { es: "Se refleja completamente", en: "It reflects completely" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Cuando una onda entra a un medio más denso (mayor índice de refracción), su velocidad disminuye y se refracta acercándose a la normal.",
            en: "When a wave enters a denser medium (higher refractive index), its velocity decreases and it refracts toward the normal.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ond_14",
          type: "multiple-choice",
          prompt: {
            es: "En la refracción, ¿qué propiedad de la onda NO cambia?",
            en: "In refraction, which property of the wave does NOT change?",
          },
          options: [
            { es: "La velocidad", en: "Velocity" },
            { es: "La longitud de onda", en: "Wavelength" },
            { es: "La frecuencia", en: "Frequency" },
            { es: "La dirección", en: "Direction" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "La frecuencia permanece constante durante la refracción. Lo que cambia son la velocidad, longitud de onda y dirección.",
            en: "Frequency remains constant during refraction. What changes are velocity, wavelength and direction.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ond_15",
          type: "fill-blank",
          prompt: {
            es: "La energía de una onda incidente se divide entre la onda _______ y la onda _______.",
            en: "The energy of an incident wave is divided between the _______ wave and the _______ wave.",
          },
          correctAnswer: "reflejada",
          explanation: {
            es: "Cuando una onda llega a una interfaz, parte de su energía se refleja y parte se transmite (refracta) al segundo medio.",
            en: "When a wave arrives at an interface, part of its energy is reflected and part is transmitted (refracted) to the second medium.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ond_16",
          type: "multiple-choice",
          prompt: {
            es: "El eco es un fenómeno relacionado con:",
            en: "Echo is a phenomenon related to:",
          },
          options: [
            { es: "La reflexión del sonido", en: "Sound reflection" },
            { es: "La refracción del sonido", en: "Sound refraction" },
            { es: "La absorción del sonido", en: "Sound absorption" },
            { es: "La difracción del sonido", en: "Sound diffraction" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El eco es la reflexión del sonido en una superficie. Para percibirse como eco, el sonido reflejado debe llegar al menos 0.1 s después del directo.",
            en: "Echo is the reflection of sound on a surface. To be perceived as echo, reflected sound must arrive at least 0.1 s after the direct sound.",
          },
          difficulty: 1,
        },
      ],
    },
    {
      id: "ondas-difraccion-interferencia",
      topicId: "ondas",
      order: 3,
      title: {
        es: "Difracción e Interferencia",
        en: "Diffraction and Interference",
      },
      description: {
        es: "Fenómenos ondulatorios avanzados",
        en: "Advanced wave phenomena",
      },
      type: "quiz",
      xpReward: 30,
      questions: [
        {
          id: "fis_ond_17",
          type: "multiple-choice",
          prompt: {
            es: "La difracción es:",
            en: "Diffraction is:",
          },
          options: [
            {
              es: "La capacidad de una onda para rodear obstáculos",
              en: "The ability of a wave to go around obstacles",
            },
            { es: "El rebote de una onda", en: "The bouncing of a wave" },
            {
              es: "El cambio de velocidad de una onda",
              en: "The change in velocity of a wave",
            },
            { es: "La absorción de energía", en: "The absorption of energy" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La difracción es la capacidad de las ondas para rodear obstáculos o pasar por aberturas, desviándose de la propagación rectilínea.",
            en: "Diffraction is the ability of waves to go around obstacles or pass through openings, deviating from straight-line propagation.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ond_18",
          type: "multiple-choice",
          prompt: {
            es: "La interferencia constructiva ocurre cuando:",
            en: "Constructive interference occurs when:",
          },
          options: [
            {
              es: "Dos ondas en fase se superponen y sus amplitudes se suman",
              en: "Two waves in phase overlap and their amplitudes add",
            },
            {
              es: "Dos ondas se cancelan mutuamente",
              en: "Two waves cancel each other",
            },
            {
              es: "Una onda cambia de dirección",
              en: "A wave changes direction",
            },
            { es: "La frecuencia aumenta", en: "Frequency increases" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Interferencia constructiva: cuando dos ondas están en fase (cresta con cresta), sus amplitudes se suman, resultando en mayor amplitud.",
            en: "Constructive interference: when two waves are in phase (crest with crest), their amplitudes add, resulting in greater amplitude.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ond_19",
          type: "true-false",
          prompt: {
            es: "La interferencia destructiva ocurre cuando dos ondas fuera de fase se superponen y se cancelan parcial o totalmente.",
            en: "Destructive interference occurs when two out-of-phase waves overlap and cancel partially or totally.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Cuando una cresta coincide con un valle (desfase de 180° o $\\pi$), las ondas se cancelan: interferencia destructiva.",
            en: "True. When a crest coincides with a trough (180° or $\\pi$ phase shift), waves cancel: destructive interference.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ond_20",
          type: "multiple-choice",
          prompt: {
            es: "El principio de superposición establece que:",
            en: "The superposition principle states that:",
          },
          options: [
            {
              es: "La onda resultante es la suma algebraica de las ondas individuales",
              en: "The resulting wave is the algebraic sum of individual waves",
            },
            {
              es: "Las ondas no pueden superponerse",
              en: "Waves cannot overlap",
            },
            {
              es: "Solo una onda puede existir en un punto",
              en: "Only one wave can exist at a point",
            },
            {
              es: "Las ondas se destruyen al chocar",
              en: "Waves are destroyed when colliding",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El principio de superposición: cuando dos o más ondas coinciden en un punto, el desplazamiento resultante es la suma de los desplazamientos individuales.",
            en: "Superposition principle: when two or more waves coincide at a point, the resulting displacement is the sum of individual displacements.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ond_21",
          type: "multiple-choice",
          prompt: {
            es: "Una onda estacionaria se forma cuando:",
            en: "A standing wave is formed when:",
          },
          options: [
            {
              es: "Dos ondas de igual frecuencia viajan en direcciones opuestas",
              en: "Two waves of equal frequency travel in opposite directions",
            },
            { es: "Una onda se detiene", en: "A wave stops" },
            { es: "La frecuencia es cero", en: "Frequency is zero" },
            { es: "No hay reflexión", en: "There is no reflection" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Las ondas estacionarias resultan de la interferencia entre una onda incidente y su reflexión. Se caracterizan por nodos (sin movimiento) y antinodos (máxima amplitud).",
            en: "Standing waves result from interference between an incident wave and its reflection. They are characterized by nodes (no motion) and antinodes (maximum amplitude).",
          },
          difficulty: 3,
        },
        {
          id: "fis_ond_22",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué determina si la difracción será más pronunciada?",
            en: "What determines if diffraction will be more pronounced?",
          },
          options: [
            {
              es: "Que la longitud de onda sea comparable al tamaño del obstáculo o abertura",
              en: "That wavelength is comparable to size of obstacle or opening",
            },
            {
              es: "Que la frecuencia sea muy alta",
              en: "That frequency is very high",
            },
            { es: "Que la amplitud sea grande", en: "That amplitude is large" },
            {
              es: "Que la velocidad sea constante",
              en: "That velocity is constant",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La difracción es más notoria cuando la longitud de onda es comparable o mayor al tamaño del obstáculo o abertura. Por eso el sonido se difracta más que la luz.",
            en: "Diffraction is more noticeable when wavelength is comparable to or greater than the size of obstacle or opening. That's why sound diffracts more than light.",
          },
          difficulty: 3,
        },
        {
          id: "fis_ond_23",
          type: "fill-blank",
          prompt: {
            es: "Los puntos de una onda estacionaria donde la amplitud es siempre cero se llaman _______.",
            en: "The points of a standing wave where amplitude is always zero are called _______.",
          },
          correctAnswer: "nodos",
          explanation: {
            es: "Los nodos son puntos fijos sin movimiento en una onda estacionaria. Los antinodos son los puntos de máxima amplitud.",
            en: "Nodes are fixed points without motion in a standing wave. Antinodes are points of maximum amplitude.",
          },
          difficulty: 2,
        },
        {
          id: "fis_ond_24",
          type: "multiple-choice",
          prompt: {
            es: "En el experimento de la doble rendija de Young, las franjas de interferencia demuestran:",
            en: "In Young's double-slit experiment, interference fringes demonstrate:",
          },
          options: [
            {
              es: "La naturaleza ondulatoria de la luz",
              en: "The wave nature of light",
            },
            {
              es: "Que la luz es solo partícula",
              en: "That light is only particle",
            },
            { es: "La reflexión de la luz", en: "Light reflection" },
            { es: "La absorción de energía", en: "Energy absorption" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El experimento de Young demuestra la naturaleza ondulatoria de la luz mediante patrones de interferencia (franjas claras y oscuras) producidos por dos rendijas.",
            en: "Young's experiment demonstrates the wave nature of light through interference patterns (bright and dark fringes) produced by two slits.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
