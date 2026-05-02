import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaXTwitter, FaFacebook, FaGithub } from "react-icons/fa6";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Footer() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-auto flex w-full flex-col items-center justify-center gap-4 border-t bg-background p-6 text-muted-foreground md:flex-row md:justify-between">
      <motion.div variants={itemVariants} className="text-center md:text-left">
        Copyright © {new Date().getFullYear()}{" "}
        <Link
          href="https://insculpt.io"
          rel="noopener noreferrer"
          target="_blank">
          <span className="text-zinc-300 underline underline-offset-2 transition-all duration-200 ease-linear hover:text-primary">
            Insculpt
          </span>
          . All rights reserved.
        </Link>
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-center gap-4">
        <Link href="https://x.com/insculpt" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="h-5 w-5 transition-colors hover:text-primary" />
        </Link>
        <Link href="https://instagram.com/insculpt.io" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="h-5 w-5 transition-colors hover:text-primary" />
        </Link>
        <Link href="https://github.com/insculpt" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-5 w-5 transition-colors hover:text-primary" />
        </Link>
        <Link href="https://youtube.com/@insculpt-io" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="h-5 w-5 transition-colors hover:text-primary" />
        </Link>
        <Link href="https://facebook.com/insculpt.io" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="h-5 w-5 transition-colors hover:text-primary" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
