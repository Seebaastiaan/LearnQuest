import type { Topic } from "@/lib/types";

export const mcmMcdTopic: Topic = {
  id: "mcm-mcd",
  slug: "mcm-mcd",
  title: {
    es: "MCM y MCD",
    en: "LCM & GCD",
  },
  description: {
    es: "Mínimo Común Múltiplo y Máximo Común Divisor",
    en: "Least Common Multiple & Greatest Common Divisor",
  },
  icon: "Hash",
  color: "sky",
  bgGradient: "bg-linear-to-br from-sky-500 to-blue-600",
  prerequisites: [],
  order: 1,
  lessons: [
    // LESSON 1: Aprende - Factorización prima y conceptos
    {
      id: "mcm-mcd-learn",
      topicId: "mcm-mcd",
      order: 1,
      title: {
        es: "Factorización prima",
        en: "Prime Factorization",
      },
      description: {
        es: "Aprende a descomponer números en factores primos",
        en: "Learn to decompose numbers into prime factors",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "mcm-01",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\text{¿Cuál es la factorización prima de } 12?`,
            en: String.raw`\text{What is the prime factorization of } 12?`,
          },
          options: [
            { es: String.raw`2^2 \times 3`, en: String.raw`2^2 \times 3` },
            { es: String.raw`2 \times 6`, en: String.raw`2 \times 6` },
            { es: String.raw`3 \times 4`, en: String.raw`3 \times 4` },
            { es: String.raw`2^3`, en: String.raw`2^3` },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`12 = 2 \times 2 \times 3 = 2^2 \times 3. \text{ Dividimos entre primos: } 12 \div 2 = 6, \; 6 \div 2 = 3.`,
            en: String.raw`12 = 2 \times 2 \times 3 = 2^2 \times 3. \text{ We divide by primes: } 12 \div 2 = 6, \; 6 \div 2 = 3.`,
          },
          steps: [
            { es: String.raw`12 \div 2 = 6`, en: String.raw`12 \div 2 = 6` },
            { es: String.raw`6 \div 2 = 3`, en: String.raw`6 \div 2 = 3` },
            { es: String.raw`3 \div 3 = 1`, en: String.raw`3 \div 3 = 1` },
            {
              es: String.raw`\therefore 12 = \textcolor{#22c55e}{2^2 \times 3}`,
              en: String.raw`\therefore 12 = \textcolor{#22c55e}{2^2 \times 3}`,
            },
          ],
          difficulty: 1,
          hints: [
            {
              es: "Divide entre el primo más pequeño (2) hasta que no se pueda, luego sigue con 3.",
              en: "Divide by the smallest prime (2) until you can't, then continue with 3.",
            },
          ],
        },
        {
          id: "mcm-02",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{Factoriza } 18. \text{ Escribe el exponente de 3: } 18 = 2 \times 3^{?}`,
            en: String.raw`\text{Factorize } 18. \text{ Write the exponent of 3: } 18 = 2 \times 3^{?}`,
          },
          correctAnswer: "2",
          explanation: {
            es: String.raw`18 = 2 \times 9 = 2 \times 3^2. \text{ El exponente de 3 es } \textcolor{#22c55e}{2}.`,
            en: String.raw`18 = 2 \times 9 = 2 \times 3^2. \text{ The exponent of 3 is } \textcolor{#22c55e}{2}.`,
          },
          steps: [
            { es: String.raw`18 \div 2 = 9`, en: String.raw`18 \div 2 = 9` },
            { es: String.raw`9 \div 3 = 3`, en: String.raw`9 \div 3 = 3` },
            { es: String.raw`3 \div 3 = 1`, en: String.raw`3 \div 3 = 1` },
            {
              es: String.raw`\therefore 18 = 2 \times 3^{\textcolor{#22c55e}{2}}`,
              en: String.raw`\therefore 18 = 2 \times 3^{\textcolor{#22c55e}{2}}`,
            },
          ],
          difficulty: 1,
        },
        {
          id: "mcm-03",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\text{¿Cuál es la factorización prima de } 60?`,
            en: String.raw`\text{What is the prime factorization of } 60?`,
          },
          options: [
            {
              es: String.raw`2^2 \times 3 \times 5`,
              en: String.raw`2^2 \times 3 \times 5`,
            },
            {
              es: String.raw`2 \times 3 \times 10`,
              en: String.raw`2 \times 3 \times 10`,
            },
            { es: String.raw`4 \times 15`, en: String.raw`4 \times 15` },
            { es: String.raw`2^2 \times 15`, en: String.raw`2^2 \times 15` },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`60 = 2^2 \times 3 \times 5. \text{ Solo usamos factores primos.}`,
            en: String.raw`60 = 2^2 \times 3 \times 5. \text{ We only use prime factors.}`,
          },
          steps: [
            { es: String.raw`60 \div 2 = 30`, en: String.raw`60 \div 2 = 30` },
            { es: String.raw`30 \div 2 = 15`, en: String.raw`30 \div 2 = 15` },
            { es: String.raw`15 \div 3 = 5`, en: String.raw`15 \div 3 = 5` },
            { es: String.raw`5 \div 5 = 1`, en: String.raw`5 \div 5 = 1` },
            {
              es: String.raw`\therefore 60 = \textcolor{#22c55e}{2^2 \times 3 \times 5}`,
              en: String.raw`\therefore 60 = \textcolor{#22c55e}{2^2 \times 3 \times 5}`,
            },
          ],
          difficulty: 1,
        },
        {
          id: "mcm-04",
          type: "true-false",
          prompt: {
            es: String.raw`\text{¿Es correcta esta factorización? } 45 = 3^2 \times 5`,
            en: String.raw`\text{Is this factorization correct? } 45 = 3^2 \times 5`,
          },
          correctAnswer: "true",
          explanation: {
            es: String.raw`45 = 9 \times 5 = 3^2 \times 5. \text{ ¡Correcto!}`,
            en: String.raw`45 = 9 \times 5 = 3^2 \times 5. \text{ Correct!}`,
          },
          difficulty: 1,
        },
        {
          id: "mcm-05",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{¿Cuál es la factorización prima de 36? } 36 = 2^{a} \times 3^{b}. \text{ ¿Cuánto vale } a?`,
            en: String.raw`\text{What is the prime factorization of 36? } 36 = 2^{a} \times 3^{b}. \text{ What is } a?`,
          },
          correctAnswer: "2",
          explanation: {
            es: String.raw`36 = 4 \times 9 = 2^2 \times 3^2. \text{ Entonces } a = \textcolor{#22c55e}{2}.`,
            en: String.raw`36 = 4 \times 9 = 2^2 \times 3^2. \text{ So } a = \textcolor{#22c55e}{2}.`,
          },
          steps: [
            { es: String.raw`36 \div 2 = 18`, en: String.raw`36 \div 2 = 18` },
            { es: String.raw`18 \div 2 = 9`, en: String.raw`18 \div 2 = 9` },
            { es: String.raw`9 \div 3 = 3`, en: String.raw`9 \div 3 = 3` },
            { es: String.raw`3 \div 3 = 1`, en: String.raw`3 \div 3 = 1` },
            {
              es: String.raw`\therefore 36 = 2^{\textcolor{#22c55e}{2}} \times 3^{2}`,
              en: String.raw`\therefore 36 = 2^{\textcolor{#22c55e}{2}} \times 3^{2}`,
            },
          ],
          difficulty: 1,
        },
      ],
    },
    // LESSON 2: Practica - Encontrar MCD
    {
      id: "mcm-mcd-practice-mcd",
      topicId: "mcm-mcd",
      order: 2,
      title: {
        es: "Máximo Común Divisor (MCD)",
        en: "Greatest Common Divisor (GCD)",
      },
      description: {
        es: "Practica encontrando el MCD de dos o más números",
        en: "Practice finding the GCD of two or more numbers",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "mcd-01",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{Encuentra el MCD de 12 y 18: } \text{MCD}(12, 18) = \;?`,
            en: String.raw`\text{Find the GCD of 12 and 18: } \text{GCD}(12, 18) = \;?`,
          },
          correctAnswer: "6",
          explanation: {
            es: String.raw`\text{Tomamos el menor exponente de cada factor primo común: } 2^1 \times 3^1 = 6.`,
            en: String.raw`\text{We take the smallest exponent of each common prime factor: } 2^1 \times 3^1 = 6.`,
          },
          steps: [
            {
              es: String.raw`12 = 2^2 \times 3`,
              en: String.raw`12 = 2^2 \times 3`,
            },
            {
              es: String.raw`18 = 2 \times 3^2`,
              en: String.raw`18 = 2 \times 3^2`,
            },
            {
              es: String.raw`\text{Factores comunes: } 2 \text{ y } 3`,
              en: String.raw`\text{Common factors: } 2 \text{ and } 3`,
            },
            {
              es: String.raw`\text{MCD} = 2^{\min(2,1)} \times 3^{\min(1,2)} = 2^1 \times 3^1`,
              en: String.raw`\text{GCD} = 2^{\min(2,1)} \times 3^{\min(1,2)} = 2^1 \times 3^1`,
            },
            {
              es: String.raw`\text{MCD}(12,18) = \textcolor{#22c55e}{6}`,
              en: String.raw`\text{GCD}(12,18) = \textcolor{#22c55e}{6}`,
            },
          ],
          difficulty: 1,
          hints: [
            {
              es: "Factoriza ambos números, luego toma el menor exponente de cada primo común.",
              en: "Factor both numbers, then take the smallest exponent of each common prime.",
            },
          ],
        },
        {
          id: "mcd-02",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\text{¿Cuál es el MCD de 24 y 36?}`,
            en: String.raw`\text{What is the GCD of 24 and 36?}`,
          },
          options: [
            { es: "12", en: "12" },
            { es: "6", en: "6" },
            { es: "8", en: "8" },
            { es: "4", en: "4" },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`24 = 2^3 \times 3, \; 36 = 2^2 \times 3^2. \; \text{MCD} = 2^2 \times 3 = \textcolor{#22c55e}{12}.`,
            en: String.raw`24 = 2^3 \times 3, \; 36 = 2^2 \times 3^2. \; \text{GCD} = 2^2 \times 3 = \textcolor{#22c55e}{12}.`,
          },
          steps: [
            {
              es: String.raw`24 = 2^3 \times 3`,
              en: String.raw`24 = 2^3 \times 3`,
            },
            {
              es: String.raw`36 = 2^2 \times 3^2`,
              en: String.raw`36 = 2^2 \times 3^2`,
            },
            {
              es: String.raw`\text{MCD} = 2^{\min(3,2)} \times 3^{\min(1,2)} = 2^2 \times 3^1 = 4 \times 3`,
              en: String.raw`\text{GCD} = 2^{\min(3,2)} \times 3^{\min(1,2)} = 2^2 \times 3^1 = 4 \times 3`,
            },
            {
              es: String.raw`\text{MCD}(24,36) = \textcolor{#22c55e}{12}`,
              en: String.raw`\text{GCD}(24,36) = \textcolor{#22c55e}{12}`,
            },
          ],
          difficulty: 2,
        },
        {
          id: "mcd-03",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{MCD}(15, 25) = \;?`,
            en: String.raw`\text{GCD}(15, 25) = \;?`,
          },
          correctAnswer: "5",
          explanation: {
            es: String.raw`15 = 3 \times 5, \; 25 = 5^2. \; \text{Factor común: } 5. \; \text{MCD} = \textcolor{#22c55e}{5}.`,
            en: String.raw`15 = 3 \times 5, \; 25 = 5^2. \; \text{Common factor: } 5. \; \text{GCD} = \textcolor{#22c55e}{5}.`,
          },
          difficulty: 1,
        },
        {
          id: "mcd-04",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{MCD}(48, 64) = \;?`,
            en: String.raw`\text{GCD}(48, 64) = \;?`,
          },
          correctAnswer: "16",
          explanation: {
            es: String.raw`48 = 2^4 \times 3, \; 64 = 2^6. \; \text{MCD} = 2^4 = \textcolor{#22c55e}{16}.`,
            en: String.raw`48 = 2^4 \times 3, \; 64 = 2^6. \; \text{GCD} = 2^4 = \textcolor{#22c55e}{16}.`,
          },
          steps: [
            {
              es: String.raw`48 = 2^4 \times 3`,
              en: String.raw`48 = 2^4 \times 3`,
            },
            { es: String.raw`64 = 2^6`, en: String.raw`64 = 2^6` },
            {
              es: String.raw`\text{Único factor primo común: } 2`,
              en: String.raw`\text{Only common prime factor: } 2`,
            },
            {
              es: String.raw`\text{MCD} = 2^{\min(4,6)} = 2^4 = \textcolor{#22c55e}{16}`,
              en: String.raw`\text{GCD} = 2^{\min(4,6)} = 2^4 = \textcolor{#22c55e}{16}`,
            },
          ],
          difficulty: 2,
        },
        {
          id: "mcd-05",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\text{MCD}(30, 42) = \;?`,
            en: String.raw`\text{GCD}(30, 42) = \;?`,
          },
          options: [
            { es: "6", en: "6" },
            { es: "3", en: "3" },
            { es: "12", en: "12" },
            { es: "2", en: "2" },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`30 = 2 \times 3 \times 5, \; 42 = 2 \times 3 \times 7. \; \text{MCD} = 2 \times 3 = \textcolor{#22c55e}{6}.`,
            en: String.raw`30 = 2 \times 3 \times 5, \; 42 = 2 \times 3 \times 7. \; \text{GCD} = 2 \times 3 = \textcolor{#22c55e}{6}.`,
          },
          difficulty: 2,
        },
      ],
    },
    // LESSON 3: Practica - Encontrar MCM
    {
      id: "mcm-mcd-practice-mcm",
      topicId: "mcm-mcd",
      order: 3,
      title: {
        es: "Mínimo Común Múltiplo (MCM)",
        en: "Least Common Multiple (LCM)",
      },
      description: {
        es: "Practica encontrando el MCM de dos o más números",
        en: "Practice finding the LCM of two or more numbers",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "mcm-p01",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{MCM}(4, 6) = \;?`,
            en: String.raw`\text{LCM}(4, 6) = \;?`,
          },
          correctAnswer: "12",
          explanation: {
            es: String.raw`4 = 2^2, \; 6 = 2 \times 3. \; \text{MCM} = 2^2 \times 3 = \textcolor{#22c55e}{12}.`,
            en: String.raw`4 = 2^2, \; 6 = 2 \times 3. \; \text{LCM} = 2^2 \times 3 = \textcolor{#22c55e}{12}.`,
          },
          steps: [
            { es: String.raw`4 = 2^2`, en: String.raw`4 = 2^2` },
            { es: String.raw`6 = 2 \times 3`, en: String.raw`6 = 2 \times 3` },
            {
              es: String.raw`\text{MCM: tomamos el mayor exponente de cada primo}`,
              en: String.raw`\text{LCM: take the largest exponent of each prime}`,
            },
            {
              es: String.raw`\text{MCM} = 2^{\max(2,1)} \times 3^{\max(0,1)} = 2^2 \times 3`,
              en: String.raw`\text{LCM} = 2^{\max(2,1)} \times 3^{\max(0,1)} = 2^2 \times 3`,
            },
            {
              es: String.raw`\text{MCM}(4,6) = 4 \times 3 = \textcolor{#22c55e}{12}`,
              en: String.raw`\text{LCM}(4,6) = 4 \times 3 = \textcolor{#22c55e}{12}`,
            },
          ],
          difficulty: 1,
          hints: [
            {
              es: "MCM: factoriza ambos y toma el MAYOR exponente de cada primo.",
              en: "LCM: factor both and take the LARGEST exponent of each prime.",
            },
          ],
        },
        {
          id: "mcm-p02",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{MCM}(12, 18) = \;?`,
            en: String.raw`\text{LCM}(12, 18) = \;?`,
          },
          correctAnswer: "36",
          explanation: {
            es: String.raw`12 = 2^2 \times 3, \; 18 = 2 \times 3^2. \; \text{MCM} = 2^2 \times 3^2 = 4 \times 9 = \textcolor{#22c55e}{36}.`,
            en: String.raw`12 = 2^2 \times 3, \; 18 = 2 \times 3^2. \; \text{LCM} = 2^2 \times 3^2 = 4 \times 9 = \textcolor{#22c55e}{36}.`,
          },
          steps: [
            {
              es: String.raw`12 = 2^2 \times 3`,
              en: String.raw`12 = 2^2 \times 3`,
            },
            {
              es: String.raw`18 = 2 \times 3^2`,
              en: String.raw`18 = 2 \times 3^2`,
            },
            {
              es: String.raw`\text{MCM} = 2^{\max(2,1)} \times 3^{\max(1,2)} = 2^2 \times 3^2`,
              en: String.raw`\text{LCM} = 2^{\max(2,1)} \times 3^{\max(1,2)} = 2^2 \times 3^2`,
            },
            {
              es: String.raw`\text{MCM} = 4 \times 9 = \textcolor{#22c55e}{36}`,
              en: String.raw`\text{LCM} = 4 \times 9 = \textcolor{#22c55e}{36}`,
            },
          ],
          difficulty: 2,
        },
        {
          id: "mcm-p03",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\text{MCM}(8, 12) = \;?`,
            en: String.raw`\text{LCM}(8, 12) = \;?`,
          },
          options: [
            { es: "24", en: "24" },
            { es: "48", en: "48" },
            { es: "96", en: "96" },
            { es: "4", en: "4" },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`8 = 2^3, \; 12 = 2^2 \times 3. \; \text{MCM} = 2^3 \times 3 = \textcolor{#22c55e}{24}.`,
            en: String.raw`8 = 2^3, \; 12 = 2^2 \times 3. \; \text{LCM} = 2^3 \times 3 = \textcolor{#22c55e}{24}.`,
          },
          difficulty: 2,
        },
        {
          id: "mcm-p04",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{MCM}(15, 20) = \;?`,
            en: String.raw`\text{LCM}(15, 20) = \;?`,
          },
          correctAnswer: "60",
          explanation: {
            es: String.raw`15 = 3 \times 5, \; 20 = 2^2 \times 5. \; \text{MCM} = 2^2 \times 3 \times 5 = \textcolor{#22c55e}{60}.`,
            en: String.raw`15 = 3 \times 5, \; 20 = 2^2 \times 5. \; \text{LCM} = 2^2 \times 3 \times 5 = \textcolor{#22c55e}{60}.`,
          },
          difficulty: 2,
        },
        {
          id: "mcm-p05",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{MCM}(6, 8, 12) = \;?`,
            en: String.raw`\text{LCM}(6, 8, 12) = \;?`,
          },
          correctAnswer: "24",
          explanation: {
            es: String.raw`6 = 2 \times 3, \; 8 = 2^3, \; 12 = 2^2 \times 3. \; \text{MCM} = 2^3 \times 3 = \textcolor{#22c55e}{24}.`,
            en: String.raw`6 = 2 \times 3, \; 8 = 2^3, \; 12 = 2^2 \times 3. \; \text{LCM} = 2^3 \times 3 = \textcolor{#22c55e}{24}.`,
          },
          difficulty: 3,
        },
      ],
    },
    // LESSON 4: Quiz - Problemas de aplicación
    {
      id: "mcm-mcd-quiz",
      topicId: "mcm-mcd",
      order: 4,
      title: {
        es: "Quiz: Problemas de aplicación",
        en: "Quiz: Application Problems",
      },
      description: {
        es: "Resuelve problemas reales utilizando MCM y MCD",
        en: "Solve real-world problems using LCM and GCD",
      },
      type: "quiz",
      xpReward: 50,
      questions: [
        {
          id: "mcm-q01",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\text{Un autobús pasa cada 12 min y otro cada 18 min. Si coinciden a las 8:00, ¿en cuántos minutos coincidirán de nuevo?}`,
            en: String.raw`\text{A bus passes every 12 min and another every 18 min. If they coincide at 8:00, in how many minutes will they coincide again?}`,
          },
          options: [
            { es: "36 \\text{ minutos}", en: "36 \\text{ minutes}" },
            { es: "24 \\text{ minutos}", en: "24 \\text{ minutes}" },
            { es: "72 \\text{ minutos}", en: "72 \\text{ minutes}" },
            { es: "6 \\text{ minutos}", en: "6 \\text{ minutes}" },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`\text{Necesitamos el MCM(12,18) = 36. Coincidirán en 36 minutos (a las 8:36).}`,
            en: String.raw`\text{We need LCM(12,18) = 36. They'll coincide in 36 minutes (at 8:36).}`,
          },
          steps: [
            {
              es: String.raw`\text{Buscamos: ¿Cada cuántos min coinciden? → MCM}`,
              en: String.raw`\text{We seek: How often do they coincide? → LCM}`,
            },
            {
              es: String.raw`12 = 2^2 \times 3`,
              en: String.raw`12 = 2^2 \times 3`,
            },
            {
              es: String.raw`18 = 2 \times 3^2`,
              en: String.raw`18 = 2 \times 3^2`,
            },
            {
              es: String.raw`\text{MCM} = 2^2 \times 3^2 = 4 \times 9 = \textcolor{#22c55e}{36 \text{ min}}`,
              en: String.raw`\text{LCM} = 2^2 \times 3^2 = 4 \times 9 = \textcolor{#22c55e}{36 \text{ min}}`,
            },
          ],
          difficulty: 2,
        },
        {
          id: "mcm-q02",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{Tienes 24 manzanas y 36 naranjas. ¿Cuántas bolsas iguales puedes hacer al máximo con todas las frutas?}`,
            en: String.raw`\text{You have 24 apples and 36 oranges. What's the maximum number of equal bags you can make using all fruits?}`,
          },
          correctAnswer: "12",
          explanation: {
            es: String.raw`\text{Necesitamos repartir equitativamente → MCD(24, 36) = 12 bolsas.}`,
            en: String.raw`\text{We need to distribute equally → GCD(24, 36) = 12 bags.}`,
          },
          steps: [
            {
              es: String.raw`\text{Para repartir equitativamente → usamos MCD}`,
              en: String.raw`\text{To distribute equally → we use GCD}`,
            },
            {
              es: String.raw`24 = 2^3 \times 3`,
              en: String.raw`24 = 2^3 \times 3`,
            },
            {
              es: String.raw`36 = 2^2 \times 3^2`,
              en: String.raw`36 = 2^2 \times 3^2`,
            },
            {
              es: String.raw`\text{MCD} = 2^2 \times 3 = \textcolor{#22c55e}{12 \text{ bolsas}}`,
              en: String.raw`\text{GCD} = 2^2 \times 3 = \textcolor{#22c55e}{12 \text{ bags}}`,
            },
            {
              es: String.raw`\text{Cada bolsa: } 24 \div 12 = 2 \text{ manzanas y } 36 \div 12 = 3 \text{ naranjas}`,
              en: String.raw`\text{Each bag: } 24 \div 12 = 2 \text{ apples and } 36 \div 12 = 3 \text{ oranges}`,
            },
          ],
          difficulty: 2,
        },
        {
          id: "mcm-q03",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\text{Tres semáforos cambian cada 40, 60 y 80 segundos. Si se sincronizan, ¿cada cuánto se sincronizan?}`,
            en: String.raw`\text{Three traffic lights change every 40, 60 and 80 seconds. If synchronized, how often do they sync?}`,
          },
          options: [
            { es: "240 \\text{ segundos}", en: "240 \\text{ seconds}" },
            { es: "120 \\text{ segundos}", en: "120 \\text{ seconds}" },
            { es: "480 \\text{ segundos}", en: "480 \\text{ seconds}" },
            { es: "160 \\text{ segundos}", en: "160 \\text{ seconds}" },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`\text{MCM}(40, 60, 80) = 240 \text{ segundos (4 minutos).}`,
            en: String.raw`\text{LCM}(40, 60, 80) = 240 \text{ seconds (4 minutes).}`,
          },
          steps: [
            {
              es: String.raw`40 = 2^3 \times 5`,
              en: String.raw`40 = 2^3 \times 5`,
            },
            {
              es: String.raw`60 = 2^2 \times 3 \times 5`,
              en: String.raw`60 = 2^2 \times 3 \times 5`,
            },
            {
              es: String.raw`80 = 2^4 \times 5`,
              en: String.raw`80 = 2^4 \times 5`,
            },
            {
              es: String.raw`\text{MCM} = 2^4 \times 3 \times 5 = 16 \times 15 = \textcolor{#22c55e}{240}`,
              en: String.raw`\text{LCM} = 2^4 \times 3 \times 5 = 16 \times 15 = \textcolor{#22c55e}{240}`,
            },
          ],
          difficulty: 3,
        },
        {
          id: "mcm-q04",
          type: "true-false",
          prompt: {
            es: String.raw`\text{Para saber cuántas piezas iguales podemos cortar de dos cuerdas (una de 72 cm y otra de 90 cm), usamos el MCM.}`,
            en: String.raw`\text{To find how many equal pieces we can cut from two ropes (72 cm and 90 cm), we use the LCM.}`,
          },
          correctAnswer: "false",
          explanation: {
            es: String.raw`\text{¡Falso! Usamos el MCD. MCD(72,90) = 18 cm por pieza. Obtenemos 4 + 5 = 9 piezas.}`,
            en: String.raw`\text{False! We use the GCD. GCD(72,90) = 18 cm per piece. We get 4 + 5 = 9 pieces.}`,
          },
          difficulty: 2,
        },
        {
          id: "mcm-q05",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{Ana va al gimnasio cada 3 días y Beto cada 5 días. Si hoy coinciden, ¿en cuántos días coincidirán de nuevo?}`,
            en: String.raw`\text{Ana goes to the gym every 3 days and Beto every 5 days. If they meet today, in how many days will they meet again?}`,
          },
          correctAnswer: "15",
          explanation: {
            es: String.raw`\text{MCM}(3, 5) = 15. \text{ Coincidirán en } \textcolor{#22c55e}{15 \text{ días}}.`,
            en: String.raw`\text{LCM}(3, 5) = 15. \text{ They'll meet in } \textcolor{#22c55e}{15 \text{ days}}.`,
          },
          difficulty: 1,
        },
      ],
    },
  ],
};
