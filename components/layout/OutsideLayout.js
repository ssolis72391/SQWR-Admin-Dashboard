import BrushXDesktop from '../SVG/Auth/BrushXDesktop';
import ClientLogoDesktop from '../SVG/Auth/ClientLogoDesktop';
import ClientLogoMobile from '../SVG/Auth/ClientLogoMobile';
import BrushXMobile from '../SVG/Auth/BrushXMobile';
import LogoDesktop from '../SVG/Auth/LogoDesktop';
import LogoMobile from '../SVG/Auth/LogoMobile';

export default function OutsideLayout({ children }) {
  return (
    <div className="w-screen h-screen flex  xl:flex-row flex-col bg-white">
      <div className="w-full xl:w-5/12 xl:h-full h-2/5 bg-white xl:from-primary xl:to-orange xl:bg-gradient-to-tr flex items-center justify-center">
        <div className=" flex flex-col items-center h-full xl:h-1/2 justify-between pt-6 xl:py-0">
          <div className="hidden xl:block">
            <ClientLogoDesktop />
          </div>
          <div className="xl:hidden block">
            <ClientLogoMobile />
          </div>
          <div className="hidden xl:block">
            <BrushXDesktop />
          </div>
          <div className="xl:hidden block">
            <BrushXMobile />
          </div>

          <div className="hidden xl:block">
            <LogoDesktop />
          </div>
          <div className="xl:hidden block">
            <LogoMobile />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
