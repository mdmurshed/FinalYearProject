import { ADD_ITEM,REMOVE_ITEM } from './cardType'

const initialState = {
    cardItem:[]
}
// const cardItem=[];
const temo = {
    item:'item 1',
    numOfItems:1,
    price:12
}
// const item2 = {
//     item:'item 2',
//     numOfItems:1,
//     price:12
// }
// const item3 = {
//     item:'item 3',
//     numOfItems:1,
//     price:12
// }
// const item4 = {
//     item:'item 4',
//     numOfItems:1,
//     price:12
// }

// cardItem.push(item1)
// cardItem.push(item2)
// cardItem.push(item3)
// cardItem.push(item4)
// console.log(cardItem.length)
// console.log(cardItem[2].numOfItems)
// cardItem.map(data=>{
//     console.log(data)
// })

const reducer = (state= initialState,action)=>{
    switch(action.type){
        case ADD_ITEM: return { 
          
        }
        case  REMOVE_ITEM: return {
           
        }
        default: return state
    }
}
export default reducer