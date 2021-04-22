import {ActionsType, TRepo, TUser} from "../types/types"
import {
  CLEAR_USERS,
  INC_PAGE,
  SET_ACTIVE_USER,
  SET_ERROR,
  SET_IS_LOADING,
  SET_IS_SHOW_MORE,
  SET_Q,
  SET_REPOS,
  SET_USERS
} from "../utilits/constants"

interface IState {
  users: TUser[]
  activeUser: TUser | null | undefined
  error: string
  isError: boolean
  isLoading: boolean
  page: number
  q: string
  isShowMore: boolean
  repos: TRepo[]
}

const initialState: IState = {
  users: [],
  activeUser: null,
  error: "",
  isLoading: false,
  isError: false,
  page: 1,
  q: "",
  isShowMore: true,
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
    case SET_Q:
      return {
        ...state,
        q: action.q
      }
    case SET_IS_SHOW_MORE:
      return {
        ...state,
        isShowMore: action.isShowMore
      }
    case CLEAR_USERS:
      return {
        ...state,
        page: 1,
        users: []
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    case SET_ACTIVE_USER:
      return {
        ...state,
        activeUser: action.user
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
