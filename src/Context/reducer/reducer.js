export default function reducer(state, action) {
    switch (action.type) {
      case "SCORE_UP":
        return {
            ...state,
            score: state.score + action.payload
        };
      case "SCORE_DOWN":
        return {
            ...state,
            score: state.score - action.payload
        };
      default:
        return state;
    }
  }
  