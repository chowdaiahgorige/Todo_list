let input=prompt("what would be like to do?");
const todos=["Collect Chicken Eggs","Clean Litter Box"];
while(input !=="Quit" && input!=="Q"){
    if(input ==="List"){
        console.log("*******************")
        for(let i=0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("******************")
    }
    else if(input ==="New"){
        const newTodo = prompt("Ok, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    }
    else if(input=="Delete"){
        const index=parseInt(prompt("Ok, enter an index to delete:"));
        if(!Number.isNaN(index)){
            const deleted=todos.splice(index,1);
            console.log(`Ok, deleted ${deleted[0]}`);
        }
    }
    input=prompt("what would you like to do?") 
}
console.log("OK  QUIT THE APP!")