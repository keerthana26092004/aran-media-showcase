import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 ease-out active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-brand text-brand-foreground shadow-e1 hover:-translate-y-1 hover:shadow-glow-brand",
        navy: "bg-primary text-primary-foreground shadow-e1 hover:-translate-y-1 hover:shadow-e3",
        gold: "bg-gold text-gold-foreground shadow-e1 hover:-translate-y-1 hover:shadow-e3",
        outline:
          "border border-input bg-background text-foreground hover:-translate-y-0.5 hover:border-brand hover:bg-surface-alt hover:shadow-e1",
        onDark:
          "border border-primary-foreground/60 bg-transparent text-primary-foreground hover:-translate-y-0.5 hover:bg-primary-foreground hover:text-primary hover:shadow-e2",
        destructive: "bg-destructive text-destructive-foreground shadow-e1 hover:opacity-90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-surface-alt",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        ghostOnDark: "text-primary-foreground/85 hover:bg-primary-foreground/10 hover:text-gold",
        link: "text-brand underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-12 px-6",
        lg: "h-14 px-8 text-lg",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
