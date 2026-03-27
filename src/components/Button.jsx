

export const Button = ({ className = "", children }) => {
    const baseClasses = "relative overflow-hidden rounded-full font-meduim focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90";
    
    const classes = baseClasses;
    return (    
        <button className={classes}>
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