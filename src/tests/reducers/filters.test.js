import filterReducer from  '../../reducers/filters';
import moment from 'moment';
import { monitorEventLoopDelay } from 'perf_hooks';

test('setup default filter values',()=>{
    const state = filterReducer(undefined,{ type:'@@INIT'});
    expect(state).toEqual({
            text:'',
            sortBy:'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
    });
});

test('setup sort by amount',()=>{
    const state = filterReducer(undefined,{ type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});
test('setup sort by date',()=>{
    const currenState = {
        text:'',
        startDate: undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const state = filterReducer(currenState,{ type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('setup filter value',()=>{   
    const text ='this is test';
    const action = {
        type:'SET_TEXT_FILTER',
        text
    };
    const state = filterReducer(undefined,action);
    expect(state.text).toBe(text);
});

test('setup sort by start date',()=>{   
    const action = {
        type:'SET_START_DATE',
        startDate:moment(0)
    };
    const state = filterReducer(undefined,action);
    expect(state.startDate).toEqual(moment(0));
});
test('setup sort by end date',()=>{
    const action = {
        type:'SET_END_DATE',
        endDate:moment(0)
    };
    const state = filterReducer(undefined,action);
    expect(state.endDate).toEqual(moment(0));
});