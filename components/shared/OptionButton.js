/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
export default function OptionButton({ onClick, active, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        active
          ? 'border-primary bg-opacity-20 bg-primary'
          : 'bg-grey-light border-grey-light'
      } lg:py-4 py-3 px-4 lg:px-8 rounded-lg lg:rounded-2xl border-1 font-medium hover:bg-opacity-20 hover:bg-primary text-xs lg:text-base pointer`}
    >
      {children}
    </button>
  );
}
