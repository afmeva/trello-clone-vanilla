export default (action, state = { listLabel: '', cards: ['editable card'] }) => {

    switch (action.type) {
        case 'ADD_NEW_CARD':
            const newCardObj = action.payload
            console.log('lalala')
            return Object.assign({}, state, {
                cards: [...state.cards, newCardObj]
            })
        case 'CHANGE_LABEL':
            listLabel = action.payload
    }
    return state
}