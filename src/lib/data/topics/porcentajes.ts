import type { Topic } from "@/lib/types";

export const porcentajesTopic: Topic = {
  id: "porcentajes",
  slug: "porcentajes",
  title: {
    es: "Porcentajes",
    en: "Percentages",
  },
  description: {
    es: "Porcentajes, proporciones e interés",
    en: "Percentages, proportions and interest",
  },
  icon: "Percent",
  color: "purple",
  bgGradient: "bg-linear-to-br from-purple-500 to-violet-600",
  prerequisites: ["decimales"],
  order: 4,
  lessons: [
    {
      id: "conceptos-basicos",
      topicId: "porcentajes",
      order: 1,
      title: {
        es: "Conceptos básicos de porcentajes",
        en: "Basic percentage concepts",
      },
      description: {
        es: "Conversión entre porcentajes, decimales y fracciones",
        en: "Conversion between percentages, decimals and fractions",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "porcentajes-1",
          type: "multiple-choice",
          prompt: {
            es: String.raw`¿Qué fracción equivale a $25\%$?`,
            en: String.raw`What fraction is equivalent to $25\%$?`,
          },
          options: [
            { es: String.raw`$\frac{1}{2}$`, en: String.raw`$\frac{1}{2}$` },
            { es: String.raw`$\frac{1}{4}$`, en: String.raw`$\frac{1}{4}$` },
            { es: String.raw`$\frac{1}{5}$`, en: String.raw`$\frac{1}{5}$` },
            { es: String.raw`$\frac{2}{5}$`, en: String.raw`$\frac{2}{5}$` },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$25\% = \frac{25}{100} = \textcolor{#22c55e}{\frac{1}{4}}$`,
            en: String.raw`$25\% = \frac{25}{100} = \textcolor{#22c55e}{\frac{1}{4}}$`,
          },
          difficulty: 1,
        },
        {
          id: "porcentajes-2",
          type: "fill-blank",
          prompt: {
            es: String.raw`Convierte $0.35$ a porcentaje: ____%`,
            en: String.raw`Convert $0.35$ to a percentage: ____%`,
          },
          correctAnswer: "35",
          explanation: {
            es: String.raw`$0.35 = 0.35 \times 100\% = \textcolor{#22c55e}{35\%}$`,
            en: String.raw`$0.35 = 0.35 \times 100\% = \textcolor{#22c55e}{35\%}$`,
          },
          difficulty: 1,
        },
        {
          id: "porcentajes-3",
          type: "multiple-choice",
          prompt: {
            es: String.raw`¿Cuál es el $40\%$ de $150$?`,
            en: String.raw`What is $40\%$ of $150$?`,
          },
          options: [
            { es: "$40$", en: "$40$" },
            { es: "$50$", en: "$50$" },
            { es: "$60$", en: "$60$" },
            { es: "$75$", en: "$75$" },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$40\% \text{ de } 150 = 0.40 \times 150 = \textcolor{#22c55e}{60}$`,
            en: String.raw`$40\% \text{ of } 150 = 0.40 \times 150 = \textcolor{#22c55e}{60}$`,
          },
          difficulty: 1,
        },
        {
          id: "porcentajes-4",
          type: "multiple-choice",
          prompt: {
            es: String.raw`$\frac{3}{5}$ equivale a:`,
            en: String.raw`$\frac{3}{5}$ is equivalent to:`,
          },
          options: [
            { es: "$30\%$", en: "$30\%$" },
            { es: "$35\%$", en: "$35\%$" },
            { es: "$50\%$", en: "$50\%$" },
            { es: "$60\%$", en: "$60\%$" },
          ],
          correctAnswer: "3",
          explanation: {
            es: String.raw`$\frac{3}{5} = 0.6 = \textcolor{#22c55e}{60\%}$`,
            en: String.raw`$\frac{3}{5} = 0.6 = \textcolor{#22c55e}{60\%}$`,
          },
          difficulty: 1,
        },
        {
          id: "porcentajes-5",
          type: "fill-blank",
          prompt: {
            es: String.raw`¿Qué porcentaje de $200$ es $50$? ____%`,
            en: String.raw`What percentage of $200$ is $50$? ____%`,
          },
          correctAnswer: "25",
          explanation: {
            es: String.raw`$\frac{50}{200} = 0.25 = \textcolor{#22c55e}{25\%}$`,
            en: String.raw`$\frac{50}{200} = 0.25 = \textcolor{#22c55e}{25\%}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-6",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Si $12$ es el $30\%$ de un número, ¿cuál es ese número?`,
            en: String.raw`If $12$ is $30\%$ of a number, what is that number?`,
          },
          options: [
            { es: "$36$", en: "$36$" },
            { es: "$40$", en: "$40$" },
            { es: "$42$", en: "$42$" },
            { es: "$48$", en: "$48$" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Sea } x \text{ el número: } 0.30x = 12 \Rightarrow x = \frac{12}{0.30} = \textcolor{#22c55e}{40}$`,
            en: String.raw`$\text{Let } x \text{ be the number: } 0.30x = 12 \Rightarrow x = \frac{12}{0.30} = \textcolor{#22c55e}{40}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-7",
          type: "multiple-choice",
          prompt: {
            es: String.raw`En un grupo de $80$ estudiantes, el $35\%$ practica deportes. ¿Cuántos estudiantes practican deportes?`,
            en: String.raw`In a group of $80$ students, $35\%$ play sports. How many students play sports?`,
          },
          options: [
            { es: "$24$", en: "$24$" },
            { es: "$26$", en: "$26$" },
            { es: "$28$", en: "$28$" },
            { es: "$30$", en: "$30$" },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$35\% \text{ de } 80 = 0.35 \times 80 = \textcolor{#22c55e}{28} \text{ estudiantes}$`,
            en: String.raw`$35\% \text{ of } 80 = 0.35 \times 80 = \textcolor{#22c55e}{28} \text{ students}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-8",
          type: "multiple-choice",
          prompt: {
            es: String.raw`¿Qué decimal corresponde a $125\%$?`,
            en: String.raw`What decimal corresponds to $125\%$?`,
          },
          options: [
            { es: "$0.125$", en: "$0.125$" },
            { es: "$1.25$", en: "$1.25$" },
            { es: "$12.5$", en: "$12.5$" },
            { es: "$125$", en: "$125$" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$125\% = \frac{125}{100} = \textcolor{#22c55e}{1.25}$`,
            en: String.raw`$125\% = \frac{125}{100} = \textcolor{#22c55e}{1.25}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-9",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Una computadora cuesta $\$8,000$. Si su precio aumenta un $15\%$, ¿cuál será su nuevo precio?`,
            en: String.raw`A computer costs $\$8,000$. If its price increases by $15\%$, what will be its new price?`,
          },
          options: [
            { es: String.raw`$\$8,150$`, en: String.raw`$\$8,150$` },
            { es: String.raw`$\$8,800$`, en: String.raw`$\$8,800$` },
            { es: String.raw`$\$9,200$`, en: String.raw`$\$9,200$` },
            { es: String.raw`$\$9,600$`, en: String.raw`$\$9,600$` },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$\text{Aumento} = 8000 \times 0.15 = 1200$. $\text{Nuevo precio} = 8000 + 1200 = \textcolor{#22c55e}{\$9,200}$`,
            en: String.raw`$\text{Increase} = 8000 \times 0.15 = 1200$. $\text{New price} = 8000 + 1200 = \textcolor{#22c55e}{\$9,200}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-10",
          type: "multiple-choice",
          prompt: {
            es: String.raw`En una tienda, un televisor de $\$12,000$ tiene un descuento del $20\%$ y después se aplica IVA del $16\%$. ¿Cuál es el precio final?`,
            en: String.raw`In a store, a $\$12,000$ TV has a $20\%$ discount and then $16\%$ tax is applied. What is the final price?`,
          },
          options: [
            { es: String.raw`$\$10,560$`, en: String.raw`$\$10,560$` },
            { es: String.raw`$\$11,136$`, en: String.raw`$\$11,136$` },
            { es: String.raw`$\$11,520$`, en: String.raw`$\$11,520$` },
            { es: String.raw`$\$12,480$`, en: String.raw`$\$12,480$` },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Después de descuento: } 12000 \times 0.80 = 9600$. $\text{Con IVA: } 9600 \times 1.16 = \textcolor{#22c55e}{\$11,136}$`,
            en: String.raw`$\text{After discount: } 12000 \times 0.80 = 9600$. $\text{With tax: } 9600 \times 1.16 = \textcolor{#22c55e}{\$11,136}$`,
          },
          difficulty: 3,
        },
      ],
    },
    {
      id: "descuentos-aumentos",
      topicId: "porcentajes",
      order: 2,
      title: {
        es: "Descuentos y aumentos",
        en: "Discounts and increases",
      },
      description: {
        es: "Aplicación de porcentajes en situaciones comerciales",
        en: "Applying percentages in commercial situations",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "porcentajes-11",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Una chamarra cuesta $\$850$ después de aplicar un descuento del $15\%$. ¿Cuál era su precio original?`,
            en: String.raw`A jacket costs $\$850$ after applying a $15\%$ discount. What was its original price?`,
          },
          options: [
            { es: String.raw`$\$950$`, en: String.raw`$\$950$` },
            { es: String.raw`$\$980$`, en: String.raw`$\$980$` },
            { es: String.raw`$\$1,000$`, en: String.raw`$\$1,000$` },
            { es: String.raw`$\$1,020$`, en: String.raw`$\$1,020$` },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$\text{Sea } x \text{ el precio original: } 0.85x = 850 \Rightarrow x = \frac{850}{0.85} = \textcolor{#22c55e}{\$1,000}$`,
            en: String.raw`$\text{Let } x \text{ be the original price: } 0.85x = 850 \Rightarrow x = \frac{850}{0.85} = \textcolor{#22c55e}{\$1,000}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-12",
          type: "multiple-choice",
          prompt: {
            es: String.raw`El salario de María era de $\$15,000$ y recibió un aumento del $8\%$. Tres meses después recibió otro aumento del $5\%$. ¿Cuál es su salario actual?`,
            en: String.raw`Maria's salary was $\$15,000$ and she received an $8\%$ raise. Three months later she received another $5\%$ raise. What is her current salary?`,
          },
          options: [
            { es: String.raw`$\$16,800$`, en: String.raw`$\$16,800$` },
            { es: String.raw`$\$16,950$`, en: String.raw`$\$16,950$` },
            { es: String.raw`$\$17,010$`, en: String.raw`$\$17,010$` },
            { es: String.raw`$\$17,200$`, en: String.raw`$\$17,200$` },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$\text{Primer aumento: } 15000 \times 1.08 = 16200$. $\text{Segundo aumento: } 16200 \times 1.05 = \textcolor{#22c55e}{\$17,010}$`,
            en: String.raw`$\text{First raise: } 15000 \times 1.08 = 16200$. $\text{Second raise: } 16200 \times 1.05 = \textcolor{#22c55e}{\$17,010}$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-13",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Una tienda ofrece: "Pague 2 y llévese 3". ¿Qué porcentaje de descuento se está aplicando?`,
            en: String.raw`A store offers: "Pay for 2 and take 3". What percentage discount is being applied?`,
          },
          options: [
            { es: "$30\%$", en: "$30\%$" },
            { es: "$33.33\%$", en: "$33.33\%$" },
            { es: "$40\%$", en: "$40\%$" },
            { es: "$50\%$", en: "$50\%$" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Pagas } 2 \text{ de } 3 = \frac{2}{3}$. $\text{Descuento: } 1 - \frac{2}{3} = \frac{1}{3} \approx \textcolor{#22c55e}{33.33\%}$`,
            en: String.raw`$\text{You pay } 2 \text{ of } 3 = \frac{2}{3}$. $\text{Discount: } 1 - \frac{2}{3} = \frac{1}{3} \approx \textcolor{#22c55e}{33.33\%}$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-14",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Un producto cuesta $\$500$ sin IVA. Si el IVA es del $16\%$, ¿cuánto se paga en total?`,
            en: String.raw`A product costs $\$500$ without tax. If the tax is $16\%$, how much is paid in total?`,
          },
          options: [
            { es: String.raw`$\$516$`, en: String.raw`$\$516$` },
            { es: String.raw`$\$560$`, en: String.raw`$\$560$` },
            { es: String.raw`$\$580$`, en: String.raw`$\$580$` },
            { es: String.raw`$\$600$`, en: String.raw`$\$600$` },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$500 \times 1.16 = \textcolor{#22c55e}{\$580}$`,
            en: String.raw`$500 \times 1.16 = \textcolor{#22c55e}{\$580}$`,
          },
          difficulty: 1,
        },
        {
          id: "porcentajes-15",
          type: "multiple-choice",
          prompt: {
            es: String.raw`El precio de un artículo aumentó de $\$640$ a $\$800$. ¿Qué porcentaje aumentó?`,
            en: String.raw`The price of an item increased from $\$640$ to $\$800$. What percentage did it increase?`,
          },
          options: [
            { es: "$20\%$", en: "$20\%$" },
            { es: "$25\%$", en: "$25\%$" },
            { es: "$30\%$", en: "$30\%$" },
            { es: "$35\%$", en: "$35\%$" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Aumento: } \frac{800-640}{640} = \frac{160}{640} = 0.25 = \textcolor{#22c55e}{25\%}$`,
            en: String.raw`$\text{Increase: } \frac{800-640}{640} = \frac{160}{640} = 0.25 = \textcolor{#22c55e}{25\%}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-16",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Una televisión cuesta $\$15,000$ con IVA incluido ($16\%$). ¿Cuál es su precio sin IVA?`,
            en: String.raw`A TV costs $\$15,000$ with tax included ($16\%$). What is its price without tax?`,
          },
          options: [
            { es: String.raw`$\$12,600$`, en: String.raw`$\$12,600$` },
            { es: String.raw`$\$12,931$`, en: String.raw`$\$12,931$` },
            { es: String.raw`$\$13,200$`, en: String.raw`$\$13,200$` },
            { es: String.raw`$\$14,000$`, en: String.raw`$\$14,000$` },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Sea } x \text{ el precio sin IVA: } 1.16x = 15000 \Rightarrow x = \frac{15000}{1.16} \approx \textcolor{#22c55e}{\$12,931}$`,
            en: String.raw`$\text{Let } x \text{ be the price without tax: } 1.16x = 15000 \Rightarrow x = \frac{15000}{1.16} \approx \textcolor{#22c55e}{\$12,931}$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-17",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Dos tiendas venden el mismo celular. La tienda A lo ofrece con $40\%$ de descuento sobre $\$8,000$. La tienda B lo ofrece con dos descuentos sucesivos del $25\%$ cada uno sobre $\$8,000$. ¿Cuál es más barato?`,
            en: String.raw`Two stores sell the same phone. Store A offers it with a $40\%$ discount on $\$8,000$. Store B offers it with two successive $25\%$ discounts on $\$8,000$. Which is cheaper?`,
          },
          options: [
            { es: "Tienda A", en: "Store A" },
            { es: "Tienda B", en: "Store B" },
            { es: "Ambos cuestan igual", en: "Both cost the same" },
            { es: "Faltan datos", en: "Not enough data" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Tienda A: } 8000 \times 0.60 = \$4,800$. $\text{Tienda B: } 8000 \times 0.75 \times 0.75 = \$4,500$. $\therefore \textcolor{#22c55e}{\text{Tienda B es más barata}}$`,
            en: String.raw`$\text{Store A: } 8000 \times 0.60 = \$4,800$. $\text{Store B: } 8000 \times 0.75 \times 0.75 = \$4,500$. $\therefore \textcolor{#22c55e}{\text{Store B is cheaper}}$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-18",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Una inversión de $\$10,000$ pierde el $20\%$ de su valor. ¿Qué porcentaje debe aumentar para recuperar su valor original?`,
            en: String.raw`An investment of $\$10,000$ loses $20\%$ of its value. What percentage must it increase to recover its original value?`,
          },
          options: [
            { es: "$20\%$", en: "$20\%$" },
            { es: "$22\%$", en: "$22\%$" },
            { es: "$25\%$", en: "$25\%$" },
            { es: "$30\%$", en: "$30\%$" },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$\text{Valor después de pérdida: } 10000 \times 0.80 = 8000$. $\text{Aumento necesario: } \frac{10000-8000}{8000} = \frac{2000}{8000} = \textcolor{#22c55e}{25\%}$`,
            en: String.raw`$\text{Value after loss: } 10000 \times 0.80 = 8000$. $\text{Increase needed: } \frac{10000-8000}{8000} = \frac{2000}{8000} = \textcolor{#22c55e}{25\%}$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-19",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Un restaurante aplica $15\%$ de propina y $10\%$ de impuestos sobre la cuenta. Si la cuenta es de $\$500$, ¿cuánto se paga en total? (La propina se calcula sobre el total con impuestos)`,
            en: String.raw`A restaurant applies a $15\%$ tip and $10\%$ taxes on the bill. If the bill is $\$500$, how much is paid in total? (The tip is calculated on the total with taxes)`,
          },
          options: [
            { es: String.raw`$\$625$`, en: String.raw`$\$625$` },
            { es: String.raw`$\$630$`, en: String.raw`$\$630$` },
            { es: String.raw`$\$632.50$`, en: String.raw`$\$632.50$` },
            { es: String.raw`$\$650$`, en: String.raw`$\$650$` },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$\text{Con impuestos: } 500 \times 1.10 = 550$. $\text{Con propina: } 550 \times 1.15 = \textcolor{#22c55e}{\$632.50}$`,
            en: String.raw`$\text{With taxes: } 500 \times 1.10 = 550$. $\text{With tip: } 550 \times 1.15 = \textcolor{#22c55e}{\$632.50}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-20",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Una población de $50,000$ habitantes crece $3\%$ anualmente. ¿Cuántos habitantes habrá después de 2 años?`,
            en: String.raw`A population of $50,000$ inhabitants grows $3\%$ annually. How many inhabitants will there be after 2 years?`,
          },
          options: [
            { es: "$53,000$", en: "$53,000$" },
            { es: "$53,045$", en: "$53,045$" },
            { es: "$54,000$", en: "$54,000$" },
            { es: "$56,000$", en: "$56,000$" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$50000 \times (1.03)^2 = 50000 \times 1.0609 = \textcolor{#22c55e}{53,045} \text{ habitantes}$`,
            en: String.raw`$50000 \times (1.03)^2 = 50000 \times 1.0609 = \textcolor{#22c55e}{53,045} \text{ inhabitants}$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-21",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Un auto se deprecia (pierde valor) $15\%$ cada año. Si su valor inicial es $\$200,000$, ¿cuál será su valor después de 2 años?`,
            en: String.raw`A car depreciates (loses value) $15\%$ each year. If its initial value is $\$200,000$, what will its value be after 2 years?`,
          },
          options: [
            { es: String.raw`$\$140,000$`, en: String.raw`$\$140,000$` },
            { es: String.raw`$\$142,500$`, en: String.raw`$\$142,500$` },
            { es: String.raw`$\$144,500$`, en: String.raw`$\$144,500$` },
            { es: String.raw`$\$145,000$`, en: String.raw`$\$145,000$` },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$200000 \times (0.85)^2 = 200000 \times 0.7225 = \textcolor{#22c55e}{\$144,500}$`,
            en: String.raw`$200000 \times (0.85)^2 = 200000 \times 0.7225 = \textcolor{#22c55e}{\$144,500}$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-22",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Un producto cuesta $\$2,320$ con IVA ($16\%$) y un descuento del $20\%$ ya aplicado. ¿Cuál era su precio original antes del descuento y sin IVA?`,
            en: String.raw`A product costs $\$2,320$ with tax ($16\%$) and a $20\%$ discount already applied. What was its original price before the discount and without tax?`,
          },
          options: [
            { es: String.raw`$\$2,000$`, en: String.raw`$\$2,000$` },
            { es: String.raw`$\$2,250$`, en: String.raw`$\$2,250$` },
            { es: String.raw`$\$2,500$`, en: String.raw`$\$2,500$` },
            { es: String.raw`$\$2,800$`, en: String.raw`$\$2,800$` },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$\text{Sin IVA: } \frac{2320}{1.16} = 2000$. $\text{Sin descuento: } \frac{2000}{0.80} = \textcolor{#22c55e}{\$2,500}$`,
            en: String.raw`$\text{Without tax: } \frac{2320}{1.16} = 2000$. $\text{Without discount: } \frac{2000}{0.80} = \textcolor{#22c55e}{\$2,500}$`,
          },
          difficulty: 3,
        },
      ],
    },
    {
      id: "razones-proporciones",
      topicId: "porcentajes",
      order: 3,
      title: {
        es: "Razones y proporciones",
        en: "Ratios and proportions",
      },
      description: {
        es: "Razones, tasas, proporcionalidad directa e inversa",
        en: "Ratios, rates, direct and inverse proportionality",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "porcentajes-23",
          type: "multiple-choice",
          prompt: {
            es: String.raw`En una receta se mezclan agua y jugo en razón de $3:2$. Si se usan $12$ litros de agua, ¿cuántos litros de jugo se necesitan?`,
            en: String.raw`In a recipe, water and juice are mixed in a ratio of $3:2$. If $12$ liters of water are used, how many liters of juice are needed?`,
          },
          options: [
            { es: "$6$ litros", en: "$6$ liters" },
            { es: "$8$ litros", en: "$8$ liters" },
            { es: "$10$ litros", en: "$10$ liters" },
            { es: "$18$ litros", en: "$18$ liters" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\frac{3}{2} = \frac{12}{x} \Rightarrow 3x = 24 \Rightarrow x = \textcolor{#22c55e}{8} \text{ litros}$`,
            en: String.raw`$\frac{3}{2} = \frac{12}{x} \Rightarrow 3x = 24 \Rightarrow x = \textcolor{#22c55e}{8} \text{ liters}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-24",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Una impresora imprime $15$ páginas en $3$ minutos. ¿Cuántas páginas imprime en $20$ minutos a la misma velocidad?`,
            en: String.raw`A printer prints $15$ pages in $3$ minutes. How many pages does it print in $20$ minutes at the same speed?`,
          },
          options: [
            { es: "$75$ páginas", en: "$75$ pages" },
            { es: "$90$ páginas", en: "$90$ pages" },
            { es: "$100$ páginas", en: "$100$ pages" },
            { es: "$120$ páginas", en: "$120$ pages" },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$\text{Tasa: } \frac{15}{3} = 5 \text{ páginas/min}$. $\text{En 20 minutos: } 5 \times 20 = \textcolor{#22c55e}{100} \text{ páginas}$`,
            en: String.raw`$\text{Rate: } \frac{15}{3} = 5 \text{ pages/min}$. $\text{In 20 minutes: } 5 \times 20 = \textcolor{#22c55e}{100} \text{ pages}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-25",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Tres personas invierten en un negocio en razón de $2:3:5$. Si las ganancias totales son $\$30,000$, ¿cuánto le corresponde a la persona que invirtió más?`,
            en: String.raw`Three people invest in a business in a ratio of $2:3:5$. If the total profits are $\$30,000$, how much does the person who invested the most receive?`,
          },
          options: [
            { es: String.raw`$\$12,000$`, en: String.raw`$\$12,000$` },
            { es: String.raw`$\$15,000$`, en: String.raw`$\$15,000$` },
            { es: String.raw`$\$18,000$`, en: String.raw`$\$18,000$` },
            { es: String.raw`$\$20,000$`, en: String.raw`$\$20,000$` },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Suma de partes: } 2+3+5 = 10$. $\text{Parte mayor: } \frac{5}{10} \times 30000 = \textcolor{#22c55e}{\$15,000}$`,
            en: String.raw`$\text{Sum of parts: } 2+3+5 = 10$. $\text{Largest part: } \frac{5}{10} \times 30000 = \textcolor{#22c55e}{\$15,000}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-26",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Si $5$ obreros tardan $12$ días en construir un muro, ¿cuántos días tardarán $8$ obreros en construir el mismo muro? (proporcionalidad inversa)`,
            en: String.raw`If $5$ workers take $12$ days to build a wall, how many days will $8$ workers take to build the same wall? (inverse proportionality)`,
          },
          options: [
            { es: "$6$ días", en: "$6$ days" },
            { es: "$7.5$ días", en: "$7.5$ days" },
            { es: "$8$ días", en: "$8$ days" },
            { es: "$9$ días", en: "$9$ days" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Proporcionalidad inversa: } 5 \times 12 = 8 \times x \Rightarrow x = \frac{60}{8} = \textcolor{#22c55e}{7.5} \text{ días}$`,
            en: String.raw`$\text{Inverse proportionality: } 5 \times 12 = 8 \times x \Rightarrow x = \frac{60}{8} = \textcolor{#22c55e}{7.5} \text{ days}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-27",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Un mapa tiene escala $1:50,000$. Si dos ciudades están separadas por $12$ cm en el mapa, ¿cuál es la distancia real entre ellas en kilómetros?`,
            en: String.raw`A map has a scale of $1:50,000$. If two cities are separated by $12$ cm on the map, what is the real distance between them in kilometers?`,
          },
          options: [
            { es: "$4$ km", en: "$4$ km" },
            { es: "$6$ km", en: "$6$ km" },
            { es: "$8$ km", en: "$8$ km" },
            { es: "$12$ km", en: "$12$ km" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Distancia real: } 12 \text{ cm} \times 50000 = 600000 \text{ cm} = \textcolor{#22c55e}{6} \text{ km}$`,
            en: String.raw`$\text{Real distance: } 12 \text{ cm} \times 50000 = 600000 \text{ cm} = \textcolor{#22c55e}{6} \text{ km}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-28",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Un auto consume $6$ litros de gasolina por cada $100$ km. ¿Cuántos litros necesita para recorrer $450$ km?`,
            en: String.raw`A car consumes $6$ liters of gasoline per $100$ km. How many liters does it need to travel $450$ km?`,
          },
          options: [
            { es: "$24$ litros", en: "$24$ liters" },
            { es: "$27$ litros", en: "$27$ liters" },
            { es: "$30$ litros", en: "$30$ liters" },
            { es: "$36$ litros", en: "$36$ liters" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\frac{6}{100} = \frac{x}{450} \Rightarrow x = \frac{6 \times 450}{100} = \textcolor{#22c55e}{27} \text{ litros}$`,
            en: String.raw`$\frac{6}{100} = \frac{x}{450} \Rightarrow x = \frac{6 \times 450}{100} = \textcolor{#22c55e}{27} \text{ liters}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-29",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Las edades de Ana y Bruno están en razón de $5:8$. Si Ana tiene $20$ años, ¿cuántos años tiene Bruno?`,
            en: String.raw`The ages of Ana and Bruno are in a ratio of $5:8$. If Ana is $20$ years old, how old is Bruno?`,
          },
          options: [
            { es: "$24$ años", en: "$24$ years" },
            { es: "$28$ años", en: "$28$ years" },
            { es: "$30$ años", en: "$30$ years" },
            { es: "$32$ años", en: "$32$ years" },
          ],
          correctAnswer: "3",
          explanation: {
            es: String.raw`$\frac{5}{8} = \frac{20}{x} \Rightarrow 5x = 160 \Rightarrow x = \textcolor{#22c55e}{32} \text{ años}$`,
            en: String.raw`$\frac{5}{8} = \frac{20}{x} \Rightarrow 5x = 160 \Rightarrow x = \textcolor{#22c55e}{32} \text{ years}$`,
          },
          difficulty: 1,
        },
        {
          id: "porcentajes-30",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Un tanque de agua de $1,200$ litros se llena con una bomba en $15$ horas. ¿Cuánto tarda en llenarse un tanque de $2,000$ litros con la misma bomba?`,
            en: String.raw`A $1,200$ liter water tank is filled with a pump in $15$ hours. How long does it take to fill a $2,000$ liter tank with the same pump?`,
          },
          options: [
            { es: "$20$ horas", en: "$20$ hours" },
            { es: "$22$ horas", en: "$22$ hours" },
            { es: "$25$ horas", en: "$25$ hours" },
            { es: "$30$ horas", en: "$30$ hours" },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$\frac{1200}{15} = \frac{2000}{x} \Rightarrow 1200x = 30000 \Rightarrow x = \textcolor{#22c55e}{25} \text{ horas}$`,
            en: String.raw`$\frac{1200}{15} = \frac{2000}{x} \Rightarrow 1200x = 30000 \Rightarrow x = \textcolor{#22c55e}{25} \text{ hours}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-31",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Se reparten $\$24,000$ entre tres personas en razón de $3:5:8$. ¿Cuánto recibe la persona con menor parte?`,
            en: String.raw`$\$24,000$ is divided among three people in a ratio of $3:5:8$. How much does the person with the smallest share receive?`,
          },
          options: [
            { es: String.raw`$\$3,000$`, en: String.raw`$\$3,000$` },
            { es: String.raw`$\$4,500$`, en: String.raw`$\$4,500$` },
            { es: String.raw`$\$6,000$`, en: String.raw`$\$6,000$` },
            { es: String.raw`$\$7,500$`, en: String.raw`$\$7,500$` },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Suma: } 3+5+8 = 16$. $\text{Parte menor: } \frac{3}{16} \times 24000 = \textcolor{#22c55e}{\$4,500}$`,
            en: String.raw`$\text{Sum: } 3+5+8 = 16$. $\text{Smallest part: } \frac{3}{16} \times 24000 = \textcolor{#22c55e}{\$4,500}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-32",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Una fuente provee agua a un ritmo constante. Si llena un recipiente de $18$ litros en $12$ minutos, ¿cuántos litros provee en $1$ hora?`,
            en: String.raw`A fountain provides water at a constant rate. If it fills an $18$ liter container in $12$ minutes, how many liters does it provide in $1$ hour?`,
          },
          options: [
            { es: "$72$ litros", en: "$72$ liters" },
            { es: "$90$ litros", en: "$90$ liters" },
            { es: "$108$ litros", en: "$108$ liters" },
            { es: "$120$ litros", en: "$120$ liters" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Tasa: } \frac{18}{12} = 1.5 \text{ L/min}$. $\text{En 60 min: } 1.5 \times 60 = \textcolor{#22c55e}{90} \text{ litros}$`,
            en: String.raw`$\text{Rate: } \frac{18}{12} = 1.5 \text{ L/min}$. $\text{In 60 min: } 1.5 \times 60 = \textcolor{#22c55e}{90} \text{ liters}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-33",
          type: "multiple-choice",
          prompt: {
            es: String.raw`$12$ operarios construyen una casa en $30$ días. ¿Cuántos días tardarán $20$ operarios en construir la misma casa?`,
            en: String.raw`$12$ workers build a house in $30$ days. How many days will $20$ workers take to build the same house?`,
          },
          options: [
            { es: "$15$ días", en: "$15$ days" },
            { es: "$18$ días", en: "$18$ days" },
            { es: "$20$ días", en: "$20$ days" },
            { es: "$24$ días", en: "$24$ days" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$12 \times 30 = 20 \times x \Rightarrow x = \frac{360}{20} = \textcolor{#22c55e}{18} \text{ días}$`,
            en: String.raw`$12 \times 30 = 20 \times x \Rightarrow x = \frac{360}{20} = \textcolor{#22c55e}{18} \text{ days}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-34",
          type: "multiple-choice",
          prompt: {
            es: String.raw`En una foto de dimensiones $9$ cm $\times$ $12$ cm se quiere ampliar proporcionalmente. Si el ancho será de $15$ cm, ¿cuál será el largo?`,
            en: String.raw`A photo with dimensions $9$ cm $\times$ $12$ cm is to be proportionally enlarged. If the width will be $15$ cm, what will the length be?`,
          },
          options: [
            { es: "$18$ cm", en: "$18$ cm" },
            { es: "$20$ cm", en: "$20$ cm" },
            { es: "$22$ cm", en: "$22$ cm" },
            { es: "$24$ cm", en: "$24$ cm" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\frac{9}{12} = \frac{15}{x} \Rightarrow 9x = 180 \Rightarrow x = \textcolor{#22c55e}{20} \text{ cm}$`,
            en: String.raw`$\frac{9}{12} = \frac{15}{x} \Rightarrow 9x = 180 \Rightarrow x = \textcolor{#22c55e}{20} \text{ cm}$`,
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "interes-simple-compuesto",
      topicId: "porcentajes",
      order: 4,
      title: {
        es: "Interés simple y compuesto",
        en: "Simple and compound interest",
      },
      description: {
        es: "Cálculo de intereses en ahorros y préstamos",
        en: "Calculating interest on savings and loans",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "porcentajes-35",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Se invierten $\$5,000$ al $6\%$ de interés simple anual durante $3$ años. ¿Cuánto se recibe de interés?`,
            en: String.raw`$\$5,000$ is invested at $6\%$ simple annual interest for $3$ years. How much interest is received?`,
          },
          options: [
            { es: String.raw`$\$600$`, en: String.raw`$\$600$` },
            { es: String.raw`$\$750$`, en: String.raw`$\$750$` },
            { es: String.raw`$\$900$`, en: String.raw`$\$900$` },
            { es: String.raw`$\$1,000$`, en: String.raw`$\$1,000$` },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$I = C \cdot r \cdot t = 5000 \times 0.06 \times 3 = \textcolor{#22c55e}{\$900}$`,
            en: String.raw`$I = P \cdot r \cdot t = 5000 \times 0.06 \times 3 = \textcolor{#22c55e}{\$900}$`,
          },
          difficulty: 1,
        },
        {
          id: "porcentajes-36",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Se solicita un préstamo de $\$10,000$ al $8\%$ de interés simple anual. Si se pagan $\$1,600$ de interés, ¿cuánto tiempo duró el préstamo?`,
            en: String.raw`A loan of $\$10,000$ is requested at $8\%$ simple annual interest. If $\$1,600$ interest is paid, how long did the loan last?`,
          },
          options: [
            { es: "$1$ año", en: "$1$ year" },
            { es: "$1.5$ años", en: "$1.5$ years" },
            { es: "$2$ años", en: "$2$ years" },
            { es: "$2.5$ años", en: "$2.5$ years" },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$I = C \cdot r \cdot t \Rightarrow 1600 = 10000 \times 0.08 \times t \Rightarrow t = \frac{1600}{800} = \textcolor{#22c55e}{2} \text{ años}$`,
            en: String.raw`$I = P \cdot r \cdot t \Rightarrow 1600 = 10000 \times 0.08 \times t \Rightarrow t = \frac{1600}{800} = \textcolor{#22c55e}{2} \text{ years}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-37",
          type: "multiple-choice",
          prompt: {
            es: String.raw`¿Qué capital se debe invertir al $5\%$ de interés simple anual durante $4$ años para obtener $\$1,000$ de interés?`,
            en: String.raw`What capital must be invested at $5\%$ simple annual interest for $4$ years to obtain $\$1,000$ interest?`,
          },
          options: [
            { es: String.raw`$\$4,000$`, en: String.raw`$\$4,000$` },
            { es: String.raw`$\$5,000$`, en: String.raw`$\$5,000$` },
            { es: String.raw`$\$6,000$`, en: String.raw`$\$6,000$` },
            { es: String.raw`$\$8,000$`, en: String.raw`$\$8,000$` },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$I = C \cdot r \cdot t \Rightarrow 1000 = C \times 0.05 \times 4 \Rightarrow C = \frac{1000}{0.20} = \textcolor{#22c55e}{\$5,000}$`,
            en: String.raw`$I = P \cdot r \cdot t \Rightarrow 1000 = P \times 0.05 \times 4 \Rightarrow P = \frac{1000}{0.20} = \textcolor{#22c55e}{\$5,000}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-38",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Se invierten $\$8,000$ al $10\%$ de interés compuesto anual durante $2$ años. ¿Cuál es el monto final?`,
            en: String.raw`$\$8,000$ is invested at $10\%$ compound annual interest for $2$ years. What is the final amount?`,
          },
          options: [
            { es: String.raw`$\$9,600$`, en: String.raw`$\$9,600$` },
            { es: String.raw`$\$9,680$`, en: String.raw`$\$9,680$` },
            { es: String.raw`$\$9,800$`, en: String.raw`$\$9,800$` },
            { es: String.raw`$\$10,000$`, en: String.raw`$\$10,000$` },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$M = C(1+r)^t = 8000(1.10)^2 = 8000 \times 1.21 = \textcolor{#22c55e}{\$9,680}$`,
            en: String.raw`$A = P(1+r)^t = 8000(1.10)^2 = 8000 \times 1.21 = \textcolor{#22c55e}{\$9,680}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-39",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Comparar: ¿Qué es mejor para invertir $\$10,000$ durante $2$ años: $10\%$ de interés simple anual o $9.5\%$ de interés compuesto anual?`,
            en: String.raw`Compare: Which is better to invest $\$10,000$ for $2$ years: $10\%$ simple annual interest or $9.5\%$ compound annual interest?`,
          },
          options: [
            { es: "Interés simple", en: "Simple interest" },
            { es: "Interés compuesto", en: "Compound interest" },
            { es: "Ambos rinden igual", en: "Both yield the same" },
            { es: "Faltan datos", en: "Not enough data" },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`$\text{Simple: } M = 10000 + 10000 \times 0.10 \times 2 = 12000$. $\text{Compuesto: } M = 10000(1.095)^2 \approx 11990.25$. $\therefore \textcolor{#22c55e}{\text{Simple es mejor}}$`,
            en: String.raw`$\text{Simple: } A = 10000 + 10000 \times 0.10 \times 2 = 12000$. $\text{Compound: } A = 10000(1.095)^2 \approx 11990.25$. $\therefore \textcolor{#22c55e}{\text{Simple is better}}$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-40",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Se invierte un capital al $12\%$ de interés compuesto anual. ¿En cuántos años se duplica el capital aproximadamente?`,
            en: String.raw`A capital is invested at $12\%$ compound annual interest. In how many years does the capital approximately double?`,
          },
          options: [
            { es: "$5$ años", en: "$5$ years" },
            { es: "$6$ años", en: "$6$ years" },
            { es: "$7$ años", en: "$7$ years" },
            { es: "$8$ años", en: "$8$ years" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Regla del 72: } t \approx \frac{72}{12} = 6 \text{ años}$. $\text{Verificación: } (1.12)^6 \approx 1.97 \approx 2$`,
            en: String.raw`$\text{Rule of 72: } t \approx \frac{72}{12} = 6 \text{ years}$. $\text{Verification: } (1.12)^6 \approx 1.97 \approx 2$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-41",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Un banco ofrece $7\%$ de interés compuesto anual. ¿Cuánto dinero habrá en una cuenta después de $3$ años si se depositan inicialmente $\$20,000$?`,
            en: String.raw`A bank offers $7\%$ compound annual interest. How much money will be in an account after $3$ years if $\$20,000$ is initially deposited?`,
          },
          options: [
            { es: String.raw`$\$24,200$`, en: String.raw`$\$24,200$` },
            { es: String.raw`$\$24,501$`, en: String.raw`$\$24,501$` },
            { es: String.raw`$\$24,800$`, en: String.raw`$\$24,800$` },
            { es: String.raw`$\$25,000$`, en: String.raw`$\$25,000$` },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$M = 20000(1.07)^3 = 20000 \times 1.225043 \approx \textcolor{#22c55e}{\$24,501}$`,
            en: String.raw`$A = 20000(1.07)^3 = 20000 \times 1.225043 \approx \textcolor{#22c55e}{\$24,501}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-42",
          type: "multiple-choice",
          prompt: {
            es: String.raw`María invierte $\$15,000$ al $8\%$ de interés simple anual. ¿Cuál será el monto total después de $5$ años?`,
            en: String.raw`Maria invests $\$15,000$ at $8\%$ simple annual interest. What will be the total amount after $5$ years?`,
          },
          options: [
            { es: String.raw`$\$18,000$`, en: String.raw`$\$18,000$` },
            { es: String.raw`$\$19,000$`, en: String.raw`$\$19,000$` },
            { es: String.raw`$\$21,000$`, en: String.raw`$\$21,000$` },
            { es: String.raw`$\$22,000$`, en: String.raw`$\$22,000$` },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$I = 15000 \times 0.08 \times 5 = 6000$. $M = 15000 + 6000 = \textcolor{#22c55e}{\$21,000}$`,
            en: String.raw`$I = 15000 \times 0.08 \times 5 = 6000$. $A = 15000 + 6000 = \textcolor{#22c55e}{\$21,000}$`,
          },
          difficulty: 1,
        },
        {
          id: "porcentajes-43",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Un préstamo de $\$25,000$ genera $\$3,750$ de interés simple en $2.5$ años. ¿Cuál es la tasa de interés anual?`,
            en: String.raw`A loan of $\$25,000$ generates $\$3,750$ in simple interest in $2.5$ years. What is the annual interest rate?`,
          },
          options: [
            { es: "$5\%$", en: "$5\%$" },
            { es: "$6\%$", en: "$6\%$" },
            { es: "$7\%$", en: "$7\%$" },
            { es: "$8\%$", en: "$8\%$" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$I = C \cdot r \cdot t \Rightarrow 3750 = 25000 \times r \times 2.5 \Rightarrow r = \frac{3750}{62500} = \textcolor{#22c55e}{0.06 = 6\%}$`,
            en: String.raw`$I = P \cdot r \cdot t \Rightarrow 3750 = 25000 \times r \times 2.5 \Rightarrow r = \frac{3750}{62500} = \textcolor{#22c55e}{0.06 = 6\%}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-44",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Se invierten $\$12,000$ al $9\%$ de interés compuesto anual. ¿Cuánto interés se habrá generado después de $3$ años?`,
            en: String.raw`$\$12,000$ is invested at $9\%$ compound annual interest. How much interest will have been generated after $3$ years?`,
          },
          options: [
            { es: String.raw`$\$3,240$`, en: String.raw`$\$3,240$` },
            { es: String.raw`$\$3,542$`, en: String.raw`$\$3,542$` },
            { es: String.raw`$\$3,800$`, en: String.raw`$\$3,800$` },
            { es: String.raw`$\$4,000$`, en: String.raw`$\$4,000$` },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$M = 12000(1.09)^3 = 12000 \times 1.295029 \approx 15540$. $I = 15540 - 12000 \approx \textcolor{#22c55e}{\$3,540}$`,
            en: String.raw`$A = 12000(1.09)^3 = 12000 \times 1.295029 \approx 15540$. $I = 15540 - 12000 \approx \textcolor{#22c55e}{\$3,540}$`,
          },
          difficulty: 3,
        },
      ],
    },
    {
      id: "aplicaciones-porcentajes",
      topicId: "porcentajes",
      order: 5,
      title: {
        es: "Problemas de aplicación",
        en: "Application problems",
      },
      description: {
        es: "Mezclas, encuestas y estadísticas con porcentajes",
        en: "Mixtures, surveys and statistics with percentages",
      },
      type: "practice",
      xpReward: 30,
      questions: [
        {
          id: "porcentajes-45",
          type: "multiple-choice",
          prompt: {
            es: String.raw`En una escuela, el $55\%$ son mujeres. Si hay $440$ mujeres, ¿cuántos estudiantes hay en total?`,
            en: String.raw`In a school, $55\%$ are women. If there are $440$ women, how many students are there in total?`,
          },
          options: [
            { es: "$720$ estudiantes", en: "$720$ students" },
            { es: "$760$ estudiantes", en: "$760$ students" },
            { es: "$800$ estudiantes", en: "$800$ students" },
            { es: "$880$ estudiantes", en: "$880$ students" },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$0.55x = 440 \Rightarrow x = \frac{440}{0.55} = \textcolor{#22c55e}{800} \text{ estudiantes}$`,
            en: String.raw`$0.55x = 440 \Rightarrow x = \frac{440}{0.55} = \textcolor{#22c55e}{800} \text{ students}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-46",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Se mezclan dos soluciones: $3$ litros al $20\%$ de sal y $5$ litros al $35\%$ de sal. ¿Qué concentración tiene la mezcla resultante?`,
            en: String.raw`Two solutions are mixed: $3$ liters at $20\%$ salt and $5$ liters at $35\%$ salt. What concentration does the resulting mixture have?`,
          },
          options: [
            { es: "$27.5\%$", en: "$27.5\%$" },
            { es: "$28.75\%$", en: "$28.75\%$" },
            { es: "$30\%$", en: "$30\%$" },
            { es: "$32.5\%$", en: "$32.5\%$" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Sal total: } 3(0.20) + 5(0.35) = 0.6 + 1.75 = 2.35 \text{ L}$. $\text{Concentración: } \frac{2.35}{8} = \textcolor{#22c55e}{0.2875 = 28.75\%}$`,
            en: String.raw`$\text{Total salt: } 3(0.20) + 5(0.35) = 0.6 + 1.75 = 2.35 \text{ L}$. $\text{Concentration: } \frac{2.35}{8} = \textcolor{#22c55e}{0.2875 = 28.75\%}$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-47",
          type: "multiple-choice",
          prompt: {
            es: String.raw`En una encuesta, el $40\%$ prefiere el producto A, el $35\%$ el producto B, y el resto el producto C. Si $150$ personas prefieren el producto C, ¿cuántas personas participaron en la encuesta?`,
            en: String.raw`In a survey, $40\%$ prefer product A, $35\%$ product B, and the rest product C. If $150$ people prefer product C, how many people participated in the survey?`,
          },
          options: [
            { es: "$500$ personas", en: "$500$ people" },
            { es: "$550$ personas", en: "$550$ people" },
            { es: "$600$ personas", en: "$600$ people" },
            { es: "$650$ personas", en: "$650$ people" },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$\text{Producto C: } 100\% - 40\% - 35\% = 25\%$. $0.25x = 150 \Rightarrow x = \textcolor{#22c55e}{600} \text{ personas}$`,
            en: String.raw`$\text{Product C: } 100\% - 40\% - 35\% = 25\%$. $0.25x = 150 \Rightarrow x = \textcolor{#22c55e}{600} \text{ people}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-48",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Una aleación contiene $65\%$ de cobre y $35\%$ de zinc. Si se tienen $20$ kg de cobre, ¿cuántos kg de zinc se necesitan para hacer la aleación?`,
            en: String.raw`An alloy contains $65\%$ copper and $35\%$ zinc. If you have $20$ kg of copper, how many kg of zinc are needed to make the alloy?`,
          },
          options: [
            { es: "$8.5$ kg", en: "$8.5$ kg" },
            { es: "$10.0$ kg", en: "$10.0$ kg" },
            { es: "$10.77$ kg", en: "$10.77$ kg" },
            { es: "$12.0$ kg", en: "$12.0$ kg" },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$\frac{65}{35} = \frac{20}{x} \Rightarrow 65x = 700 \Rightarrow x \approx \textcolor{#22c55e}{10.77} \text{ kg}$`,
            en: String.raw`$\frac{65}{35} = \frac{20}{x} \Rightarrow 65x = 700 \Rightarrow x \approx \textcolor{#22c55e}{10.77} \text{ kg}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-49",
          type: "multiple-choice",
          prompt: {
            es: String.raw`En un examen, Pedro respondió correctamente el $80\%$ de $60$ preguntas. María respondió correctamente el $75\%$ de $80$ preguntas. ¿Quién tuvo más respuestas correctas?`,
            en: String.raw`On an exam, Pedro answered $80\%$ of $60$ questions correctly. Maria answered $75\%$ of $80$ questions correctly. Who had more correct answers?`,
          },
          options: [
            { es: "Pedro", en: "Pedro" },
            { es: "María", en: "Maria" },
            { es: "Ambos tuvieron igual", en: "Both had the same" },
            { es: "Faltan datos", en: "Not enough data" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Pedro: } 0.80 \times 60 = 48$. $\text{María: } 0.75 \times 80 = 60$. $\therefore \textcolor{#22c55e}{\text{María tuvo más respuestas correctas}}$`,
            en: String.raw`$\text{Pedro: } 0.80 \times 60 = 48$. $\text{Maria: } 0.75 \times 80 = 60$. $\therefore \textcolor{#22c55e}{\text{Maria had more correct answers}}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-50",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Un tanque contiene $240$ litros de mezcla con $30\%$ de alcohol. ¿Cuántos litros de agua se deben agregar para que la concentración de alcohol sea del $20\%$?`,
            en: String.raw`A tank contains $240$ liters of mixture with $30\%$ alcohol. How many liters of water should be added so that the alcohol concentration is $20\%$?`,
          },
          options: [
            { es: "$80$ litros", en: "$80$ liters" },
            { es: "$100$ litros", en: "$100$ liters" },
            { es: "$120$ litros", en: "$120$ liters" },
            { es: "$140$ litros", en: "$140$ liters" },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$\text{Alcohol: } 240 \times 0.30 = 72 \text{ L}$. $\text{Nueva mezcla: } \frac{72}{240+x} = 0.20 \Rightarrow 72 = 0.20(240+x) \Rightarrow x = \textcolor{#22c55e}{120} \text{ L}$`,
            en: String.raw`$\text{Alcohol: } 240 \times 0.30 = 72 \text{ L}$. $\text{New mixture: } \frac{72}{240+x} = 0.20 \Rightarrow 72 = 0.20(240+x) \Rightarrow x = \textcolor{#22c55e}{120} \text{ L}$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-51",
          type: "multiple-choice",
          prompt: {
            es: String.raw`En una tienda, el $25\%$ de los productos son electrónicos, el $40\%$ son ropa, y el resto son juguetes. Si hay $210$ juguetes, ¿cuántos productos hay en total?`,
            en: String.raw`In a store, $25\%$ of the products are electronics, $40\%$ are clothing, and the rest are toys. If there are $210$ toys, how many products are there in total?`,
          },
          options: [
            { es: "$500$ productos", en: "$500$ products" },
            { es: "$550$ productos", en: "$550$ products" },
            { es: "$600$ productos", en: "$600$ products" },
            { es: "$650$ productos", en: "$650$ products" },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$\text{Juguetes: } 100\% - 25\% - 40\% = 35\%$. $0.35x = 210 \Rightarrow x = \textcolor{#22c55e}{600} \text{ productos}$`,
            en: String.raw`$\text{Toys: } 100\% - 25\% - 40\% = 35\%$. $0.35x = 210 \Rightarrow x = \textcolor{#22c55e}{600} \text{ products}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-52",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Una solución de $500$ mL tiene $15\%$ de sal. Se le agregan $100$ mL de agua pura. ¿Cuál es la nueva concentración de sal?`,
            en: String.raw`A $500$ mL solution has $15\%$ salt. $100$ mL of pure water is added. What is the new salt concentration?`,
          },
          options: [
            { es: "$10\%$", en: "$10\%$" },
            { es: "$12\%$", en: "$12\%$" },
            { es: "$12.5\%$", en: "$12.5\%$" },
            { es: "$13\%$", en: "$13\%$" },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$\text{Sal: } 500 \times 0.15 = 75 \text{ mL}$. $\text{Nueva concentración: } \frac{75}{600} = \textcolor{#22c55e}{0.125 = 12.5\%}$`,
            en: String.raw`$\text{Salt: } 500 \times 0.15 = 75 \text{ mL}$. $\text{New concentration: } \frac{75}{600} = \textcolor{#22c55e}{0.125 = 12.5\%}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-53",
          type: "multiple-choice",
          prompt: {
            es: String.raw`En una clase, el $60\%$ aprobó matemáticas, el $70\%$ aprobó español, y el $50\%$ aprobó ambas materias. ¿Qué porcentaje reprobó al menos una materia?`,
            en: String.raw`In a class, $60\%$ passed mathematics, $70\%$ passed Spanish, and $50\%$ passed both subjects. What percentage failed at least one subject?`,
          },
          options: [
            { es: "$10\%$", en: "$10\%$" },
            { es: "$20\%$", en: "$20\%$" },
            { es: "$30\%$", en: "$30\%$" },
            { es: "$40\%$", en: "$40\%$" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Aprobó al menos una: } 60\% + 70\% - 50\% = 80\%$. $\text{Reprobó al menos una: } 100\% - 80\% = \textcolor{#22c55e}{20\%}$`,
            en: String.raw`$\text{Passed at least one: } 60\% + 70\% - 50\% = 80\%$. $\text{Failed at least one: } 100\% - 80\% = \textcolor{#22c55e}{20\%}$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-54",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Un comerciante compra un producto por $\$800$ y quiere ganar el $30\%$ sobre el costo. Si tiene que agregar $16\%$ de IVA al precio de venta, ¿a qué precio debe venderlo?`,
            en: String.raw`A merchant buys a product for $\$800$ and wants to earn $30\%$ on the cost. If he has to add $16\%$ tax to the selling price, at what price should he sell it?`,
          },
          options: [
            { es: String.raw`$\$1,040$`, en: String.raw`$\$1,040$` },
            { es: String.raw`$\$1,150$`, en: String.raw`$\$1,150$` },
            { es: String.raw`$\$1,206$`, en: String.raw`$\$1,206$` },
            { es: String.raw`$\$1,250$`, en: String.raw`$\$1,250$` },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$\text{Con ganancia: } 800 \times 1.30 = 1040$. $\text{Con IVA: } 1040 \times 1.16 = \textcolor{#22c55e}{\$1,206}$`,
            en: String.raw`$\text{With profit: } 800 \times 1.30 = 1040$. $\text{With tax: } 1040 \times 1.16 = \textcolor{#22c55e}{\$1,206}$`,
          },
          difficulty: 3,
        },
      ],
    },
    {
      id: "quiz-final-porcentajes",
      topicId: "porcentajes",
      order: 6,
      title: {
        es: "Quiz final de porcentajes",
        en: "Final percentages quiz",
      },
      description: {
        es: "Evaluación integral de todos los conceptos",
        en: "Comprehensive evaluation of all concepts",
      },
      type: "quiz",
      xpReward: 50,
      questions: [
        {
          id: "porcentajes-55",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Un producto tiene un precio de $\$1,500$ después de aplicar dos descuentos sucesivos del $20\%$ y $10\%$. ¿Cuál era su precio original?`,
            en: String.raw`A product has a price of $\$1,500$ after applying two successive discounts of $20\%$ and $10\%$. What was its original price?`,
          },
          options: [
            { es: String.raw`$\$2,000$`, en: String.raw`$\$2,000$` },
            { es: String.raw`$\$2,083$`, en: String.raw`$\$2,083$` },
            { es: String.raw`$\$2,150$`, en: String.raw`$\$2,150$` },
            { es: String.raw`$\$2,250$`, en: String.raw`$\$2,250$` },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Sea } x \text{ el precio: } x \times 0.80 \times 0.90 = 1500 \Rightarrow x = \frac{1500}{0.72} \approx \textcolor{#22c55e}{\$2,083}$`,
            en: String.raw`$\text{Let } x \text{ be the price: } x \times 0.80 \times 0.90 = 1500 \Rightarrow x = \frac{1500}{0.72} \approx \textcolor{#22c55e}{\$2,083}$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-56",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Tres socios invierten en razón de $4:5:6$. Si el socio con mayor inversión aporta $\$18,000$, ¿cuánto se invirtió en total?`,
            en: String.raw`Three partners invest in a ratio of $4:5:6$. If the partner with the largest investment contributes $\$18,000$, how much was invested in total?`,
          },
          options: [
            { es: String.raw`$\$42,000$`, en: String.raw`$\$42,000$` },
            { es: String.raw`$\$45,000$`, en: String.raw`$\$45,000$` },
            { es: String.raw`$\$48,000$`, en: String.raw`$\$48,000$` },
            { es: String.raw`$\$50,000$`, en: String.raw`$\$50,000$` },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\frac{6}{15} = \frac{18000}{x} \Rightarrow 6x = 270000 \Rightarrow x = \textcolor{#22c55e}{\$45,000}$`,
            en: String.raw`$\frac{6}{15} = \frac{18000}{x} \Rightarrow 6x = 270000 \Rightarrow x = \textcolor{#22c55e}{\$45,000}$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-57",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Se invierte un capital al $6\%$ de interés compuesto anual. Si después de $3$ años el interés generado es de $\$1,910$, ¿cuál era el capital inicial?`,
            en: String.raw`A capital is invested at $6\%$ compound annual interest. If after $3$ years the interest generated is $\$1,910$, what was the initial capital?`,
          },
          options: [
            { es: String.raw`$\$9,500$`, en: String.raw`$\$9,500$` },
            { es: String.raw`$\$10,000$`, en: String.raw`$\$10,000$` },
            { es: String.raw`$\$10,500$`, en: String.raw`$\$10,500$` },
            { es: String.raw`$\$11,000$`, en: String.raw`$\$11,000$` },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Sea } C \text{ el capital: } C(1.06)^3 - C = 1910 \Rightarrow C(0.191016) \approx 1910 \Rightarrow C \approx \textcolor{#22c55e}{\$10,000}$`,
            en: String.raw`$\text{Let } P \text{ be the principal: } P(1.06)^3 - P = 1910 \Rightarrow P(0.191016) \approx 1910 \Rightarrow P \approx \textcolor{#22c55e}{\$10,000}$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-58",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Un tanque de $600$ L contiene una mezcla al $40\%$ de concentración. Se extrae $150$ L de la mezcla y se reemplaza con el mismo volumen de agua pura. ¿Cuál es la nueva concentración?`,
            en: String.raw`A $600$ L tank contains a $40\%$ concentration mixture. $150$ L of the mixture is extracted and replaced with the same volume of pure water. What is the new concentration?`,
          },
          options: [
            { es: "$25\%$", en: "$25\%$" },
            { es: "$28\%$", en: "$28\%$" },
            { es: "$30\%$", en: "$30\%$" },
            { es: "$32\%$", en: "$32\%$" },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$\text{Soluto inicial: } 600 \times 0.40 = 240 \text{ L}$. $\text{Soluto extraído: } 150 \times 0.40 = 60 \text{ L}$. $\text{Soluto restante: } 240 - 60 = 180 \text{ L}$. $\text{Nueva concentración: } \frac{180}{600} = \textcolor{#22c55e}{0.30 = 30\%}$`,
            en: String.raw`$\text{Initial solute: } 600 \times 0.40 = 240 \text{ L}$. $\text{Extracted solute: } 150 \times 0.40 = 60 \text{ L}$. $\text{Remaining solute: } 240 - 60 = 180 \text{ L}$. $\text{New concentration: } \frac{180}{600} = \textcolor{#22c55e}{0.30 = 30\%}$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-59",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Una máquina produce $450$ piezas por hora. Si aumenta su velocidad en $20\%$, ¿cuántas piezas adicionales produce en $5$ horas?`,
            en: String.raw`A machine produces $450$ pieces per hour. If it increases its speed by $20\%$, how many additional pieces does it produce in $5$ hours?`,
          },
          options: [
            { es: "$400$ piezas", en: "$400$ pieces" },
            { es: "$450$ piezas", en: "$450$ pieces" },
            { es: "$500$ piezas", en: "$500$ pieces" },
            { es: "$540$ piezas", en: "$540$ pieces" },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Aumento: } 450 \times 0.20 = 90 \text{ piezas/hora}$. $\text{En 5 horas: } 90 \times 5 = \textcolor{#22c55e}{450} \text{ piezas adicionales}$`,
            en: String.raw`$\text{Increase: } 450 \times 0.20 = 90 \text{ pieces/hour}$. $\text{In 5 hours: } 90 \times 5 = \textcolor{#22c55e}{450} \text{ additional pieces}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-60",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Un banco ofrece dos opciones: A) $10\%$ simple por $4$ años, B) $8\%$ compuesto por $4$ años. Si se invierten $\$10,000$, ¿qué opción da más interés?`,
            en: String.raw`A bank offers two options: A) $10\%$ simple for $4$ years, B) $8\%$ compound for $4$ years. If $\$10,000$ is invested, which option yields more interest?`,
          },
          options: [
            { es: "Opción A", en: "Option A" },
            { es: "Opción B", en: "Option B" },
            { es: "Ambas dan igual", en: "Both yield the same" },
            { es: "Faltan datos", en: "Not enough data" },
          ],
          correctAnswer: "0",
          explanation: {
            es: String.raw`$\text{A: } I = 10000 \times 0.10 \times 4 = 4000$. $\text{B: } M = 10000(1.08)^4 \approx 13605, I \approx 3605$. $\therefore \textcolor{#22c55e}{\text{A es mejor}}$`,
            en: String.raw`$\text{A: } I = 10000 \times 0.10 \times 4 = 4000$. $\text{B: } A = 10000(1.08)^4 \approx 13605, I \approx 3605$. $\therefore \textcolor{#22c55e}{\text{A is better}}$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-61",
          type: "multiple-choice",
          prompt: {
            es: String.raw`En una tienda, un producto marcado a $\$2,000$ tiene un descuento del $25\%$. Al pagar, hay un descuento adicional del $10\%$ por pago en efectivo. ¿Cuánto se debe pagar?`,
            en: String.raw`In a store, a product marked at $\$2,000$ has a $25\%$ discount. When paying, there is an additional $10\%$ discount for cash payment. How much should be paid?`,
          },
          options: [
            { es: String.raw`$\$1,300$`, en: String.raw`$\$1,300$` },
            { es: String.raw`$\$1,350$`, en: String.raw`$\$1,350$` },
            { es: String.raw`$\$1,400$`, en: String.raw`$\$1,400$` },
            { es: String.raw`$\$1,450$`, en: String.raw`$\$1,450$` },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Primer descuento: } 2000 \times 0.75 = 1500$. $\text{Segundo descuento: } 1500 \times 0.90 = \textcolor{#22c55e}{\$1,350}$`,
            en: String.raw`$\text{First discount: } 2000 \times 0.75 = 1500$. $\text{Second discount: } 1500 \times 0.90 = \textcolor{#22c55e}{\$1,350}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-62",
          type: "multiple-choice",
          prompt: {
            es: String.raw`$15$ trabajadores construyen un edificio en $40$ días. Si trabajan solo $10$ trabajadores, ¿en cuántos días terminarán?`,
            en: String.raw`$15$ workers build a building in $40$ days. If only $10$ workers work, in how many days will they finish?`,
          },
          options: [
            { es: "$50$ días", en: "$50$ days" },
            { es: "$55$ días", en: "$55$ days" },
            { es: "$60$ días", en: "$60$ days" },
            { es: "$65$ días", en: "$65$ days" },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$15 \times 40 = 10 \times x \Rightarrow x = \frac{600}{10} = \textcolor{#22c55e}{60} \text{ días}$`,
            en: String.raw`$15 \times 40 = 10 \times x \Rightarrow x = \frac{600}{10} = \textcolor{#22c55e}{60} \text{ days}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-63",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Un comerciante mezcla café de $\$80$/kg con café de $\$120$/kg en razón de $3:2$. ¿Cuál es el precio por kg de la mezcla?`,
            en: String.raw`A merchant mixes coffee at $\$80$/kg with coffee at $\$120$/kg in a ratio of $3:2$. What is the price per kg of the mixture?`,
          },
          options: [
            { es: String.raw`$\$92$/kg`, en: String.raw`$\$92$/kg` },
            { es: String.raw`$\$96$/kg`, en: String.raw`$\$96$/kg` },
            { es: String.raw`$\$100$/kg`, en: String.raw`$\$100$/kg` },
            { es: String.raw`$\$104$/kg`, en: String.raw`$\$104$/kg` },
          ],
          correctAnswer: "1",
          explanation: {
            es: String.raw`$\text{Precio promedio: } \frac{3(80) + 2(120)}{3+2} = \frac{240 + 240}{5} = \textcolor{#22c55e}{\$96/\text{kg}}$`,
            en: String.raw`$\text{Average price: } \frac{3(80) + 2(120)}{3+2} = \frac{240 + 240}{5} = \textcolor{#22c55e}{\$96/\text{kg}}$`,
          },
          difficulty: 3,
        },
        {
          id: "porcentajes-64",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Una población de bacterias crece $5\%$ cada hora. Si inicialmente hay $1,000$ bacterias, ¿cuántas habrá después de $3$ horas?`,
            en: String.raw`A bacterial population grows $5\%$ each hour. If there are initially $1,000$ bacteria, how many will there be after $3$ hours?`,
          },
          options: [
            { es: "$1,150$ bacterias", en: "$1,150$ bacteria" },
            { es: "$1,157$ bacterias", en: "$1,157$ bacteria" },
            { es: "$1,158$ bacterias", en: "$1,158$ bacteria" },
            { es: "$1,200$ bacterias", en: "$1,200$ bacteria" },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$N = 1000(1.05)^3 = 1000 \times 1.157625 \approx \textcolor{#22c55e}{1,158} \text{ bacterias}$`,
            en: String.raw`$N = 1000(1.05)^3 = 1000 \times 1.157625 \approx \textcolor{#22c55e}{1,158} \text{ bacteria}$`,
          },
          difficulty: 2,
        },
        {
          id: "porcentajes-65",
          type: "multiple-choice",
          prompt: {
            es: String.raw`Un rectángulo tiene dimensiones en razón de $5:3$. Si su perímetro es $64$ cm, ¿cuál es su área?`,
            en: String.raw`A rectangle has dimensions in a ratio of $5:3$. If its perimeter is $64$ cm, what is its area?`,
          },
          options: [
            { es: String.raw`$180$ cm²`, en: String.raw`$180$ cm²` },
            { es: String.raw`$200$ cm²`, en: String.raw`$200$ cm²` },
            { es: String.raw`$240$ cm²`, en: String.raw`$240$ cm²` },
            { es: String.raw`$300$ cm²`, en: String.raw`$300$ cm²` },
          ],
          correctAnswer: "2",
          explanation: {
            es: String.raw`$\text{Lados: } 5k, 3k$. $2(5k + 3k) = 64 \Rightarrow k = 4$. $\text{Lados: } 20, 12$. $A = 20 \times 12 = \textcolor{#22c55e}{240 \text{ cm}^2}$`,
            en: String.raw`$\text{Sides: } 5k, 3k$. $2(5k + 3k) = 64 \Rightarrow k = 4$. $\text{Sides: } 20, 12$. $A = 20 \times 12 = \textcolor{#22c55e}{240 \text{ cm}^2}$`,
          },
          difficulty: 3,
        },
      ],
    },
  ],
};
