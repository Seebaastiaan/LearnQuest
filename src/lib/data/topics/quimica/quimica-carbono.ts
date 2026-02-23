import type { Topic } from "@/lib/types";

export const quimicaCarbonoTopic: Topic = {
  id: "quimica-carbono",
  slug: "quimica-carbono",
  title: {
    es: "Química del Carbono",
    en: "Carbon Chemistry",
  },
  description: {
    es: "Química orgánica: hidrocarburos, grupos funcionales y reacciones",
    en: "Organic chemistry: hydrocarbons, functional groups and reactions",
  },
  icon: "Atom",
  color: "emerald",
  bgGradient: "bg-linear-to-br from-emerald-500 to-green-600",
  prerequisites: ["temas-basicos"],
  order: 6,
  lessons: [
    {
      id: "carbono-hidrocarburos",
      topicId: "quimica-carbono",
      order: 1,
      title: {
        es: "Carbono e Hidrocarburos",
        en: "Carbon and Hydrocarbons",
      },
      description: {
        es: "Hibridación y clasificación de hidrocarburos",
        en: "Hybridization and hydrocarbon classification",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "qui_qc_01",
          type: "multiple-choice",
          prompt: {
            es: "La química orgánica estudia principalmente compuestos que contienen:",
            en: "Organic chemistry mainly studies compounds containing:",
          },
          options: [
            { es: "Carbono e hidrógeno", en: "Carbon and hydrogen" },
            { es: "Solo oxígeno", en: "Only oxygen" },
            { es: "Solo metales", en: "Only metals" },
            { es: "Solo gases nobles", en: "Only noble gases" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Química orgánica: estudio de compuestos de carbono (mayoría con H). C forma 4 enlaces covalentes, cadenas largas y estructuras complejas. Excepción: CO₂, carbonatos (inorgánicos).",
            en: "Organic chemistry: study of carbon compounds (most with H). C forms 4 covalent bonds, long chains and complex structures. Exception: CO₂, carbonates (inorganic).",
          },
          difficulty: 1,
        },
        {
          id: "qui_qc_02",
          type: "multiple-choice",
          prompt: {
            es: "El carbono tiene una configuración electrónica que le permite formar:",
            en: "Carbon has an electronic configuration that allows it to form:",
          },
          options: [
            { es: "4 enlaces covalentes", en: "4 covalent bonds" },
            { es: "8 enlaces covalentes", en: "8 covalent bonds" },
            { es: "2 enlaces iónicos", en: "2 ionic bonds" },
            { es: "No forma enlaces", en: "Doesn't form bonds" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Carbono: Z=6, configuración 1s² 2s² 2p². 4 electrones de valencia → forma 4 enlaces. Puede formar enlaces simples, dobles o triples. Hibridación: sp³, sp², sp.",
            en: "Carbon: Z=6, configuration 1s² 2s² 2p². 4 valence electrons → forms 4 bonds. Can form single, double or triple bonds. Hybridization: sp³, sp², sp.",
          },
          difficulty: 1,
        },
        {
          id: "qui_qc_03",
          type: "multiple-choice",
          prompt: {
            es: "La hibridación $sp^3$ del carbono forma geometría:",
            en: "Carbon $sp^3$ hybridization forms geometry:",
          },
          options: [
            {
              es: "Tetraédrica (109.5°, enlaces simples)",
              en: "Tetrahedral (109.5°, single bonds)",
            },
            { es: "Trigonal plana (120°)", en: "Trigonal planar (120°)" },
            { es: "Lineal (180°)", en: "Linear (180°)" },
            { es: "Octaédrica", en: "Octahedral" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "sp³: 4 orbitales híbridos, geometría tetraédrica (ángulo 109.5°), 4 enlaces σ simples. Ejemplo: metano CH₄, etano C₂H₆. Saturado.",
            en: "sp³: 4 hybrid orbitals, tetrahedral geometry (angle 109.5°), 4 single σ bonds. Example: methane CH₄, ethane C₂H₆. Saturated.",
          },
          difficulty: 2,
        },
        {
          id: "qui_qc_04",
          type: "multiple-choice",
          prompt: {
            es: "Los alcanos son hidrocarburos que:",
            en: "Alkanes are hydrocarbons that:",
          },
          options: [
            {
              es: "Solo tienen enlaces simples C-C, fórmula $C_nH_{2n+2}$",
              en: "Only have single C-C bonds, formula $C_nH_{2n+2}$",
            },
            { es: "Tienen dobles enlaces", en: "Have double bonds" },
            { es: "Tienen triples enlaces", en: "Have triple bonds" },
            { es: "No contienen hidrógeno", en: "Don't contain hydrogen" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Alcanos: hidrocarburos saturados, solo enlaces simples σ (sp³). Fórmula CₙH₂ₙ₊₂. Ejemplos: metano CH₄, etano C₂H₆, propano C₃H₈, butano C₄H₁₀. Terminación: -ano.",
            en: "Alkanes: saturated hydrocarbons, only single σ bonds (sp³). Formula CₙH₂ₙ₊₂. Examples: methane CH₄, ethane C₂H₆, propane C₃H₈, butane C₄H₁₀. Ending: -ane.",
          },
          difficulty: 1,
        },
        {
          id: "qui_qc_05",
          type: "multiple-choice",
          prompt: {
            es: "Los alquenos tienen:",
            en: "Alkenes have:",
          },
          options: [
            {
              es: "Al menos un doble enlace C=C, fórmula $C_nH_{2n}$",
              en: "At least one C=C double bond, formula $C_nH_{2n}$",
            },
            { es: "Solo enlaces simples", en: "Only single bonds" },
            { es: "Triples enlaces", en: "Triple bonds" },
            { es: "No contienen carbono", en: "Don't contain carbon" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Alquenos: insaturados, ≥1 doble enlace C=C (sp²). Fórmula CₙH₂ₙ. Geometría planar en doble enlace. Ejemplos: eteno C₂H₄, propeno C₃H₆. Terminación: -eno.",
            en: "Alkenes: unsaturated, ≥1 double C=C bond (sp²). Formula CₙH₂ₙ. Planar geometry at double bond. Examples: ethene C₂H₄, propene C₃H₆. Ending: -ene.",
          },
          difficulty: 1,
        },
        {
          id: "qui_qc_06",
          type: "true-false",
          prompt: {
            es: "Los alquinos tienen triple enlace C≡C con hibridación $sp$ y geometría lineal (180°), con fórmula general $C_nH_{2n-2}$.",
            en: "Alkynes have C≡C triple bond with $sp$ hybridization and linear geometry (180°), with general formula $C_nH_{2n-2}$.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Alquinos: ≥1 triple enlace C≡C (sp). Geometría lineal (180°). Fórmula CₙH₂ₙ₋₂. Ejemplos: etino/acetileno C₂H₂, propino C₃H₄. Terminación: -ino.",
            en: "True. Alkynes: ≥1 triple C≡C bond (sp). Linear geometry (180°). Formula CₙH₂ₙ₋₂. Examples: ethyne/acetylene C₂H₂, propyne C₃H₄. Ending: -yne.",
          },
          difficulty: 2,
        },
        {
          id: "qui_qc_07",
          type: "fill-blank",
          prompt: {
            es: "Los hidrocarburos _______ contienen anillos de benceno (C₆H₆) con dobles enlaces conjugados.",
            en: "_______ hydrocarbons contain benzene rings (C₆H₆) with conjugated double bonds.",
          },
          correctAnswer: "aromáticos",
          explanation: {
            es: "Aromáticos: contienen anillo benceno (C₆H₆). Estructura de resonancia, estabilidad por deslocalización electrónica. Ejemplos: tolueno C₆H₅CH₃, naftaleno C₁₀H₈. Fórmula Kekulé: hexágono con dobles enlaces alternados.",
            en: "Aromatic: contain benzene ring (C₆H₆). Resonance structure, stability by electron delocalization. Examples: toluene C₆H₅CH₃, naphthalene C₁₀H₈. Kekulé formula: hexagon with alternating double bonds.",
          },
          difficulty: 2,
        },
        {
          id: "qui_qc_08",
          type: "multiple-choice",
          prompt: {
            es: "Los hidrocarburos cíclicos:",
            en: "Cyclic hydrocarbons:",
          },
          options: [
            {
              es: "Tienen átomos de carbono formando anillos o ciclos",
              en: "Have carbon atoms forming rings or cycles",
            },
            { es: "Siempre son lineales", en: "Are always linear" },
            { es: "No existen", en: "Don't exist" },
            { es: "Solo tienen 2 carbonos", en: "Only have 2 carbons" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Cíclicos: C forman anillos cerrados. Cicloalcanos: CₙH₂ₙ (ciclopropano C₃H₆, ciclohexano C₆H₁₂). Cicloalquenos: tienen dobles enlaces en anillo. Pueden ser saturados o insaturados.",
            en: "Cyclic: C form closed rings. Cycloalkanes: CₙH₂ₙ (cyclopropane C₃H₆, cyclohexane C₆H₁₂). Cycloalkenes: have double bonds in ring. Can be saturated or unsaturated.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "carbono-grupos-funcionales",
      topicId: "quimica-carbono",
      order: 2,
      title: {
        es: "Grupos Funcionales",
        en: "Functional Groups",
      },
      description: {
        es: "Clasificación por grupos funcionales característicos",
        en: "Classification by characteristic functional groups",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "qui_qc_09",
          type: "multiple-choice",
          prompt: {
            es: "Los alcoholes se caracterizan por tener:",
            en: "Alcohols are characterized by having:",
          },
          options: [
            {
              es: "Grupo hidroxilo (-OH) unido a carbono saturado",
              en: "Hydroxyl group (-OH) attached to saturated carbon",
            },
            { es: "Grupo carbonilo (C=O)", en: "Carbonyl group (C=O)" },
            { es: "Grupo carboxilo (-COOH)", en: "Carboxyl group (-COOH)" },
            { es: "Doble enlace C=C", en: "Double bond C=C" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Alcoholes: -OH unido a C saturado (sp³). Fórmula R-OH. Ejemplos: metanol CH₃OH, etanol C₂H₅OH. Primarios (1°), secundarios (2°), terciarios (3°). Polar, soluble en agua.",
            en: "Alcohols: -OH attached to saturated C (sp³). Formula R-OH. Examples: methanol CH₃OH, ethanol C₂H₅OH. Primary (1°), secondary (2°), tertiary (3°). Polar, water-soluble.",
          },
          difficulty: 1,
        },
        {
          id: "qui_qc_10",
          type: "multiple-choice",
          prompt: {
            es: "Los aldehídos contienen el grupo:",
            en: "Aldehydes contain the group:",
          },
          options: [
            { es: "Carbonilo terminal (-CHO)", en: "Terminal carbonyl (-CHO)" },
            { es: "Hidroxilo (-OH)", en: "Hydroxyl (-OH)" },
            { es: "Amino (-NH₂)", en: "Amino (-NH₂)" },
            { es: "Tiol (-SH)", en: "Thiol (-SH)" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Aldehídos: carbonilo C=O en extremo de cadena, -CHO. Fórmula R-CHO. Ejemplos: formaldehído HCHO, acetaldehído CH₃CHO. Oxidación de alcoholes 1°. Terminación: -al.",
            en: "Aldehydes: carbonyl C=O at chain end, -CHO. Formula R-CHO. Examples: formaldehyde HCHO, acetaldehyde CH₃CHO. Oxidation of 1° alcohols. Ending: -al.",
          },
          difficulty: 2,
        },
        {
          id: "qui_qc_11",
          type: "multiple-choice",
          prompt: {
            es: "Las cetonas tienen:",
            en: "Ketones have:",
          },
          options: [
            {
              es: "Carbonilo (C=O) entre dos carbonos (R-CO-R')",
              en: "Carbonyl (C=O) between two carbons (R-CO-R')",
            },
            { es: "Carbonilo terminal", en: "Terminal carbonyl" },
            { es: "Grupo -OH", en: "Group -OH" },
            { es: "Triple enlace", en: "Triple bond" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Cetonas: carbonilo C=O entre 2 C (no en extremo). Fórmula R-CO-R'. Ejemplos: acetona CH₃COCH₃, butanona CH₃COC₂H₅. Oxidación alcoholes 2°. Terminación: -ona.",
            en: "Ketones: carbonyl C=O between 2 C (not at end). Formula R-CO-R'. Examples: acetone CH₃COCH₃, butanone CH₃COC₂H₅. Oxidation 2° alcohols. Ending: -one.",
          },
          difficulty: 2,
        },
        {
          id: "qui_qc_12",
          type: "fill-blank",
          prompt: {
            es: "Los ácidos carboxílicos contienen el grupo funcional _______ (-COOH).",
            en: "Carboxylic acids contain the functional group _______ (-COOH).",
          },
          correctAnswer: "carboxilo",
          explanation: {
            es: "Ácidos carboxílicos: grupo carboxilo -COOH (C=O + -OH). Fórmula R-COOH. Ácidos débiles (liberan H⁺). Ejemplos: ácido acético CH₃COOH, fórmico HCOOH. Terminación: -oico.",
            en: "Carboxylic acids: carboxyl group -COOH (C=O + -OH). Formula R-COOH. Weak acids (release H⁺). Examples: acetic acid CH₃COOH, formic HCOOH. Ending: -oic.",
          },
          difficulty: 1,
        },
        {
          id: "qui_qc_13",
          type: "multiple-choice",
          prompt: {
            es: "Los ésteres se forman por reacción entre:",
            en: "Esters are formed by reaction between:",
          },
          options: [
            {
              es: "Ácido carboxílico + alcohol → éster + agua",
              en: "Carboxylic acid + alcohol → ester + water",
            },
            { es: "Dos alcoholes", en: "Two alcohols" },
            { es: "Dos aldehídos", en: "Two aldehydes" },
            { es: "Alcano + oxígeno", en: "Alkane + oxygen" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Ésteres: R-COO-R'. Esterificación: R-COOH + R'-OH → R-COO-R' + H₂O (catalizador H⁺). Aromas frutales. Ejemplo: acetato de etilo CH₃COOC₂H₅. Terminación: -ato de -ilo.",
            en: "Esters: R-COO-R'. Esterification: R-COOH + R'-OH → R-COO-R' + H₂O (catalyst H⁺). Fruity aromas. Example: ethyl acetate CH₃COOC₂H₅. Ending: -ate -yl.",
          },
          difficulty: 2,
        },
        {
          id: "qui_qc_14",
          type: "true-false",
          prompt: {
            es: "Las aminas son derivados del amoníaco (NH₃) donde uno o más hidrógenos son reemplazados por grupos alquilo o arilo.",
            en: "Amines are ammonia (NH₃) derivatives where one or more hydrogens are replaced by alkyl or aryl groups.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Aminas: R-NH₂ (1ª), R₂NH (2ª), R₃N (3ª). Derivadas de NH₃. Bases débiles (aceptan H⁺). Ejemplos: metilamina CH₃NH₂, anilina C₆H₅NH₂. Olor característico (pescado).",
            en: "True. Amines: R-NH₂ (1°), R₂NH (2°), R₃N (3°). Derived from NH₃. Weak bases (accept H⁺). Examples: methylamine CH₃NH₂, aniline C₆H₅NH₂. Characteristic odor (fish).",
          },
          difficulty: 2,
        },
        {
          id: "qui_qc_15",
          type: "multiple-choice",
          prompt: {
            es: "Las amidas contienen:",
            en: "Amides contain:",
          },
          options: [
            {
              es: "Carbonilo (C=O) unido a nitrógeno (R-CO-NH₂)",
              en: "Carbonyl (C=O) attached to nitrogen (R-CO-NH₂)",
            },
            { es: "Solo grupo amino", en: "Only amino group" },
            { es: "Solo grupo carboxilo", en: "Only carboxyl group" },
            { es: "Triple enlace", en: "Triple bond" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Amidas: R-CO-NH₂ (1ª), R-CO-NHR' (2ª), R-CO-NR'R'' (3ª). Carbonilo + nitrógeno. Enlace peptídico en proteínas. Ejemplos: acetamida CH₃CONH₂, urea CO(NH₂)₂. Terminación: -amida.",
            en: "Amides: R-CO-NH₂ (1°), R-CO-NHR' (2°), R-CO-NR'R'' (3°). Carbonyl + nitrogen. Peptide bond in proteins. Examples: acetamide CH₃CONH₂, urea CO(NH₂)₂. Ending: -amide.",
          },
          difficulty: 2,
        },
        {
          id: "qui_qc_16",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál compuesto es un alcohol?",
            en: "Which compound is an alcohol?",
          },
          options: [
            { es: "$CH_3CH_2OH$ (etanol)", en: "$CH_3CH_2OH$ (ethanol)" },
            { es: "$CH_3CHO$ (acetaldehído)", en: "$CH_3CHO$ (acetaldehyde)" },
            {
              es: "$CH_3COOH$ (ácido acético)",
              en: "$CH_3COOH$ (acetic acid)",
            },
            { es: "$CH_3COCH_3$ (acetona)", en: "$CH_3COCH_3$ (acetone)" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "CH₃CH₂OH: etanol (alcohol). CH₃CHO: aldehído. CH₃COOH: ácido carboxílico. CH₃COCH₃: cetona. Identificar grupos funcionales: -OH (alcohol), -CHO (aldehído), -COOH (ácido), -CO- (cetona).",
            en: "CH₃CH₂OH: ethanol (alcohol). CH₃CHO: aldehyde. CH₃COOH: carboxylic acid. CH₃COCH₃: ketone. Identify functional groups: -OH (alcohol), -CHO (aldehyde), -COOH (acid), -CO- (ketone).",
          },
          difficulty: 1,
        },
      ],
    },
    {
      id: "carbono-reacciones-organicas",
      topicId: "quimica-carbono",
      order: 3,
      title: {
        es: "Reacciones Orgánicas e Isomería",
        en: "Organic Reactions and Isomerism",
      },
      description: {
        es: "Tipos de reacciones, polímeros e isómeros",
        en: "Reaction types, polymers and isomers",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "qui_qc_17",
          type: "multiple-choice",
          prompt: {
            es: "Una reacción de sustitución ocurre cuando:",
            en: "A substitution reaction occurs when:",
          },
          options: [
            {
              es: "Un átomo o grupo es reemplazado por otro",
              en: "One atom or group is replaced by another",
            },
            { es: "Se forma un doble enlace", en: "A double bond is formed" },
            { es: "Se rompe un anillo", en: "A ring is broken" },
            { es: "Solo ocurre en gases", en: "Only occurs in gases" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Sustitución: átomo/grupo reemplazado por otro. Común en alcanos. Ejemplo: CH₄ + Cl₂ → CH₃Cl + HCl (halogenación). No cambia grado de saturación. Requiere luz UV o calor.",
            en: "Substitution: atom/group replaced by another. Common in alkanes. Example: CH₄ + Cl₂ → CH₃Cl + HCl (halogenation). Doesn't change saturation degree. Requires UV light or heat.",
          },
          difficulty: 2,
        },
        {
          id: "qui_qc_18",
          type: "multiple-choice",
          prompt: {
            es: "Las reacciones de adición ocurren en:",
            en: "Addition reactions occur in:",
          },
          options: [
            {
              es: "Alquenos y alquinos (compuestos insaturados)",
              en: "Alkenes and alkynes (unsaturated compounds)",
            },
            { es: "Solo alcanos", en: "Only alkanes" },
            { es: "Solo compuestos aromáticos", en: "Only aromatic compounds" },
            { es: "No existen", en: "Don't exist" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Adición: átomos se agregan rompiendo enlaces π (dobles/triples). Ejemplo: C₂H₄ + H₂ → C₂H₆ (hidrogenación), C₂H₄ + Br₂ → C₂H₄Br₂ (halogenación). Insaturado → saturado.",
            en: "Addition: atoms added breaking π bonds (double/triple). Example: C₂H₄ + H₂ → C₂H₆ (hydrogenation), C₂H₄ + Br₂ → C₂H₄Br₂ (halogenation). Unsaturated → saturated.",
          },
          difficulty: 2,
        },
        {
          id: "qui_qc_19",
          type: "true-false",
          prompt: {
            es: "Las reacciones de eliminación forman enlaces dobles o triples removiendo átomos, siendo el proceso inverso a la adición.",
            en: "Elimination reactions form double or triple bonds by removing atoms, being the reverse process of addition.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Eliminación: forma enlace π removiendo átomos/grupos. Inversa a adición. Ejemplo: C₂H₅OH → C₂H₄ + H₂O (deshidratación catalizada H₂SO₄). Alcohol → alqueno.",
            en: "True. Elimination: forms π bond removing atoms/groups. Reverse of addition. Example: C₂H₅OH → C₂H₄ + H₂O (dehydration catalyzed H₂SO₄). Alcohol → alkene.",
          },
          difficulty: 2,
        },
        {
          id: "qui_qc_20",
          type: "multiple-choice",
          prompt: {
            es: "La oxidación de alcoholes primarios produce:",
            en: "Oxidation of primary alcohols produces:",
          },
          options: [
            {
              es: "Primero aldehídos, luego ácidos carboxílicos",
              en: "First aldehydes, then carboxylic acids",
            },
            { es: "Cetonas", en: "Ketones" },
            { es: "Alcanos", en: "Alkanes" },
            { es: "Alquenos", en: "Alkenes" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "1° alcohol → [O] → aldehído → [O] → ácido carboxílico. 2° alcohol → [O] → cetona (no se oxida más). 3° alcohol: resistente a oxidación. Oxidantes: KMnO₄, K₂Cr₂O₇.",
            en: "1° alcohol → [O] → aldehyde → [O] → carboxylic acid. 2° alcohol → [O] → ketone (no further oxidation). 3° alcohol: resistant to oxidation. Oxidants: KMnO₄, K₂Cr₂O₇.",
          },
          difficulty: 2,
        },
        {
          id: "qui_qc_21",
          type: "fill-blank",
          prompt: {
            es: "La _______ es el proceso por el cual muchas moléculas pequeñas (monómeros) se unen para formar moléculas grandes (polímeros).",
            en: "_______ is the process by which many small molecules (monomers) join to form large molecules (polymers).",
          },
          correctAnswer: "polimerización",
          explanation: {
            es: "Polimerización: monómeros → polímero. Adición: sin subproductos (polietileno de etileno). Condensación: con subproductos (nylon, poliésteres). Ejemplos: plásticos, proteínas, ADN.",
            en: "Polymerization: monomers → polymer. Addition: no byproducts (polyethylene from ethylene). Condensation: with byproducts (nylon, polyesters). Examples: plastics, proteins, DNA.",
          },
          difficulty: 2,
        },
        {
          id: "qui_qc_22",
          type: "multiple-choice",
          prompt: {
            es: "Los isómeros son compuestos que:",
            en: "Isomers are compounds that:",
          },
          options: [
            {
              es: "Tienen la misma fórmula molecular pero diferente estructura",
              en: "Have the same molecular formula but different structure",
            },
            {
              es: "Tienen diferente fórmula molecular",
              en: "Have different molecular formula",
            },
            { es: "Son el mismo compuesto", en: "Are the same compound" },
            {
              es: "No existen en química orgánica",
              en: "Don't exist in organic chemistry",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Isómeros: misma fórmula molecular, diferente estructura → diferentes propiedades. Estructurales (diferente conectividad): cadena, posición, función. Estereoisómeros: misma conectividad, diferente orientación espacial.",
            en: "Isomers: same molecular formula, different structure → different properties. Structural (different connectivity): chain, position, function. Stereoisomers: same connectivity, different spatial orientation.",
          },
          difficulty: 2,
        },
        {
          id: "qui_qc_23",
          type: "multiple-choice",
          prompt: {
            es: "Butano ($C_4H_{10}$) tiene dos isómeros:",
            en: "Butane ($C_4H_{10}$) has two isomers:",
          },
          options: [
            {
              es: "n-butano (lineal) e isobutano (2-metilpropano, ramificado)",
              en: "n-butane (linear) and isobutane (2-methylpropane, branched)",
            },
            {
              es: "Solo una estructura posible",
              en: "Only one possible structure",
            },
            { es: "Tres isómeros", en: "Three isomers" },
            { es: "No tiene isómeros", en: "Has no isomers" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "C₄H₁₀ isómeros: n-butano (CH₃-CH₂-CH₂-CH₃, cadena recta) e isobutano ((CH₃)₃CH, ramificado). Misma fórmula, diferente estructura → diferentes puntos de ebullición. Isomería de cadena.",
            en: "C₄H₁₀ isomers: n-butane (CH₃-CH₂-CH₂-CH₃, straight chain) and isobutane ((CH₃)₃CH, branched). Same formula, different structure → different boiling points. Chain isomerism.",
          },
          difficulty: 2,
        },
        {
          id: "qui_qc_24",
          type: "multiple-choice",
          prompt: {
            es: "Los plásticos son:",
            en: "Plastics are:",
          },
          options: [
            {
              es: "Polímeros sintéticos formados por polimerización de monómeros orgánicos",
              en: "Synthetic polymers formed by polymerization of organic monomers",
            },
            { es: "Solo metales", en: "Only metals" },
            { es: "Sustancias naturales", en: "Natural substances" },
            { es: "Compuestos inorgánicos", en: "Inorganic compounds" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Plásticos: polímeros sintéticos. Ejemplos: polietileno (PE), polipropileno (PP), PVC, PET, poliestireno (PS). Termoplásticos (reciclables) vs termoestables. Problema ambiental: biodegradabilidad lenta.",
            en: "Plastics: synthetic polymers. Examples: polyethylene (PE), polypropylene (PP), PVC, PET, polystyrene (PS). Thermoplastics (recyclable) vs thermosets. Environmental problem: slow biodegradability.",
          },
          difficulty: 1,
        },
      ],
    },
  ],
};
