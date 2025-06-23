import { MODAL_KEYS } from "@/modules/modal/redux/entities/modal-keys";
import { actions } from "@/redux/actions";
import { createReducer } from "@reduxjs/toolkit";

interface State {
  history: {
    type: "open" | "close";
    key: MODAL_KEYS;
    value: unknown | null;
  }[];
  current: MODAL_KEYS | null;
}

const initialState: State = {
  history: [],
  current: null,
};

export const modal_reducer = createReducer(initialState, (builder) => {
  builder.addCase(actions.modal.store, (state, action) => {
    state.history.push({
      type: action.payload.action,
      key: action.payload.key,
      value: action.payload.value,
    });

    state.current = action.payload.key;
  });

  builder.addCase(actions.modal.store_current_key, (state, action) => {
    state.current = action.payload.key;
  });

  builder.addCase(actions.global.logout, () => {
    return initialState;
  });
});
