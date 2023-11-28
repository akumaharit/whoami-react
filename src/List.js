import React from 'react';

const subject_list = ['1_ajarn','2_musician','3_animal', '4_fruit', '5_drug name', '6_rxcu80', '7_english','8_english_alphabet','9_object'];

function List(){
    return (
        <div className="List">
            <ul>
                {subject_list.map((subject) => <li><a href = {subject + '.html'}>{subject}</a></li>)}
            </ul>
        </div>
    );
}

export default List;