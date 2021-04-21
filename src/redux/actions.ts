import {ThunkAction} from "redux-thunk"
import axios from "axios"
import {
  ActionsType,
  IClearUsers,
  IIncPage,
  IRequestActiveUser,
  IResponseSearchUser,
  ISetActiveUser,
  ISetError,
  ISetIsLoading,
  ISetIsShowMore,
  ISetQ,
  ISetRepos,
  ISetUsers,
  TRepo,
  TUser
} from "../types/types"
import {TState} from "./store"
import {
  BASE_URL,
  CLEAR_USERS,
  GITHUB_TOKEN,
  INC_PAGE,
  PER_PAGE,
  REQUEST_ACTIVE_USER,
  SET_ACTIVE_USER,
  SET_ERROR,
  SET_IS_LOADING,
  SET_IS_SHOW_MORE,
  SET_Q,
  SET_REPOS,
  SET_USERS
} from "../utilits/constants"

const setIsLoading = (isLoading: boolean): ISetIsLoading => ({
  type: SET_IS_LOADING,
  isLoading
})

const setError = (error: string): ISetError => ({
  type: SET_ERROR,
  error
})

export const clearUsers = (): IClearUsers => ({
  type: CLEAR_USERS
})

const setUsers = (users: TUser[]): ISetUsers => ({
  type: SET_USERS,
  users
})

export const incPage = (): IIncPage => ({
  type: INC_PAGE
})

export const setQ = (q: string): ISetQ => ({
  type: SET_Q,
  q
})

const setIsShowMore = (isShowMore: boolean): ISetIsShowMore => ({
  type: SET_IS_SHOW_MORE,
  isShowMore
})

export const setActiveUser = (login: string): ISetActiveUser => ({
  type: SET_ACTIVE_USER,
  login
})

const requestActiveUser = (user: TUser): IRequestActiveUser => ({
  type: REQUEST_ACTIVE_USER,
  user
})

const setRepos = (repos: TRepo[]): ISetRepos => ({
  type: SET_REPOS,
  repos
})

export type ActionsThunkType = ThunkAction<Promise<void>, TState, unknown, ActionsType>

const headers = {
  authorization: GITHUB_TOKEN ? `token ${GITHUB_TOKEN}` : ""
}

export const getUsers = (q: string, page = 1): ActionsThunkType => async dispatch => {
  dispatch(setIsLoading(true))
  try {
    const res = await axios.get<IResponseSearchUser>(`${BASE_URL}search/users?q=${q}&per_page=${PER_PAGE}&page=${page}`, {headers})
    if (res.status === 200) {
      const userNames = res.data.items.map(item => item.login)
      userNames.length < PER_PAGE ? dispatch(setIsShowMore(false)) : dispatch(setIsShowMore(true))
      const requests = userNames.map(login => axios.get<TUser>(`${BASE_URL}users/${login}`, {headers}))
      const responses = await axios.all(requests)
      const users = responses.map(user => user.data)
      dispatch(setUsers(users))
    }
  } catch (e) {
    const message = e.response.data.message
    if (message) {
      dispatch(setError(e))
    }
  } finally {
    dispatch(setIsLoading(false))
  }
}

export const getActiveUser = (login: string): ActionsThunkType => async dispatch => {
  try {
    const res = await axios.get<TUser>(`${BASE_URL}users/${login}`, {headers})
    if (res.status === 200) {
      dispatch(requestActiveUser(res.data))
    }
  } catch (e) {
    const message = e.response.data.message
    if (message) {
      dispatch(setError(e))
    }
  } finally {
    dispatch(setIsLoading(false))
  }
}

export const getRepos = (login: string): ActionsThunkType => async dispatch => {
  try {
    const res = await axios.get<TRepo[]>(`${BASE_URL}users/${login}/repos`, {headers})
    if (res.status === 200) {
      dispatch(setRepos(res.data))
    }
  } catch (e) {
    const message = e.response.data.message
    if (message) {
      dispatch(setError(e))
    }
  } finally {
    dispatch(setIsLoading(false))
  }
}