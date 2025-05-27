const PrimaryButton = ({ text, icon, className, ...props }) => {
  return (
    <button
      {...props}
      className={`rounded-full text-xl poppins uppercase bg-[var(--green)] text-white hover:text-[var(--dark)] font-bold hover:bg-white hover:outline-1 outline-[var(--green)] transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-3 ${className}`}
    >
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default PrimaryButton;
