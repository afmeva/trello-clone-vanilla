export default (action, state = { listLabel: '', cards: [{ isEditable:true, value:'' }] }) => {

    switch (action.type) {
        case 'ADD_NEW_CARD':
            const newCardObj = action.payload
            return Object.assign({}, state, {
                cards: [...state.cards, newCardObj]
            })
    }
    
    return state
}