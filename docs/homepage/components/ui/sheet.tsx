import * as React from "react";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import {XIcon} from "lucide-react";

import {cn} from "@/lib/utils";


/**
 * Sheet component wrapper around SheetPrimitive.Root.
 *
 * @param root0 The sheet root props
 * @param root0.props Additional props passed to the SheetPrimitive.Root component
 * @return The rendered sheet root element
 */
const Sheet = ({...props}: React.ComponentProps<typeof SheetPrimitive.Root>) => {
    return (
        <SheetPrimitive.Root
            data-slot={"sheet"}
            {...props}/>
    );
};

/**
 * Sheet trigger component wrapper around SheetPrimitive.Trigger.
 *
 * @param root0 The sheet trigger props
 * @param root0.props Additional props passed to the SheetPrimitive.Trigger component
 * @return The rendered sheet trigger element
 */
const SheetTrigger = ({
    ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) => {
    return (
        <SheetPrimitive.Trigger
            data-slot={"sheet-trigger"}
            {...props}/>
    );
};

/**
 * Sheet close component wrapper around SheetPrimitive.Close.
 *
 * @param root0 The sheet close props
 * @param root0.props Additional props passed to the SheetPrimitive.Close component
 * @return The rendered sheet close element
 */
const SheetClose = ({
    ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) => {
    return (
        <SheetPrimitive.Close
            data-slot={"sheet-close"}
            {...props}/>
    );
};

/**
 * Sheet portal component wrapper around SheetPrimitive.Portal.
 *
 * @param root0 The sheet portal props
 * @param root0.props Additional props passed to the SheetPrimitive.Portal component
 * @return The rendered sheet portal element
 */
const SheetPortal = ({
    ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) => {
    return (
        <SheetPrimitive.Portal
            data-slot={"sheet-portal"}
            {...props}/>
    );
};

/**
 * Sheet overlay component wrapper around SheetPrimitive.Overlay.
 *
 * @param root0 The sheet overlay props
 * @param root0.className Optional CSS class name
 * @param root0.props Additional props passed to the SheetPrimitive.Overlay component
 * @return The rendered sheet overlay element
 */
const SheetOverlay = ({
    className,
    ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) => {
    return (
        <SheetPrimitive.Overlay
            data-slot={"sheet-overlay"}
            className={cn(
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                "fixed inset-0 z-50 bg-[var(--black)/50]",
                className
            )}
            {...props}/>
    );
};

/**
 * Sheet content component wrapper around SheetPrimitive.Content with side and close button options.
 *
 * @param root0 The sheet content props
 * @param root0.className Optional CSS class name
 * @param root0.children Content to render inside the sheet
 * @param root0.side Position of the sheet ("top" | "right" | "bottom" | "left"), default is "right"
 * @param root0.hasCloseButton Whether to show the close button, defaults to true
 * @param root0.props Additional props passed to the SheetPrimitive.Content component
 * @return The rendered sheet content element
 */
const SheetContent = ({
    className,
    children,
    side = "right",
    hasCloseButton = true,
    ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
    side?: "top" | "right" | "bottom" | "left";
    hasCloseButton?: boolean;
}) => {
    return (
        <SheetPortal>
            <SheetOverlay/>
            <SheetPrimitive.Content
                data-slot={"sheet-content"}
                className={cn(
                    "bg-background data-[state=open]:animate-in",
                    "data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4",
                    "shadow-lg transition ease-in-out",
                    "data-[state=closed]:duration-300 data-[state=open]:duration-500",
                    "right" === side &&
                        "data-[state=closed]:slide-out-to-right" +
                        " data-[state=open]:slide-in-from-right",
                    "right" === side && "inset-y-0 right-0 h-full w-3/4 sm:max-w-sm",
                    "left" === side &&
                        "data-[state=closed]:slide-out-to-left" +
                        " data-[state=open]:slide-in-from-left",
                    "left" === side && "inset-y-0 left-0 h-full w-3/4 sm:max-w-sm",
                    "top" === side &&
                        "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                    "top" === side && "inset-x-0 top-0 h-auto",
                    "bottom" === side &&
                        "data-[state=closed]:slide-out-to-bottom" +
                        " data-[state=open]:slide-in-from-bottom",
                    "bottom" === side && "inset-x-0 bottom-0 h-auto",
                    "mobile-menu-sheet",
                    className
                )}
                {...props}
            >
                {children}
                {hasCloseButton && (
                    <SheetPrimitive.Close
                        className={cn(
                            "ring-offset-background focus:ring-ring",
                            "data-[state=open]:bg-secondary absolute top-4 right-4",
                            "rounded-xs opacity-70 transition-opacity hover:opacity-100",
                            "focus:ring-2 focus:ring-offset-2 focus:outline-hidden",
                            "disabled:pointer-events-none"
                        )}
                    >
                        <XIcon className={"size-6"}/>
                        <span className={"sr-only"}>Close</span>
                    </SheetPrimitive.Close>
                )}
            </SheetPrimitive.Content>
        </SheetPortal>
    );
};

/**
 * Sheet header component for organizing content at the top of the sheet.
 *
 * @param root0 The sheet header props
 * @param root0.className Optional CSS class name
 * @param root0.props Additional props passed to the div element
 * @return The rendered sheet header element
 */
const SheetHeader = ({className, ...props}: React.ComponentProps<"div">) => {
    return (
        <div
            className={cn("flex flex-col gap-1.5 p-4", className)}
            data-slot={"sheet-header"}
            {...props}/>
    );
};

/**
 * Sheet footer component for organizing content at the bottom of the sheet.
 *
 * @param root0 The sheet footer props
 * @param root0.className Optional CSS class name
 * @param root0.props Additional props passed to the div element
 * @return The rendered sheet footer element
 */
const SheetFooter = ({className, ...props}: React.ComponentProps<"div">) => {
    return (
        <div
            className={cn("mt-auto flex flex-col gap-2 p-4", className)}
            data-slot={"sheet-footer"}
            {...props}/>
    );
};

/**
 * Sheet title component wrapper around SheetPrimitive.Title.
 *
 * @param root0 The sheet title props
 * @param root0.className Optional CSS class name
 * @param root0.props Additional props passed to the div element
 * @return The rendered sheet title element
 */
const SheetTitle = ({
    className,
    ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) => {
    return (
        <SheetPrimitive.Title
            className={cn("text-foreground font-semibold", className)}
            data-slot={"sheet-title"}
            {...props}/>
    );
};

/**
 * Sheet description component wrapper around SheetPrimitive.Description.
 *
 * @param root0 The sheet description props
 * @param root0.className Optional CSS class name
 * @param root0.props Additional props passed to the div element
 * @return The rendered sheet description element
 */
const SheetDescription = ({
    className,
    ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) => {
    return (
        <SheetPrimitive.Description
            className={cn("text-muted-foreground text-sm", className)}
            data-slot={"sheet-description"}
            {...props}/>
    );
};

export {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
};
