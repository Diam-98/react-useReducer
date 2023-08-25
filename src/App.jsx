import { useReducer } from "react";
import { data } from "./data";
import { reducer } from "./reducer";
import { CLEAR_ITEM, REMOVE_ITEM, RESET_ITEM } from "./action";

const defauteState = {
  people: data,
};

function App() {
  const [state, dispatch] = useReducer(reducer, defauteState);

  const clearItem = () => {
    dispatch({ type: CLEAR_ITEM });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const resetItem = () => {
    dispatch({ type: RESET_ITEM });
  };

  return (
    <>
      <div className='main'>
        <div className='person-list'>
          {state.people.map((person) => {
            return (
              <div className='person' key={person.id}>
                <h1>{person.name}</h1>
                <button onClick={() => removeItem(person.id)}>Supprimer</button>
              </div>
            );
          })}
        </div>
        {state.people.length > 0 ? (
          <button className='btn' onClick={clearItem}>
            Suprimer tous
          </button>
        ) : (
          <button className='btn' onClick={resetItem}>
            Reunitialiser
          </button>
        )}
      </div>
    </>
  );
}

export default App;
