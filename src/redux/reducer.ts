import {ActionsType, TRepo, TUser} from "../types/types"
import {INC_PAGE, SET_ACTIVE_USER, SET_ERROR, SET_IS_LOADING, SET_REPOS, SET_USERS} from "../utilits/constants"

interface IState {
  users: TUser[]
  activeUser: TUser | null | undefined
  error: string
  isError: boolean
  isLoading: boolean
  page: number
  repos: TRepo[]
}

const initialState: IState = {
  users: [],
  activeUser: null,
  error: "",
  isLoading: false,
  isError: false,
  page: 1,
  repos: []
}

export const reducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case SET_ERROR:
      return {
        ...state,
        isError: !!action.error,
        error: action.error
      }
    case INC_PAGE:
      return {
        ...state,
        page: state.page + 1
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    case SET_ACTIVE_USER:
      return {
        ...state,
        activeUser: state.users.find(user => user.login === action.login)
      }
    case SET_REPOS:
      return {
        ...state,
        repos: action.repos
      }
    default:
      return state
  }
}
