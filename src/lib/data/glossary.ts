import type { LocalizedString } from "@/lib/types";

export interface GlossaryEntry {
  term: LocalizedString;
  definition: LocalizedString;
  examples?: LocalizedString;
}

export const mathGlossary: Record<string, GlossaryEntry> = {
  "factorización prima": {
    term: {
      es: "Factorización prima",
      en: "Prime factorization",
    },
    definition: {
      es: "Es el proceso de descomponer un número en el producto de sus factores primos. Por ejemplo, 12 = 2² × 3.",
      en: "The process of breaking down a number into the product of its prime factors. For example, 12 = 2² × 3.",
    },
  },
  "prime factorization": {
    term: {
      es: "Factorización prima",
      en: "Prime factorization",
    },
    definition: {
      es: "Es el proceso de descomponer un número en el producto de sus factores primos. Por ejemplo, 12 = 2² × 3.",
      en: "The process of breaking down a number into the product of its prime factors. For example, 12 = 2² × 3.",
    },
  },
  mcm: {
    term: {
      es: "MCM (Mínimo Común Múltiplo)",
      en: "LCM (Least Common Multiple)",
    },
    definition: {
      es: "Es el número más pequeño que es múltiplo de dos o más números. Por ejemplo, el MCM de 4 y 6 es 12.",
      en: "The smallest number that is a multiple of two or more numbers. For example, the LCM of 4 and 6 is 12.",
    },
  },
  lcm: {
    term: {
      es: "MCM (Mínimo Común Múltiplo)",
      en: "LCM (Least Common Multiple)",
    },
    definition: {
      es: "Es el número más pequeño que es múltiplo de dos o más números. Por ejemplo, el MCM de 4 y 6 es 12.",
      en: "The smallest number that is a multiple of two or more numbers. For example, the LCM of 4 and 6 is 12.",
    },
  },
  "mínimo común múltiplo": {
    term: {
      es: "Mínimo Común Múltiplo",
      en: "Least Common Multiple",
    },
    definition: {
      es: "Es el número más pequeño que es múltiplo de dos o más números. Se abrevia como MCM.",
      en: "The smallest number that is a multiple of two or more numbers. Abbreviated as LCM.",
    },
  },
  "least common multiple": {
    term: {
      es: "Mínimo Común Múltiplo",
      en: "Least Common Multiple",
    },
    definition: {
      es: "Es el número más pequeño que es múltiplo de dos o más números. Se abrevia como MCM.",
      en: "The smallest number that is a multiple of two or more numbers. Abbreviated as LCM.",
    },
  },
  mcd: {
    term: {
      es: "MCD (Máximo Común Divisor)",
      en: "GCD (Greatest Common Divisor)",
    },
    definition: {
      es: "Es el número más grande que divide exactamente a dos o más números. Por ejemplo, el MCD de 12 y 18 es 6.",
      en: "The largest number that divides two or more numbers exactly. For example, the GCD of 12 and 18 is 6.",
    },
  },
  gcd: {
    term: {
      es: "MCD (Máximo Común Divisor)",
      en: "GCD (Greatest Common Divisor)",
    },
    definition: {
      es: "Es el número más grande que divide exactamente a dos o más números. Por ejemplo, el MCD de 12 y 18 es 6.",
      en: "The largest number that divides two or more numbers exactly. For example, the GCD of 12 and 18 is 6.",
    },
  },
  "máximo común divisor": {
    term: {
      es: "Máximo Común Divisor",
      en: "Greatest Common Divisor",
    },
    definition: {
      es: "Es el número más grande que divide exactamente a dos o más números. Se abrevia como MCD.",
      en: "The largest number that divides two or more numbers exactly. Abbreviated as GCD.",
    },
  },
  "greatest common divisor": {
    term: {
      es: "Máximo Común Divisor",
      en: "Greatest Common Divisor",
    },
    definition: {
      es: "Es el número más grande que divide exactamente a dos o más números. Se abrevia como MCD.",
      en: "The largest number that divides two or more numbers exactly. Abbreviated as GCD.",
    },
  },
  fracción: {
    term: {
      es: "Fracción",
      en: "Fraction",
    },
    definition: {
      es: "Representa una parte de un todo. Se compone de un numerador (arriba) y un denominador (abajo). Por ejemplo: ¾.",
      en: "Represents a part of a whole. It consists of a numerator (top) and denominator (bottom). For example: ¾.",
    },
  },
  fraction: {
    term: {
      es: "Fracción",
      en: "Fraction",
    },
    definition: {
      es: "Representa una parte de un todo. Se compone de un numerador (arriba) y un denominador (abajo). Por ejemplo: ¾.",
      en: "Represents a part of a whole. It consists of a numerator (top) and denominator (bottom). For example: ¾.",
    },
  },
  numerador: {
    term: {
      es: "Numerador",
      en: "Numerator",
    },
    definition: {
      es: "El número superior de una fracción que indica cuántas partes se toman. En ¾, el numerador es 3.",
      en: "The top number of a fraction that indicates how many parts are taken. In ¾, the numerator is 3.",
    },
  },
  numerator: {
    term: {
      es: "Numerador",
      en: "Numerator",
    },
    definition: {
      es: "El número superior de una fracción que indica cuántas partes se toman. En ¾, el numerador es 3.",
      en: "The top number of a fraction that indicates how many parts are taken. In ¾, the numerator is 3.",
    },
  },
  denominador: {
    term: {
      es: "Denominador",
      en: "Denominator",
    },
    definition: {
      es: "El número inferior de una fracción que indica en cuántas partes se divide el todo. En ¾, el denominador es 4.",
      en: "The bottom number of a fraction that indicates into how many parts the whole is divided. In ¾, the denominator is 4.",
    },
  },
  denominator: {
    term: {
      es: "Denominador",
      en: "Denominator",
    },
    definition: {
      es: "El número inferior de una fracción que indica en cuántas partes se divide el todo. En ¾, el denominador es 4.",
      en: "The bottom number of a fraction that indicates into how many parts the whole is divided. In ¾, the denominator is 4.",
    },
  },
  "fracción impropia": {
    term: {
      es: "Fracción impropia",
      en: "Improper fraction",
    },
    definition: {
      es: "Una fracción donde el numerador es mayor o igual al denominador. Por ejemplo: 5/3 o 7/4.",
      en: "A fraction where the numerator is greater than or equal to the denominator. For example: 5/3 or 7/4.",
    },
  },
  "improper fraction": {
    term: {
      es: "Fracción impropia",
      en: "Improper fraction",
    },
    definition: {
      es: "Una fracción donde el numerador es mayor o igual al denominador. Por ejemplo: 5/3 o 7/4.",
      en: "A fraction where the numerator is greater than or equal to the denominator. For example: 5/3 or 7/4.",
    },
  },
  "fracción mixta": {
    term: {
      es: "Fracción mixta",
      en: "Mixed number",
    },
    definition: {
      es: "Un número entero combinado con una fracción. Por ejemplo: 2 ½ o 3 ¾.",
      en: "A whole number combined with a fraction. For example: 2 ½ or 3 ¾.",
    },
  },
  "mixed number": {
    term: {
      es: "Fracción mixta",
      en: "Mixed number",
    },
    definition: {
      es: "Un número entero combinado con una fracción. Por ejemplo: 2 ½ o 3 ¾.",
      en: "A whole number combined with a fraction. For example: 2 ½ or 3 ¾.",
    },
  },
  "fracción equivalente": {
    term: {
      es: "Fracción equivalente",
      en: "Equivalent fraction",
    },
    definition: {
      es: "Fracciones que representan la misma cantidad aunque tengan diferentes numeradores y denominadores. Por ejemplo: ½ = 2/4 = 3/6.",
      en: "Fractions that represent the same amount even though they have different numerators and denominators. For example: ½ = 2/4 = 3/6.",
    },
  },
  "equivalent fraction": {
    term: {
      es: "Fracción equivalente",
      en: "Equivalent fraction",
    },
    definition: {
      es: "Fracciones que representan la misma cantidad aunque tengan diferentes numeradores y denominadores. Por ejemplo: ½ = 2/4 = 3/6.",
      en: "Fractions that represent the same amount even though they have different numerators and denominators. For example: ½ = 2/4 = 3/6.",
    },
  },
  simplificar: {
    term: {
      es: "Simplificar",
      en: "Simplify",
    },
    definition: {
      es: "Reducir una fracción a su forma más simple dividiendo el numerador y denominador por su MCD. Por ejemplo: 6/8 = 3/4.",
      en: "Reduce a fraction to its simplest form by dividing both numerator and denominator by their GCD. For example: 6/8 = 3/4.",
    },
  },
  simplify: {
    term: {
      es: "Simplificar",
      en: "Simplify",
    },
    definition: {
      es: "Reducir una fracción a su forma más simple dividiendo el numerador y denominador por su MCD. Por ejemplo: 6/8 = 3/4.",
      en: "Reduce a fraction to its simplest form by dividing both numerator and denominator by their GCD. For example: 6/8 = 3/4.",
    },
  },
  decimal: {
    term: {
      es: "Decimal",
      en: "Decimal",
    },
    definition: {
      es: "Un número que incluye una parte fraccionaria separada por un punto decimal. Por ejemplo: 3.14 o 0.5.",
      en: "A number that includes a fractional part separated by a decimal point. For example: 3.14 or 0.5.",
    },
  },
  porcentaje: {
    term: {
      es: "Porcentaje",
      en: "Percentage",
    },
    definition: {
      es: "Una forma de expresar un número como fracción de 100. Se denota con el símbolo %. Por ejemplo: 50% = 50/100 = 0.5.",
      en: "A way of expressing a number as a fraction of 100. Denoted with the % symbol. For example: 50% = 50/100 = 0.5.",
    },
  },
  percentage: {
    term: {
      es: "Porcentaje",
      en: "Percentage",
    },
    definition: {
      es: "Una forma de expresar un número como fracción de 100. Se denota con el símbolo %. Por ejemplo: 50% = 50/100 = 0.5.",
      en: "A way of expressing a number as a fraction of 100. Denoted with the % symbol. For example: 50% = 50/100 = 0.5.",
    },
  },
  exponente: {
    term: {
      es: "Exponente",
      en: "Exponent",
    },
    definition: {
      es: "Indica cuántas veces se multiplica un número (la base) por sí mismo. En 2³, el exponente es 3 y significa 2×2×2 = 8.",
      en: "Indicates how many times a number (the base) is multiplied by itself. In 2³, the exponent is 3 and means 2×2×2 = 8.",
    },
  },
  exponent: {
    term: {
      es: "Exponente",
      en: "Exponent",
    },
    definition: {
      es: "Indica cuántas veces se multiplica un número (la base) por sí mismo. En 2³, el exponente es 3 y significa 2×2×2 = 8.",
      en: "Indicates how many times a number (the base) is multiplied by itself. In 2³, the exponent is 3 and means 2×2×2 = 8.",
    },
  },
  potencia: {
    term: {
      es: "Potencia",
      en: "Power",
    },
    definition: {
      es: "El resultado de multiplicar un número por sí mismo un número determinado de veces. Por ejemplo: 2³ = 8.",
      en: "The result of multiplying a number by itself a certain number of times. For example: 2³ = 8.",
    },
  },
  power: {
    term: {
      es: "Potencia",
      en: "Power",
    },
    definition: {
      es: "El resultado de multiplicar un número por sí mismo un número determinado de veces. Por ejemplo: 2³ = 8.",
      en: "The result of multiplying a number by itself a certain number of times. For example: 2³ = 8.",
    },
  },
  base: {
    term: {
      es: "Base",
      en: "Base",
    },
    definition: {
      es: "El número que se multiplica por sí mismo en una potencia. En 2³, la base es 2.",
      en: "The number that is multiplied by itself in a power. In 2³, the base is 2.",
    },
  },
  "raíz cuadrada": {
    term: {
      es: "Raíz cuadrada",
      en: "Square root",
    },
    definition: {
      es: "Un número que, multiplicado por sí mismo, da el número original. Por ejemplo: √16 = 4, porque 4×4 = 16.",
      en: "A number that, when multiplied by itself, gives the original number. For example: √16 = 4, because 4×4 = 16.",
    },
  },
  "square root": {
    term: {
      es: "Raíz cuadrada",
      en: "Square root",
    },
    definition: {
      es: "Un número que, multiplicado por sí mismo, da el número original. Por ejemplo: √16 = 4, porque 4×4 = 16.",
      en: "A number that, when multiplied by itself, gives the original number. For example: √16 = 4, because 4×4 = 16.",
    },
  },
  primo: {
    term: {
      es: "Número primo",
      en: "Prime number",
    },
    definition: {
      es: "Un número mayor que 1 que solo es divisible por 1 y por sí mismo. Por ejemplo: 2, 3, 5, 7, 11, 13...",
      en: "A number greater than 1 that is only divisible by 1 and itself. For example: 2, 3, 5, 7, 11, 13...",
    },
  },
  prime: {
    term: {
      es: "Número primo",
      en: "Prime number",
    },
    definition: {
      es: "Un número mayor que 1 que solo es divisible por 1 y por sí mismo. Por ejemplo: 2, 3, 5, 7, 11, 13...",
      en: "A number greater than 1 that is only divisible by 1 and itself. For example: 2, 3, 5, 7, 11, 13...",
    },
  },
  "número primo": {
    term: {
      es: "Número primo",
      en: "Prime number",
    },
    definition: {
      es: "Un número mayor que 1 que solo es divisible por 1 y por sí mismo. Por ejemplo: 2, 3, 5, 7, 11, 13...",
      en: "A number greater than 1 that is only divisible by 1 and itself. For example: 2, 3, 5, 7, 11, 13...",
    },
  },
  "prime number": {
    term: {
      es: "Número primo",
      en: "Prime number",
    },
    definition: {
      es: "Un número mayor que 1 que solo es divisible por 1 y por sí mismo. Por ejemplo: 2, 3, 5, 7, 11, 13...",
      en: "A number greater than 1 that is only divisible by 1 and itself. For example: 2, 3, 5, 7, 11, 13...",
    },
  },
  "común denominador": {
    term: {
      es: "Común denominador",
      en: "Common denominator",
    },
    definition: {
      es: "Un denominador compartido por dos o más fracciones. Necesario para sumar o restar fracciones. Por ejemplo: ½ + ⅓ = 3/6 + 2/6.",
      en: "A denominator shared by two or more fractions. Necessary to add or subtract fractions. For example: ½ + ⅓ = 3/6 + 2/6.",
    },
  },
  "common denominator": {
    term: {
      es: "Común denominador",
      en: "Common denominator",
    },
    definition: {
      es: "Un denominador compartido por dos o más fracciones. Necesario para sumar o restar fracciones. Por ejemplo: ½ + ⅓ = 3/6 + 2/6.",
      en: "A denominator shared by two or more fractions. Necessary to add or subtract fractions. For example: ½ + ⅓ = 3/6 + 2/6.",
    },
  },
  "notación científica": {
    term: {
      es: "Notación científica",
      en: "Scientific notation",
    },
    definition: {
      es: "Forma de escribir números muy grandes o muy pequeños como el producto de un número entre 1 y 10 multiplicado por una potencia de 10. Por ejemplo: 3.2 × 10⁴ = 32,000.",
      en: "A way to write very large or very small numbers as the product of a number between 1 and 10 multiplied by a power of 10. For example: 3.2 × 10⁴ = 32,000.",
    },
  },
  "scientific notation": {
    term: {
      es: "Notación científica",
      en: "Scientific notation",
    },
    definition: {
      es: "Forma de escribir números muy grandes o muy pequeños como el producto de un número entre 1 y 10 multiplicado por una potencia de 10. Por ejemplo: 3.2 × 10⁴ = 32,000.",
      en: "A way to write very large or very small numbers as the product of a number between 1 and 10 multiplied by a power of 10. For example: 3.2 × 10⁴ = 32,000.",
    },
  },
  razón: {
    term: {
      es: "Razón",
      en: "Ratio",
    },
    definition: {
      es: "Comparación de dos cantidades mediante división. Se expresa como a:b o a/b. Por ejemplo, si hay 3 manzanas y 2 naranjas, la razón es 3:2.",
      en: "Comparison of two quantities by division. Expressed as a:b or a/b. For example, if there are 3 apples and 2 oranges, the ratio is 3:2.",
    },
  },
  ratio: {
    term: {
      es: "Razón",
      en: "Ratio",
    },
    definition: {
      es: "Comparación de dos cantidades mediante división. Se expresa como a:b o a/b. Por ejemplo, si hay 3 manzanas y 2 naranjas, la razón es 3:2.",
      en: "Comparison of two quantities by division. Expressed as a:b or a/b. For example, if there are 3 apples and 2 oranges, the ratio is 3:2.",
    },
  },
  proporción: {
    term: {
      es: "Proporción",
      en: "Proportion",
    },
    definition: {
      es: "Igualdad entre dos razones. Se escribe como a:b = c:d o a/b = c/d. Por ejemplo: 2/3 = 4/6 es una proporción.",
      en: "Equality between two ratios. Written as a:b = c:d or a/b = c/d. For example: 2/3 = 4/6 is a proportion.",
    },
  },
  proportion: {
    term: {
      es: "Proporción",
      en: "Proportion",
    },
    definition: {
      es: "Igualdad entre dos razones. Se escribe como a:b = c:d o a/b = c/d. Por ejemplo: 2/3 = 4/6 es una proporción.",
      en: "Equality between two ratios. Written as a:b = c:d or a/b = c/d. For example: 2/3 = 4/6 is a proportion.",
    },
  },
  "proporcionalidad directa": {
    term: {
      es: "Proporcionalidad directa",
      en: "Direct proportionality",
    },
    definition: {
      es: "Relación entre dos variables donde al aumentar una, la otra aumenta en la misma proporción. Se expresa como y = kx. Por ejemplo: el costo es directamente proporcional a la cantidad comprada.",
      en: "Relationship between two variables where increasing one causes the other to increase in the same proportion. Expressed as y = kx. For example: cost is directly proportional to quantity purchased.",
    },
  },
  "direct proportionality": {
    term: {
      es: "Proporcionalidad directa",
      en: "Direct proportionality",
    },
    definition: {
      es: "Relación entre dos variables donde al aumentar una, la otra aumenta en la misma proporción. Se expresa como y = kx. Por ejemplo: el costo es directamente proporcional a la cantidad comprada.",
      en: "Relationship between two variables where increasing one causes the other to increase in the same proportion. Expressed as y = kx. For example: cost is directly proportional to quantity purchased.",
    },
  },
  "proporcionalidad inversa": {
    term: {
      es: "Proporcionalidad inversa",
      en: "Inverse proportionality",
    },
    definition: {
      es: "Relación entre dos variables donde al aumentar una, la otra disminuye proporcionalmente. Se expresa como y = k/x. Por ejemplo: el tiempo es inversamente proporcional a la velocidad.",
      en: "Relationship between two variables where increasing one causes the other to decrease proportionally. Expressed as y = k/x. For example: time is inversely proportional to speed.",
    },
  },
  "inverse proportionality": {
    term: {
      es: "Proporcionalidad inversa",
      en: "Inverse proportionality",
    },
    definition: {
      es: "Relación entre dos variables donde al aumentar una, la otra disminuye proporcionalmente. Se expresa como y = k/x. Por ejemplo: el tiempo es inversamente proporcional a la velocidad.",
      en: "Relationship between two variables where increasing one causes the other to decrease proportionally. Expressed as y = k/x. For example: time is inversely proportional to speed.",
    },
  },
  "regla de tres": {
    term: {
      es: "Regla de tres",
      en: "Rule of three",
    },
    definition: {
      es: "Método para resolver problemas de proporcionalidad. Si a/b = c/x, entonces x = bc/a. Por ejemplo: si 3 kg cuestan $45, ¿cuánto cuestan 5 kg? x = (5×45)/3 = $75.",
      en: "Method for solving proportionality problems. If a/b = c/x, then x = bc/a. For example: if 3 kg cost $45, how much do 5 kg cost? x = (5×45)/3 = $75.",
    },
  },
  "rule of three": {
    term: {
      es: "Regla de tres",
      en: "Rule of three",
    },
    definition: {
      es: "Método para resolver problemas de proporcionalidad. Si a/b = c/x, entonces x = bc/a. Por ejemplo: si 3 kg cuestan $45, ¿cuánto cuestan 5 kg? x = (5×45)/3 = $75.",
      en: "Method for solving proportionality problems. If a/b = c/x, then x = bc/a. For example: if 3 kg cost $45, how much do 5 kg cost? x = (5×45)/3 = $75.",
    },
  },
  "interés simple": {
    term: {
      es: "Interés simple",
      en: "Simple interest",
    },
    definition: {
      es: "Interés calculado solo sobre el capital inicial. Fórmula: I = Crt, donde C es el capital, r la tasa y t el tiempo. Por ejemplo: $1,000 al 5% anual por 2 años genera $100 de interés.",
      en: "Interest calculated only on the initial principal. Formula: I = Prt, where P is principal, r is rate, and t is time. For example: $1,000 at 5% per year for 2 years generates $100 interest.",
    },
  },
  "simple interest": {
    term: {
      es: "Interés simple",
      en: "Simple interest",
    },
    definition: {
      es: "Interés calculado solo sobre el capital inicial. Fórmula: I = Crt, donde C es el capital, r la tasa y t el tiempo. Por ejemplo: $1,000 al 5% anual por 2 años genera $100 de interés.",
      en: "Interest calculated only on the initial principal. Formula: I = Prt, where P is principal, r is rate, and t is time. For example: $1,000 at 5% per year for 2 years generates $100 interest.",
    },
  },
  "interés compuesto": {
    term: {
      es: "Interés compuesto",
      en: "Compound interest",
    },
    definition: {
      es: "Interés calculado sobre el capital inicial más los intereses acumulados. Fórmula: M = C(1 + r)ⁿ. Por ejemplo: $1,000 al 5% anual compuesto por 2 años resulta en $1,102.50.",
      en: "Interest calculated on the initial principal plus accumulated interest. Formula: A = P(1 + r)ⁿ. For example: $1,000 at 5% per year compounded for 2 years results in $1,102.50.",
    },
  },
  "compound interest": {
    term: {
      es: "Interés compuesto",
      en: "Compound interest",
    },
    definition: {
      es: "Interés calculado sobre el capital inicial más los intereses acumulados. Fórmula: M = C(1 + r)ⁿ. Por ejemplo: $1,000 al 5% anual compuesto por 2 años resulta en $1,102.50.",
      en: "Interest calculated on the initial principal plus accumulated interest. Formula: A = P(1 + r)ⁿ. For example: $1,000 at 5% per year compounded for 2 years results in $1,102.50.",
    },
  },
  capital: {
    term: {
      es: "Capital",
      en: "Principal",
    },
    definition: {
      es: "Cantidad de dinero inicial en un préstamo o inversión, antes de aplicar intereses. También llamado principal.",
      en: "Initial amount of money in a loan or investment, before applying interest. Also called capital.",
    },
  },
  principal: {
    term: {
      es: "Capital",
      en: "Principal",
    },
    definition: {
      es: "Cantidad de dinero inicial en un préstamo o inversión, antes de aplicar intereses. También llamado capital.",
      en: "Initial amount of money in a loan or investment, before applying interest. Also called principal.",
    },
  },
  "tasa de interés": {
    term: {
      es: "Tasa de interés",
      en: "Interest rate",
    },
    definition: {
      es: "Porcentaje que se cobra o paga por el uso del dinero durante un período. Usualmente se expresa como porcentaje anual. Por ejemplo: 5% anual.",
      en: "Percentage charged or paid for the use of money over a period. Usually expressed as an annual percentage. For example: 5% per year.",
    },
  },
  "interest rate": {
    term: {
      es: "Tasa de interés",
      en: "Interest rate",
    },
    definition: {
      es: "Porcentaje que se cobra o paga por el uso del dinero durante un período. Usualmente se expresa como porcentaje anual. Por ejemplo: 5% anual.",
      en: "Percentage charged or paid for the use of money over a period. Usually expressed as an annual percentage. For example: 5% per year.",
    },
  },
  racionalizar: {
    term: {
      es: "Racionalizar",
      en: "Rationalize",
    },
    definition: {
      es: "Eliminar radicales del denominador de una fracción multiplicando por una expresión adecuada. Por ejemplo: 1/√2 = √2/2.",
      en: "Eliminating radicals from the denominator of a fraction by multiplying by an appropriate expression. For example: 1/√2 = √2/2.",
    },
  },
  rationalize: {
    term: {
      es: "Racionalizar",
      en: "Rationalize",
    },
    definition: {
      es: "Eliminar radicales del denominador de una fracción multiplicando por una expresión adecuada. Por ejemplo: 1/√2 = √2/2.",
      en: "Eliminating radicals from the denominator of a fraction by multiplying by an appropriate expression. For example: 1/√2 = √2/2.",
    },
  },
  "exponente fraccionario": {
    term: {
      es: "Exponente fraccionario",
      en: "Fractional exponent",
    },
    definition: {
      es: "Exponente expresado como fracción que representa raíces. Por ejemplo: x^(1/2) = √x, x^(2/3) = ∛(x²).",
      en: "Exponent expressed as a fraction representing roots. For example: x^(1/2) = √x, x^(2/3) = ∛(x²).",
    },
  },
  "fractional exponent": {
    term: {
      es: "Exponente fraccionario",
      en: "Fractional exponent",
    },
    definition: {
      es: "Exponente expresado como fracción que representa raíces. Por ejemplo: x^(1/2) = √x, x^(2/3) = ∛(x²).",
      en: "Exponent expressed as a fraction representing roots. For example: x^(1/2) = √x, x^(2/3) = ∛(x²).",
    },
  },
  radical: {
    term: {
      es: "Radical",
      en: "Radical",
    },
    definition: {
      es: "Expresión que contiene una raíz, como √x o ∛x. El símbolo √ se llama signo radical.",
      en: "Expression containing a root, such as √x or ∛x. The √ symbol is called the radical sign.",
    },
  },
  "signo radical": {
    term: {
      es: "Signo radical",
      en: "Radical sign",
    },
    definition: {
      es: "El símbolo √ que indica una raíz. Por ejemplo: √9 = 3.",
      en: "The symbol √ indicating a root. For example: √9 = 3.",
    },
  },
  "radical sign": {
    term: {
      es: "Signo radical",
      en: "Radical sign",
    },
    definition: {
      es: "El símbolo √ que indica una raíz. Por ejemplo: √9 = 3.",
      en: "The symbol √ indicating a root. For example: √9 = 3.",
    },
  },
};

// Biology Glossary
export const biologyGlossary: Record<string, GlossaryEntry> = {
  célula: {
    term: {
      es: "Célula",
      en: "Cell",
    },
    definition: {
      es: "Unidad básica estructural y funcional de todos los organismos vivos. Puede ser procariota (sin núcleo definido) o eucariota (con núcleo).",
      en: "Basic structural and functional unit of all living organisms. Can be prokaryotic (without defined nucleus) or eukaryotic (with nucleus).",
    },
  },
  cell: {
    term: {
      es: "Célula",
      en: "Cell",
    },
    definition: {
      es: "Unidad básica estructural y funcional de todos los organismos vivos. Puede ser procariota (sin núcleo definido) o eucariota (con núcleo).",
      en: "Basic structural and functional unit of all living organisms. Can be prokaryotic (without defined nucleus) or eukaryotic (with nucleus).",
    },
  },
  ADN: {
    term: {
      es: "ADN (Ácido Desoxirribonucleico)",
      en: "DNA (Deoxyribonucleic Acid)",
    },
    definition: {
      es: "Molécula que contiene la información genética de los organismos. Tiene estructura de doble hélice formada por nucleótidos.",
      en: "Molecule containing the genetic information of organisms. Has a double helix structure made up of nucleotides.",
    },
  },
  DNA: {
    term: {
      es: "ADN (Ácido Desoxirribonucleico)",
      en: "DNA (Deoxyribonucleic Acid)",
    },
    definition: {
      es: "Molécula que contiene la información genética de los organismos. Tiene estructura de doble hélice formada por nucleótidos.",
      en: "Molecule containing the genetic information of organisms. Has a double helix structure made up of nucleotides.",
    },
  },
  mitocondria: {
    term: {
      es: "Mitocondria",
      en: "Mitochondria",
    },
    definition: {
      es: "Orgánulo celular encargado de producir energía (ATP) mediante respiración celular. Conocida como la 'central energética' de la célula.",
      en: "Cell organelle responsible for producing energy (ATP) through cellular respiration. Known as the 'powerhouse' of the cell.",
    },
  },
  mitochondria: {
    term: {
      es: "Mitocondria",
      en: "Mitochondria",
    },
    definition: {
      es: "Orgánulo celular encargado de producir energía (ATP) mediante respiración celular. Conocida como la 'central energética' de la célula.",
      en: "Cell organelle responsible for producing energy (ATP) through cellular respiration. Known as the 'powerhouse' of the cell.",
    },
  },
  fotosíntesis: {
    term: {
      es: "Fotosíntesis",
      en: "Photosynthesis",
    },
    definition: {
      es: "Proceso mediante el cual las plantas convierten la luz solar, agua y dióxido de carbono en glucosa y oxígeno. Fórmula: 6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂.",
      en: "Process by which plants convert sunlight, water, and carbon dioxide into glucose and oxygen. Formula: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂.",
    },
  },
  photosynthesis: {
    term: {
      es: "Fotosíntesis",
      en: "Photosynthesis",
    },
    definition: {
      es: "Proceso mediante el cual las plantas convierten la luz solar, agua y dióxido de carbono en glucosa y oxígeno. Fórmula: 6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂.",
      en: "Process by which plants convert sunlight, water, and carbon dioxide into glucose and oxygen. Formula: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂.",
    },
  },
  núcleo: {
    term: {
      es: "Núcleo celular",
      en: "Cell nucleus",
    },
    definition: {
      es: "Orgánulo que contiene el material genético (ADN) de la célula eucariota. Está rodeado por una membrana nuclear y controla las actividades celulares.",
      en: "Organelle containing the genetic material (DNA) of eukaryotic cells. Surrounded by a nuclear membrane and controls cellular activities.",
    },
  },
  nucleus: {
    term: {
      es: "Núcleo celular",
      en: "Cell nucleus",
    },
    definition: {
      es: "Orgánulo que contiene el material genético (ADN) de la célula eucariota. Está rodeado por una membrana nuclear y controla las actividades celulares.",
      en: "Organelle containing the genetic material (DNA) of eukaryotic cells. Surrounded by a nuclear membrane and controls cellular activities.",
    },
  },
  ecosistema: {
    term: {
      es: "Ecosistema",
      en: "Ecosystem",
    },
    definition: {
      es: "Sistema formado por organismos vivos (componente biótico) y su ambiente físico (componente abiótico) que interactúan entre sí.",
      en: "System formed by living organisms (biotic component) and their physical environment (abiotic component) that interact with each other.",
    },
  },
  ecosystem: {
    term: {
      es: "Ecosistema",
      en: "Ecosystem",
    },
    definition: {
      es: "Sistema formado por organismos vivos (componente biótico) y su ambiente físico (componente abiótico) que interactúan entre sí.",
      en: "System formed by living organisms (biotic component) and their physical environment (abiotic component) that interact with each other.",
    },
  },
  mutación: {
    term: {
      es: "Mutación",
      en: "Mutation",
    },
    definition: {
      es: "Cambio permanente en la secuencia de ADN. Puede ocurrir de forma espontánea o inducida, y es fuente de variabilidad genética.",
      en: "Permanent change in DNA sequence. Can occur spontaneously or be induced, and is a source of genetic variability.",
    },
  },
  mutation: {
    term: {
      es: "Mutación",
      en: "Mutation",
    },
    definition: {
      es: "Cambio permanente en la secuencia de ADN. Puede ocurrir de forma espontánea o inducida, y es fuente de variabilidad genética.",
      en: "Permanent change in DNA sequence. Can occur spontaneously or be induced, and is a source of genetic variability.",
    },
  },
  "selección natural": {
    term: {
      es: "Selección natural",
      en: "Natural selection",
    },
    definition: {
      es: "Mecanismo de evolución propuesto por Darwin donde los organismos mejor adaptados a su ambiente tienen mayor probabilidad de sobrevivir y reproducirse.",
      en: "Evolution mechanism proposed by Darwin where organisms better adapted to their environment have a higher probability of surviving and reproducing.",
    },
  },
  "natural selection": {
    term: {
      es: "Selección natural",
      en: "Natural selection",
    },
    definition: {
      es: "Mecanismo de evolución propuesto por Darwin donde los organismos mejor adaptados a su ambiente tienen mayor probabilidad de sobrevivir y reproducirse.",
      en: "Evolution mechanism proposed by Darwin where organisms better adapted to their environment have a higher probability of surviving and reproducing.",
    },
  },
  cloroplasto: {
    term: {
      es: "Cloroplasto",
      en: "Chloroplast",
    },
    definition: {
      es: "Orgánulo vegetal donde ocurre la fotosíntesis. Contiene clorofila que captura la luz solar y le da el color verde a las plantas.",
      en: "Plant organelle where photosynthesis occurs. Contains chlorophyll that captures sunlight and gives plants their green color.",
    },
  },
  chloroplast: {
    term: {
      es: "Cloroplasto",
      en: "Chloroplast",
    },
    definition: {
      es: "Orgánulo vegetal donde ocurre la fotosíntesis. Contiene clorofila que captura la luz solar y le da el color verde a las plantas.",
      en: "Plant organelle where photosynthesis occurs. Contains chlorophyll that captures sunlight and gives plants their green color.",
    },
  },
  ribosoma: {
    term: {
      es: "Ribosoma",
      en: "Ribosome",
    },
    definition: {
      es: "Orgánulo celular responsable de la síntesis de proteínas. Lee el ARN mensajero y ensambla aminoácidos en cadenas proteicas.",
      en: "Cell organelle responsible for protein synthesis. Reads messenger RNA and assembles amino acids into protein chains.",
    },
  },
  ribosome: {
    term: {
      es: "Ribosoma",
      en: "Ribosome",
    },
    definition: {
      es: "Orgánulo celular responsable de la síntesis de proteínas. Lee el ARN mensajero y ensambla aminoácidos en cadenas proteicas.",
      en: "Cell organelle responsible for protein synthesis. Reads messenger RNA and assembles amino acids into protein chains.",
    },
  },
  "membrana celular": {
    term: {
      es: "Membrana celular",
      en: "Cell membrane",
    },
    definition: {
      es: "Barrera selectivamente permeable que rodea la célula. Regula el paso de sustancias y protege el contenido celular.",
      en: "Selectively permeable barrier surrounding the cell. Regulates passage of substances and protects cellular contents.",
    },
  },
  "cell membrane": {
    term: {
      es: "Membrana celular",
      en: "Cell membrane",
    },
    definition: {
      es: "Barrera selectivamente permeable que rodea la célula. Regula el paso de sustancias y protege el contenido celular.",
      en: "Selectively permeable barrier surrounding the cell. Regulates passage of substances and protects cellular contents.",
    },
  },
  cromosoma: {
    term: {
      es: "Cromosoma",
      en: "Chromosome",
    },
    definition: {
      es: "Estructura formada por ADN y proteínas que contiene genes. Los humanos tienen 46 cromosomas (23 pares) en cada célula.",
      en: "Structure made of DNA and proteins containing genes. Humans have 46 chromosomes (23 pairs) in each cell.",
    },
  },
  chromosome: {
    term: {
      es: "Cromosoma",
      en: "Chromosome",
    },
    definition: {
      es: "Estructura formada por ADN y proteínas que contiene genes. Los humanos tienen 46 cromosomas (23 pares) en cada célula.",
      en: "Structure made of DNA and proteins containing genes. Humans have 46 chromosomes (23 pairs) in each cell.",
    },
  },
  gen: {
    term: {
      es: "Gen",
      en: "Gene",
    },
    definition: {
      es: "Unidad básica de herencia que codifica información para una característica específica. Segmento de ADN en un cromosoma.",
      en: "Basic unit of heredity encoding information for a specific trait. Segment of DNA on a chromosome.",
    },
  },
  gene: {
    term: {
      es: "Gen",
      en: "Gene",
    },
    definition: {
      es: "Unidad básica de herencia que codifica información para una característica específica. Segmento de ADN en un cromosoma.",
      en: "Basic unit of heredity encoding information for a specific trait. Segment of DNA on a chromosome.",
    },
  },
  mitosis: {
    term: {
      es: "Mitosis",
      en: "Mitosis",
    },
    definition: {
      es: "División celular que produce dos células hijas idénticas con el mismo número de cromosomas que la célula madre. Importante para crecimiento y reparación.",
      en: "Cell division producing two identical daughter cells with the same number of chromosomes as the parent. Important for growth and repair.",
    },
  },
  meiosis: {
    term: {
      es: "Meiosis",
      en: "Meiosis",
    },
    definition: {
      es: "División celular que reduce el número de cromosomas a la mitad, produciendo gametos (óvulos o espermatozoides) para reproducción sexual.",
      en: "Cell division reducing chromosome number by half, producing gametes (eggs or sperm) for sexual reproduction.",
    },
  },
  "respiración celular": {
    term: {
      es: "Respiración celular",
      en: "Cellular respiration",
    },
    definition: {
      es: "Proceso que libera energía de la glucosa para producir ATP. Ocurre en las mitocondrias. Fórmula: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP.",
      en: "Process releasing energy from glucose to produce ATP. Occurs in mitochondria. Formula: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP.",
    },
  },
  "cellular respiration": {
    term: {
      es: "Respiración celular",
      en: "Cellular respiration",
    },
    definition: {
      es: "Proceso que libera energía de la glucosa para producir ATP. Ocurre en las mitocondrias. Fórmula: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP.",
      en: "Process releasing energy from glucose to produce ATP. Occurs in mitochondria. Formula: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP.",
    },
  },
  ATP: {
    term: {
      es: "ATP (Adenosín Trifosfato)",
      en: "ATP (Adenosine Triphosphate)",
    },
    definition: {
      es: "Molécula que almacena y transporta energía química en las células. Es la 'moneda energética' celular.",
      en: "Molecule storing and transporting chemical energy in cells. The cellular 'energy currency'.",
    },
  },
  fenotipo: {
    term: {
      es: "Fenotipo",
      en: "Phenotype",
    },
    definition: {
      es: "Características observables de un organismo resultantes de la interacción entre su genotipo y el ambiente (color de ojos, altura, etc.).",
      en: "Observable characteristics of an organism resulting from interaction between genotype and environment (eye color, height, etc.).",
    },
  },
  phenotype: {
    term: {
      es: "Fenotipo",
      en: "Phenotype",
    },
    definition: {
      es: "Características observables de un organismo resultantes de la interacción entre su genotipo y el ambiente (color de ojos, altura, etc.).",
      en: "Observable characteristics of an organism resulting from interaction between genotype and environment (eye color, height, etc.).",
    },
  },
  genotipo: {
    term: {
      es: "Genotipo",
      en: "Genotype",
    },
    definition: {
      es: "Conjunto completo de genes de un organismo. Información genética heredada de los progenitores que determina características.",
      en: "Complete set of genes in an organism. Genetic information inherited from parents determining characteristics.",
    },
  },
  genotype: {
    term: {
      es: "Genotipo",
      en: "Genotype",
    },
    definition: {
      es: "Conjunto completo de genes de un organismo. Información genética heredada de los progenitores que determina características.",
      en: "Complete set of genes in an organism. Genetic information inherited from parents determining characteristics.",
    },
  },
  "cadena alimentaria": {
    term: {
      es: "Cadena alimentaria",
      en: "Food chain",
    },
    definition: {
      es: "Secuencia lineal de organismos donde cada uno se alimenta del anterior: productores → consumidores primarios → consumidores secundarios → descomponedores.",
      en: "Linear sequence of organisms where each feeds on the previous: producers → primary consumers → secondary consumers → decomposers.",
    },
  },
  "food chain": {
    term: {
      es: "Cadena alimentaria",
      en: "Food chain",
    },
    definition: {
      es: "Secuencia lineal de organismos donde cada uno se alimenta del anterior: productores → consumidores primarios → consumidores secundarios → descomponedores.",
      en: "Linear sequence of organisms where each feeds on the previous: producers → primary consumers → secondary consumers → decomposers.",
    },
  },
  productor: {
    term: {
      es: "Productor",
      en: "Producer",
    },
    definition: {
      es: "Organismo autótrofo que produce su propio alimento mediante fotosíntesis o quimiosíntesis (plantas, algas). Base de la cadena alimentaria.",
      en: "Autotrophic organism producing its own food through photosynthesis or chemosynthesis (plants, algae). Base of the food chain.",
    },
  },
  producer: {
    term: {
      es: "Productor",
      en: "Producer",
    },
    definition: {
      es: "Organismo autótrofo que produce su propio alimento mediante fotosíntesis o quimiosíntesis (plantas, algas). Base de la cadena alimentaria.",
      en: "Autotrophic organism producing its own food through photosynthesis or chemosynthesis (plants, algae). Base of the food chain.",
    },
  },
  consumidor: {
    term: {
      es: "Consumidor",
      en: "Consumer",
    },
    definition: {
      es: "Organismo heterótrofo que obtiene energía alimentándose de otros organismos. Puede ser primario (herbívoro), secundario (carnívoro) o terciario.",
      en: "Heterotrophic organism obtaining energy by feeding on other organisms. Can be primary (herbivore), secondary (carnivore), or tertiary.",
    },
  },
  consumer: {
    term: {
      es: "Consumidor",
      en: "Consumer",
    },
    definition: {
      es: "Organismo heterótrofo que obtiene energía alimentándose de otros organismos. Puede ser primario (herbívoro), secundario (carnívoro) o terciario.",
      en: "Heterotrophic organism obtaining energy by feeding on other organisms. Can be primary (herbivore), secondary (carnivore), or tertiary.",
    },
  },
  descomponedor: {
    term: {
      es: "Descomponedor",
      en: "Decomposer",
    },
    definition: {
      es: "Organismo que descompone materia orgánica muerta, reciclando nutrientes al ecosistema (hongos, bacterias). Esenciales para ciclos biogeoquímicos.",
      en: "Organism decomposing dead organic matter, recycling nutrients to ecosystem (fungi, bacteria). Essential for biogeochemical cycles.",
    },
  },
  decomposer: {
    term: {
      es: "Descomponedor",
      en: "Decomposer",
    },
    definition: {
      es: "Organismo que descompone materia orgánica muerta, reciclando nutrientes al ecosistema (hongos, bacterias). Esenciales para ciclos biogeoquímicos.",
      en: "Organism decomposing dead organic matter, recycling nutrients to ecosystem (fungi, bacteria). Essential for biogeochemical cycles.",
    },
  },
  biodiversidad: {
    term: {
      es: "Biodiversidad",
      en: "Biodiversity",
    },
    definition: {
      es: "Variedad de vida en la Tierra: diversidad genética, de especies y de ecosistemas. Indicador de salud ambiental.",
      en: "Variety of life on Earth: genetic, species, and ecosystem diversity. Indicator of environmental health.",
    },
  },
  biodiversity: {
    term: {
      es: "Biodiversidad",
      en: "Biodiversity",
    },
    definition: {
      es: "Variedad de vida en la Tierra: diversidad genética, de especies y de ecosistemas. Indicador de salud ambiental.",
      en: "Variety of life on Earth: genetic, species, and ecosystem diversity. Indicator of environmental health.",
    },
  },
  homeostasis: {
    term: {
      es: "Homeostasis",
      en: "Homeostasis",
    },
    definition: {
      es: "Capacidad de mantener condiciones internas estables (temperatura, pH, glucosa) pese a cambios externos. Fundamental para la supervivencia.",
      en: "Ability to maintain stable internal conditions (temperature, pH, glucose) despite external changes. Fundamental for survival.",
    },
  },
  enzima: {
    term: {
      es: "Enzima",
      en: "Enzyme",
    },
    definition: {
      es: "Proteína catalizadora que acelera reacciones químicas en organismos vivos sin consumirse. Específica para cada sustrato.",
      en: "Catalytic protein accelerating chemical reactions in living organisms without being consumed. Specific for each substrate.",
    },
  },
  enzyme: {
    term: {
      es: "Enzima",
      en: "Enzyme",
    },
    definition: {
      es: "Proteína catalizadora que acelera reacciones químicas en organismos vivos sin consumirse. Específica para cada sustrato.",
      en: "Catalytic protein accelerating chemical reactions in living organisms without being consumed. Specific for each substrate.",
    },
  },
  proteína: {
    term: {
      es: "Proteína",
      en: "Protein",
    },
    definition: {
      es: "Macromolécula formada por cadenas de aminoácidos. Realiza funciones estructurales, enzimáticas, de transporte y defensa en organismos.",
      en: "Macromolecule formed by amino acid chains. Performs structural, enzymatic, transport, and defense functions in organisms.",
    },
  },
  protein: {
    term: {
      es: "Proteína",
      en: "Protein",
    },
    definition: {
      es: "Macromolécula formada por cadenas de aminoácidos. Realiza funciones estructurales, enzimáticas, de transporte y defensa en organismos.",
      en: "Macromolecule formed by amino acid chains. Performs structural, enzymatic, transport, and defense functions in organisms.",
    },
  },
  ARN: {
    term: {
      es: "ARN (Ácido Ribonucleico)",
      en: "RNA (Ribonucleic Acid)",
    },
    definition: {
      es: "Molécula que transfiere información genética del ADN para síntesis de proteínas. Tipos: ARN mensajero, de transferencia y ribosomal.",
      en: "Molecule transferring genetic information from DNA for protein synthesis. Types: messenger, transfer, and ribosomal RNA.",
    },
  },
  RNA: {
    term: {
      es: "ARN (Ácido Ribonucleico)",
      en: "RNA (Ribonucleic Acid)",
    },
    definition: {
      es: "Molécula que transfiere información genética del ADN para síntesis de proteínas. Tipos: ARN mensajero, de transferencia y ribosomal.",
      en: "Molecule transferring genetic information from DNA for protein synthesis. Types: messenger, transfer, and ribosomal RNA.",
    },
  },
  virus: {
    term: {
      es: "Virus",
      en: "Virus",
    },
    definition: {
      es: "Agente infeccioso microscópico que necesita células vivas para reproducirse. Compuesto por material genético (ADN o ARN) y cápside proteica.",
      en: "Microscopic infectious agent requiring living cells to reproduce. Composed of genetic material (DNA or RNA) and protein capsid.",
    },
  },
  bacteria: {
    term: {
      es: "Bacteria",
      en: "Bacteria",
    },
    definition: {
      es: "Microorganismo unicelular procariota sin núcleo definido. Pueden ser beneficiosas (digestión, producción) o patógenas (enfermedades).",
      en: "Unicellular prokaryotic microorganism without defined nucleus. Can be beneficial (digestion, production) or pathogenic (diseases).",
    },
  },
};

// Geography Glossary
export const geographyGlossary: Record<string, GlossaryEntry> = {
  latitud: {
    term: {
      es: "Latitud",
      en: "Latitude",
    },
    definition: {
      es: "Distancia angular medida en grados desde el ecuador (0°) hacia los polos (90° norte o sur). Determina las zonas climáticas.",
      en: "Angular distance measured in degrees from the equator (0°) to the poles (90° north or south). Determines climate zones.",
    },
  },
  latitude: {
    term: {
      es: "Latitud",
      en: "Latitude",
    },
    definition: {
      es: "Distancia angular medida en grados desde el ecuador (0°) hacia los polos (90° norte o sur). Determina las zonas climáticas.",
      en: "Angular distance measured in degrees from the equator (0°) to the poles (90° north or south). Determines climate zones.",
    },
  },
  longitud: {
    term: {
      es: "Longitud",
      en: "Longitude",
    },
    definition: {
      es: "Distancia angular medida en grados desde el meridiano de Greenwich (0°) hacia el este u oeste (hasta 180°). Define los husos horarios.",
      en: "Angular distance measured in degrees from the Greenwich meridian (0°) east or west (up to 180°). Defines time zones.",
    },
  },
  longitude: {
    term: {
      es: "Longitud",
      en: "Longitude",
    },
    definition: {
      es: "Distancia angular medida en grados desde el meridiano de Greenwich (0°) hacia el este u oeste (hasta 180°). Define los husos horarios.",
      en: "Angular distance measured in degrees from the Greenwich meridian (0°) east or west (up to 180°). Defines time zones.",
    },
  },
  ecuador: {
    term: {
      es: "Ecuador",
      en: "Equator",
    },
    definition: {
      es: "Línea imaginaria que divide la Tierra en hemisferio norte y sur. Marca la latitud 0° y recibe la mayor radiación solar.",
      en: "Imaginary line dividing Earth into northern and southern hemispheres. Marks 0° latitude and receives the most solar radiation.",
    },
  },
  equator: {
    term: {
      es: "Ecuador",
      en: "Equator",
    },
    definition: {
      es: "Línea imaginaria que divide la Tierra en hemisferio norte y sur. Marca la latitud 0° y recibe la mayor radiación solar.",
      en: "Imaginary line dividing Earth into northern and southern hemispheres. Marks 0° latitude and receives the most solar radiation.",
    },
  },
  "tectónica de placas": {
    term: {
      es: "Tectónica de placas",
      en: "Plate tectonics",
    },
    definition: {
      es: "Teoría que explica el movimiento de las placas litosféricas de la Tierra. Causa terremotos, volcanes y formación de montañas.",
      en: "Theory explaining the movement of Earth's lithospheric plates. Causes earthquakes, volcanoes, and mountain formation.",
    },
  },
  "plate tectonics": {
    term: {
      es: "Tectónica de placas",
      en: "Plate tectonics",
    },
    definition: {
      es: "Teoría que explica el movimiento de las placas litosféricas de la Tierra. Causa terremotos, volcanes y formación de montañas.",
      en: "Theory explaining the movement of Earth's lithospheric plates. Causes earthquakes, volcanoes, and mountain formation.",
    },
  },
  erosión: {
    term: {
      es: "Erosión",
      en: "Erosion",
    },
    definition: {
      es: "Proceso de desgaste y transporte de materiales terrestres causado por agua, viento, hielo o gravedad. Modifica el relieve.",
      en: "Process of wear and transport of earth materials caused by water, wind, ice, or gravity. Modifies relief.",
    },
  },
  erosion: {
    term: {
      es: "Erosión",
      en: "Erosion",
    },
    definition: {
      es: "Proceso de desgaste y transporte de materiales terrestres causado por agua, viento, hielo o gravedad. Modifica el relieve.",
      en: "Process of wear and transport of earth materials caused by water, wind, ice, or gravity. Modifies relief.",
    },
  },
  clima: {
    term: {
      es: "Clima",
      en: "Climate",
    },
    definition: {
      es: "Conjunto de condiciones atmosféricas que caracterizan una región durante un período prolongado (décadas). Se diferencia del tiempo meteorológico.",
      en: "Set of atmospheric conditions characterizing a region over an extended period (decades). Differs from weather.",
    },
  },
  climate: {
    term: {
      es: "Clima",
      en: "Climate",
    },
    definition: {
      es: "Conjunto de condiciones atmosféricas que caracterizan una región durante un período prolongado (décadas). Se diferencia del tiempo meteorológico.",
      en: "Set of atmospheric conditions characterizing a region over an extended period (decades). Differs from weather.",
    },
  },
  relieve: {
    term: {
      es: "Relieve",
      en: "Relief/Terrain",
    },
    definition: {
      es: "Conjunto de formas y accidentes que presenta la superficie terrestre: montañas, valles, llanuras, mesetas, etc.",
      en: "Set of forms and features present on Earth's surface: mountains, valleys, plains, plateaus, etc.",
    },
  },
  relief: {
    term: {
      es: "Relieve",
      en: "Relief/Terrain",
    },
    definition: {
      es: "Conjunto de formas y accidentes que presenta la superficie terrestre: montañas, valles, llanuras, mesetas, etc.",
      en: "Set of forms and features present on Earth's surface: mountains, valleys, plains, plateaus, etc.",
    },
  },
  meridiano: {
    term: {
      es: "Meridiano",
      en: "Meridian",
    },
    definition: {
      es: "Línea imaginaria que va de polo a polo. El meridiano de Greenwich (0°) es la referencia para medir la longitud.",
      en: "Imaginary line running from pole to pole. The Greenwich meridian (0°) is the reference for measuring longitude.",
    },
  },
  meridian: {
    term: {
      es: "Meridiano",
      en: "Meridian",
    },
    definition: {
      es: "Línea imaginaria que va de polo a polo. El meridiano de Greenwich (0°) es la referencia para medir la longitud.",
      en: "Imaginary line running from pole to pole. The Greenwich meridian (0°) is the reference for measuring longitude.",
    },
  },
  volcán: {
    term: {
      es: "Volcán",
      en: "Volcano",
    },
    definition: {
      es: "Abertura en la corteza terrestre por donde sale magma, gases y cenizas. Se forma por actividad tectónica y puntos calientes.",
      en: "Opening in Earth's crust where magma, gases, and ash emerge. Formed by tectonic activity and hotspots.",
    },
  },
  volcano: {
    term: {
      es: "Volcán",
      en: "Volcano",
    },
    definition: {
      es: "Abertura en la corteza terrestre por donde sale magma, gases y cenizas. Se forma por actividad tectónica y puntos calientes.",
      en: "Opening in Earth's crust where magma, gases, and ash emerge. Formed by tectonic activity and hotspots.",
    },
  },
  terremoto: {
    term: {
      es: "Terremoto",
      en: "Earthquake",
    },
    definition: {
      es: "Vibración de la Tierra causada por liberación súbita de energía en la corteza. Medido por escala de Richter o magnitud de momento.",
      en: "Vibration of Earth caused by sudden release of energy in the crust. Measured by Richter scale or moment magnitude.",
    },
  },
  earthquake: {
    term: {
      es: "Terremoto",
      en: "Earthquake",
    },
    definition: {
      es: "Vibración de la Tierra causada por liberación súbita de energía en la corteza. Medido por escala de Richter o magnitud de momento.",
      en: "Vibration of Earth caused by sudden release of energy in the crust. Measured by Richter scale or moment magnitude.",
    },
  },
  tsunami: {
    term: {
      es: "Tsunami",
      en: "Tsunami",
    },
    definition: {
      es: "Serie de olas gigantes causadas por terremotos submarinos, erupciones volcánicas o deslizamientos. Pueden alcanzar alturas devastadoras.",
      en: "Series of giant waves caused by underwater earthquakes, volcanic eruptions, or landslides. Can reach devastating heights.",
    },
  },
  glaciar: {
    term: {
      es: "Glaciar",
      en: "Glacier",
    },
    definition: {
      es: "Masa de hielo en movimiento formada por acumulación y compactación de nieve durante años. Modela el relieve por erosión.",
      en: "Moving ice mass formed by accumulation and compaction of snow over years. Shapes relief through erosion.",
    },
  },
  glacier: {
    term: {
      es: "Glaciar",
      en: "Glacier",
    },
    definition: {
      es: "Masa de hielo en movimiento formada por acumulación y compactación de nieve durante años. Modela el relieve por erosión.",
      en: "Moving ice mass formed by accumulation and compaction of snow over years. Shapes relief through erosion.",
    },
  },
  "clima tropical": {
    term: {
      es: "Clima tropical",
      en: "Tropical climate",
    },
    definition: {
      es: "Clima cálido cerca del ecuador con temperaturas altas todo el año (>18°C) y abundantes precipitaciones. Incluye selvas tropicales.",
      en: "Warm climate near equator with high temperatures year-round (>18°C) and abundant rainfall. Includes rainforests.",
    },
  },
  "tropical climate": {
    term: {
      es: "Clima tropical",
      en: "Tropical climate",
    },
    definition: {
      es: "Clima cálido cerca del ecuador con temperaturas altas todo el año (>18°C) y abundantes precipitaciones. Incluye selvas tropicales.",
      en: "Warm climate near equator with high temperatures year-round (>18°C) and abundant rainfall. Includes rainforests.",
    },
  },
  "clima desértico": {
    term: {
      es: "Clima desértico",
      en: "Desert climate",
    },
    definition: {
      es: "Clima árido con precipitaciones muy escasas (<250mm/año). Grandes variaciones térmicas entre día y noche. Vegetación escasa adaptada.",
      en: "Arid climate with very scarce precipitation (<250mm/year). Large temperature variations between day and night. Scarce adapted vegetation.",
    },
  },
  "desert climate": {
    term: {
      es: "Clima desértico",
      en: "Desert climate",
    },
    definition: {
      es: "Clima árido con precipitaciones muy escasas (<250mm/año). Grandes variaciones térmicas entre día y noche. Vegetación escasa adaptada.",
      en: "Arid climate with very scarce precipitation (<250mm/year). Large temperature variations between day and night. Scarce adapted vegetation.",
    },
  },
  sabana: {
    term: {
      es: "Sabana",
      en: "Savanna",
    },
    definition: {
      es: "Bioma tropical con estación seca y lluviosa. Praderas con árboles dispersos. Hogar de grandes herbívoros (África, Sudamérica).",
      en: "Tropical biome with dry and rainy seasons. Grasslands with scattered trees. Home to large herbivores (Africa, South America).",
    },
  },
  savanna: {
    term: {
      es: "Sabana",
      en: "Savanna",
    },
    definition: {
      es: "Bioma tropical con estación seca y lluviosa. Praderas con árboles dispersos. Hogar de grandes herbívoros (África, Sudamérica).",
      en: "Tropical biome with dry and rainy seasons. Grasslands with scattered trees. Home to large herbivores (Africa, South America).",
    },
  },
  tundra: {
    term: {
      es: "Tundra",
      en: "Tundra",
    },
    definition: {
      es: "Bioma frío cerca de los polos con temperaturas bajas, suelo permanentemente congelado (permafrost) y vegetación baja (musgos, líquenes).",
      en: "Cold biome near poles with low temperatures, permanently frozen soil (permafrost), and low vegetation (mosses, lichens).",
    },
  },
  "recursos renovables": {
    term: {
      es: "Recursos renovables",
      en: "Renewable resources",
    },
    definition: {
      es: "Recursos naturales que se regeneran naturalmente en tiempo humano (energía solar, eólica, mareas, biomasa). No se agotan con uso sostenible.",
      en: "Natural resources regenerating naturally within human timeframe (solar, wind, tidal energy, biomass). Don't deplete with sustainable use.",
    },
  },
  "renewable resources": {
    term: {
      es: "Recursos renovables",
      en: "Renewable resources",
    },
    definition: {
      es: "Recursos naturales que se regeneran naturalmente en tiempo humano (energía solar, eólica, mareas, biomasa). No se agotan con uso sostenible.",
      en: "Natural resources regenerating naturally within human timeframe (solar, wind, tidal energy, biomass). Don't deplete with sustainable use.",
    },
  },
  "recursos no renovables": {
    term: {
      es: "Recursos no renovables",
      en: "Non-renewable resources",
    },
    definition: {
      es: "Recursos limitados que no se regeneran en tiempo humano (petróleo, carbón, gas natural, minerales). Su extracción causa agotamiento.",
      en: "Limited resources not regenerating within human timeframe (oil, coal, natural gas, minerals). Their extraction causes depletion.",
    },
  },
  "non-renewable resources": {
    term: {
      es: "Recursos no renovables",
      en: "Non-renewable resources",
    },
    definition: {
      es: "Recursos limitados que no se regeneran en tiempo humano (petróleo, carbón, gas natural, minerales). Su extracción causa agotamiento.",
      en: "Limited resources not regenerating within human timeframe (oil, coal, natural gas, minerals). Their extraction causes depletion.",
    },
  },
  urbanización: {
    term: {
      es: "Urbanización",
      en: "Urbanization",
    },
    definition: {
      es: "Proceso de crecimiento de ciudades y concentración de población en áreas urbanas. Transforma paisajes naturales en urbanos.",
      en: "Process of city growth and population concentration in urban areas. Transforms natural landscapes into urban ones.",
    },
  },
  urbanization: {
    term: {
      es: "Urbanización",
      en: "Urbanization",
    },
    definition: {
      es: "Proceso de crecimiento de ciudades y concentración de población en áreas urbanas. Transforma paisajes naturales en urbanos.",
      en: "Process of city growth and population concentration in urban areas. Transforms natural landscapes into urban ones.",
    },
  },
  migración: {
    term: {
      es: "Migración",
      en: "Migration",
    },
    definition: {
      es: "Desplazamiento de población de un lugar a otro, temporal o permanente. Puede ser interna (dentro del país) o internacional.",
      en: "Population displacement from one place to another, temporary or permanent. Can be internal (within country) or international.",
    },
  },
  migration: {
    term: {
      es: "Migración",
      en: "Migration",
    },
    definition: {
      es: "Desplazamiento de población de un lugar a otro, temporal o permanente. Puede ser interna (dentro del país) o internacional.",
      en: "Population displacement from one place to another, temporary or permanent. Can be internal (within country) or international.",
    },
  },
  "densidad de población": {
    term: {
      es: "Densidad de población",
      en: "Population density",
    },
    definition: {
      es: "Número de habitantes por unidad de superficie (hab/km²). Indica nivel de concentración poblacional en un territorio.",
      en: "Number of inhabitants per surface unit (pop/km²). Indicates level of population concentration in a territory.",
    },
  },
  "population density": {
    term: {
      es: "Densidad de población",
      en: "Population density",
    },
    definition: {
      es: "Número de habitantes por unidad de superficie (hab/km²). Indica nivel de concentración poblacional en un territorio.",
      en: "Number of inhabitants per surface unit (pop/km²). Indicates level of population concentration in a territory.",
    },
  },
  "desarrollo sostenible": {
    term: {
      es: "Desarrollo sostenible",
      en: "Sustainable development",
    },
    definition: {
      es: "Desarrollo que satisface necesidades presentes sin comprometer capacidad de futuras generaciones. Equilibrio económico, social y ambiental.",
      en: "Development meeting present needs without compromising future generations' capacity. Economic, social, and environmental balance.",
    },
  },
  "sustainable development": {
    term: {
      es: "Desarrollo sostenible",
      en: "Sustainable development",
    },
    definition: {
      es: "Desarrollo que satisface necesidades presentes sin comprometer capacidad de futuras generaciones. Equilibrio económico, social y ambiental.",
      en: "Development meeting present needs without compromising future generations' capacity. Economic, social, and environmental balance.",
    },
  },
  cordillera: {
    term: {
      es: "Cordillera",
      en: "Mountain range",
    },
    definition: {
      es: "Cadena de montañas conectadas formada por plegamientos tectónicos. Ejemplos: Andes, Himalaya, Alpes, Rocosas.",
      en: "Chain of connected mountains formed by tectonic folding. Examples: Andes, Himalayas, Alps, Rockies.",
    },
  },
  "mountain range": {
    term: {
      es: "Cordillera",
      en: "Mountain range",
    },
    definition: {
      es: "Cadena de montañas conectadas formada por plegamientos tectónicos. Ejemplos: Andes, Himalaya, Alpes, Rocosas.",
      en: "Chain of connected mountains formed by tectonic folding. Examples: Andes, Himalayas, Alps, Rockies.",
    },
  },
  delta: {
    term: {
      es: "Delta",
      en: "Delta",
    },
    definition: {
      es: "Formación sedimentaria triangular en desembocadura de ríos donde depositan sedimentos. Suelos muy fértiles para agricultura.",
      en: "Triangular sedimentary formation at river mouths where sediments deposit. Very fertile soils for agriculture.",
    },
  },
  archipiélago: {
    term: {
      es: "Archipiélago",
      en: "Archipelago",
    },
    definition: {
      es: "Conjunto de islas agrupadas en una zona marina. Pueden ser de origen volcánico, coralino o continental. Ejemplos: Filipinas, Japón, Hawái.",
      en: "Group of islands clustered in a marine area. Can be volcanic, coral reef, or continental origin. Examples: Philippines, Japan, Hawaii.",
    },
  },
  archipelago: {
    term: {
      es: "Archipiélago",
      en: "Archipelago",
    },
    definition: {
      es: "Conjunto de islas agrupadas en una zona marina. Pueden ser de origen volcánico, coralino o continental. Ejemplos: Filipinas, Japón, Hawái.",
      en: "Group of islands clustered in a marine area. Can be volcanic, coral reef, or continental origin. Examples: Philippines, Japan, Hawaii.",
    },
  },
  "efecto invernadero": {
    term: {
      es: "Efecto invernadero",
      en: "Greenhouse effect",
    },
    definition: {
      es: "Fenómeno natural que retiene calor en atmósfera mediante gases (CO₂, metano). Intensificado por actividad humana, causa calentamiento global.",
      en: "Natural phenomenon retaining heat in atmosphere through gases (CO₂, methane). Intensified by human activity, causes global warming.",
    },
  },
  "greenhouse effect": {
    term: {
      es: "Efecto invernadero",
      en: "Greenhouse effect",
    },
    definition: {
      es: "Fenómeno natural que retiene calor en atmósfera mediante gases (CO₂, metano). Intensificado por actividad humana, causa calentamiento global.",
      en: "Natural phenomenon retaining heat in atmosphere through gases (CO₂, methane). Intensified by human activity, causes global warming.",
    },
  },
  huracán: {
    term: {
      es: "Huracán",
      en: "Hurricane",
    },
    definition: {
      es: "Ciclón tropical intenso con vientos >119 km/h que se forma en océanos cálidos. Clasificado por escala Saffir-Simpson (categorías 1-5).",
      en: "Intense tropical cyclone with winds >119 km/h forming in warm oceans. Classified by Saffir-Simpson scale (categories 1-5).",
    },
  },
  hurricane: {
    term: {
      es: "Huracán",
      en: "Hurricane",
    },
    definition: {
      es: "Ciclón tropical intenso con vientos >119 km/h que se forma en océanos cálidos. Clasificado por escala Saffir-Simpson (categorías 1-5).",
      en: "Intense tropical cyclone with winds >119 km/h forming in warm oceans. Classified by Saffir-Simpson scale (categories 1-5).",
    },
  },
  monzón: {
    term: {
      es: "Monzón",
      en: "Monsoon",
    },
    definition: {
      es: "Viento estacional que cambia de dirección causando estación seca y húmeda. Predominante en Asia meridional y sudeste asiático.",
      en: "Seasonal wind changing direction causing dry and wet seasons. Predominant in South Asia and Southeast Asia.",
    },
  },
  monsoon: {
    term: {
      es: "Monzón",
      en: "Monsoon",
    },
    definition: {
      es: "Viento estacional que cambia de dirección causando estación seca y húmeda. Predominante en Asia meridional y sudeste asiático.",
      en: "Seasonal wind changing direction causing dry and wet seasons. Predominant in South Asia and Southeast Asia.",
    },
  },
};

export const spanishGlossary: Record<string, GlossaryEntry> = {
  "función referencial": {
    term: {
      es: "Función referencial",
      en: "Referential function",
    },
    definition: {
      es: "Función del lenguaje centrada en el contexto o referente. Transmite información objetiva y verificable sobre la realidad. También se llama función informativa o representativa. Predomina en textos científicos, periodísticos y enciclopédicos.",
      en: "Language function focused on the context or referent. Transmits objective and verifiable information about reality. Also called informative or representative function. Predominates in scientific, journalistic and encyclopedic texts.",
    },
  },
  "función apelativa": {
    term: {
      es: "Función apelativa",
      en: "Appellative function",
    },
    definition: {
      es: "Función del lenguaje centrada en el receptor. Busca influir en su conducta, provocar una reacción o persuadirlo. También se llama función conativa. Es propia del modo imperativo y predomina en publicidad, propaganda y discursos persuasivos.",
      en: "Language function focused on the receiver. Seeks to influence their behavior, provoke a reaction or persuade them. Also called conative function. Characteristic of the imperative mood and predominates in advertising, propaganda and persuasive speeches.",
    },
  },
  "función poética": {
    term: {
      es: "Función poética",
      en: "Poetic function",
    },
    definition: {
      es: "Función del lenguaje centrada en el mensaje mismo, en su forma y estructura. Busca producir un efecto estético mediante figuras retóricas, ritmo, sonoridad y otros recursos literarios. También se llama función estética. Predomina en la poesía y la literatura.",
      en: "Language function focused on the message itself, on its form and structure. Seeks to produce an aesthetic effect through rhetorical figures, rhythm, sound and other literary devices. Also called aesthetic function. Predominates in poetry and literature.",
    },
  },
  "discurso descriptivo": {
    term: {
      es: "Discurso descriptivo",
      en: "Descriptive discourse",
    },
    definition: {
      es: "Forma del discurso que presenta las características, cualidades y rasgos de personas, objetos, lugares o situaciones. Predominan los adjetivos calificativos y los detalles sensoriales. Puede ser objetivo (científico) o subjetivo (literario).",
      en: "Form of discourse that presents the characteristics, qualities and features of people, objects, places or situations. Qualifying adjectives and sensory details predominate. Can be objective (scientific) or subjective (literary).",
    },
  },
  "discurso narrativo": {
    term: {
      es: "Discurso narrativo",
      en: "Narrative discourse",
    },
    definition: {
      es: "Forma del discurso que relata una sucesión de hechos o acciones en el tiempo. Sus elementos son: narrador, personajes, espacio, tiempo y acción. Tiene una estructura de planteamiento, nudo y desenlace.",
      en: "Form of discourse that relates a succession of events or actions in time. Its elements are: narrator, characters, space, time and action. Has a structure of exposition, climax and resolution.",
    },
  },
  "discurso argumentativo": {
    term: {
      es: "Discurso argumentativo",
      en: "Argumentative discourse",
    },
    definition: {
      es: "Forma del discurso que defiende una postura o idea mediante razones y evidencias. Su estructura es: tesis (idea que se defiende), argumentos (razones que la sustentan) y conclusión (cierre que reafirma la tesis). Busca convencer o persuadir al receptor.",
      en: "Form of discourse that defends a position or idea through reasons and evidence. Its structure is: thesis (idea being defended), arguments (reasons that support it) and conclusion (closure that reaffirms the thesis). Seeks to convince or persuade the receiver.",
    },
  },
  "idea principal": {
    term: {
      es: "Idea principal",
      en: "Main idea",
    },
    definition: {
      es: "Es la idea más importante de un texto o párrafo; contiene el mensaje central que el autor quiere comunicar. Responde a la pregunta: ¿de qué trata fundamentalmente el texto?",
      en: "The most important idea in a text or paragraph; contains the central message that the author wants to communicate. Answers the question: what is the text fundamentally about?",
    },
  },
  "idea secundaria": {
    term: {
      es: "Idea secundaria",
      en: "Secondary idea",
    },
    definition: {
      es: "Ideas que complementan, amplían, ejemplifican o respaldan la idea principal. Proporcionan detalles, datos o ejemplos que desarrollan el tema central.",
      en: "Ideas that complement, expand, exemplify or support the main idea. Provide details, data or examples that develop the central theme.",
    },
  },
  inferencia: {
    term: {
      es: "Inferencia",
      en: "Inference",
    },
    definition: {
      es: "Proceso de deducir o concluir información que no está expresada directamente en el texto, pero que se puede derivar lógicamente de los datos, pistas y relaciones que sí aparecen en él.",
      en: "Process of deducing or concluding information that is not directly expressed in the text, but that can be logically derived from the data, clues and relationships that do appear in it.",
    },
  },
  oración: {
    term: {
      es: "Oración",
      en: "Sentence",
    },
    definition: {
      es: "Unidad lingüística con sentido completo que contiene al menos un verbo conjugado. Se compone de sujeto (de quién se habla) y predicado (lo que se dice del sujeto). Puede ser simple (un verbo) o compuesta (más de un verbo).",
      en: "Linguistic unit with complete meaning that contains at least one conjugated verb. Composed of subject (who is being spoken about) and predicate (what is said about the subject). Can be simple (one verb) or compound (more than one verb).",
    },
  },
  sujeto: {
    term: {
      es: "Sujeto",
      en: "Subject",
    },
    definition: {
      es: "Parte de la oración que indica de quién o de qué se habla. Puede ser explícito (aparece en la oración), tácito (se deduce del verbo) o no existir (oraciones impersonales). Su núcleo es un sustantivo o pronombre.",
      en: "Part of the sentence that indicates who or what is being talked about. Can be explicit (appears in the sentence), tacit (deduced from the verb) or non-existent (impersonal sentences). Its nucleus is a noun or pronoun.",
    },
  },
  predicado: {
    term: {
      es: "Predicado",
      en: "Predicate",
    },
    definition: {
      es: "Parte de la oración que expresa lo que se dice del sujeto. Su núcleo es el verbo conjugado. Puede ser nominal (con verbo copulativo + atributo) o verbal (con verbo que expresa acción).",
      en: "Part of the sentence that expresses what is said about the subject. Its nucleus is the conjugated verb. Can be nominal (with copulative verb + attribute) or verbal (with verb expressing action).",
    },
  },
  "objeto directo": {
    term: {
      es: "Objeto directo",
      en: "Direct object",
    },
    definition: {
      es: "Complemento del verbo que indica lo que recibe directamente la acción. Responde a las preguntas ¿qué? o ¿a quién? y puede sustituirse por los pronombres lo, la, los, las.",
      en: "Verb complement that indicates what directly receives the action. Answers the questions what? or whom? and can be replaced by the pronouns it, him, her, them.",
    },
  },
  "objeto indirecto": {
    term: {
      es: "Objeto indirecto",
      en: "Indirect object",
    },
    definition: {
      es: "Complemento del verbo que indica el destinatario o beneficiario de la acción. Responde a las preguntas ¿a quién? o ¿para quién? y puede sustituirse por los pronombres le, les.",
      en: "Verb complement that indicates the recipient or beneficiary of the action. Answers the questions to whom? or for whom? and can be replaced by the pronouns le, les.",
    },
  },
  coherencia: {
    term: {
      es: "Coherencia textual",
      en: "Textual coherence",
    },
    definition: {
      es: "Propiedad del texto que se refiere a la relación lógica entre las ideas. Un texto coherente presenta ideas que se relacionan entre sí y se organizan de manera lógica en torno a un tema central.",
      en: "Property of text that refers to the logical relationship between ideas. A coherent text presents ideas that relate to each other and are organized logically around a central theme.",
    },
  },
  cohesión: {
    term: {
      es: "Cohesión textual",
      en: "Textual cohesion",
    },
    definition: {
      es: "Propiedad del texto que se refiere a los mecanismos lingüísticos que conectan las oraciones y párrafos: conectores, pronombres, sinónimos, repeticiones y otros recursos que dan fluidez al texto.",
      en: "Property of text that refers to the linguistic mechanisms that connect sentences and paragraphs: connectors, pronouns, synonyms, repetitions and other resources that give fluency to the text.",
    },
  },
  dequeísmo: {
    term: {
      es: "Dequeísmo",
      en: "Dequeism",
    },
    definition: {
      es: 'Error que consiste en añadir la preposición "de" antes de "que" cuando no es necesaria. Ejemplo incorrecto: "Dijo de que vendría" (correcto: "Dijo que vendría").',
      en: 'Error consisting of adding the preposition "de" before "que" when it is not necessary. Incorrect example: "He said of that he would come" (correct: "He said that he would come").',
    },
  },
  queísmo: {
    term: {
      es: "Queísmo",
      en: "Queism",
    },
    definition: {
      es: 'Error que consiste en omitir la preposición "de" antes de "que" cuando sí es necesaria. Ejemplo incorrecto: "Estoy seguro que vendrá" (correcto: "Estoy seguro de que vendrá").',
      en: 'Error consisting of omitting the preposition "de" before "que" when it is necessary. Incorrect example: "I am sure that he will come" (correct: "I am sure of that he will come").',
    },
  },
  analogía: {
    term: {
      es: "Analogía",
      en: "Analogy",
    },
    definition: {
      es: "Relación de semejanza entre dos pares de palabras. La relación que existe entre el primer par debe ser la misma que existe entre el segundo. Tipos comunes: causa-efecto, parte-todo, sinonimia, herramienta-profesional, objeto-lugar.",
      en: "Relationship of similarity between two pairs of words. The relationship that exists between the first pair must be the same as exists between the second. Common types: cause-effect, part-whole, synonymy, tool-professional, object-place.",
    },
  },
  sinónimos: {
    term: {
      es: "Sinónimos",
      en: "Synonyms",
    },
    definition: {
      es: "Palabras que tienen un significado igual o muy similar. Ejemplos: bello/hermoso, comenzar/iniciar, casa/hogar. Pueden diferir en matices o registros de uso.",
      en: "Words that have the same or very similar meaning. Examples: beautiful/lovely, begin/start, house/home. May differ in nuances or usage registers.",
    },
  },
  antónimos: {
    term: {
      es: "Antónimos",
      en: "Antonyms",
    },
    definition: {
      es: "Palabras que tienen significados opuestos o contrarios. Ejemplos: grande/pequeño, blanco/negro, amor/odio. Pueden ser graduales (frío-tibio-caliente), complementarios (vivo-muerto) o recíprocos (comprar-vender).",
      en: "Words that have opposite or contrary meanings. Examples: big/small, white/black, love/hate. Can be gradual (cold-warm-hot), complementary (alive-dead) or reciprocal (buy-sell).",
    },
  },
  homófonos: {
    term: {
      es: "Homófonos",
      en: "Homophones",
    },
    definition: {
      es: "Palabras que suenan igual pero se escriben diferente y tienen significados distintos. Ejemplos: tubo/tuvo, haya/halla/aya, echo/hecho, vaya/valla, hierba/hierva.",
      en: "Words that sound the same but are spelled differently and have different meanings. Examples: two/too/to, there/their/they're, hear/here, break/brake.",
    },
  },
  "tilde diacrítica": {
    term: {
      es: "Tilde diacrítica",
      en: "Diacritical accent",
    },
    definition: {
      es: "Acento gráfico que se usa para distinguir palabras que se escriben igual pero tienen diferente significado o función gramatical. Ejemplos: él/el, tú/tu, mí/mi, sé/se, sí/si, dé/de, té/te, más/mas, aún/aun.",
      en: "Graphic accent used to distinguish words that are spelled the same but have different meaning or grammatical function. Examples: he/the, you/your, me/my, I know/oneself, yes/if.",
    },
  },
  hiato: {
    term: {
      es: "Hiato",
      en: "Hiatus",
    },
    definition: {
      es: "Secuencia de dos vocales que pertenecen a sílabas distintas. Cuando la vocal débil (i, u) es tónica y está junto a una vocal fuerte (a, e, o), se acentúa para romper el diptongo: día, río, baúl, maíz.",
      en: "Sequence of two vowels that belong to different syllables. When the weak vowel (i, u) is stressed and is next to a strong vowel (a, e, o), it is accented to break the diphthong: día, río, baúl, maíz.",
    },
  },
  diptongo: {
    term: {
      es: "Diptongo",
      en: "Diphthong",
    },
    definition: {
      es: "Secuencia de dos vocales que se pronuncian en una misma sílaba. Se forma con: vocal abierta (a, e, o) + vocal cerrada átona (i, u) o viceversa, o dos vocales cerradas distintas. Ejemplos: aire, cielo, puede, ruido.",
      en: "Sequence of two vowels pronounced in the same syllable. Formed with: open vowel (a, e, o) + unstressed closed vowel (i, u) or vice versa, or two different closed vowels. Examples: air, sky, can, noise.",
    },
  },
  "palabra aguda": {
    term: {
      es: "Palabra aguda",
      en: "Oxytone word",
    },
    definition: {
      es: "Palabra cuya sílaba tónica es la última. Lleva tilde cuando termina en n, s o vocal. Ejemplos con tilde: canción, compás, café. Ejemplos sin tilde: reloj, pared, feliz.",
      en: "Word whose stressed syllable is the last one. Has accent when it ends in n, s or vowel. Examples with accent: canción, compás, café. Examples without accent: reloj, pared, feliz.",
    },
  },
  "palabra grave": {
    term: {
      es: "Palabra grave",
      en: "Paroxytone word",
    },
    definition: {
      es: "Palabra cuya sílaba tónica es la penúltima. Lleva tilde cuando NO termina en n, s o vocal. Ejemplos con tilde: árbol, útil, lápiz. Ejemplos sin tilde: casa, examen, joven.",
      en: "Word whose stressed syllable is the penultimate one. Has accent when it does NOT end in n, s or vowel. Examples with accent: árbol, útil, lápiz. Examples without accent: casa, examen, joven.",
    },
  },
  "palabra esdrújula": {
    term: {
      es: "Palabra esdrújula",
      en: "Proparoxytone word",
    },
    definition: {
      es: "Palabra cuya sílaba tónica es la antepenúltima. Siempre lleva tilde. Ejemplos: teléfono, música, matemáticas, brújula, histórico.",
      en: "Word whose stressed syllable is the third-to-last. Always has accent. Examples: teléfono, música, matemáticas, brújula, histórico.",
    },
  },
  // Claves alternativas sin tilde para facilitar búsquedas
  "funcion referencial": {
    term: {
      es: "Función referencial",
      en: "Referential function",
    },
    definition: {
      es: "Función del lenguaje centrada en el contexto o referente. Transmite información objetiva y verificable sobre la realidad. También se llama función informativa o representativa. Predomina en textos científicos, periodísticos y enciclopédicos.",
      en: "Language function focused on the context or referent. Transmits objective and verifiable information about reality. Also called informative or representative function. Predominates in scientific, journalistic and encyclopedic texts.",
    },
  },
  "funcion apelativa": {
    term: {
      es: "Función apelativa",
      en: "Appellative function",
    },
    definition: {
      es: "Función del lenguaje centrada en el receptor. Busca influir en su conducta, provocar una reacción o persuadirlo. También se llama función conativa. Es propia del modo imperativo y predomina en publicidad, propaganda y discursos persuasivos.",
      en: "Language function focused on the receiver. Seeks to influence their behavior, provoke a reaction or persuade them. Also called conative function. Characteristic of the imperative mood and predominates in advertising, propaganda and persuasive speeches.",
    },
  },
  "funcion poetica": {
    term: {
      es: "Función poética",
      en: "Poetic function",
    },
    definition: {
      es: "Función del lenguaje centrada en el mensaje mismo, en su forma y estructura. Busca producir un efecto estético mediante figuras retóricas, ritmo, sonoridad y otros recursos literarios. También se llama función estética. Predomina en la poesía y la literatura.",
      en: "Language function focused on the message itself, on its form and structure. Seeks to produce an aesthetic effect through rhetorical figures, rhythm, sound and other literary devices. Also called aesthetic function. Predominates in poetry and literature.",
    },
  },
  sinonimos: {
    term: {
      es: "Sinónimos",
      en: "Synonyms",
    },
    definition: {
      es: "Palabras que tienen un significado igual o muy similar. Ejemplos: bello/hermoso, comenzar/iniciar, casa/hogar. Pueden diferir en matices o registros de uso.",
      en: "Words that have the same or very similar meaning. Examples: beautiful/lovely, begin/start, house/home. May differ in nuances or usage registers.",
    },
  },
  antonimos: {
    term: {
      es: "Antónimos",
      en: "Antonyms",
    },
    definition: {
      es: "Palabras que tienen significados opuestos o contrarios. Ejemplos: grande/pequeño, blanco/negro, amor/odio. Pueden ser graduales (frío-tibio-caliente), complementarios (vivo-muerto) o recíprocos (comprar-vender).",
      en: "Words that have opposite or contrary meanings. Examples: big/small, white/black, love/hate. Can be gradual (cold-warm-hot), complementary (alive-dead) or reciprocal (buy-sell).",
    },
  },
  homofonos: {
    term: {
      es: "Homófonos",
      en: "Homophones",
    },
    definition: {
      es: "Palabras que suenan igual pero se escriben diferente y tienen significados distintos. Ejemplos: tubo/tuvo, haya/halla/aya, echo/hecho, vaya/valla, hierba/hierva.",
      en: "Words that sound the same but are spelled differently and have different meanings. Examples: two/too/to, there/their/they're, hear/here, break/brake.",
    },
  },
  analogia: {
    term: {
      es: "Analogía",
      en: "Analogy",
    },
    definition: {
      es: "Relación de semejanza entre dos pares de palabras. La relación que existe entre el primer par debe ser la misma que existe entre el segundo. Tipos comunes: causa-efecto, parte-todo, sinonimia, herramienta-profesional, objeto-lugar.",
      en: "Relationship of similarity between two pairs of words. The relationship that exists between the first pair must be the same as exists between the second. Common types: cause-effect, part-whole, synonymy, tool-professional, object-place.",
    },
  },
};

export const literatureGlossary: Record<string, GlossaryEntry> = {
  "pirámide invertida": {
    term: {
      es: "Pirámide invertida",
      en: "Inverted pyramid",
    },
    definition: {
      es: "Estructura periodística que coloca la información más importante al inicio del texto.",
      en: "Journalistic structure that places the most important information at the beginning of the text.",
    },
  },
  acotación: {
    term: {
      es: "Acotación",
      en: "Stage direction",
    },
    definition: {
      es: "Indicación en el texto dramático sobre movimientos, gestos o ambientación escénica.",
      en: "Indication in dramatic text about movements, gestures or stage setting.",
    },
  },
  aliteración: {
    term: {
      es: "Aliteración",
      en: "Alliteration",
    },
    definition: {
      es: "Recurso poético que consiste en la repetición de sonidos consonánticos para crear efectos sonoros.",
      en: "Poetic device consisting of the repetition of consonant sounds to create sound effects.",
    },
  },
  "género lírico": {
    term: {
      es: "Género lírico",
      en: "Lyric genre",
    },
    definition: {
      es: "Género literario que expresa sentimientos y emociones del hablante lírico, generalmente en verso.",
      en: "Literary genre that expresses feelings and emotions of the lyric speaker, usually in verse.",
    },
  },
  "género épico": {
    term: {
      es: "Género épico",
      en: "Epic genre",
    },
    definition: {
      es: "Género narrativo que cuenta historias con presencia de un narrador.",
      en: "Narrative genre that tells stories with the presence of a narrator.",
    },
  },
  epopeya: {
    term: {
      es: "Epopeya",
      en: "Epic poem",
    },
    definition: {
      es: "Poema narrativo extenso que relata hazañas heroicas en verso.",
      en: "Extensive narrative poem that narrates heroic deeds in verse.",
    },
  },
  barroco: {
    term: {
      es: "Barroco",
      en: "Baroque",
    },
    definition: {
      es: "Movimiento literario caracterizado por el recargamiento ornamental, el artificio y la complejidad formal.",
      en: "Literary movement characterized by ornamental excess, artifice and formal complexity.",
    },
  },
  romanticismo: {
    term: {
      es: "Romanticismo",
      en: "Romanticism",
    },
    definition: {
      es: "Movimiento que valora la emoción, la pasión y la imaginación sobre la razón ilustrada.",
      en: "Movement that values emotion, passion and imagination over enlightened reason.",
    },
  },
  realismo: {
    term: {
      es: "Realismo",
      en: "Realism",
    },
    definition: {
      es: "Corriente literaria que retrata objetivamente la sociedad contemporánea sin idealización.",
      en: "Literary current that objectively portrays contemporary society without idealization.",
    },
  },
  modernismo: {
    term: {
      es: "Modernismo",
      en: "Modernism",
    },
    definition: {
      es: "Movimiento hispanoamericano que renueva la estética con musicalidad, exotismo y refinamiento verbal.",
      en: "Hispanic American movement that renews aesthetics with musicality, exoticism and verbal refinement.",
    },
  },
  "narrador omnisciente": {
    term: {
      es: "Narrador omnisciente",
      en: "Omniscient narrator",
    },
    definition: {
      es: "Narrador que tiene conocimiento total de la historia, personajes y sus pensamientos.",
      en: "Narrator who has total knowledge of the story, characters and their thoughts.",
    },
  },
  "in medias res": {
    term: {
      es: "In medias res",
      en: "In medias res",
    },
    definition: {
      es: "Técnica narrativa que inicia la historia en medio de la acción.",
      en: "Narrative technique that begins the story in the middle of the action.",
    },
  },
  analepsis: {
    term: {
      es: "Analepsis",
      en: "Analepsis",
    },
    definition: {
      es: "Retrospección o flashback, recurso que evoca acontecimientos del pasado.",
      en: "Retrospection or flashback, a device that evokes past events.",
    },
  },
  resumen: {
    term: {
      es: "Resumen",
      en: "Summary",
    },
    definition: {
      es: "Síntesis de un texto que conserva solo las ideas principales, eliminando detalles secundarios.",
      en: "Synthesis of a text that preserves only the main ideas, eliminating secondary details.",
    },
  },
  paráfrasis: {
    term: {
      es: "Paráfrasis",
      en: "Paraphrase",
    },
    definition: {
      es: "Reformulación de un texto con palabras propias manteniendo el sentido original.",
      en: "Reformulation of a text in own words while maintaining the original meaning.",
    },
  },
  "cita textual": {
    term: {
      es: "Cita textual",
      en: "Direct quotation",
    },
    definition: {
      es: "Reproducción exacta de las palabras de otro autor, marcada entre comillas y con referencia.",
      en: "Exact reproduction of another author's words, marked in quotation marks and with reference.",
    },
  },
  plagio: {
    term: {
      es: "Plagio",
      en: "Plagiarism",
    },
    definition: {
      es: "Presentar como propias ideas o palabras ajenas sin dar crédito adecuado a la fuente.",
      en: "Presenting others' ideas or words as one's own without giving proper credit to the source.",
    },
  },
  "género dramático": {
    term: {
      es: "Género dramático",
      en: "Dramatic genre",
    },
    definition: {
      es: "Género literario escrito para ser representado en escena, presenta conflictos mediante diálogos y acotaciones escénicas.",
      en: "Literary genre written to be performed on stage, presents conflicts through dialogues and stage directions.",
    },
  },
  metáfora: {
    term: {
      es: "Metáfora",
      en: "Metaphor",
    },
    definition: {
      es: "Figura retórica que consiste en identificar dos términos entre los cuales existe alguna semejanza, sustituyendo uno por otro.",
      en: "Rhetorical figure consisting of identifying two terms between which there is some similarity, substituting one for the other.",
    },
  },
  "narrador protagonista": {
    term: {
      es: "Narrador protagonista",
      en: "Protagonist narrator",
    },
    definition: {
      es: "Narrador en primera persona que cuenta su propia historia como personaje principal de los hechos narrados.",
      en: "First-person narrator who tells their own story as the main character of the narrated events.",
    },
  },
  "narrador testigo": {
    term: {
      es: "Narrador testigo",
      en: "Witness narrator",
    },
    definition: {
      es: "Narrador en primera persona que cuenta una historia de la que fue testigo pero no es el protagonista.",
      en: "First-person narrator who tells a story they witnessed but is not the protagonist.",
    },
  },
  "formato APA": {
    term: {
      es: "Formato APA",
      en: "APA format",
    },
    definition: {
      es: "Sistema de citación de la American Psychological Association usado para referencias bibliográficas en ciencias sociales y educación.",
      en: "Citation system of the American Psychological Association used for bibliographic references in social sciences and education.",
    },
  },
  "formato MLA": {
    term: {
      es: "Formato MLA",
      en: "MLA format",
    },
    definition: {
      es: "Sistema de citación de la Modern Language Association, estándar en literatura y humanidades.",
      en: "Citation system of the Modern Language Association, standard in literature and humanities.",
    },
  },
  "ficha bibliográfica": {
    term: {
      es: "Ficha bibliográfica",
      en: "Bibliographic card",
    },
    definition: {
      es: "Registro organizado de los datos de una fuente: autor, título, editorial, año, lugar de publicación.",
      en: "Organized record of source data: author, title, publisher, year, place of publication.",
    },
  },
  // Claves alternativas sin tilde
  "piramide invertida": {
    term: {
      es: "Pirámide invertida",
      en: "Inverted pyramid",
    },
    definition: {
      es: "Estructura periodística que coloca la información más importante al inicio del texto.",
      en: "Journalistic structure that places the most important information at the beginning of the text.",
    },
  },
  acotacion: {
    term: {
      es: "Acotación",
      en: "Stage direction",
    },
    definition: {
      es: "Indicación en el texto dramático sobre movimientos, gestos o ambientación escénica.",
      en: "Indication in dramatic text about movements, gestures or stage setting.",
    },
  },
  aliteracion: {
    term: {
      es: "Aliteración",
      en: "Alliteration",
    },
    definition: {
      es: "Recurso poético que consiste en la repetición de sonidos consonánticos para crear efectos sonoros.",
      en: "Poetic device consisting of the repetition of consonant sounds to create sound effects.",
    },
  },
  "genero lirico": {
    term: {
      es: "Género lírico",
      en: "Lyric genre",
    },
    definition: {
      es: "Género literario que expresa sentimientos y emociones del hablante lírico, generalmente en verso.",
      en: "Literary genre that expresses feelings and emotions of the lyric speaker, usually in verse.",
    },
  },
  "genero epico": {
    term: {
      es: "Género épico",
      en: "Epic genre",
    },
    definition: {
      es: "Género narrativo que cuenta historias con presencia de un narrador.",
      en: "Narrative genre that tells stories with the presence of a narrator.",
    },
  },
  "genero dramatico": {
    term: {
      es: "Género dramático",
      en: "Dramatic genre",
    },
    definition: {
      es: "Género literario escrito para ser representado en escena, presenta conflictos mediante diálogos y acotaciones escénicas.",
      en: "Literary genre written to be performed on stage, presents conflicts through dialogues and stage directions.",
    },
  },
  metafora: {
    term: {
      es: "Metáfora",
      en: "Metaphor",
    },
    definition: {
      es: "Figura retórica que consiste en identificar dos términos entre los cuales existe alguna semejanza, sustituyendo uno por otro.",
      en: "Rhetorical figure consisting of identifying two terms between which there is some similarity, substituting one for the other.",
    },
  },
  parafrasis: {
    term: {
      es: "Paráfrasis",
      en: "Paraphrase",
    },
    definition: {
      es: "Reformulación de un texto con palabras propias manteniendo el sentido original.",
      en: "Reformulation of a text in own words while maintaining the original meaning.",
    },
  },
  "ficha bibliografica": {
    term: {
      es: "Ficha bibliográfica",
      en: "Bibliographic card",
    },
    definition: {
      es: "Registro organizado de los datos de una fuente: autor, título, editorial, año, lugar de publicación.",
      en: "Organized record of source data: author, title, publisher, year, place of publication.",
    },
  },
};

export const physicsGlossary: Record<string, GlossaryEntry> = {
  velocidad: {
    term: {
      es: "Velocidad",
      en: "Velocity",
    },
    definition: {
      es: "Magnitud vectorial que indica la rapidez de cambio de posición de un objeto. Se mide en m/s. v = d/t.",
      en: "Vector quantity indicating rate of position change. Measured in m/s. v = d/t.",
    },
  },
  velocity: {
    term: {
      es: "Velocidad",
      en: "Velocity",
    },
    definition: {
      es: "Magnitud vectorial que indica la rapidez de cambio de posición de un objeto. Se mide en m/s. v = d/t.",
      en: "Vector quantity indicating rate of position change. Measured in m/s. v = d/t.",
    },
  },
  aceleracion: {
    term: {
      es: "Aceleración",
      en: "Acceleration",
    },
    definition: {
      es: "Cambio de velocidad por unidad de tiempo. Se mide en m/s². a = Δv/Δt.",
      en: "Change in velocity per unit time. Measured in m/s². a = Δv/Δt.",
    },
  },
  acceleration: {
    term: {
      es: "Aceleración",
      en: "Acceleration",
    },
    definition: {
      es: "Cambio de velocidad por unidad de tiempo. Se mide en m/s². a = Δv/Δt.",
      en: "Change in velocity per unit time. Measured in m/s². a = Δv/Δt.",
    },
  },
  fuerza: {
    term: {
      es: "Fuerza",
      en: "Force",
    },
    definition: {
      es: "Magnitud vectorial capaz de causar aceleración en un cuerpo. Segunda Ley de Newton: F = ma. Se mide en Newtons (N).",
      en: "Vector quantity capable of causing acceleration in a body. Newton's Second Law: F = ma. Measured in Newtons (N).",
    },
  },
  force: {
    term: {
      es: "Fuerza",
      en: "Force",
    },
    definition: {
      es: "Magnitud vectorial capaz de causar aceleración en un cuerpo. Segunda Ley de Newton: F = ma. Se mide en Newtons (N).",
      en: "Vector quantity capable of causing acceleration in a body. Newton's Second Law: F = ma. Measured in Newtons (N).",
    },
  },
  inercia: {
    term: {
      es: "Inercia",
      en: "Inertia",
    },
    definition: {
      es: "Tendencia de un cuerpo a mantener su estado de reposo o movimiento rectilíneo uniforme. Primera Ley de Newton.",
      en: "Tendency of a body to maintain its state of rest or uniform linear motion. Newton's First Law.",
    },
  },
  inertia: {
    term: {
      es: "Inercia",
      en: "Inertia",
    },
    definition: {
      es: "Tendencia de un cuerpo a mantener su estado de reposo o movimiento rectilíneo uniforme. Primera Ley de Newton.",
      en: "Tendency of a body to maintain its state of rest or uniform linear motion. Newton's First Law.",
    },
  },
  "trabajo mecanico": {
    term: {
      es: "Trabajo mecánico",
      en: "Work",
    },
    definition: {
      es: "Energía transferida cuando una fuerza desplaza un objeto. W = F·d·cos(θ). Se mide en Joules (J).",
      en: "Energy transferred when a force displaces an object. W = F·d·cos(θ). Measured in Joules (J).",
    },
  },
  work: {
    term: {
      es: "Trabajo mecánico",
      en: "Work",
    },
    definition: {
      es: "Energía transferida cuando una fuerza desplaza un objeto. W = F·d·cos(θ). Se mide en Joules (J).",
      en: "Energy transferred when a force displaces an object. W = F·d·cos(θ). Measured in Joules (J).",
    },
  },
  "energia cinetica": {
    term: {
      es: "Energía cinética",
      en: "Kinetic energy",
    },
    definition: {
      es: "Energía asociada al movimiento de un cuerpo. Ek = ½mv². Se mide en Joules (J).",
      en: "Energy associated with motion of a body. Ek = ½mv². Measured in Joules (J).",
    },
  },
  "kinetic energy": {
    term: {
      es: "Energía cinética",
      en: "Kinetic energy",
    },
    definition: {
      es: "Energía asociada al movimiento de un cuerpo. Ek = ½mv². Se mide en Joules (J).",
      en: "Energy associated with motion of a body. Ek = ½mv². Measured in Joules (J).",
    },
  },
  "energia potencial": {
    term: {
      es: "Energía potencial",
      en: "Potential energy",
    },
    definition: {
      es: "Energía almacenada por la posición o configuración de un cuerpo. Gravitatoria: Ep = mgh.",
      en: "Energy stored by position or configuration of a body. Gravitational: Ep = mgh.",
    },
  },
  "potential energy": {
    term: {
      es: "Energía potencial",
      en: "Potential energy",
    },
    definition: {
      es: "Energía almacenada por la posición o configuración de un cuerpo. Gravitatoria: Ep = mgh.",
      en: "Energy stored by position or configuration of a body. Gravitational: Ep = mgh.",
    },
  },
  potencia: {
    term: {
      es: "Potencia",
      en: "Power",
    },
    definition: {
      es: "Trabajo realizado por unidad de tiempo. P = W/t. Se mide en Watts (W).",
      en: "Work done per unit time. P = W/t. Measured in Watts (W).",
    },
  },
  power: {
    term: {
      es: "Potencia",
      en: "Power",
    },
    definition: {
      es: "Trabajo realizado por unidad de tiempo. P = W/t. Se mide en Watts (W).",
      en: "Work done per unit time. P = W/t. Measured in Watts (W).",
    },
  },
  calor: {
    term: {
      es: "Calor",
      en: "Heat",
    },
    definition: {
      es: "Energía térmica en tránsito de un cuerpo de mayor a menor temperatura. Q = mcΔT.",
      en: "Thermal energy in transit from higher to lower temperature body. Q = mcΔT.",
    },
  },
  heat: {
    term: {
      es: "Calor",
      en: "Heat",
    },
    definition: {
      es: "Energía térmica en tránsito de un cuerpo de mayor a menor temperatura. Q = mcΔT.",
      en: "Thermal energy in transit from higher to lower temperature body. Q = mcΔT.",
    },
  },
  temperatura: {
    term: {
      es: "Temperatura",
      en: "Temperature",
    },
    definition: {
      es: "Medida de la energía cinética promedio de las moléculas. Se mide en Kelvin (K), Celsius (°C) o Fahrenheit (°F).",
      en: "Measure of average kinetic energy of molecules. Measured in Kelvin (K), Celsius (°C) or Fahrenheit (°F).",
    },
  },
  temperature: {
    term: {
      es: "Temperatura",
      en: "Temperature",
    },
    definition: {
      es: "Medida de la energía cinética promedio de las moléculas. Se mide en Kelvin (K), Celsius (°C) o Fahrenheit (°F).",
      en: "Measure of average kinetic energy of molecules. Measured in Kelvin (K), Celsius (°C) or Fahrenheit (°F).",
    },
  },
  onda: {
    term: {
      es: "Onda",
      en: "Wave",
    },
    definition: {
      es: "Perturbación que se propaga en el espacio transportando energía sin transporte neto de materia. v = fλ.",
      en: "Disturbance propagating through space transporting energy without net matter transport. v = fλ.",
    },
  },
  wave: {
    term: {
      es: "Onda",
      en: "Wave",
    },
    definition: {
      es: "Perturbación que se propaga en el espacio transportando energía sin transporte neto de materia. v = fλ.",
      en: "Disturbance propagating through space transporting energy without net matter transport. v = fλ.",
    },
  },
  frecuencia: {
    term: {
      es: "Frecuencia",
      en: "Frequency",
    },
    definition: {
      es: "Número de ciclos u oscilaciones por unidad de tiempo. Se mide en Hertz (Hz). f = 1/T.",
      en: "Number of cycles or oscillations per unit time. Measured in Hertz (Hz). f = 1/T.",
    },
  },
  frequency: {
    term: {
      es: "Frecuencia",
      en: "Frequency",
    },
    definition: {
      es: "Número de ciclos u oscilaciones por unidad de tiempo. Se mide en Hertz (Hz). f = 1/T.",
      en: "Number of cycles or oscillations per unit time. Measured in Hertz (Hz). f = 1/T.",
    },
  },
  "longitud de onda": {
    term: {
      es: "Longitud de onda",
      en: "Wavelength",
    },
    definition: {
      es: "Distancia entre dos crestas o valles consecutivos de una onda. Se representa con λ (lambda).",
      en: "Distance between two consecutive crests or troughs of a wave. Represented by λ (lambda).",
    },
  },
  wavelength: {
    term: {
      es: "Longitud de onda",
      en: "Wavelength",
    },
    definition: {
      es: "Distancia entre dos crestas o valles consecutivos de una onda. Se representa con λ (lambda).",
      en: "Distance between two consecutive crests or troughs of a wave. Represented by λ (lambda).",
    },
  },
  amplitud: {
    term: {
      es: "Amplitud",
      en: "Amplitude",
    },
    definition: {
      es: "Máximo desplazamiento desde la posición de equilibrio en una onda u oscilación.",
      en: "Maximum displacement from equilibrium position in a wave or oscillation.",
    },
  },
  amplitude: {
    term: {
      es: "Amplitud",
      en: "Amplitude",
    },
    definition: {
      es: "Máximo desplazamiento desde la posición de equilibrio en una onda u oscilación.",
      en: "Maximum displacement from equilibrium position in a wave or oscillation.",
    },
  },
  interferencia: {
    term: {
      es: "Interferencia",
      en: "Interference",
    },
    definition: {
      es: "Superposición de dos o más ondas. Constructiva cuando se suman, destructiva cuando se cancelan.",
      en: "Superposition of two or more waves. Constructive when they add, destructive when they cancel.",
    },
  },
  interference: {
    term: {
      es: "Interferencia",
      en: "Interference",
    },
    definition: {
      es: "Superposición de dos o más ondas. Constructiva cuando se suman, destructiva cuando se cancelan.",
      en: "Superposition of two or more waves. Constructive when they add, destructive when they cancel.",
    },
  },
  difraccion: {
    term: {
      es: "Difracción",
      en: "Diffraction",
    },
    definition: {
      es: "Capacidad de las ondas para rodear obstáculos o pasar por aperturas estrechas.",
      en: "Ability of waves to bend around obstacles or pass through narrow openings.",
    },
  },
  diffraction: {
    term: {
      es: "Difracción",
      en: "Diffraction",
    },
    definition: {
      es: "Capacidad de las ondas para rodear obstáculos o pasar por aperturas estrechas.",
      en: "Ability of waves to bend around obstacles or pass through narrow openings.",
    },
  },
  "carga electrica": {
    term: {
      es: "Carga eléctrica",
      en: "Electric charge",
    },
    definition: {
      es: "Propiedad de la materia que causa fuerzas eléctricas. Hay dos tipos: positiva (+) y negativa (-). Se mide en Coulombs (C).",
      en: "Property of matter causing electric forces. Two types: positive (+) and negative (-). Measured in Coulombs (C).",
    },
  },
  "electric charge": {
    term: {
      es: "Carga eléctrica",
      en: "Electric charge",
    },
    definition: {
      es: "Propiedad de la materia que causa fuerzas eléctricas. Hay dos tipos: positiva (+) y negativa (-). Se mide en Coulombs (C).",
      en: "Property of matter causing electric forces. Two types: positive (+) and negative (-). Measured in Coulombs (C).",
    },
  },
  "campo electrico": {
    term: {
      es: "Campo eléctrico",
      en: "Electric field",
    },
    definition: {
      es: "Región donde actúan fuerzas sobre cargas eléctricas. E = F/q. Se mide en N/C o V/m.",
      en: "Region where forces act on electric charges. E = F/q. Measured in N/C or V/m.",
    },
  },
  "electric field": {
    term: {
      es: "Campo eléctrico",
      en: "Electric field",
    },
    definition: {
      es: "Región donde actúan fuerzas sobre cargas eléctricas. E = F/q. Se mide en N/C o V/m.",
      en: "Region where forces act on electric charges. E = F/q. Measured in N/C or V/m.",
    },
  },
  "campo magnetico": {
    term: {
      es: "Campo magnético",
      en: "Magnetic field",
    },
    definition: {
      es: "Región donde actúan fuerzas sobre cargas en movimiento o imanes. Producido por corrientes eléctricas o imanes.",
      en: "Region where forces act on moving charges or magnets. Produced by electric currents or magnets.",
    },
  },
  "magnetic field": {
    term: {
      es: "Campo magnético",
      en: "Magnetic field",
    },
    definition: {
      es: "Región donde actúan fuerzas sobre cargas en movimiento o imanes. Producido por corrientes eléctricas o imanes.",
      en: "Region where forces act on moving charges or magnets. Produced by electric currents or magnets.",
    },
  },
  "corriente electrica": {
    term: {
      es: "Corriente eléctrica",
      en: "Electric current",
    },
    definition: {
      es: "Flujo de carga eléctrica por unidad de tiempo. I = Q/t. Se mide en Amperes (A).",
      en: "Flow of electric charge per unit time. I = Q/t. Measured in Amperes (A).",
    },
  },
  "electric current": {
    term: {
      es: "Corriente eléctrica",
      en: "Electric current",
    },
    definition: {
      es: "Flujo de carga eléctrica por unidad de tiempo. I = Q/t. Se mide en Amperes (A).",
      en: "Flow of electric charge per unit time. I = Q/t. Measured in Amperes (A).",
    },
  },
  voltaje: {
    term: {
      es: "Voltaje",
      en: "Voltage",
    },
    definition: {
      es: "Diferencia de potencial eléctrico entre dos puntos. V = IR. Se mide en Volts (V).",
      en: "Electric potential difference between two points. V = IR. Measured in Volts (V).",
    },
  },
  voltage: {
    term: {
      es: "Voltaje",
      en: "Voltage",
    },
    definition: {
      es: "Diferencia de potencial eléctrico entre dos puntos. V = IR. Se mide en Volts (V).",
      en: "Electric potential difference between two points. V = IR. Measured in Volts (V).",
    },
  },
  resistencia: {
    term: {
      es: "Resistencia",
      en: "Resistance",
    },
    definition: {
      es: "Oposición al flujo de corriente eléctrica. Ley de Ohm: R = V/I. Se mide en Ohms (Ω).",
      en: "Opposition to electric current flow. Ohm's Law: R = V/I. Measured in Ohms (Ω).",
    },
  },
  resistance: {
    term: {
      es: "Resistencia",
      en: "Resistance",
    },
    definition: {
      es: "Oposición al flujo de corriente eléctrica. Ley de Ohm: R = V/I. Se mide en Ohms (Ω).",
      en: "Opposition to electric current flow. Ohm's Law: R = V/I. Measured in Ohms (Ω).",
    },
  },
  presion: {
    term: {
      es: "Presión",
      en: "Pressure",
    },
    definition: {
      es: "Fuerza perpendicular por unidad de área. P = F/A. Se mide en Pascales (Pa) o N/m².",
      en: "Perpendicular force per unit area. P = F/A. Measured in Pascals (Pa) or N/m².",
    },
  },
  pressure: {
    term: {
      es: "Presión",
      en: "Pressure",
    },
    definition: {
      es: "Fuerza perpendicular por unidad de área. P = F/A. Se mide en Pascales (Pa) o N/m².",
      en: "Perpendicular force per unit area. P = F/A. Measured in Pascals (Pa) or N/m².",
    },
  },
  densidad: {
    term: {
      es: "Densidad",
      en: "Density",
    },
    definition: {
      es: "Masa por unidad de volumen. ρ = m/V. Se mide en kg/m³ o g/cm³.",
      en: "Mass per unit volume. ρ = m/V. Measured in kg/m³ or g/cm³.",
    },
  },
  density: {
    term: {
      es: "Densidad",
      en: "Density",
    },
    definition: {
      es: "Masa por unidad de volumen. ρ = m/V. Se mide en kg/m³ o g/cm³.",
      en: "Mass per unit volume. ρ = m/V. Measured in kg/m³ or g/cm³.",
    },
  },
  empuje: {
    term: {
      es: "Empuje",
      en: "Buoyancy",
    },
    definition: {
      es: "Fuerza hacia arriba sobre un cuerpo sumergido en un fluido. Principio de Arquímedes: F = ρ_fluido × V_sumergido × g.",
      en: "Upward force on a body submerged in a fluid. Archimedes' Principle: F = ρ_fluid × V_submerged × g.",
    },
  },
  buoyancy: {
    term: {
      es: "Empuje",
      en: "Buoyancy",
    },
    definition: {
      es: "Fuerza hacia arriba sobre un cuerpo sumergido en un fluido. Principio de Arquímedes: F = ρ_fluido × V_sumergido × g.",
      en: "Upward force on a body submerged in a fluid. Archimedes' Principle: F = ρ_fluid × V_submerged × g.",
    },
  },
  reflexion: {
    term: {
      es: "Reflexión",
      en: "Reflection",
    },
    definition: {
      es: "Cambio de dirección de una onda al chocar con una superficie. Ley: ángulo de incidencia = ángulo de reflexión.",
      en: "Change of direction of a wave when hitting a surface. Law: angle of incidence = angle of reflection.",
    },
  },
  reflection: {
    term: {
      es: "Reflexión",
      en: "Reflection",
    },
    definition: {
      es: "Cambio de dirección de una onda al chocar con una superficie. Ley: ángulo de incidencia = ángulo de reflexión.",
      en: "Change of direction of a wave when hitting a surface. Law: angle of incidence = angle of reflection.",
    },
  },
  refraccion: {
    term: {
      es: "Refracción",
      en: "Refraction",
    },
    definition: {
      es: "Cambio de dirección de una onda al pasar de un medio a otro. Ley de Snell: n₁ sin θ₁ = n₂ sin θ₂.",
      en: "Change of direction of a wave when passing from one medium to another. Snell's Law: n₁ sin θ₁ = n₂ sin θ₂.",
    },
  },
  refraction: {
    term: {
      es: "Refracción",
      en: "Refraction",
    },
    definition: {
      es: "Cambio de dirección de una onda al pasar de un medio a otro. Ley de Snell: n₁ sin θ₁ = n₂ sin θ₂.",
      en: "Change of direction of a wave when passing from one medium to another. Snell's Law: n₁ sin θ₁ = n₂ sin θ₂.",
    },
  },
  "indice de refraccion": {
    term: {
      es: "Índice de refracción",
      en: "Refractive index",
    },
    definition: {
      es: "Relación entre la velocidad de la luz en el vacío y en un medio. n = c/v.",
      en: "Ratio between speed of light in vacuum and in a medium. n = c/v.",
    },
  },
  "refractive index": {
    term: {
      es: "Índice de refracción",
      en: "Refractive index",
    },
    definition: {
      es: "Relación entre la velocidad de la luz en el vacío y en un medio. n = c/v.",
      en: "Ratio between speed of light in vacuum and in a medium. n = c/v.",
    },
  },
  atomo: {
    term: {
      es: "Átomo",
      en: "Atom",
    },
    definition: {
      es: "Unidad básica de materia, compuesto por un núcleo (protones y neutrones) rodeado de electrones.",
      en: "Basic unit of matter, composed of a nucleus (protons and neutrons) surrounded by electrons.",
    },
  },
  atom: {
    term: {
      es: "Átomo",
      en: "Atom",
    },
    definition: {
      es: "Unidad básica de materia, compuesto por un núcleo (protones y neutrones) rodeado de electrones.",
      en: "Basic unit of matter, composed of a nucleus (protons and neutrons) surrounded by electrons.",
    },
  },
  nucleo: {
    term: {
      es: "Núcleo",
      en: "Nucleus",
    },
    definition: {
      es: "Centro del átomo que contiene protones y neutrones. Concentra >99.9% de la masa atómica.",
      en: "Center of atom containing protons and neutrons. Concentrates >99.9% of atomic mass.",
    },
  },
  nucleus: {
    term: {
      es: "Núcleo",
      en: "Nucleus",
    },
    definition: {
      es: "Centro del átomo que contiene protones y neutrones. Concentra >99.9% de la masa atómica.",
      en: "Center of atom containing protons and neutrons. Concentrates >99.9% of atomic mass.",
    },
  },
  radiactividad: {
    term: {
      es: "Radiactividad",
      en: "Radioactivity",
    },
    definition: {
      es: "Desintegración espontánea de núcleos inestables emitiendo radiación (alfa, beta o gamma).",
      en: "Spontaneous disintegration of unstable nuclei emitting radiation (alpha, beta or gamma).",
    },
  },
  radioactivity: {
    term: {
      es: "Radiactividad",
      en: "Radioactivity",
    },
    definition: {
      es: "Desintegración espontánea de núcleos inestables emitiendo radiación (alfa, beta o gamma).",
      en: "Spontaneous disintegration of unstable nuclei emitting radiation (alpha, beta or gamma).",
    },
  },
  fision: {
    term: {
      es: "Fisión",
      en: "Fission",
    },
    definition: {
      es: "División de un núcleo pesado en núcleos más ligeros, liberando energía. Usada en reactores nucleares.",
      en: "Splitting of heavy nucleus into lighter nuclei, releasing energy. Used in nuclear reactors.",
    },
  },
  fission: {
    term: {
      es: "Fisión",
      en: "Fission",
    },
    definition: {
      es: "División de un núcleo pesado en núcleos más ligeros, liberando energía. Usada en reactores nucleares.",
      en: "Splitting of heavy nucleus into lighter nuclei, releasing energy. Used in nuclear reactors.",
    },
  },
  fusion: {
    term: {
      es: "Fusión",
      en: "Fusion",
    },
    definition: {
      es: "Unión de núcleos ligeros para formar uno más pesado, liberando energía. Ocurre en el Sol.",
      en: "Union of light nuclei to form heavier one, releasing energy. Occurs in the Sun.",
    },
  },
  "espectro electromagnetico": {
    term: {
      es: "Espectro electromagnético",
      en: "Electromagnetic spectrum",
    },
    definition: {
      es: "Conjunto de todas las ondas electromagnéticas ordenadas por frecuencia: radio, microondas, infrarrojo, visible, UV, rayos X, rayos gamma.",
      en: "Set of all electromagnetic waves ordered by frequency: radio, microwaves, infrared, visible, UV, X-rays, gamma rays.",
    },
  },
  "electromagnetic spectrum": {
    term: {
      es: "Espectro electromagnético",
      en: "Electromagnetic spectrum",
    },
    definition: {
      es: "Conjunto de todas las ondas electromagnéticas ordenadas por frecuencia: radio, microondas, infrarrojo, visible, UV, rayos X, rayos gamma.",
      en: "Set of all electromagnetic waves ordered by frequency: radio, microwaves, infrared, visible, UV, X-rays, gamma rays.",
    },
  },
};

export const chemistryGlossary: Record<string, GlossaryEntry> = {
  atomo: {
    term: {
      es: "Átomo",
      en: "Atom",
    },
    definition: {
      es: "Unidad básica de materia, compuesto por un núcleo (protones y neutrones) rodeado de electrones.",
      en: "Basic unit of matter, composed of a nucleus (protons and neutrons) surrounded by electrons.",
    },
  },
  atom: {
    term: {
      es: "Átomo",
      en: "Atom",
    },
    definition: {
      es: "Unidad básica de materia, compuesto por un núcleo (protones y neutrones) rodeado de electrones.",
      en: "Basic unit of matter, composed of a nucleus (protons and neutrons) surrounded by electrons.",
    },
  },
  molecula: {
    term: {
      es: "Molécula",
      en: "Molecule",
    },
    definition: {
      es: "Grupo de dos o más átomos unidos por enlaces químicos. Ejemplo: H₂O (agua).",
      en: "Group of two or more atoms joined by chemical bonds. Example: H₂O (water).",
    },
  },
  molecule: {
    term: {
      es: "Molécula",
      en: "Molecule",
    },
    definition: {
      es: "Grupo de dos o más átomos unidos por enlaces químicos. Ejemplo: H₂O (agua).",
      en: "Group of two or more atoms joined by chemical bonds. Example: H₂O (water).",
    },
  },
  elemento: {
    term: {
      es: "Elemento",
      en: "Element",
    },
    definition: {
      es: "Sustancia pura formada por átomos del mismo tipo (mismo número atómico Z). Ejemplo: oxígeno (O), carbono (C).",
      en: "Pure substance formed by atoms of the same type (same atomic number Z). Example: oxygen (O), carbon (C).",
    },
  },
  element: {
    term: {
      es: "Elemento",
      en: "Element",
    },
    definition: {
      es: "Sustancia pura formada por átomos del mismo tipo (mismo número atómico Z). Ejemplo: oxígeno (O), carbono (C).",
      en: "Pure substance formed by atoms of the same type (same atomic number Z). Example: oxygen (O), carbon (C).",
    },
  },
  compuesto: {
    term: {
      es: "Compuesto",
      en: "Compound",
    },
    definition: {
      es: "Sustancia formada por dos o más elementos químicos unidos en proporciones fijas. Ejemplo: NaCl (sal).",
      en: "Substance formed by two or more chemical elements joined in fixed proportions. Example: NaCl (salt).",
    },
  },
  compound: {
    term: {
      es: "Compuesto",
      en: "Compound",
    },
    definition: {
      es: "Sustancia formada por dos o más elementos químicos unidos en proporciones fijas. Ejemplo: NaCl (sal).",
      en: "Substance formed by two or more chemical elements joined in fixed proportions. Example: NaCl (salt).",
    },
  },
  ion: {
    term: {
      es: "Ion",
      en: "Ion",
    },
    definition: {
      es: "Átomo o molécula con carga eléctrica. Catión: carga positiva (+). Anión: carga negativa (−).",
      en: "Atom or molecule with electric charge. Cation: positive charge (+). Anion: negative charge (−).",
    },
  },
  isotopo: {
    term: {
      es: "Isótopo",
      en: "Isotope",
    },
    definition: {
      es: "Átomos del mismo elemento (mismo Z) con diferente número de neutrones. Ejemplo: C-12 y C-14 son isótopos del carbono.",
      en: "Atoms of the same element (same Z) with different number of neutrons. Example: C-12 and C-14 are carbon isotopes.",
    },
  },
  isotope: {
    term: {
      es: "Isótopo",
      en: "Isotope",
    },
    definition: {
      es: "Átomos del mismo elemento (mismo Z) con diferente número de neutrones. Ejemplo: C-12 y C-14 son isótopos del carbono.",
      en: "Atoms of the same element (same Z) with different number of neutrons. Example: C-12 and C-14 are carbon isotopes.",
    },
  },
  "numero atomico": {
    term: {
      es: "Número atómico",
      en: "Atomic number",
    },
    definition: {
      es: "Número de protones en el núcleo de un átomo. Simbolizado como Z. Define la identidad del elemento.",
      en: "Number of protons in atom's nucleus. Symbolized as Z. Defines element's identity.",
    },
  },
  "atomic number": {
    term: {
      es: "Número atómico",
      en: "Atomic number",
    },
    definition: {
      es: "Número de protones en el núcleo de un átomo. Simbolizado como Z. Define la identidad del elemento.",
      en: "Number of protons in atom's nucleus. Symbolized as Z. Defines element's identity.",
    },
  },
  "masa atomica": {
    term: {
      es: "Masa atómica",
      en: "Atomic mass",
    },
    definition: {
      es: "Masa promedio de los átomos de un elemento, medida en unidades de masa atómica (uma). A = Z + N.",
      en: "Average mass of element's atoms, measured in atomic mass units (amu). A = Z + N.",
    },
  },
  "atomic mass": {
    term: {
      es: "Masa atómica",
      en: "Atomic mass",
    },
    definition: {
      es: "Masa promedio de los átomos de un elemento, medida en unidades de masa atómica (uma). A = Z + N.",
      en: "Average mass of element's atoms, measured in atomic mass units (amu). A = Z + N.",
    },
  },
  "tabla periodica": {
    term: {
      es: "Tabla periódica",
      en: "Periodic table",
    },
    definition: {
      es: "Organización de elementos químicos por número atómico creciente y propiedades similares. Grupos (columnas) y períodos (filas).",
      en: "Organization of chemical elements by increasing atomic number and similar properties. Groups (columns) and periods (rows).",
    },
  },
  "periodic table": {
    term: {
      es: "Tabla periódica",
      en: "Periodic table",
    },
    definition: {
      es: "Organización de elementos químicos por número atómico creciente y propiedades similares. Grupos (columnas) y períodos (filas).",
      en: "Organization of chemical elements by increasing atomic number and similar properties. Groups (columns) and periods (rows).",
    },
  },
  mol: {
    term: {
      es: "Mol",
      en: "Mole",
    },
    definition: {
      es: "Unidad de cantidad de sustancia. 1 mol = 6.022×10²³ entidades (número de Avogadro).",
      en: "Unit of amount of substance. 1 mole = 6.022×10²³ entities (Avogadro's number).",
    },
  },
  mole: {
    term: {
      es: "Mol",
      en: "Mole",
    },
    definition: {
      es: "Unidad de cantidad de sustancia. 1 mol = 6.022×10²³ entidades (número de Avogadro).",
      en: "Unit of amount of substance. 1 mole = 6.022×10²³ entities (Avogadro's number).",
    },
  },
  estequiometria: {
    term: {
      es: "Estequiometría",
      en: "Stoichiometry",
    },
    definition: {
      es: "Cálculo de cantidades de reactivos y productos en reacciones químicas usando relaciones molares.",
      en: "Calculation of reactant and product amounts in chemical reactions using molar relationships.",
    },
  },
  stoichiometry: {
    term: {
      es: "Estequiometría",
      en: "Stoichiometry",
    },
    definition: {
      es: "Cálculo de cantidades de reactivos y productos en reacciones químicas usando relaciones molares.",
      en: "Calculation of reactant and product amounts in chemical reactions using molar relationships.",
    },
  },
  "enlace ionico": {
    term: {
      es: "Enlace iónico",
      en: "Ionic bond",
    },
    definition: {
      es: "Unión electrostática entre iones de cargas opuestas. Metal + no metal. Ejemplo: NaCl.",
      en: "Electrostatic union between ions of opposite charges. Metal + nonmetal. Example: NaCl.",
    },
  },
  "ionic bond": {
    term: {
      es: "Enlace iónico",
      en: "Ionic bond",
    },
    definition: {
      es: "Unión electrostática entre iones de cargas opuestas. Metal + no metal. Ejemplo: NaCl.",
      en: "Electrostatic union between ions of opposite charges. Metal + nonmetal. Example: NaCl.",
    },
  },
  "enlace covalente": {
    term: {
      es: "Enlace covalente",
      en: "Covalent bond",
    },
    definition: {
      es: "Unión química por compartición de electrones. Entre no metales. Puede ser polar o no polar.",
      en: "Chemical bond by electron sharing. Between nonmetals. Can be polar or nonpolar.",
    },
  },
  "covalent bond": {
    term: {
      es: "Enlace covalente",
      en: "Covalent bond",
    },
    definition: {
      es: "Unión química por compartición de electrones. Entre no metales. Puede ser polar o no polar.",
      en: "Chemical bond by electron sharing. Between nonmetals. Can be polar or nonpolar.",
    },
  },
  acido: {
    term: {
      es: "Ácido",
      en: "Acid",
    },
    definition: {
      es: "Sustancia que libera iones H⁺ en solución acuosa. pH < 7. Ejemplo: HCl (ácido clorhídrico).",
      en: "Substance that releases H⁺ ions in aqueous solution. pH < 7. Example: HCl (hydrochloric acid).",
    },
  },
  acid: {
    term: {
      es: "Ácido",
      en: "Acid",
    },
    definition: {
      es: "Sustancia que libera iones H⁺ en solución acuosa. pH < 7. Ejemplo: HCl (ácido clorhídrico).",
      en: "Substance that releases H⁺ ions in aqueous solution. pH < 7. Example: HCl (hydrochloric acid).",
    },
  },
  base: {
    term: {
      es: "Base",
      en: "Base",
    },
    definition: {
      es: "Sustancia que libera iones OH⁻ en solución acuosa. pH > 7. Ejemplo: NaOH (hidróxido de sodio).",
      en: "Substance that releases OH⁻ ions in aqueous solution. pH > 7. Example: NaOH (sodium hydroxide).",
    },
  },
  ph: {
    term: {
      es: "pH",
      en: "pH",
    },
    definition: {
      es: "Medida de acidez o basicidad. Escala 0-14. pH < 7 (ácido), pH = 7 (neutro), pH > 7 (básico).",
      en: "Measure of acidity or basicity. Scale 0-14. pH < 7 (acidic), pH = 7 (neutral), pH > 7 (basic).",
    },
  },
  oxidacion: {
    term: {
      es: "Oxidación",
      en: "Oxidation",
    },
    definition: {
      es: "Pérdida de electrones en una reacción química. Aumenta el número de oxidación.",
      en: "Loss of electrons in chemical reaction. Increases oxidation number.",
    },
  },
  oxidation: {
    term: {
      es: "Oxidación",
      en: "Oxidation",
    },
    definition: {
      es: "Pérdida de electrones en una reacción química. Aumenta el número de oxidación.",
      en: "Loss of electrons in chemical reaction. Increases oxidation number.",
    },
  },
  reduccion: {
    term: {
      es: "Reducción",
      en: "Reduction",
    },
    definition: {
      es: "Ganancia de electrones en una reacción química. Disminuye el número de oxidación.",
      en: "Gain of electrons in chemical reaction. Decreases oxidation number.",
    },
  },
  reduction: {
    term: {
      es: "Reducción",
      en: "Reduction",
    },
    definition: {
      es: "Ganancia de electrones en una reacción química. Disminuye el número de oxidación.",
      en: "Gain of electrons in chemical reaction. Decreases oxidation number.",
    },
  },
  entalpia: {
    term: {
      es: "Entalpía",
      en: "Enthalpy",
    },
    definition: {
      es: "Contenido energético de un sistema. ΔH < 0: exotérmica (libera calor). ΔH > 0: endotérmica (absorbe calor).",
      en: "Energy content of system. ΔH < 0: exothermic (releases heat). ΔH > 0: endothermic (absorbs heat).",
    },
  },
  enthalpy: {
    term: {
      es: "Entalpía",
      en: "Enthalpy",
    },
    definition: {
      es: "Contenido energético de un sistema. ΔH < 0: exotérmica (libera calor). ΔH > 0: endotérmica (absorbe calor).",
      en: "Energy content of system. ΔH < 0: exothermic (releases heat). ΔH > 0: endothermic (absorbs heat).",
    },
  },
  entropia: {
    term: {
      es: "Entropía",
      en: "Entropy",
    },
    definition: {
      es: "Medida del desorden o aleatoriedad de un sistema. Simbolizada como S. Mayor desorden → mayor S.",
      en: "Measure of disorder or randomness of system. Symbolized as S. Greater disorder → greater S.",
    },
  },
  entropy: {
    term: {
      es: "Entropía",
      en: "Entropy",
    },
    definition: {
      es: "Medida del desorden o aleatoriedad de un sistema. Simbolizada como S. Mayor desorden → mayor S.",
      en: "Measure of disorder or randomness of system. Symbolized as S. Greater disorder → greater S.",
    },
  },
  "equilibrio quimico": {
    term: {
      es: "Equilibrio químico",
      en: "Chemical equilibrium",
    },
    definition: {
      es: "Estado donde velocidades de reacción directa e inversa son iguales. Concentraciones constantes. Keq.",
      en: "State where forward and reverse reaction rates are equal. Constant concentrations. Keq.",
    },
  },
  "chemical equilibrium": {
    term: {
      es: "Equilibrio químico",
      en: "Chemical equilibrium",
    },
    definition: {
      es: "Estado donde velocidades de reacción directa e inversa son iguales. Concentraciones constantes. Keq.",
      en: "State where forward and reverse reaction rates are equal. Constant concentrations. Keq.",
    },
  },
  catalizador: {
    term: {
      es: "Catalizador",
      en: "Catalyst",
    },
    definition: {
      es: "Sustancia que acelera una reacción química sin consumirse. Disminuye energía de activación.",
      en: "Substance that speeds chemical reaction without being consumed. Lowers activation energy.",
    },
  },
  catalyst: {
    term: {
      es: "Catalizador",
      en: "Catalyst",
    },
    definition: {
      es: "Sustancia que acelera una reacción química sin consumirse. Disminuye energía de activación.",
      en: "Substance that speeds chemical reaction without being consumed. Lowers activation energy.",
    },
  },
  hidrocarburo: {
    term: {
      es: "Hidrocarburo",
      en: "Hydrocarbon",
    },
    definition: {
      es: "Compuesto orgánico formado solo por carbono e hidrógeno. Alcanos, alquenos, alquinos, aromáticos.",
      en: "Organic compound formed only by carbon and hydrogen. Alkanes, alkenes, alkynes, aromatics.",
    },
  },
  hydrocarbon: {
    term: {
      es: "Hidrocarburo",
      en: "Hydrocarbon",
    },
    definition: {
      es: "Compuesto orgánico formado solo por carbono e hidrógeno. Alcanos, alquenos, alquinos, aromáticos.",
      en: "Organic compound formed only by carbon and hydrogen. Alkanes, alkenes, alkynes, aromatics.",
    },
  },
  isomero: {
    term: {
      es: "Isómero",
      en: "Isomer",
    },
    definition: {
      es: "Compuestos con misma fórmula molecular pero diferente estructura. Diferentes propiedades físicas y químicas.",
      en: "Compounds with same molecular formula but different structure. Different physical and chemical properties.",
    },
  },
  isomer: {
    term: {
      es: "Isómero",
      en: "Isomer",
    },
    definition: {
      es: "Compuestos con misma fórmula molecular pero diferente estructura. Diferentes propiedades físicas y químicas.",
      en: "Compounds with same molecular formula but different structure. Different physical and chemical properties.",
    },
  },
  polimero: {
    term: {
      es: "Polímero",
      en: "Polymer",
    },
    definition: {
      es: "Macromolécula formada por unión de muchas unidades pequeñas (monómeros). Ejemplos: plásticos, proteínas, ADN.",
      en: "Macromolecule formed by union of many small units (monomers). Examples: plastics, proteins, DNA.",
    },
  },
  polymer: {
    term: {
      es: "Polímero",
      en: "Polymer",
    },
    definition: {
      es: "Macromolécula formada por unión de muchas unidades pequeñas (monómeros). Ejemplos: plásticos, proteínas, ADN.",
      en: "Macromolecule formed by union of many small units (monomers). Examples: plastics, proteins, DNA.",
    },
  },
};

export const worldHistoryGlossary: Record<string, GlossaryEntry> = {
  ilustración: {
    term: { es: "Ilustración", en: "Enlightenment" },
    definition: { es: "Movimiento intelectual del siglo XVIII que defendía la razón, la ciencia y la libertad individual frente al dogma y la tradición. Pensadores como Voltaire, Rousseau y Montesquieu cuestionaron el absolutismo y la Iglesia.", en: "18th-century intellectual movement that championed reason, science, and individual freedom over dogma and tradition. Thinkers like Voltaire, Rousseau, and Montesquieu questioned absolutism and the Church." },
  },
  enlightenment: {
    term: { es: "Ilustración", en: "Enlightenment" },
    definition: { es: "Movimiento intelectual del siglo XVIII que defendía la razón, la ciencia y la libertad individual frente al dogma y la tradición.", en: "18th-century intellectual movement that championed reason, science, and individual freedom over dogma and tradition." },
  },
  burguesía: {
    term: { es: "Burguesía", en: "Bourgeoisie" },
    definition: { es: "Clase social surgida en la Edad Media en las ciudades (burgos), que con la Revolución Industrial se convirtió en la clase dominante gracias a la propiedad de los medios de producción.", en: "Social class that emerged in the Middle Ages in cities (bourgs), which with the Industrial Revolution became the dominant class through ownership of the means of production." },
  },
  imperialismo: {
    term: { es: "Imperialismo", en: "Imperialism" },
    definition: { es: "Política de expansión de una nación sobre otras, estableciendo dominación política, económica y cultural. En el siglo XIX, las potencias europeas colonizaron África y Asia mediante el imperialismo.", en: "Policy of expansion of one nation over others, establishing political, economic, and cultural domination. In the 19th century, European powers colonized Africa and Asia through imperialism." },
  },
  totalitarismo: {
    term: { es: "Totalitarismo", en: "Totalitarianism" },
    definition: { es: "Sistema político en el que el Estado controla todos los aspectos de la vida pública y privada. El fascismo, el nazismo y el estalinismo son ejemplos de regímenes totalitarios del siglo XX.", en: "Political system in which the State controls all aspects of public and private life. Fascism, Nazism, and Stalinism are examples of 20th-century totalitarian regimes." },
  },
  fascismo: {
    term: { es: "Fascismo", en: "Fascism" },
    definition: { es: "Ideología y régimen político autoritario-nacionalista surgido en Italia con Benito Mussolini en 1922. Caracterizado por el partido único, el culto al líder, el corporativismo y el anti-marxismo.", en: "Authoritarian-nationalist political ideology and regime that arose in Italy under Benito Mussolini in 1922. Characterized by single party, cult of the leader, corporatism, and anti-Marxism." },
  },
  nazismo: {
    term: { es: "Nazismo", en: "Nazism" },
    definition: { es: "Variante alemana del fascismo, liderada por Adolf Hitler y el NSDAP. Combinó ultranacionalismo, antisemitismo y racismo con la ideología del espacio vital (Lebensraum). Condujo al Holocausto y la Segunda Guerra Mundial.", en: "German variant of fascism, led by Adolf Hitler and the NSDAP. Combined ultra-nationalism, antisemitism, and racism with the ideology of living space (Lebensraum). Led to the Holocaust and World War II." },
  },
  holocausto: {
    term: { es: "Holocausto", en: "Holocaust" },
    definition: { es: "El genocidio sistemático de seis millones de judíos (y otros grupos) perpetrado por la Alemania nazi y sus colaboradores entre 1941 y 1945.", en: "The systematic genocide of six million Jews (and other groups) perpetrated by Nazi Germany and its collaborators between 1941 and 1945." },
  },
  "guerra fría": {
    term: { es: "Guerra Fría", en: "Cold War" },
    definition: { es: "Conflicto político, ideológico y estratégico entre EUA (capitalismo) y la URSS (comunismo) de 1947 a 1991. Sin enfrentamiento armado directo, se manifestó en guerras proxy, la carrera armamentista y espacial.", en: "Political, ideological, and strategic conflict between the USA (capitalism) and USSR (communism) from 1947 to 1991. Without direct armed confrontation, it manifested in proxy wars, the arms race, and the space race." },
  },
  "cold war": {
    term: { es: "Guerra Fría", en: "Cold War" },
    definition: { es: "Conflicto político, ideológico y estratégico entre EUA (capitalismo) y la URSS (comunismo) de 1947 a 1991.", en: "Political, ideological, and strategic conflict between the USA (capitalism) and USSR (communism) from 1947 to 1991." },
  },
  perestroika: {
    term: { es: "Perestroika", en: "Perestroika" },
    definition: { es: "Política de 'reestructuración' económica impulsada por Mikhail Gorbachov en la URSS desde 1986, que junto con la glásnost (transparencia) aceleró la caída del bloque soviético.", en: "Policy of economic 'restructuring' promoted by Mikhail Gorbachev in the USSR from 1986 which, combined with glasnost (transparency), accelerated the fall of the Soviet bloc." },
  },
  globalización: {
    term: { es: "Globalización", en: "Globalization" },
    definition: { es: "Proceso de interdependencia e integración mundial económica, cultural, política y tecnológica, acelerado desde los años 1990 con el fin de la Guerra Fría y la expansión de internet.", en: "Process of worldwide economic, cultural, political, and technological interdependence and integration, accelerated since the 1990s with the end of the Cold War and the expansion of the internet." },
  },
  proletariado: {
    term: { es: "Proletariado", en: "Proletariat" },
    definition: { es: "Clase obrera industrial que, según Marx y Engels, vende su fuerza de trabajo al capitalista. El Manifiesto Comunista (1848) llamaba al proletariado a derrocar a la burguesía.", en: "Industrial working class that, according to Marx and Engels, sells its labor power to the capitalist. The Communist Manifesto (1848) called on the proletariat to overthrow the bourgeoisie." },
  },
  imperialismo2: {
    term: { es: "Colonialismo", en: "Colonialism" },
    definition: { es: "Sistema de dominio político y económico de un país sobre territorios y pueblos extranjeros, especialmente el europeo sobre África, Asia y América (siglos XV-XX).", en: "System of political and economic domination of one country over foreign territories and peoples, especially European over Africa, Asia, and the Americas (15th-20th centuries)." },
  },
  "revolución industrial": {
    term: { es: "Revolución Industrial", en: "Industrial Revolution" },
    definition: { es: "Transformación económica y social iniciada en Gran Bretaña en el siglo XVIII, basada en la mecanización de la producción, el uso del vapor y la fábrica como unidad productiva.", en: "Economic and social transformation that began in Britain in the 18th century, based on the mechanization of production, the use of steam power, and the factory as the productive unit." },
  },
  "tratado de versalles": {
    term: { es: "Tratado de Versalles", en: "Treaty of Versailles" },
    definition: { es: "Tratado de paz de 1919 que puso fin a la Primera Guerra Mundial. Impuso severas sanciones a Alemania (Artículo 231, 'cláusula de culpabilidad de guerra'), contribuyendo al surgimiento del nazismo.", en: "1919 peace treaty that ended World War I. It imposed severe sanctions on Germany (Article 231, 'war guilt clause'), contributing to the rise of Nazism." },
  },
};

export const mexicanHistoryGlossary: Record<string, GlossaryEntry> = {
  mesoamérica: {
    term: { es: "Mesoamérica", en: "Mesoamerica" },
    definition: { es: "Área cultural que abarca el centro y sur de México y Centroamérica, donde florecieron civilizaciones como olmecas, mayas, teotihuacanos y aztecas con rasgos culturales comunes.", en: "Cultural area encompassing central and southern Mexico and Central America, where civilizations like the Olmecs, Maya, Teotihuacanos, and Aztecs flourished with shared cultural traits." },
  },
  virreinato: {
    term: { es: "Virreinato", en: "Viceroyalty" },
    definition: { es: "División administrativa del Imperio Español gobernada por un virrey en nombre del rey. El Virreinato de la Nueva España (1535-1821) abarcó México, Centroamérica y partes de EUA y el Caribe.", en: "Administrative division of the Spanish Empire governed by a viceroy in the king's name. The Viceroyalty of New Spain (1535-1821) encompassed Mexico, Central America, and parts of the USA and Caribbean." },
  },
  encomienda: {
    term: { es: "Encomienda", en: "Encomienda" },
    definition: { es: "Sistema colonial español en el que un conquistador (encomendero) recibía el trabajo y tributo de los indígenas a cambio de protegerlos y evangelizarlos, creando de facto una servidumbre.", en: "Spanish colonial system in which a conquistador (encomendero) received the labor and tribute of indigenous people in exchange for protecting and converting them, creating de facto serfdom." },
  },
  maderismo: {
    term: { es: "Maderismo", en: "Maderism" },
    definition: { es: "Movimiento político y social encabezado por Francisco I. Madero, que derrocó a Porfirio Díaz con el lema 'Sufragio efectivo, no reelección' e inició la Revolución Mexicana en 1910.", en: "Political and social movement led by Francisco I. Madero, which overthrew Porfirio Díaz with the slogan 'Effective suffrage, no re-election' and initiated the Mexican Revolution in 1910." },
  },
  zapatismo: {
    term: { es: "Zapatismo", en: "Zapatism" },
    definition: { es: "Movimiento agrario radical liderado por Emiliano Zapata ('Tierra y Libertad') que exigía la restitución de tierras a los campesinos. Su Plan de Ayala (1911) fue el programa agrario más radical de la Revolución.", en: "Radical agrarian movement led by Emiliano Zapata ('Land and Liberty') that demanded land restitution to peasants. Its Plan of Ayala (1911) was the most radical agrarian program of the Revolution." },
  },
  constitucionalismo: {
    term: { es: "Constitucionalismo", en: "Constitutionalism" },
    definition: { es: "Facción revolucionaria liderada por Venustiano Carranza que buscaba restablecer el orden constitucional tras el golpe de Huerta. Su victoria llevó a la promulgación de la Constitución de 1917.", en: "Revolutionary faction led by Venustiano Carranza that sought to restore constitutional order after Huerta's coup. Their victory led to the promulgation of the Constitution of 1917." },
  },
  cardenismo: {
    term: { es: "Cardenismo", en: "Cardenism" },
    definition: { es: "Política reformista del presidente Lázaro Cárdenas (1934-1940) que incluyó la expropiación petrolera (1938), la reforma agraria masiva, la educación socialista y la organización corporativa de trabajadores y campesinos.", en: "Reformist policy of President Lázaro Cárdenas (1934-1940) that included the oil expropriation (1938), massive agrarian reform, socialist education, and corporate organization of workers and peasants." },
  },
  "expropiación petrolera": {
    term: { es: "Expropiación Petrolera", en: "Oil Expropriation" },
    definition: { es: "Decreto del presidente Lázaro Cárdenas del 18 de marzo de 1938 que nationalizó la industria petrolera mexicana, creando PEMEX. Fue el acto nationalism más importante del siglo XX mexicano.", en: "Decree by President Lázaro Cárdenas on March 18, 1938 that nationalized the Mexican oil industry, creating PEMEX. It was the most important nationalist act of 20th-century Mexico." },
  },
  "desarrollo estabilizador": {
    term: { es: "Desarrollo Estabilizador", en: "Stabilizing Development" },
    definition: { es: "Modelo económico mexicano (1954-1970) caracterizado por crecimiento del 6-7% anual, baja inflación, tipo de cambio fijo de 12.50 pesos por dólar e industrialización por sustitución de importaciones.", en: "Mexican economic model (1954-1970) characterized by 6-7% annual growth, low inflation, fixed exchange rate of 12.50 pesos per dollar, and industrialization by import substitution." },
  },
  ejido: {
    term: { es: "Ejido", en: "Ejido" },
    definition: { es: "Forma de propiedad social agraria en México donde la tierra pertenece a la nación y es explotada colectivamente por los ejidatarios. Institución central de la reforma agraria post-revolucionaria.", en: "Form of social agrarian property in Mexico where land belongs to the nation and is collectively exploited by ejidatarios. Central institution of post-revolutionary agrarian reform." },
  },
  reforma: {
    term: { es: "La Reforma (Revolución Liberal)", en: "The Reform (Liberal Revolution)" },
    definition: { es: "Período (1855-1876) de transformación del Estado mexicano impulsado por liberales como Benito Juárez. Incluyó la separación Iglesia-Estado, la Constitución de 1857 y las Leyes de Reforma.", en: "Period (1855-1876) of transformation of the Mexican state promoted by liberals like Benito Juárez. It included Church-State separation, the Constitution of 1857, and the Reform Laws." },
  },
  porfiriato: {
    term: { es: "Porfiriato", en: "Porfiriato" },
    definition: { es: "Período de dominio político de Porfirio Díaz en México (1876-1911), caracterizado por la modernización económica basada en inversión extranjera, la represión política y la enorme desigualdad social.", en: "Period of Porfirio Díaz's political dominance in Mexico (1876-1911), characterized by economic modernization based on foreign investment, political repression, and enormous social inequality." },
  },
  tlatelolco: {
    term: { es: "Masacre de Tlatelolco", en: "Tlatelolco Massacre" },
    definition: { es: "El 2 de octubre de 1968, el ejército mexicano abrió fuego contra estudiantes y civiles que se manifestaban en la Plaza de las Tres Culturas, días antes de los Juegos Olímpicos de México.", en: "On October 2, 1968, the Mexican army opened fire on students and civilians demonstrating at the Plaza de las Tres Culturas, days before the Mexico Olympic Games." },
  },
  "plan de ayutla": {
    term: { es: "Plan de Ayutla", en: "Plan of Ayutla" },
    definition: { es: "Documento político de 1854 que desconoció el gobierno de Santa Anna y convocó a un Congreso Constituyente, iniciando el período de la Reforma Liberal en México.", en: "1854 political document that rejected Santa Anna's government and called for a Constituent Congress, initiating the Liberal Reform period in Mexico." },
  },
};

// Helper function to find glossary terms in text
export function findGlossaryTerms(text: string): string[] {
  const terms: string[] = [];
  const lowerText = text.toLowerCase();

  // Combine all glossaries
  const allGlossaries = {
    ...mathGlossary,
    ...biologyGlossary,
    ...geographyGlossary,
    ...spanishGlossary,
    ...literatureGlossary,
    ...physicsGlossary,
    ...chemistryGlossary,
    ...worldHistoryGlossary,
    ...mexicanHistoryGlossary,
  };

  // Sort terms by length (longest first) to match longer terms first
  const sortedKeys = Object.keys(allGlossaries).sort(
    (a, b) => b.length - a.length,
  );

  for (const key of sortedKeys) {
    if (lowerText.includes(key.toLowerCase())) {
      terms.push(key);
    }
  }

  return terms;
}
