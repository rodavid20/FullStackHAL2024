import './App.css';
import { useState } from 'react';

function MyButton({count, handleClick}){        
    return (
        <button className='button' onClick={handleClick}>
            Clicked {count} times
        </button>);
}

const user = {
    name: 'Mr Abc',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    isAdmin: true 
};

const products = [
    {name: 'apple', price: 100},
    {name: 'orange', price: 200},
]

function App() {   
    const [count, setCount] = useState(0);

    function handleClick(){
        //console.log('clicked');
        setCount(count + 1);
    }

    let adminContent;
    if(user.isAdmin) {
        adminContent = <h2>Adminstrator</h2>;
    }
    const list = products.map((p) => <li key={p.name}>{p.name} {p.price}</li>);
    return ( 
        <>
            <h1>Welcome {user.name}</h1>
            {adminContent}
            <img className='avatar' src={user.imageUrl} />
            <br />
            <MyButton count={count} handleClick={handleClick} />
            <MyButton count={count} handleClick={handleClick} />
            <br />
            <ul>
                {list}
            </ul>
        </>
    );
}

export default App;
