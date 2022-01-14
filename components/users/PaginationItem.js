export default function PaginationItem({ active, children }) {
  return (
    <a
      href="#"
      aria-current="page"
      className={`z-10  relative inline-flex items-center justify-center md:w-11 md:h-11 w-5 h-5 text-xxs md:text-sm font-medium rounded-full md:rounded-2xl ${
        active ? 'bg-grey-light' : 'bg-primary text-grey-dark'
      }`}
    >
      {children}
    </a>
  );
}
