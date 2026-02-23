import type { Topic } from "@/lib/types";

export const fisicaContemporaneaTopic: Topic = {
  id: "fisica-contemporanea",
  slug: "fisica-contemporanea",
  title: {
    es: "Física Contemporánea",
    en: "Contemporary Physics",
  },
  description: {
    es: "Estructura atómica, física nuclear y energías",
    en: "Atomic structure, nuclear physics and energies",
  },
  icon: "Atom",
  color: "emerald",
  bgGradient: "bg-linear-to-br from-emerald-500 to-green-600",
  prerequisites: [],
  order: 9,
  lessons: [
    {
      id: "fisica-contemporanea-estructura-atomica",
      topicId: "fisica-contemporanea",
      order: 1,
      title: {
        es: "Estructura Atómica",
        en: "Atomic Structure",
      },
      description: {
        es: "Modelos atómicos y cuantización",
        en: "Atomic models and quantization",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "fis_con_01",
          type: "order-steps",
          prompt: {
            es: "Ordena cronológicamente los siguientes modelos atómicos:",
            en: "Order chronologically the following atomic models:",
          },
          options: [
            {
              es: "Modelo de Dalton (esfera sólida)",
              en: "Dalton's model (solid sphere)",
            },
            {
              es: "Modelo de Thomson (pudín con pasas)",
              en: "Thomson's model (plum pudding)",
            },
            {
              es: "Modelo de Rutherford (núcleo + electrones)",
              en: "Rutherford's model (nucleus + electrons)",
            },
            {
              es: "Modelo de Bohr (órbitas cuantizadas)",
              en: "Bohr's model (quantized orbits)",
            },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "Evolución: Dalton (1803) → Thomson (1897) → Rutherford (1911) → Bohr (1913) → Schrödinger (mecánica cuántica, 1926).",
            en: "Evolution: Dalton (1803) → Thomson (1897) → Rutherford (1911) → Bohr (1913) → Schrödinger (quantum mechanics, 1926).",
          },
          difficulty: 2,
        },
        {
          id: "fis_con_02",
          type: "multiple-choice",
          prompt: {
            es: "El átomo está compuesto principalmente por:",
            en: "The atom is composed mainly of:",
          },
          options: [
            {
              es: "Un núcleo (protones + neutrones) y electrones orbitando",
              en: "A nucleus (protons + neutrons) and orbiting electrons",
            },
            { es: "Solo protones", en: "Only protons" },
            { es: "Solo electrones", en: "Only electrons" },
            {
              es: "Energía pura sin partículas",
              en: "Pure energy without particles",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El átomo tiene un núcleo denso con protones (+) y neutrones (0), rodeado por electrones (-). El núcleo concentra >99.9% de la masa en <0.01% del volumen.",
            en: "Atom has dense nucleus with protons (+) and neutrons (0), surrounded by electrons (-). Nucleus concentrates >99.9% mass in <0.01% of volume.",
          },
          difficulty: 1,
        },
        {
          id: "fis_con_03",
          type: "multiple-choice",
          prompt: {
            es: "El número atómico ($Z$) representa:",
            en: "The atomic number ($Z$) represents:",
          },
          options: [
            {
              es: "El número de protones en el núcleo",
              en: "The number of protons in nucleus",
            },
            { es: "El número de neutrones", en: "The number of neutrons" },
            { es: "La masa del átomo", en: "The mass of atom" },
            {
              es: "El número de electrones en la última capa",
              en: "The number of electrons in last shell",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El número atómico $Z$ = número de protones. Define el elemento químico. En átomo neutro, $Z$ = número de electrones. Número másico $A = Z + N$ (neutrones).",
            en: "Atomic number $Z$ = number of protons. Defines chemical element. In neutral atom, $Z$ = number of electrons. Mass number $A = Z + N$ (neutrons).",
          },
          difficulty: 1,
        },
        {
          id: "fis_con_04",
          type: "true-false",
          prompt: {
            es: "Los isótopos son átomos del mismo elemento con diferente número de neutrones.",
            en: "Isotopes are atoms of the same element with different number of neutrons.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Los isótopos tienen mismo $Z$ (mismo elemento) pero diferente $N$ (diferente masa). Ej: Carbono-12 y Carbono-14.",
            en: "True. Isotopes have same $Z$ (same element) but different $N$ (different mass). E.g.: Carbon-12 and Carbon-14.",
          },
          difficulty: 2,
        },
        {
          id: "fis_con_05",
          type: "multiple-choice",
          prompt: {
            es: "El modelo de Bohr propone que:",
            en: "Bohr's model proposes that:",
          },
          options: [
            {
              es: "Los electrones solo pueden ocupar órbitas con energía cuantizada",
              en: "Electrons can only occupy orbits with quantized energy",
            },
            {
              es: "Los electrones pueden tener cualquier energía",
              en: "Electrons can have any energy",
            },
            {
              es: "No existen niveles de energía",
              en: "Energy levels don't exist",
            },
            { es: "El núcleo no existe", en: "Nucleus doesn't exist" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Bohr postuló que los electrones ocupan órbitas discretas con energía $E_n = -\\frac{13.6}{n^2}$ eV (para hidrógeno). Solo pueden absorber/emitir fotones al cambiar de nivel.",
            en: "Bohr postulated electrons occupy discrete orbits with energy $E_n = -\\frac{13.6}{n^2}$ eV (for hydrogen). Can only absorb/emit photons when changing level.",
          },
          difficulty: 2,
        },
        {
          id: "fis_con_06",
          type: "multiple-choice",
          prompt: {
            es: "Cuando un electrón salta de un nivel de mayor a menor energía:",
            en: "When an electron jumps from higher to lower energy level:",
          },
          options: [
            {
              es: "Emite un fotón con energía igual a la diferencia entre niveles",
              en: "It emits a photon with energy equal to level difference",
            },
            { es: "Absorbe un fotón", en: "It absorbs a photon" },
            { es: "No hay cambio de energía", en: "There is no energy change" },
            { es: "El átomo se desintegra", en: "The atom disintegrates" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Al descender de nivel, el electrón emite un fotón: $E_{fotón} = h f = E_{superior} - E_{inferior}$. Al subir, absorbe un fotón de esa energía exacta.",
            en: "When descending level, electron emits photon: $E_{photon} = h f = E_{upper} - E_{lower}$. When ascending, absorbs photon of that exact energy.",
          },
          difficulty: 2,
        },
        {
          id: "fis_con_07",
          type: "fill-blank",
          prompt: {
            es: "El espectro de _______ de un elemento muestra líneas de colores específicos correspondientes a transiciones electrónicas.",
            en: "The _______ spectrum of an element shows lines of specific colors corresponding to electronic transitions.",
          },
          correctAnswer: "emisión",
          explanation: {
            es: "El espectro de emisión (líneas brillantes sobre fondo oscuro) se produce cuando electrones excitados vuelven a niveles inferiores, emitiendo fotones de frecuencia característica del elemento.",
            en: "Emission spectrum (bright lines on dark background) is produced when excited electrons return to lower levels, emitting photons of characteristic frequency of element.",
          },
          difficulty: 1,
        },
        {
          id: "fis_con_08",
          type: "multiple-choice",
          prompt: {
            es: "La mecánica cuántica moderna describe al electrón como:",
            en: "Modern quantum mechanics describes the electron as:",
          },
          options: [
            {
              es: "Una nube de probabilidad (orbital) en vez de órbita definida",
              en: "A probability cloud (orbital) instead of defined orbit",
            },
            {
              es: "Una pelota girando en círculo",
              en: "A ball spinning in circle",
            },
            {
              es: "Una onda estacionaria sin masa",
              en: "A standing wave without mass",
            },
            { es: "Un protón negativo", en: "A negative proton" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Schrödinger y Heisenberg: el electrón se describe mediante función de onda $\\psi$, que da probabilidad de encontrarlo en cierta región (orbital). No tiene trayectoria definida.",
            en: "Schrödinger and Heisenberg: electron described by wave function $\\psi$, giving probability of finding it in certain region (orbital). Has no defined trajectory.",
          },
          difficulty: 3,
        },
      ],
    },
    {
      id: "fisica-contemporanea-fisica-nuclear",
      topicId: "fisica-contemporanea",
      order: 2,
      title: {
        es: "Física Nuclear",
        en: "Nuclear Physics",
      },
      description: {
        es: "Radiactividad, fisión y fusión",
        en: "Radioactivity, fission and fusion",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "fis_con_09",
          type: "multiple-choice",
          prompt: {
            es: "La radiactividad es:",
            en: "Radioactivity is:",
          },
          options: [
            {
              es: "La desintegración espontánea de núcleos inestables emitiendo radiación",
              en: "Spontaneous disintegration of unstable nuclei emitting radiation",
            },
            {
              es: "La absorción de luz por átomos",
              en: "Light absorption by atoms",
            },
            { es: "La formación de moléculas", en: "Molecule formation" },
            { es: "El calentamiento de materiales", en: "Material heating" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La radiactividad es la emisión espontánea de partículas o radiación por núcleos inestables (radioactivos) que buscan estabilidad. Descubierta por Becquerel (1896).",
            en: "Radioactivity is spontaneous emission of particles or radiation by unstable (radioactive) nuclei seeking stability. Discovered by Becquerel (1896).",
          },
          difficulty: 1,
        },
        {
          id: "fis_con_10",
          type: "order-steps",
          prompt: {
            es: "Ordena los siguientes tipos de radiación de menor a mayor poder de penetración:",
            en: "Order the following radiation types from lowest to highest penetration power:",
          },
          options: [
            {
              es: "Alfa (α) - núcleos de helio",
              en: "Alpha (α) - helium nuclei",
            },
            { es: "Beta (β) - electrones", en: "Beta (β) - electrons" },
            {
              es: "Gamma (γ) - fotones de alta energía",
              en: "Gamma (γ) - high energy photons",
            },
          ],
          correctAnswer: "0,1,2",
          explanation: {
            es: "Poder de penetración creciente: α (detenida por papel) < β (detenida por aluminio) < γ (requiere plomo grueso). Pero α es más ionizante.",
            en: "Increasing penetration power: α (stopped by paper) < β (stopped by aluminum) < γ (requires thick lead). But α is more ionizing.",
          },
          difficulty: 2,
        },
        {
          id: "fis_con_11",
          type: "multiple-choice",
          prompt: {
            es: "La vida media ($t_{1/2}$) de un isótopo radioactivo es:",
            en: "The half-life ($t_{1/2}$) of a radioactive isotope is:",
          },
          options: [
            {
              es: "El tiempo en que la mitad de los núcleos se desintegran",
              en: "Time in which half of nuclei disintegrate",
            },
            {
              es: "El tiempo total de existencia del isótopo",
              en: "Total existence time of isotope",
            },
            { es: "La edad del núcleo", en: "Age of nucleus" },
            { es: "El tiempo de formación", en: "Formation time" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La vida media es constante para cada isótopo. Después de $n$ vidas medias, queda $\\left(\\frac{1}{2}\\right)^n$ de la muestra original. Ej: Carbono-14 tiene $t_{1/2} \\approx 5730$ años.",
            en: "Half-life is constant for each isotope. After $n$ half-lives, $\\left(\\frac{1}{2}\\right)^n$ of original sample remains. E.g.: Carbon-14 has $t_{1/2} \\approx 5730$ years.",
          },
          difficulty: 2,
        },
        {
          id: "fis_con_12",
          type: "true-false",
          prompt: {
            es: "La fisión nuclear es la división de un núcleo pesado en núcleos más ligeros, liberando gran cantidad de energía.",
            en: "Nuclear fission is the splitting of a heavy nucleus into lighter nuclei, releasing large amounts of energy.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Fisión: núcleo pesado (Uranio-235, Plutonio-239) + neutrón → núcleos más ligeros + neutrones + energía. Se usa en reactores y bombas atómicas.",
            en: "True. Fission: heavy nucleus (Uranium-235, Plutonium-239) + neutron → lighter nuclei + neutrons + energy. Used in reactors and atomic bombs.",
          },
          difficulty: 1,
        },
        {
          id: "fis_con_13",
          type: "multiple-choice",
          prompt: {
            es: "La fusión nuclear es:",
            en: "Nuclear fusion is:",
          },
          options: [
            {
              es: "La unión de núcleos ligeros para formar uno más pesado, liberando energía",
              en: "Union of light nuclei to form heavier one, releasing energy",
            },
            {
              es: "La división de núcleos pesados",
              en: "Splitting of heavy nuclei",
            },
            { es: "La absorción de neutrones", en: "Neutron absorption" },
            { es: "El decaimiento radiactivo", en: "Radioactive decay" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Fusión: núcleos ligeros (H → He) se unen liberando enorme energía. Ocurre en el Sol (4 H → He + energía). Más energía que fisión, pero requiere temperaturas altísimas.",
            en: "Fusion: light nuclei (H → He) join releasing enormous energy. Occurs in Sun (4 H → He + energy). More energy than fission, but requires extremely high temperatures.",
          },
          difficulty: 2,
        },
        {
          id: "fis_con_14",
          type: "multiple-choice",
          prompt: {
            es: "La equivalencia masa-energía de Einstein es:",
            en: "Einstein's mass-energy equivalence is:",
          },
          options: [
            { es: "$E = mc^2$", en: "$E = mc^2$" },
            { es: "$E = hf$", en: "$E = hf$" },
            { es: "$E = \\frac{1}{2}mv^2$", en: "$E = \\frac{1}{2}mv^2$" },
            { es: "$E = mgh$", en: "$E = mgh$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Einstein: $E = mc^2$ muestra que masa y energía son equivalentes. La pérdida de masa en reacciones nucleares se convierte en energía. $c$ es enorme, por eso poca masa libera mucha energía.",
            en: "Einstein: $E = mc^2$ shows mass and energy are equivalent. Mass loss in nuclear reactions converts to energy. $c$ is huge, so little mass releases much energy.",
          },
          difficulty: 1,
        },
        {
          id: "fis_con_15",
          type: "fill-blank",
          prompt: {
            es: "La reacción en _______ ocurre cuando cada fisión libera neutrones que causan más fisiones, multiplicando el proceso.",
            en: "A _______ reaction occurs when each fission releases neutrons that cause more fissions, multiplying the process.",
          },
          correctAnswer: "cadena",
          explanation: {
            es: "Reacción en cadena: si cada fisión produce ≥1 neutrón que causa nueva fisión, el proceso se automantiene. Controlada en reactores, descontrolada en bombas.",
            en: "Chain reaction: if each fission produces ≥1 neutron causing new fission, process self-sustains. Controlled in reactors, uncontrolled in bombs.",
          },
          difficulty: 2,
        },
        {
          id: "fis_con_16",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué proceso genera la energía del Sol?",
            en: "What process generates Sun's energy?",
          },
          options: [
            {
              es: "Fusión nuclear de hidrógeno en helio",
              en: "Nuclear fusion of hydrogen into helium",
            },
            { es: "Fisión de uranio", en: "Uranium fission" },
            { es: "Combustión química", en: "Chemical combustion" },
            {
              es: "Contracción gravitacional",
              en: "Gravitational contraction",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El Sol fusiona ~600 millones de toneladas de H por segundo en He, convirtiendo ~4 millones de toneladas de masa en energía ($E=mc^2$) cada segundo.",
            en: "Sun fuses ~600 million tons of H per second into He, converting ~4 million tons of mass into energy ($E=mc^2$) every second.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "fisica-contemporanea-energias",
      topicId: "fisica-contemporanea",
      order: 3,
      title: {
        es: "Energías y Aplicaciones",
        en: "Energies and Applications",
      },
      description: {
        es: "Energías renovables y tecnologías",
        en: "Renewable energies and technologies",
      },
      type: "quiz",
      xpReward: 30,
      questions: [
        {
          id: "fis_con_17",
          type: "multiple-choice",
          prompt: {
            es: "¿Cuál de las siguientes NO es una fuente de energía renovable?",
            en: "Which of the following is NOT a renewable energy source?",
          },
          options: [
            {
              es: "Combustibles fósiles (petróleo, carbón, gas)",
              en: "Fossil fuels (oil, coal, gas)",
            },
            { es: "Energía solar", en: "Solar energy" },
            { es: "Energía eólica", en: "Wind energy" },
            { es: "Energía hidroeléctrica", en: "Hydroelectric energy" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Los combustibles fósiles NO son renovables: tardan millones de años en formarse. Renovables: solar, eólica, hidroeléctrica, geotérmica, biomasa, mareomotriz.",
            en: "Fossil fuels are NOT renewable: take millions of years to form. Renewables: solar, wind, hydroelectric, geothermal, biomass, tidal.",
          },
          difficulty: 1,
        },
        {
          id: "fis_con_18",
          type: "multiple-choice",
          prompt: {
            es: "Los paneles solares fotovoltaicos funcionan mediante:",
            en: "Photovoltaic solar panels work through:",
          },
          options: [
            {
              es: "El efecto fotoeléctrico, convirtiendo luz en electricidad",
              en: "Photoelectric effect, converting light into electricity",
            },
            { es: "Calentar agua con el Sol", en: "Heating water with Sun" },
            { es: "Fisión nuclear", en: "Nuclear fission" },
            { es: "Movimiento de turbinas", en: "Turbine movement" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Los paneles fotovoltaicos usan semiconductores (silicio) que al absorber fotones liberan electrones, generando corriente eléctrica directa. Basado en efecto fotoeléctrico.",
            en: "Photovoltaic panels use semiconductors (silicon) that when absorbing photons release electrons, generating direct electric current. Based on photoelectric effect.",
          },
          difficulty: 2,
        },
        {
          id: "fis_con_19",
          type: "true-false",
          prompt: {
            es: "La energía eólica aprovecha el movimiento del viento para hacer girar turbinas que generan electricidad.",
            en: "Wind energy harnesses wind movement to spin turbines that generate electricity.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Los aerogeneradores convierten energía cinética del viento en energía mecánica rotacional, y luego en eléctrica mediante generadores.",
            en: "True. Wind turbines convert kinetic energy of wind into rotational mechanical energy, then into electrical via generators.",
          },
          difficulty: 1,
        },
        {
          id: "fis_con_20",
          type: "multiple-choice",
          prompt: {
            es: "La energía hidroeléctrica aprovecha:",
            en: "Hydroelectric energy harnesses:",
          },
          options: [
            {
              es: "La energía potencial gravitatoria del agua almacenada en presas",
              en: "Gravitational potential energy of water stored in dams",
            },
            {
              es: "La energía química del hidrógeno",
              en: "Chemical energy of hydrogen",
            },
            { es: "La fisión de átomos de agua", en: "Fission of water atoms" },
            { es: "El calor del agua", en: "Heat of water" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Las presas almacenan agua en altura ($E_p = mgh$). Al caer, esa energía potencial se convierte en cinética, haciendo girar turbinas que generan electricidad.",
            en: "Dams store water at height ($E_p = mgh$). When falling, potential energy converts to kinetic, spinning turbines that generate electricity.",
          },
          difficulty: 1,
        },
        {
          id: "fis_con_21",
          type: "multiple-choice",
          prompt: {
            es: "Las celdas de combustible (fuel cells) generan electricidad mediante:",
            en: "Fuel cells generate electricity through:",
          },
          options: [
            {
              es: "Reacción química de hidrógeno con oxígeno (electroquímica)",
              en: "Chemical reaction of hydrogen with oxygen (electrochemical)",
            },
            { es: "Combustión de gasolina", en: "Gasoline combustion" },
            { es: "Fisión nuclear", en: "Nuclear fission" },
            { es: "Fotosíntesis", en: "Photosynthesis" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Las celdas de combustible combinan H₂ y O₂ electroquímicamente, produciendo electricidad, calor y agua (H₂O). No hay combustión, son limpias y eficientes.",
            en: "Fuel cells combine H₂ and O₂ electrochemically, producing electricity, heat and water (H₂O). No combustion, clean and efficient.",
          },
          difficulty: 2,
        },
        {
          id: "fis_con_22",
          type: "multiple-choice",
          prompt: {
            es: "La energía geotérmica aprovecha:",
            en: "Geothermal energy harnesses:",
          },
          options: [
            {
              es: "El calor interno de la Tierra",
              en: "Earth's internal heat",
            },
            { es: "La luz solar", en: "Sunlight" },
            { es: "El viento", en: "Wind" },
            { es: "Las mareas", en: "Tides" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La energía geotérmica usa el calor del interior terrestre (magma, rocas calientes) para generar vapor que mueve turbinas o para calefacción directa.",
            en: "Geothermal energy uses Earth's interior heat (magma, hot rocks) to generate steam that drives turbines or for direct heating.",
          },
          difficulty: 1,
        },
        {
          id: "fis_con_23",
          type: "fill-blank",
          prompt: {
            es: "Las partículas fundamentales del átomo son protones, neutrones y _______.",
            en: "The fundamental particles of the atom are protons, neutrons and _______.",
          },
          correctAnswer: "electrones",
          explanation: {
            es: "Protones (+1.602×10⁻¹⁹ C), neutrones (0), electrones (-1.602×10⁻¹⁹ C). Protones y neutrones están en el núcleo, electrones en orbitales.",
            en: "Protons (+1.602×10⁻¹⁹ C), neutrons (0), electrons (-1.602×10⁻¹⁹ C). Protons and neutrons in nucleus, electrons in orbitals.",
          },
          difficulty: 1,
        },
        {
          id: "fis_con_24",
          type: "multiple-choice",
          prompt: {
            es: "El efecto invernadero es causado principalmente por:",
            en: "Greenhouse effect is mainly caused by:",
          },
          options: [
            {
              es: "Gases que atrapan radiación infrarroja (CO₂, CH₄, vapor de agua)",
              en: "Gases that trap infrared radiation (CO₂, CH₄, water vapor)",
            },
            { es: "La radiación ultravioleta", en: "Ultraviolet radiation" },
            { es: "La fisión nuclear", en: "Nuclear fission" },
            { es: "El viento solar", en: "Solar wind" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Los gases de invernadero absorben radiación infrarroja (calor) emitida por la Tierra, calentando la atmósfera. CO₂ de combustibles fósiles es el principal contribuyente antropogénico.",
            en: "Greenhouse gases absorb infrared radiation (heat) emitted by Earth, warming atmosphere. CO₂ from fossil fuels is main anthropogenic contributor.",
          },
          difficulty: 2,
        },
      ],
    },
  ],
};
