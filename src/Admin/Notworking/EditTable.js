import React,{useMemo} from 'react'
// import {useTable} from 'react-Table'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function EditTable({ item }) {
    console.log("EditTable" + item)
    const data = useMemo(()=>item,[])
    // const tableInstance = useTable({
    //     data  
    // })
    
    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow
    // } = tableInstance
    return (
        <div>
            {/* <table {...getTableProps()}>
                <thead >
                    {
                        headerGroups.map((headerGroup)=>(
                            headerGroup.header.map(column=>(
                                <tr {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </tr>
                            ))
                        ))
                    }
                   
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row=>{
                            prepareRow(row)
                            return <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell=>{
                                       return  <td {...cell.getCellProps}>{cell.render("Cell")}</td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table> */}
        </div>
    )
}

export default EditTable
