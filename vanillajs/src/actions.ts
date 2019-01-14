import { Action } from 'redux'
import { NEXT_SLIDE, PREVIOUS_SLIDE } from './constants'

export interface NextSlideAction extends Action<typeof NEXT_SLIDE> {
}

export function nextSlide (): NextSlideAction {
  // TODO: Handle action creation
  throw new Error('Not implemented');
}

export interface PreviousSlideAction extends Action<typeof PREVIOUS_SLIDE> {
}

export function previousSlide (): PreviousSlideAction {
  // TODO: Handle action creation
  throw new Error('Not implemented');
}