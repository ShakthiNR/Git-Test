import createNewFeature from "./action"

const getNewData = ()=>{
    const data = setTimeout(()=>{
        return [{id:1,name:"abc"}, {id:2,name:"xyz"}, {id:3,name:"ade"}]
    },2000)
    dispatchEvent(createNewFeature(data))
}