import * as actionTypes from '../../action/action';

const initialState = {
    results : []
}

const reducer = (state = initialState, action) => {
    const provideID= state.results.length;
    if (action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            results : state.results.concat({ value : action.counter , id : provideID + 1 })
        }
    }
    if(action.type === actionTypes.DELETE_RESULT){
        // One way to delete element in an array immutably
        // const newArray = [...state.results];
        // newArray.splice(action.id , 1);

        // Another way to delete element in an array immutably
        const updatedArray = state.results.filter( result => result.id !== action.id)          
        // console.log(updatedArray);
        return{
            ...state,
            results : updatedArray
        }
    }
    
    return state;
};

export default reducer;