import React from 'react'

export default function Review() {
    const customer = JSON.parse(localStorage.getItem('customer'))
    const product = JSON.parse(localStorage.getItem('product'))
  return (
    <div>Review
        <hr></hr>
        Thank you {customer.firstName} your order is recieved successfully
        
                 <div >
                    <table border={1} >
                        <tr>
                            <th>Product</th>
                            <th>Price</th>

                        </tr>
                        {product.map((val) => {return  <tr>
                            <td>{val.name}</td>
                            <td>{val.price}</td>

                        </tr>
 })}
                    </table>
                </div>
           
    </div>
  )
}
