import { ADD_ITEM, REMOVE_ITEM } from './cardType'

const initialState = {
    cardItem: []
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: return {
            cardItem: action.payload
        }
        case REMOVE_ITEM: return {
            cardItem:[]
        }
        default: return state
    }
}
export default reducer