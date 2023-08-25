import { CLEAR_ITEM, REMOVE_ITEM, RESET_ITEM } from "./action";
import { data } from "./data";

export const reducer = (state, action) => {
  if (action.type == CLEAR_ITEM) {
    return { ...state, people: [] };
  } else if (action.type == REMOVE_ITEM) {
    const newPeople = state.people.filter(
      (person) => person.id != action.payload.id
    );
    return { ...state, people: newPeople };
  } else if (action.type == RESET_ITEM) {
    return { ...state, people: data };
  }
};
