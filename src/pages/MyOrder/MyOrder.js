import React, { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from './../Hooks/useAuth';
import { Link } from 'react-router-dom';


const MyOrder = () => {

  const { user } = useAuth()


  const [myOrder, setMyOrder] = useState([])
  useEffect(() => {


    fetch(`http://localhost:5000/myOrder/${user?.email}`)

      .then(res => res.json())
      .then(data => setMyOrder(data));
  }, [user.email])


  // delete
  const deleteOrder = id => {
   
    const url = `http://localhost:5000/manageOrder/${id}`;
    fetch(url, {
      // mode: 'no-cors',
      method: 'DELETE',
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your food has been deleted from your orders.',
                'success'
              )
            }
          })
          const reminingUsers = myOrder.filter(user => user._id !== id)
          setMyOrder(reminingUsers)
        }

      });

  }

  return (

    <div>

      <Table striped bordered hover>
        <thead >
          <tr>
            <th className="">Product Name</th>
            <th className="">Product img</th>
            <th className="">Product Price</th>
            <th className="">Product Status</th>
            <th className="">Action</th>
          </tr>
        </thead>
        {myOrder?.map((pd) => (
          <tbody>
            <tr>
              <td className="">{pd.name}</td>
              <td className=""><img style={{ width: "70px", height: "60px" }} src={pd.img} alt="" /></td>
              <td className="">${pd.price}</td>
            {pd.paid? <button type="button" class="bg-dark text-light rounded "><i class="far fa-check-square"></i> {pd?.status}</button>:
            <Link to={`/dashBoard/product/${pd._id}`}>Pay</Link>
            } 
              <td>
                <button onClick={() => deleteOrder(pd._id)} type="button" class="btn btn-danger ">  <i class="fas fa-trash "></i> Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>

  );
};

export default MyOrder;