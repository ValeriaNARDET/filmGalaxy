export default function ( state = null, action ) {
  switch (action.type) {
    case "GANRE_SELECTED": return action.payload;
    break;
    default: return state;
  }
}