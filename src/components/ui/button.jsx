import * as React from "react";
import { cn } from "../../lib/utils";


const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md bg-purple-600 text-white font-medium py-2 px-4 hover:bg-purple-700 transition-all",
      className
    )}
    {...props}
  />
));
Button.displayName = "Button";

export { Button };

