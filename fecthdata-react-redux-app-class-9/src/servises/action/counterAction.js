import {INCRIMENT,DECRIMENT,RESET} from '/data/data/com.termux/files/home/redux-all-class/fecthdata-react-redux-app-class-9/src/servises/constans/counterConstans.js'
 export const incrimentAction=()=>{
return {
     type:INCRIMENT,
}
 }
 export const deccrimentAction=()=>{
   return {
     type:DECRIMENT,
   }
 }
 export const resetAction=()=>{
   return {
     type:RESET,
   }
 }