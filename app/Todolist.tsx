import { Box, Button, Checkbox, Flex, FormLabel, ListItem, OrderedList, Text } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction } from 'react'

type Todo = {
    name?: String,
    id?: String,
    isDone?: boolean
}

const Todolist = ({ todos, setTodoList }: { todos: Todo[], setTodoList:Dispatch<SetStateAction<Todo[]>> }) => {

    const deleteTodo = (id: String | undefined) => {
        const deleteTodo = todos.filter((x: Todo) => x.id != id)
        setTodoList(deleteTodo)

    }

    const updateTodo = (index: number) => {

        const newTodoItems = [...todos];
        newTodoItems[index].isDone === false
            ? (newTodoItems[index].isDone = true)
            : (newTodoItems[index].isDone = false);
        setTodoList(newTodoItems)
    };



    return (
        <Box width={'100%'} >


            <OrderedList mt={5} >
                {todos.map((t: Todo, index: number) => {
                    return (
                        <ListItem mt={3} listStyleType={'none'} >
                            <Flex alignItems={'center'} justifyContent={'space-between'} >
                                <FormLabel textDecoration={t.isDone ? 'line-through' : ''} alignItems={'center'} display={'flex'}>
                                    <Checkbox isChecked={t.isDone} onChange={(e) => updateTodo(index)} />
                                    <Text ml={2}>
                                        {t.name}
                                    </Text>
                                </FormLabel>
                                <Button _hover={{ backgroundColor: 'red.300' }} backgroundColor={'red.500'} color={'white'} onClick={() => deleteTodo(t.id)}>Delete</Button>
                            </Flex>
                        </ListItem>
                    )
                })}
            </OrderedList>
        </Box>
    )
}

export default Todolist