//@ts-nocheck
import React, { useState, useMemo } from "react";
import { UserOutlined, DeleteOutlined } from "@ant-design/icons";
import { ArrowCircleLeft2, ArrowCircleRight2 } from "iconsax-react";
import { Button, Layout, Menu } from "antd";
import TodoCheckbox from "./common/todoCheckbox";
import { createTodo, deleteTodo, checkTodo } from "./features/todo-slice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [inputState, setInputState] = useState({
    title: "",
    isPending: false,
    todoIndex: null,
  });
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoList.todos);
  const inputOnChange = (e) => {
    setInputState({
      title: e.target.value,
      isPending: false,
    });
  };

  const _keydown = (e) => {
    if (e.key === "Enter") {
      let tempInputState = { ...inputState };
      tempInputState.todoIndex = uuidv4();
      dispatch(createTodo(tempInputState));
      setInputState({ title: "", isPending: false, todoIndex: null });
    }
  };

  const _deleteTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  const memoizedTodoList = useMemo(() => {
    return todos.map((todo) => (
      <div key={todo.todoIndex} className="flex items-center">
        <DeleteOutlined
          onClick={() => _deleteTodo(todo.todoIndex)}
          style={{ marginRight: "8px" }}
        />
        <TodoCheckbox state={todo} onChange="" inputStyle="input-text" />
      </div>
    ));
  }, [todos]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {" "}
      {/* Ensure full screen height */}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Home",
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: "All Completed Tasks",
            },
            // {
            //   key: '3',
            //   icon: <UploadOutlined />,
            //   label: 'nav 3',
            // },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#fff" }}>
          <Button
            type="text"
            icon={
              collapsed ? (
                <ArrowCircleRight2 size="32" color="#FF8A65" />
              ) : (
                <ArrowCircleLeft2 size="32" color="#FF8A65" />
              )
            }
            onClick={() => setCollapsed(!collapsed)}
          />
          <span className="">Todo List</span>
        </Header>
        <Content style={{ background: "#fff" }}>
          <h2>{moment().format("MMM Do YY")}</h2>

          {memoizedTodoList}
          <TodoCheckbox
            state={inputState}
            onChange=""
            inputOnChange={inputOnChange}
            keydown={_keydown}
            inputStyle="input-text"
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
