import React, { Component } from 'react'
import "./TodoApp.css"


export  class TodoApp extends Component { 
    state={
        input: "",
        items:[]
    }

    handleChange= event =>{
        this.setState({
           input: event.target.value
        })
    }

    storeItem= event=>{
        event.preventDefault()
        const{ input }=this.state;
        this.setState({
            items: [...this.state.items,input],
            input:""
        })

    }

    deleteItem= key =>{
        const allItems=this.state.items
        allItems.splice(key,1)
        this.setState({
          items:allItems

        })
    }
    render() {
        const {input,items} = this.state
        return (
            <div className="todo-container">
               <form className="input-section" onSubmit={this.storeItem}>
               <h1>Todo App</h1>
                   <input type="text"
                    onChange={this.handleChange}
                     placeholder="Enter items..."
                     value={input}
                     
                    />
               </form>
               <ul>
                   {items.map((data,index )=>(
                       <li key={index}>
                           {data}<i className="fa fa-trash" aria-hidden="true" onClick={()=>this.deleteItem(index)}></i>
                           </li>
                      ))} 
               </ul>
            </div>
          
            
        )
    }
}
export default TodoApp