import type { Topic } from "@/lib/types";

export const fraccionesTopic: Topic = {
  id: "fracciones",
  slug: "fracciones",
  title: {
    es: "Fracciones",
    en: "Fractions",
  },
  description: {
    es: "Operaciones con fracciones: suma, resta, multiplicación y división",
    en: "Fraction operations: addition, subtraction, multiplication and division",
  },
  icon: "Divide",
  color: "emerald",
  bgGradient: "bg-linear-to-br from-emerald-500 to-green-600",
  prerequisites: ["mcm-mcd"],
  order: 2,
  lessons: [
    // LESSON 1: Simplificación y equivalencia
    {
      id: "fracciones-simplificar",
      topicId: "fracciones",
      order: 1,
      title: {
        es: "Simplificación de fracciones",
        en: "Simplifying Fractions",
      },
      description: {
        es: "Aprende a simplificar fracciones usando el MCD",
        en: "Learn to simplify fractions using the GCD",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "frac-s01",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\text{Simplifica: } \frac{12}{18}`,
            en: String.raw`\text{Simplify: } \frac{12}{18}`,
          },
          options: [
            { es: String.raw`\frac{2}{3}`, en: String.raw`\frac{2}{3}` },
            { es: String.raw`\frac{4}{6}`, en: String.raw`\frac{4}{6}` },
            { es: String.raw`\frac{6}{9}`, en: String.raw`\frac{6}{9}` },
            { es: String.raw`\frac{3}{4}`, en: String.raw`\frac{3}{4}` },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`\text{MCD}(12,18) = 6. \quad \frac{12 \div 6}{18 \div 6} = \textcolor{#22c55e}{\frac{2}{3}}`,
            en: String.raw`\text{GCD}(12,18) = 6. \quad \frac{12 \div 6}{18 \div 6} = \textcolor{#22c55e}{\frac{2}{3}}`,
          },
          steps: [
            {
              es: String.raw`\text{Encontrar MCD}(12, 18) = 6`,
              en: String.raw`\text{Find GCD}(12, 18) = 6`,
            },
            {
              es: String.raw`\text{Numerador: } 12 \div 6 = 2`,
              en: String.raw`\text{Numerator: } 12 \div 6 = 2`,
            },
            {
              es: String.raw`\text{Denominador: } 18 \div 6 = 3`,
              en: String.raw`\text{Denominator: } 18 \div 6 = 3`,
            },
            {
              es: String.raw`\frac{12}{18} = \textcolor{#22c55e}{\frac{2}{3}}`,
              en: String.raw`\frac{12}{18} = \textcolor{#22c55e}{\frac{2}{3}}`,
            },
          ],
          difficulty: 1,
          hints: [
            {
              es: "Divide numerador y denominador entre su MCD.",
              en: "Divide numerator and denominator by their GCD.",
            },
          ],
        },
        {
          id: "frac-s02",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{Simplifica } \frac{20}{35}. \text{ El numerador simplificado es: }`,
            en: String.raw`\text{Simplify } \frac{20}{35}. \text{ The simplified numerator is: }`,
          },
          correctAnswer: "4",
          explanation: {
            es: String.raw`\text{MCD}(20,35) = 5. \quad \frac{20}{35} = \frac{4}{7}. \text{ Numerador} = \textcolor{#22c55e}{4}.`,
            en: String.raw`\text{GCD}(20,35) = 5. \quad \frac{20}{35} = \frac{4}{7}. \text{ Numerator} = \textcolor{#22c55e}{4}.`,
          },
          difficulty: 1,
        },
        {
          id: "frac-s03",
          type: "true-false",
          prompt: {
            es: String.raw`\frac{3}{5} \text{ y } \frac{9}{15} \text{ son fracciones equivalentes.}`,
            en: String.raw`\frac{3}{5} \text{ and } \frac{9}{15} \text{ are equivalent fractions.}`,
          },
          correctAnswer: "true",
          explanation: {
            es: String.raw`\frac{9}{15} = \frac{9 \div 3}{15 \div 3} = \frac{3}{5}. \text{ ¡Sí son equivalentes!}`,
            en: String.raw`\frac{9}{15} = \frac{9 \div 3}{15 \div 3} = \frac{3}{5}. \text{ Yes, they're equivalent!}`,
          },
          difficulty: 1,
        },
        {
          id: "frac-s04",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\text{Convierte a fracción impropia: } 2\frac{3}{4}`,
            en: String.raw`\text{Convert to improper fraction: } 2\frac{3}{4}`,
          },
          options: [
            { es: String.raw`\frac{11}{4}`, en: String.raw`\frac{11}{4}` },
            { es: String.raw`\frac{8}{4}`, en: String.raw`\frac{8}{4}` },
            { es: String.raw`\frac{9}{4}`, en: String.raw`\frac{9}{4}` },
            { es: String.raw`\frac{23}{4}`, en: String.raw`\frac{23}{4}` },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`2\frac{3}{4} = \frac{2 \times 4 + 3}{4} = \frac{11}{4}`,
            en: String.raw`2\frac{3}{4} = \frac{2 \times 4 + 3}{4} = \frac{11}{4}`,
          },
          steps: [
            {
              es: String.raw`\text{Entero} \times \text{denominador} + \text{numerador}`,
              en: String.raw`\text{Whole} \times \text{denominator} + \text{numerator}`,
            },
            {
              es: String.raw`2 \times 4 + 3 = 8 + 3 = 11`,
              en: String.raw`2 \times 4 + 3 = 8 + 3 = 11`,
            },
            {
              es: String.raw`2\frac{3}{4} = \textcolor{#22c55e}{\frac{11}{4}}`,
              en: String.raw`2\frac{3}{4} = \textcolor{#22c55e}{\frac{11}{4}}`,
            },
          ],
          difficulty: 1,
        },
        {
          id: "frac-s05",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{Simplifica } \frac{42}{56}. \text{ ¿Cuál es el denominador simplificado?}`,
            en: String.raw`\text{Simplify } \frac{42}{56}. \text{ What is the simplified denominator?}`,
          },
          correctAnswer: "4",
          explanation: {
            es: String.raw`\text{MCD}(42,56) = 14. \quad \frac{42}{56} = \frac{3}{4}. \text{ Denominador} = \textcolor{#22c55e}{4}.`,
            en: String.raw`\text{GCD}(42,56) = 14. \quad \frac{42}{56} = \frac{3}{4}. \text{ Denominator} = \textcolor{#22c55e}{4}.`,
          },
          difficulty: 2,
        },
      ],
    },
    // LESSON 2: Suma y Resta de fracciones
    {
      id: "fracciones-suma-resta",
      topicId: "fracciones",
      order: 2,
      title: {
        es: "Suma y resta de fracciones",
        en: "Adding & Subtracting Fractions",
      },
      description: {
        es: "Aprende a sumar y restar fracciones con distinto denominador",
        en: "Learn to add and subtract fractions with different denominators",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "frac-sr01",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\frac{1}{3} + \frac{1}{4} = \;?`,
            en: String.raw`\frac{1}{3} + \frac{1}{4} = \;?`,
          },
          options: [
            { es: String.raw`\frac{7}{12}`, en: String.raw`\frac{7}{12}` },
            { es: String.raw`\frac{2}{7}`, en: String.raw`\frac{2}{7}` },
            { es: String.raw`\frac{1}{7}`, en: String.raw`\frac{1}{7}` },
            { es: String.raw`\frac{5}{12}`, en: String.raw`\frac{5}{12}` },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`\text{MCM}(3,4)=12. \; \frac{4}{12} + \frac{3}{12} = \textcolor{#22c55e}{\frac{7}{12}}`,
            en: String.raw`\text{LCM}(3,4)=12. \; \frac{4}{12} + \frac{3}{12} = \textcolor{#22c55e}{\frac{7}{12}}`,
          },
          steps: [
            {
              es: String.raw`\text{MCM}(3, 4) = 12`,
              en: String.raw`\text{LCM}(3, 4) = 12`,
            },
            {
              es: String.raw`\frac{1}{3} = \frac{1 \times 4}{3 \times 4} = \frac{4}{12}`,
              en: String.raw`\frac{1}{3} = \frac{1 \times 4}{3 \times 4} = \frac{4}{12}`,
            },
            {
              es: String.raw`\frac{1}{4} = \frac{1 \times 3}{4 \times 3} = \frac{3}{12}`,
              en: String.raw`\frac{1}{4} = \frac{1 \times 3}{4 \times 3} = \frac{3}{12}`,
            },
            {
              es: String.raw`\frac{4}{12} + \frac{3}{12} = \textcolor{#22c55e}{\frac{7}{12}}`,
              en: String.raw`\frac{4}{12} + \frac{3}{12} = \textcolor{#22c55e}{\frac{7}{12}}`,
            },
          ],
          difficulty: 1,
          hints: [
            {
              es: "Primero encuentra el MCM de los denominadores para igualarlos.",
              en: "First find the LCM of denominators to make them equal.",
            },
          ],
        },
        {
          id: "frac-sr02",
          type: "fill-blank",
          prompt: {
            es: String.raw`\frac{3}{5} - \frac{1}{3} = \frac{?}{15}. \text{ ¿Cuánto es el numerador?}`,
            en: String.raw`\frac{3}{5} - \frac{1}{3} = \frac{?}{15}. \text{ What is the numerator?}`,
          },
          correctAnswer: "4",
          explanation: {
            es: String.raw`\frac{3}{5} = \frac{9}{15}, \; \frac{1}{3} = \frac{5}{15}. \quad \frac{9}{15} - \frac{5}{15} = \frac{\textcolor{#22c55e}{4}}{15}`,
            en: String.raw`\frac{3}{5} = \frac{9}{15}, \; \frac{1}{3} = \frac{5}{15}. \quad \frac{9}{15} - \frac{5}{15} = \frac{\textcolor{#22c55e}{4}}{15}`,
          },
          steps: [
            {
              es: String.raw`\text{MCM}(5, 3) = 15`,
              en: String.raw`\text{LCM}(5, 3) = 15`,
            },
            {
              es: String.raw`\frac{3}{5} = \frac{3 \times 3}{5 \times 3} = \frac{9}{15}`,
              en: String.raw`\frac{3}{5} = \frac{3 \times 3}{5 \times 3} = \frac{9}{15}`,
            },
            {
              es: String.raw`\frac{1}{3} = \frac{1 \times 5}{3 \times 5} = \frac{5}{15}`,
              en: String.raw`\frac{1}{3} = \frac{1 \times 5}{3 \times 5} = \frac{5}{15}`,
            },
            {
              es: String.raw`\frac{9}{15} - \frac{5}{15} = \frac{\textcolor{#22c55e}{4}}{15}`,
              en: String.raw`\frac{9}{15} - \frac{5}{15} = \frac{\textcolor{#22c55e}{4}}{15}`,
            },
          ],
          difficulty: 2,
        },
        {
          id: "frac-sr03",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\frac{2}{3} + \frac{5}{6} = \;?`,
            en: String.raw`\frac{2}{3} + \frac{5}{6} = \;?`,
          },
          options: [
            { es: String.raw`\frac{3}{2}`, en: String.raw`\frac{3}{2}` },
            { es: String.raw`\frac{7}{6}`, en: String.raw`\frac{7}{6}` },
            { es: String.raw`\frac{7}{9}`, en: String.raw`\frac{7}{9}` },
            { es: String.raw`\frac{9}{6}`, en: String.raw`\frac{9}{6}` },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`\frac{2}{3} = \frac{4}{6}. \; \frac{4}{6} + \frac{5}{6} = \frac{9}{6} = \textcolor{#22c55e}{\frac{3}{2}}`,
            en: String.raw`\frac{2}{3} = \frac{4}{6}. \; \frac{4}{6} + \frac{5}{6} = \frac{9}{6} = \textcolor{#22c55e}{\frac{3}{2}}`,
          },
          difficulty: 2,
        },
        {
          id: "frac-sr04",
          type: "fill-blank",
          prompt: {
            es: String.raw`\frac{5}{8} + \frac{3}{8} = \;? \text{ (escribe como entero o fracción simplificada)}`,
            en: String.raw`\frac{5}{8} + \frac{3}{8} = \;? \text{ (write as integer or simplified fraction)}`,
          },
          correctAnswer: "1",
          explanation: {
            es: String.raw`\frac{5}{8} + \frac{3}{8} = \frac{8}{8} = \textcolor{#22c55e}{1}`,
            en: String.raw`\frac{5}{8} + \frac{3}{8} = \frac{8}{8} = \textcolor{#22c55e}{1}`,
          },
          difficulty: 1,
        },
        {
          id: "frac-sr05",
          type: "fill-blank",
          prompt: {
            es: String.raw`\frac{7}{10} - \frac{2}{5} = \frac{?}{10}. \text{ ¿Numerador?}`,
            en: String.raw`\frac{7}{10} - \frac{2}{5} = \frac{?}{10}. \text{ Numerator?}`,
          },
          correctAnswer: "3",
          explanation: {
            es: String.raw`\frac{2}{5} = \frac{4}{10}. \quad \frac{7}{10} - \frac{4}{10} = \frac{\textcolor{#22c55e}{3}}{10}`,
            en: String.raw`\frac{2}{5} = \frac{4}{10}. \quad \frac{7}{10} - \frac{4}{10} = \frac{\textcolor{#22c55e}{3}}{10}`,
          },
          difficulty: 2,
        },
      ],
    },
    // LESSON 3: Multiplicación y división
    {
      id: "fracciones-mult-div",
      topicId: "fracciones",
      order: 3,
      title: {
        es: "Multiplicación y división",
        en: "Multiplication & Division",
      },
      description: {
        es: "Multiplica y divide fracciones con facilidad",
        en: "Multiply and divide fractions with ease",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "frac-md01",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\frac{2}{3} \times \frac{4}{5} = \;?`,
            en: String.raw`\frac{2}{3} \times \frac{4}{5} = \;?`,
          },
          options: [
            { es: String.raw`\frac{8}{15}`, en: String.raw`\frac{8}{15}` },
            { es: String.raw`\frac{6}{8}`, en: String.raw`\frac{6}{8}` },
            { es: String.raw`\frac{10}{12}`, en: String.raw`\frac{10}{12}` },
            { es: String.raw`\frac{8}{8}`, en: String.raw`\frac{8}{8}` },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`\frac{2}{3} \times \frac{4}{5} = \frac{2 \times 4}{3 \times 5} = \textcolor{#22c55e}{\frac{8}{15}}`,
            en: String.raw`\frac{2}{3} \times \frac{4}{5} = \frac{2 \times 4}{3 \times 5} = \textcolor{#22c55e}{\frac{8}{15}}`,
          },
          steps: [
            {
              es: String.raw`\text{Multiplicar numeradores: } 2 \times 4 = 8`,
              en: String.raw`\text{Multiply numerators: } 2 \times 4 = 8`,
            },
            {
              es: String.raw`\text{Multiplicar denominadores: } 3 \times 5 = 15`,
              en: String.raw`\text{Multiply denominators: } 3 \times 5 = 15`,
            },
            {
              es: String.raw`\frac{2}{3} \times \frac{4}{5} = \textcolor{#22c55e}{\frac{8}{15}}`,
              en: String.raw`\frac{2}{3} \times \frac{4}{5} = \textcolor{#22c55e}{\frac{8}{15}}`,
            },
          ],
          difficulty: 1,
          hints: [
            {
              es: "Multiplica numerador × numerador y denominador × denominador.",
              en: "Multiply numerator × numerator and denominator × denominator.",
            },
          ],
        },
        {
          id: "frac-md02",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\frac{3}{4} \div \frac{2}{5} = \;?`,
            en: String.raw`\frac{3}{4} \div \frac{2}{5} = \;?`,
          },
          options: [
            { es: String.raw`\frac{15}{8}`, en: String.raw`\frac{15}{8}` },
            { es: String.raw`\frac{6}{20}`, en: String.raw`\frac{6}{20}` },
            { es: String.raw`\frac{8}{15}`, en: String.raw`\frac{8}{15}` },
            { es: String.raw`\frac{5}{6}`, en: String.raw`\frac{5}{6}` },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`\frac{3}{4} \div \frac{2}{5} = \frac{3}{4} \times \frac{5}{2} = \textcolor{#22c55e}{\frac{15}{8}}`,
            en: String.raw`\frac{3}{4} \div \frac{2}{5} = \frac{3}{4} \times \frac{5}{2} = \textcolor{#22c55e}{\frac{15}{8}}`,
          },
          steps: [
            {
              es: String.raw`\text{Invertir la segunda fracción (recíproco): } \frac{2}{5} \to \frac{5}{2}`,
              en: String.raw`\text{Flip the second fraction (reciprocal): } \frac{2}{5} \to \frac{5}{2}`,
            },
            {
              es: String.raw`\text{Multiplicar: } \frac{3}{4} \times \frac{5}{2} = \frac{15}{8}`,
              en: String.raw`\text{Multiply: } \frac{3}{4} \times \frac{5}{2} = \frac{15}{8}`,
            },
            {
              es: String.raw`\frac{3}{4} \div \frac{2}{5} = \textcolor{#22c55e}{\frac{15}{8}}`,
              en: String.raw`\frac{3}{4} \div \frac{2}{5} = \textcolor{#22c55e}{\frac{15}{8}}`,
            },
          ],
          difficulty: 2,
          hints: [
            {
              es: "Para dividir fracciones, multiplica por el recíproco de la segunda.",
              en: "To divide fractions, multiply by the reciprocal of the second.",
            },
          ],
        },
        {
          id: "frac-md03",
          type: "fill-blank",
          prompt: {
            es: String.raw`\frac{5}{6} \times \frac{3}{10} = \frac{?}{?}. \text{ ¿Cuál es el numerador simplificado?}`,
            en: String.raw`\frac{5}{6} \times \frac{3}{10} = \frac{?}{?}. \text{ What is the simplified numerator?}`,
          },
          correctAnswer: "1",
          explanation: {
            es: String.raw`\frac{5}{6} \times \frac{3}{10} = \frac{15}{60} = \frac{1}{4}. \text{ Numerador} = \textcolor{#22c55e}{1}.`,
            en: String.raw`\frac{5}{6} \times \frac{3}{10} = \frac{15}{60} = \frac{1}{4}. \text{ Numerator} = \textcolor{#22c55e}{1}.`,
          },
          steps: [
            {
              es: String.raw`\frac{5 \times 3}{6 \times 10} = \frac{15}{60}`,
              en: String.raw`\frac{5 \times 3}{6 \times 10} = \frac{15}{60}`,
            },
            {
              es: String.raw`\text{MCD}(15,60) = 15`,
              en: String.raw`\text{GCD}(15,60) = 15`,
            },
            {
              es: String.raw`\frac{15 \div 15}{60 \div 15} = \textcolor{#22c55e}{\frac{1}{4}}`,
              en: String.raw`\frac{15 \div 15}{60 \div 15} = \textcolor{#22c55e}{\frac{1}{4}}`,
            },
          ],
          difficulty: 2,
        },
        {
          id: "frac-md04",
          type: "fill-blank",
          prompt: {
            es: String.raw`\frac{7}{8} \div \frac{7}{4} = \;? \text{ (escribe como fracción simplificada, ej: 1/2)}`,
            en: String.raw`\frac{7}{8} \div \frac{7}{4} = \;? \text{ (write as simplified fraction, e.g., 1/2)}`,
          },
          correctAnswer: "0.5",
          explanation: {
            es: String.raw`\frac{7}{8} \times \frac{4}{7} = \frac{28}{56} = \frac{1}{2} = \textcolor{#22c55e}{0.5}`,
            en: String.raw`\frac{7}{8} \times \frac{4}{7} = \frac{28}{56} = \frac{1}{2} = \textcolor{#22c55e}{0.5}`,
          },
          difficulty: 2,
        },
        {
          id: "frac-md05",
          type: "true-false",
          prompt: {
            es: String.raw`\frac{a}{b} \div \frac{c}{d} = \frac{a \times d}{b \times c}`,
            en: String.raw`\frac{a}{b} \div \frac{c}{d} = \frac{a \times d}{b \times c}`,
          },
          correctAnswer: "true",
          explanation: {
            es: String.raw`\text{¡Correcto! Dividir = multiplicar por el recíproco: } \frac{a}{b} \times \frac{d}{c} = \frac{ad}{bc}`,
            en: String.raw`\text{Correct! Dividing = multiplying by the reciprocal: } \frac{a}{b} \times \frac{d}{c} = \frac{ad}{bc}`,
          },
          difficulty: 1,
        },
      ],
    },
    // LESSON 4: Quiz - Problemas mixtos
    {
      id: "fracciones-quiz",
      topicId: "fracciones",
      order: 4,
      title: {
        es: "Quiz: Fracciones combinadas",
        en: "Quiz: Combined Fractions",
      },
      description: {
        es: "Demuestra lo que sabes de fracciones",
        en: "Show what you know about fractions",
      },
      type: "quiz",
      xpReward: 50,
      questions: [
        {
          id: "frac-q01",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\text{María comió } \frac{2}{5} \text{ de un pastel y Juan comió } \frac{1}{3}. \text{ ¿Cuánto comieron en total?}`,
            en: String.raw`\text{Maria ate } \frac{2}{5} \text{ of a cake and Juan ate } \frac{1}{3}. \text{ How much did they eat in total?}`,
          },
          options: [
            { es: String.raw`\frac{11}{15}`, en: String.raw`\frac{11}{15}` },
            { es: String.raw`\frac{3}{8}`, en: String.raw`\frac{3}{8}` },
            { es: String.raw`\frac{7}{15}`, en: String.raw`\frac{7}{15}` },
            { es: String.raw`\frac{1}{2}`, en: String.raw`\frac{1}{2}` },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`\frac{2}{5} + \frac{1}{3} = \frac{6}{15} + \frac{5}{15} = \textcolor{#22c55e}{\frac{11}{15}}`,
            en: String.raw`\frac{2}{5} + \frac{1}{3} = \frac{6}{15} + \frac{5}{15} = \textcolor{#22c55e}{\frac{11}{15}}`,
          },
          steps: [
            {
              es: String.raw`\text{MCM}(5, 3) = 15`,
              en: String.raw`\text{LCM}(5, 3) = 15`,
            },
            {
              es: String.raw`\frac{2}{5} = \frac{6}{15}, \quad \frac{1}{3} = \frac{5}{15}`,
              en: String.raw`\frac{2}{5} = \frac{6}{15}, \quad \frac{1}{3} = \frac{5}{15}`,
            },
            {
              es: String.raw`\frac{6}{15} + \frac{5}{15} = \textcolor{#22c55e}{\frac{11}{15}}`,
              en: String.raw`\frac{6}{15} + \frac{5}{15} = \textcolor{#22c55e}{\frac{11}{15}}`,
            },
          ],
          difficulty: 2,
        },
        {
          id: "frac-q02",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{Un rectángulo mide } \frac{3}{4} \text{ m de largo y } \frac{2}{3} \text{ m de ancho. ¿Cuál es su área en m²? (escribe como fracción, ej: 1/2)}`,
            en: String.raw`\text{A rectangle is } \frac{3}{4} \text{ m long and } \frac{2}{3} \text{ m wide. What is its area in m²? (write as fraction, e.g., 1/2)}`,
          },
          correctAnswer: "0.5",
          explanation: {
            es: String.raw`\text{Área} = \frac{3}{4} \times \frac{2}{3} = \frac{6}{12} = \frac{1}{2} = \textcolor{#22c55e}{0.5} \text{ m}^2`,
            en: String.raw`\text{Area} = \frac{3}{4} \times \frac{2}{3} = \frac{6}{12} = \frac{1}{2} = \textcolor{#22c55e}{0.5} \text{ m}^2`,
          },
          difficulty: 2,
        },
        {
          id: "frac-q03",
          type: "order-steps",
          prompt: {
            es: String.raw`\text{Ordena los pasos para sumar } \frac{1}{4} + \frac{2}{3}`,
            en: String.raw`\text{Order the steps to add } \frac{1}{4} + \frac{2}{3}`,
          },
          options: [
            {
              es: String.raw`\text{Encontrar MCM}(4,3)=12`,
              en: String.raw`\text{Find LCM}(4,3)=12`,
            },
            {
              es: String.raw`\frac{1}{4}=\frac{3}{12} \text{ y } \frac{2}{3}=\frac{8}{12}`,
              en: String.raw`\frac{1}{4}=\frac{3}{12} \text{ and } \frac{2}{3}=\frac{8}{12}`,
            },
            {
              es: String.raw`\frac{3}{12}+\frac{8}{12}=\frac{11}{12}`,
              en: String.raw`\frac{3}{12}+\frac{8}{12}=\frac{11}{12}`,
            },
            {
              es: String.raw`\text{Verificar si se simplifica}`,
              en: String.raw`\text{Check if it simplifies}`,
            },
          ],
          correctAnswer: "0,1,2,3",
          explanation: {
            es: String.raw`\text{Pasos: 1) MCM, 2) Convertir, 3) Sumar numeradores, 4) Simplificar si es posible.}`,
            en: String.raw`\text{Steps: 1) LCM, 2) Convert, 3) Add numerators, 4) Simplify if possible.}`,
          },
          difficulty: 2,
        },
        {
          id: "frac-q04",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\frac{5}{6} - \frac{1}{4} + \frac{1}{3} = \;?`,
            en: String.raw`\frac{5}{6} - \frac{1}{4} + \frac{1}{3} = \;?`,
          },
          options: [
            { es: String.raw`\frac{11}{12}`, en: String.raw`\frac{11}{12}` },
            { es: String.raw`\frac{5}{12}`, en: String.raw`\frac{5}{12}` },
            { es: String.raw`\frac{7}{12}`, en: String.raw`\frac{7}{12}` },
            { es: String.raw`1`, en: String.raw`1` },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`\text{MCM}(6,4,3)=12. \; \frac{10}{12} - \frac{3}{12} + \frac{4}{12} = \textcolor{#22c55e}{\frac{11}{12}}`,
            en: String.raw`\text{LCM}(6,4,3)=12. \; \frac{10}{12} - \frac{3}{12} + \frac{4}{12} = \textcolor{#22c55e}{\frac{11}{12}}`,
          },
          steps: [
            {
              es: String.raw`\text{MCM}(6,4,3) = 12`,
              en: String.raw`\text{LCM}(6,4,3) = 12`,
            },
            {
              es: String.raw`\frac{5}{6}=\frac{10}{12}, \;\frac{1}{4}=\frac{3}{12}, \;\frac{1}{3}=\frac{4}{12}`,
              en: String.raw`\frac{5}{6}=\frac{10}{12}, \;\frac{1}{4}=\frac{3}{12}, \;\frac{1}{3}=\frac{4}{12}`,
            },
            {
              es: String.raw`\frac{10-3+4}{12} = \textcolor{#22c55e}{\frac{11}{12}}`,
              en: String.raw`\frac{10-3+4}{12} = \textcolor{#22c55e}{\frac{11}{12}}`,
            },
          ],
          difficulty: 3,
        },
        {
          id: "frac-q05",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{Si repartes } \frac{3}{4} \text{ de litro en vasos de } \frac{1}{8} \text{ de litro, ¿cuántos vasos llenas?}`,
            en: String.raw`\text{If you pour } \frac{3}{4} \text{ of a liter into } \frac{1}{8} \text{ liter glasses, how many glasses do you fill?}`,
          },
          correctAnswer: "6",
          explanation: {
            es: String.raw`\frac{3}{4} \div \frac{1}{8} = \frac{3}{4} \times \frac{8}{1} = \frac{24}{4} = \textcolor{#22c55e}{6} \text{ vasos}`,
            en: String.raw`\frac{3}{4} \div \frac{1}{8} = \frac{3}{4} \times \frac{8}{1} = \frac{24}{4} = \textcolor{#22c55e}{6} \text{ glasses}`,
          },
          steps: [
            {
              es: String.raw`\text{Dividir: } \frac{3}{4} \div \frac{1}{8}`,
              en: String.raw`\text{Divide: } \frac{3}{4} \div \frac{1}{8}`,
            },
            {
              es: String.raw`= \frac{3}{4} \times \frac{8}{1} = \frac{24}{4} = \textcolor{#22c55e}{6}`,
              en: String.raw`= \frac{3}{4} \times \frac{8}{1} = \frac{24}{4} = \textcolor{#22c55e}{6}`,
            },
          ],
          difficulty: 2,
        },
      ],
    },
  ],
};
