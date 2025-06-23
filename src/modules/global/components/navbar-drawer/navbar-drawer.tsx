import { useModal } from "@/lib/use-modal";
import { cn } from "@/lib/utils";
import { MODAL_KEYS } from "@/modules/modal/redux/entities/modal-keys";
import {
  Avatar,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/ui";
import { Link } from "@reach/router";
import BoringAvatar from "boring-avatars";
import { CodeIcon, HomeIcon, LogOutIcon } from "lucide-react";
import { useIntl } from "react-intl";
import { connector, ContainerProps } from "./navbar-drawer.container";

const DrawerItem: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "hover:bg-accent [&_svg]:size-4 [&_img]:size-4 -ml-2 flex w-full cursor-pointer items-center gap-2 space-x-1 rounded-md px-2 py-2"
      )}
    >
      {children}
    </div>
  );
};

const Wrapper: React.FC<ContainerProps> = (props) => {
  const drawer = useModal(MODAL_KEYS.USER_DRAWER);
  const change_language = useModal(MODAL_KEYS.CHANGE_LANGUAGE);
  const { formatMessage, locale } = useIntl();

  return (
    <Dialog open={drawer.isOpen} onOpenChange={drawer.onOpenChange}>
      <DialogContent>
        <DialogHeader className="text-left">
          <DialogTitle>
            {formatMessage({ id: "user-drawer/title" })}
          </DialogTitle>
          <DialogDescription>
            {formatMessage({ id: "user-drawer/description" })}
          </DialogDescription>
        </DialogHeader>

        <div className="">
          <Link to="/">
            <DrawerItem onClick={() => {}}>
              <HomeIcon />
              {formatMessage({ id: "user-drawer/dashboard" })}
            </DrawerItem>
          </Link>

          <Link to="/developers">
            <DrawerItem onClick={() => {}}>
              <CodeIcon />
              {formatMessage({ id: "user-drawer/developers" })}
            </DrawerItem>
          </Link>

          <DrawerItem onClick={change_language.onOpenChange}>
            <img
              src={`/flags/${locale}.svg`}
              alt={locale}
              className="rounded-full"
            />
            {formatMessage({ id: "user-drawer/change-language" })}
          </DrawerItem>

          <DrawerItem onClick={props.on_logout}>
            <LogOutIcon />
            {formatMessage({ id: "user-drawer/logout" })}
          </DrawerItem>
        </div>

        <div className="border-t"></div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <BoringAvatar
                size={32}
                square
                name={props.user?.email}
                variant="beam"
                colors={["#fee2e2", "#fed7aa", "#d9f99d", "#a5f3fc", "#f5d0fe"]}
              />
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                {props.user?.email}
              </span>
              <span className="truncate text-xs">Free</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const NavbarDrawer = connector(Wrapper);
