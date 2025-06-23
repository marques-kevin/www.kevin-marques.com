import { useModal } from "@/lib/use-modal";
import { MODAL_KEYS } from "@/modules/modal/redux/entities/modal-keys";
import { Avatar } from "@/ui";
import BoringAvatar from "boring-avatars";
import { connector, ContainerProps } from "./navbar-user.container";

export const Wrapper: React.FC<ContainerProps> = (props) => {
  const drawer = useModal(MODAL_KEYS.USER_DRAWER);

  return (
    <>
      <Avatar
        className="h-8 w-8 cursor-pointer rounded-full"
        onClick={drawer.onOpenChange}
      >
        <BoringAvatar
          size={32}
          name={props.user.email}
          variant="beam"
          colors={["#fee2e2", "#fed7aa", "#d9f99d", "#a5f3fc", "#f5d0fe"]}
        />
      </Avatar>
    </>
  );
};

export const NavbarUser = connector(Wrapper);
