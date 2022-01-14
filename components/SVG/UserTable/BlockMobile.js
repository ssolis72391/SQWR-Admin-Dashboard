export default function BlockMobile({ active }) {
  let icon = (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 0 1-8-8 7.92 7.92 0 0 1 1.71-4.92.91.91 0 0 0 .08.13l11.11 11.1A7.92 7.92 0 0 1 10 18Zm6.31-3.1L5.21 3.79a.91.91 0 0 0-.13-.08A7.92 7.92 0 0 1 10 2a8 8 0 0 1 8 8 7.92 7.92 0 0 1-1.69 4.9Z"
        fill="#A3A3A3"
      />
    </svg>
  );

  if (active) {
    icon = (
      <svg
        width="20"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 0 1-8-8 7.92 7.92 0 0 1 1.71-4.92.91.91 0 0 0 .08.13l11.11 11.1A7.92 7.92 0 0 1 10 18Zm6.31-3.1L5.21 3.79a.91.91 0 0 0-.13-.08A7.92 7.92 0 0 1 10 2a8 8 0 0 1 8 8 7.92 7.92 0 0 1-1.69 4.9Z"
          fill="#FE0000"
        />
      </svg>
    );
  }
  return icon;
}
