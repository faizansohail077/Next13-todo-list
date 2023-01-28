"use client"

import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import AddTodo from "./AddTodo";
import Todolist from "./Todolist";
import { Todo } from "./Types";

export default function Home() {

  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <Flex justifyContent={'center'} >
      <Box width={{ base: '90%', md: '60%' }} marginTop={5} >
        <AddTodo setTodoList={setTodoList} todos={todoList} />
        <Todolist todos={todoList} setTodoList={setTodoList} />
      </Box>
    </Flex>
  )
}
