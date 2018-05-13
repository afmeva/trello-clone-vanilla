export default (action, state = { listLabel: '', cards: ['editable card'] }) => {

    switch (action.type) {
        case 'ADD_NEW_CARD':
            const newCardObj = action.payload
            return Object.assign({}, state, {
                cards: [...state.cards, newCardObj]
            })
    }
    
    return state
}