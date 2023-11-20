import react from 'react';

const subject_list = ['ajarn','musician','animal', 'fruit', 'drug name', 'rxcu80'];

function List(){
    return (
        <div>
            <ul>
                {subject_list.map((subject) => <li><a href = {subject + '.html'}>{subject}</a></li>)}
            </ul>
        </div>
    );
}

export default List;