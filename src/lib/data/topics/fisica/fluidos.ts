import type { Topic } from "@/lib/types";

export const fluidosTopic: Topic = {
  id: "fluidos",
  slug: "fluidos",
  title: {
    es: "Fluidos",
    en: "Fluids",
  },
  description: {
    es: "Hidrostática, hidrodinámica y aplicaciones",
    en: "Hydrostatics, hydrodynamics and applications",
  },
  icon: "Droplet",
  color: "blue",
  bgGradient: "bg-linear-to-br from-blue-500 to-cyan-600",
  prerequisites: [],
  order: 7,
  lessons: [
    {
      id: "fluidos-reposo",
      topicId: "fluidos",
      order: 1,
      title: {
        es: "Fluidos en Reposo",
        en: "Fluids at Rest",
      },
      description: {
        es: "Presión, densidad, Pascal y Arquímedes",
        en: "Pressure, density, Pascal and Archimedes",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "fis_flu_01",
          type: "multiple-choice",
          prompt: {
            es: "La densidad ($\\rho$) de un material se define como:",
            en: "The density ($\\rho$) of a material is defined as:",
          },
          options: [
            { es: "$\\rho = \\frac{m}{V}$", en: "$\\rho = \\frac{m}{V}$" },
            { es: "$\\rho = \\frac{V}{m}$", en: "$\\rho = \\frac{V}{m}$" },
            { es: "$\\rho = m \\times V$", en: "$\\rho = m \\times V$" },
            { es: "$\\rho = \\frac{F}{A}$", en: "$\\rho = \\frac{F}{A}$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La densidad es la masa por unidad de volumen: $\\rho = \\frac{m}{V}$. Se mide en kg/m³ o g/cm³. El agua tiene $\\rho = 1000$ kg/m³.",
            en: "Density is mass per unit volume: $\\rho = \\frac{m}{V}$. Measured in kg/m³ or g/cm³. Water has $\\rho = 1000$ kg/m³.",
          },
          difficulty: 1,
        },
        {
          id: "fis_flu_02",
          type: "multiple-choice",
          prompt: {
            es: "La presión se define como:",
            en: "Pressure is defined as:",
          },
          options: [
            { es: "$P = \\frac{F}{A}$", en: "$P = \\frac{F}{A}$" },
            { es: "$P = F \\times A$", en: "$P = F \\times A$" },
            { es: "$P = \\frac{m}{V}$", en: "$P = \\frac{m}{V}$" },
            { es: "$P = ma$", en: "$P = ma$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La presión es la fuerza perpendicular por unidad de área: $P = \\frac{F}{A}$. Se mide en Pascales (Pa) o N/m². 1 atm = 101,325 Pa.",
            en: "Pressure is perpendicular force per unit area: $P = \\frac{F}{A}$. Measured in Pascals (Pa) or N/m². 1 atm = 101,325 Pa.",
          },
          difficulty: 1,
        },
        {
          id: "fis_flu_03",
          type: "multiple-choice",
          prompt: {
            es: "La presión hidrostática a una profundidad $h$ en un fluido es:",
            en: "Hydrostatic pressure at depth $h$ in a fluid is:",
          },
          options: [
            { es: "$P = P_0 + \\rho gh$", en: "$P = P_0 + \\rho gh$" },
            { es: "$P = mgh$", en: "$P = mgh$" },
            { es: "$P = \\frac{F}{A}$", en: "$P = \\frac{F}{A}$" },
            { es: "$P = \\rho V$", en: "$P = \\rho V$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La presión aumenta con la profundidad: $P = P_0 + \\rho gh$, donde $P_0$ es la presión atmosférica, $\\rho$ la densidad del fluido, $g$ la gravedad y $h$ la profundidad.",
            en: "Pressure increases with depth: $P = P_0 + \\rho gh$, where $P_0$ is atmospheric pressure, $\\rho$ fluid density, $g$ gravity and $h$ depth.",
          },
          difficulty: 2,
        },
        {
          id: "fis_flu_04",
          type: "true-false",
          prompt: {
            es: "El Principio de Pascal establece que un cambio de presión aplicado a un fluido encerrado se transmite uniformemente a todo el fluido.",
            en: "Pascal's Principle states that a pressure change applied to an enclosed fluid is transmitted uniformly throughout the fluid.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. El Principio de Pascal es la base de las prensas hidráulicas: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$. Permite multiplicar fuerzas.",
            en: "True. Pascal's Principle is the basis of hydraulic presses: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$. Allows force multiplication.",
          },
          difficulty: 1,
        },
        {
          id: "fis_flu_05",
          type: "multiple-choice",
          prompt: {
            es: "El Principio de Arquímedes establece que:",
            en: "Archimedes' Principle states that:",
          },
          options: [
            {
              es: "Un cuerpo sumergido experimenta una fuerza de empuje igual al peso del fluido desplazado",
              en: "A submerged body experiences a buoyant force equal to the weight of displaced fluid",
            },
            {
              es: "La presión aumenta con la profundidad",
              en: "Pressure increases with depth",
            },
            {
              es: "La densidad es constante en todo el fluido",
              en: "Density is constant throughout the fluid",
            },
            {
              es: "Los fluidos no tienen forma propia",
              en: "Fluids have no fixed shape",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Arquímedes: $F_{empuje} = \\rho_{fluido} \\cdot V_{sumergido} \\cdot g = m_{fluido\\_desplazado} \\cdot g$. Explica por qué los objetos flotan o se hunden.",
            en: "Archimedes: $F_{buoyant} = \\rho_{fluid} \\cdot V_{submerged} \\cdot g = m_{displaced\\_fluid} \\cdot g$. Explains why objects float or sink.",
          },
          difficulty: 2,
        },
        {
          id: "fis_flu_06",
          type: "multiple-choice",
          prompt: {
            es: "Un objeto flota cuando:",
            en: "An object floats when:",
          },
          options: [
            {
              es: "Su densidad es menor que la del fluido",
              en: "Its density is less than the fluid's",
            },
            {
              es: "Su densidad es mayor que la del fluido",
              en: "Its density is greater than the fluid's",
            },
            { es: "Su masa es cero", en: "Its mass is zero" },
            { es: "No hay gravedad", en: "There is no gravity" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Un objeto flota si $\\rho_{objeto} < \\rho_{fluido}$, porque el empuje supera su peso. Si $\\rho_{objeto} > \\rho_{fluido}$, se hunde.",
            en: "An object floats if $\\rho_{object} < \\rho_{fluid}$, because buoyancy exceeds its weight. If $\\rho_{object} > \\rho_{fluid}$, it sinks.",
          },
          difficulty: 2,
        },
        {
          id: "fis_flu_07",
          type: "fill-blank",
          prompt: {
            es: "El _______ es la fuerza hacia arriba que experimenta un cuerpo sumergido en un fluido.",
            en: "_______ is the upward force experienced by a body submerged in a fluid.",
          },
          correctAnswer: "empuje",
          explanation: {
            es: "El empuje (o fuerza de flotación) es causado por la diferencia de presión entre la parte superior e inferior del objeto sumergido.",
            en: "Buoyancy (or buoyant force) is caused by the pressure difference between the top and bottom of the submerged object.",
          },
          difficulty: 1,
        },
        {
          id: "fis_flu_08",
          type: "multiple-choice",
          prompt: {
            es: "En una prensa hidráulica, el pistón pequeño tiene área 10 cm² y el grande 100 cm². Si aplico 50 N en el pequeño, la fuerza en el grande es:",
            en: "In a hydraulic press, the small piston has area 10 cm² and the large 100 cm². If I apply 50 N on the small one, the force on the large is:",
          },
          options: [
            { es: "5 N", en: "5 N" },
            { es: "50 N", en: "50 N" },
            { es: "500 N", en: "500 N" },
            { es: "5000 N", en: "5000 N" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "Por Pascal: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$ → $F_2 = F_1 \\frac{A_2}{A_1} = 50 \\times \\frac{100}{10} = 500$ N. Se multiplica la fuerza por 10.",
            en: "By Pascal: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$ → $F_2 = F_1 \\frac{A_2}{A_1} = 50 \\times \\frac{100}{10} = 500$ N. Force is multiplied by 10.",
          },
          difficulty: 3,
        },
      ],
    },
    {
      id: "fluidos-movimiento",
      topicId: "fluidos",
      order: 2,
      title: {
        es: "Fluidos en Movimiento",
        en: "Fluids in Motion",
      },
      description: {
        es: "Ecuación de continuidad y Bernoulli",
        en: "Continuity equation and Bernoulli",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "fis_flu_09",
          type: "multiple-choice",
          prompt: {
            es: "La ecuación de continuidad establece que en un fluido incompresible:",
            en: "The continuity equation states that in an incompressible fluid:",
          },
          options: [
            { es: "$A_1 v_1 = A_2 v_2$", en: "$A_1 v_1 = A_2 v_2$" },
            {
              es: "$P_1 + \\rho gh_1 = P_2 + \\rho gh_2$",
              en: "$P_1 + \\rho gh_1 = P_2 + \\rho gh_2$",
            },
            { es: "$F = ma$", en: "$F = ma$" },
            { es: "$\\rho = \\frac{m}{V}$", en: "$\\rho = \\frac{m}{V}$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La ecuación de continuidad: $A_1 v_1 = A_2 v_2$ (caudal constante). Si el área disminuye, la velocidad aumenta.",
            en: "Continuity equation: $A_1 v_1 = A_2 v_2$ (constant flow rate). If area decreases, velocity increases.",
          },
          difficulty: 2,
        },
        {
          id: "fis_flu_10",
          type: "true-false",
          prompt: {
            es: "Si un tubo se estrecha, la velocidad del fluido aumenta para conservar el caudal.",
            en: "If a pipe narrows, fluid velocity increases to conserve flow rate.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Por continuidad, $Q = Av$ es constante, entonces si $A$ disminuye, $v$ debe aumentar.",
            en: "True. By continuity, $Q = Av$ is constant, so if $A$ decreases, $v$ must increase.",
          },
          difficulty: 1,
        },
        {
          id: "fis_flu_11",
          type: "multiple-choice",
          prompt: {
            es: "El Principio de Bernoulli para un fluido ideal establece que:",
            en: "Bernoulli's Principle for an ideal fluid states that:",
          },
          options: [
            {
              es: "$P + \\frac{1}{2}\\rho v^2 + \\rho gh = constante$",
              en: "$P + \\frac{1}{2}\\rho v^2 + \\rho gh = constant$",
            },
            { es: "$P = \\frac{F}{A}$", en: "$P = \\frac{F}{A}$" },
            { es: "$F = ma$", en: "$F = ma$" },
            { es: "$E_k + E_p = constante$", en: "$E_k + E_p = constant$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Ecuación de Bernoulli: $P + \\frac{1}{2}\\rho v^2 + \\rho gh = constante$. Es conservación de energía para fluidos: presión + energía cinética + energía potencial.",
            en: "Bernoulli's equation: $P + \\frac{1}{2}\\rho v^2 + \\rho gh = constant$. It's energy conservation for fluids: pressure + kinetic energy + potential energy.",
          },
          difficulty: 2,
        },
        {
          id: "fis_flu_12",
          type: "multiple-choice",
          prompt: {
            es: "Según Bernoulli, si un fluido aumenta su velocidad:",
            en: "According to Bernoulli, if a fluid increases its velocity:",
          },
          options: [
            { es: "Su presión disminuye", en: "Its pressure decreases" },
            { es: "Su presión aumenta", en: "Its pressure increases" },
            { es: "Su presión no cambia", en: "Its pressure doesn't change" },
            { es: "Su densidad aumenta", en: "Its density increases" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Si $v$ aumenta, el término $\\frac{1}{2}\\rho v^2$ aumenta, entonces $P$ debe disminuir para mantener constante la suma (asumiendo $h$ constante).",
            en: "If $v$ increases, the term $\\frac{1}{2}\\rho v^2$ increases, so $P$ must decrease to keep the sum constant (assuming constant $h$).",
          },
          difficulty: 2,
        },
        {
          id: "fis_flu_13",
          type: "multiple-choice",
          prompt: {
            es: "El caudal ($Q$) se define como:",
            en: "Flow rate ($Q$) is defined as:",
          },
          options: [
            {
              es: "$Q = Av$ (volumen por unidad de tiempo)",
              en: "$Q = Av$ (volume per unit time)",
            },
            { es: "$Q = \\frac{F}{A}$", en: "$Q = \\frac{F}{A}$" },
            { es: "$Q = \\rho gh$", en: "$Q = \\rho gh$" },
            { es: "$Q = \\frac{1}{2}mv^2$", en: "$Q = \\frac{1}{2}mv^2$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El caudal es el volumen de fluido que pasa por unidad de tiempo: $Q = \\frac{V}{t} = Av$. Se mide en m³/s o L/s.",
            en: "Flow rate is the volume of fluid passing per unit time: $Q = \\frac{V}{t} = Av$. Measured in m³/s or L/s.",
          },
          difficulty: 1,
        },
        {
          id: "fis_flu_14",
          type: "fill-blank",
          prompt: {
            es: "Un fluido _______ es aquel cuya densidad no cambia con la presión.",
            en: "An _______ fluid is one whose density does not change with pressure.",
          },
          correctAnswer: "incompresible",
          explanation: {
            es: "Los líquidos son prácticamente incompresibles. Los gases sí son compresibles (su densidad varía con la presión).",
            en: "Liquids are practically incompressible. Gases are compressible (their density varies with pressure).",
          },
          difficulty: 1,
        },
        {
          id: "fis_flu_15",
          type: "multiple-choice",
          prompt: {
            es: "El efecto Venturi (succión en una constricción) se explica por:",
            en: "The Venturi effect (suction in a constriction) is explained by:",
          },
          options: [
            {
              es: "La disminución de presión cuando aumenta la velocidad",
              en: "Pressure decrease when velocity increases",
            },
            {
              es: "El aumento de presión cuando aumenta la velocidad",
              en: "Pressure increase when velocity increases",
            },
            { es: "La Ley de Pascal", en: "Pascal's Law" },
            { es: "El Principio de Arquímedes", en: "Archimedes' Principle" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El efecto Venturi es una aplicación directa de Bernoulli: en la constricción, $v$ aumenta y $P$ disminuye, creando succión.",
            en: "Venturi effect is a direct application of Bernoulli: in the constriction, $v$ increases and $P$ decreases, creating suction.",
          },
          difficulty: 3,
        },
        {
          id: "fis_flu_16",
          type: "multiple-choice",
          prompt: {
            es: "La sustentación de un ala de avión se debe a:",
            en: "Lift on an airplane wing is due to:",
          },
          options: [
            {
              es: "La diferencia de velocidades y presiones arriba y abajo del ala (Bernoulli)",
              en: "Velocity and pressure differences above and below the wing (Bernoulli)",
            },
            { es: "Solo el peso del avión", en: "Only the airplane's weight" },
            { es: "El empuje de Arquímedes", en: "Archimedes' buoyancy" },
            { es: "La presión atmosférica", en: "Atmospheric pressure" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El ala tiene forma aerodinámica: el aire va más rápido arriba (menor presión) que abajo (mayor presión), generando fuerza neta hacia arriba.",
            en: "The wing has aerodynamic shape: air goes faster above (lower pressure) than below (higher pressure), generating net upward force.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "fluidos-aplicaciones",
      topicId: "fluidos",
      order: 3,
      title: {
        es: "Aplicaciones de Fluidos",
        en: "Applications of Fluids",
      },
      description: {
        es: "Problemas integrados y fenómenos",
        en: "Integrated problems and phenomena",
      },
      type: "quiz",
      xpReward: 30,
      questions: [
        {
          id: "fis_flu_17",
          type: "multiple-choice",
          prompt: {
            es: "Un submarino se sumerge aumentando su:",
            en: "A submarine submerges by increasing its:",
          },
          options: [
            {
              es: "Densidad media (llenando tanques con agua)",
              en: "Average density (filling tanks with water)",
            },
            { es: "Velocidad", en: "Velocity" },
            { es: "Temperatura", en: "Temperature" },
            { es: "Presión interna", en: "Internal pressure" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El submarino controla su flotabilidad cambiando su densidad media: llena o vacía tanques de lastre con agua para sumergirse o emerger.",
            en: "The submarine controls its buoyancy by changing its average density: fills or empties ballast tanks with water to submerge or surface.",
          },
          difficulty: 2,
        },
        {
          id: "fis_flu_18",
          type: "multiple-choice",
          prompt: {
            es: "Los vasos comunicantes ilustran que:",
            en: "Communicating vessels illustrate that:",
          },
          options: [
            {
              es: "Un mismo fluido alcanza la misma altura en todos los recipientes conectados",
              en: "The same fluid reaches the same height in all connected containers",
            },
            {
              es: "La presión depende del área",
              en: "Pressure depends on area",
            },
            {
              es: "El caudal es diferente en cada vaso",
              en: "Flow rate is different in each vessel",
            },
            {
              es: "La densidad varía con la altura",
              en: "Density varies with height",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "En vasos comunicantes, la presión en la base debe ser igual, entonces $\\rho gh$ es igual y por tanto $h$ es igual (mismo fluido, misma $\\rho$).",
            en: "In communicating vessels, pressure at the base must be equal, so $\\rho gh$ is equal and therefore $h$ is equal (same fluid, same $\\rho$).",
          },
          difficulty: 2,
        },
        {
          id: "fis_flu_19",
          type: "true-false",
          prompt: {
            es: "Un objeto de hierro siempre se hunde en agua, pero puede flotar en mercurio si la densidad del hierro es menor que la del mercurio.",
            en: "An iron object always sinks in water, but can float in mercury if iron's density is less than mercury's.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. El hierro ($\\rho \\approx 7900$ kg/m³) se hunde en agua ($\\rho = 1000$ kg/m³) pero flota en mercurio ($\\rho \\approx 13600$ kg/m³) porque $\\rho_{Fe} < \\rho_{Hg}$.",
            en: "True. Iron ($\\rho \\approx 7900$ kg/m³) sinks in water ($\\rho = 1000$ kg/m³) but floats in mercury ($\\rho \\approx 13600$ kg/m³) because $\\rho_{Fe} < \\rho_{Hg}$.",
          },
          difficulty: 3,
        },
        {
          id: "fis_flu_20",
          type: "multiple-choice",
          prompt: {
            es: "La viscosidad de un fluido es:",
            en: "The viscosity of a fluid is:",
          },
          options: [
            {
              es: "Su resistencia al flujo (fricción interna)",
              en: "Its resistance to flow (internal friction)",
            },
            { es: "Su densidad", en: "Its density" },
            { es: "Su temperatura", en: "Its temperature" },
            { es: "Su presión", en: "Its pressure" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La viscosidad mide la resistencia interna al flujo. La miel es muy viscosa (fluye lento), el agua tiene baja viscosidad.",
            en: "Viscosity measures internal resistance to flow. Honey is very viscous (flows slow), water has low viscosity.",
          },
          difficulty: 1,
        },
        {
          id: "fis_flu_21",
          type: "multiple-choice",
          prompt: {
            es: "Un iceberg flota porque:",
            en: "An iceberg floats because:",
          },
          options: [
            {
              es: "El hielo es menos denso que el agua líquida",
              en: "Ice is less dense than liquid water",
            },
            {
              es: "El hielo es más denso que el agua líquida",
              en: "Ice is more dense than liquid water",
            },
            {
              es: "No hay gravedad en el polo",
              en: "There is no gravity at the pole",
            },
            { es: "El empuje es cero", en: "Buoyancy is zero" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El hielo ($\\rho \\approx 920$ kg/m³) es menos denso que el agua líquida ($\\rho = 1000$ kg/m³), por eso flota. Aproximadamente 10% queda emergido.",
            en: "Ice ($\\rho \\approx 920$ kg/m³) is less dense than liquid water ($\\rho = 1000$ kg/m³), that's why it floats. About 10% remains above water.",
          },
          difficulty: 2,
        },
        {
          id: "fis_flu_22",
          type: "order-steps",
          prompt: {
            es: "Ordena los siguientes fluidos de menor a mayor densidad:",
            en: "Order the following fluids from lowest to highest density:",
          },
          options: [
            { es: "Aire", en: "Air" },
            { es: "Aceite", en: "Oil" },
            { es: "Agua", en: "Water" },
            { es: "Mercurio", en: "Mercury" },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "Densidades aproximadas: aire (1.2 kg/m³) < aceite (900 kg/m³) < agua (1000 kg/m³) < mercurio (13600 kg/m³).",
            en: "Approximate densities: air (1.2 kg/m³) < oil (900 kg/m³) < water (1000 kg/m³) < mercury (13600 kg/m³).",
          },
          difficulty: 2,
        },
        {
          id: "fis_flu_23",
          type: "fill-blank",
          prompt: {
            es: "El _______ hidrostático es la presión ejercida por el peso de un fluido en reposo.",
            en: "Hydrostatic _______ is the pressure exerted by the weight of a fluid at rest.",
          },
          correctAnswer: "empuje",
          explanation: {
            es: "El empuje hidrostático o presión hidrostática ($P = \\rho gh$) aumenta con la profundidad.",
            en: "Hydrostatic buoyancy or hydrostatic pressure ($P = \\rho gh$) increases with depth.",
          },
          difficulty: 1,
        },
        {
          id: "fis_flu_24",
          type: "multiple-choice",
          prompt: {
            es: "En una manguera de jardín, si tapas parcialmente la salida con el dedo:",
            en: "In a garden hose, if you partially cover the outlet with your finger:",
          },
          options: [
            {
              es: "El agua sale más rápido (mayor velocidad)",
              en: "Water comes out faster (higher velocity)",
            },
            { es: "El agua sale más lento", en: "Water comes out slower" },
            { es: "No cambia la velocidad", en: "Velocity doesn't change" },
            { es: "Se detiene completamente", en: "It stops completely" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Al reducir el área de salida, la ecuación de continuidad ($Av = constante$) indica que la velocidad debe aumentar para mantener el caudal.",
            en: "By reducing the outlet area, the continuity equation ($Av = constant$) indicates velocity must increase to maintain flow rate.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
