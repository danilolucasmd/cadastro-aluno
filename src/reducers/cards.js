const cards = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CARD':
            if(state.length) {
                return [
                    ...state,
                    {...state[state.length-1]},
                ]
            }

            return [
                ...state,
                {...action.card},
            ];
        case 'CHANGE_FIELD':
            const cards = [...state];

            cards[action.index][action.field] = action.value;

            return cards;
        default:
            return state;
    }
};

export default cards;
