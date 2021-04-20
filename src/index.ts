import { types } from "mobx-state-tree";

export const Hello = types.model("Hello", {
  name: types.string,
});
export const HelloWithSnapshotProcessor = types.snapshotProcessor(Hello, {
  postProcessor: (snap) => {
    const { name, ...rest } = snap;
    if (!name) {
      return rest;
    }

    return snap;
  },
});
