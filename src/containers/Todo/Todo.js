import "./Todo.css";
import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FaPlusCircle } from "@react-icons/all-files/fa/FaPlusCircle";
import { FaBars} from "@react-icons/all-files/fa/FaBars";
import { FaTrash} from "@react-icons/all-files/fa/FaTrash";
import { FaEdit} from "@react-icons/all-files/fa/FaEdit";
import { FaSave} from "@react-icons/all-files/fa/FaSave";
import { FaSun} from "@react-icons/all-files/fa/FaSun";
import { FaMoon} from "@react-icons/all-files/fa/FaMoon";
import { FaCheckCircle} from "@react-icons/all-files/fa/FaCheckCircle";
import Header from "../Header";
import Toggle from '../Toggle';


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// <FontAwesomeIcon icon={faCoffee}/>


export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = { todos: props.todos, typing: "" }
    }

    state = { a: -1, b: true }
    
  
    showHide = (index) => {
        this.setState((state) => {
            console.log(state);

            if (state.a != index) return { a: index }
            
            else return {a: -1}
        })
    }

    changed = (event) => {
        console.log( event.target.value);
        this.setState((state) => {
            return { typing: event.target.value}
        })
    }

    add = () => {
        this.setState((state) => {
            let array = [...state.todos]
            if (this.state.typing == "") return {};

            else {
                array.push({ title: this.state.typing })
                this.state.typing = "";
                
                return {todos: array}
          }
        })
    }

    delete = (index) => {
        this.setState((state) => {
           let array = [...state.todos]
            array.splice(index, 1)
            
            return {todos: array}
        })
    }

    deleteAll = (index) => {
        this.setState((state) => {
            let array = [...state.todos]
            array.splice(index)

            return{todos: array}
        })
    }

    edit = (index) => {
        this.setState((state) => {
            let array = [...state.todos]

            this.state.typing = array[index].title;
            
            return { todos: array }
        })
    }

    save = (index) => {
        this.setState((state) => {
            let array = [...state.todos];

                array[index].title = this.state.typing;
                return {todos: array, typing: ""}
        })
    }

    theme = () => {
        this.setState((state) => {
            console.log(state);
            return { b: !state.b }
        })
    }

    render() {
        return (
            <div className={`todos ${this.state.b && "todos__white"}`}>
               <div className="todos__container1">
                    <div className="container pt-5">
                        <div className="todo__content w-100">
                            <Header />
                          <div className="d-flex align-items-center">
                                <h1 className={`mb-0 fw-bold ${this.state.b && "white__todo"}`}>T O D</h1>
                                
                                
                                {this.state.b && <FaMoon className={`m-0 p-0 ms-2 display-5 ${this.state.b && "white__sun"}`} onClick={this.theme} />
                                    ||  <FaSun className={`m-0 p-0 ms-2 display-5 ${this.state.b && "white__sun"}`} onClick={this.theme} />
                                }
                          </div>
                            <div className={`todo__form d-flex mt-5 ${this.state.b && "white__form"}`}>
                                <Button className="button bg-dark me-3" onClick={this.add}><FaPlusCircle /></Button>
                                <Input className={`form-control w-100 input shadow-none ${this.state.b && "white__input"}`}
                                    onChange={this.changed}
                                    placeholder="Create new todo"
                                    type="text" value={this.state.typing} />
                            </div>
                        </div>
                    </div>
               </div>


                <div className="container">
                    <div className="row">
                        <div className={`todo__content2 ${this.state.b && "white__content2"}`}>
                        {
                            this.state.todos.map((v, i) => {
                                return <div className="col-12 col-lg-12">
                                   <div className="d-flex justify-content-between align-items-center todo__list">
                                    <div className="d-flex align-items-center">
                                        <input className="me-3 check__input" type="checkbox" />
                                        <p className="mb-0 fw-bold tasks">{v.title}</p>
                                   </div>
                                   
                                   <div className="todo__comp">
                                       <div className={`d-flex comp ${this.state.a == i && "comp__hide" || ""}`}>

                                           <Button className="bg-danger shadow-none" onClick={()=>this.delete(i)}>
                                                <FaTrash/>
                                           </Button>

                                           <Button onClick={()=>this.edit(i)} className="bg-warning shadow-none ">
                                                <FaEdit/>
                                           </Button>
                                           
                                           <Button onClick={()=> this.save(i)} className="bg-success shadow-none ">
                                                <FaSave/>
                                           </Button>
                                           
                                       </div>
                                       <Button className="shadow-none bg-dark border-0 bars__icon" onClick={()=> this.showHide(i)}>
                                           <FaBars/>
                                       </Button>
                                   </div>
                                </div>
                               </div>
                            })
                        }
                      <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                                <h6 className="mt-4 fw-bold">All</h6>
                            </div>

                            <div>
                                <Button onClick={()=> this.deleteAll()} className="mt-4 bg-dark border-0 fw-bold bars__icon">Clean All</Button>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                    
                </div>
              </div>
        )
    }
}
 