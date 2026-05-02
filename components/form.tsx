import { ChangeEvent } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { Turnstile } from "@marsidev/react-turnstile";
import { Input } from "@/components/ui/input";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

interface FormProps {
  name: string;
  email: string;
  handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  onTurnstileSuccess: (token: string) => void;
  onTurnstileExpire: () => void;
  loading: boolean;
}

export default function Form({
  name,
  email,
  handleNameChange,
  handleEmailChange,
  handleSubmit,
  onTurnstileSuccess,
  onTurnstileExpire,
  loading,
}: FormProps) {
  return (
    <motion.div
      className="mt-6 flex w-full max-w-[24rem] flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={handleEmailChange}
        />
      </motion.div>
      <motion.div variants={itemVariants} className="mt-2 flex justify-center">
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onSuccess={onTurnstileSuccess}
          onExpire={onTurnstileExpire}
          onError={onTurnstileExpire}
          options={{
            theme: "dark",
            size: "flexible",
          }}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <EnhancedButton
          variant="expandIcon"
          Icon={FaArrowRightLong}
          onClick={handleSubmit}
          iconPlacement="right"
          className="mt-2 w-full"
          disabled={loading}>
          {loading ? "Loading..." : "Join Waitlist!"}
        </EnhancedButton>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="mt-4 flex w-full items-center justify-center gap-1 text-muted-foreground">
        <p>No spam. Early users get priority access.</p>
      </motion.div>
    </motion.div>
  );
}

