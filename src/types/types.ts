import {
  SET_ERROR,
  SET_IS_LOADING,
  INC_PAGE,
  SET_REPOS,
  SET_USERS,
  SET_ACTIVE_USER,
  SET_Q,
  SET_IS_SHOW_MORE, CLEAR_USERS, REQUEST_ACTIVE_USER
} from "../utilits/constants"
import {components} from "@octokit/openapi-types"

export type TUser = components["schemas"]["public-user"]
export type TSearchUser = components["schemas"]["user-search-result-item"]
export type TRepo = components["schemas"]["repository"]

export interface IResponseSearchUser {
  total_count: number
  items: TSearchUser[]
}

export interface ISetIsLoading {
  type: typeof SET_IS_LOADING
  isLoading: boolean
}

export interface ISetError {
  type: typeof SET_ERROR
  error: string
}

export interface IIncPage {
  type: typeof INC_PAGE
}

export interface ISetQ {
  type: typeof SET_Q
  q: string
}

export interface ISetIsShowMore {
  type: typeof SET_IS_SHOW_MORE
  isShowMore: boolean
}

export interface IClearUsers {
  type: typeof CLEAR_USERS
}

export interface ISetUsers {
  type: typeof SET_USERS
  users: TUser[]
}

export interface ISetActiveUser {
  type: typeof SET_ACTIVE_USER
  login: string
}

export interface IRequestActiveUser {
  type: typeof REQUEST_ACTIVE_USER
  user: TUser
}

export interface ISetRepos {
  type: typeof SET_REPOS
  repos: TRepo[]
}

export type ActionsType =
  ISetIsLoading
  | ISetError
  | IIncPage
  | ISetQ
  | ISetIsShowMore
  | IClearUsers
  | ISetUsers
  | ISetActiveUser
  | IRequestActiveUser
  | ISetRepos