import React, {useCallback, useMemo, useState} from "react";


// export const DifficultCountingExampleUseMemo = () => {
//
//     const [a, setA] = useState<number>(3)
//     const [b, setB] = useState<number>(3)
//
//     let resultA = 1
//     let resultB = 1
//
//     resultA = useMemo(() => {
//         let tempResult1 = 1;
//         for (let i = 1; i <= a; i++) {
//             let fake = 0;
//             while (fake < 100000000) {
//                 fake++;
//             }
//             tempResult1 = tempResult1 * i
//         }
//         return tempResult1
//     }, [a])
//
//     for (let i = 1; i <= b; i++) {
//         resultB = resultB * i
//     }
//
//     return (
//         <>
//             <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
//             <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
//             <hr/>
//             <div>
//                 Result for a: {resultA}
//             </div>
//             <div>
//                 Result for b: {resultB}
//             </div>
//
//         </>
//     )
// }


// export const UsersSecret = (props: { users: Array<string> }) => {
//     console.log('UsersSecret Render')
//     return <div>
//         {
//             props.users.map((u, i) => <div key={i}>{u}</div>)
//         }
//     </div>
// }
// const Users = React.memo(UsersSecret)
//
// export const HelpsToReactMemo = () => {
//     console.log('HelpsToReactMemo RENDERER')
//     const [counter, setCounter] = useState(0)
//     const [users, setUsers] = useState(['Max', 'Sam', 'John'])
//
//     const newArray = useMemo(() => {
//         return users.filter(u => u.toLowerCase().indexOf('a') > -1)
//     }, [users])
//
//     const addUser = () => {
//         const newUsers = [...users, 'Svetlana' + new Date().getTime()]
//         setUsers(newUsers)
//     }
//
//     return <>
//         <button onClick={() => setCounter(counter + 1)}>+</button>
//         <button onClick={addUser}>add user</button>
//         {counter}
//         <Users users={newArray}/>
//     </>
//
// }

export const LikeUseCallback = () => {
    console.log('LikeUseCallback RENDERER')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'HTML'])

    const addBook = () => {
        const newBooks = [...books, 'CSS' + new Date().getTime()]
        setBooks(newBooks)
    }

    const memoizedBook = useMemo(() => {
        return () => {
            const newBooks = [...books, 'CSS' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedBook_2 = useCallback(() => {
        const newBooks = [...books, 'CSS' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memoizedBook_2}/>
    </>

}

export const BooksSecret = (props: { addBook: () => void }) => {
    console.log('BooksSecret Render')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}
const Books = React.memo(BooksSecret)
