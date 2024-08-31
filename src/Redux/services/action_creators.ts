

interface serviceType  {
    heading: string,
    details: string
    imageSrc: string,
    imageAlt: string,
    linkUrl: string
    videoSrc: string
  }

type AllserviceType = Array<serviceType>
type AddServiceCommand = "Add services" 

type AddServiceActionType = {
    type: AddServiceCommand,
    payload: AllserviceType
}
 
const AddServiceCreator:(arg:AllserviceType)=>AddServiceActionType=(arg)=>{
   const  action = {
        type: "Add services" as const,
        payload: arg
    };
    return action;
}


// The following is unfinished work. 
// const allData = [

// ]
// const addAction = {
//     type: "Add services" as const,
//     // payload:
// }
// AddServiceCreator()







export default AddServiceCreator;
export type {AddServiceActionType, AllserviceType, serviceType}


