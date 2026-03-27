

export const Button = ({className, size, children }) => {
    // const baseClasses = "relative overflow-hidden rounded-full font-meduim focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90";
    
    // const classes = baseClasses;
    return (    
        <Button>
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </Button>
    );
};