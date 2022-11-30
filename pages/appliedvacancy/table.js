import React from 'react';
import Row from './row';
const table = (props) => {
    let i=0;
    return (
        <>
         
         <div className='table-responsive'>
            <table className='table table-striped table-bordered border text-center table-hover' >
                <thead>
                    <tr>
                        <th>
                            #S.N
                        </th>
                       
                        <th>
                          Name
                        </th>

                        <th>
                          Email
                        </th>


                        <th>
                         Resume
                        </th>

                        <th>
                         Jobtitle
                        </th>



                        <th>
                         Experience
                        </th>

                        <th>
                         shortDescription
                        </th>

                        <th>
                         Time
                        </th>
                        
                        
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        props.data && props.data.map((row) => {
                            i++;
                            return <Row row={row} handleDelete={props.handleDelete} key={Math.random()} index={i}/>
                        })
                    }
                </tbody>
            </table>
            </div>
        </>
    )
}

export default table