import { Button, Form, Input } from "antd";
import React, { FC } from "react";
import { rules } from "../utils/rules";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";

const LoginForm: FC = () => {
	const dispatch = useDispatch();

	const submit = () => {
		dispatch(AuthActionCreators.login("admin", "12345")());
	};

	return (
		<Form onFinish={submit}>
			<Form.Item
				label="Имя пользователя"
				name={"username"}
				rules={[rules.required("Пожалуйста введите имя пользователя!")]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Парлоль"
				name={"password"}
				rules={[rules.required("Пожалуйста введите пароль!")]}
			>
				<Input />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Войти
				</Button>
			</Form.Item>
		</Form>
	);
};
export default LoginForm;
