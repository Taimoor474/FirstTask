import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';
import AddItem from './Additem';
import List from './List';
export const Globalyaccess = createContext();//
export default function Navbar() {

    const initialList = [

    ];
    const [name, setName] = React.useState('');

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleAdd() {
        const newList = list.concat({ name });

        setList(newList);
    }


    const [list, setList] = useState(initialList);
    return (

        <div className=" container-fluid nav-bg" >
            <div className="row">
                <div className="col-10 mx-auto col-5">

                    <nav className="navbar navbar-expand-lg navbar-light  ">
                        <div className="container-fluid nav-bg nav1">
                             <h1>Todo</h1>

                            <div>
                                <div>
                                    <AddItem
                                        name={name}
                                        onChange={handleChange}
                                        onAdd={handleAdd}
                                    />

                                    <List list={list} />
                                    
                                </div>


                            </div>
                        </div>

                    </nav>


                </div>
            </div>
           

        </div>

    )
}
