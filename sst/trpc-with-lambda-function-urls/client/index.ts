import type {AppRouter} from '../services/functions/lambda';
import {createTRPCClient} from '@trpc/client';
import prompts from "prompts"

const function_url = "https://kr2madrbusxrglf3aamfj7o4sy0hlebb.lambda-url.us-east-1.on.aws"

const client = createTRPCClient<AppRouter>({
    url: function_url,
});

// (async function () {
//     // Create two ToDos
//     const first_id = await client.mutation('createToDo', "Buy milk");
//     const secnd_id = await client.mutation('createToDo', "Buy eggs");
//
//     // Mark one as completed
//     await client.mutation('completeToDo', first_id);
//
//     // List Todos
//     const todos = await client.query('listToDos');
//     if(!todos) {
//         return
//     }
//
//     todos.forEach(function (todo, i) {
//         const state = todo.completed ? "completed" : "in progress"
//         console.log(`${i+1} - ${todo.description} (${state})`, )
//     });
// })()


const promptNewTodo = async () => {
    const entered = await prompts({
        type: 'text',
        name: 'description',
        message: `Please describe your ToDo`,
    });

    await client.mutation('createToDo', entered.description)
}

async function promptForTodoComplete() {
    const todos = await client.query('listToDos') ?? [];
    const todoChoices = todos.map((todo) => {
        return {
            title: todo.description + (todo.completed ? " (completed)" : ""),
            description: `Mark as completed`,
            value: todo.id,
            disabled: todo.completed,
        }
    })

    const choices = [
        ...todoChoices,
        {title: "ACTION: CREATE TODO", value: "new"},
        {title: "ACTION: EXIT", value: "exit"}
    ]

    const selected = await prompts({
        type: 'select',
        name: "id",
        message: 'Select an action',
        warn: " ",
        hint: " ",
        choices: choices,
    });

    if (!selected.id || selected.id == "exit") {
        return {id: "", exit: true}
    }
    return {id: selected.id, exit: false}
}

(async () => {
    console.log("Loading ToDos...")
    let exit = false;
    while (!exit) {
        const {id, exit} = await promptForTodoComplete();
        if (exit)
            break

        if (id == "new") {
            await promptNewTodo()
        } else {
            await client.mutation('completeToDo', id)
        }
    }
})();
