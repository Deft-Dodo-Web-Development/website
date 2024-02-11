"use client";
import React, {
  InputHTMLAttributes,
  useState,
  forwardRef,
  useEffect,
} from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Label } from "./label";
import { motion } from "framer-motion";

const inputVariants = cva(
  "flex h-10 w-full px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        bordered:
          "rounded-md border border-input bg-dark placeholder:text-white-56 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        underline: "border-0 border-input bg-transparent outline-none",
      },
    },
    defaultVariants: {
      variant: "bordered",
    },
  }
);

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", variant, label, ...props }, ref) => {
    if (label && variant !== "underline") {
      console.warn("Label is only supported with the `underline` variant.");
    }

    return variant === "underline" ? (
      <InputUnderline
        {...props}
        type={type}
        variant={variant}
        label={label}
        ref={ref}
      />
    ) : (
      <input
        {...props}
        type={type}
        ref={ref}
        className={cn(inputVariants({ variant }), className)}
      />
    );
  }
);

const InputUnderline = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, onFocus, onBlur, onChange, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(props.value || "");
    const active = isFocused || !!value || !!props.placeholder;
    const _id = React.useId() + (id ? `${id}` : "");

    useEffect(() => {
      setIsFocused(!!props.placeholder || isFocused || !!value);
    }, [value, isFocused, props.placeholder]);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      onChange?.(e);
    };

    return (
      <motion.div
        className="relative pt-4 border-b-2 border-input"
        animate={active ? "focused" : "unfocused"}
        initial="unfocused"
        variants={{
          focused: { borderBottomColor: "#eee" },
          unfocused: { borderBottomColor: "#9c9c9c" },
        }}
      >
        {label && (
          <motion.div
            className="absolute bottom-0 left-0 transform -translate-y-2 pl-3 pb-2"
            animate={active ? "focused" : "unfocused"}
            initial="unfocused"
            variants={{
              focused: { y: "-100%", fontSize: "15px", color: "#9c9c9c" },
              unfocused: { y: "-5%", fontSize: "18px", color: "#eee" },
            }}
          >
            <Label htmlFor={_id}>{label}</Label>
          </motion.div>
        )}
        <input
          {...props}
          type={props.type}
          className={cn(inputVariants({ variant: props.variant }), className)}
          ref={ref}
          value={value}
          id={_id}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </motion.div>
    );
  }
);

Input.displayName = "Input";
InputUnderline.displayName = "InputUnderline";

export { Input };
