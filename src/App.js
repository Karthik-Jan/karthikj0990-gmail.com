import React, {useState} from 'react';
import './App.css';
import InputField from "./components/InputField";
import List from "./components/List";

const App = () => {
    const [list, setList] = useState([]);
    const [description, setDescription] = useState('');

    const createNote = () => {
        const listArray = [...list];
        if (description) {
            listArray.push({desc: description, id: Date.now()});
            setList(listArray);
            setDescription('');
        }
    };

    const handleListItemDelete = id => {
        const listArray = [...list].filter(item => item.id !== id);
        setList(listArray);
        debugger;
    };

    return (
        <div className="App">
            <header className="App-header">
                <h3>ToDo App</h3>
            </header>
            <div className="App-body">
                <InputField description={description}
                            setDescription={setDescription}
                            createNote={createNote}/>
                <List list={list}
                      handleListItemDelete={handleListItemDelete}/>
            </div>
        </div>
    );
};

export default App;
