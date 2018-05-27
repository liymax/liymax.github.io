import produce from "immer";
import global from "./global";
import user from "./user";

function reduce(state, actionType) {
  const { mod, stateName, data } = actionType;
  return produce(state, draft => {
    draft[mod][stateName] = data;
  });
}

export default {
  initState: {
    global,
    user
  },
  reduce
};
