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
