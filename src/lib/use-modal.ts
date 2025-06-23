import { MODAL_KEYS } from "@/modules/modal/redux/entities/modal-keys";
import { actions, useAppDispatch } from "@/redux/store";
import { useLocation } from "@reach/router";

export const useModal = (key: MODAL_KEYS) => {
  const dispatch = useAppDispatch();
  const { hash } = useLocation();

  const isOpen = hash.replace("#", "").split("&").pop() === key;

  const onOpenChange = () => {
    if (isOpen) {
      dispatch(actions.modal.close({ key }));
    } else {
      dispatch(actions.modal.open({ key }));
    }
  };

  return { isOpen, onOpenChange };
};
