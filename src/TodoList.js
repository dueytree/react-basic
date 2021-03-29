import React from "react"
import { Input, List } from "antd"


// class TodoItem extends React.Component {
//     render () {
//         return (
//         <div>
//             {this.state.todoList.map(todo =>
//                 <li>{todo}</li>
//             )}
//         </div>
//         )
//     }
// }

const TodoItem = ({todo}) => <li>{todo}</li>



class TodoList extends React.Component {
    state = {
        todoList: ['파이썬 익히기', '장고 익히기'],
        current: '',
    
    }

    onChange = (e) => {
        const { value } = e.target
        this.setState({
            current: value,
        })
    }


    onKeyDown = (e) => {
        if ( e.keyCode === 13 ) {
            const { todoList, current } = this.state
            if ( current.trim().length > 0 ) {
                this.setState({
                    current: '',
                    todoList: [...todoList, current.trim()],
                })
            }
        }
    }


    render() {
        return (
            <div style={{ width: '300px', margin: '30px auto'}}>
                <List
                    header={"Todo List"}
                    dataSource={this.state.todoList}
                    bordered={true}
                    renderItem={todo => (
                        <List.Item>
                            {todo}
                        </List.Item>
                    )}
                    style= {{
                        marginBottom: '4px'
                    }}
                />
                <input
                    type="text"
                    value={this.state.current}
                    placeholder={"할일을 입력해주세요."}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                />

                {/* <ul>
                    {this.state.todoList.map((todo, index) =>
                        <TodoItem key={index} todo={todo} />
                    )}
                </ul>
                <input type="text" value={this.state.current}
                       placeholder="할 일을 입력해주세요."
                       onChange={this.onChange} 
                       onKeyDown={this.onKeyDown} />
                <hr/> */}
                {/* {JSON.stringify(this.state)} */}
            </div>
        )
    }
}


export default TodoList