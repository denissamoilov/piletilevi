import { CompanySelect } from "./components/CompanySelect/CompanySelect";
import { LanguageSelect } from "./components/LanguageSelect/LanguageSelect";
import Navigation from "./components/Navigation/Navigation";
import { Separator } from "@/shared/ui/components";
import { User } from "./components/User/User";
import { ReactComponent as Logo } from "./images/Logo.svg";
export const Header = () => {
  return (
    <div className="h-20 flex items-center justify-between px-10 bg-white shadow-lg sticky top-0 z-20">
      <div className="flex items-center gap-14 h-full">
        <Logo />
        <Navigation />
      </div>
      <div className="flex items-center gap-4 h-[26px]">
        <LanguageSelect className="shrink-0 mr-[1.875rem]" />
        <User name="John Doe" />
        <Separator direction="vertical" />
        <CompanySelect />
      </div>
    </div>
  );
};
