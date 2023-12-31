import axios from "axios";
import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import {
	AuthActionEnum,
	LoginUserAction,
	SetAuthAction,
	SetErrorAction,
	SetIsLoadingAction,
	SetUserAction,
} from "./types";

export const AuthActionCreators = {
	setUsers: (user: IUser): SetUserAction => ({
		type: AuthActionEnum.SET_USER,
		payload: user,
	}),
	setIsAuth: (auth: boolean): SetAuthAction => ({
		type: AuthActionEnum.SET_AUTH,
		payload: auth,
	}),
	setIsLoading: (payload: boolean): SetIsLoadingAction => ({
		type: AuthActionEnum.SET_IS_LOADING,
		payload,
	}),
	setError: (payload: string): SetErrorAction => ({
		type: AuthActionEnum.SET_ERROR,
		payload,
	}),
	login: (username: string, password: string) => (): LoginUserAction => {
		return {
			type: AuthActionEnum.LOGIN_USER,
			payload: {
				username,
				password,
			},
		};
	},
	logout: () => async (dispatch: AppDispatch) => {
		try {
		} catch (e) {}
	},
};
