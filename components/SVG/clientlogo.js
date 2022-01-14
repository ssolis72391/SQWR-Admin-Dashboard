export default function ClientLogo() {
  return (
    <div>
      <svg
        width="74"
        height="74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="74" height="74" rx="22" fill="#F7F7F7" />
        <path d="m61.9 22.4-25 13.8v28.9l25-14.4V22.4Z" fill="url(#a)" />
        <path d="m12 22.4 25 13.8v28.9L12 50.7V22.4Z" fill="url(#b)" />
        <path
          d="M37 8 12 22.4l25 13.8 24.9-13.8L37.1 8Zm-6 22.7L17 22.4 37 10.8 51.2 19 31.1 30.7Z"
          fill="#8097FF"
        />
        <defs>
          <linearGradient
            id="a"
            x1="55.6"
            y1="54.4"
            x2="43.1"
            y2="32.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8097FF" stopOpacity="0" />
            <stop offset="1" stopColor="#8097FF" />
          </linearGradient>
          <linearGradient
            id="b"
            x1="18.3"
            y1="54.4"
            x2="30.8"
            y2="32.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8097FF" stopOpacity="0" />
            <stop offset="1" stopColor="#8097FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
