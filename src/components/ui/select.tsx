"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <div className="relative">
    <select
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white",
        "focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "appearance-none",
        className
      )}
      {...props}
    >
      {children}
    </select>
    <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-white/50 pointer-events-none" />
  </div>
));
Select.displayName = "Select";

const StyledOption = React.forwardRef<
  HTMLOptionElement,
  React.OptionHTMLAttributes<HTMLOptionElement>
>(({ className, children, ...props }, ref) => (
  <option
    ref={ref}
    className={cn(
      "bg-[#1a2236] text-white py-2 px-3 cursor-pointer",
      "hover:bg-blue-500/10",
      className
    )}
    {...props}
  >
    {children}
  </option>
));
StyledOption.displayName = "Option";

export { Select, StyledOption as Option }; 