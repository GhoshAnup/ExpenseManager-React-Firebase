import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense',() => {
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    });
});

test('should setup edit expense',() => {
    const action = editExpense('123abc',{note:'new note'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{note:'new note'}
    });
});

test('test add expense with provided value',() => {
    const expenseData ={
        description: 'Rent',
        amount: 100,
        createdAt: 1000,
        note:'This was the last month rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('test add expense with default value',() => {   
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description:'',
            note:'',
            amount :0,
            createdAt:0,
            id: expect.any(String)
        }
    });
});