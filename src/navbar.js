import React from 'react';

function NavBar(){
    return (
        <div className='NavBar'>
            <form>
                <select>
                    <option> Ajarn </option>
                    <option> Student </option>
                    <option> Staff </option>
                    <option> Guest </option>
                </select>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default NavBar;