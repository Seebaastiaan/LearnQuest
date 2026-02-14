import type { Topic } from "@/lib/types";

export const decimaleTopic: Topic = {
  id: "decimales",
  slug: "decimales",
  title: {
    es: "Números decimales",
    en: "Decimal Numbers",
  },
  description: {
    es: "Operaciones con decimales y conversión fracción-decimal",
    en: "Operations with decimals and fraction-decimal conversion",
  },
  icon: "CircleDot",
  color: "violet",
  bgGradient: "bg-linear-to-br from-violet-500 to-purple-600",
  prerequisites: ["fracciones"],
  order: 3,
  lessons: [
    // LESSON 1: Conversión fracción ↔ decimal
    {
      id: "decimales-conversion",
      topicId: "decimales",
      order: 1,
      title: {
        es: "Fracción ↔ Decimal",
        en: "Fraction ↔ Decimal",
      },
      description: {
        es: "Convierte entre fracciones y decimales",
        en: "Convert between fractions and decimals",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "dec-c01",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{Convierte a decimal: } \frac{3}{4} = \;?`,
            en: String.raw`\text{Convert to decimal: } \frac{3}{4} = \;?`,
          },
          correctAnswer: "0.75",
          explanation: {
            es: String.raw`\frac{3}{4} = 3 \div 4 = \textcolor{#22c55e}{0.75}`,
            en: String.raw`\frac{3}{4} = 3 \div 4 = \textcolor{#22c55e}{0.75}`,
          },
          steps: [
            {
              es: String.raw`\text{Dividir numerador entre denominador: } 3 \div 4`,
              en: String.raw`\text{Divide numerator by denominator: } 3 \div 4`,
            },
            {
              es: String.raw`3.00 \div 4 = 0.75`,
              en: String.raw`3.00 \div 4 = 0.75`,
            },
            {
              es: String.raw`\frac{3}{4} = \textcolor{#22c55e}{0.75}`,
              en: String.raw`\frac{3}{4} = \textcolor{#22c55e}{0.75}`,
            },
          ],
          difficulty: 1,
          hints: [
            {
              es: "Divide el numerador entre el denominador.",
              en: "Divide the numerator by the denominator.",
            },
          ],
        },
        {
          id: "dec-c02",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\text{¿Cuál fracción es igual a } 0.6\text{?}`,
            en: String.raw`\text{Which fraction equals } 0.6\text{?}`,
          },
          options: [
            { es: String.raw`\frac{3}{5}`, en: String.raw`\frac{3}{5}` },
            { es: String.raw`\frac{6}{100}`, en: String.raw`\frac{6}{100}` },
            { es: String.raw`\frac{1}{6}`, en: String.raw`\frac{1}{6}` },
            { es: String.raw`\frac{2}{3}`, en: String.raw`\frac{2}{3}` },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`0.6 = \frac{6}{10} = \frac{3}{5}`,
            en: String.raw`0.6 = \frac{6}{10} = \frac{3}{5}`,
          },
          steps: [
            {
              es: String.raw`0.6 = \frac{6}{10}`,
              en: String.raw`0.6 = \frac{6}{10}`,
            },
            {
              es: String.raw`\text{MCD}(6,10) = 2`,
              en: String.raw`\text{GCD}(6,10) = 2`,
            },
            {
              es: String.raw`\frac{6 \div 2}{10 \div 2} = \textcolor{#22c55e}{\frac{3}{5}}`,
              en: String.raw`\frac{6 \div 2}{10 \div 2} = \textcolor{#22c55e}{\frac{3}{5}}`,
            },
          ],
          difficulty: 1,
        },
        {
          id: "dec-c03",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{Convierte a decimal: } \frac{7}{8} = \;?`,
            en: String.raw`\text{Convert to decimal: } \frac{7}{8} = \;?`,
          },
          correctAnswer: "0.875",
          explanation: {
            es: String.raw`\frac{7}{8} = 7 \div 8 = \textcolor{#22c55e}{0.875}`,
            en: String.raw`\frac{7}{8} = 7 \div 8 = \textcolor{#22c55e}{0.875}`,
          },
          difficulty: 2,
        },
        {
          id: "dec-c04",
          type: "true-false",
          prompt: {
            es: String.raw`\frac{1}{3} = 0.33`,
            en: String.raw`\frac{1}{3} = 0.33`,
          },
          correctAnswer: "false",
          explanation: {
            es: String.raw`\frac{1}{3} = 0.\overline{3} = 0.333... \text{ (decimal periódico, no exactamente 0.33)}`,
            en: String.raw`\frac{1}{3} = 0.\overline{3} = 0.333... \text{ (repeating decimal, not exactly 0.33)}`,
          },
          difficulty: 2,
        },
        {
          id: "dec-c05",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\text{Convierte } 0.125 \text{ a fracción simplificada:}`,
            en: String.raw`\text{Convert } 0.125 \text{ to simplified fraction:}`,
          },
          options: [
            { es: String.raw`\frac{1}{8}`, en: String.raw`\frac{1}{8}` },
            {
              es: String.raw`\frac{125}{100}`,
              en: String.raw`\frac{125}{100}`,
            },
            { es: String.raw`\frac{1}{4}`, en: String.raw`\frac{1}{4}` },
            { es: String.raw`\frac{5}{40}`, en: String.raw`\frac{5}{40}` },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`0.125 = \frac{125}{1000} = \frac{1}{8}`,
            en: String.raw`0.125 = \frac{125}{1000} = \frac{1}{8}`,
          },
          steps: [
            {
              es: String.raw`0.125 = \frac{125}{1000}`,
              en: String.raw`0.125 = \frac{125}{1000}`,
            },
            {
              es: String.raw`\text{MCD}(125, 1000) = 125`,
              en: String.raw`\text{GCD}(125, 1000) = 125`,
            },
            {
              es: String.raw`\frac{125 \div 125}{1000 \div 125} = \textcolor{#22c55e}{\frac{1}{8}}`,
              en: String.raw`\frac{125 \div 125}{1000 \div 125} = \textcolor{#22c55e}{\frac{1}{8}}`,
            },
          ],
          difficulty: 2,
        },
      ],
    },
    // LESSON 2: Operaciones con decimales
    {
      id: "decimales-operaciones",
      topicId: "decimales",
      order: 2,
      title: {
        es: "Operaciones con decimales",
        en: "Decimal Operations",
      },
      description: {
        es: "Suma, resta, multiplica y divide números decimales",
        en: "Add, subtract, multiply and divide decimal numbers",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "dec-op01",
          type: "fill-blank",
          prompt: {
            es: String.raw`3.75 + 2.48 = \;?`,
            en: String.raw`3.75 + 2.48 = \;?`,
          },
          correctAnswer: "6.23",
          explanation: {
            es: String.raw`\text{Alinear punto decimal: } 3.75 + 2.48 = \textcolor{#22c55e}{6.23}`,
            en: String.raw`\text{Align decimal point: } 3.75 + 2.48 = \textcolor{#22c55e}{6.23}`,
          },
          steps: [
            {
              es: String.raw`\begin{array}{r} 3.75 \\ + 2.48 \\ \hline \end{array}`,
              en: String.raw`\begin{array}{r} 3.75 \\ + 2.48 \\ \hline \end{array}`,
            },
            {
              es: String.raw`\text{Centésimas: } 5 + 8 = 13 \text{ → escribo 3, llevo 1}`,
              en: String.raw`\text{Hundredths: } 5 + 8 = 13 \text{ → write 3, carry 1}`,
            },
            {
              es: String.raw`\text{Décimas: } 7 + 4 + 1 = 12 \text{ → escribo 2, llevo 1}`,
              en: String.raw`\text{Tenths: } 7 + 4 + 1 = 12 \text{ → write 2, carry 1}`,
            },
            {
              es: String.raw`\text{Unidades: } 3 + 2 + 1 = \textcolor{#22c55e}{6.23}`,
              en: String.raw`\text{Ones: } 3 + 2 + 1 = \textcolor{#22c55e}{6.23}`,
            },
          ],
          difficulty: 1,
        },
        {
          id: "dec-op02",
          type: "fill-blank",
          prompt: {
            es: String.raw`5.03 - 2.7 = \;?`,
            en: String.raw`5.03 - 2.7 = \;?`,
          },
          correctAnswer: "2.33",
          explanation: {
            es: String.raw`5.03 - 2.70 = \textcolor{#22c55e}{2.33}`,
            en: String.raw`5.03 - 2.70 = \textcolor{#22c55e}{2.33}`,
          },
          steps: [
            {
              es: String.raw`\text{Igualar decimales: } 2.7 = 2.70`,
              en: String.raw`\text{Match decimals: } 2.7 = 2.70`,
            },
            {
              es: String.raw`\begin{array}{r} 5.03 \\ - 2.70 \\ \hline 2.33 \end{array}`,
              en: String.raw`\begin{array}{r} 5.03 \\ - 2.70 \\ \hline 2.33 \end{array}`,
            },
          ],
          difficulty: 1,
        },
        {
          id: "dec-op03",
          type: "fill-blank",
          prompt: {
            es: String.raw`0.3 \times 0.4 = \;?`,
            en: String.raw`0.3 \times 0.4 = \;?`,
          },
          correctAnswer: "0.12",
          explanation: {
            es: String.raw`0.3 \times 0.4 = \textcolor{#22c55e}{0.12}. \text{ (1 decimal × 1 decimal = 2 decimales)}`,
            en: String.raw`0.3 \times 0.4 = \textcolor{#22c55e}{0.12}. \text{ (1 decimal × 1 decimal = 2 decimals)}`,
          },
          steps: [
            {
              es: String.raw`3 \times 4 = 12`,
              en: String.raw`3 \times 4 = 12`,
            },
            {
              es: String.raw`\text{Total de decimales: } 1 + 1 = 2`,
              en: String.raw`\text{Total decimals: } 1 + 1 = 2`,
            },
            {
              es: String.raw`\text{Colocar punto: } 12 \to \textcolor{#22c55e}{0.12}`,
              en: String.raw`\text{Place point: } 12 \to \textcolor{#22c55e}{0.12}`,
            },
          ],
          difficulty: 1,
          hints: [
            {
              es: "Multiplica como enteros, luego suma los decimales de ambos factores.",
              en: "Multiply as integers, then sum the decimal places of both factors.",
            },
          ],
        },
        {
          id: "dec-op04",
          type: "multiple-choice",
          prompt: {
            es: String.raw`2.5 \times 1.2 = \;?`,
            en: String.raw`2.5 \times 1.2 = \;?`,
          },
          options: [
            { es: "3", en: "3" },
            { es: "3.0", en: "3.0" },
            { es: "2.7", en: "2.7" },
            { es: "30", en: "30" },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`25 \times 12 = 300. \text{ Con 2 decimales: } \textcolor{#22c55e}{3.00 = 3}`,
            en: String.raw`25 \times 12 = 300. \text{ With 2 decimals: } \textcolor{#22c55e}{3.00 = 3}`,
          },
          difficulty: 2,
        },
        {
          id: "dec-op05",
          type: "fill-blank",
          prompt: {
            es: String.raw`7.2 \div 0.9 = \;?`,
            en: String.raw`7.2 \div 0.9 = \;?`,
          },
          correctAnswer: "8",
          explanation: {
            es: String.raw`\frac{7.2}{0.9} = \frac{72}{9} = \textcolor{#22c55e}{8}`,
            en: String.raw`\frac{7.2}{0.9} = \frac{72}{9} = \textcolor{#22c55e}{8}`,
          },
          steps: [
            {
              es: String.raw`\text{Mover el punto decimal: } \frac{7.2}{0.9} = \frac{72}{9}`,
              en: String.raw`\text{Move decimal point: } \frac{7.2}{0.9} = \frac{72}{9}`,
            },
            {
              es: String.raw`72 \div 9 = \textcolor{#22c55e}{8}`,
              en: String.raw`72 \div 9 = \textcolor{#22c55e}{8}`,
            },
          ],
          difficulty: 2,
        },
      ],
    },
    // LESSON 3: Quiz - Problemas con decimales
    {
      id: "decimales-quiz",
      topicId: "decimales",
      order: 3,
      title: {
        es: "Quiz: Problemas con decimales",
        en: "Quiz: Decimal Problems",
      },
      description: {
        es: "Resuelve problemas reales con números decimales",
        en: "Solve real problems with decimal numbers",
      },
      type: "quiz",
      xpReward: 50,
      questions: [
        {
          id: "dec-q01",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{Un producto cuesta \$12.50 y tiene 20\% de descuento. ¿Cuánto pagas?}`,
            en: String.raw`\text{A product costs \$12.50 and has a 20\% discount. How much do you pay?}`,
          },
          correctAnswer: "10",
          explanation: {
            es: String.raw`\text{Descuento: } 12.50 \times 0.20 = 2.50. \; 12.50 - 2.50 = \textcolor{#22c55e}{\$10.00}`,
            en: String.raw`\text{Discount: } 12.50 \times 0.20 = 2.50. \; 12.50 - 2.50 = \textcolor{#22c55e}{\$10.00}`,
          },
          steps: [
            {
              es: String.raw`\text{Descuento} = 12.50 \times 0.20 = 2.50`,
              en: String.raw`\text{Discount} = 12.50 \times 0.20 = 2.50`,
            },
            {
              es: String.raw`\text{Precio final} = 12.50 - 2.50 = \textcolor{#22c55e}{10.00}`,
              en: String.raw`\text{Final price} = 12.50 - 2.50 = \textcolor{#22c55e}{10.00}`,
            },
          ],
          difficulty: 2,
        },
        {
          id: "dec-q02",
          type: "multiple-choice",
          prompt: {
            es: String.raw`\text{Ordena de menor a mayor: } 0.45, \; 0.405, \; 0.5, \; 0.045`,
            en: String.raw`\text{Order from least to greatest: } 0.45, \; 0.405, \; 0.5, \; 0.045`,
          },
          options: [
            {
              es: String.raw`0.045, \; 0.405, \; 0.45, \; 0.5`,
              en: String.raw`0.045, \; 0.405, \; 0.45, \; 0.5`,
            },
            {
              es: String.raw`0.045, \; 0.45, \; 0.405, \; 0.5`,
              en: String.raw`0.045, \; 0.45, \; 0.405, \; 0.5`,
            },
            {
              es: String.raw`0.405, \; 0.045, \; 0.45, \; 0.5`,
              en: String.raw`0.405, \; 0.045, \; 0.45, \; 0.5`,
            },
            {
              es: String.raw`0.5, \; 0.45, \; 0.405, \; 0.045`,
              en: String.raw`0.5, \; 0.45, \; 0.405, \; 0.045`,
            },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`0.045 = \frac{45}{1000} < 0.405 = \frac{405}{1000} < 0.45 = \frac{450}{1000} < 0.5 = \frac{500}{1000}`,
            en: String.raw`0.045 = \frac{45}{1000} < 0.405 = \frac{405}{1000} < 0.45 = \frac{450}{1000} < 0.5 = \frac{500}{1000}`,
          },
          difficulty: 2,
        },
        {
          id: "dec-q03",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{3 amigos se reparten la cuenta de \$45.90 en partes iguales. ¿Cuánto paga cada uno?}`,
            en: String.raw`\text{3 friends split a \$45.90 bill equally. How much does each pay?}`,
          },
          correctAnswer: "15.3",
          explanation: {
            es: String.raw`45.90 \div 3 = \textcolor{#22c55e}{15.30}`,
            en: String.raw`45.90 \div 3 = \textcolor{#22c55e}{15.30}`,
          },
          difficulty: 2,
        },
        {
          id: "dec-q04",
          type: "true-false",
          prompt: {
            es: String.raw`0.1 + 0.2 = 0.3`,
            en: String.raw`0.1 + 0.2 = 0.3`,
          },
          correctAnswer: "true",
          explanation: {
            es: String.raw`\text{Matemáticamente, } 0.1 + 0.2 = 0.3. \text{ (En computadoras hay un error de punto flotante, pero en matemáticas es exacto.)}`,
            en: String.raw`\text{Mathematically, } 0.1 + 0.2 = 0.3. \text{ (Computers have floating-point errors, but in math it's exact.)}`,
          },
          difficulty: 1,
        },
        {
          id: "dec-q05",
          type: "fill-blank",
          prompt: {
            es: String.raw`\text{Convierte } \frac{5}{8} \text{ a decimal:}`,
            en: String.raw`\text{Convert } \frac{5}{8} \text{ to decimal:}`,
          },
          correctAnswer: "0.625",
          explanation: {
            es: String.raw`5 \div 8 = \textcolor{#22c55e}{0.625}`,
            en: String.raw`5 \div 8 = \textcolor{#22c55e}{0.625}`,
          },
          steps: [
            { es: String.raw`5.000 \div 8`, en: String.raw`5.000 \div 8` },
            {
              es: String.raw`50 \div 8 = 6 \text{ residuo } 2 \quad \to 0.6`,
              en: String.raw`50 \div 8 = 6 \text{ remainder } 2 \quad \to 0.6`,
            },
            {
              es: String.raw`20 \div 8 = 2 \text{ residuo } 4 \quad \to 0.62`,
              en: String.raw`20 \div 8 = 2 \text{ remainder } 4 \quad \to 0.62`,
            },
            {
              es: String.raw`40 \div 8 = 5 \text{ residuo } 0 \quad \to \textcolor{#22c55e}{0.625}`,
              en: String.raw`40 \div 8 = 5 \text{ remainder } 0 \quad \to \textcolor{#22c55e}{0.625}`,
            },
          ],
          difficulty: 2,
        },
      ],
    },
  ],
};
