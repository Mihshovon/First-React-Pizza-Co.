import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-3 py-2 md:px-3 md:py-2 text-xs",
    secondary:
      "inline-block text-sm rounded-full border-2 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

    if (onClick) return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
    </button>
    )

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}