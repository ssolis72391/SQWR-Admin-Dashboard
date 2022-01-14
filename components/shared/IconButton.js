import SendMobile from '../SVG/SendMobile';
import SendDesktop from '../SVG/SendDesktop';

export default function IconButton({ children }) {
  return (
    <div className="flex border-primary border-2 text-primary rounded-2xl px-5 lg:px-6 py-3 lg:py-4  items-center">
      <div className="block lg:hidden">
        <SendMobile />
      </div>
      <div className="hidden lg:block">
        <SendDesktop />
      </div>
      <span className="ml-3 lg:ml-4">{children}</span>
    </div>
  );
}
