export default (action, state = { listLabel: '', cardList: [] }) => {

    switch (action.type) {
        case 'ADD_NEW_CARD':
            return 'new card?'
        case 'CHANGE_LABEL':
            return 'change label?'
    }
    return state
}