import {
    type ClassValue,
    clsx,
} from "clsx";
import {twMerge} from "tailwind-merge";


/**
 * Combine multiple class name inputs into a single string and merge Tailwind classes.
 *
 * @param inputs Class name values to merge.
 * @return The merged className string with Tailwind classes resolved.
 */
const cn = (...inputs: ClassValue[]): string => {
    return twMerge(clsx(inputs));
};

export {cn};
