import { WORDS } from '../types'

const INITIAL_STATE = { red: [], yellow: [], green: [] }

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case WORDS.ADD_WORD: {
      const { color, word } = payload
      state[color].push(word)
      return { ...state }
    }
    case WORDS.REMOVE_WORD: {
      const { color, word } = payload
      const arr = { ...state }
      arr[color] = arr[color].filter(el => el !== word)
      return { ...arr }
    }
    default:
      return state
  }
}
