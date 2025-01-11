"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -top-[280px] -z-30 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4.5rem_2rem] [transform:perspective(560px)_rotateX(-63deg)]" />
        <div className="pointer-events-none absolute top-0 -z-20 h-1/2 w-full bg-gradient-to-b from-transparent to-background" />

        <div className="bg-gradient-radial fixed -z-10 h-full w-full rounded-full from-foreground/30 via-foreground/15 to-transparent blur-3xl dark:from-foreground/15 dark:via-foreground/5" />

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="relative z-10 text-center text-4xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            iStack
          </h1>

          <p className="relative z-10 mt-0 text-center md:mt-4">
            An open-source starter kit based on{" "}
            <Link href="https://www.wordware.ai/" className="underline">
              Wordware
            </Link>
            .
          </p>
        </motion.div>

        <div className="pointer-events-none absolute inset-0 -bottom-[280px] -z-30 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4.5rem_2rem] [transform:perspective(560px)_rotateX(63deg)]" />
        <div className="pointer-events-none absolute bottom-0 -z-20 h-1/2 w-full bg-gradient-to-b from-background to-transparent" />
      </div>
    </div>
  );
}
