import Item1 from '../../images/pic01.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/pic02.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import Item7 from '../../images/item7.jpg'
import Item8 from '../../images/item8.jpg'
import Item9 from '../../images/item9.jpg'


import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Garrett G25-550', desc: "The Garrett G-Series G25-550 advanced small frame ball bearing turbocharger; including a Garrett stainless steel V-Band Inlet & V-Band Outlet .72 A/R turbine housing (Garrett Part #871389-5004S). 550HP from a small frame package!", price:1299,img:Item1},
        {id:2,title:'Garrett GenII GTX4709R', desc: "Garrett Gen2 GTX4709R-76mm dual ball bearing turbocharger with a TiAL 1.17 A/R stainless turbine housing. Featuring 15% increased flow, larger compressor housing, and 39% lower intertia.", price:4095,img: Item2},
        {id:3,title:'Holset HX40', desc: "Holset HX40 Turbochargers are developed for 7 to 10 liter engines operating in the medium/light heavy automotive sector this Holset Turbocharger has many of the features found in the Holset heavy-duty range of products.",price:690,img: Item3},
        {id:4,title:'Holset HX35', desc: "Holset HX35 Turbochargers are designed primarily for 6 cylinder engines of 5.0 to 6.5 liter capacity, the Holset HX35 turbocharger has high flow aerodynamics capable of providing up to 0.46 kg/s at 3.0:1 pressure ration.", price:645,img:Item4},
        {id:5,title:'Emusa T70', desc: "This is a High Quality Turbo, with Big Wheels, Good For 400 to 500 HP Applications, Such as Mustang, Supra, RX7, and other 4-Clyn Engines with high Power Setup. Civic B18, B20, 240SX SR20DET, RB20, RB25, Eclipse 4G63.", price:159,img:Item5},
        {id:6,title:'Garrett GEN2 GTX5020R', desc: "Garrett GEN2 GTX5020R - 88mm (aka GEN2 GTX50-88 and GEN2 GTX8891) dual ball bearing turbocharger with a TiAL 1.17 A/R stainless steel turbine housing.", price:4395,img:Item6},
        {id:7,title:'Garrett GEN2 GTX3071R', desc: "Garrett GEN2 GTX3071R dual ball bearing turbocharger, including T3 Inlet, 4 Bolt (T31 Narrow) Outlet, .63 A/R Turbine Housing (ATP-HSG-055). Advanced GEN2 billet compressor wheel capable of 650HP!", price:1739,img:Item7},
        {id:8,title:'Garrett GTX3071R w/Compact Comp', desc: "Garrett GEN2 GTX3071R dual ball bearing turbocharger configured as a direct drop-in upgrade for existing setups with a Garrett GT2860RS or GT2871R including T25 Inlet, internally gated, and 5 bolt outlet turbine housing! Advanced GEN2 billet compressor wheel capable of 650HP!", price:1899,img:Item8},
        {id:9,title:'Garrett GT5533R', desc: "Turbo, Ball Bearing Garrett GT5533R (aka GT55R) . Capable of close to 1600HP! Compressor wheel diameter is 133mm exd. / 91.2mm ind. (47trim) Compressor housing is .69 A/R has a 6 inch inlet and 3.5 inch outlet slip on connection. Turbine housing uses a T6 undivided inlet and 5 inch V-band outlet.", price:3389,img:Item9},   
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 25
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 25
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
