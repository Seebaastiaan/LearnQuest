import type { Topic } from "@/lib/types";

export const aireTopic: Topic = {
  id: "aire",
  slug: "aire",
  title: {
    es: "Aire",
    en: "Air",
  },
  description: {
    es: "Composición, reacciones redox y contaminación atmosférica",
    en: "Composition, redox reactions and atmospheric pollution",
  },
  icon: "Wind",
  color: "sky",
  bgGradient: "bg-linear-to-br from-sky-500 to-blue-600",
  prerequisites: ["temas-basicos"],
  order: 3,
  lessons: [
    {
      id: "aire-composicion-reacciones",
      topicId: "aire",
      order: 1,
      title: {
        es: "Composición y Reacciones Atmosféricas",
        en: "Composition and Atmospheric Reactions",
      },
      description: {
        es: "Gases del aire y reacciones químicas comunes",
        en: "Air gases and common chemical reactions",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "qui_ai_01",
          type: "multiple-choice",
          prompt: {
            es: "La composición aproximada del aire seco a nivel del mar es:",
            en: "The approximate composition of dry air at sea level is:",
          },
          options: [
            {
              es: "$N_2$ 78%, $O_2$ 21%, Ar 0.9%, $CO_2$ 0.04%",
              en: "$N_2$ 78%, $O_2$ 21%, Ar 0.9%, $CO_2$ 0.04%",
            },
            { es: "$O_2$ 78%, $N_2$ 21%", en: "$O_2$ 78%, $N_2$ 21%" },
            { es: "$CO_2$ 50%, $O_2$ 50%", en: "$CO_2$ 50%, $O_2$ 50%" },
            { es: "Solo $O_2$ 100%", en: "Only $O_2$ 100%" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Aire seco: ~78% N₂ (nitrógeno), ~21% O₂ (oxígeno), ~0.9% Ar (argón), ~0.04% CO₂ (dióxido de carbono), trazas de otros gases. Vapor de agua variable.",
            en: "Dry air: ~78% N₂ (nitrogen), ~21% O₂ (oxygen), ~0.9% Ar (argon), ~0.04% CO₂ (carbon dioxide), traces of other gases. Variable water vapor.",
          },
          difficulty: 1,
        },
        {
          id: "qui_ai_02",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué gas es esencial para la respiración celular?",
            en: "Which gas is essential for cellular respiration?",
          },
          options: [
            { es: "Oxígeno ($O_2$)", en: "Oxygen ($O_2$)" },
            { es: "Nitrógeno ($N_2$)", en: "Nitrogen ($N_2$)" },
            { es: "Argón (Ar)", en: "Argon (Ar)" },
            { es: "Helio (He)", en: "Helium (He)" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "O₂ es vital para respiración aeróbica celular: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energía (ATP). Organismos aeróbicos dependen de O₂.",
            en: "O₂ is vital for cellular aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP). Aerobic organisms depend on O₂.",
          },
          difficulty: 1,
        },
        {
          id: "qui_ai_03",
          type: "multiple-choice",
          prompt: {
            es: "La combustión completa de un hidrocarburo produce:",
            en: "Complete combustion of a hydrocarbon produces:",
          },
          options: [
            { es: "$CO_2$ y $H_2O$", en: "$CO_2$ and $H_2O$" },
            { es: "Solo CO", en: "Only CO" },
            { es: "Solo carbono sólido", en: "Only solid carbon" },
            { es: "$H_2$ y $O_2$", en: "$H_2$ and $O_2$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Combustión completa: hidrocarburo + O₂ → CO₂ + H₂O. Ejemplo: CH₄ + 2O₂ → CO₂ + 2H₂O. Combustión incompleta (poco O₂) produce CO o C.",
            en: "Complete combustion: hydrocarbon + O₂ → CO₂ + H₂O. Example: CH₄ + 2O₂ → CO₂ + 2H₂O. Incomplete combustion (little O₂) produces CO or C.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ai_04",
          type: "true-false",
          prompt: {
            es: "El nitrógeno atmosférico ($N_2$) es altamente reactivo y se combina fácilmente con la mayoría de elementos.",
            en: "Atmospheric nitrogen ($N_2$) is highly reactive and easily combines with most elements.",
          },
          correctAnswer: "false",
          explanation: {
            es: "Falso. N₂ tiene triple enlace muy fuerte (N≡N) → muy estable, poco reactivo a temperatura normal. Requiere mucha energía para romperse (fijación de N₂).",
            en: "False. N₂ has very strong triple bond (N≡N) → very stable, not very reactive at normal temperature. Requires much energy to break (N₂ fixation).",
          },
          difficulty: 2,
        },
        {
          id: "qui_ai_05",
          type: "multiple-choice",
          prompt: {
            es: "Una reacción de oxidación implica:",
            en: "An oxidation reaction implies:",
          },
          options: [
            { es: "Pérdida de electrones", en: "Loss of electrons" },
            { es: "Ganancia de electrones", en: "Gain of electrons" },
            { es: "Pérdida de protones", en: "Loss of protons" },
            { es: "Ganancia de neutrones", en: "Gain of neutrons" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Oxidación: pérdida de e⁻ (aumenta número de oxidación). Reducción: ganancia de e⁻ (disminuye número de oxidación). Se recuerda: OIL RIG (Oxidation Is Loss, Reduction Is Gain).",
            en: "Oxidation: loss of e⁻ (increases oxidation number). Reduction: gain of e⁻ (decreases oxidation number). Remember: OIL RIG (Oxidation Is Loss, Reduction Is Gain).",
          },
          difficulty: 2,
        },
        {
          id: "qui_ai_06",
          type: "multiple-choice",
          prompt: {
            es: "En la reacción $2Mg + O_2 \\rightarrow 2MgO$, el magnesio:",
            en: "In the reaction $2Mg + O_2 \\rightarrow 2MgO$, magnesium:",
          },
          options: [
            {
              es: "Se oxida (pierde electrones)",
              en: "Is oxidized (loses electrons)",
            },
            {
              es: "Se reduce (gana electrones)",
              en: "Is reduced (gains electrons)",
            },
            { es: "No cambia", en: "Doesn't change" },
            { es: "Es un agente oxidante", en: "Is an oxidizing agent" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Mg (0) → Mg²⁺ (en MgO): pierde 2 e⁻ → se oxida. O₂ (0) → O²⁻: gana e⁻ → se reduce. Mg es agente reductor, O₂ es agente oxidante.",
            en: "Mg (0) → Mg²⁺ (in MgO): loses 2 e⁻ → is oxidized. O₂ (0) → O²⁻: gains e⁻ → is reduced. Mg is reducing agent, O₂ is oxidizing agent.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ai_07",
          type: "fill-blank",
          prompt: {
            es: "El proceso por el cual plantas y bacterias convierten $N_2$ atmosférico en compuestos nitrogenados útiles se llama _______.",
            en: "The process by which plants and bacteria convert atmospheric $N_2$ into useful nitrogen compounds is called _______.",
          },
          correctAnswer: "fijación de nitrógeno",
          explanation: {
            es: "Fijación de nitrógeno: N₂ → NH₃ (amoníaco) o NO₃⁻ (nitratos). Realizada por bacterias (Rhizobium en leguminosas), descargas eléctricas, proceso Haber industrial.",
            en: "Nitrogen fixation: N₂ → NH₃ (ammonia) or NO₃⁻ (nitrates). Performed by bacteria (Rhizobium in legumes), lightning, industrial Haber process.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ai_08",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál es el principal producto de la fotosíntesis?",
            en: "What is the main product of photosynthesis?",
          },
          options: [
            {
              es: "Glucosa ($C_6H_{12}O_6$) y oxígeno ($O_2$)",
              en: "Glucose ($C_6H_{12}O_6$) and oxygen ($O_2$)",
            },
            {
              es: "Dióxido de carbono ($CO_2$)",
              en: "Carbon dioxide ($CO_2$)",
            },
            { es: "Metano ($CH_4$)", en: "Methane ($CH_4$)" },
            { es: "Nitrógeno ($N_2$)", en: "Nitrogen ($N_2$)" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Fotosíntesis: 6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂. Plantas usan luz solar para convertir CO₂ y H₂O en glucosa, liberando O₂.",
            en: "Photosynthesis: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. Plants use sunlight to convert CO₂ and H₂O into glucose, releasing O₂.",
          },
          difficulty: 1,
        },
      ],
    },
    {
      id: "aire-redox-ciclos",
      topicId: "aire",
      order: 2,
      title: {
        es: "Reacciones Redox y Ciclos Biogeoquímicos",
        en: "Redox Reactions and Biogeochemical Cycles",
      },
      description: {
        es: "Oxidación-reducción, números de oxidación y ciclos",
        en: "Oxidation-reduction, oxidation numbers and cycles",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "qui_ai_09",
          type: "multiple-choice",
          prompt: {
            es: "El número de oxidación del oxígeno en $H_2O$ es:",
            en: "The oxidation number of oxygen in $H_2O$ is:",
          },
          options: [
            { es: "−2", en: "−2" },
            { es: "+2", en: "+2" },
            { es: "0", en: "0" },
            { es: "−1", en: "−1" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Reglas de número de oxidación: O generalmente es −2 (excepto en peróxidos H₂O₂: −1). En H₂O: H es +1, O es −2. Suma = 2(+1) + (−2) = 0.",
            en: "Oxidation number rules: O is generally −2 (except in peroxides H₂O₂: −1). In H₂O: H is +1, O is −2. Sum = 2(+1) + (−2) = 0.",
          },
          difficulty: 1,
        },
        {
          id: "qui_ai_10",
          type: "multiple-choice",
          prompt: {
            es: "En la reacción $Zn + CuSO_4 \\rightarrow ZnSO_4 + Cu$, el agente reductor es:",
            en: "In the reaction $Zn + CuSO_4 \\rightarrow ZnSO_4 + Cu$, the reducing agent is:",
          },
          options: [
            { es: "Zn (zinc)", en: "Zn (zinc)" },
            { es: "Cu²⁺ (cobre)", en: "Cu²⁺ (copper)" },
            { es: "$SO_4^{2-}$ (sulfato)", en: "$SO_4^{2-}$ (sulfate)" },
            { es: "No hay agente reductor", en: "There's no reducing agent" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Zn (0) → Zn²⁺: se oxida (pierde e⁻) → es agente reductor. Cu²⁺ → Cu (0): se reduce (gana e⁻) → es agente oxidante. Zn reduce al Cu²⁺.",
            en: "Zn (0) → Zn²⁺: is oxidized (loses e⁻) → is reducing agent. Cu²⁺ → Cu (0): is reduced (gains e⁻) → is oxidizing agent. Zn reduces Cu²⁺.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ai_11",
          type: "true-false",
          prompt: {
            es: "En una reacción redox, oxidación y reducción ocurren siempre simultáneamente.",
            en: "In a redox reaction, oxidation and reduction always occur simultaneously.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Los electrones no se crean ni destruyen. Si una sustancia se oxida (pierde e⁻), otra debe reducirse (gana esos e⁻). Son procesos acoplados.",
            en: "True. Electrons are neither created nor destroyed. If one substance is oxidized (loses e⁻), another must be reduced (gains those e⁻). They're coupled processes.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ai_12",
          type: "multiple-choice",
          prompt: {
            es: "Para balancear la ecuación redox en medio ácido se usa:",
            en: "To balance redox equation in acidic medium, use:",
          },
          options: [
            {
              es: "Método de ion-electrón (semirreacciones)",
              en: "Ion-electron method (half-reactions)",
            },
            { es: "Solo coeficientes al azar", en: "Only random coefficients" },
            { es: "No se puede balancear", en: "Cannot be balanced" },
            { es: "Solo observando colores", en: "Only by observing colors" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Método ion-electrón: 1) Semirreacciones de oxidación y reducción por separado, 2) Balancear átomos y cargas con H⁺/OH⁻ y e⁻, 3) Igualar e⁻ y sumar.",
            en: "Ion-electron method: 1) Separate oxidation and reduction half-reactions, 2) Balance atoms and charges with H⁺/OH⁻ and e⁻, 3) Equalize e⁻ and add.",
          },
          difficulty: 3,
        },
        {
          id: "qui_ai_13",
          type: "multiple-choice",
          prompt: {
            es: "El ciclo del oxígeno incluye:",
            en: "The oxygen cycle includes:",
          },
          options: [
            {
              es: "Fotosíntesis (produce $O_2$) y respiración (consume $O_2$)",
              en: "Photosynthesis (produces $O_2$) and respiration (consumes $O_2$)",
            },
            { es: "Solo evaporación", en: "Only evaporation" },
            { es: "Solo precipitación", en: "Only precipitation" },
            {
              es: "No existe ciclo del oxígeno",
              en: "Oxygen cycle doesn't exist",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Ciclo O₂: Fotosíntesis (plantas) libera O₂, respiración (animales/plantas) consume O₂. Combustión y descomposición también consumen O₂. Balance dinámico.",
            en: "O₂ cycle: Photosynthesis (plants) releases O₂, respiration (animals/plants) consumes O₂. Combustion and decomposition also consume O₂. Dynamic balance.",
          },
          difficulty: 1,
        },
        {
          id: "qui_ai_14",
          type: "fill-blank",
          prompt: {
            es: "El ciclo del _______ incluye fijación atmosférica, nitrificación, asimilación y desnitrificación.",
            en: "The _______ cycle includes atmospheric fixation, nitrification, assimilation and denitrification.",
          },
          correctAnswer: "nitrógeno",
          explanation: {
            es: "Ciclo del nitrógeno: 1) Fijación (N₂ → NH₃), 2) Nitrificación (NH₃ → NO₂⁻ → NO₃⁻), 3) Asimilación (plantas usan NO₃⁻), 4) Desnitrificación (NO₃⁻ → N₂).",
            en: "Nitrogen cycle: 1) Fixation (N₂ → NH₃), 2) Nitrification (NH₃ → NO₂⁻ → NO₃⁻), 3) Assimilation (plants use NO₃⁻), 4) Denitrification (NO₃⁻ → N₂).",
          },
          difficulty: 2,
        },
        {
          id: "qui_ai_15",
          type: "multiple-choice",
          prompt: {
            es: "El ciclo del carbono involucra:",
            en: "The carbon cycle involves:",
          },
          options: [
            {
              es: "Fotosíntesis, respiración, combustión, descomposición",
              en: "Photosynthesis, respiration, combustion, decomposition",
            },
            { es: "Solo formación de rocas", en: "Only rock formation" },
            { es: "Solo erupciones volcánicas", en: "Only volcanic eruptions" },
            {
              es: "No involucra la atmósfera",
              en: "Doesn't involve atmosphere",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Ciclo del C: Fotosíntesis fija CO₂ atmosférico en biomasa. Respiración/combustión/descomposición liberan CO₂. También: océanos absorben CO₂, rocas carbonatadas.",
            en: "C cycle: Photosynthesis fixes atmospheric CO₂ into biomass. Respiration/combustion/decomposition release CO₂. Also: oceans absorb CO₂, carbonate rocks.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ai_16",
          type: "multiple-choice",
          prompt: {
            es: "La corrosión del hierro ($Fe$) es un ejemplo de:",
            en: "Iron ($Fe$) corrosion is an example of:",
          },
          options: [
            {
              es: "Oxidación (reacción redox con $O_2$ y humedad)",
              en: "Oxidation (redox reaction with $O_2$ and moisture)",
            },
            { es: "Cristalización", en: "Crystallization" },
            { es: "Fusión", en: "Melting" },
            { es: "Sublimación", en: "Sublimation" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Herrumbre: 4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃ → 2Fe₂O₃·H₂O (óxido férrico hidratado). Fe se oxida (pierde e⁻), O₂ se reduce. Prevención: pintura, galvanizado.",
            en: "Rust: 4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃ → 2Fe₂O₃·H₂O (hydrated ferric oxide). Fe is oxidized (loses e⁻), O₂ is reduced. Prevention: paint, galvanizing.",
          },
          difficulty: 1,
        },
      ],
    },
    {
      id: "aire-contaminacion-atmosferica",
      topicId: "aire",
      order: 3,
      title: {
        es: "Contaminación Atmosférica y Problemas Ambientales",
        en: "Atmospheric Pollution and Environmental Problems",
      },
      description: {
        es: "Contaminantes, lluvia ácida, ozono y cambio climático",
        en: "Pollutants, acid rain, ozone and climate change",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "qui_ai_17",
          type: "multiple-choice",
          prompt: {
            es: "Los principales contaminantes atmosféricos primarios incluyen:",
            en: "Main primary air pollutants include:",
          },
          options: [
            {
              es: "$CO$, $SO_2$, $NO_x$, partículas, hidrocarburos",
              en: "$CO$, $SO_2$, $NO_x$, particles, hydrocarbons",
            },
            { es: "Solo $O_2$ puro", en: "Only pure $O_2$" },
            { es: "Solo vapor de agua", en: "Only water vapor" },
            { es: "Solo $N_2$", en: "Only $N_2$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Contaminantes primarios: emitidos directamente (CO, SO₂, NOₓ, partículas PM2.5/PM10, hidrocarburos). Secundarios: formados en atmósfera (O₃ troposférico, H₂SO₄, HNO₃).",
            en: "Primary pollutants: directly emitted (CO, SO₂, NOₓ, particles PM2.5/PM10, hydrocarbons). Secondary: formed in atmosphere (tropospheric O₃, H₂SO₄, HNO₃).",
          },
          difficulty: 1,
        },
        {
          id: "qui_ai_18",
          type: "multiple-choice",
          prompt: {
            es: "La lluvia ácida se forma principalmente por:",
            en: "Acid rain is mainly formed by:",
          },
          options: [
            {
              es: "Reacción de $SO_2$ y $NO_x$ con agua atmosférica",
              en: "Reaction of $SO_2$ and $NO_x$ with atmospheric water",
            },
            { es: "Evaporación de océanos", en: "Ocean evaporation" },
            { es: "Fotosíntesis", en: "Photosynthesis" },
            { es: "Respiración animal", en: "Animal respiration" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "SO₂ + H₂O → H₂SO₃ → H₂SO₄ (ácido sulfúrico). 2NO₂ + H₂O → HNO₃ + HNO₂ (ácidos nítricos). pH lluvia ácida < 5.6. Daña ecosistemas, edificios.",
            en: "SO₂ + H₂O → H₂SO₃ → H₂SO₄ (sulfuric acid). 2NO₂ + H₂O → HNO₃ + HNO₂ (nitric acids). Acid rain pH < 5.6. Damages ecosystems, buildings.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ai_19",
          type: "true-false",
          prompt: {
            es: "El ozono ($O_3$) en la estratosfera es beneficioso porque filtra radiación UV, pero en la troposfera es un contaminante dañino.",
            en: "Ozone ($O_3$) in the stratosphere is beneficial because it filters UV radiation, but in the troposphere it's a harmful pollutant.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. O₃ estratosférico (capa de ozono 15-35 km): protege de UV-B. O₃ troposférico (nivel suelo): irritante respiratorio, daña plantas, componente del smog.",
            en: "True. Stratospheric O₃ (ozone layer 15-35 km): protects from UV-B. Tropospheric O₃ (ground level): respiratory irritant, damages plants, smog component.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ai_20",
          type: "multiple-choice",
          prompt: {
            es: "Los clorofluorocarbonos (CFC) dañan la capa de ozono porque:",
            en: "Chlorofluorocarbons (CFCs) damage the ozone layer because:",
          },
          options: [
            {
              es: "Liberan cloro que cataliza la destrucción de $O_3$",
              en: "Release chlorine that catalyzes $O_3$ destruction",
            },
            { es: "Absorben luz visible", en: "Absorb visible light" },
            { es: "Son muy pesados", en: "Are very heavy" },
            { es: "No afectan al ozono", en: "Don't affect ozone" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "UV rompe CFC liberando Cl: CFCl₃ → CFCl₂ + Cl. Cl cataliza: Cl + O₃ → ClO + O₂, ClO + O → Cl + O₂. Un átomo Cl destruye miles de O₃. Protocolo Montreal prohibió CFC.",
            en: "UV breaks CFC releasing Cl: CFCl₃ → CFCl₂ + Cl. Cl catalyzes: Cl + O₃ → ClO + O₂, ClO + O → Cl + O₂. One Cl atom destroys thousands O₃. Montreal Protocol banned CFCs.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ai_21",
          type: "fill-blank",
          prompt: {
            es: "El efecto _______ es el calentamiento de la atmósfera por gases como $CO_2$, $CH_4$ y vapor de agua que atrapan radiación infrarroja.",
            en: "The _______ effect is the warming of the atmosphere by gases like $CO_2$, $CH_4$ and water vapor that trap infrared radiation.",
          },
          correctAnswer: "invernadero",
          explanation: {
            es: "Efecto invernadero natural: necesario para vida (sin él, Tierra −18°C). Gases invernadero (CO₂, CH₄, N₂O, vapor H₂O) absorben IR. Problema: exceso por actividad humana → calentamiento global.",
            en: "Natural greenhouse effect: necessary for life (without it, Earth −18°C). Greenhouse gases (CO₂, CH₄, N₂O, H₂O vapor) absorb IR. Problem: excess from human activity → global warming.",
          },
          difficulty: 1,
        },
        {
          id: "qui_ai_22",
          type: "multiple-choice",
          prompt: {
            es: "Las principales fuentes antropogénicas de $CO_2$ son:",
            en: "The main anthropogenic sources of $CO_2$ are:",
          },
          options: [
            {
              es: "Combustión de combustibles fósiles y deforestación",
              en: "Fossil fuel combustion and deforestation",
            },
            { es: "Solo respiración humana", en: "Only human breathing" },
            { es: "Solo volcanes", en: "Only volcanoes" },
            { es: "Fotosíntesis", en: "Photosynthesis" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Emisiones CO₂: combustión carbón/petróleo/gas (72%), deforestación (reduce sumideros de CO₂), industria, transporte. Concentración CO₂: ~280 ppm (preindustrial) → ~420 ppm (2024).",
            en: "CO₂ emissions: coal/oil/gas combustion (72%), deforestation (reduces CO₂ sinks), industry, transport. CO₂ concentration: ~280 ppm (preindustrial) → ~420 ppm (2024).",
          },
          difficulty: 1,
        },
        {
          id: "qui_ai_23",
          type: "multiple-choice",
          prompt: {
            es: "El smog fotoquímico se forma por:",
            en: "Photochemical smog is formed by:",
          },
          options: [
            {
              es: "Reacción de $NO_x$ e hidrocarburos con luz solar",
              en: "Reaction of $NO_x$ and hydrocarbons with sunlight",
            },
            { es: "Solo humo de cigarrillos", en: "Only cigarette smoke" },
            { es: "Condensación de agua pura", en: "Pure water condensation" },
            {
              es: "Emisiones naturales de bosques",
              en: "Natural forest emissions",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Smog fotoquímico: NOₓ + hidrocarburos + luz solar → O₃, PAN (peroxiacetilnitratos), aldehídos. Común en ciudades soleadas con tráfico. Irritante, reduce visibilidad.",
            en: "Photochemical smog: NOₓ + hydrocarbons + sunlight → O₃, PAN (peroxyacetyl nitrates), aldehydes. Common in sunny cities with traffic. Irritant, reduces visibility.",
          },
          difficulty: 2,
        },
        {
          id: "qui_ai_24",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál medida NO ayuda a reducir la contaminación del aire?",
            en: "Which measure does NOT help reduce air pollution?",
          },
          options: [
            {
              es: "Aumentar uso de combustibles fósiles",
              en: "Increase fossil fuel use",
            },
            { es: "Usar transporte público", en: "Use public transport" },
            {
              es: "Energías renovables (solar, eólica)",
              en: "Renewable energies (solar, wind)",
            },
            { es: "Reforestar áreas urbanas", en: "Reforest urban areas" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Medidas efectivas: transporte público/bici, energías limpias, eficiencia energética, reforestación, filtros industriales, normas emisiones. Aumentar combustibles fósiles EMPEORA contaminación.",
            en: "Effective measures: public transport/bike, clean energies, energy efficiency, reforestation, industrial filters, emission standards. Increasing fossil fuels WORSENS pollution.",
          },
          difficulty: 1,
        },
      ],
    },
  ],
};
