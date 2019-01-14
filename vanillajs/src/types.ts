import { Dispatch as ReduxDispatch } from 'redux'
import { NextSlideAction, PreviousSlideAction } from './actions';

export interface AppState {
  images: string[];
  currentSlideIndex: number;
}

export type ActionTypes = NextSlideAction |
  PreviousSlideAction;

export type Dispatch = ReduxDispatch<ActionTypes>;