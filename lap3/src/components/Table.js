import React from "react";

function genTable(peoples){
    return(peoples.map((people)=>{
        const {id,name:rname,age} = people;
        return(
            <tr>
                <td>ID:{id}</td>
                <td>NAME:{rname}</td>
                <td>AGE:{age}</td>
            </tr>
    );
}));
}

function DataTable() {
    const students = [
    {
        id:1,
        name: "Tae",
        age:20,
    },
    {
        id:2,
        name: "Mai",
        age:19,  
    },
];
    return(
        <table>
            <tbody>{genTable(students)}</tbody>
        </table>
    );
}

export default DataTable;
