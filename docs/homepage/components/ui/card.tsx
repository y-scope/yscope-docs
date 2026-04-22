import * as React from "react";

import {cn} from "@/lib/utils";


/**
 * Card container component.
 *
 * @param root0 props object for the root div
 * @param root0.className additional className for the container
 * @param root0.props other div props spread onto the container
 * @return Card component.
 */
const Card = ({className, ...props}: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot={"card"}
            className={cn(
                "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
                className
            )}
            {...props}/>
    );
};

/**
 * Card header component with grid layout for title, description, and actions.
 *
 * @param root0 props object for the root div
 * @param root0.className additional className for the header
 * @param root0.props other div props spread onto the header
 * @return CardHeader component.
 */
const CardHeader = ({className, ...props}: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot={"card-header"}
            className={cn(
                "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start " +
                "gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
                className
            )}
            {...props}/>
    );
};

/**
 * Card title component displaying the card's heading.
 *
 * @param root0 props object for the root div
 * @param root0.className additional className for the title
 * @param root0.props other div props spread onto the title
 * @return CardTitle component.
 */
const CardTitle = ({className, ...props}: React.ComponentProps<"div">) => {
    return (
        <div
            className={cn("leading-none font-semibold", className)}
            data-slot={"card-title"}
            {...props}/>
    );
};

/**
 * Card description component displaying supplementary text.
 *
 * @param root0 props object for the root div
 * @param root0.className additional className for the description
 * @param root0.props other div props spread onto the description
 * @return CardDescription component.
 */
const CardDescription = ({className, ...props}: React.ComponentProps<"div">) => {
    return (
        <div
            className={cn("text-muted-foreground text-sm", className)}
            data-slot={"card-description"}
            {...props}/>
    );
};

/**
 * Card action component for interactive elements in the header.
 *
 * @param root0 props object for the root div
 * @param root0.className additional className for the action
 * @param root0.props other div props spread onto the action
 * @return CardAction component.
 */
const CardAction = ({className, ...props}: React.ComponentProps<"div">) => {
    return (
        <div
            data-slot={"card-action"}
            className={cn(
                "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
                className
            )}
            {...props}/>
    );
};

/**
 * Card content component for the main body of the card.
 *
 * @param root0 props object for the root div
 * @param root0.className additional className for the content
 * @param root0.props other div props spread onto the content
 * @return CardContent component.
 */
const CardContent = ({className, ...props}: React.ComponentProps<"div">) => {
    return (
        <div
            className={cn("px-6", className)}
            data-slot={"card-content"}
            {...props}/>
    );
};

/**
 * Card footer component for actions or additional information.
 *
 * @param root0 props object for the root div
 * @param root0.className additional className for the footer
 * @param root0.props other div props spread onto the footer
 * @return CardFooter component.
 */
const CardFooter = ({className, ...props}: React.ComponentProps<"div">) => {
    return (
        <div
            className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
            data-slot={"card-footer"}
            {...props}/>
    );
};

export {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
};
