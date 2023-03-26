import './App.css'

import React, { useState } from 'react'


interface ICheckedItem {
  id:number;
  text:string;
}


const App = () => {

const [value, setValue] = useState('');
const [itemId, setItemId] = useState(0);
const [isChecked,setIsChecked] = useState<any> ({});
const [checkedItems, setCheckedItems] = useState <ICheckedItem[]>([]);



const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue(event.target.value);
};

const handleAddItem = () => {
     if (value !== ''){
      setCheckedItems([...checkedItems,{id:itemId,text:value}]);
      setIsChecked({...isChecked, [itemId]:false});
      setItemId(itemId + 1);
      setValue('');
     }
};



const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>,id: number) => {
  setIsChecked({ ...isChecked, [ id]: event.target.checked});
};

const handleDeleteSelectedItems = () => {
  const selectedIds = Object.keys(isChecked).filter((key) => isChecked[key as keyof typeof isChecked]);
  const filteredItems = checkedItems.filter((item) => !selectedIds.includes(item.id.toString()));
  setCheckedItems(filteredItems);
  setIsChecked({});
};

const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.key == 'Enter'){
    handleAddItem();
  }
};

const handleAllDelete = () => {
  setCheckedItems([])
}

  return (

  <div className='app'>
    <div className='app-container'>
    <header className='header-component'>
 
      <h1 className='text-3xl font-bold  underline'>Todo List</h1>
 
    </header>
     <div className='input-component'>
     
       <input type="text" onKeyDown={ handleKeyDown}  value={value} onChange={handleInputChange} />
       
      <button onClick={handleAddItem }>deyer gir</button>
      <button onClick={handleDeleteSelectedItems} >Delete</button>
     </div>
     <div className='list-component'>
        <div className='list-item'>
          <ul>
            {checkedItems.map((item) => (
              <li key={item.id } >
                <input type="checkbox"  checked={isChecked[item.id]} onChange = {(event) => handleCheckboxChange(event,item.id) } />
                {item.text}</li>
            ))}
          </ul>
        </div>
     </div>
    <div className='delete-btn'>
      <button onClick={handleAllDelete}>All Delete</button>
    </div>
     </div>
  </div>

  )
}

export default App




