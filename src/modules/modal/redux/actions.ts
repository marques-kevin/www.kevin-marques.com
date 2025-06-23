import { addHash, removeHash } from "@/lib/utils";
import { MODAL_KEYS } from "@/modules/modal/redux/entities/modal-keys";
import { AsyncThunkConfig } from "@/redux/store";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const store_current_key = createAction<{ key: MODAL_KEYS }>(
  "modal/store_current_key"
);

export const store = createAction<{
  key: MODAL_KEYS;
  value: unknown;
  action: "open" | "close";
}>("modal/store");

export const sync = createAsyncThunk<void, void, AsyncThunkConfig>(
  "modal/sync",
  async (payload, { extra, dispatch }) => {
    const hash = extra.LocationService.getHash();

    const key = hash.replace("#", "").split("&").pop() || "";

    dispatch(store_current_key({ key: key as MODAL_KEYS }));
  }
);

export const open = createAsyncThunk<
  void,
  { key: MODAL_KEYS; value?: unknown },
  AsyncThunkConfig
>("modal/open", async (payload, { extra, dispatch }) => {
  extra.LocationService.navigate(
    addHash({
      path: payload.key,
      currentHash: extra.LocationService.getHash(),
      value: payload.value as string,
    })
  );

  dispatch(store({ key: payload.key, value: payload.value, action: "open" }));
  dispatch(sync());
});

export const close = createAsyncThunk<
  void,
  { key: MODAL_KEYS },
  AsyncThunkConfig
>("modal/close", async (payload, { extra, dispatch }) => {
  extra.LocationService.navigate(
    removeHash({
      path: payload.key,
      currentHash: extra.LocationService.getHash(),
    })
  );

  dispatch(store({ key: payload.key, value: null, action: "close" }));
  dispatch(sync());
});
