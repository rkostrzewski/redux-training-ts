import { Action } from 'redux'
import { NEXT_SLIDE, PREVIOUS_SLIDE } from './constants'

export interface NextSlideAction extends Action<typeof NEXT_SLIDE> {
}

export function nextSlide (): NextSlideAction {
  return {
    type: NEXT_SLIDE
  }
}

export interface PreviousSlideAction extends Action<typeof PREVIOUS_SLIDE> {
}

export function previousSlide (): PreviousSlideAction {
  return {
    type: PREVIOUS_SLIDE
  }
}