export default function H1({ className, children }) {
  return (
    <h1
      className={`${className} text-lg lg:text-3xl font-medium lg:font-semibold`}
    >
      {children}
    </h1>
  );
}
