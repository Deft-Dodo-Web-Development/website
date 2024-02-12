"use client";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef, useEffect, useId, useState } from "react";
import { motion } from "framer-motion";
import { Label } from "./label";

const textareaVariants = cva(
  "flex min-h-[80px] max-h-[30vh] w-full rounded-md border border-input px-1 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50",
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

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (_props, ref) => {
    const { className, variant, label, ...props } = _props;
    if (label && variant !== "underline") {
      console.warn("Label is only supported with the `underline` variant.");
    }
    return variant === "underline" ? (
      <TextAreaUnderline {..._props} ref={ref} />
    ) : (
      <textarea className={cn("", className)} ref={ref} {...props} />
    );
  }
);
const TextAreaUnderline = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, id, onFocus, onBlur, onChange, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(props.value || "");
    const active = isFocused || !!value || !!props.placeholder;
    const _id = useId() + (id ? `${id}` : "");

    useEffect(() => {
      setIsFocused(!!props.placeholder || isFocused || !!value);
    }, [value, isFocused, props.placeholder]);

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
      onChange?.(e);
    };

    return (
      <motion.div
        className="relative pt-4 border-b border-input"
        animate={active ? "focused" : "unfocused"}
        initial="unfocused"
        variants={{
          focused: { borderBottomColor: "#eee" },
          unfocused: { borderBottomColor: "#4f4f4f" },
        }}
      >
        {label && (
          <motion.div
            className="absolute left-0 transform -translate-y-2 pl-1 pb-2"
            animate={active ? "focused" : "unfocused"}
            initial="unfocused"
            variants={{
              focused: {
                top: 0,
                bottom: undefined,
                fontSize: "15px",
                color: "#9c9c9c",
              },
              unfocused: {
                bottom: 0,
                top: "unset",
                fontSize: "18px",
                color: "#eee",
                position: "absolute",
              },
            }}
          >
            <Label htmlFor={_id}>{label}</Label>
          </motion.div>
        )}
        <textarea
          {...props}
          className={cn(
            textareaVariants({ variant: props.variant }),
            className
          )}
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

TextAreaUnderline.displayName = "TextareaUnderline";
Textarea.displayName = "Textarea";

export { Textarea };
