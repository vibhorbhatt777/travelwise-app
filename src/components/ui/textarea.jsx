import * as React from "react";
import { cn } from "../../lib/utils";


const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn("w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-white placeholder-gray-400", className)}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
