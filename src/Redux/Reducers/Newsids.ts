import {ACTION_TYPES} from '../../Actions';
const {NEWS_ACTIONS, JOB_ACTIONS} = ACTION_TYPES;
import {Newsstory} from '../../types';

// create initialState like Default value of Variable
// newids / jobids:- all News Stories id
// newsItemsDetail / jobItemsDetail:- get detail from newsids
// commentsItems: Comments of particular Story and handle by select
const initialState = {
  newsids: Array<number>(),
  newsItemsDetail: Array<Newsstory>(),
  jobids: Array<number>(),
  jobItemsDetail: Array<Newsstory>(),
  commentsItems: Array<Newsstory>(),
  loading: false,
  isIndicator: false,
};

// create Slice to handle the all data into store
const NewsIdsSlice = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case NEWS_ACTIONS.SET_NEWS_STORYS_IDS:
      return {...state, newsids: action.payload};
    case NEWS_ACTIONS.SET_NEWS_STORYS_ITEM:
      return {...state, newsItemsDetail: action.payload};
    case JOB_ACTIONS.SET_JOB_STORYS_IDS:
      return {...state, jobids: action.payload};
    case JOB_ACTIONS.SET_JOB_STORYS_ITEM:
      return {...state, jobItemsDetail: action.payload};
    case NEWS_ACTIONS.SET_COMMENTS_ITEM:
      return {...state, commentsItems: action.payload};
    case NEWS_ACTIONS.SET_NEWS_INDICATOR:
      return {...state, isIndicator: action.payload};
    case ACTION_TYPES.TOGGLE_APP_LOADING:
      return {...state, loading: action.payload};
    default:
      return state;
  }
};

export default NewsIdsSlice;