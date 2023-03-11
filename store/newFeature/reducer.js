
const initialState = {
    isLoading: false,
    data:[]
}
const reducers=(state = initialState,actions) =>{
    switch(actions.type){
        case "CreateFeature":
            return {...state, data:actions.payload};
        default:
            return {...state}
    }

}