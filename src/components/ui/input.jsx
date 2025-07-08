import * as React from "react";
import { cn } from "../../lib/utils";


const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn("flex h-10 w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-white placeholder-gray-400", className)}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };

