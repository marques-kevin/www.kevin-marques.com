import { actions } from "@/redux/actions";
import { useAppDispatch } from "@/redux/store";
import { useLocation } from "@reach/router";
import { useEffect } from "react";

export const GlobalLocationStateListener = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(actions.global.pop_state_triggered());
  }, [location.href]);

  return null;
};
