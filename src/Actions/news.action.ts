import { pathOr } from 'ramda';
import { ACTION_TYPES } from '.';
import {NewsApiHandler} from '../Services';
import { Newsstory } from '../types';
import { toggleAppScreenLoader } from './appLoader.action';

const getStateData = (getState: any) => getState()

export const getHackerNews = (index: number) => {
  return async (dispatch: any, getState: any) => {
    console.log('index------', index);
    dispatch(toggleAppScreenLoader(true));
    clearAllData(dispatch);
    const newsResponse = await NewsApiHandler.getNewsStorysId(index);
    dispatch({
      type:
        index === 0
          ? ACTION_TYPES.NEWS_ACTIONS.SET_NEWS_STORYS_IDS
          : ACTION_TYPES.JOB_ACTIONS.SET_JOB_STORYS_IDS,
      payload: newsResponse.data,
    });
    await getAllNewsDetailFromIds(
      (newsResponse.data as Array<number>).slice(0, 15),
      dispatch,
      getState,
      index,
    );
    dispatch(toggleAppScreenLoader(false));
  }
};


export const getNewsItemDetail = (id: number) => {
  return NewsApiHandler.getNewsStoryDetail(id);
};

const getAllNewsDetailFromIds = async (
  ids: Array<number>,
  dispatch: any,
  getState: any,
  index: number,
) => {
  const state = getState();
  const oldNewsItems = pathOr(
    [],
    ['NewsIdsSlice', index === 0 ? 'newsItemsDetail' : 'jobItemsDetail'],
    state,
  );
  const arrayNewsStory: Array<Newsstory> = [];
  await Promise.all(
    ids.map(async (id: number) => {
      const response = await getNewsItemDetail(id);
      arrayNewsStory.push(response.data as Newsstory);
    }),
  );
  dispatch({
    type:
      index === 0
        ? ACTION_TYPES.NEWS_ACTIONS.SET_NEWS_STORYS_ITEM
        : ACTION_TYPES.JOB_ACTIONS.SET_JOB_STORYS_ITEM,
    payload: [...oldNewsItems, ...arrayNewsStory].sort(
      (a, b) => b.time - a.time,
    ),
  });
};

export const getLoadMoreItem = (index: number) => {
  return async (dispatch: any, getState: any) => {
    setIndicatorOn(dispatch, true);
    const state = getStateData(getState);
    const newIds = pathOr(
      [],
      ['NewsIdsSlice', index === 0 ? 'newsids' : 'jobids'],
      state,
    );
    const IdsCount = pathOr(
      [],
      ['NewsIdsSlice', index === 0 ? 'newsItemsDetail' : 'jobItemsDetail'],
      state,
    ).length;
    const start = IdsCount + 1;
    await getAllNewsDetailFromIds(
      newIds.slice(start, start + 15),
      dispatch,
      getState,
      index,
    );
    setIndicatorOn(dispatch, false);
  };
};


export const getCommentItems = (ids: Array<number>) => {
  return async (dispatch: any, getState: any) => {
    dispatch(toggleAppScreenLoader(true));
     dispatch({
       type: ACTION_TYPES.NEWS_ACTIONS.SET_COMMENTS_ITEM,
       payload: [],
     });
    const state = getStateData(getState);
    const oldCommentsIds = pathOr([], ['NewsIdsSlice', 'commentsItems'], state);
    const arrayCommets: Array<Newsstory> = [];
    await Promise.all(
      ids.map(async (id: number) => {
        const response = await getNewsItemDetail(id);
        arrayCommets.push(response.data as Newsstory);
      }),
    );
    dispatch({
      type: ACTION_TYPES.NEWS_ACTIONS.SET_COMMENTS_ITEM,
      payload: [...oldCommentsIds, ...arrayCommets],
    });
    dispatch(toggleAppScreenLoader(false));
  };
};

const clearAllData = (dispatch: any) => {
  dispatch({
    type: ACTION_TYPES.NEWS_ACTIONS.SET_COMMENTS_ITEM,
    payload: [],
  });
  dispatch({
    type: ACTION_TYPES.NEWS_ACTIONS.SET_NEWS_STORYS_ITEM,
    payload: [],
  });
  dispatch({
    type: ACTION_TYPES.JOB_ACTIONS.SET_JOB_STORYS_ITEM,
    payalod: [],
  });
  dispatch({
    type: ACTION_TYPES.NEWS_ACTIONS.SET_NEWS_STORYS_IDS,
    payload: [],
  });
  dispatch({
    type: ACTION_TYPES.JOB_ACTIONS.SET_JOB_STORYS_IDS,
    payload: [],
  });
};

const setIndicatorOn = (dispatch: any, isIndicator: boolean) => {
  dispatch({
    type: ACTION_TYPES.NEWS_ACTIONS.SET_NEWS_INDICATOR,
    payload: isIndicator,
  });
};