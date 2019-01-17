
const actorReducer = (state = [] , action) => {

    switch(action.type){

        case 'GET_ACTORS':
            state = action.val.result;
            return state;
            
        case 'ADD_ACTOR':
            const newAddedState = [...state];
            console.log(newAddedState)
            newAddedState.push(action.val.result[0]);
            console.log(newAddedState);
            return newAddedState

        case 'EDIT_ACTOR' : 
            const updatedActorState = [...state];
            const indexOfActordObject = updatedActorState.findIndex(obj => obj.actorid === action.val.id);
            updatedActorState.splice(indexOfActordObject,1,action.val.result[0])
            return updatedActorState
        
        case 'DELETE_ACTOR' :
            const newUpdatedActorState = [...state];
            const newActors = newUpdatedActorState.filter(element => element.actorid !== action.val);
            return newActors

        default :
        return state;
    }
};



export default actorReducer;