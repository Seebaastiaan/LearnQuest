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

// Helper function to find glossary terms in text
export function findGlossaryTerms(text: string): string[] {
  const terms: string[] = [];
  const lowerText = text.toLowerCase();

  // Sort terms by length (longest first) to match longer terms first
  const sortedKeys = Object.keys(mathGlossary).sort(
    (a, b) => b.length - a.length,
  );

  for (const key of sortedKeys) {
    if (lowerText.includes(key.toLowerCase())) {
      terms.push(key);
    }
  }

  return terms;
}
