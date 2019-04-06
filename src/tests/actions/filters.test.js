import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate,setStartDate,setEndDate } from '../../actions/filters';


test('should setup start date',() => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    });
});

test('should setup end date',() => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    });
});

test('should setup sortByDate',() => {
    const action = sortByDate();
    expect(action).toEqual({ type:'SORT_BY_DATE'});
});

test('should setup sortByAmount',() => {
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});

test('should setup setTextFilter Default',() => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    });
});

test('should setup setTextFilter with param',() => {
    const action = setTextFilter('F');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'F'
    });
});