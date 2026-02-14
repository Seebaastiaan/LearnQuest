import type { Topic } from '@/lib/types';

/**
 * Exponentes y radicales: Leyes de exponentes, radicales, racionalización
 * Alineado con la guía de estudio del examen de admisión UNAM
 * 65 questions across 6 lessons (10+11+12+10+11+11)
 */

export const exponentesTopic: Topic = {
  id: 'exponentes',
  slug: 'exponentes',
  title: {
    es: 'Exponentes y radicales',
    en: 'Exponents & Radicals',
  },
  description: {
    es: 'Leyes de exponentes, radicales y racionalización',
    en: 'Laws of exponents, radicals and rationalization',
  },
  icon: 'Superscript',
  color: 'rose',
  bgGradient: 'bg-linear-to-br from-rose-500 to-red-600',
  prerequisites: ['porcentajes'],
  order: 5,
  lessons: [
    {
      id: 'leyes-basicas-exponentes',
      topicId: 'exponentes',
      order: 1,
      title: {
        es: 'Leyes básicas de exponentes',
        en: 'Basic exponent laws',
      },
      description: {
        es: 'Leyes de producto, cociente y potencia de potencia',
        en: 'Product, quotient and power of a power laws',
      },
      type: 'learn',
      xpReward: 20,
      questions: [
        {
          id: 'exponentes-1',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $2^3 \cdot 2^4$`,
            en: String.raw`Simplify: $2^3 \cdot 2^4$`,
          },
          options: [
            { es: String.raw`$2^7$`, en: String.raw`$2^7$` },
            { es: String.raw`$2^{12}$`, en: String.raw`$2^{12}$` },
            { es: String.raw`$4^7$`, en: String.raw`$4^7$` },
            { es: String.raw`$128$`, en: String.raw`$128$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`Al multiplicar potencias de igual base, se suman los exponentes: $2^3 \cdot 2^4 = 2^{3+4} = 2^7$`,
            en: String.raw`When multiplying powers with the same base, add the exponents: $2^3 \cdot 2^4 = 2^{3+4} = 2^7$`,
          },
          difficulty: 1,
        },
        {
          id: 'exponentes-2',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\frac{5^8}{5^3}$`,
            en: String.raw`Simplify: $\frac{5^8}{5^3}$`,
          },
          options: [
            { es: String.raw`$5^5$`, en: String.raw`$5^5$` },
            { es: String.raw`$5^{11}$`, en: String.raw`$5^{11}$` },
            { es: String.raw`$\frac{8}{3}$`, en: String.raw`$\frac{8}{3}$` },
            { es: String.raw`$1$`, en: String.raw`$1$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`Al dividir potencias de igual base, se restan los exponentes: $\frac{5^8}{5^3} = 5^{8-3} = 5^5$`,
            en: String.raw`When dividing powers with the same base, subtract the exponents: $\frac{5^8}{5^3} = 5^{8-3} = 5^5$`,
          },
          difficulty: 1,
        },
        {
          id: 'exponentes-3',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $(3^2)^4$`,
            en: String.raw`Simplify: $(3^2)^4$`,
          },
          options: [
            { es: String.raw`$3^8$`, en: String.raw`$3^8$` },
            { es: String.raw`$3^6$`, en: String.raw`$3^6$` },
            { es: String.raw`$9^4$`, en: String.raw`$9^4$` },
            { es: String.raw`$12$`, en: String.raw`$12$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`Al elevar una potencia a otra potencia, se multiplican los exponentes: $(3^2)^4 = 3^{2 \cdot 4} = 3^8$`,
            en: String.raw`When raising a power to a power, multiply the exponents: $(3^2)^4 = 3^{2 \cdot 4} = 3^8$`,
          },
          difficulty: 1,
        },
        {
          id: 'exponentes-4',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $x^5 \cdot x^3 \cdot x^2$`,
            en: String.raw`Simplify: $x^5 \cdot x^3 \cdot x^2$`,
          },
          options: [
            { es: String.raw`$x^{10}$`, en: String.raw`$x^{10}$` },
            { es: String.raw`$x^{30}$`, en: String.raw`$x^{30}$` },
            { es: String.raw`$3x^{10}$`, en: String.raw`$3x^{10}$` },
            { es: String.raw`$x^6$`, en: String.raw`$x^6$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`Suma los exponentes: $x^5 \cdot x^3 \cdot x^2 = x^{5+3+2} = x^{10}$`,
            en: String.raw`Add the exponents: $x^5 \cdot x^3 \cdot x^2 = x^{5+3+2} = x^{10}$`,
          },
          difficulty: 1,
        },
        {
          id: 'exponentes-5',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $(2a^3)^4$`,
            en: String.raw`Simplify: $(2a^3)^4$`,
          },
          options: [
            { es: String.raw`$16a^{12}$`, en: String.raw`$16a^{12}$` },
            { es: String.raw`$2a^{12}$`, en: String.raw`$2a^{12}$` },
            { es: String.raw`$8a^7$`, en: String.raw`$8a^7$` },
            { es: String.raw`$16a^7$`, en: String.raw`$16a^7$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`Se eleva cada factor: $(2a^3)^4 = 2^4 \cdot (a^3)^4 = 16a^{12}$`,
            en: String.raw`Raise each factor: $(2a^3)^4 = 2^4 \cdot (a^3)^4 = 16a^{12}$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-6',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\frac{12x^7}{4x^2}$`,
            en: String.raw`Simplify: $\frac{12x^7}{4x^2}$`,
          },
          options: [
            { es: String.raw`$3x^5$`, en: String.raw`$3x^5$` },
            { es: String.raw`$3x^9$`, en: String.raw`$3x^9$` },
            { es: String.raw`$8x^5$`, en: String.raw`$8x^5$` },
            { es: String.raw`$3x^{14}$`, en: String.raw`$3x^{14}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`Divide los coeficientes y resta los exponentes: $\frac{12x^7}{4x^2} = 3x^{7-2} = 3x^5$`,
            en: String.raw`Divide the coefficients and subtract the exponents: $\frac{12x^7}{4x^2} = 3x^{7-2} = 3x^5$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-7',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Una población de bacterias se duplica cada hora. Si hay inicialmente $2^3$ bacterias, ¿cuántas habrá después de 5 horas?`,
            en: String.raw`A bacterial population doubles every hour. If there are initially $2^3$ bacteria, how many will there be after 5 hours?`,
          },
          options: [
            { es: String.raw`$2^8 = 256$ bacterias`, en: String.raw`$2^8 = 256$ bacteria` },
            { es: String.raw`$2^{15} = 32{,}768$ bacterias`, en: String.raw`$2^{15} = 32{,}768$ bacteria` },
            { es: String.raw`$10^3 = 1000$ bacterias`, en: String.raw`$10^3 = 1000$ bacteria` },
            { es: String.raw`$2^5 = 32$ bacterias`, en: String.raw`$2^5 = 32$ bacteria` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`Después de 5 horas, se duplica 5 veces: $2^3 \cdot 2^5 = 2^{3+5} = 2^8 = 256$ bacterias`,
            en: String.raw`After 5 hours, it doubles 5 times: $2^3 \cdot 2^5 = 2^{3+5} = 2^8 = 256$ bacteria`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-8',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $(x^2y^3)^3 \cdot (xy^2)^2$`,
            en: String.raw`Simplify: $(x^2y^3)^3 \cdot (xy^2)^2$`,
          },
          options: [
            { es: String.raw`$x^8y^{13}$`, en: String.raw`$x^8y^{13}$` },
            { es: String.raw`$x^7y^{11}$`, en: String.raw`$x^7y^{11}$` },
            { es: String.raw`$x^6y^9$`, en: String.raw`$x^6y^9$` },
            { es: String.raw`$x^{12}y^{18}$`, en: String.raw`$x^{12}y^{18}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$(x^2y^3)^3 \cdot (xy^2)^2 = x^6y^9 \cdot x^2y^4 = x^{6+2}y^{9+4} = x^8y^{13}$`,
            en: String.raw`$(x^2y^3)^3 \cdot (xy^2)^2 = x^6y^9 \cdot x^2y^4 = x^{6+2}y^{9+4} = x^8y^{13}$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-9',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`La cantidad de un medicamento en el cuerpo se reduce a la mitad cada 4 horas. Si la dosis inicial es $2^6$ mg, ¿cuánto queda después de 12 horas?`,
            en: String.raw`The amount of a drug in the body is halved every 4 hours. If the initial dose is $2^6$ mg, how much remains after 12 hours?`,
          },
          options: [
            { es: String.raw`$2^3 = 8$ mg`, en: String.raw`$2^3 = 8$ mg` },
            { es: String.raw`$2^2 = 4$ mg`, en: String.raw`$2^2 = 4$ mg` },
            { es: String.raw`$2^9 = 512$ mg`, en: String.raw`$2^9 = 512$ mg` },
            { es: String.raw`$2^4 = 16$ mg`, en: String.raw`$2^4 = 16$ mg` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`En 12 horas se reduce 3 veces: $\frac{2^6}{2^3} = 2^{6-3} = 2^3 = 8$ mg`,
            en: String.raw`In 12 hours it's reduced 3 times: $\frac{2^6}{2^3} = 2^{6-3} = 2^3 = 8$ mg`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-10',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\frac{(2x^3)^4 \cdot x^2}{(x^5)^3}$`,
            en: String.raw`Simplify: $\frac{(2x^3)^4 \cdot x^2}{(x^5)^3}$`,
          },
          options: [
            { es: String.raw`$16x^{-1} = \frac{16}{x}$`, en: String.raw`$16x^{-1} = \frac{16}{x}$` },
            { es: String.raw`$16x$`, en: String.raw`$16x$` },
            { es: String.raw`$16x^5$`, en: String.raw`$16x^5$` },
            { es: String.raw`$2x^{-1}$`, en: String.raw`$2x^{-1}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{(2x^3)^4 \cdot x^2}{(x^5)^3} = \frac{16x^{12} \cdot x^2}{x^{15}} = \frac{16x^{14}}{x^{15}} = 16x^{-1} = \frac{16}{x}$`,
            en: String.raw`$\frac{(2x^3)^4 \cdot x^2}{(x^5)^3} = \frac{16x^{12} \cdot x^2}{x^{15}} = \frac{16x^{14}}{x^{15}} = 16x^{-1} = \frac{16}{x}$`,
          },
          difficulty: 3,
        },
      ],
    },
    {
      id: 'exponentes-negativos-cero',
      topicId: 'exponentes',
      order: 2,
      title: {
        es: 'Exponentes negativos y cero',
        en: 'Negative and zero exponents',
      },
      description: {
        es: 'Exponente cero e inversos multiplicativos',
        en: 'Zero exponent and multiplicative inverses',
      },
      type: 'practice',
      xpReward: 30,
      questions: [
        {
          id: 'exponentes-11',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`¿Cuánto vale $7^0$?`,
            en: String.raw`What is the value of $7^0$?`,
          },
          options: [
            { es: String.raw`$1$`, en: String.raw`$1$` },
            { es: String.raw`$0$`, en: String.raw`$0$` },
            { es: String.raw`$7$`, en: String.raw`$7$` },
            { es: 'No tiene valor', en: 'Undefined' },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`Todo número (excepto 0) elevado a la potencia cero es igual a 1: $7^0 = 1$`,
            en: String.raw`Any number (except 0) raised to the zero power equals 1: $7^0 = 1$`,
          },
          difficulty: 1,
        },
        {
          id: 'exponentes-12',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $3^{-2}$`,
            en: String.raw`Simplify: $3^{-2}$`,
          },
          options: [
            { es: String.raw`$\frac{1}{9}$`, en: String.raw`$\frac{1}{9}$` },
            { es: String.raw`$-9$`, en: String.raw`$-9$` },
            { es: String.raw`$-6$`, en: String.raw`$-6$` },
            { es: String.raw`$\frac{1}{6}$`, en: String.raw`$\frac{1}{6}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$3^{-2} = \frac{1}{3^2} = \frac{1}{9}$. El exponente negativo invierte la base.`,
            en: String.raw`$3^{-2} = \frac{1}{3^2} = \frac{1}{9}$. The negative exponent inverts the base.`,
          },
          difficulty: 1,
        },
        {
          id: 'exponentes-13',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\frac{1}{2^{-3}}$`,
            en: String.raw`Simplify: $\frac{1}{2^{-3}}$`,
          },
          options: [
            { es: String.raw`$2^3 = 8$`, en: String.raw`$2^3 = 8$` },
            { es: String.raw`$-8$`, en: String.raw`$-8$` },
            { es: String.raw`$\frac{1}{8}$`, en: String.raw`$\frac{1}{8}$` },
            { es: String.raw`$-\frac{1}{8}$`, en: String.raw`$-\frac{1}{8}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{1}{2^{-3}} = \frac{1}{\frac{1}{2^3}} = 2^3 = 8$`,
            en: String.raw`$\frac{1}{2^{-3}} = \frac{1}{\frac{1}{2^3}} = 2^3 = 8$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-14',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $5^{-1} + 2^{-1}$`,
            en: String.raw`Simplify: $5^{-1} + 2^{-1}$`,
          },
          options: [
            { es: String.raw`$\frac{7}{10}$`, en: String.raw`$\frac{7}{10}$` },
            { es: String.raw`$7^{-1}$`, en: String.raw`$7^{-1}$` },
            { es: String.raw`$\frac{1}{7}$`, en: String.raw`$\frac{1}{7}$` },
            { es: String.raw`$10^{-1}$`, en: String.raw`$10^{-1}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$5^{-1} + 2^{-1} = \frac{1}{5} + \frac{1}{2} = \frac{2}{10} + \frac{5}{10} = \frac{7}{10}$`,
            en: String.raw`$5^{-1} + 2^{-1} = \frac{1}{5} + \frac{1}{2} = \frac{2}{10} + \frac{5}{10} = \frac{7}{10}$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-15',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\frac{x^{-3}}{x^{-7}}$`,
            en: String.raw`Simplify: $\frac{x^{-3}}{x^{-7}}$`,
          },
          options: [
            { es: String.raw`$x^4$`, en: String.raw`$x^4$` },
            { es: String.raw`$x^{-4}$`, en: String.raw`$x^{-4}$` },
            { es: String.raw`$x^{-10}$`, en: String.raw`$x^{-10}$` },
            { es: String.raw`$x^{10}$`, en: String.raw`$x^{10}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{x^{-3}}{x^{-7}} = x^{-3-(-7)} = x^{-3+7} = x^4$`,
            en: String.raw`$\frac{x^{-3}}{x^{-7}} = x^{-3-(-7)} = x^{-3+7} = x^4$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-16',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $(2^{-1})^{-3}$`,
            en: String.raw`Simplify: $(2^{-1})^{-3}$`,
          },
          options: [
            { es: String.raw`$2^3 = 8$`, en: String.raw`$2^3 = 8$` },
            { es: String.raw`$2^{-3} = \frac{1}{8}$`, en: String.raw`$2^{-3} = \frac{1}{8}$` },
            { es: String.raw`$-8$`, en: String.raw`$-8$` },
            { es: String.raw`$-\frac{1}{8}$`, en: String.raw`$-\frac{1}{8}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$(2^{-1})^{-3} = 2^{(-1)(-3)} = 2^3 = 8$`,
            en: String.raw`$(2^{-1})^{-3} = 2^{(-1)(-3)} = 2^3 = 8$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-17',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\frac{(2x^{-2})^3}{4x^{-8}}$`,
            en: String.raw`Simplify: $\frac{(2x^{-2})^3}{4x^{-8}}$`,
          },
          options: [
            { es: String.raw`$2x^2$`, en: String.raw`$2x^2$` },
            { es: String.raw`$2x^{-2}$`, en: String.raw`$2x^{-2}$` },
            { es: String.raw`$8x^2$`, en: String.raw`$8x^2$` },
            { es: String.raw`$\frac{1}{2x^2}$`, en: String.raw`$\frac{1}{2x^2}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{(2x^{-2})^3}{4x^{-8}} = \frac{8x^{-6}}{4x^{-8}} = 2x^{-6-(-8)} = 2x^2$`,
            en: String.raw`$\frac{(2x^{-2})^3}{4x^{-8}} = \frac{8x^{-6}}{4x^{-8}} = 2x^{-6-(-8)} = 2x^2$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-18',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Evalúa: $(-3)^0 + 3^0 - 3^{-1}$`,
            en: String.raw`Evaluate: $(-3)^0 + 3^0 - 3^{-1}$`,
          },
          options: [
            { es: String.raw`$\frac{5}{3}$`, en: String.raw`$\frac{5}{3}$` },
            { es: String.raw`$\frac{1}{3}$`, en: String.raw`$\frac{1}{3}$` },
            { es: String.raw`$2$`, en: String.raw`$2$` },
            { es: String.raw`$0$`, en: String.raw`$0$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$(-3)^0 + 3^0 - 3^{-1} = 1 + 1 - \frac{1}{3} = 2 - \frac{1}{3} = \frac{5}{3}$`,
            en: String.raw`$(-3)^0 + 3^0 - 3^{-1} = 1 + 1 - \frac{1}{3} = 2 - \frac{1}{3} = \frac{5}{3}$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-19',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Un científico mide una concentración de $3.2 \times 10^{-4}$ g/L. ¿Cuál es el valor decimal?`,
            en: String.raw`A scientist measures a concentration of $3.2 \times 10^{-4}$ g/L. What is the decimal value?`,
          },
          options: [
            { es: String.raw`$0.00032$ g/L`, en: String.raw`$0.00032$ g/L` },
            { es: String.raw`$0.0032$ g/L`, en: String.raw`$0.0032$ g/L` },
            { es: String.raw`$0.000032$ g/L`, en: String.raw`$0.000032$ g/L` },
            { es: String.raw`$0.032$ g/L`, en: String.raw`$0.032$ g/L` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$3.2 \times 10^{-4} = 3.2 \times 0.0001 = 0.00032$ g/L`,
            en: String.raw`$3.2 \times 10^{-4} = 3.2 \times 0.0001 = 0.00032$ g/L`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-20',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\frac{(3a^{-2}b^3)^{-2}}{(a^3b^{-1})^2}$`,
            en: String.raw`Simplify: $\frac{(3a^{-2}b^3)^{-2}}{(a^3b^{-1})^2}$`,
          },
          options: [
            { es: String.raw`$\frac{1}{9a^{10}b^8}$`, en: String.raw`$\frac{1}{9a^{10}b^8}$` },
            { es: String.raw`$\frac{1}{9a^2b^4}$`, en: String.raw`$\frac{1}{9a^2b^4}$` },
            { es: String.raw`$9a^{10}b^8$`, en: String.raw`$9a^{10}b^8$` },
            { es: String.raw`$\frac{a^{10}b^8}{9}$`, en: String.raw`$\frac{a^{10}b^8}{9}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{(3a^{-2}b^3)^{-2}}{(a^3b^{-1})^2} = \frac{3^{-2}a^4b^{-6}}{a^6b^{-2}} = \frac{1}{9}a^{-2}b^{-4} = \frac{1}{9a^2b^4}$`,
            en: String.raw`$\frac{(3a^{-2}b^3)^{-2}}{(a^3b^{-1})^2} = \frac{3^{-2}a^4b^{-6}}{a^6b^{-2}} = \frac{1}{9}a^{-2}b^{-4} = \frac{1}{9a^2b^4}$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-21',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`El grosor de una hoja de papel es $10^{-4}$ m. Si apilamos 1000 hojas, ¿cuál es la altura?`,
            en: String.raw`The thickness of a sheet of paper is $10^{-4}$ m. If we stack 1000 sheets, what is the height?`,
          },
          options: [
            { es: String.raw`$10^{-1} = 0.1$ m = 10 cm`, en: String.raw`$10^{-1} = 0.1$ m = 10 cm` },
            { es: String.raw`$10^{-7}$ m`, en: String.raw`$10^{-7}$ m` },
            { es: String.raw`$1$ m`, en: String.raw`$1$ m` },
            { es: String.raw`$10^{-4}$ m`, en: String.raw`$10^{-4}$ m` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$1000 \times 10^{-4} = 10^3 \times 10^{-4} = 10^{-1} = 0.1$ m = 10 cm`,
            en: String.raw`$1000 \times 10^{-4} = 10^3 \times 10^{-4} = 10^{-1} = 0.1$ m = 10 cm`,
          },
          difficulty: 3,
        },
      ],
    },
    {
      id: 'exponentes-fraccionarios',
      topicId: 'exponentes',
      order: 3,
      title: {
        es: 'Exponentes fraccionarios y radicales',
        en: 'Fractional exponents and radicals',
      },
      description: {
        es: 'Raíces, simplificación y conversión entre formas',
        en: 'Roots, simplification and conversion between forms',
      },
      type: 'practice',
      xpReward: 30,
      questions: [
        {
          id: 'exponentes-22',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Expresa en forma de radical: $16^{1/2}$`,
            en: String.raw`Express in radical form: $16^{1/2}$`,
          },
          options: [
            { es: String.raw`$\sqrt{16} = 4$`, en: String.raw`$\sqrt{16} = 4$` },
            { es: String.raw`$\sqrt[16]{1}$`, en: String.raw`$\sqrt[16]{1}$` },
            { es: String.raw`$8$`, en: String.raw`$8$` },
            { es: String.raw`$\frac{16}{2}$`, en: String.raw`$\frac{16}{2}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$a^{1/n} = \sqrt[n]{a}$, entonces $16^{1/2} = \sqrt{16} = 4$`,
            en: String.raw`$a^{1/n} = \sqrt[n]{a}$, so $16^{1/2} = \sqrt{16} = 4$`,
          },
          difficulty: 1,
        },
        {
          id: 'exponentes-23',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Calcula: $8^{1/3}$`,
            en: String.raw`Calculate: $8^{1/3}$`,
          },
          options: [
            { es: String.raw`$2$`, en: String.raw`$2$` },
            { es: String.raw`$\frac{8}{3}$`, en: String.raw`$\frac{8}{3}$` },
            { es: String.raw`$3$`, en: String.raw`$3$` },
            { es: String.raw`$4$`, en: String.raw`$4$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$8^{1/3} = \sqrt[3]{8} = 2$ porque $2^3 = 8$`,
            en: String.raw`$8^{1/3} = \sqrt[3]{8} = 2$ because $2^3 = 8$`,
          },
          difficulty: 1,
        },
        {
          id: 'exponentes-24',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Expresa con exponente fraccionario: $\sqrt[3]{x^2}$`,
            en: String.raw`Express with fractional exponent: $\sqrt[3]{x^2}$`,
          },
          options: [
            { es: String.raw`$x^{2/3}$`, en: String.raw`$x^{2/3}$` },
            { es: String.raw`$x^{3/2}$`, en: String.raw`$x^{3/2}$` },
            { es: String.raw`$x^6$`, en: String.raw`$x^6$` },
            { es: String.raw`$x^{1/6}$`, en: String.raw`$x^{1/6}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\sqrt[n]{a^m} = a^{m/n}$, entonces $\sqrt[3]{x^2} = x^{2/3}$`,
            en: String.raw`$\sqrt[n]{a^m} = a^{m/n}$, so $\sqrt[3]{x^2} = x^{2/3}$`,
          },
          difficulty: 1,
        },
        {
          id: 'exponentes-25',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Calcula: $27^{2/3}$`,
            en: String.raw`Calculate: $27^{2/3}$`,
          },
          options: [
            { es: String.raw`$9$`, en: String.raw`$9$` },
            { es: String.raw`$18$`, en: String.raw`$18$` },
            { es: String.raw`$6$`, en: String.raw`$6$` },
            { es: String.raw`$3$`, en: String.raw`$3$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$27^{2/3} = (\sqrt[3]{27})^2 = 3^2 = 9$`,
            en: String.raw`$27^{2/3} = (\sqrt[3]{27})^2 = 3^2 = 9$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-26',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\sqrt{50}$`,
            en: String.raw`Simplify: $\sqrt{50}$`,
          },
          options: [
            { es: String.raw`$5\sqrt{2}$`, en: String.raw`$5\sqrt{2}$` },
            { es: String.raw`$2\sqrt{5}$`, en: String.raw`$2\sqrt{5}$` },
            { es: String.raw`$25\sqrt{2}$`, en: String.raw`$25\sqrt{2}$` },
            { es: String.raw`$10\sqrt{5}$`, en: String.raw`$10\sqrt{5}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\sqrt{50} = \sqrt{25 \cdot 2} = \sqrt{25} \cdot \sqrt{2} = 5\sqrt{2}$`,
            en: String.raw`$\sqrt{50} = \sqrt{25 \cdot 2} = \sqrt{25} \cdot \sqrt{2} = 5\sqrt{2}$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-27',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\sqrt[3]{54}$`,
            en: String.raw`Simplify: $\sqrt[3]{54}$`,
          },
          options: [
            { es: String.raw`$3\sqrt[3]{2}$`, en: String.raw`$3\sqrt[3]{2}$` },
            { es: String.raw`$2\sqrt[3]{3}$`, en: String.raw`$2\sqrt[3]{3}$` },
            { es: String.raw`$6\sqrt[3]{9}$`, en: String.raw`$6\sqrt[3]{9}$` },
            { es: String.raw`$18$`, en: String.raw`$18$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\sqrt[3]{54} = \sqrt[3]{27 \cdot 2} = \sqrt[3]{27} \cdot \sqrt[3]{2} = 3\sqrt[3]{2}$`,
            en: String.raw`$\sqrt[3]{54} = \sqrt[3]{27 \cdot 2} = \sqrt[3]{27} \cdot \sqrt[3]{2} = 3\sqrt[3]{2}$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-28',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\sqrt{12} + \sqrt{27}$`,
            en: String.raw`Simplify: $\sqrt{12} + \sqrt{27}$`,
          },
          options: [
            { es: String.raw`$5\sqrt{3}$`, en: String.raw`$5\sqrt{3}$` },
            { es: String.raw`$\sqrt{39}$`, en: String.raw`$\sqrt{39}$` },
            { es: String.raw`$3\sqrt{13}$`, en: String.raw`$3\sqrt{13}$` },
            { es: String.raw`$15\sqrt{3}$`, en: String.raw`$15\sqrt{3}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\sqrt{12} + \sqrt{27} = 2\sqrt{3} + 3\sqrt{3} = 5\sqrt{3}$`,
            en: String.raw`$\sqrt{12} + \sqrt{27} = 2\sqrt{3} + 3\sqrt{3} = 5\sqrt{3}$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-29',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\sqrt{18x^3}$ (asume $x > 0$)`,
            en: String.raw`Simplify: $\sqrt{18x^3}$ (assume $x > 0$)`,
          },
          options: [
            { es: String.raw`$3x\sqrt{2x}$`, en: String.raw`$3x\sqrt{2x}$` },
            { es: String.raw`$3x^2\sqrt{2}$`, en: String.raw`$3x^2\sqrt{2}$` },
            { es: String.raw`$9x\sqrt{x}$`, en: String.raw`$9x\sqrt{x}$` },
            { es: String.raw`$6x\sqrt{3x}$`, en: String.raw`$6x\sqrt{3x}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\sqrt{18x^3} = \sqrt{9 \cdot 2 \cdot x^2 \cdot x} = 3x\sqrt{2x}$`,
            en: String.raw`$\sqrt{18x^3} = \sqrt{9 \cdot 2 \cdot x^2 \cdot x} = 3x\sqrt{2x}$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-30',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Calcula: $16^{3/4}$`,
            en: String.raw`Calculate: $16^{3/4}$`,
          },
          options: [
            { es: String.raw`$8$`, en: String.raw`$8$` },
            { es: String.raw`$12$`, en: String.raw`$12$` },
            { es: String.raw`$64$`, en: String.raw`$64$` },
            { es: String.raw`$4$`, en: String.raw`$4$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$16^{3/4} = (\sqrt[4]{16})^3 = 2^3 = 8$`,
            en: String.raw`$16^{3/4} = (\sqrt[4]{16})^3 = 2^3 = 8$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-31',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`El radio de una esfera es $r = \sqrt[3]{\frac{3V}{4\pi}}$. Si $V = 32\pi$ m³, ¿cuál es $r$?`,
            en: String.raw`The radius of a sphere is $r = \sqrt[3]{\frac{3V}{4\pi}}$. If $V = 32\pi$ m³, what is $r$?`,
          },
          options: [
            { es: String.raw`$2\sqrt[3]{3}$ m`, en: String.raw`$2\sqrt[3]{3}$ m` },
            { es: String.raw`$4$ m`, en: String.raw`$4$ m` },
            { es: String.raw`$8$ m`, en: String.raw`$8$ m` },
            { es: String.raw`$2$ m`, en: String.raw`$2$ m` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$r = \sqrt[3]{\frac{3(32\pi)}{4\pi}} = \sqrt[3]{24} = \sqrt[3]{8 \cdot 3} = 2\sqrt[3]{3}$ m`,
            en: String.raw`$r = \sqrt[3]{\frac{3(32\pi)}{4\pi}} = \sqrt[3]{24} = \sqrt[3]{8 \cdot 3} = 2\sqrt[3]{3}$ m`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-32',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $x^{1/2} \cdot x^{1/3}$`,
            en: String.raw`Simplify: $x^{1/2} \cdot x^{1/3}$`,
          },
          options: [
            { es: String.raw`$x^{5/6}$`, en: String.raw`$x^{5/6}$` },
            { es: String.raw`$x^{1/6}$`, en: String.raw`$x^{1/6}$` },
            { es: String.raw`$x^{2/3}$`, en: String.raw`$x^{2/3}$` },
            { es: String.raw`$x^{1/5}$`, en: String.raw`$x^{1/5}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$x^{1/2} \cdot x^{1/3} = x^{1/2 + 1/3} = x^{3/6 + 2/6} = x^{5/6}$`,
            en: String.raw`$x^{1/2} \cdot x^{1/3} = x^{1/2 + 1/3} = x^{3/6 + 2/6} = x^{5/6}$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-33',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`La intensidad de una onda sonora es $I = \frac{P}{4\pi d^2}$. Si necesitamos $I = \frac{P}{144\pi}$, ¿cuál debe ser $d$?`,
            en: String.raw`The intensity of a sound wave is $I = \frac{P}{4\pi d^2}$. If we need $I = \frac{P}{144\pi}$, what should $d$ be?`,
          },
          options: [
            { es: String.raw`$6$ metros`, en: String.raw`$6$ meters` },
            { es: String.raw`$12$ metros`, en: String.raw`$12$ meters` },
            { es: String.raw`$36$ metros`, en: String.raw`$36$ meters` },
            { es: String.raw`$3$ metros`, en: String.raw`$3$ meters` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{P}{4\pi d^2} = \frac{P}{144\pi} \Rightarrow 4d^2 = 144 \Rightarrow d^2 = 36 \Rightarrow d = 6$ m`,
            en: String.raw`$\frac{P}{4\pi d^2} = \frac{P}{144\pi} \Rightarrow 4d^2 = 144 \Rightarrow d^2 = 36 \Rightarrow d = 6$ m`,
          },
          difficulty: 3,
        },
      ],
    },
    {
      id: 'racionalizacion',
      topicId: 'exponentes',
      order: 4,
      title: {
        es: 'Racionalización de denominadores',
        en: 'Rationalizing denominators',
      },
      description: {
        es: 'Eliminar radicales del denominador',
        en: 'Eliminating radicals from the denominator',
      },
      type: 'practice',
      xpReward: 30,
      questions: [
        {
          id: 'exponentes-34',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Racionaliza: $\frac{1}{\sqrt{2}}$`,
            en: String.raw`Rationalize: $\frac{1}{\sqrt{2}}$`,
          },
          options: [
            { es: String.raw`$\frac{\sqrt{2}}{2}$`, en: String.raw`$\frac{\sqrt{2}}{2}$` },
            { es: String.raw`$\frac{1}{2}$`, en: String.raw`$\frac{1}{2}$` },
            { es: String.raw`$\sqrt{2}$`, en: String.raw`$\sqrt{2}$` },
            { es: String.raw`$2$`, en: String.raw`$2$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{1}{\sqrt{2}} = \frac{1}{\sqrt{2}} \cdot \frac{\sqrt{2}}{\sqrt{2}} = \frac{\sqrt{2}}{2}$`,
            en: String.raw`$\frac{1}{\sqrt{2}} = \frac{1}{\sqrt{2}} \cdot \frac{\sqrt{2}}{\sqrt{2}} = \frac{\sqrt{2}}{2}$`,
          },
          difficulty: 1,
        },
        {
          id: 'exponentes-35',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Racionaliza: $\frac{3}{\sqrt{5}}$`,
            en: String.raw`Rationalize: $\frac{3}{\sqrt{5}}$`,
          },
          options: [
            { es: String.raw`$\frac{3\sqrt{5}}{5}$`, en: String.raw`$\frac{3\sqrt{5}}{5}$` },
            { es: String.raw`$\frac{3}{5}$`, en: String.raw`$\frac{3}{5}$` },
            { es: String.raw`$3\sqrt{5}$`, en: String.raw`$3\sqrt{5}$` },
            { es: String.raw`$\frac{\sqrt{5}}{3}$`, en: String.raw`$\frac{\sqrt{5}}{3}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{3}{\sqrt{5}} = \frac{3}{\sqrt{5}} \cdot \frac{\sqrt{5}}{\sqrt{5}} = \frac{3\sqrt{5}}{5}$`,
            en: String.raw`$\frac{3}{\sqrt{5}} = \frac{3}{\sqrt{5}} \cdot \frac{\sqrt{5}}{\sqrt{5}} = \frac{3\sqrt{5}}{5}$`,
          },
          difficulty: 1,
        },
        {
          id: 'exponentes-36',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Racionaliza: $\frac{2}{\sqrt{3}}$`,
            en: String.raw`Rationalize: $\frac{2}{\sqrt{3}}$`,
          },
          options: [
            { es: String.raw`$\frac{2\sqrt{3}}{3}$`, en: String.raw`$\frac{2\sqrt{3}}{3}$` },
            { es: String.raw`$\frac{2}{3}$`, en: String.raw`$\frac{2}{3}$` },
            { es: String.raw`$2\sqrt{3}$`, en: String.raw`$2\sqrt{3}$` },
            { es: String.raw`$\frac{\sqrt{3}}{2}$`, en: String.raw`$\frac{\sqrt{3}}{2}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{2}{\sqrt{3}} = \frac{2\sqrt{3}}{3}$`,
            en: String.raw`$\frac{2}{\sqrt{3}} = \frac{2\sqrt{3}}{3}$`,
          },
          difficulty: 1,
        },
        {
          id: 'exponentes-37',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Racionaliza: $\frac{6}{\sqrt{12}}$`,
            en: String.raw`Rationalize: $\frac{6}{\sqrt{12}}$`,
          },
          options: [
            { es: String.raw`$\sqrt{3}$`, en: String.raw`$\sqrt{3}$` },
            { es: String.raw`$\frac{\sqrt{3}}{2}$`, en: String.raw`$\frac{\sqrt{3}}{2}$` },
            { es: String.raw`$3\sqrt{3}$`, en: String.raw`$3\sqrt{3}$` },
            { es: String.raw`$2\sqrt{3}$`, en: String.raw`$2\sqrt{3}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{6}{\sqrt{12}} = \frac{6}{2\sqrt{3}} = \frac{3}{\sqrt{3}} = \frac{3\sqrt{3}}{3} = \sqrt{3}$`,
            en: String.raw`$\frac{6}{\sqrt{12}} = \frac{6}{2\sqrt{3}} = \frac{3}{\sqrt{3}} = \frac{3\sqrt{3}}{3} = \sqrt{3}$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-38',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Racionaliza: $\frac{1}{\sqrt[3]{4}}$`,
            en: String.raw`Rationalize: $\frac{1}{\sqrt[3]{4}}$`,
          },
          options: [
            { es: String.raw`$\frac{\sqrt[3]{2}}{2}$`, en: String.raw`$\frac{\sqrt[3]{2}}{2}$` },
            { es: String.raw`$\frac{\sqrt[3]{4}}{4}$`, en: String.raw`$\frac{\sqrt[3]{4}}{4}$` },
            { es: String.raw`$\sqrt[3]{4}$`, en: String.raw`$\sqrt[3]{4}$` },
            { es: String.raw`$\frac{1}{4}$`, en: String.raw`$\frac{1}{4}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{1}{\sqrt[3]{4}} = \frac{1}{\sqrt[3]{2^2}} \cdot \frac{\sqrt[3]{2}}{\sqrt[3]{2}} = \frac{\sqrt[3]{2}}{2}$`,
            en: String.raw`$\frac{1}{\sqrt[3]{4}} = \frac{1}{\sqrt[3]{2^2}} \cdot \frac{\sqrt[3]{2}}{\sqrt[3]{2}} = \frac{\sqrt[3]{2}}{2}$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-39',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Racionaliza: $\frac{1}{2 + \sqrt{3}}$`,
            en: String.raw`Rationalize: $\frac{1}{2 + \sqrt{3}}$`,
          },
          options: [
            { es: String.raw`$2 - \sqrt{3}$`, en: String.raw`$2 - \sqrt{3}$` },
            { es: String.raw`$-2 - \sqrt{3}$`, en: String.raw`$-2 - \sqrt{3}$` },
            { es: String.raw`$\frac{1}{2 - \sqrt{3}}$`, en: String.raw`$\frac{1}{2 - \sqrt{3}}$` },
            { es: String.raw`$2 + \sqrt{3}$`, en: String.raw`$2 + \sqrt{3}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{1}{2 + \sqrt{3}} \cdot \frac{2 - \sqrt{3}}{2 - \sqrt{3}} = \frac{2 - \sqrt{3}}{4 - 3} = 2 - \sqrt{3}$`,
            en: String.raw`$\frac{1}{2 + \sqrt{3}} \cdot \frac{2 - \sqrt{3}}{2 - \sqrt{3}} = \frac{2 - \sqrt{3}}{4 - 3} = 2 - \sqrt{3}$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-40',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Racionaliza: $\frac{5}{3 - \sqrt{2}}$`,
            en: String.raw`Rationalize: $\frac{5}{3 - \sqrt{2}}$`,
          },
          options: [
            { es: String.raw`$\frac{15 + 5\sqrt{2}}{7}$`, en: String.raw`$\frac{15 + 5\sqrt{2}}{7}$` },
            { es: String.raw`$\frac{15 - 5\sqrt{2}}{7}$`, en: String.raw`$\frac{15 - 5\sqrt{2}}{7}$` },
            { es: String.raw`$3 + \sqrt{2}$`, en: String.raw`$3 + \sqrt{2}$` },
            { es: String.raw`$15 + 5\sqrt{2}$`, en: String.raw`$15 + 5\sqrt{2}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{5}{3 - \sqrt{2}} \cdot \frac{3 + \sqrt{2}}{3 + \sqrt{2}} = \frac{5(3 + \sqrt{2})}{9 - 2} = \frac{15 + 5\sqrt{2}}{7}$`,
            en: String.raw`$\frac{5}{3 - \sqrt{2}} \cdot \frac{3 + \sqrt{2}}{3 + \sqrt{2}} = \frac{5(3 + \sqrt{2})}{9 - 2} = \frac{15 + 5\sqrt{2}}{7}$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-41',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Racionaliza: $\frac{\sqrt{3}}{\sqrt{2} + \sqrt{5}}$`,
            en: String.raw`Rationalize: $\frac{\sqrt{3}}{\sqrt{2} + \sqrt{5}}$`,
          },
          options: [
            { es: String.raw`$\frac{\sqrt{6} - \sqrt{15}}{-3}$`, en: String.raw`$\frac{\sqrt{6} - \sqrt{15}}{-3}$` },
            { es: String.raw`$\frac{\sqrt{6} + \sqrt{15}}{3}$`, en: String.raw`$\frac{\sqrt{6} + \sqrt{15}}{3}$` },
            { es: String.raw`$\sqrt{6} - \sqrt{15}$`, en: String.raw`$\sqrt{6} - \sqrt{15}$` },
            { es: String.raw`$\frac{\sqrt{3}}{\sqrt{7}}$`, en: String.raw`$\frac{\sqrt{3}}{\sqrt{7}}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{\sqrt{3}}{\sqrt{2} + \sqrt{5}} \cdot \frac{\sqrt{2} - \sqrt{5}}{\sqrt{2} - \sqrt{5}} = \frac{\sqrt{6} - \sqrt{15}}{2 - 5} = \frac{\sqrt{6} - \sqrt{15}}{-3}$`,
            en: String.raw`$\frac{\sqrt{3}}{\sqrt{2} + \sqrt{5}} \cdot \frac{\sqrt{2} - \sqrt{5}}{\sqrt{2} - \sqrt{5}} = \frac{\sqrt{6} - \sqrt{15}}{2 - 5} = \frac{\sqrt{6} - \sqrt{15}}{-3}$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-42',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`En física, la impedancia es $Z = \frac{10}{1 + \sqrt{3}}$ ohmios. Racionaliza esta expresión.`,
            en: String.raw`In physics, the impedance is $Z = \frac{10}{1 + \sqrt{3}}$ ohms. Rationalize this expression.`,
          },
          options: [
            { es: String.raw`$5(1 - \sqrt{3}) = -5 + 5\sqrt{3}$ Ω`, en: String.raw`$5(1 - \sqrt{3}) = -5 + 5\sqrt{3}$ Ω` },
            { es: String.raw`$5(1 + \sqrt{3})$ Ω`, en: String.raw`$5(1 + \sqrt{3})$ Ω` },
            { es: String.raw`$10 - 10\sqrt{3}$ Ω`, en: String.raw`$10 - 10\sqrt{3}$ Ω` },
            { es: String.raw`$5$ Ω`, en: String.raw`$5$ Ω` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{10}{1 + \sqrt{3}} \cdot \frac{1 - \sqrt{3}}{1 - \sqrt{3}} = \frac{10(1 - \sqrt{3})}{-2} = -5(1 - \sqrt{3}) = -5 + 5\sqrt{3}$ Ω`,
            en: String.raw`$\frac{10}{1 + \sqrt{3}} \cdot \frac{1 - \sqrt{3}}{1 - \sqrt{3}} = \frac{10(1 - \sqrt{3})}{-2} = -5(1 - \sqrt{3}) = -5 + 5\sqrt{3}$ Ω`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-43',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Racionaliza completamente: $\frac{2\sqrt{3}}{3\sqrt{2} - 2\sqrt{3}}$`,
            en: String.raw`Fully rationalize: $\frac{2\sqrt{3}}{3\sqrt{2} - 2\sqrt{3}}$`,
          },
          options: [
            { es: String.raw`$\sqrt{6} + 2$`, en: String.raw`$\sqrt{6} + 2$` },
            { es: String.raw`$\sqrt{6} - 2$`, en: String.raw`$\sqrt{6} - 2$` },
            { es: String.raw`$3\sqrt{6} + 6$`, en: String.raw`$3\sqrt{6} + 6$` },
            { es: String.raw`$\frac{3\sqrt{6} - 6}{3}$`, en: String.raw`$\frac{3\sqrt{6} - 6}{3}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{2\sqrt{3}}{3\sqrt{2} - 2\sqrt{3}} \cdot \frac{3\sqrt{2} + 2\sqrt{3}}{3\sqrt{2} + 2\sqrt{3}} = \frac{6\sqrt{6} + 12}{6} = \sqrt{6} + 2$`,
            en: String.raw`$\frac{2\sqrt{3}}{3\sqrt{2} - 2\sqrt{3}} \cdot \frac{3\sqrt{2} + 2\sqrt{3}}{3\sqrt{2} + 2\sqrt{3}} = \frac{6\sqrt{6} + 12}{6} = \sqrt{6} + 2$`,
          },
          difficulty: 3,
        },
      ],
    },
    {
      id: 'operaciones-combinadas',
      topicId: 'exponentes',
      order: 5,
      title: {
        es: 'Operaciones combinadas',
        en: 'Combined operations',
      },
      description: {
        es: 'Expresiones complejas con múltiples operaciones',
        en: 'Complex expressions with multiple operations',
      },
      type: 'practice',
      xpReward: 30,
      questions: [
        {
          id: 'exponentes-44',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Evalúa: $2^3 + 3^2 - 4^1$`,
            en: String.raw`Evaluate: $2^3 + 3^2 - 4^1$`,
          },
          options: [
            { es: String.raw`$13$`, en: String.raw`$13$` },
            { es: String.raw`$17$`, en: String.raw`$17$` },
            { es: String.raw`$9$`, en: String.raw`$9$` },
            { es: String.raw`$21$`, en: String.raw`$21$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$2^3 + 3^2 - 4^1 = 8 + 9 - 4 = 13$`,
            en: String.raw`$2^3 + 3^2 - 4^1 = 8 + 9 - 4 = 13$`,
          },
          difficulty: 1,
        },
        {
          id: 'exponentes-45',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $(2^2)^3 - 2^6$`,
            en: String.raw`Simplify: $(2^2)^3 - 2^6$`,
          },
          options: [
            { es: String.raw`$0$`, en: String.raw`$0$` },
            { es: String.raw`$64$`, en: String.raw`$64$` },
            { es: String.raw`$-64$`, en: String.raw`$-64$` },
            { es: String.raw`$128$`, en: String.raw`$128$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$(2^2)^3 - 2^6 = 2^6 - 2^6 = 64 - 64 = 0$`,
            en: String.raw`$(2^2)^3 - 2^6 = 2^6 - 2^6 = 64 - 64 = 0$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-46',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\frac{2^5 \cdot 3^2}{2^3 \cdot 3}$`,
            en: String.raw`Simplify: $\frac{2^5 \cdot 3^2}{2^3 \cdot 3}$`,
          },
          options: [
            { es: String.raw`$12$`, en: String.raw`$12$` },
            { es: String.raw`$6$`, en: String.raw`$6$` },
            { es: String.raw`$24$`, en: String.raw`$24$` },
            { es: String.raw`$36$`, en: String.raw`$36$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{2^5 \cdot 3^2}{2^3 \cdot 3} = 2^{5-3} \cdot 3^{2-1} = 2^2 \cdot 3 = 4 \cdot 3 = 12$`,
            en: String.raw`$\frac{2^5 \cdot 3^2}{2^3 \cdot 3} = 2^{5-3} \cdot 3^{2-1} = 2^2 \cdot 3 = 4 \cdot 3 = 12$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-47',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Evalúa: $27^{1/3} + 16^{1/2} - 8^{1/3}$`,
            en: String.raw`Evaluate: $27^{1/3} + 16^{1/2} - 8^{1/3}$`,
          },
          options: [
            { es: String.raw`$5$`, en: String.raw`$5$` },
            { es: String.raw`$7$`, en: String.raw`$7$` },
            { es: String.raw`$9$`, en: String.raw`$9$` },
            { es: String.raw`$3$`, en: String.raw`$3$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$27^{1/3} + 16^{1/2} - 8^{1/3} = 3 + 4 - 2 = 5$`,
            en: String.raw`$27^{1/3} + 16^{1/2} - 8^{1/3} = 3 + 4 - 2 = 5$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-48',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\sqrt{8} + \sqrt{18} - \sqrt{32}$`,
            en: String.raw`Simplify: $\sqrt{8} + \sqrt{18} - \sqrt{32}$`,
          },
          options: [
            { es: String.raw`$\sqrt{2}$`, en: String.raw`$\sqrt{2}$` },
            { es: String.raw`$2\sqrt{2}$`, en: String.raw`$2\sqrt{2}$` },
            { es: String.raw`$-\sqrt{2}$`, en: String.raw`$-\sqrt{2}$` },
            { es: String.raw`$0$`, en: String.raw`$0$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\sqrt{8} + \sqrt{18} - \sqrt{32} = 2\sqrt{2} + 3\sqrt{2} - 4\sqrt{2} = \sqrt{2}$`,
            en: String.raw`$\sqrt{8} + \sqrt{18} - \sqrt{32} = 2\sqrt{2} + 3\sqrt{2} - 4\sqrt{2} = \sqrt{2}$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-49',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\frac{(3^2)^3 \cdot 3^{-4}}{3^3}$`,
            en: String.raw`Simplify: $\frac{(3^2)^3 \cdot 3^{-4}}{3^3}$`,
          },
          options: [
            { es: String.raw`$3^{-1} = \frac{1}{3}$`, en: String.raw`$3^{-1} = \frac{1}{3}$` },
            { es: String.raw`$3$`, en: String.raw`$3$` },
            { es: String.raw`$9$`, en: String.raw`$9$` },
            { es: String.raw`$1$`, en: String.raw`$1$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{(3^2)^3 \cdot 3^{-4}}{3^3} = \frac{3^6 \cdot 3^{-4}}{3^3} = \frac{3^2}{3^3} = 3^{-1} = \frac{1}{3}$`,
            en: String.raw`$\frac{(3^2)^3 \cdot 3^{-4}}{3^3} = \frac{3^6 \cdot 3^{-4}}{3^3} = \frac{3^2}{3^3} = 3^{-1} = \frac{1}{3}$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-50',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Una inversión crece según $V = P(1.05)^t$. Si inviertes \$10{,}000, ¿cuánto tendrás en 3 años?`,
            en: String.raw`An investment grows according to $V = P(1.05)^t$. If you invest \$10{,}000, how much will you have in 3 years?`,
          },
          options: [
            { es: String.raw`$\$11{,}576.25$`, en: String.raw`$\$11{,}576.25$` },
            { es: String.raw`$\$11{,}500$`, en: String.raw`$\$11{,}500$` },
            { es: String.raw`$\$11{,}000$`, en: String.raw`$\$11{,}000$` },
            { es: String.raw`$\$12{,}000$`, en: String.raw`$\$12{,}000$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$V = 10000(1.05)^3 = 10000(1.157625) = \$11{,}576.25$`,
            en: String.raw`$V = 10000(1.05)^3 = 10000(1.157625) = \$11{,}576.25$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-51',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $(\sqrt{2} + 1)(\sqrt{2} - 1)$`,
            en: String.raw`Simplify: $(\sqrt{2} + 1)(\sqrt{2} - 1)$`,
          },
          options: [
            { es: String.raw`$1$`, en: String.raw`$1$` },
            { es: String.raw`$2$`, en: String.raw`$2$` },
            { es: String.raw`$\sqrt{2}$`, en: String.raw`$\sqrt{2}$` },
            { es: String.raw`$0$`, en: String.raw`$0$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$(\sqrt{2} + 1)(\sqrt{2} - 1) = (\sqrt{2})^2 - 1^2 = 2 - 1 = 1$`,
            en: String.raw`$(\sqrt{2} + 1)(\sqrt{2} - 1) = (\sqrt{2})^2 - 1^2 = 2 - 1 = 1$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-52',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`La población de una ciudad decrece según $P = P_0(0.95)^t$. Si hoy tiene 50{,}000 habitantes, ¿cuántos tendrá en 2 años?`,
            en: String.raw`The population of a city decreases according to $P = P_0(0.95)^t$. If it has 50{,}000 inhabitants today, how many will it have in 2 years?`,
          },
          options: [
            { es: String.raw`$45{,}125$ habitantes`, en: String.raw`$45{,}125$ inhabitants` },
            { es: String.raw`$47{,}500$ habitantes`, en: String.raw`$47{,}500$ inhabitants` },
            { es: String.raw`$45{,}000$ habitantes`, en: String.raw`$45{,}000$ inhabitants` },
            { es: String.raw`$40{,}000$ habitantes`, en: String.raw`$40{,}000$ inhabitants` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$P = 50000(0.95)^2 = 50000(0.9025) = 45{,}125$ habitantes`,
            en: String.raw`$P = 50000(0.95)^2 = 50000(0.9025) = 45{,}125$ inhabitants`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-53',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Evalúa: $\frac{8^{2/3} - 4^{3/2}}{2^2}$`,
            en: String.raw`Evaluate: $\frac{8^{2/3} - 4^{3/2}}{2^2}$`,
          },
          options: [
            { es: String.raw`$-1$`, en: String.raw`$-1$` },
            { es: String.raw`$1$`, en: String.raw`$1$` },
            { es: String.raw`$0$`, en: String.raw`$0$` },
            { es: String.raw`$-2$`, en: String.raw`$-2$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{8^{2/3} - 4^{3/2}}{2^2} = \frac{4 - 8}{4} = \frac{-4}{4} = -1$`,
            en: String.raw`$\frac{8^{2/3} - 4^{3/2}}{2^2} = \frac{4 - 8}{4} = \frac{-4}{4} = -1$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-54',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\frac{(2^{1/2})^4 \cdot (2^{-1})^2}{2^0 \cdot 2^{1/2}}$`,
            en: String.raw`Simplify: $\frac{(2^{1/2})^4 \cdot (2^{-1})^2}{2^0 \cdot 2^{1/2}}$`,
          },
          options: [
            { es: String.raw`$2^{-1/2} = \frac{\sqrt{2}}{2}$`, en: String.raw`$2^{-1/2} = \frac{\sqrt{2}}{2}$` },
            { es: String.raw`$2$`, en: String.raw`$2$` },
            { es: String.raw`$1$`, en: String.raw`$1$` },
            { es: String.raw`$\frac{1}{2}$`, en: String.raw`$\frac{1}{2}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{2^2 \cdot 2^{-2}}{1 \cdot 2^{1/2}} = \frac{2^0}{2^{1/2}} = 2^{-1/2} = \frac{\sqrt{2}}{2}$`,
            en: String.raw`$\frac{2^2 \cdot 2^{-2}}{1 \cdot 2^{1/2}} = \frac{2^0}{2^{1/2}} = 2^{-1/2} = \frac{\sqrt{2}}{2}$`,
          },
          difficulty: 3,
        },
      ],
    },
    {
      id: 'quiz-final-exponentes',
      topicId: 'exponentes',
      order: 6,
      title: {
        es: 'Quiz final de exponentes',
        en: 'Final exponents quiz',
      },
      description: {
        es: 'Evaluación integral de leyes de exponentes',
        en: 'Comprehensive evaluation of exponent laws',
      },
      type: 'quiz',
      xpReward: 50,
      questions: [
        {
          id: 'exponentes-55',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\frac{(2x^3y^{-2})^3}{4x^5y^{-4}}$`,
            en: String.raw`Simplify: $\frac{(2x^3y^{-2})^3}{4x^5y^{-4}}$`,
          },
          options: [
            { es: String.raw`$2x^4y^{-2} = \frac{2x^4}{y^2}$`, en: String.raw`$2x^4y^{-2} = \frac{2x^4}{y^2}$` },
            { es: String.raw`$2x^{14}y^{-2}$`, en: String.raw`$2x^{14}y^{-2}$` },
            { es: String.raw`$\frac{x^4}{2y^2}$`, en: String.raw`$\frac{x^4}{2y^2}$` },
            { es: String.raw`$2x^4y^2$`, en: String.raw`$2x^4y^2$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{8x^9y^{-6}}{4x^5y^{-4}} = 2x^{4}y^{-2} = \frac{2x^4}{y^2}$`,
            en: String.raw`$\frac{8x^9y^{-6}}{4x^5y^{-4}} = 2x^{4}y^{-2} = \frac{2x^4}{y^2}$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-56',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Evalúa: $(64)^{-2/3}$`,
            en: String.raw`Evaluate: $(64)^{-2/3}$`,
          },
          options: [
            { es: String.raw`$\frac{1}{16}$`, en: String.raw`$\frac{1}{16}$` },
            { es: String.raw`$\frac{1}{4}$`, en: String.raw`$\frac{1}{4}$` },
            { es: String.raw`$16$`, en: String.raw`$16$` },
            { es: String.raw`$-16$`, en: String.raw`$-16$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$(64)^{-2/3} = \frac{1}{(\sqrt[3]{64})^2} = \frac{1}{4^2} = \frac{1}{16}$`,
            en: String.raw`$(64)^{-2/3} = \frac{1}{(\sqrt[3]{64})^2} = \frac{1}{4^2} = \frac{1}{16}$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-57',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\sqrt{75} - \sqrt{48} + \sqrt{12}$`,
            en: String.raw`Simplify: $\sqrt{75} - \sqrt{48} + \sqrt{12}$`,
          },
          options: [
            { es: String.raw`$3\sqrt{3}$`, en: String.raw`$3\sqrt{3}$` },
            { es: String.raw`$5\sqrt{3}$`, en: String.raw`$5\sqrt{3}$` },
            { es: String.raw`$\sqrt{39}$`, en: String.raw`$\sqrt{39}$` },
            { es: String.raw`$7\sqrt{3}$`, en: String.raw`$7\sqrt{3}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\sqrt{75} - \sqrt{48} + \sqrt{12} = 5\sqrt{3} - 4\sqrt{3} + 2\sqrt{3} = 3\sqrt{3}$`,
            en: String.raw`$\sqrt{75} - \sqrt{48} + \sqrt{12} = 5\sqrt{3} - 4\sqrt{3} + 2\sqrt{3} = 3\sqrt{3}$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-58',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Racionaliza: $\frac{4}{2 - \sqrt{5}}$`,
            en: String.raw`Rationalize: $\frac{4}{2 - \sqrt{5}}$`,
          },
          options: [
            { es: String.raw`$-8 - 4\sqrt{5}$`, en: String.raw`$-8 - 4\sqrt{5}$` },
            { es: String.raw`$8 + 4\sqrt{5}$`, en: String.raw`$8 + 4\sqrt{5}$` },
            { es: String.raw`$2 + \sqrt{5}$`, en: String.raw`$2 + \sqrt{5}$` },
            { es: String.raw`$-2 - \sqrt{5}$`, en: String.raw`$-2 - \sqrt{5}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{4}{2 - \sqrt{5}} \cdot \frac{2 + \sqrt{5}}{2 + \sqrt{5}} = \frac{4(2 + \sqrt{5})}{-1} = -8 - 4\sqrt{5}$`,
            en: String.raw`$\frac{4}{2 - \sqrt{5}} \cdot \frac{2 + \sqrt{5}}{2 + \sqrt{5}} = \frac{4(2 + \sqrt{5})}{-1} = -8 - 4\sqrt{5}$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-59',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Un virus se duplica cada 20 min. Si hay inicialmente $2^4$ virus, ¿cuántos habrá en 2 horas?`,
            en: String.raw`A virus doubles every 20 min. If there are initially $2^4$ viruses, how many will there be in 2 hours?`,
          },
          options: [
            { es: String.raw`$2^{10} = 1{,}024$ virus`, en: String.raw`$2^{10} = 1{,}024$ viruses` },
            { es: String.raw`$2^{12} = 4{,}096$ virus`, en: String.raw`$2^{12} = 4{,}096$ viruses` },
            { es: String.raw`$2^8 = 256$ virus`, en: String.raw`$2^8 = 256$ viruses` },
            { es: String.raw`$2^6 = 64$ virus`, en: String.raw`$2^6 = 64$ viruses` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`En 2 horas hay $120/20 = 6$ duplicaciones: $2^4 \cdot 2^6 = 2^{10} = 1{,}024$ virus`,
            en: String.raw`In 2 hours there are $120/20 = 6$ doublings: $2^4 \cdot 2^6 = 2^{10} = 1{,}024$ viruses`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-60',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Un auto se deprecia 15% anual. Si cuesta \$200{,}000 hoy, ¿cuánto valdrá en 3 años?`,
            en: String.raw`A car depreciates 15% annually. If it costs \$200{,}000 today, how much will it be worth in 3 years?`,
          },
          options: [
            { es: String.raw`$\$122{,}825$`, en: String.raw`$\$122{,}825$` },
            { es: String.raw`$\$110{,}000$`, en: String.raw`$\$110{,}000$` },
            { es: String.raw`$\$144{,}500$`, en: String.raw`$\$144{,}500$` },
            { es: String.raw`$\$170{,}000$`, en: String.raw`$\$170{,}000$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$V = 200000(0.85)^3 = 200000(0.614125) = \$122{,}825$`,
            en: String.raw`$V = 200000(0.85)^3 = 200000(0.614125) = \$122{,}825$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-61',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\frac{\sqrt{200}}{\sqrt{2}}$`,
            en: String.raw`Simplify: $\frac{\sqrt{200}}{\sqrt{2}}$`,
          },
          options: [
            { es: String.raw`$10$`, en: String.raw`$10$` },
            { es: String.raw`$100$`, en: String.raw`$100$` },
            { es: String.raw`$\sqrt{100}$`, en: String.raw`$\sqrt{100}$` },
            { es: String.raw`$20$`, en: String.raw`$20$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{\sqrt{200}}{\sqrt{2}} = \sqrt{\frac{200}{2}} = \sqrt{100} = 10$`,
            en: String.raw`$\frac{\sqrt{200}}{\sqrt{2}} = \sqrt{\frac{200}{2}} = \sqrt{100} = 10$`,
          },
          difficulty: 2,
        },
        {
          id: 'exponentes-62',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`El período de un péndulo es $T = 2\pi\sqrt{\frac{L}{g}}$. Si $L = 4$ m y $g = 10$ m/s², ¿cuál es $T$?`,
            en: String.raw`A pendulum's period is $T = 2\pi\sqrt{\frac{L}{g}}$. If $L = 4$ m and $g = 10$ m/s², what is $T$?`,
          },
          options: [
            { es: String.raw`$T \approx 3.97$ s (usa $\pi \approx 3.14$)`, en: String.raw`$T \approx 3.97$ s (use $\pi \approx 3.14$)` },
            { es: String.raw`$T \approx 2.51$ s`, en: String.raw`$T \approx 2.51$ s` },
            { es: String.raw`$T \approx 6.28$ s`, en: String.raw`$T \approx 6.28$ s` },
            { es: String.raw`$T \approx 1.26$ s`, en: String.raw`$T \approx 1.26$ s` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$T = 2\pi\sqrt{0.4} = 2(3.14)(0.632) \approx 3.97$ s`,
            en: String.raw`$T = 2\pi\sqrt{0.4} = 2(3.14)(0.632) \approx 3.97$ s`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-63',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Evalúa: $\left(\frac{27}{8}\right)^{-2/3}$`,
            en: String.raw`Evaluate: $\left(\frac{27}{8}\right)^{-2/3}$`,
          },
          options: [
            { es: String.raw`$\frac{4}{9}$`, en: String.raw`$\frac{4}{9}$` },
            { es: String.raw`$\frac{9}{4}$`, en: String.raw`$\frac{9}{4}$` },
            { es: String.raw`$\frac{2}{3}$`, en: String.raw`$\frac{2}{3}$` },
            { es: String.raw`$\frac{3}{2}$`, en: String.raw`$\frac{3}{2}$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\left(\frac{27}{8}\right)^{-2/3} = \left(\frac{8}{27}\right)^{2/3} = \frac{4}{9}$`,
            en: String.raw`$\left(\frac{27}{8}\right)^{-2/3} = \left(\frac{8}{27}\right)^{2/3} = \frac{4}{9}$`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-64',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Una sustancia radiactiva decae según $N = N_0(0.5)^{t/30}$. Si hay 1000 g hoy, ¿cuánto quedará en 90 años?`,
            en: String.raw`A radioactive substance decays according to $N = N_0(0.5)^{t/30}$. If there are 1000 g today, how much will remain in 90 years?`,
          },
          options: [
            { es: String.raw`$125$ g`, en: String.raw`$125$ g` },
            { es: String.raw`$250$ g`, en: String.raw`$250$ g` },
            { es: String.raw`$500$ g`, en: String.raw`$500$ g` },
            { es: String.raw`$62.5$ g`, en: String.raw`$62.5$ g` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$N = 1000(0.5)^{90/30} = 1000(0.5)^3 = 1000/8 = 125$ g`,
            en: String.raw`$N = 1000(0.5)^{90/30} = 1000(0.5)^3 = 1000/8 = 125$ g`,
          },
          difficulty: 3,
        },
        {
          id: 'exponentes-65',
          type: 'multiple-choice',
          prompt: {
            es: String.raw`Simplifica: $\frac{(x^{1/2}y)^4 \cdot (x^{-1}y^2)^{1/2}}{x^{3/2}y^3}$`,
            en: String.raw`Simplify: $\frac{(x^{1/2}y)^4 \cdot (x^{-1}y^2)^{1/2}}{x^{3/2}y^3}$`,
          },
          options: [
            { es: String.raw`$y^2$`, en: String.raw`$y^2$` },
            { es: String.raw`$xy$`, en: String.raw`$xy$` },
            { es: String.raw`$x$`, en: String.raw`$x$` },
            { es: String.raw`$1$`, en: String.raw`$1$` },
          ],
          correctAnswer: '0',
          explanation: {
            es: String.raw`$\frac{x^2y^4 \cdot x^{-1/2}y}{x^{3/2}y^3} = \frac{x^{3/2}y^5}{x^{3/2}y^3} = y^2$`,
            en: String.raw`$\frac{x^2y^4 \cdot x^{-1/2}y}{x^{3/2}y^3} = \frac{x^{3/2}y^5}{x^{3/2}y^3} = y^2$`,
          },
          difficulty: 3,
        },
      ],
    },
  ],
};
