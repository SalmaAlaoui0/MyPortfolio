

export const ButtonV2 = ({ className = "", size = "default", children, ...props}) => {
    const baseClasses = "relative font-inria font-bold overflow-hidden rounded-full font-meduim focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-primary-foreground border-[#BB8ED0] border-2 shadow-lg shadow-primary/35 cursor-pointer"; 
    // bg-[#BB8ED0] hover:bg-primary/90
    
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    }
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
    return (    
        <button className={classes} {...props}>
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
};


//   return (    
//     <button className={`rounded-full px-4 py-2 ${className}`}>
//       <span className="flex items-center justify-center gap-2">
//         {children}
//       </span>
//     </button>
//   );
// };