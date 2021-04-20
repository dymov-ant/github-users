import {ThunkAction} from "redux-thunk"
import axios from "axios"
import {
  ActionsType,
  IIncPage,
  IResponseSearchUser,
  ISetActiveUser,
  ISetError,
  ISetIsLoading,
  ISetRepos,
  ISetUsers,
  TRepo,
  TUser
} from "../types/types"
import {TState} from "./store"
import {
  BASE_URL,
  INC_PAGE,
  SET_ACTIVE_USER,
  SET_ERROR,
  SET_IS_LOADING,
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

const setUsers = (users: TUser[]): ISetUsers => ({
  type: SET_USERS,
  users
})

export const incPage = (): IIncPage => ({
  type: INC_PAGE
})

export const setActiveUser = (login: string): ISetActiveUser => ({
  type: SET_ACTIVE_USER,
  login
})

const setRepos = (repos: TRepo[]): ISetRepos => ({
  type: SET_REPOS,
  repos
})

export type ActionsThunkType = ThunkAction<Promise<void>, TState, unknown, ActionsType>

export const getUsers = (q: string, page = 1): ActionsThunkType => async dispatch => {
  dispatch(setIsLoading(true))
  try {
    const res = await axios.get<IResponseSearchUser>(`${BASE_URL}search/users?q=${q}&per_page=10&page=${page}`)
    if (res.status === 200) {
      const userNames = res.data.items.map(item => item.login)
      const requests = userNames.map(login => axios.get<TUser>(`${BASE_URL}users/${login}`))
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

export const getRepos = (login: string): ActionsThunkType => async dispatch => {
  try {
    const res = await axios.get<TRepo[]>(`${BASE_URL}users/${login}/repos`)
    if (res.status === 200) {
      dispatch(setRepos(res.data))
    }
  } catch (e) {
    const message = e.response.data.message
    if (message) {
      dispatch(setError(e))
    }
  }
}