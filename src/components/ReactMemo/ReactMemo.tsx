import React, {useState} from 'react';


export const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

export const Users = React.memo((props: { users: Array<string> }) => {
    console.log('Users Render')
    return <div>
        {
            props.users.map((u, i) => <div key={i}>{u}</div>)
        }
    </div>
})

export const Example1 = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Max', 'Sam', 'John'])

    const addUser = () => {
       return setUsers([...users, 'Svetlana' + new Date().getTime()])
    }

    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>

}