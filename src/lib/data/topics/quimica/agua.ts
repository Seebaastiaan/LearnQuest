import type { Topic } from "@/lib/types";

export const aguaTopic: Topic = {
  id: "agua",
  slug: "agua",
  title: {
    es: "Agua",
    en: "Water",
  },
  description: {
    es: "Propiedades, química y uso responsable del agua",
    en: "Properties, chemistry and responsible use of water",
  },
  icon: "Droplets",
  color: "rose",
  bgGradient: "bg-linear-to-br from-rose-500 to-pink-600",
  prerequisites: ["temas-basicos"],
  order: 2,
  lessons: [
    {
      id: "agua-composicion-propiedades",
      topicId: "agua",
      order: 1,
      title: {
        es: "Composición y Propiedades Físicas",
        en: "Composition and Physical Properties",
      },
      description: {
        es: "Estructura molecular y características del agua",
        en: "Molecular structure and water characteristics",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "qui_ag_01",
          type: "multiple-choice",
          prompt: {
            es: "La fórmula química del agua es:",
            en: "The chemical formula of water is:",
          },
          options: [
            {
              es: "$H_2O$ (dos hidrógenos, un oxígeno)",
              en: "$H_2O$ (two hydrogens, one oxygen)",
            },
            { es: "$H_2O_2$ (peróxido)", en: "$H_2O_2$ (peroxide)" },
            { es: "$OH$ (radical hidroxilo)", en: "$OH$ (hydroxyl radical)" },
            { es: "$HO_2$ (hidroperóxido)", en: "$HO_2$ (hydroperoxide)" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El agua pura es H₂O: 2 átomos de hidrógeno unidos a 1 átomo de oxígeno mediante enlaces covalentes polares.",
            en: "Pure water is H₂O: 2 hydrogen atoms bonded to 1 oxygen atom through polar covalent bonds.",
          },
          difficulty: 1,
        },
        {
          id: "qui_ag_02",
          type: "multiple-choice",
          prompt: {
            es: "La geometría molecular del agua es:",
            en: "The molecular geometry of water is:",
          },
          options: [
            { es: "Angular (104.5°)", en: "Bent (104.5°)" },
            { es: "Lineal (180°)", en: "Linear (180°)" },
            { es: "Trigonal plana (120°)", en: "Trigonal planar (120°)" },
            { es: "Tetraédrica (109.5°)", en: "Tetrahedral (109.5°)" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La molécula de H₂O tiene forma angular con ángulo H-O-H ≈ 104.5° debido a los pares de electrones no enlazantes del oxígeno.",
            en: "H₂O molecule has bent shape with H-O-H angle ≈ 104.5° due to non-bonding electron pairs on oxygen.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ag_03",
          type: "multiple-choice",
          prompt: {
            es: "El punto de ebullición del agua a presión normal (1 atm) es:",
            en: "The boiling point of water at normal pressure (1 atm) is:",
          },
          options: [
            { es: "100 °C", en: "100 °C" },
            { es: "0 °C", en: "0 °C" },
            { es: "50 °C", en: "50 °C" },
            { es: "212 °C", en: "212 °C" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "A 1 atm de presión: punto de ebullición = 100 °C (373 K), punto de fusión = 0 °C (273 K). Estos valores definen la escala Celsius.",
            en: "At 1 atm pressure: boiling point = 100 °C (373 K), melting point = 0 °C (273 K). These values define Celsius scale.",
          },
          difficulty: 1,
        },
        {
          id: "qui_ag_04",
          type: "true-false",
          prompt: {
            es: "El agua tiene una capacidad calorífica específica muy alta (4.18 J/g·°C), lo que le permite absorber mucho calor sin cambiar mucho de temperatura.",
            en: "Water has a very high specific heat capacity (4.18 J/g·°C), allowing it to absorb much heat without changing temperature much.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Alta capacidad calorífica del agua estabiliza temperaturas en organismos y clima. Útil como termorregulador.",
            en: "True. High heat capacity of water stabilizes temperatures in organisms and climate. Useful as thermoregulator.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ag_05",
          type: "multiple-choice",
          prompt: {
            es: "¿Por qué el hielo flota en el agua líquida?",
            en: "Why does ice float on liquid water?",
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
            { es: "El hielo no tiene masa", en: "Ice has no mass" },
            {
              es: "Por la presión atmosférica",
              en: "Because of atmospheric pressure",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Al congelarse, las moléculas de H₂O forman una estructura cristalina hexagonal con más espacio → menor densidad (0.92 g/cm³) que agua líquida (1.0 g/cm³).",
            en: "When freezing, H₂O molecules form hexagonal crystalline structure with more space → lower density (0.92 g/cm³) than liquid water (1.0 g/cm³).",
          },
          difficulty: 2,
        },
        {
          id: "qui_ag_06",
          type: "fill-blank",
          prompt: {
            es: "Los enlaces _______ son interacciones entre moléculas de agua que explican sus propiedades únicas.",
            en: "_______ bonds are interactions between water molecules that explain its unique properties.",
          },
          correctAnswer: "puente de hidrógeno",
          explanation: {
            es: "Puentes de hidrógeno: atracción entre H (δ+) de una molécula y O (δ−) de otra. Responsables de alto p.e., alta tensión superficial, capilaridad.",
            en: "Hydrogen bonds: attraction between H (δ+) of one molecule and O (δ−) of another. Responsible for high b.p., high surface tension, capillarity.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ag_07",
          type: "multiple-choice",
          prompt: {
            es: "La cohesión del agua se debe a:",
            en: "Water cohesion is due to:",
          },
          options: [
            {
              es: "Puentes de hidrógeno entre moléculas de agua",
              en: "Hydrogen bonds between water molecules",
            },
            { es: "Enlaces iónicos", en: "Ionic bonds" },
            { es: "Fuerzas de Van der Waals", en: "Van der Waals forces" },
            {
              es: "Enlaces covalentes entre moléculas",
              en: "Covalent bonds between molecules",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Cohesión: atracción entre moléculas del mismo tipo. Los puentes de H hacen que el agua tenga alta tensión superficial y suba por capilaridad.",
            en: "Cohesion: attraction between molecules of same type. H bonds make water have high surface tension and rise by capillarity.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ag_08",
          type: "multiple-choice",
          prompt: {
            es: "El agua en condiciones normales es:",
            en: "Water under normal conditions is:",
          },
          options: [
            {
              es: "Líquida, incolora, inodora e insípida",
              en: "Liquid, colorless, odorless and tasteless",
            },
            { es: "Gaseosa y azul", en: "Gaseous and blue" },
            { es: "Sólida y blanca", en: "Solid and white" },
            { es: "Líquida y salada", en: "Liquid and salty" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Agua pura a 1 atm y 25°C: estado líquido, incolora, sin olor ni sabor. Impurezas le dan color, olor o sabor (agua de mar es salada).",
            en: "Pure water at 1 atm and 25°C: liquid state, colorless, no smell or taste. Impurities give color, smell or taste (seawater is salty).",
          },
          difficulty: 1,
        },
      ],
    },
    {
      id: "agua-quimica-acidos-bases",
      topicId: "agua",
      order: 2,
      title: {
        es: "Propiedades Químicas, Ácidos y Bases",
        en: "Chemical Properties, Acids and Bases",
      },
      description: {
        es: "Enlace químico, disolvente universal y pH",
        en: "Chemical bonding, universal solvent and pH",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "qui_ag_09",
          type: "multiple-choice",
          prompt: {
            es: "El tipo de enlace en la molécula de agua (H₂O) es:",
            en: "The type of bond in the water molecule (H₂O) is:",
          },
          options: [
            { es: "Covalente polar", en: "Polar covalent" },
            { es: "Iónico", en: "Ionic" },
            { es: "Covalente no polar", en: "Nonpolar covalent" },
            { es: "Metálico", en: "Metallic" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Los enlaces O-H son covalentes (comparten electrones) pero polares: el oxígeno (más electronegativo) atrae más los electrones, creando dipolo (δ− en O, δ+ en H).",
            en: "O-H bonds are covalent (share electrons) but polar: oxygen (more electronegative) attracts electrons more, creating dipole (δ− on O, δ+ on H).",
          },
          difficulty: 1,
        },
        {
          id: "qui_ag_10",
          type: "true-false",
          prompt: {
            es: "El agua es llamada 'disolvente universal' porque puede disolver muchas sustancias polares e iónicas.",
            en: "Water is called 'universal solvent' because it can dissolve many polar and ionic substances.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. La polaridad del agua le permite disolver compuestos iónicos (NaCl) y polares (azúcar). No disuelve bien sustancias no polares (aceite).",
            en: "True. Water's polarity allows it to dissolve ionic compounds (NaCl) and polar (sugar). Doesn't dissolve nonpolar substances well (oil).",
          },
          difficulty: 1,
        },
        {
          id: "qui_ag_11",
          type: "multiple-choice",
          prompt: {
            es: "El pH del agua pura a 25°C es:",
            en: "The pH of pure water at 25°C is:",
          },
          options: [
            { es: "7 (neutro)", en: "7 (neutral)" },
            { es: "0 (muy ácido)", en: "0 (very acidic)" },
            { es: "14 (muy básico)", en: "14 (very basic)" },
            { es: "1 (ácido)", en: "1 (acidic)" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Agua pura: pH = 7 (neutra). [H⁺] = [OH⁻] = 10⁻⁷ M. pH < 7 (ácido), pH > 7 (básico). Escala pH: 0-14.",
            en: "Pure water: pH = 7 (neutral). [H⁺] = [OH⁻] = 10⁻⁷ M. pH < 7 (acidic), pH > 7 (basic). pH scale: 0-14.",
          },
          difficulty: 1,
        },
        {
          id: "qui_ag_12",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál solución tiene mayor acidez?",
            en: "Which solution has greater acidity?",
          },
          options: [
            { es: "pH = 2", en: "pH = 2" },
            { es: "pH = 7", en: "pH = 7" },
            { es: "pH = 10", en: "pH = 10" },
            { es: "pH = 14", en: "pH = 14" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Menor pH → mayor acidez (mayor [H⁺]). pH 2 es muy ácido (jugos gástricos). pH 7 neutro, pH 10-14 son básicos.",
            en: "Lower pH → greater acidity (higher [H⁺]). pH 2 is very acidic (gastric juices). pH 7 neutral, pH 10-14 are basic.",
          },
          difficulty: 1,
        },
        {
          id: "qui_ag_13",
          type: "multiple-choice",
          prompt: {
            es: "Un indicador ácido-base como el papel tornasol azul al contacto con un ácido:",
            en: "An acid-base indicator like blue litmus paper in contact with an acid:",
          },
          options: [
            { es: "Se torna rojo", en: "Turns red" },
            { es: "Se torna amarillo", en: "Turns yellow" },
            { es: "Se torna verde", en: "Turns green" },
            { es: "No cambia de color", en: "Doesn't change color" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Papel tornasol: azul + ácido → rojo. Rojo + base → azul. Fenolftaleína: incolora en ácido, rosada en base. Indicadores cambian color según pH.",
            en: "Litmus paper: blue + acid → red. Red + base → blue. Phenolphthalein: colorless in acid, pink in base. Indicators change color by pH.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ag_14",
          type: "fill-blank",
          prompt: {
            es: "Una reacción de neutralización ocurre cuando un ácido reacciona con una _______ formando sal y agua.",
            en: "A neutralization reaction occurs when an acid reacts with a _______ forming salt and water.",
          },
          correctAnswer: "base",
          explanation: {
            es: "Neutralización: Ácido + Base → Sal + Agua. Ejemplo: HCl + NaOH → NaCl + H₂O. Los H⁺ del ácido reaccionan con OH⁻ de la base.",
            en: "Neutralization: Acid + Base → Salt + Water. Example: HCl + NaOH → NaCl + H₂O. H⁺ from acid react with OH⁻ from base.",
          },
          difficulty: 1,
        },
        {
          id: "qui_ag_15",
          type: "multiple-choice",
          prompt: {
            es: "La autoionización del agua pura produce:",
            en: "Self-ionization of pure water produces:",
          },
          options: [
            {
              es: "$H_2O \\rightleftharpoons H^+ + OH^-$ (o $H_3O^+ + OH^-$)",
              en: "$H_2O \\rightleftharpoons H^+ + OH^-$ (or $H_3O^+ + OH^-$)",
            },
            {
              es: "$H_2O \\rightarrow H_2 + O_2$",
              en: "$H_2O \\rightarrow H_2 + O_2$",
            },
            {
              es: "$2H_2O \\rightarrow H_2O_2$",
              en: "$2H_2O \\rightarrow H_2O_2$",
            },
            { es: "No se ioniza", en: "Doesn't ionize" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Agua pura se autoioniza ligeramente: H₂O ⇌ H⁺ + OH⁻ (o 2H₂O ⇌ H₃O⁺ + OH⁻). Constante Kw = [H⁺][OH⁻] = 10⁻¹⁴ a 25°C.",
            en: "Pure water self-ionizes slightly: H₂O ⇌ H⁺ + OH⁻ (or 2H₂O ⇌ H₃O⁺ + OH⁻). Constant Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C.",
          },
          difficulty: 3,
        },
        {
          id: "qui_ag_16",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de las siguientes sustancias es más soluble en agua?",
            en: "Which of the following substances is most soluble in water?",
          },
          options: [
            { es: "NaCl (cloruro de sodio)", en: "NaCl (sodium chloride)" },
            { es: "Aceite vegetal", en: "Vegetable oil" },
            { es: "Gasolina", en: "Gasoline" },
            { es: "Cera", en: "Wax" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "'Lo semejante disuelve lo semejante': agua (polar) disuelve bien compuestos iónicos (NaCl) y polares. No disuelve bien no polares (aceite, gasolina).",
            en: "'Like dissolves like': water (polar) dissolves ionic compounds (NaCl) and polar substances well. Doesn't dissolve nonpolar (oil, gasoline) well.",
          },
          difficulty: 1,
        },
      ],
    },
    {
      id: "agua-soluciones-conservacion",
      topicId: "agua",
      order: 3,
      title: {
        es: "Soluciones, Contaminación y Conservación",
        en: "Solutions, Pollution and Conservation",
      },
      description: {
        es: "Concentraciones, problemas ambientales y uso responsable",
        en: "Concentrations, environmental problems and responsible use",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "qui_ag_17",
          type: "multiple-choice",
          prompt: {
            es: "Una solución es:",
            en: "A solution is:",
          },
          options: [
            {
              es: "Una mezcla homogénea de dos o más sustancias",
              en: "A homogeneous mixture of two or more substances",
            },
            { es: "Un compuesto puro", en: "A pure compound" },
            { es: "Una mezcla heterogénea", en: "A heterogeneous mixture" },
            { es: "Una suspensión", en: "A suspension" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Solución: mezcla homogénea. Soluto: sustancia disuelta (menor cantidad). Solvente: sustancia que disuelve (mayor cantidad). Ej: NaCl en agua.",
            en: "Solution: homogeneous mixture. Solute: dissolved substance (lesser amount). Solvent: dissolving substance (greater amount). E.g.: NaCl in water.",
          },
          difficulty: 1,
        },
        {
          id: "qui_ag_18",
          type: "multiple-choice",
          prompt: {
            es: "La concentración de una solución se puede expresar como:",
            en: "Solution concentration can be expressed as:",
          },
          options: [
            {
              es: "Porcentaje, molaridad, molalidad, ppm",
              en: "Percentage, molarity, molality, ppm",
            },
            { es: "Solo en gramos", en: "Only in grams" },
            { es: "Solo en litros", en: "Only in liters" },
            { es: "No se puede medir", en: "Cannot be measured" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Unidades de concentración: % masa, % volumen, molaridad M = mol/L, molalidad m = mol/kg, ppm (partes por millón), normalidad N.",
            en: "Concentration units: % mass, % volume, molarity M = mol/L, molality m = mol/kg, ppm (parts per million), normality N.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ag_19",
          type: "multiple-choice",
          prompt: {
            es: "Si disolvemos 10 g de sal en 90 g de agua, el porcentaje en masa de sal es:",
            en: "If we dissolve 10 g of salt in 90 g of water, the mass percentage of salt is:",
          },
          options: [
            { es: "10%", en: "10%" },
            { es: "11.1%", en: "11.1%" },
            { es: "90%", en: "90%" },
            { es: "9%", en: "9%" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "% masa = $\\frac{\\text{masa soluto}}{\\text{masa solución}} \\times 100 = \\frac{10}{10+90} \\times 100 = \\frac{10}{100} \\times 100 = 10\\%$",
            en: "% mass = $\\frac{\\text{solute mass}}{\\text{solution mass}} \\times 100 = \\frac{10}{10+90} \\times 100 = \\frac{10}{100} \\times 100 = 10\\%$",
          },
          difficulty: 2,
        },
        {
          id: "qui_ag_20",
          type: "true-false",
          prompt: {
            es: "Una solución saturada es aquella que no puede disolver más soluto a una temperatura dada.",
            en: "A saturated solution is one that cannot dissolve more solute at a given temperature.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Solución saturada: máxima cantidad de soluto disuelto. Sobresaturada: más soluto que lo normal (inestable). Insaturada: puede disolver más.",
            en: "True. Saturated solution: maximum amount of solute dissolved. Supersaturated: more solute than normal (unstable). Unsaturated: can dissolve more.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ag_21",
          type: "multiple-choice",
          prompt: {
            es: "Los principales contaminantes del agua incluyen:",
            en: "Main water pollutants include:",
          },
          options: [
            {
              es: "Aguas residuales, metales pesados, pesticidas, plásticos",
              en: "Wastewater, heavy metals, pesticides, plastics",
            },
            { es: "Solo oxígeno disuelto", en: "Only dissolved oxygen" },
            { es: "Solo minerales naturales", en: "Only natural minerals" },
            { es: "Peces y algas", en: "Fish and algae" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Contaminantes acuáticos: residuos industriales (Hg, Pb, Cd), agroquímicos (fertilizantes, pesticidas), plásticos (microplásticos), aguas negras, petróleo.",
            en: "Aquatic pollutants: industrial waste (Hg, Pb, Cd), agrochemicals (fertilizers, pesticides), plastics (microplastics), sewage, oil.",
          },
          difficulty: 1,
        },
        {
          id: "qui_ag_22",
          type: "multiple-choice",
          prompt: {
            es: "La eutrofización es:",
            en: "Eutrophication is:",
          },
          options: [
            {
              es: "Exceso de nutrientes que causa proliferación de algas y consumo de oxígeno",
              en: "Excess nutrients causing algae bloom and oxygen depletion",
            },
            { es: "Limpieza natural del agua", en: "Natural water cleaning" },
            { es: "Evaporación del agua", en: "Water evaporation" },
            { es: "Formación de hielo", en: "Ice formation" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Eutrofización: exceso de nutrientes (N, P) → crecimiento excesivo de algas → mueren → descomposición consume O₂ → muerte de fauna acuática.",
            en: "Eutrophication: excess nutrients (N, P) → excessive algae growth → die → decomposition consumes O₂ → aquatic fauna death.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ag_23",
          type: "fill-blank",
          prompt: {
            es: "El tratamiento de aguas residuales incluye procesos _______, secundarios (biológicos) y terciarios.",
            en: "Wastewater treatment includes _______, secondary (biological) and tertiary processes.",
          },
          correctAnswer: "primarios",
          explanation: {
            es: "Tratamiento: Primario (físico: sedimentación, filtración), Secundario (biológico: bacterias descomponen materia orgánica), Terciario (químico: desinfección, eliminación nutrientes).",
            en: "Treatment: Primary (physical: sedimentation, filtration), Secondary (biological: bacteria decompose organic matter), Tertiary (chemical: disinfection, nutrient removal).",
          },
          difficulty: 2,
        },
        {
          id: "qui_ag_24",
          type: "order-steps",
          prompt: {
            es: "Ordena las siguientes acciones de uso responsable del agua de mayor a menor impacto positivo:",
            en: "Order the following responsible water use actions from highest to lowest positive impact:",
          },
          options: [
            { es: "Reparar fugas", en: "Fix leaks" },
            {
              es: "Cerrar llave al cepillarse",
              en: "Turn off tap when brushing",
            },
            {
              es: "Reutilizar agua de lavadora",
              en: "Reuse washing machine water",
            },
            { es: "Duchas cortas", en: "Short showers" },
          ],
          correctAnswer: "0,2,3,1",
          explanation: {
            es: "Impacto: 1) Reparar fugas (ahorra miles de L/mes), 2) Reutilizar agua gris, 3) Duchas cortas vs baños, 4) Cerrar llave (ahorra algunos L). Todas importantes.",
            en: "Impact: 1) Fix leaks (saves thousands L/month), 2) Reuse gray water, 3) Short showers vs baths, 4) Turn off tap (saves some L). All important.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
