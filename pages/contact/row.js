import React from "react";
import Image from "next/image";
import Link from "next/Link";
import moment from "moment/moment";

const row = (props) => {
  let row = props.row;
  return (
    <>
      <tr>
        <td>{props.index}</td>

        {/* <td>{row.name}</td> */}
        {row.name ? <td>{row.name.substring(0, 10)}...</td> : <td>{null} </td>}


        <td>{row.email.substring(0, 20)}...</td>

        {/* <td>{row.phone}</td> */}
        {row.phone ? <td>{row.phone.substring(0, 5)}...</td> : <td>{null} </td>}


        <td>{row.budget}</td>

        {/* <td>{row.companyName}</td> */}
        {row.companyName ? <td>{row.companyName.substring(0, 5)}...</td> : <td>{null} </td>}

        <td>
          {/* {row.message} */}
          {row.message.substring(0, 20)}...
        </td>

        {row.intrestedIn ? <td>{row.intrestedIn.substring(0, 5)}...</td> : <td>{row.intrestedIn} </td>}

        {/* <td>{moment(row.createdAt).format("DD-MM-YYYY")}</td> */}
        {row.createdAt ? <td>{moment(row.createdAt.substring(0, 5)).format("DD-MM-YYYY")}...</td> : <td>{row.createdAt} </td>}
        

        <td>
          <a
            className=" btn btn-danger btn-sm"
            onClick={props.handleDelete}
            value={row._id}>
            Delete
          </a>
        </td>
      </tr>
    </>
  );
};

export default row;
