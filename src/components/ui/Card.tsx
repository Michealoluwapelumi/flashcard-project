import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  glass?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", hoverable = false, glass = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          rounded-[var(--radius-card)] 
          bg-surface 
          border border-border 
          text-text 
          shadow-sm 
          transition-all 
          duration-300 
          ${hoverable ? "hover:shadow-xl hover:-translate-y-1 hover:border-primary/30" : ""}
          ${glass ? "backdrop-blur-md bg-surface/75" : ""}
          ${className}
        `}
        {...props}
      />
    );
  },
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => {
    return <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />;
  },
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className = "", ...props }, ref) => {
    return <h3 ref={ref} className={`text-xl font-semibold leading-none tracking-tight ${className}`} {...props} />;
  },
);
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className = "", ...props }, ref) => {
    return <p ref={ref} className={`text-sm text-muted ${className}`} {...props} />;
  },
);
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => {
    return <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />;
  },
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => {
    return <div ref={ref} className={`flex items-center p-6 pt-0 border-t border-border/50 mt-6 ${className}`} {...props} />;
  },
);
CardFooter.displayName = "CardFooter";
