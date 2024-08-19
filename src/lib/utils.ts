import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function enumReader(value: string): string {
  let formattedValue: string;

  formattedValue =
    value.charAt(0) + value.replaceAll('_', ' ').slice(1).toLowerCase();

  return formattedValue;
}

export { cn, enumReader };
