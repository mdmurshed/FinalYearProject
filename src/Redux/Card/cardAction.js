import { ADD_ITEM,REMOVE_ITEM } from './cardType'

export const addCard = (addItm,price)=>{
    return{
        type:ADD_ITEM,
        payload:addItm,
        total:price
    }
}
export const removeCard = ()=>{
    return{
        type:REMOVE_ITEM
    }
}