import React from 'react';
import Row from './row';
const table = (props) => {
    let i=0;
    return (
        <>

            <table className='table table-striped table-bordered border text-center table-hover' >
                <thead>
                    <tr>
                        <th>
                            #S.N
                        </th>
                       
                        <th>
                           Image
                        </th>

                        <th>
                           Name
                        </th>

                        <th>
                           Email
                        </th>


                        <th>
                           Description
                        </th>

                        <th>
                           Position
                        </th>

                        <th>
                           SocialLink
                        </th>

                        <th>
                          Color
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
        </>
    )
}

export default table