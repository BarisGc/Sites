//completed basılırsa işlem görmesi geliştirilecek, backend tarafında root url vb. ayarlamak gerekiyor.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

// export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
//     const res = await fetch('http://localhost:7000/todos');
//     return await res.json()
// })
//bunun yerine axios tercih ettik
export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`);
    return res.data
})

export const addTodosAsync = createAsyncThunk('todos/addTodosAsync', async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`, data);
    return res.data
})

export const toggleTodosAsync = createAsyncThunk('todos/toggleTodosAsync', async ({ id, data }) => {
    const res = await axios.patch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`, data);
    return res.data
})

export const removeTodosAsync = createAsyncThunk('todos/removeTodosAsync', async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`);
    return id
})

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        activeFilter: 'all',
        addNewTodoIsLoading: false,
        addNewTodoError: null,
    },
    reducers: {
        // addTodo: {
        //     reducer: (state, action) => {
        //         state.items.push(action.payload)
        //     },
        //     prepare: ({ title }) => {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 completed: false,
        //                 title,
        //             }
        //         }
        //     },
        // },
        //bunu yerine backend işlemlerini tercih ettik
        // toggle: (state, action) => {
        //     const { id } = action.payload;
        //     const item = state.items.find(item => item.id === id)
        //     item.completed = !item.completed;
        // },
        //middleware ile hallettik
        // destroy: (state, action) => {
        //     const id = action.payload;
        //     const filtered = state.items.filter((item) => item.id !== id);
        //     state.items = filtered;
        // },
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload
        },
        clearCompleted: (state) => {
            const filtered = state.items.filter((item) => item.completed === false);
            state.items = filtered;
        },
    },
    extraReducers: {
        // get todos
        [getTodosAsync.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getTodosAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [getTodosAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        // add todo
        [addTodosAsync.pending]: (state, action) => {
            state.addNewTodoIsLoading = true
        },
        [addTodosAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload)
            state.addNewTodoIsLoading = false
        },
        [addTodosAsync.rejected]: (state, action) => {
            state.addNewTodoIsLoading = false;
            state.addNewTodoError = action.error.message;
        },
        // toggle todo
        [toggleTodosAsync.fulfilled]: (state, action) => {
            const { id, completed } = action.payload
            const index = state.items.findIndex(item => item.id === id);
            state.items[index].completed = completed
        },
        // remove todo
        // [removeTodosAsync.fulfilled]: (state, action) => {
        //     const id = action.payload;
        //     const filtered = state.items.filter((item) => item.id !== id);
        //     state.items = filtered;
        // },
        // veya alttaki kullanılabilir
        [removeTodosAsync.fulfilled]: (state, action) => {
            const id = action.payload;
            const index = state.items.findIndex((item) => item.id === id);
            state.items.splice(index, 1)
        }
    }
});

export const selectTodos = (state) => state.todos.items;
export const selectFilteredTodos = (state) => {
    if (state.todos.activeFilter === 'all') {
        return state.todos.items;
    }
    return state.todos.items.filter((todo) => state.todos.activeFilter === 'active' ? todo.completed === false : todo.completed === true)
}

export const { changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;