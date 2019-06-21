import expensesReducer from  '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('test default state',()=>{
    const state = expensesReducer(undefined,{ type:'@@INIT'});
    expect(state).toEqual([]);
});

test('test remove expense by id',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([ expenses[0],expenses[2]]);
});

test('test not remove expense if not match id',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('test add expense',()=>{
    const expense ={
        id:'109',
        description:'laptop',
        note:'',
        createdAt:20000,
        amount:25000
    }

    const action = {
        type:'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses,action);

    expect(state).toEqual([...expenses,expense]);
});

test('test edit expense',()=>{
    const action = {
        type:'EDIT_EXPENSE',
        id: '1',
        updates:{
            description:'Gumtree'
        }        
    }
    const state = expensesReducer(expenses,action);
    expect(state[0].description).toEqual(action.updates.description);
});

test('test edit expense if not found',()=>{
    const action = {
        type:'EDIT_EXPENSE',
        id: '-1',
        updates:{
            description:'Gumtree'
        }        
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
      type: 'SET_EXPENSES',
      expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
  });