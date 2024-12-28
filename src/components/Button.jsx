export function Button({
  children,
  variant = "primary",
  rounded,
  size = "md",
  ...props
}) {
  const variants = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-300 text-gray-800",
    destructive: "bg-red-500 text-white",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    icon: "p-2",
  };

  return (
    <button
      className={`${variants[variant]} ${rounded ? "rounded-full" : "rounded-lg"}
        ${sizes[size]}
      flex items-center gap-2 transition-colors hover:bg-opacity-50 border`}
      {...props}
    >
      {children}
    </button>
  );
}
