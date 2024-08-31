import type { AddServiceActionType, AllserviceType } from "./action_creators"
import wasteBinsVideos from "/src/assets/waste_images/services_videos/waste-bin.mp4"
import recyclingVideo from "/src/assets/waste_images/services_videos/waste-recycle.mp4"
import pickupVideo from "/src/assets/waste_images/services_videos/waste-pickup.mp4"
import wasteDisposalBin from '/src/assets/waste_images/services-svg/noun-full-recycle-bin-2224151.svg' 
import recycle from '/src/assets/waste_images/services-svg/service-recycle.svg'
import wasteBin from '/src/assets/waste_images/services-svg/trash-svgrepo-com.svg'




const serviceAdding = "Add services" as const ;
type InitialStateType =  AllserviceType

const initialState: InitialStateType =  [
    {
      heading: "Waste Disposal",
      details: 'We are commited to proper waste disposal so we offer free waste disposal. Feel free to request a pickup of your garbage.',
      videoSrc: pickupVideo,
      imageAlt: "dumpster image",
      imageSrc: wasteDisposalBin,
      linkUrl: "#"
    },
    {
        heading: "Waste recycling",
        details: "Generating wealth from waste, we see recyclable waste as valueable and would be happy to pick up your sorted recyclable waste.",
        imageAlt: "recycle icon",
        imageSrc: recycle,
        linkUrl:"#",
        videoSrc: recyclingVideo
    },
    {
        heading: "Waste Bin",
        details: "Our smart waste bins are design to efficiently hold waste and alert us on the need for pickup. Make an order and it'll be at your doorstep soon.",
        imageAlt: "Waste Bin",
        imageSrc: wasteBin,
        linkUrl: "#",
        videoSrc: wasteBinsVideos
    }
  ] 
type servicesReducerType = (arg:InitialStateType,arg2: AddServiceActionType)=>InitialStateType
const servicesReducer:servicesReducerType= (state = initialState, action)=>{
        switch(action.type){
            case serviceAdding:
                const newState = [...state, ...action.payload]
                return newState
            default:
                let nothing: never = action.type;
                nothing
                return state;
        }
};
export default servicesReducer;
export type {AllserviceType}