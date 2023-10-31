import { Layout, Row, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { RouteNames } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Navbar: FC = () => {
  const router = useHistory();
  const { isAuth } = useTypedSelector((state) => state.auth);

  return (
    <Layout.Header>
      <Row justify={"end"}>
        {isAuth ? (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <div style={{ color: "white" }}>Artem</div>
            <Menu.Item onClick={() => console.log("выйти")} key={1}>
              Выйти
            </Menu.Item>
          </Menu>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>
              Логин
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
