import type { Topic } from "@/lib/types";

export const redaccionInvestigacionTopic: Topic = {
  id: "literatura-redaccion",
  slug: "literatura-redaccion",
  title: { es: "Redacción y técnicas de investigación", en: "Writing and Research Techniques" },
  description: {
    es: "Técnicas de resumen, paráfrasis, cita textual, comentario y registro de fuentes documentales.",
    en: "Techniques for summarizing, paraphrasing, direct quotation, commentary and registration of documentary sources.",
  },
  icon: "FileEdit",
  color: "pink",
  bgGradient: "bg-linear-to-br from-pink-500 to-rose-600",
  prerequisites: [],
  order: 3,
  lessons: [
    {
      id: "lit-redac-resumen",
      topicId: "literatura-redaccion",
      order: 1,
      title: {
        es: "Resumen y paráfrasis",
        en: "Summary and paraphrase",
      },
      description: {
        es: "Técnicas para resumir y parafrasear textos",
        en: "Techniques for summarizing and paraphrasing texts",
      },
      type: "learn",
      xpReward: 20,
      questions: [
        {
          id: "lit-redac-q1",
          prompt: {
            es: "¿Cuál es la característica principal de un buen resumen?",
            en: "What is the main characteristic of a good summary?",
          },
          type: "multiple-choice",
          options: [
            { es: "Incluir todos los detalles del texto original", en: "Include all details of the original text" },
            { es: "Mantener solo las ideas principales", en: "Keep only the main ideas" },
            { es: "Agregar opiniones personales", en: "Add personal opinions" },
            { es: "Cambiar el orden de las ideas", en: "Change the order of ideas" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Un resumen debe sintetizar el contenido esencial eliminando detalles secundarios.",
            en: "A summary should synthesize essential content eliminating secondary details.",
          },
          difficulty: 1,
        },
        {
          id: "lit-redac-q2",
          prompt: {
            es: "¿En qué se diferencia la paráfrasis del resumen?",
            en: "How does paraphrase differ from summary?",
          },
          type: "multiple-choice",
          options: [
            { es: "La paráfrasis es más breve", en: "Paraphrase is briefer" },
            { es: "La paráfrasis mantiene la extensión aproximada del original", en: "Paraphrase maintains approximate length of original" },
            { es: "La paráfrasis copia textualmente", en: "Paraphrase copies verbatim" },
            { es: "No hay diferencia", en: "There is no difference" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "La paráfrasis reformula todo el contenido con otras palabras; el resumen lo sintetiza.",
            en: "Paraphrase reformulates all content with other words; summary synthesizes it.",
          },
          difficulty: 2,
        },
        {
          id: "lit-redac-q3",
          prompt: {
            es: "Al parafrasear, ¿es necesario citar la fuente?",
            en: "When paraphrasing, is it necessary to cite the source?",
          },
          type: "true-false",
          correctAnswer: "true",
          explanation: {
            es: "Aunque uses tus propias palabras, las ideas provienen de otro autor y debes dar crédito.",
            en: "Although you use your own words, the ideas come from another author and you must give credit.",
          },
          difficulty: 2,
        },
        {
          id: "lit-redac-q4",
          prompt: {
            es: "¿Cuál técnica es más adecuada para explicar un concepto complejo con lenguaje simple?",
            en: "Which technique is most appropriate to explain a complex concept with simple language?",
          },
          type: "multiple-choice",
          options: [
            { es: "Cita textual", en: "Direct quotation" },
            { es: "Resumen", en: "Summary" },
            { es: "Paráfrasis", en: "Paraphrase" },
            { es: "Comentario", en: "Commentary" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "La paráfrasis permite reformular con lenguaje más accesible manteniendo el significado.",
            en: "Paraphrase allows reformulation with more accessible language while maintaining meaning.",
          },
          difficulty: 1,
        },
        {
          id: "lit-redac-q5",
          prompt: {
            es: "Un resumen debe conservar el estilo y tono del autor original.",
            en: "A summary should preserve the style and tone of the original author.",
          },
          type: "true-false",
          correctAnswer: "false",
          explanation: {
            es: "El resumen se escribe con lenguaje propio, aunque preserva el sentido de las ideas.",
            en: "Summary is written in own language, although it preserves the meaning of the ideas.",
          },
          difficulty: 2,
        },
      ],
    },
    {
      id: "lit-redac-cita",
      topicId: "literatura-redaccion",
      order: 2,
      title: {
        es: "Cita textual y comentario",
        en: "Direct quotation and commentary",
      },
      description: {
        es: "Cómo usar citas textuales y elaborar comentarios críticos",
        en: "How to use direct quotations and develop critical commentaries",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "lit-cita-q1",
          prompt: {
            es: "¿Cuándo es necesario usar cita textual?",
            en: "When is it necessary to use direct quotation?",
          },
          type: "multiple-choice",
          options: [
            { es: "Siempre que se mencione otro autor", en: "Whenever another author is mentioned" },
            { es: "Cuando la forma original es relevante o contundente", en: "When the original form is relevant or compelling" },
            { es: "Solo en textos académicos", en: "Only in academic texts" },
            { es: "Nunca, es mejor parafrasear", en: "Never, it's better to paraphrase" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Se cita textualmente cuando las palabras exactas del autor tienen valor especial.",
            en: "Direct quotation is used when the author's exact words have special value.",
          },
          difficulty: 2,
        },
        {
          id: "lit-cita-q2",
          prompt: {
            es: "¿Qué signo se emplea para indicar que se omitió parte de una cita textual?",
            en: "What sign is used to indicate that part of a direct quotation was omitted?",
          },
          type: "multiple-choice",
          options: [
            { es: "Asterisco (*)", en: "Asterisk (*)" },
            { es: "Guion (−)", en: "Dash (−)" },
            { es: "Puntos suspensivos (...) o corchetes [...] ", en: "Ellipsis (...) or brackets [...]" },
            { es: "Paréntesis ()", en: "Parentheses ()" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "Los puntos suspensivos o corchetes indican omisión en las citas.",
            en: "Ellipsis or brackets indicate omission in quotations.",
          },
          difficulty: 1,
        },
        {
          id: "lit-cita-q3",
          prompt: {
            es: "¿Qué elemento NO debe incluir un comentario crítico?",
            en: "What element should NOT a critical commentary include?",
          },
          type: "multiple-choice",
          options: [
            { es: "Análisis de ideas", en: "Analysis of ideas" },
            { es: "Opiniones fundamentadas", en: "Substantiated opinions" },
            { es: "Copia de fragmentos sin interpretación", en: "Copy of fragments without interpretation" },
            { es: "Valoración personal argumentada", en: "Argued personal evaluation" },
          ],
          correctAnswer: "2",
          explanation: {
            es: "El comentario debe analizar e interpretar, no solo copiar el texto.",
            en: "Commentary should analyze and interpret, not just copy the text.",
          },
          difficulty: 1,
        },
        {
          id: "lit-cita-q4",
          prompt: {
            es: "Una cita textual de más de 40 palabras debe presentarse en bloque y sin comillas.",
            en: "A direct quotation of more than 40 words should be presented in block format without quotation marks.",
          },
          type: "true-false",
          correctAnswer: "true",
          explanation: {
            es: "Según normas APA, citas largas se presentan en bloque indentado sin comillas.",
            en: "According to APA rules, long quotations are presented in indented block without quotation marks.",
          },
          difficulty: 2,
        },
        {
          id: "lit-cita-q5",
          prompt: {
            es: "¿Qué debe aparecer inmediatamente después de una cita textual?",
            en: "What should appear immediately after a direct quotation?",
          },
          type: "multiple-choice",
          options: [
            { es: "Nada, la cita habla por sí misma", en: "Nothing, the quote speaks for itself" },
            { es: "La referencia o fuente de donde se extrajo", en: "The reference or source from which it was extracted" },
            { es: "Otro ejemplo similar", en: "Another similar example" },
            { es: "Un resumen del texto completo", en: "A summary of the complete text" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Toda cita debe ir acompañada de su referencia (autor, año, página).",
            en: "Every quote must be accompanied by its reference (author, year, page).",
          },
          difficulty: 1,
        },
      ],
    },
    {
      id: "lit-redac-fuentes",
      topicId: "literatura-redaccion",
      order: 3,
      title: {
        es: "Registro de fuentes documentales (fichas bibliográficas y de trabajo)",
        en: "Registration of documentary sources (bibliographic and work cards)",
      },
      description: {
        es: "Cómo registrar fuentes bibliográficas y elaborar fichas de trabajo",
        en: "How to record bibliographic sources and create work cards",
      },
      type: "practice",
      xpReward: 25,
      questions: [
        {
          id: "lit-fuentes-q1",
          prompt: {
            es: "¿Qué datos son esenciales en una ficha bibliográfica de un libro?",
            en: "What data is essential in a bibliographic card for a book?",
          },
          type: "multiple-choice",
          options: [
            { es: "Solo el autor y el título", en: "Only author and title" },
            { es: "Autor, título, editorial, año y lugar de publicación", en: "Author, title, publisher, year and place of publication" },
            { es: "Solo el título y el año", en: "Only title and year" },
            { es: "Autor y número de páginas", en: "Author and number of pages" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Una ficha bibliográfica completa incluye todos los datos de publicación.",
            en: "A complete bibliographic card includes all publication data.",
          },
          difficulty: 1,
        },
        {
          id: "lit-fuentes-q2",
          prompt: {
            es: "¿Qué formato de citación es más usado en humanidades?",
            en: "What citation format is most used in humanities?",
          },
          type: "multiple-choice",
          options: [
            { es: "APA", en: "APA" },
            { es: "MLA", en: "MLA" },
            { es: "Chicago", en: "Chicago" },
            { es: "Vancouver", en: "Vancouver" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "MLA (Modern Language Association) es el estándar en literatura y humanidades.",
            en: "MLA (Modern Language Association) is the standard in literature and humanities.",
          },
          difficulty: 2,
        },
        {
          id: "lit-fuentes-q3",
          prompt: {
            es: "En formato APA, ¿cómo se cita un autor dentro del texto?",
            en: "In APA format, how is an author cited within the text?",
          },
          type: "multiple-choice",
          options: [
            { es: "(Apellido, año)", en: "(Last name, year)" },
            { es: "[Apellido-año]", en: "[Last name-year]" },
            { es: "Apellido (año)", en: "Last name (year)" },
            { es: "Solo el año entre paréntesis", en: "Only the year in parentheses" },
          ],
          correctAnswer: "0",
          explanation: {
            es: "APA usa el formato (Apellido, año) o (Apellido, año, p. #) para citas internas.",
            en: "APA uses the format (Last name, year) or (Last name, year, p. #) for in-text citations.",
          },
          difficulty: 2,
        },
        {
          id: "lit-fuentes-q4",
          prompt: {
            es: "¿Para qué sirven las fichas de trabajo en una investigación?",
            en: "What are work cards used for in research?",
          },
          type: "multiple-choice",
          options: [
            { es: "Solo para registrar bibliografía", en: "Only to record bibliography" },
            { es: "Para organizar ideas, citas y resúmenes durante la investigación", en: "To organize ideas, quotes and summaries during research" },
            { es: "Para hacer índices automáticos", en: "To make automatic indexes" },
            { es: "Para decorar el trabajo final", en: "To decorate the final work" },
          ],
          correctAnswer: "1",
          explanation: {
            es: "Las fichas de trabajo ayudan a organizar la información recopilada durante la investigación.",
            en: "Work cards help organize information collected during research.",
          },
          difficulty: 1,
        },
        {
          id: "lit-fuentes-q5",
          prompt: {
            es: "El plagio consiste en usar ideas de otros sin dar crédito adecuado.",
            en: "Plagiarism consists of using others' ideas without giving proper credit.",
          },
          type: "true-false",
          correctAnswer: "true",
          explanation: {
            es: "El plagio es presentar como propias ideas ajenas sin citar la fuente, lo cual es una falta grave.",
            en: "Plagiarism is presenting others' ideas as your own without citing the source, which is a serious offense.",
          },
          difficulty: 1,
        },
      ],
    },
  ],
};
