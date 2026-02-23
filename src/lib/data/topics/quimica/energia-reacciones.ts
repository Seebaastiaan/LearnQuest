import type { Topic } from "@/lib/types";

export const energiaReaccionesTopic: Topic = {
  id: "energia-reacciones",
  slug: "energia-reacciones",
  title: {
    es: "Energía y Reacciones Químicas",
    en: "Energy and Chemical Reactions",
  },
  description: {
    es: "Termoquímica, espontaneidad, equilibrio y cinética",
    en: "Thermochemistry, spontaneity, equilibrium and kinetics",
  },
  icon: "Zap",
  color: "yellow",
  bgGradient: "bg-linear-to-br from-yellow-500 to-amber-600",
  prerequisites: ["temas-basicos"],
  order: 5,
  lessons: [
    {
      id: "energia-termoquimica",
      topicId: "energia-reacciones",
      order: 1,
      title: {
        es: "Termoquímica",
        en: "Thermochemistry",
      },
      description: {
        es: "Energía en reacciones, entalpía y calorimetría",
        en: "Energy in reactions, enthalpy and calorimetry",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "qui_er_01",
          type: "multiple-choice",
          prompt: {
            es: "La termoquímica estudia:",
            en: "Thermochemistry studies:",
          },
          options: [
            {
              es: "Los cambios de energía (calor) en las reacciones químicas",
              en: "Energy (heat) changes in chemical reactions",
            },
            { es: "Solo la temperatura ambiente", en: "Only room temperature" },
            { es: "La velocidad de las reacciones", en: "Reaction speed" },
            { es: "Solo gases ideales", en: "Only ideal gases" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Termoquímica: rama que estudia intercambios de calor en reacciones químicas. Analiza si reacciones absorben (endotérmicas) o liberan (exotérmicas) energía.",
            en: "Thermochemistry: branch studying heat exchanges in chemical reactions. Analyzes if reactions absorb (endothermic) or release (exothermic) energy.",
          },
          difficulty: 1,
        },
        {
          id: "qui_er_02",
          type: "multiple-choice",
          prompt: {
            es: "Una reacción exotérmica:",
            en: "An exothermic reaction:",
          },
          options: [
            {
              es: "Libera energía al entorno ($\\Delta H < 0$)",
              en: "Releases energy to surroundings ($\\Delta H < 0$)",
            },
            {
              es: "Absorbe energía del entorno ($\\Delta H > 0$)",
              en: "Absorbs energy from surroundings ($\\Delta H > 0$)",
            },
            { es: "No involucra energía", en: "Doesn't involve energy" },
            {
              es: "Solo ocurre a altas temperaturas",
              en: "Only occurs at high temperatures",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Exotérmica: libera calor (ΔH < 0), productos tienen menor energía que reactivos. Ejemplos: combustión, formación de enlaces, respiración celular. El entorno se calienta.",
            en: "Exothermic: releases heat (ΔH < 0), products have less energy than reactants. Examples: combustion, bond formation, cellular respiration. Surroundings warm up.",
          },
          difficulty: 1,
        },
        {
          id: "qui_er_03",
          type: "multiple-choice",
          prompt: {
            es: "Una reacción endotérmica:",
            en: "An endothermic reaction:",
          },
          options: [
            {
              es: "Absorbe energía del entorno ($\\Delta H > 0$)",
              en: "Absorbs energy from surroundings ($\\Delta H > 0$)",
            },
            {
              es: "Libera energía ($\\Delta H < 0$)",
              en: "Releases energy ($\\Delta H < 0$)",
            },
            { es: "No requiere energía", en: "Doesn't require energy" },
            { es: "Siempre es espontánea", en: "Is always spontaneous" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Endotérmica: absorbe calor (ΔH > 0), productos tienen mayor energía que reactivos. Ejemplos: fotosíntesis, evaporación, descomposición térmica. El entorno se enfría.",
            en: "Endothermic: absorbs heat (ΔH > 0), products have more energy than reactants. Examples: photosynthesis, evaporation, thermal decomposition. Surroundings cool down.",
          },
          difficulty: 1,
        },
        {
          id: "qui_er_04",
          type: "true-false",
          prompt: {
            es: "La entalpía ($H$) es una función de estado que representa el contenido energético de un sistema a presión constante.",
            en: "Enthalpy ($H$) is a state function representing the energy content of a system at constant pressure.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Entalpía H: contenido energético total. ΔH (cambio de entalpía) = H(productos) − H(reactivos). Función de estado: depende solo del estado inicial/final, no del camino.",
            en: "True. Enthalpy H: total energy content. ΔH (enthalpy change) = H(products) − H(reactants). State function: depends only on initial/final state, not path.",
          },
          difficulty: 2,
        },
        {
          id: "qui_er_05",
          type: "multiple-choice",
          prompt: {
            es: "La entalpía de formación estándar ($\\Delta H_f^\\circ$) es:",
            en: "Standard enthalpy of formation ($\\Delta H_f^\\circ$) is:",
          },
          options: [
            {
              es: "Cambio de entalpía al formar 1 mol de compuesto desde elementos en estado estándar",
              en: "Enthalpy change forming 1 mol of compound from elements in standard state",
            },
            {
              es: "Energía total de cualquier sustancia",
              en: "Total energy of any substance",
            },
            { es: "Siempre es cero", en: "Is always zero" },
            { es: "Solo se aplica a gases", en: "Only applies to gases" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "ΔH°f: calor al formar 1 mol de sustancia desde elementos en estado estándar (25°C, 1 atm). Por convención: ΔH°f de elementos puros = 0. Útil para calcular ΔH°reacción.",
            en: "ΔH°f: heat forming 1 mol of substance from elements in standard state (25°C, 1 atm). By convention: ΔH°f of pure elements = 0. Useful for calculating ΔH°reaction.",
          },
          difficulty: 2,
        },
        {
          id: "qui_er_06",
          type: "multiple-choice",
          prompt: {
            es: "La Ley de Hess establece que:",
            en: "Hess's Law states that:",
          },
          options: [
            {
              es: "El $\\Delta H$ de una reacción es independiente del camino seguido",
              en: "The $\\Delta H$ of a reaction is independent of the path followed",
            },
            {
              es: "Todas las reacciones son exotérmicas",
              en: "All reactions are exothermic",
            },
            {
              es: "La energía se crea en reacciones",
              en: "Energy is created in reactions",
            },
            { es: "Solo aplica a gases", en: "Only applies to gases" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Ley de Hess: ΔH total = suma de ΔH de pasos intermedios. Como H es función de estado, ΔH depende solo del estado inicial/final. Permite calcular ΔH de reacciones difíciles de medir.",
            en: "Hess's Law: total ΔH = sum of ΔH of intermediate steps. Since H is state function, ΔH depends only on initial/final state. Allows calculating ΔH of hard-to-measure reactions.",
          },
          difficulty: 2,
        },
        {
          id: "qui_er_07",
          type: "fill-blank",
          prompt: {
            es: "La ecuación $Q = mc\\Delta T$ se usa en _______ para calcular el calor absorbido o liberado.",
            en: "The equation $Q = mc\\Delta T$ is used in _______ to calculate heat absorbed or released.",
          },
          correctAnswer: "calorimetría",
          explanation: {
            es: "Calorimetría: técnica para medir calor en reacciones. Q = m·c·ΔT, donde Q=calor, m=masa, c=calor específico, ΔT=cambio temperatura. Se usa calorímetro (bomba o café).",
            en: "Calorimetry: technique to measure heat in reactions. Q = m·c·ΔT, where Q=heat, m=mass, c=specific heat, ΔT=temperature change. Uses calorimeter (bomb or coffee cup).",
          },
          difficulty: 2,
        },
        {
          id: "qui_er_08",
          type: "multiple-choice",
          prompt: {
            es: "Si se queman 10 g de metano ($CH_4$) liberando 500 kJ, la reacción es:",
            en: "If 10 g of methane ($CH_4$) are burned releasing 500 kJ, the reaction is:",
          },
          options: [
            {
              es: "Exotérmica (libera energía)",
              en: "Exothermic (releases energy)",
            },
            {
              es: "Endotérmica (absorbe energía)",
              en: "Endothermic (absorbs energy)",
            },
            { es: "No hay cambio de energía", en: "No energy change" },
            { es: "Reversible", en: "Reversible" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Combustión CH₄ + 2O₂ → CO₂ + 2H₂O libera ~890 kJ/mol. Liberar 500 kJ → exotérmica. Las combustiones siempre son exotérmicas (forman enlaces fuertes CO₂, H₂O).",
            en: "Combustion CH₄ + 2O₂ → CO₂ + 2H₂O releases ~890 kJ/mol. Releasing 500 kJ → exothermic. Combustions always exothermic (form strong CO₂, H₂O bonds).",
          },
          difficulty: 1,
        },
      ],
    },
    {
      id: "energia-espontaneidad-entropia",
      topicId: "energia-reacciones",
      order: 2,
      title: {
        es: "Espontaneidad y Entropía",
        en: "Spontaneity and Entropy",
      },
      description: {
        es: "Energía libre de Gibbs y dirección de reacciones",
        en: "Gibbs free energy and reaction direction",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "qui_er_09",
          type: "multiple-choice",
          prompt: {
            es: "La entropía ($S$) es una medida de:",
            en: "Entropy ($S$) is a measure of:",
          },
          options: [
            {
              es: "El desorden o aleatoriedad de un sistema",
              en: "Disorder or randomness of a system",
            },
            { es: "La temperatura absoluta", en: "Absolute temperature" },
            { es: "La masa molecular", en: "Molecular mass" },
            { es: "La presión del gas", en: "Gas pressure" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Entropía S: medida de desorden/dispersión energética. Mayor desorden → mayor S. Estados: S(gas) > S(líquido) > S(sólido). Segunda ley: ΔS(universo) ≥ 0 en procesos espontáneos.",
            en: "Entropy S: measure of disorder/energy dispersion. Greater disorder → greater S. States: S(gas) > S(liquid) > S(solid). Second law: ΔS(universe) ≥ 0 in spontaneous processes.",
          },
          difficulty: 2,
        },
        {
          id: "qui_er_10",
          type: "true-false",
          prompt: {
            es: "La Segunda Ley de la Termodinámica establece que la entropía del universo siempre aumenta en procesos espontáneos.",
            en: "The Second Law of Thermodynamics states that the entropy of the universe always increases in spontaneous processes.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Segunda Ley: ΔS(universo) = ΔS(sistema) + ΔS(entorno) > 0 para procesos espontáneos. Equilibrio: ΔS(univ) = 0. Procesos naturales aumentan desorden total.",
            en: "True. Second Law: ΔS(universe) = ΔS(system) + ΔS(surroundings) > 0 for spontaneous processes. Equilibrium: ΔS(univ) = 0. Natural processes increase total disorder.",
          },
          difficulty: 2,
        },
        {
          id: "qui_er_11",
          type: "multiple-choice",
          prompt: {
            es: "La energía libre de Gibbs ($G$) se calcula como:",
            en: "Gibbs free energy ($G$) is calculated as:",
          },
          options: [
            {
              es: "$\\Delta G = \\Delta H - T\\Delta S$",
              en: "$\\Delta G = \\Delta H - T\\Delta S$",
            },
            {
              es: "$\\Delta G = \\Delta H + T\\Delta S$",
              en: "$\\Delta G = \\Delta H + T\\Delta S$",
            },
            {
              es: "$\\Delta G = mc\\Delta T$",
              en: "$\\Delta G = mc\\Delta T$",
            },
            { es: "$\\Delta G = PV$", en: "$\\Delta G = PV$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Ecuación de Gibbs: ΔG = ΔH − TΔS. ΔG combina dos factores: entalpía (energía) y entropía (desorden), considerando temperatura T (en Kelvin).",
            en: "Gibbs equation: ΔG = ΔH − TΔS. ΔG combines two factors: enthalpy (energy) and entropy (disorder), considering temperature T (in Kelvin).",
          },
          difficulty: 2,
        },
        {
          id: "qui_er_12",
          type: "multiple-choice",
          prompt: {
            es: "Una reacción es espontánea cuando:",
            en: "A reaction is spontaneous when:",
          },
          options: [
            {
              es: "$\\Delta G < 0$ (negativo)",
              en: "$\\Delta G < 0$ (negative)",
            },
            {
              es: "$\\Delta G > 0$ (positivo)",
              en: "$\\Delta G > 0$ (positive)",
            },
            { es: "$\\Delta G = 0$", en: "$\\Delta G = 0$" },
            { es: "$\\Delta H = 0$", en: "$\\Delta H = 0$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Criterio de espontaneidad: ΔG < 0 → espontánea (ocurre sola). ΔG > 0 → no espontánea (requiere energía externa). ΔG = 0 → equilibrio. ΔG determina dirección termodinámica.",
            en: "Spontaneity criterion: ΔG < 0 → spontaneous (occurs alone). ΔG > 0 → non-spontaneous (requires external energy). ΔG = 0 → equilibrium. ΔG determines thermodynamic direction.",
          },
          difficulty: 2,
        },
        {
          id: "qui_er_13",
          type: "multiple-choice",
          prompt: {
            es: "Si $\\Delta H < 0$ (exotérmica) y $\\Delta S > 0$ (aumenta desorden), la reacción:",
            en: "If $\\Delta H < 0$ (exothermic) and $\\Delta S > 0$ (increases disorder), the reaction:",
          },
          options: [
            {
              es: "Siempre es espontánea ($\\Delta G < 0$ a cualquier T)",
              en: "Is always spontaneous ($\\Delta G < 0$ at any T)",
            },
            { es: "Nunca es espontánea", en: "Is never spontaneous" },
            {
              es: "Solo espontánea a T alta",
              en: "Only spontaneous at high T",
            },
            { es: "Solo espontánea a T baja", en: "Only spontaneous at low T" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "ΔG = ΔH − TΔS. Si ΔH < 0 y ΔS > 0: ΔG = (negativo) − T(positivo) = siempre negativo → espontánea a cualquier T. Caso favorable termodinámicamente.",
            en: "ΔG = ΔH − TΔS. If ΔH < 0 and ΔS > 0: ΔG = (negative) − T(positive) = always negative → spontaneous at any T. Thermodynamically favorable case.",
          },
          difficulty: 3,
        },
        {
          id: "qui_er_14",
          type: "fill-blank",
          prompt: {
            es: "En el proceso de fusión del hielo, $\\Delta H > 0$ (endotérmico) pero es espontáneo a T > 0°C porque el término $T\\Delta S$ domina, haciendo $\\Delta G$ _______.",
            en: "In ice melting process, $\\Delta H > 0$ (endothermic) but is spontaneous at T > 0°C because the $T\\Delta S$ term dominates, making $\\Delta G$ _______.",
          },
          correctAnswer: "negativo",
          explanation: {
            es: "Fusión hielo: ΔH > 0 (absorbe calor), ΔS > 0 (sólido→líquido aumenta desorden). A T > 273 K: TΔS > ΔH → ΔG < 0 → espontánea. A T < 273 K: ΔG > 0 → no espontánea.",
            en: "Ice melting: ΔH > 0 (absorbs heat), ΔS > 0 (solid→liquid increases disorder). At T > 273 K: TΔS > ΔH → ΔG < 0 → spontaneous. At T < 273 K: ΔG > 0 → non-spontaneous.",
          },
          difficulty: 3,
        },
        {
          id: "qui_er_15",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál proceso tiene aumento de entropía ($\\Delta S > 0$)?",
            en: "Which process has entropy increase ($\\Delta S > 0$)?",
          },
          options: [
            {
              es: "Evaporación de agua ($H_2O_{(l)} \\rightarrow H_2O_{(g)}$)",
              en: "Water evaporation ($H_2O_{(l)} \\rightarrow H_2O_{(g)}$)",
            },
            { es: "Congelación de agua", en: "Water freezing" },
            { es: "Formación de cristales", en: "Crystal formation" },
            { es: "Compresión de un gas", en: "Gas compression" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "ΔS > 0: aumenta desorden. Líquido→gas (evaporación), sólido→líquido (fusión), disolución sal, expansión gas. ΔS < 0: disminuye desorden (congelación, cristalización, compresión).",
            en: "ΔS > 0: increases disorder. Liquid→gas (evaporation), solid→liquid (melting), salt dissolution, gas expansion. ΔS < 0: decreases disorder (freezing, crystallization, compression).",
          },
          difficulty: 2,
        },
        {
          id: "qui_er_16",
          type: "multiple-choice",
          prompt: {
            es: "La energía libre estándar de formación ($\\Delta G_f^\\circ$) de un elemento puro en su estado estándar es:",
            en: "The standard free energy of formation ($\\Delta G_f^\\circ$) of a pure element in its standard state is:",
          },
          options: [
            { es: "0 (cero)", en: "0 (zero)" },
            { es: "Siempre positiva", en: "Always positive" },
            { es: "Siempre negativa", en: "Always negative" },
            { es: "Depende del elemento", en: "Depends on element" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Por convención: ΔG°f de elementos en estado estándar = 0. Ejemplos: O₂(g), H₂(g), C(grafito) todos tienen ΔG°f = 0 a 25°C, 1 atm. Facilita cálculos.",
            en: "By convention: ΔG°f of elements in standard state = 0. Examples: O₂(g), H₂(g), C(graphite) all have ΔG°f = 0 at 25°C, 1 atm. Facilitates calculations.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "energia-equilibrio-cinetica",
      topicId: "energia-reacciones",
      order: 3,
      title: {
        es: "Equilibrio Químico y Cinética",
        en: "Chemical Equilibrium and Kinetics",
      },
      description: {
        es: "Le Chatelier, velocidad de reacción y catalizadores",
        en: "Le Chatelier, reaction rate and catalysts",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "qui_er_17",
          type: "multiple-choice",
          prompt: {
            es: "El equilibrio químico se alcanza cuando:",
            en: "Chemical equilibrium is reached when:",
          },
          options: [
            {
              es: "Las velocidades de reacción directa e inversa son iguales",
              en: "Forward and reverse reaction rates are equal",
            },
            {
              es: "Se consumen todos los reactivos",
              en: "All reactants are consumed",
            },
            { es: "La temperatura es cero", en: "Temperature is zero" },
            { es: "No hay productos", en: "There are no products" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Equilibrio dinámico: v(directa) = v(inversa), concentraciones constantes (no cero). Reacción reversible: A + B ⇌ C + D. No significa [reactivos] = [productos], depende de Keq.",
            en: "Dynamic equilibrium: v(forward) = v(reverse), constant concentrations (not zero). Reversible reaction: A + B ⇌ C + D. Doesn't mean [reactants] = [products], depends on Keq.",
          },
          difficulty: 2,
        },
        {
          id: "qui_er_18",
          type: "multiple-choice",
          prompt: {
            es: "La constante de equilibrio ($K_{eq}$) para la reacción $aA + bB \\rightleftharpoons cC + dD$ es:",
            en: "The equilibrium constant ($K_{eq}$) for reaction $aA + bB \\rightleftharpoons cC + dD$ is:",
          },
          options: [
            {
              es: "$K_{eq} = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$",
              en: "$K_{eq} = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$",
            },
            { es: "$K_{eq} = [A] + [B]$", en: "$K_{eq} = [A] + [B]$" },
            {
              es: "$K_{eq} = \\frac{[A][B]}{[C][D]}$",
              en: "$K_{eq} = \\frac{[A][B]}{[C][D]}$",
            },
            { es: "Siempre es 1", en: "Is always 1" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Keq = [productos]/(reactivos), con exponentes = coeficientes estequiométricos. Keq >> 1: favorece productos. Keq << 1: favorece reactivos. Keq ≈ 1: cantidades comparables. T dependiente.",
            en: "Keq = [products]/(reactants), with exponents = stoichiometric coefficients. Keq >> 1: favors products. Keq << 1: favors reactants. Keq ≈ 1: comparable amounts. T dependent.",
          },
          difficulty: 2,
        },
        {
          id: "qui_er_19",
          type: "true-false",
          prompt: {
            es: "El Principio de Le Chatelier establece que si un sistema en equilibrio es perturbado, el sistema se ajusta para contrarrestar la perturbación.",
            en: "Le Chatelier's Principle states that if a system at equilibrium is disturbed, the system adjusts to counteract the disturbance.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Le Chatelier: sistema en equilibrio responde a cambios (concentración, T, P) desplazándose para minimizar el cambio. Ej: agregar reactivo → desplaza hacia productos.",
            en: "True. Le Chatelier: system at equilibrium responds to changes (concentration, T, P) by shifting to minimize change. E.g.: add reactant → shifts toward products.",
          },
          difficulty: 1,
        },
        {
          id: "qui_er_20",
          type: "multiple-choice",
          prompt: {
            es: "Si se aumenta la concentración de reactivos en un equilibrio, según Le Chatelier:",
            en: "If reactant concentration increases in equilibrium, according to Le Chatelier:",
          },
          options: [
            {
              es: "El equilibrio se desplaza hacia productos",
              en: "Equilibrium shifts toward products",
            },
            {
              es: "El equilibrio se desplaza hacia reactivos",
              en: "Equilibrium shifts toward reactants",
            },
            { es: "No cambia nada", en: "Nothing changes" },
            { es: "La reacción se detiene", en: "Reaction stops" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "↑[reactivos] → sistema compensa consumiendo exceso → desplaza hacia productos. ↑[productos] → desplaza hacia reactivos. ↓[X] → desplaza para formar más X.",
            en: "↑[reactants] → system compensates consuming excess → shifts toward products. ↑[products] → shifts toward reactants. ↓[X] → shifts to form more X.",
          },
          difficulty: 2,
        },
        {
          id: "qui_er_21",
          type: "multiple-choice",
          prompt: {
            es: "Para una reacción exotérmica ($\\Delta H < 0$) en equilibrio, aumentar la temperatura:",
            en: "For an exothermic reaction ($\\Delta H < 0$) at equilibrium, increasing temperature:",
          },
          options: [
            {
              es: "Desplaza el equilibrio hacia reactivos (izquierda)",
              en: "Shifts equilibrium toward reactants (left)",
            },
            {
              es: "Desplaza el equilibrio hacia productos (derecha)",
              en: "Shifts equilibrium toward products (right)",
            },
            { es: "No afecta el equilibrio", en: "Doesn't affect equilibrium" },
            { es: "Detiene la reacción", en: "Stops reaction" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Exotérmica: libera calor (productos + calor). ↑T → sistema absorbe calor → favorece dirección endotérmica (inversa) → desplaza hacia reactivos. Endotérmica: ↑T favorece productos.",
            en: "Exothermic: releases heat (products + heat). ↑T → system absorbs heat → favors endothermic direction (reverse) → shifts toward reactants. Endothermic: ↑T favors products.",
          },
          difficulty: 2,
        },
        {
          id: "qui_er_22",
          type: "fill-blank",
          prompt: {
            es: "Un _______ es una sustancia que aumenta la velocidad de reacción sin consumirse, disminuyendo la energía de activación.",
            en: "A _______ is a substance that increases reaction rate without being consumed, lowering activation energy.",
          },
          correctAnswer: "catalizador",
          explanation: {
            es: "Catalizador: acelera reacción (↓Ea energía de activación), no se consume, no cambia ΔH ni Keq. Solo afecta velocidad, no equilibrio. Homogéneo (misma fase) o heterogéneo (diferente fase).",
            en: "Catalyst: speeds reaction (↓Ea activation energy), not consumed, doesn't change ΔH or Keq. Only affects rate, not equilibrium. Homogeneous (same phase) or heterogeneous (different phase).",
          },
          difficulty: 1,
        },
        {
          id: "qui_er_23",
          type: "multiple-choice",
          prompt: {
            es: "La velocidad de una reacción química depende de:",
            en: "Chemical reaction rate depends on:",
          },
          options: [
            {
              es: "Concentración, temperatura, catalizadores, superficie de contacto",
              en: "Concentration, temperature, catalysts, contact surface",
            },
            { es: "Solo del color", en: "Only on color" },
            {
              es: "Solo de la presión atmosférica",
              en: "Only on atmospheric pressure",
            },
            { es: "No depende de nada", en: "Doesn't depend on anything" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Factores que ↑ velocidad: ↑concentración (más colisiones), ↑temperatura (más energía cinética), catalizadores (↓Ea), mayor superficie (↑colisiones). Ley velocidad: v = k[A]^m[B]^n.",
            en: "Factors that ↑ rate: ↑concentration (more collisions), ↑temperature (more kinetic energy), catalysts (↓Ea), greater surface (↑collisions). Rate law: v = k[A]^m[B]^n.",
          },
          difficulty: 1,
        },
        {
          id: "qui_er_24",
          type: "multiple-choice",
          prompt: {
            es: "Las enzimas son catalizadores biológicos que:",
            en: "Enzymes are biological catalysts that:",
          },
          options: [
            {
              es: "Son específicas y funcionan a temperatura/pH óptimos (37°C, pH 7)",
              en: "Are specific and work at optimal temperature/pH (37°C, pH 7)",
            },
            {
              es: "Funcionan a cualquier condición",
              en: "Work at any condition",
            },
            {
              es: "Se consumen en cada reacción",
              en: "Are consumed in each reaction",
            },
            { es: "Solo existen en plantas", en: "Only exist in plants" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Enzimas: catalizadores proteicos, específicas (sustrato-sitio activo). Condiciones óptimas: T ≈ 37°C, pH específico. Factores (T alta, pH extremo) → desnaturalización → pierden función.",
            en: "Enzymes: protein catalysts, specific (substrate-active site). Optimal conditions: T ≈ 37°C, specific pH. Factors (high T, extreme pH) → denaturation → lose function.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
