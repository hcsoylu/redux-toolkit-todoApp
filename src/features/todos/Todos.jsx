import {
  BanCircleIcon,
  Button,
  Heading,
  Text,
  TextInput,
  TickCircleIcon,
  TrashIcon,
} from "evergreen-ui";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Online from "../../components/Online";
import { addTodo, deleteTodo, toggleTodo } from "../todos/todosSlice";

const Todos = () => {
  const [field, setField] = useState("");

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <div className="todo-box">
      <Online className="online" />
      <div className="that">
        <Heading size={900} marginTop={20} marginBottom={20}>
          Add Todo
        </Heading>
        <div className="form">
          <TextInput
            type="text"
            value={field}
            onChange={(e) => setField(e.target.value)}
          />
          <Button
            marginRight={16}
            appearance="primary"
            intent="none"
            onClick={() => {
              dispatch(
                addTodo({ id: Math.random(), text: field, isDone: false })
              );
              setField("");
            }}
          >
            Add
          </Button>
        </div>
        <div className="todos">
          {todos.map((t) => (
            <div className="todo" key={t.id}>
              <Text
                style={{ cursor: "pointer" }}
                size={400}
                onClick={() => dispatch(toggleTodo({ id: t.id }))}
              >
                {t.text.toUpperCase()}
              </Text>
              <div className="right">
                {t.isDone ? (
                  <TickCircleIcon color="success" marginRight={16} />
                ) : (
                  <BanCircleIcon color="danger" marginRight={16} />
                )}
                <Button
                  onClick={() => dispatch(deleteTodo({ id: t.id }))}
                  marginY={8}
                  marginRight={12}
                  iconBefore={TrashIcon}
                  intent="danger"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
