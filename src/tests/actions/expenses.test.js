import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense,addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk]);
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
 
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
    });
});


test('test add expense to database and store',(done) => {   
    const store = createMockStore ({});
    const expenseData ={
        description:'mouse',
        amount :3000,
        note:'this is test data',
        createdAt:1000
    };
    store.dispatch(startAddExpense(expenseData)).then(()=>{
       const actions = store.getActions();
       expect(actions[0]).toEqual({
           type:'ADD_EXPENSE',
           expense:{
            id:expect.any(String),
            ...expenseData
           }
       });

       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});


test('test add expense with defaults to database and store',(done) => {   
    const store = createMockStore ({});
    const expenseDefaults = {
        description : '',
        note : '',
        amount : 0,
        createdAt : 0
    };
    store.dispatch(startAddExpense({})).then(()=>{
       const actions = store.getActions();
       expect(actions[0]).toEqual({
           type:'ADD_EXPENSE',
           expense:{
            id:expect.any(String),
            ...expenseDefaults
           }
       });

       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
    });

// test('test add expense with default value',() => {   
//     const action = addExpense();
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//             description:'',
//             note:'',
//             amount :0,
//             createdAt:0,
//             id: expect.any(String)
//         }
//     });
// });