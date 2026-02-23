import type { Topic } from "@/lib/types";

export const opticaTopic: Topic = {
  id: "optica",
  slug: "optica",
  title: {
    es: "Óptica",
    en: "Optics",
  },
  description: {
    es: "Luz, reflexión, refracción y lentes",
    en: "Light, reflection, refraction and lenses",
  },
  icon: "Eye",
  color: "yellow",
  bgGradient: "bg-linear-to-br from-yellow-500 to-amber-600",
  prerequisites: ["ondas"],
  order: 8,
  lessons: [
    {
      id: "optica-reflexion-refraccion",
      topicId: "optica",
      order: 1,
      title: {
        es: "Reflexión y Refracción de la Luz",
        en: "Light Reflection and Refraction",
      },
      description: {
        es: "Leyes de reflexión y refracción",
        en: "Laws of reflection and refraction",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "fis_opt_01",
          type: "multiple-choice",
          prompt: {
            es: "La Ley de Reflexión establece que:",
            en: "The Law of Reflection states that:",
          },
          options: [
            {
              es: "El ángulo de incidencia es igual al ángulo de reflexión",
              en: "The angle of incidence equals the angle of reflection",
            },
            {
              es: "El ángulo de incidencia es mayor que el de reflexión",
              en: "The angle of incidence is greater than reflection",
            },
            {
              es: "No existe ángulo de reflexión",
              en: "There is no angle of reflection",
            },
            {
              es: "La luz se absorbe completamente",
              en: "Light is completely absorbed",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Ley de reflexión: $\\theta_i = \\theta_r$. Los ángulos se miden respecto a la normal (perpendicular) a la superficie.",
            en: "Law of reflection: $\\theta_i = \\theta_r$. Angles are measured relative to the normal (perpendicular) to the surface.",
          },
          difficulty: 1,
        },
        {
          id: "fis_opt_02",
          type: "true-false",
          prompt: {
            es: "En la reflexión especular, los rayos paralelos incidentes se reflejan paralelos, mientras que en la reflexión difusa se dispersan.",
            en: "In specular reflection, parallel incident rays reflect parallel, while in diffuse reflection they scatter.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Reflexión especular ocurre en superficies lisas (espejo), difusa en superficies rugosas (papel). Ambas cumplen $\\theta_i = \\theta_r$ localmente.",
            en: "True. Specular reflection occurs on smooth surfaces (mirror), diffuse on rough surfaces (paper). Both follow $\\theta_i = \\theta_r$ locally.",
          },
          difficulty: 2,
        },
        {
          id: "fis_opt_03",
          type: "multiple-choice",
          prompt: {
            es: "El índice de refracción ($n$) de un medio se define como:",
            en: "The refractive index ($n$) of a medium is defined as:",
          },
          options: [
            {
              es: "$n = \\frac{c}{v}$ (velocidad luz en vacío / velocidad en el medio)",
              en: "$n = \\frac{c}{v}$ (speed of light in vacuum / speed in medium)",
            },
            { es: "$n = \\frac{v}{c}$", en: "$n = \\frac{v}{c}$" },
            { es: "$n = \\rho gh$", en: "$n = \\rho gh$" },
            { es: "$n = f\\lambda$", en: "$n = f\\lambda$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El índice de refracción: $n = \\frac{c}{v}$, donde $c \\approx 3 \\times 10^8$ m/s es la velocidad en el vacío. Para aire $n \\approx 1$, agua $n \\approx 1.33$, vidrio $n \\approx 1.5$.",
            en: "Refractive index: $n = \\frac{c}{v}$, where $c \\approx 3 \\times 10^8$ m/s is velocity in vacuum. For air $n \\approx 1$, water $n \\approx 1.33$, glass $n \\approx 1.5$.",
          },
          difficulty: 1,
        },
        {
          id: "fis_opt_04",
          type: "multiple-choice",
          prompt: {
            es: "La Ley de Snell de la refracción es:",
            en: "Snell's Law of refraction is:",
          },
          options: [
            {
              es: "$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$",
              en: "$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$",
            },
            { es: "$\\theta_1 = \\theta_2$", en: "$\\theta_1 = \\theta_2$" },
            { es: "$n_1 + n_2 = constante$", en: "$n_1 + n_2 = constant$" },
            { es: "$v_1 = v_2$", en: "$v_1 = v_2$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Ley de Snell: $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$. Describe cómo la luz cambia de dirección al pasar entre medios con diferente índice de refracción.",
            en: "Snell's Law: $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$. Describes how light changes direction when passing between media with different refractive index.",
          },
          difficulty: 1,
        },
        {
          id: "fis_opt_05",
          type: "multiple-choice",
          prompt: {
            es: "Cuando la luz pasa de un medio menos denso a uno más denso (ej: aire → agua):",
            en: "When light passes from a less dense to a more dense medium (e.g., air → water):",
          },
          options: [
            { es: "Se acerca a la normal", en: "It bends toward the normal" },
            {
              es: "Se aleja de la normal",
              en: "It bends away from the normal",
            },
            { es: "No cambia de dirección", en: "It doesn't change direction" },
            { es: "Se refleja totalmente", en: "It reflects totally" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Si $n_2 > n_1$ (más denso), entonces $\\sin\\theta_2 < \\sin\\theta_1$, por tanto $\\theta_2 < \\theta_1$: la luz se dobla hacia la normal.",
            en: "If $n_2 > n_1$ (more dense), then $\\sin\\theta_2 < \\sin\\theta_1$, therefore $\\theta_2 < \\theta_1$: light bends toward the normal.",
          },
          difficulty: 2,
        },
        {
          id: "fis_opt_06",
          type: "multiple-choice",
          prompt: {
            es: "La reflexión total interna ocurre cuando:",
            en: "Total internal reflection occurs when:",
          },
          options: [
            {
              es: "La luz va de un medio más denso a uno menos denso con ángulo mayor al crítico",
              en: "Light goes from denser to less dense medium at angle greater than critical",
            },
            {
              es: "La luz va de aire a agua",
              en: "Light goes from air to water",
            },
            { es: "El ángulo es muy pequeño", en: "The angle is very small" },
            { es: "No hay refracción", en: "There is no refraction" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Reflexión total: cuando $n_1 > n_2$ y $\\theta_1 > \\theta_c$ (ángulo crítico: $\\sin\\theta_c = n_2/n_1$), toda la luz se refleja, no hay refracción.",
            en: "Total reflection: when $n_1 > n_2$ and $\\theta_1 > \\theta_c$ (critical angle: $\\sin\\theta_c = n_2/n_1$), all light reflects, no refraction.",
          },
          difficulty: 3,
        },
        {
          id: "fis_opt_07",
          type: "fill-blank",
          prompt: {
            es: "Las fibras ópticas funcionan mediante el principio de _______ total interna.",
            en: "Optical fibers work through the principle of total internal _______.",
          },
          correctAnswer: "reflexión",
          explanation: {
            es: "Las fibras ópticas guían luz mediante reflexiones totales internas sucesivas. La luz viaja por el núcleo sin escapar al revestimiento.",
            en: "Optical fibers guide light through successive total internal reflections. Light travels through the core without escaping to the cladding.",
          },
          difficulty: 2,
        },
        {
          id: "fis_opt_08",
          type: "multiple-choice",
          prompt: {
            es: "¿Por qué un objeto sumergido en agua parece estar más cerca de la superficie de lo que realmente está?",
            en: "Why does a submerged object appear closer to the surface than it really is?",
          },
          options: [
            {
              es: "Por la refracción de la luz al salir del agua",
              en: "Due to light refraction when exiting water",
            },
            {
              es: "Por la reflexión en la superficie",
              en: "Due to surface reflection",
            },
            {
              es: "Por el empuje de Arquímedes",
              en: "Due to Archimedes' buoyancy",
            },
            { es: "Por la viscosidad del agua", en: "Due to water viscosity" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La luz del objeto se refracta al pasar de agua (n=1.33) a aire (n=1), alejándose de la normal. Nuestro cerebro interpreta rayos rectos, por eso vemos el objeto más arriba.",
            en: "Light from object refracts when passing from water (n=1.33) to air (n=1), bending away from normal. Our brain interprets straight rays, so we see the object higher.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "optica-espejos-lentes",
      topicId: "optica",
      order: 2,
      title: {
        es: "Espejos y Lentes",
        en: "Mirrors and Lenses",
      },
      description: {
        es: "Formación de imágenes",
        en: "Image formation",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "fis_opt_09",
          type: "multiple-choice",
          prompt: {
            es: "Un espejo plano produce una imagen:",
            en: "A plane mirror produces an image:",
          },
          options: [
            {
              es: "Virtual, derecha, del mismo tamaño",
              en: "Virtual, upright, same size",
            },
            {
              es: "Real, invertida, magnificada",
              en: "Real, inverted, magnified",
            },
            { es: "Real, derecha, reducida", en: "Real, upright, reduced" },
            {
              es: "Virtual, invertida, aumentada",
              en: "Virtual, inverted, enlarged",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Los espejos planos forman imágenes virtuales (detrás del espejo), derechas y del mismo tamaño que el objeto, a igual distancia.",
            en: "Plane mirrors form virtual images (behind mirror), upright and same size as object, at equal distance.",
          },
          difficulty: 1,
        },
        {
          id: "fis_opt_10",
          type: "multiple-choice",
          prompt: {
            es: "Los espejos cóncavos pueden formar imágenes:",
            en: "Concave mirrors can form images:",
          },
          options: [
            {
              es: "Reales o virtuales dependiendo de la posición del objeto",
              en: "Real or virtual depending on object position",
            },
            { es: "Siempre virtuales", en: "Always virtual" },
            { es: "Siempre reales", en: "Always real" },
            { es: "Nunca forman imágenes", en: "Never form images" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Espejos cóncavos (convergentes): si objeto está más allá del foco → imagen real, invertida. Si está entre foco y espejo → imagen virtual, derecha, aumentada.",
            en: "Concave mirrors (converging): if object is beyond focus → real, inverted image. If between focus and mirror → virtual, upright, magnified image.",
          },
          difficulty: 2,
        },
        {
          id: "fis_opt_11",
          type: "multiple-choice",
          prompt: {
            es: "Los espejos convexos siempre forman imágenes:",
            en: "Convex mirrors always form images:",
          },
          options: [
            {
              es: "Virtuales, derechas y reducidas",
              en: "Virtual, upright and reduced",
            },
            {
              es: "Reales, invertidas y aumentadas",
              en: "Real, inverted and magnified",
            },
            {
              es: "Reales, derechas y del mismo tamaño",
              en: "Real, upright and same size",
            },
            {
              es: "Virtuales, invertidas y aumentadas",
              en: "Virtual, inverted and magnified",
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Espejos convexos (divergentes) siempre producen imágenes virtuales, derechas (no invertidas) y más pequeñas. Se usan en retrovisores y vigilancia (mayor campo visual).",
            en: "Convex mirrors (diverging) always produce virtual, upright (not inverted) and smaller images. Used in rear-view mirrors and surveillance (wider field of view).",
          },
          difficulty: 2,
        },
        {
          id: "fis_opt_12",
          type: "true-false",
          prompt: {
            es: "Una lente convergente (convexa) puede formar imágenes reales o virtuales según la posición del objeto.",
            en: "A converging (convex) lens can form real or virtual images depending on object position.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Si el objeto está más allá del foco → imagen real, invertida. Si está entre el foco y la lente → imagen virtual, derecha, aumentada (lupa).",
            en: "True. If object is beyond focus → real, inverted image. If between focus and lens → virtual, upright, magnified image (magnifying glass).",
          },
          difficulty: 2,
        },
        {
          id: "fis_opt_13",
          type: "multiple-choice",
          prompt: {
            es: "Las lentes divergentes (cóncavas) siempre forman imágenes:",
            en: "Diverging (concave) lenses always form images:",
          },
          options: [
            {
              es: "Virtuales, derechas y reducidas",
              en: "Virtual, upright and reduced",
            },
            {
              es: "Reales, invertidas y aumentadas",
              en: "Real, inverted and magnified",
            },
            { es: "Reales y del mismo tamaño", en: "Real and same size" },
            { es: "Virtuales e invertidas", en: "Virtual and inverted" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Lentes divergentes dispersan la luz, solo producen imágenes virtuales, derechas y reducidas. Se usan para corregir miopía.",
            en: "Diverging lenses scatter light, only produce virtual, upright and reduced images. Used to correct myopia.",
          },
          difficulty: 2,
        },
        {
          id: "fis_opt_14",
          type: "multiple-choice",
          prompt: {
            es: "La distancia focal de una lente es:",
            en: "The focal length of a lens is:",
          },
          options: [
            {
              es: "La distancia desde la lente al punto donde convergen rayos paralelos",
              en: "Distance from lens to point where parallel rays converge",
            },
            { es: "El grosor de la lente", en: "The thickness of the lens" },
            { es: "La distancia al objeto", en: "Distance to object" },
            { es: "El diámetro de la lente", en: "The diameter of the lens" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La distancia focal ($f$) es la distancia desde el centro óptico de la lente hasta el foco, donde se concentran rayos paralelos al eje.",
            en: "Focal length ($f$) is distance from optical center of lens to focus, where parallel rays to axis concentrate.",
          },
          difficulty: 1,
        },
        {
          id: "fis_opt_15",
          type: "fill-blank",
          prompt: {
            es: "La ecuación del _______ relaciona distancia objeto, distancia imagen y distancia focal: $\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$.",
            en: "The _______ equation relates object distance, image distance and focal length: $\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$.",
          },
          correctAnswer: "fabricante",
          explanation: {
            es: "La ecuación del fabricante (o de lentes delgadas) permite calcular la posición de la imagen. También aplica a espejos esféricos.",
            en: "The lensmaker's equation (or thin lens equation) allows calculating image position. Also applies to spherical mirrors.",
          },
          difficulty: 3,
        },
        {
          id: "fis_opt_16",
          type: "multiple-choice",
          prompt: {
            es: "Una lupa utiliza una lente convergente con el objeto:",
            en: "A magnifying glass uses a converging lens with the object:",
          },
          options: [
            { es: "Entre el foco y la lente", en: "Between focus and lens" },
            {
              es: "Más allá del doble de la distancia focal",
              en: "Beyond twice the focal length",
            },
            { es: "En el infinito", en: "At infinity" },
            { es: "En el foco exacto", en: "At exact focus" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "Para magnificar (lupa), colocamos el objeto entre $f$ y la lente. Esto produce una imagen virtual, derecha y aumentada del mismo lado que el objeto.",
            en: "To magnify, we place object between $f$ and lens. This produces a virtual, upright and magnified image on same side as object.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "optica-naturaleza-luz",
      topicId: "optica",
      order: 3,
      title: {
        es: "Naturaleza de la Luz",
        en: "Nature of Light",
      },
      description: {
        es: "Dualidad onda-partícula y fenómenos",
        en: "Wave-particle duality and phenomena",
      },
      type: "quiz",
      xpReward: 30,
      questions: [
        {
          id: "fis_opt_17",
          type: "multiple-choice",
          prompt: {
            es: "La luz exhibe:",
            en: "Light exhibits:",
          },
          options: [
            {
              es: "Dualidad onda-partícula (propiedades de onda y partícula)",
              en: "Wave-particle duality (properties of both wave and particle)",
            },
            { es: "Solo propiedades de onda", en: "Only wave properties" },
            {
              es: "Solo propiedades de partícula",
              en: "Only particle properties",
            },
            { es: "Ninguna propiedad física", en: "No physical properties" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La luz tiene naturaleza dual: se comporta como onda (interferencia, difracción) y como partícula/fotón (efecto fotoeléctrico, cuantización de energía).",
            en: "Light has dual nature: behaves as wave (interference, diffraction) and as particle/photon (photoelectric effect, energy quantization).",
          },
          difficulty: 2,
        },
        {
          id: "fis_opt_18",
          type: "multiple-choice",
          prompt: {
            es: "El espectro visible de luz corresponde a longitudes de onda aproximadamente entre:",
            en: "The visible light spectrum corresponds to wavelengths approximately between:",
          },
          options: [
            { es: "400 nm a 700 nm", en: "400 nm to 700 nm" },
            { es: "1 m a 100 m", en: "1 m to 100 m" },
            { es: "1 nm a 10 nm", en: "1 nm to 10 nm" },
            { es: "1 cm a 10 cm", en: "1 cm to 10 cm" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El espectro visible va desde violeta (~400 nm) hasta rojo (~700 nm). Los humanos no vemos infrarrojo ni ultravioleta.",
            en: "Visible spectrum goes from violet (~400 nm) to red (~700 nm). Humans cannot see infrared or ultraviolet.",
          },
          difficulty: 2,
        },
        {
          id: "fis_opt_19",
          type: "order-steps",
          prompt: {
            es: "Ordena los siguientes colores del espectro visible de menor a mayor longitud de onda:",
            en: "Order the following colors of visible spectrum from shortest to longest wavelength:",
          },
          options: [
            { es: "Violeta", en: "Violet" },
            { es: "Azul", en: "Blue" },
            { es: "Verde", en: "Green" },
            { es: "Rojo", en: "Red" },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: "Orden del espectro visible (longitud de onda creciente): Violeta < Azul < Verde < Amarillo < Naranja < Rojo. (ROY G. BIV al revés)",
            en: "Order of visible spectrum (increasing wavelength): Violet < Blue < Green < Yellow < Orange < Red. (ROY G. BIV reversed)",
          },
          difficulty: 1,
        },
        {
          id: "fis_opt_20",
          type: "true-false",
          prompt: {
            es: "La dispersión de la luz blanca en un prisma demuestra que está compuesta por diferentes colores con diferentes longitudes de onda.",
            en: "Dispersion of white light in a prism demonstrates it is composed of different colors with different wavelengths.",
          },
          correctAnswer: "true",
          explanation: {
            es: "Verdadero. Cada color tiene diferente $\\lambda$ y se refracta diferente ($n$ varía con $\\lambda$). El violeta se desvía más, el rojo menos.",
            en: "True. Each color has different $\\lambda$ and refracts differently ($n$ varies with $\\lambda$). Violet deviates most, red least.",
          },
          difficulty: 2,
        },
        {
          id: "fis_opt_21",
          type: "multiple-choice",
          prompt: {
            es: "¿Qué fenómeno explica los colores del arcoíris?",
            en: "What phenomenon explains rainbow colors?",
          },
          options: [
            {
              es: "Refracción y dispersión de luz en gotas de agua",
              en: "Refraction and dispersion of light in water droplets",
            },
            { es: "Reflexión en nubes", en: "Reflection in clouds" },
            {
              es: "Absorción de luz por el aire",
              en: "Light absorption by air",
            },
            { es: "Difracción por polvo", en: "Diffraction by dust" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "El arcoíris resulta de refracción, dispersión (separación de colores) y reflexión interna de luz solar en gotas de lluvia.",
            en: "Rainbow results from refraction, dispersion (color separation) and internal reflection of sunlight in raindrops.",
          },
          difficulty: 2,
        },
        {
          id: "fis_opt_22",
          type: "multiple-choice",
          prompt: {
            es: "La energía de un fotón está dada por:",
            en: "The energy of a photon is given by:",
          },
          options: [
            {
              es: "$E = hf$ (constante de Planck × frecuencia)",
              en: "$E = hf$ (Planck's constant × frequency)",
            },
            { es: "$E = mc^2$", en: "$E = mc^2$" },
            { es: "$E = \\frac{1}{2}mv^2$", en: "$E = \\frac{1}{2}mv^2$" },
            { es: "$E = mgh$", en: "$E = mgh$" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La energía de un fotón: $E = hf = \\frac{hc}{\\lambda}$, donde $h = 6.63 \\times 10^{-34}$ J·s es la constante de Planck. Mayor frecuencia → mayor energía.",
            en: "Photon energy: $E = hf = \\frac{hc}{\\lambda}$, where $h = 6.63 \\times 10^{-34}$ J·s is Planck's constant. Higher frequency → higher energy.",
          },
          difficulty: 3,
        },
        {
          id: "fis_opt_23",
          type: "fill-blank",
          prompt: {
            es: "El _______ fotoeléctrico demuestra que la luz puede comportarse como partícula (fotón).",
            en: "The photoelectric _______ demonstrates that light can behave as a particle (photon).",
          },
          correctAnswer: "efecto",
          explanation: {
            es: "El efecto fotoeléctrico (Einstein, 1905) muestra que luz puede extraer electrones de metales. La energía cinética del electrón depende de la frecuencia de luz, no de intensidad.",
            en: "The photoelectric effect (Einstein, 1905) shows light can eject electrons from metals. Electron kinetic energy depends on light frequency, not intensity.",
          },
          difficulty: 2,
        },
        {
          id: "fis_opt_24",
          type: "multiple-choice",
          prompt: {
            es: "¿Por qué el cielo es azul?",
            en: "Why is the sky blue?",
          },
          options: [
            {
              es: "Porque la luz azul (menor λ) se dispersa más en la atmósfera (dispersión de Rayleigh)",
              en: "Because blue light (shorter λ) scatters more in atmosphere (Rayleigh scattering)",
            },
            {
              es: "Porque el océano refleja su color",
              en: "Because ocean reflects its color",
            },
            {
              es: "Porque la atmósfera absorbe el rojo",
              en: "Because atmosphere absorbs red",
            },
            { es: "Porque el Sol es azul", en: "Because Sun is blue" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "La dispersión de Rayleigh explica el cielo azul: partículas atmosféricas dispersan luz de menor $\\lambda$ (azul/violeta) más que rojo. Al atardecer vemos rojo porque la luz atraviesa más atmósfera.",
            en: "Rayleigh scattering explains blue sky: atmospheric particles scatter shorter $\\lambda$ light (blue/violet) more than red. At sunset we see red because light crosses more atmosphere.",
          },
          difficulty: 3,
        },
      ],
    },
  ],
};
