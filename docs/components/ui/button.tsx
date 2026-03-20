/* eslint-disable sort-keys */
import * as React from "react";

import {Slot} from "@radix-ui/react-slot";
import {
    cva,
    type VariantProps,
} from "class-variance-authority";

import {cn} from "@/lib/utils";


const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap " +
    "font-medium transition-all disabled:pointer-events-none " +
    "disabled:opacity-50 [&_svg]:pointer-events-none " +
    "[&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 " +
    "outline-none focus-visible:border-ring focus-visible:ring-ring/50 " +
    "focus-visible:ring-[3px] aria-invalid:ring-destructive/20 " +
    "dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default: "rounded-md bg-primary text-primary-foreground hover:bg-primary/90",
                github: "btn-github rounded-md d-inline-flex align-items-center",
                navlink: "rounded-md block py-2 px-4 no-underline transition-colors " +
                    "nav-link-btn text-sm",
                outline: "rounded-md border bg-background shadow-xs hover:bg-accent " +
                    "hover:text-accent-foreground dark:bg-input/30 dark:border-input " +
                    "dark:hover:bg-input/50",
                tab: "",
                themeToggle: "rounded-md d-inline-flex align-items-center",
            },
            size: {
                "default": "h-9 px-4 py-2 has-[>svg]:px-3",
                "xs": "h-6 gap-1 px-2 text-xs has-[>svg]:px-1.5 " +
                    "[&_svg:not([class*='size-'])]:size-3",
                "sm": "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
                "lg": "h-10 px-6 has-[>svg]:px-4",
                "icon": "size-9",
                "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
                "icon-sm": "size-8",
                "icon-lg": "size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

/**
 * A flexible button component that supports multiple variants and sizes.
 *
 * @param root0 The button component props
 * @param root0.className Additional CSS classes to apply
 * @param root0.variant The visual variant of the button
 * @param root0.size The size of the button
 * @param root0.asChild If true, renders as a Slot component instead of a button element
 * @param root0.props Additional HTML button attributes
 * @return The rendered button component
 */
const Button = ({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
  }) => {
    const Comp = asChild ?
        Slot :
        "button";

    return (
        <Comp
            className={cn(buttonVariants({variant, size, className}))}
            data-size={size}
            data-slot={"button"}
            data-variant={variant}
            {...props}/>
    );
};

export {
    Button, buttonVariants,
};
