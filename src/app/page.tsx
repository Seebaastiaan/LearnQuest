"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Flame,
  Heart,
  Sparkles,
  Star,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const subjects = [
    "Matemáticas",
    "Física",
    "Química",
    "Biología",
    "Historia",
    "Geografía",
    "Literatura",
    "Español",
  ];

  const [currentSubject, setCurrentSubject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubject((prev) => (prev + 1) % subjects.length);
    }, 2500); // Cambia cada 2.5 segundos

    return () => clearInterval(interval);
  }, [subjects.length]);

  const features = [
    {
      icon: Brain,
      title: "Aprende paso a paso",
      description:
        "Cada ejercicio incluye explicaciones detalladas con soluciones paso a paso animadas.",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Target,
      title: "Practica con quizzes",
      description:
        "Pon a prueba tus conocimientos con ejercicios interactivos de opción múltiple, llenar espacios y más.",
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: Trophy,
      title: "Gana XP y sube de nivel",
      description:
        "Gana puntos de experiencia por cada respuesta correcta. Mantén tu racha diaria encendida.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Sparkles,
      title: "Preparación UNAM",
      description:
        "Contenido diseñado específicamente para el examen de admisión a la UNAM en todas las áreas: matemáticas, español, ciencias y humanidades.",
      color: "from-green-500 to-emerald-600",
    },
  ];

  const topics = [
    { name: "Matemáticas", icon: "🔢", color: "bg-blue-100 dark:bg-blue-950" },
    { name: "Español", icon: "📝", color: "bg-green-100 dark:bg-green-950" },
    {
      name: "Física",
      icon: "⚛️",
      color: "bg-purple-100 dark:bg-purple-950",
    },
    {
      name: "Química",
      icon: "🧪",
      color: "bg-pink-100 dark:bg-pink-950",
    },
    { name: "Biología", icon: "🧬", color: "bg-emerald-100 dark:bg-emerald-950" },
    { name: "Historia", icon: "📜", color: "bg-amber-100 dark:bg-amber-950" },
    {
      name: "Literatura",
      icon: "📚",
      color: "bg-indigo-100 dark:bg-indigo-950",
    },
    {
      name: "Geografía",
      icon: "🌍",
      color: "bg-teal-100 dark:bg-teal-950",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <span className="text-white font-black text-base">L</span>
            </div>
            <span className="font-extrabold text-xl">LearnQuest</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="font-semibold">
                Iniciar sesión
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="sm"
                className="bg-linear-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg shadow-sky-500/25"
              >
                Comenzar gratis
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-sky-50 to-background dark:from-sky-950/20 dark:to-background" />
        <div className="relative container max-w-6xl mx-auto px-4 pt-20 pb-24">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Preparación para el examen de admisión UNAM
              </div>
            </motion.div>

            <motion.h1
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1,
                layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
              }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6"
            >
              Aprende{" "}
              <motion.span
                layout
                className="inline-block relative"
                transition={{ layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentSubject}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block whitespace-nowrap bg-linear-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent"
                  >
                    {subjects[currentSubject]}
                  </motion.span>
                </AnimatePresence>
              </motion.span>{" "}
              Jugando
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              La forma más divertida de estudiar para tu examen. Lecciones
              interactivas, quizzes gamificados y explicaciones paso a paso.
              Como Duolingo, pero para todas las materias.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/login">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-linear-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-lg rounded-2xl shadow-xl shadow-sky-500/25 btn-3d"
                >
                  Comenzar gratis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 font-bold text-lg rounded-2xl"
                >
                  Crear cuenta
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center gap-8 mt-12"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                <span className="text-sm text-muted-foreground">
                  <strong>8</strong> materias
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-sky-500" />
                <span className="text-sm text-muted-foreground">
                  <strong>50+</strong> lecciones
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-green-500" />
                <span className="text-sm text-muted-foreground">
                  <strong>500+</strong> ejercicios
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Topics preview */}
      <section className="py-12 border-t border-border/40">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl ${topic.color} border border-border/30`}
              >
                <span className="text-xl">{topic.icon}</span>
                <span className="font-bold text-sm">{topic.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Todo lo que necesitas para{" "}
              <span className="bg-linear-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                aprobar
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Funcionalidades diseñadas para hacer que estudiar sea divertido y
              efectivo
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-3xl border border-border/50 bg-card hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Game mechanics preview */}
      <section className="py-20 bg-muted/30 border-y border-border/40">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Aprende como si fuera un{" "}
              <span className="bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                juego
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-950 flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-red-500 fill-red-500" />
              </div>
              <h4 className="font-bold mb-1">Vidas</h4>
              <p className="text-xs text-muted-foreground">
                5 vidas para cada quiz. ¡Cuídalas!
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-950 flex items-center justify-center mx-auto mb-3">
                <Flame className="w-8 h-8 text-orange-500 fill-orange-500" />
              </div>
              <h4 className="font-bold mb-1">Rachas</h4>
              <p className="text-xs text-muted-foreground">
                Mantén tu racha diaria activa
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center mx-auto mb-3">
                <Zap className="w-8 h-8 text-amber-500 fill-amber-500" />
              </div>
              <h4 className="font-bold mb-1">XP y Niveles</h4>
              <p className="text-xs text-muted-foreground">
                Gana experiencia y sube de nivel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            ¿Lista para empezar?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Crea tu cuenta gratis y comienza a aprender hoy.
          </p>
          <Link href="/login">
            <Button
              size="lg"
              className="h-16 px-10 bg-linear-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-xl rounded-2xl shadow-xl shadow-sky-500/25 btn-3d"
            >
              ¡Comenzar gratis!
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-linear-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-black text-xs">L</span>
            </div>
            <span className="font-bold">LearnQuest</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Hecho con amor para eve
          </p>
        </div>
      </footer>
    </div>
  );
}
