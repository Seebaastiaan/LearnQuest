import type { Topic } from "@/lib/types";

export const alimentosTopic: Topic = {
  id: "alimentos",
  slug: "alimentos",
  title: {
    es: "Alimentos",
    en: "Food",
  },
  description: {
    es: "Química de carbohidratos, lípidos, proteínas y nutrientes",
    en: "Chemistry of carbohydrates, lipids, proteins and nutrients",
  },
  icon: "Apple",
  color: "amber",
  bgGradient: "bg-linear-to-br from-amber-500 to-orange-600",
  prerequisites: ["temas-basicos"],
  order: 4,
  lessons: [
    {
      id: "alimentos-carbohidratos-lipidos",
      topicId: "alimentos",
      order: 1,
      title: {
        es: "Carbohidratos y Lípidos",
        en: "Carbohydrates and Lipids",
      },
      description: {
        es: "Estructura y función de azúcares y grasas",
        en: "Structure and function of sugars and fats",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "qui_al_01",
          type: "multiple-choice",
          prompt: {
            es: "Los carbohidratos son biomoléculas compuestas principalmente de:",
            en: "Carbohydrates are biomolecules mainly composed of:",
          },
          options: [
            {
              es: "Carbono, hidrógeno y oxígeno (C, H, O)",
              en: "Carbon, hydrogen and oxygen (C, H, O)",
            },
            { es: "Solo carbono", en: "Only carbon" },
            { es: "Carbono y nitrógeno", en: "Carbon and nitrogen" },
            { es: "Hidrógeno y azufre", en: "Hydrogen and sulfur" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Carbohidratos (CₙH₂ₙOₙ): C, H, O. Fórmula general (CH₂O)ₙ. Función: energía rápida (4 kcal/g), estructura celular (celulosa). Ejemplos: glucosa, almidón.",
            en: "Carbohydrates (CₙH₂ₙOₙ): C, H, O. General formula (CH₂O)ₙ. Function: quick energy (4 kcal/g), cell structure (cellulose). Examples: glucose, starch.",
          },
          difficulty: 1,
        },
        {
          id: "qui_al_02",
          type: "multiple-choice",
          prompt: {
            es: "La glucosa ($C_6H_{12}O_6$) es un ejemplo de:",
            en: "Glucose ($C_6H_{12}O_6$) is an example of:",
          },
          options: [
            {
              es: "Monosacárido (azúcar simple)",
              en: "Monosaccharide (simple sugar)",
            },
            { es: "Disacárido", en: "Disaccharide" },
            { es: "Polisacárido", en: "Polysaccharide" },
            { es: "Lípido", en: "Lipid" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Clasificación: Monosacáridos (1 azúcar: glucosa, fructosa, galactosa), Disacáridos (2: sacarosa, lactosa, maltosa), Polisacáridos (muchos: almidón, glucógeno, celulosa).",
            en: "Classification: Monosaccharides (1 sugar: glucose, fructose, galactose), Disaccharides (2: sucrose, lactose, maltose), Polysaccharides (many: starch, glycogen, cellulose).",
          },
          difficulty: 1,
        },
        {
          id: "qui_al_03",
          type: "multiple-choice",
          prompt: {
            es: "El almidón es:",
            en: "Starch is:",
          },
          options: [
            {
              es: "Un polisacárido de reserva energética en plantas",
              en: "An energy storage polysaccharide in plants",
            },
            { es: "Una proteína", en: "A protein" },
            { es: "Un monosacárido", en: "A monosaccharide" },
            { es: "Un ácido nucleico", en: "A nucleic acid" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Almidón: cadenas de glucosa (amilosa lineal, amilopectina ramificada). Reserva en plantas (papa, maíz, trigo). Glucógeno: similar, reserva animal (hígado, músculo).",
            en: "Starch: glucose chains (linear amylose, branched amylopectin). Storage in plants (potato, corn, wheat). Glycogen: similar, animal storage (liver, muscle).",
          },
          difficulty: 2,
        },
        {
          id: "qui_al_04",
          type: "true-false",
          prompt: {
            es: "La celulosa es un carbohidrato estructural que los humanos no pueden digerir completamente porque carecemos de la enzima celulasa.",
            en: "Cellulose is a structural carbohydrate that humans cannot fully digest because we lack the enzyme cellulase.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Celulosa: cadenas lineales de glucosa con enlaces β-1,4. Forma pared celular vegetal. Humanos no digieren → fibra dietética. Rumiantes tienen bacterias con celulasa.",
            en: "True. Cellulose: linear glucose chains with β-1,4 bonds. Forms plant cell wall. Humans don't digest → dietary fiber. Ruminants have bacteria with cellulase.",
          },
          difficulty: 2,
        },
        {
          id: "qui_al_05",
          type: "multiple-choice",
          prompt: {
            es: "Los lípidos son caracterizados por ser:",
            en: "Lipids are characterized by being:",
          },
          options: [
            {
              es: "Hidrofóbicos (insolubles en agua)",
              en: "Hydrophobic (insoluble in water)",
            },
            {
              es: "Hidrofílicos (solubles en agua)",
              en: "Hydrophilic (soluble in water)",
            },
            { es: "Solo proteínas", en: "Only proteins" },
            { es: "Ácidos nucleicos", en: "Nucleic acids" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Lípidos: moléculas hidrofóbicas (apolares), solubles en solventes no polares (cloroformo, éter). Compuestos de C, H, O. Funciones: reserva energética (9 kcal/g), membranas, hormonas.",
            en: "Lipids: hydrophobic (nonpolar) molecules, soluble in nonpolar solvents (chloroform, ether). Composed of C, H, O. Functions: energy storage (9 kcal/g), membranes, hormones.",
          },
          difficulty: 1,
        },
        {
          id: "qui_al_06",
          type: "multiple-choice",
          prompt: {
            es: "Los ácidos grasos saturados:",
            en: "Saturated fatty acids:",
          },
          options: [
            {
              es: "Solo tienen enlaces simples C-C y son sólidos a temperatura ambiente",
              en: "Only have single C-C bonds and are solid at room temperature",
            },
            {
              es: "Tienen dobles enlaces C=C y son líquidos",
              en: "Have double C=C bonds and are liquid",
            },
            { es: "No contienen carbono", en: "Don't contain carbon" },
            { es: "Son proteínas", en: "Are proteins" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Saturados: sin dobles enlaces, cadena recta → empaquetamiento compacto → sólidos (manteca, mantequilla). Insaturados: dobles enlaces → torcidos → líquidos (aceites vegetales).",
            en: "Saturated: no double bonds, straight chain → compact packing → solids (lard, butter). Unsaturated: double bonds → kinked → liquids (vegetable oils).",
          },
          difficulty: 2,
        },
        {
          id: "qui_al_07",
          type: "fill-blank",
          prompt: {
            es: "Los triglicéridos están formados por una molécula de _______ unida a tres ácidos grasos.",
            en: "Triglycerides are formed by one _______ molecule attached to three fatty acids.",
          },
          correctAnswer: "glicerol",
          explanation: {
            es: "Triglicéridos (grasas/aceites): glicerol (3 carbonos con -OH) + 3 ácidos grasos → enlaces éster. Principal forma de almacenamiento de energía en animales (tejido adiposo).",
            en: "Triglycerides (fats/oils): glycerol (3 carbons with -OH) + 3 fatty acids → ester bonds. Main energy storage form in animals (adipose tissue).",
          },
          difficulty: 2,
        },
        {
          id: "qui_al_08",
          type: "multiple-choice",
          prompt: {
            es: "Los fosfolípidos son componentes principales de:",
            en: "Phospholipids are main components of:",
          },
          options: [
            { es: "Membranas celulares", en: "Cell membranes" },
            { es: "ADN", en: "DNA" },
            { es: "Huesos", en: "Bones" },
            { es: "Aire", en: "Air" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Fosfolípidos: glicerol + 2 ácidos grasos + grupo fosfato (polar). Anfipáticos: cabeza hidrofílica, colas hidrofóbicas → bicapa lipídica (membranas). Permiten permeabilidad selectiva.",
            en: "Phospholipids: glycerol + 2 fatty acids + phosphate group (polar). Amphipathic: hydrophilic head, hydrophobic tails → lipid bilayer (membranes). Allow selective permeability.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "alimentos-proteinas",
      topicId: "alimentos",
      order: 2,
      title: {
        es: "Proteínas y Aminoácidos",
        en: "Proteins and Amino Acids",
      },
      description: {
        es: "Estructura, función y metabolismo de proteínas",
        en: "Structure, function and metabolism of proteins",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "qui_al_09",
          type: "multiple-choice",
          prompt: {
            es: "Las proteínas son polímeros de:",
            en: "Proteins are polymers of:",
          },
          options: [
            { es: "Aminoácidos", en: "Amino acids" },
            { es: "Monosacáridos", en: "Monosaccharides" },
            { es: "Nucleótidos", en: "Nucleotides" },
            { es: "Ácidos grasos", en: "Fatty acids" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Proteínas: cadenas de aminoácidos unidos por enlaces peptídicos. 20 aminoácidos estándar. Funciones: enzimas, estructura, transporte, defensa, hormonas, movimiento.",
            en: "Proteins: chains of amino acids joined by peptide bonds. 20 standard amino acids. Functions: enzymes, structure, transport, defense, hormones, movement.",
          },
          difficulty: 1,
        },
        {
          id: "qui_al_10",
          type: "multiple-choice",
          prompt: {
            es: "Un aminoácido contiene:",
            en: "An amino acid contains:",
          },
          options: [
            {
              es: "Grupo amino ($-NH_2$), carboxilo ($-COOH$) y cadena lateral (R)",
              en: "Amino group ($-NH_2$), carboxyl ($-COOH$) and side chain (R)",
            },
            { es: "Solo carbono", en: "Only carbon" },
            { es: "Solo oxígeno", en: "Only oxygen" },
            { es: "No contiene nitrógeno", en: "Doesn't contain nitrogen" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Estructura aminoácido: carbono α central con -NH₂ (amino), -COOH (carboxilo), -H y cadena lateral R (define identidad). Glicina: R=H. Fórmula general: H₂N-CHR-COOH.",
            en: "Amino acid structure: central α carbon with -NH₂ (amino), -COOH (carboxyl), -H and side chain R (defines identity). Glycine: R=H. General formula: H₂N-CHR-COOH.",
          },
          difficulty: 1,
        },
        {
          id: "qui_al_11",
          type: "fill-blank",
          prompt: {
            es: "El enlace entre dos aminoácidos se llama enlace _______.",
            en: "The bond between two amino acids is called a _______ bond.",
          },
          correctAnswer: "peptídico",
          explanation: {
            es: "Enlace peptídico: reacción de condensación entre -COOH de un aminoácido y -NH₂ de otro → -CO-NH- + H₂O. Dipéptido (2 aa), tripéptido (3), polipéptido/proteína (muchos).",
            en: "Peptide bond: condensation reaction between -COOH of one amino acid and -NH₂ of another → -CO-NH- + H₂O. Dipeptide (2 aa), tripeptide (3), polypeptide/protein (many).",
          },
          difficulty: 1,
        },
        {
          id: "qui_al_12",
          type: "multiple-choice",
          prompt: {
            es: "La estructura primaria de una proteína se refiere a:",
            en: "The primary structure of a protein refers to:",
          },
          options: [
            {
              es: "Secuencia lineal de aminoácidos",
              en: "Linear sequence of amino acids",
            },
            {
              es: "Forma tridimensional final",
              en: "Final three-dimensional shape",
            },
            { es: "Unión de varias cadenas", en: "Union of several chains" },
            { es: "Color de la proteína", en: "Protein color" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Niveles estructura: 1ª (secuencia aa), 2ª (α-hélice, lámina β por puentes H), 3ª (plegamiento 3D por interacciones R), 4ª (varias subunidades: hemoglobina 4 cadenas).",
            en: "Structure levels: 1º (aa sequence), 2º (α-helix, β-sheet by H bonds), 3º (3D folding by R interactions), 4º (several subunits: hemoglobin 4 chains).",
          },
          difficulty: 2,
        },
        {
          id: "qui_al_13",
          type: "true-false",
          prompt: {
            es: "La desnaturalización de proteínas es la pérdida de estructura tridimensional sin romper enlaces peptídicos, causada por calor, pH extremo o solventes.",
            en: "Protein denaturation is the loss of three-dimensional structure without breaking peptide bonds, caused by heat, extreme pH or solvents.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Desnaturalización: pérdida de estructuras 2ª/3ª/4ª → pierde función. Conserva 1ª. Causas: T alta (huevo cocido), pH extremos, urea. Generalmente irreversible.",
            en: "True. Denaturation: loss of 2º/3º/4º structures → loses function. Preserves 1º. Causes: high T (cooked egg), extreme pH, urea. Generally irreversible.",
          },
          difficulty: 2,
        },
        {
          id: "qui_al_14",
          type: "multiple-choice",
          prompt: {
            es: "Las enzimas son proteínas que:",
            en: "Enzymes are proteins that:",
          },
          options: [
            {
              es: "Catalizan reacciones químicas sin consumirse",
              en: "Catalyze chemical reactions without being consumed",
            },
            {
              es: "Son reactivos que se consumen",
              en: "Are reactants that get consumed",
            },
            { es: "Solo almacenan energía", en: "Only store energy" },
            { es: "Forman membranas", en: "Form membranes" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Enzimas: biocatalizadores proteicos. Aceleran reacciones (↓ energía activación). Específicas (modelo llave-cerradura en sitio activo). No se consumen. Ejemplos: amilasa, pepsina, catalasa.",
            en: "Enzymes: protein biocatalysts. Speed reactions (↓ activation energy). Specific (lock-key model at active site). Not consumed. Examples: amylase, pepsin, catalase.",
          },
          difficulty: 1,
        },
        {
          id: "qui_al_15",
          type: "multiple-choice",
          prompt: {
            es: "Los aminoácidos esenciales son aquellos que:",
            en: "Essential amino acids are those that:",
          },
          options: [
            {
              es: "El cuerpo no puede sintetizar y deben obtenerse de la dieta",
              en: "The body cannot synthesize and must be obtained from diet",
            },
            {
              es: "El cuerpo sintetiza en exceso",
              en: "The body synthesizes in excess",
            },
            { es: "No son necesarios", en: "Are not necessary" },
            { es: "Solo están en plantas", en: "Are only in plants" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Humanos: 9 aminoácidos esenciales (histidina, isoleucina, leucina, lisina, metionina, fenilalanina, treonina, triptófano, valina). Deben consumirse en dieta (carnes, legumbres, lácteos).",
            en: "Humans: 9 essential amino acids (histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, valine). Must be consumed in diet (meats, legumes, dairy).",
          },
          difficulty: 2,
        },
        {
          id: "qui_al_16",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál NO es una función de las proteínas?",
            en: "Which is NOT a function of proteins?",
          },
          options: [
            {
              es: "Almacenar información genética",
              en: "Store genetic information",
            },
            {
              es: "Catalizar reacciones (enzimas)",
              en: "Catalyze reactions (enzymes)",
            },
            {
              es: "Proporcionar estructura (colágeno)",
              en: "Provide structure (collagen)",
            },
            {
              es: "Transportar sustancias (hemoglobina)",
              en: "Transport substances (hemoglobin)",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Información genética: ADN/ARN (ácidos nucleicos), NO proteínas. Proteínas: enzimas (catalasa), estructura (colágeno, queratina), transporte (hemoglobina), defensa (anticuerpos), hormonas (insulina).",
            en: "Genetic information: DNA/RNA (nucleic acids), NOT proteins. Proteins: enzymes (catalase), structure (collagen, keratin), transport (hemoglobin), defense (antibodies), hormones (insulin).",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "alimentos-vitaminas-minerales",
      topicId: "alimentos",
      order: 3,
      title: {
        es: "Vitaminas y Minerales",
        en: "Vitamins and Minerals",
      },
      description: {
        es: "Micronutrientes esenciales y su importancia",
        en: "Essential micronutrients and their importance",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "qui_al_17",
          type: "multiple-choice",
          prompt: {
            es: "Las vitaminas son:",
            en: "Vitamins are:",
          },
          options: [
            {
              es: "Compuestos orgánicos esenciales en pequeñas cantidades",
              en: "Essential organic compounds in small amounts",
            },
            { es: "Macronutrientes principales", en: "Main macronutrients" },
            { es: "Solo minerales", en: "Only minerals" },
            { es: "Fuentes de energía primaria", en: "Primary energy sources" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Vitaminas: micronutrientes orgánicos esenciales (no sintetizamos suficiente). Necesarias en mg o μg. No son energéticas. Funciones: coenzimas, antioxidantes, regulación metabólica.",
            en: "Vitamins: essential organic micronutrients (we don't synthesize enough). Needed in mg or μg. Not energy sources. Functions: coenzymes, antioxidants, metabolic regulation.",
          },
          difficulty: 1,
        },
        {
          id: "qui_al_18",
          type: "multiple-choice",
          prompt: {
            es: "Las vitaminas hidrosolubles incluyen:",
            en: "Water-soluble vitamins include:",
          },
          options: [
            {
              es: "Vitaminas del complejo B y vitamina C",
              en: "B-complex vitamins and vitamin C",
            },
            { es: "Vitaminas A, D, E, K", en: "Vitamins A, D, E, K" },
            { es: "Solo calcio", en: "Only calcium" },
            { es: "Proteínas", en: "Proteins" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Hidrosolubles: B (B₁, B₂, B₃, B₆, B₉/folato, B₁₂) y C (ácido ascórbico). Se disuelven en agua, no se almacenan (exceso se excreta), deben consumirse regularmente.",
            en: "Water-soluble: B (B₁, B₂, B₃, B₆, B₉/folate, B₁₂) and C (ascorbic acid). Dissolve in water, not stored (excess excreted), must be consumed regularly.",
          },
          difficulty: 2,
        },
        {
          id: "qui_al_19",
          type: "multiple-choice",
          prompt: {
            es: "Las vitaminas liposolubles son:",
            en: "Fat-soluble vitamins are:",
          },
          options: [
            { es: "A, D, E, K", en: "A, D, E, K" },
            { es: "B y C", en: "B and C" },
            { es: "Solo minerales", en: "Only minerals" },
            { es: "Carbohidratos", en: "Carbohydrates" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Liposolubles: A (visión, retinol), D (calcio, calciferol), E (antioxidante, tocoferol), K (coagulación, filoquinona). Se disuelven en grasas, se almacenan en hígado/tejido adiposo.",
            en: "Fat-soluble: A (vision, retinol), D (calcium, calciferol), E (antioxidant, tocopherol), K (coagulation, phylloquinone). Dissolve in fats, stored in liver/adipose tissue.",
          },
          difficulty: 2,
        },
        {
          id: "qui_al_20",
          type: "true-false",
          prompt: {
            es: "La vitamina C (ácido ascórbico) es un antioxidante que previene el escorbuto y ayuda en la absorción de hierro.",
            en: "Vitamin C (ascorbic acid) is an antioxidant that prevents scurvy and helps with iron absorption.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Vitamina C: antioxidante, síntesis de colágeno, absorción Fe, sistema inmune. Deficiencia: escorbuto (encías sangrantes). Fuentes: cítricos, pimientos, brócoli.",
            en: "True. Vitamin C: antioxidant, collagen synthesis, Fe absorption, immune system. Deficiency: scurvy (bleeding gums). Sources: citrus, peppers, broccoli.",
          },
          difficulty: 1,
        },
        {
          id: "qui_al_21",
          type: "multiple-choice",
          prompt: {
            es: "La vitamina D es importante para:",
            en: "Vitamin D is important for:",
          },
          options: [
            {
              es: "Absorción de calcio y salud ósea",
              en: "Calcium absorption and bone health",
            },
            { es: "Visión nocturna", en: "Night vision" },
            { es: "Coagulación sanguínea", en: "Blood clotting" },
            {
              es: "Metabolismo de carbohidratos",
              en: "Carbohydrate metabolism",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Vitamina D (calciferol): regula absorción Ca²⁺ y P, mineralización ósea. Se sintetiza en piel con luz solar. Deficiencia: raquitismo (niños), osteomalacia (adultos). Fuentes: pescado, lácteos fortificados.",
            en: "Vitamin D (calciferol): regulates Ca²⁺ and P absorption, bone mineralization. Synthesized in skin with sunlight. Deficiency: rickets (children), osteomalacia (adults). Sources: fish, fortified dairy.",
          },
          difficulty: 1,
        },
        {
          id: "qui_al_22",
          type: "fill-blank",
          prompt: {
            es: "El _______ es un mineral esencial componente de la hemoglobina, necesario para el transporte de oxígeno en la sangre.",
            en: "_______ is an essential mineral component of hemoglobin, necessary for oxygen transport in blood.",
          },
          correctAnswer: "hierro",
          explanation: {
            es: "Hierro (Fe): centro del grupo hemo en hemoglobina → transporte O₂. Deficiencia: anemia ferropénica (fatiga). Fuentes: carnes rojas, legumbres, espinacas. Absorción mejora con vit C.",
            en: "Iron (Fe): center of heme group in hemoglobin → O₂ transport. Deficiency: iron-deficiency anemia (fatigue). Sources: red meat, legumes, spinach. Absorption improves with vit C.",
          },
          difficulty: 1,
        },
        {
          id: "qui_al_23",
          type: "multiple-choice",
          prompt: {
            es: "El calcio es importante para:",
            en: "Calcium is important for:",
          },
          options: [
            {
              es: "Formación de huesos/dientes y contracción muscular",
              en: "Bone/teeth formation and muscle contraction",
            },
            { es: "Solo respiración", en: "Only respiration" },
            { es: "Síntesis de ADN", en: "DNA synthesis" },
            { es: "Digestión de grasas", en: "Fat digestion" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Calcio (Ca): 99% en huesos/dientes (hidroxiapatita), 1% en sangre (contracción muscular, neurotransmisión, coagulación). Deficiencia: osteoporosis. Fuentes: lácteos, sardinas, brócoli.",
            en: "Calcium (Ca): 99% in bones/teeth (hydroxyapatite), 1% in blood (muscle contraction, neurotransmission, coagulation). Deficiency: osteoporosis. Sources: dairy, sardines, broccoli.",
          },
          difficulty: 1,
        },
        {
          id: "qui_al_24",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál afirmación sobre nutrición es correcta?",
            en: "Which statement about nutrition is correct?",
          },
          options: [
            {
              es: "Una dieta balanceada incluye carbohidratos, lípidos, proteínas, vitaminas y minerales",
              en: "A balanced diet includes carbohydrates, lipids, proteins, vitamins and minerals",
            },
            {
              es: "Solo necesitamos carbohidratos",
              en: "We only need carbohydrates",
            },
            {
              es: "Las vitaminas proporcionan energía directa",
              en: "Vitamins provide direct energy",
            },
            {
              es: "Los minerales no son necesarios",
              en: "Minerals are not necessary",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Dieta balanceada: macronutrientes (carbohidratos 45-65%, lípidos 20-35%, proteínas 10-35% energía) + micronutrientes (vitaminas, minerales) + agua + fibra. Variedad y moderación son clave.",
            en: "Balanced diet: macronutrients (carbohydrates 45-65%, lipids 20-35%, proteins 10-35% energy) + micronutrients (vitamins, minerals) + water + fiber. Variety and moderation are key.",
          },
          difficulty: 1,
        },
      ],
    },
  ],
};
