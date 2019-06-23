

//expense reducer
const expensesReducerDefaultState =[];

export default (state = expensesReducerDefaultState , action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense    
        ];  /// use es6 spread operator to populate array
        case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
        return state.map((expense) => {
            if(expense.id === action.id){
                return{
                    ...expense,
                    ...action.updates
                };
            }else{
                return expense;
            }
        });
        case 'SET_EXPENSES':
        return action.expenses;
        default:
        return state;
    }
};