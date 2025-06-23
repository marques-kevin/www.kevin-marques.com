import { SelectLanguageModal } from "@/modules/languages/components/select-language-modal/select-language-modal";
import { OrganizationCreateDialog } from "@/modules/organization/components/organization-create-dialog/organization-create-dialog";
import { Logo } from "@/ui/logo/logo";
import { NavbarDrawer } from "../navbar-drawer/navbar-drawer";
import { NavbarTabs } from "../navbar-tabs/navbar-tabs";
import { NavbarUser } from "../navbar-user/navbar-user";

export const Navbar: React.FC = () => {
  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center gap-4 px-4">
          <Logo hideText />
          <div className="hidden items-center gap-4 md:flex">
            <NavbarTabs />
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <NavbarUser />
          </div>
        </div>
      </div>

      <NavbarDrawer />
      <OrganizationCreateDialog />
      <SelectLanguageModal />
    </>
  );
};
