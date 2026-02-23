import type { Topic } from "@/lib/types";

export const temasBasicosTopic: Topic = {
  id: "temas-basicos",
  slug: "temas-basicos",
  title: {
    es: "Temas Básicos",
    en: "Basic Topics",
  },
  description: {
    es: "Sustancias, estructura atómica y fundamentos químicos",
    en: "Substances, atomic structure and chemical fundamentals",
  },
  icon: "Beaker",
  color: "pink",
  bgGradient: "bg-linear-to-br from-pink-500 to-rose-600",
  prerequisites: [],
  order: 1,
  lessons: [
    {
      id: "temas-basicos-sustancias-estructura",
      topicId: "temas-basicos",
      order: 1,
      title: {
        es: "Sustancias y Estructura Atómica",
        en: "Substances and Atomic Structure",
      },
      description: {
        es: "Clasificación de materia y modelos atómicos",
        en: "Classification of matter and atomic models",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "qui_tb_01",
          type: "multiple-choice",
          prompt: {
            es: "Una sustancia pura es:",
            en: "A pure substance is:",
          },
          options: [
            {
              es: "Un material con composición química definida y constante",
              en: "A material with defined and constant chemical composition",
            },
            { es: "Una mezcla homogénea", en: "A homogeneous mixture" },
            { es: "Una solución acuosa", en: "An aqueous solution" },
            {
              es: "Un compuesto soluble en agua",
              en: "A water-soluble compound",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Una sustancia pura tiene composición química fija y propiedades constantes. Puede ser elemento (H₂, O₂) o compuesto (H₂O, NaCl).",
            en: "A pure substance has fixed chemical composition and constant properties. Can be element (H₂, O₂) or compound (H₂O, NaCl).",
          },
          difficulty: 1,
        },
        {
          id: "qui_tb_02",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es la diferencia entre un elemento y un compuesto?",
            en: "What is the difference between an element and a compound?",
          },
          options: [
            {
              es: "El elemento está formado por un solo tipo de átomo, el compuesto por dos o más",
              en: "Element is formed by one type of atom, compound by two or more",
            },
            {
              es: "El elemento es líquido, el compuesto es sólido",
              en: "Element is liquid, compound is solid",
            },
            {
              es: "El elemento es natural, el compuesto es sintético",
              en: "Element is natural, compound is synthetic",
            },
            { es: "No hay diferencia", en: "There is no difference" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Elemento: sustancia pura con un solo tipo de átomo (O₂, Fe, Au). Compuesto: sustancia pura con dos o más tipos de átomos unidos químicamente (H₂O, CO₂).",
            en: "Element: pure substance with one type of atom (O₂, Fe, Au). Compound: pure substance with two or more types of atoms chemically bonded (H₂O, CO₂).",
          },
          difficulty: 1,
        },
        {
          id: "qui_tb_03",
          type: "true-false",
          prompt: {
            es: "El átomo es la unidad básica de la materia que conserva las propiedades de un elemento.",
            en: "The atom is the basic unit of matter that preserves the properties of an element.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. El átomo es la partícula más pequeña de un elemento que conserva sus propiedades químicas. Está formado por protones, neutrones y electrones.",
            en: "True. The atom is the smallest particle of an element that retains its chemical properties. It consists of protons, neutrons and electrons.",
          },
          difficulty: 1,
        },
        {
          id: "qui_tb_04",
          type: "multiple-choice",
          prompt: {
            es: "Las partículas subatómicas fundamentales del átomo son:",
            en: "The fundamental subatomic particles of the atom are:",
          },
          options: [
            {
              es: "Protones, neutrones y electrones",
              en: "Protons, neutrons and electrons",
            },
            {
              es: "Quarks, leptones y bosones",
              en: "Quarks, leptons and bosons",
            },
            {
              es: "Solo protones y electrones",
              en: "Only protons and electrons",
            },
            {
              es: "Núcleo y nube electrónica",
              en: "Nucleus and electron cloud",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Las tres partículas fundamentales son: protones (+, en núcleo), neutrones (0, en núcleo) y electrones (−, en orbitales). Masa: protón ≈ neutrón >> electrón.",
            en: "The three fundamental particles are: protons (+, in nucleus), neutrons (0, in nucleus) and electrons (−, in orbitals). Mass: proton ≈ neutron >> electron.",
          },
          difficulty: 1,
        },
        {
          id: "qui_tb_05",
          type: "multiple-choice",
          prompt: {
            es: "El número atómico ($Z$) representa:",
            en: "The atomic number ($Z$) represents:",
          },
          options: [
            {
              es: "El número de protones en el núcleo",
              en: "The number of protons in the nucleus",
            },
            {
              es: "La suma de protones y neutrones",
              en: "The sum of protons and neutrons",
            },
            { es: "El número de neutrones", en: "The number of neutrons" },
            { es: "La masa del átomo", en: "The mass of the atom" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El número atómico $Z$ = número de protones. Define el elemento químico. En átomo neutro, $Z$ = número de electrones. Número de masa $A = Z + N$ (neutrones).",
            en: "Atomic number $Z$ = number of protons. Defines the chemical element. In neutral atom, $Z$ = number of electrons. Mass number $A = Z + N$ (neutrons).",
          },
          difficulty: 1,
        },
        {
          id: "qui_tb_06",
          type: "fill-blank",
          prompt: {
            es: "Los _______ son átomos del mismo elemento con diferente número de neutrones.",
            en: "_______ are atoms of the same element with different number of neutrons.",
          },
          correctAnswer: "isótopos",
          explanation: {
            es: "Los isótopos tienen mismo $Z$ (mismo elemento) pero diferente $N$ y $A$. Ejemplo: Carbono-12 ($^{12}$C) y Carbono-14 ($^{14}$C).",
            en: "Isotopes have same $Z$ (same element) but different $N$ and $A$. Example: Carbon-12 ($^{12}$C) and Carbon-14 ($^{14}$C).",
          },
          difficulty: 2,
        },
        {
          id: "qui_tb_07",
          type: "multiple-choice",
          prompt: {
            es: "Un ion es:",
            en: "An ion is:",
          },
          options: [
            {
              es: "Un átomo que ha ganado o perdido electrones",
              en: "An atom that has gained or lost electrons",
            },
            {
              es: "Un átomo con diferente número de protones",
              en: "An atom with different number of protons",
            },
            { es: "Una molécula neutra", en: "A neutral molecule" },
            { es: "Un compuesto iónico", en: "An ionic compound" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Ion: átomo con carga eléctrica. Catión (+): perdió electrones (Na⁺). Anión (−): ganó electrones (Cl⁻). El número de protones NO cambia.",
            en: "Ion: atom with electric charge. Cation (+): lost electrons (Na⁺). Anion (−): gained electrons (Cl⁻). Number of protons does NOT change.",
          },
          difficulty: 2,
        },
        {
          id: "qui_tb_08",
          type: "multiple-choice",
          prompt: {
            es: "El modelo actual del átomo describe a los electrones como:",
            en: "The current atomic model describes electrons as:",
          },
          options: [
            {
              es: "Nubes de probabilidad en orbitales",
              en: "Probability clouds in orbitals",
            },
            {
              es: "Partículas en órbitas circulares definidas",
              en: "Particles in defined circular orbits",
            },
            {
              es: "Esferas sólidas dentro del núcleo",
              en: "Solid spheres inside the nucleus",
            },
            { es: "Ondas sin masa", en: "Massless waves" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El modelo mecánico-cuántico (Schrödinger) describe electrones como nubes de probabilidad (orbitales) donde es más probable encontrarlos, no como órbitas definidas.",
            en: "The quantum-mechanical model (Schrödinger) describes electrons as probability clouds (orbitals) where they're most likely to be found, not as defined orbits.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "temas-basicos-tabla-clasificacion",
      topicId: "temas-basicos",
      order: 2,
      title: {
        es: "Tabla Periódica y Clasificación",
        en: "Periodic Table and Classification",
      },
      description: {
        es: "Organización de elementos y tipos de compuestos",
        en: "Organization of elements and types of compounds",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "qui_tb_09",
          type: "multiple-choice",
          prompt: {
            es: "La tabla periódica organiza los elementos según:",
            en: "The periodic table organizes elements according to:",
          },
          options: [
            {
              es: "Número atómico creciente y propiedades químicas similares",
              en: "Increasing atomic number and similar chemical properties",
            },
            { es: "Masa atómica decreciente", en: "Decreasing atomic mass" },
            { es: "Orden alfabético", en: "Alphabetical order" },
            { es: "Fecha de descubrimiento", en: "Discovery date" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La tabla periódica ordena elementos por $Z$ creciente. Elementos en el mismo grupo (columna) tienen propiedades químicas similares.",
            en: "The periodic table orders elements by increasing $Z$. Elements in the same group (column) have similar chemical properties.",
          },
          difficulty: 1,
        },
        {
          id: "qui_tb_10",
          type: "multiple-choice",
          prompt: {
            es: "Los elementos del mismo grupo tienen:",
            en: "Elements in the same group have:",
          },
          options: [
            {
              es: "El mismo número de electrones de valencia",
              en: "The same number of valence electrons",
            },
            { es: "La misma masa atómica", en: "The same atomic mass" },
            {
              es: "El mismo número de protones",
              en: "The same number of protons",
            },
            {
              es: "El mismo número de neutrones",
              en: "The same number of neutrons",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Los elementos del mismo grupo (columna) tienen igual número de electrones en su última capa (valencia), lo que les da propiedades químicas similares.",
            en: "Elements in the same group (column) have equal number of electrons in their last shell (valence), giving them similar chemical properties.",
          },
          difficulty: 2,
        },
        {
          id: "qui_tb_11",
          type: "true-false",
          prompt: {
            es: "Los metales tienden a perder electrones formando cationes, mientras los no metales tienden a ganar electrones formando aniones.",
            en: "Metals tend to lose electrons forming cations, while nonmetals tend to gain electrons forming anions.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Metales (poca electronegatividad) ceden electrones: Na → Na⁺ + e⁻. No metales (alta electronegatividad) ganan electrones: Cl + e⁻ → Cl⁻.",
            en: "True. Metals (low electronegativity) give up electrons: Na → Na⁺ + e⁻. Nonmetals (high electronegativity) gain electrons: Cl + e⁻ → Cl⁻.",
          },
          difficulty: 2,
        },
        {
          id: "qui_tb_12",
          type: "multiple-choice",
          prompt: {
            es: "Los óxidos básicos son compuestos formados por:",
            en: "Basic oxides are compounds formed by:",
          },
          options: [
            { es: "Metal + oxígeno", en: "Metal + oxygen" },
            { es: "No metal + oxígeno", en: "Nonmetal + oxygen" },
            { es: "Ácido + base", en: "Acid + base" },
            { es: "Hidrógeno + oxígeno", en: "Hydrogen + oxygen" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Óxidos básicos: Metal + O₂. Ejemplos: Na₂O (óxido de sodio), CaO (óxido de calcio). Reaccionan con agua formando hidróxidos (bases).",
            en: "Basic oxides: Metal + O₂. Examples: Na₂O (sodium oxide), CaO (calcium oxide). React with water forming hydroxides (bases).",
          },
          difficulty: 2,
        },
        {
          id: "qui_tb_13",
          type: "multiple-choice",
          prompt: {
            es: "Los óxidos ácidos (anhídridos) son compuestos formados por:",
            en: "Acidic oxides (anhydrides) are compounds formed by:",
          },
          options: [
            { es: "No metal + oxígeno", en: "Nonmetal + oxygen" },
            { es: "Metal + oxígeno", en: "Metal + oxygen" },
            { es: "Ácido − H₂O", en: "Acid − H₂O" },
            { es: "Base + oxígeno", en: "Base + oxygen" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Óxidos ácidos: No metal + O₂. Ejemplos: CO₂ (dióxido de carbono), SO₃ (trióxido de azufre). Reaccionan con agua formando ácidos.",
            en: "Acidic oxides: Nonmetal + O₂. Examples: CO₂ (carbon dioxide), SO₃ (sulfur trioxide). React with water forming acids.",
          },
          difficulty: 2,
        },
        {
          id: "qui_tb_14",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de las siguientes es una sal?",
            en: "Which of the following is a salt?",
          },
          options: [
            { es: "NaCl (cloruro de sodio)", en: "NaCl (sodium chloride)" },
            { es: "HCl (ácido clorhídrico)", en: "HCl (hydrochloric acid)" },
            { es: "NaOH (hidróxido de sodio)", en: "NaOH (sodium hydroxide)" },
            { es: "H₂O (agua)", en: "H₂O (water)" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Las sales resultan de reacción ácido + base. NaCl: HCl + NaOH → NaCl + H₂O. Compuestos iónicos formados por catión metálico + anión no metálico.",
            en: "Salts result from acid + base reaction. NaCl: HCl + NaOH → NaCl + H₂O. Ionic compounds formed by metallic cation + nonmetallic anion.",
          },
          difficulty: 1,
        },
        {
          id: "qui_tb_15",
          type: "fill-blank",
          prompt: {
            es: "Los _______ son compuestos que en solución acuosa liberan iones H⁺ (o H₃O⁺).",
            en: "_______ are compounds that in aqueous solution release H⁺ (or H₃O⁺) ions.",
          },
          correctAnswer: "ácidos",
          explanation: {
            es: "Los ácidos donan protones (H⁺) en solución. Ejemplos: HCl, H₂SO₄, CH₃COOH. pH < 7. Sabor agrio, conducen electricidad en solución.",
            en: "Acids donate protons (H⁺) in solution. Examples: HCl, H₂SO₄, CH₃COOH. pH < 7. Sour taste, conduct electricity in solution.",
          },
          difficulty: 1,
        },
        {
          id: "qui_tb_16",
          type: "multiple-choice",
          prompt: {
            es: "Las bases o hidróxidos en solución acuosa liberan:",
            en: "Bases or hydroxides in aqueous solution release:",
          },
          options: [
            { es: "Iones OH⁻ (hidroxilo)", en: "OH⁻ (hydroxyl) ions" },
            { es: "Iones H⁺", en: "H⁺ ions" },
            { es: "Electrones libres", en: "Free electrons" },
            { es: "Protones", en: "Protons" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Las bases liberan iones OH⁻. Ejemplos: NaOH, Ca(OH)₂, NH₃. pH > 7. Sabor amargo, jabonosas al tacto, conducen electricidad en solución.",
            en: "Bases release OH⁻ ions. Examples: NaOH, Ca(OH)₂, NH₃. pH > 7. Bitter taste, soapy to touch, conduct electricity in solution.",
          },
          difficulty: 1,
        },
      ],
    },
    {
      id: "temas-basicos-mol-estequiometria",
      topicId: "temas-basicos",
      order: 3,
      title: {
        es: "Mol y Estequiometría",
        en: "Mole and Stoichiometry",
      },
      description: {
        es: "Cálculos químicos y relaciones cuantitativas",
        en: "Chemical calculations and quantitative relationships",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "qui_tb_17",
          type: "multiple-choice",
          prompt: {
            es: "Un mol es:",
            en: "A mole is:",
          },
          options: [
            {
              es: "$6.022 \\times 10^{23}$ entidades (número de Avogadro)",
              en: "$6.022 \\times 10^{23}$ entities (Avogadro's number)",
            },
            { es: "La masa de un átomo", en: "The mass of an atom" },
            { es: "Un gramo de sustancia", en: "One gram of substance" },
            { es: "El volumen de un gas", en: "The volume of a gas" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El mol es la unidad de cantidad de sustancia. 1 mol = $6.022 \\times 10^{23}$ entidades (átomos, moléculas, iones). Símbolo: mol.",
            en: "The mole is the unit of amount of substance. 1 mol = $6.022 \\times 10^{23}$ entities (atoms, molecules, ions). Symbol: mol.",
          },
          difficulty: 1,
        },
        {
          id: "qui_tb_18",
          type: "multiple-choice",
          prompt: {
            es: "La masa molar es:",
            en: "Molar mass is:",
          },
          options: [
            {
              es: "La masa de un mol de sustancia (g/mol)",
              en: "The mass of one mole of substance (g/mol)",
            },
            { es: "La masa de un átomo", en: "The mass of one atom" },
            { es: "El número de Avogadro", en: "Avogadro's number" },
            { es: "La masa molecular relativa", en: "Relative molecular mass" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Masa molar: masa de 1 mol de sustancia. Se expresa en g/mol. Para elementos: igual al peso atómico. Ej: C = 12 uma = 12 g/mol.",
            en: "Molar mass: mass of 1 mol of substance. Expressed in g/mol. For elements: equal to atomic weight. E.g.: C = 12 amu = 12 g/mol.",
          },
          difficulty: 1,
        },
        {
          id: "qui_tb_19",
          type: "multiple-choice",
          prompt: {
            es: "La masa molar del agua (H₂O) es aproximadamente:",
            en: "The molar mass of water (H₂O) is approximately:",
          },
          options: [
            { es: "18 g/mol", en: "18 g/mol" },
            { es: "2 g/mol", en: "2 g/mol" },
            { es: "16 g/mol", en: "16 g/mol" },
            { es: "20 g/mol", en: "20 g/mol" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "H₂O: 2 × H + 1 × O = 2(1) + 16 = 18 g/mol. Masas atómicas: H ≈ 1 g/mol, O ≈ 16 g/mol.",
            en: "H₂O: 2 × H + 1 × O = 2(1) + 16 = 18 g/mol. Atomic masses: H ≈ 1 g/mol, O ≈ 16 g/mol.",
          },
          difficulty: 2,
        },
        {
          id: "qui_tb_20",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuántos moles hay en 36 g de agua (H₂O)?",
            en: "How many moles are in 36 g of water (H₂O)?",
          },
          options: [
            { es: "2 mol", en: "2 mol" },
            { es: "1 mol", en: "1 mol" },
            { es: "18 mol", en: "18 mol" },
            { es: "0.5 mol", en: "0.5 mol" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Usamos: $n = \\frac{m}{M}$ donde $n$ = moles, $m$ = masa, $M$ = masa molar. $n = \\frac{36 \\text{ g}}{18 \\text{ g/mol}} = 2$ mol.",
            en: "We use: $n = \\frac{m}{M}$ where $n$ = moles, $m$ = mass, $M$ = molar mass. $n = \\frac{36 \\text{ g}}{18 \\text{ g/mol}} = 2$ mol.",
          },
          difficulty: 2,
        },
        {
          id: "qui_tb_21",
          type: "true-false",
          prompt: {
            es: "Una ecuación química balanceada indica las proporciones molares en que reaccionan las sustancias.",
            en: "A balanced chemical equation indicates the molar ratios in which substances react.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Los coeficientes estequiométricos indican moles. Ejemplo: 2H₂ + O₂ → 2H₂O significa 2 mol H₂ reaccionan con 1 mol O₂ para formar 2 mol H₂O.",
            en: "True. Stoichiometric coefficients indicate moles. Example: 2H₂ + O₂ → 2H₂O means 2 mol H₂ react with 1 mol O₂ to form 2 mol H₂O.",
          },
          difficulty: 2,
        },
        {
          id: "qui_tb_22",
          type: "multiple-choice",
          prompt: {
            es: "En la reacción 2H₂ + O₂ → 2H₂O, si reaccionan 4 moles de H₂, ¿cuántos moles de O₂ se necesitan?",
            en: "In the reaction 2H₂ + O₂ → 2H₂O, if 4 moles of H₂ react, how many moles of O₂ are needed?",
          },
          options: [
            { es: "2 mol", en: "2 mol" },
            { es: "4 mol", en: "4 mol" },
            { es: "1 mol", en: "1 mol" },
            { es: "8 mol", en: "8 mol" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Relación molar H₂:O₂ = 2:1. Si tenemos 4 mol H₂: $\\frac{4 \\text{ mol H}_2}{2} \\times 1 = 2$ mol O₂.",
            en: "Molar ratio H₂:O₂ = 2:1. If we have 4 mol H₂: $\\frac{4 \\text{ mol H}_2}{2} \\times 1 = 2$ mol O₂.",
          },
          difficulty: 2,
        },
        {
          id: "qui_tb_23",
          type: "fill-blank",
          prompt: {
            es: "La ley de conservación de la _______ establece que en una reacción química, la masa total de los reactivos es igual a la masa total de los productos.",
            en: "The law of conservation of _______ states that in a chemical reaction, the total mass of reactants equals the total mass of products.",
          },
          correctAnswer: "masa",
          explanation: {
            es: "Ley de Lavoisier (conservación de la masa): en reacciones químicas, la masa no se crea ni se destruye, solo se transforma. Por eso se balancea.",
            en: "Lavoisier's law (conservation of mass): in chemical reactions, mass is neither created nor destroyed, only transformed. That's why we balance.",
          },
          difficulty: 1,
        },
        {
          id: "qui_tb_24",
          type: "multiple-choice",
          prompt: {
            es: "El reactivo limitante es:",
            en: "The limiting reactant is:",
          },
          options: [
            {
              es: "El que se consume primero y determina la cantidad de producto formado",
              en: "The one consumed first and determines the amount of product formed",
            },
            {
              es: "El que está en menor concentración",
              en: "The one in lowest concentration",
            },
            { es: "El más caro", en: "The most expensive" },
            {
              es: "El que sobra después de la reacción",
              en: "The one left over after reaction",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Reactivo limitante: se agota primero, limita la cantidad de producto. Los demás son reactivos en exceso. Importante en rendimientos de producción.",
            en: "Limiting reactant: consumed first, limits product amount. Others are excess reactants. Important in production yields.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
