import { Button, Flex, Input } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Types'



const AddTodo = ({ setTodoList, todos }: { todos: Todo[], setTodoList:Dispatch<SetStateAction<Todo[]>> }) => {

    const [name, setName] = useState<string>("")

    const addTodo = () => {
        let todo = [...todos]
        todo.push({
            name,
            id: uuidv4(),
            isDone: false
        })
        setTodoList(todo)
        setName("")
    }

    return (
        <Flex flexWrap={{base:'wrap',md:'nowrap'}} width={'100%'} >
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Add Todo' />
            <Button  _hover={{backgroundColor:'whatsapp.300'}} backgroundColor={'whatsapp.200'} onClick={addTodo} ml={{base:0,md:2}} >Add Todo</Button>
        </Flex>
    )
}

export default AddTodo