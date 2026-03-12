import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function FadeInSection({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
