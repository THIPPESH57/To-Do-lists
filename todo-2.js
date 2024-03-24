import React,{useState, useReducer} from "react";




function ReducerFn(state, action){
    switch (action.type){
        case 'ADD_TODO' :
        return ([...state, {id : Date.now(), text : action.payload}])
       case 'REMOVE_TODO' :
        return state.filter((todo)=> todo.id !== action.payload) 
        case 'EDIT_TODO' :
            return state.map(todo =>
                todo.id === action.payload.id ? {...todo, text: action.payload.text}: todo)
        
        default :

        return state;
    
    }
}

function MyToDo(){

let [todos, dispatch] = useReducer(ReducerFn, [])
let [inputValue, setInputValue] = useState('')
let [editValue, setEditValue] = useState('')



function HandleAddToDo(){
    if(inputValue.trim() === ''){
        alert('enter the item to continue')
    }
    if(inputValue.trim() !== ''){
    dispatch({type : 'ADD_TODO', payload : inputValue})
    setInputValue('')
    }
}

function HandleEdit(id){
    let editedText = prompt('enter the new item')
    if(editedText !== ''){
        dispatch({type : 'EDIT_TODO', payload : {id: id, text : editedText}})
    }
}


function HandleRemove(id){
    dispatch({type :'REMOVE_TODO', payload : id})
}

    return(
        <div>
        <div class="container d-flex justify-content-center align-items-center vh-600">
    <div class="row">
        <div class="col-md-9">
         <div className="input-group mt-5 d-flex align-items-center">
                <input type="text" class="form-control"  value={inputValue} onChange={(e) => setInputValue(e.target.value)}  placeholder="Enter Task to Add"/>
                <button class="btn btn-primary" type="button" onClick={HandleAddToDo}>ADD</button>
                </div>
        </div>
    </div>
</div>

<ol >
    
    {todos.map((todo) =>(
        <div className=" w-50  container d-flex justify-content-between mt-3 mb-1 form-contol ">
        <li>{todo.text}</li>
        <div>
        <button className="btn btn-danger btn-sm me-3" onClick={() =>HandleRemove(todo.id)}>REMOVE</button>
        <button className="btn btn-primary btn-sm" onClick={() =>HandleEdit(todo.id)}> EDIT</button>
        </div>
        </div>
    ))}

</ol>



</div>
    )
}


export default MyToDo;