import React from "react";

const CustomerOrdersTableRow = ({order}) => {
    console.log(order);

    return (
        <>
            <tr>
                <td>{order.petsOrderId}</td>
                <td>{order.orderStatus === true ? 'true': 'false'}</td>
                <td>{order.orderInsertedDatetime}</td>
                <td>{order.expectedOrderDeliveryDatetime}</td>
                <td>{order.pets.petBreed}</td>
                <td>{order.pets.petPrice}</td>
                <td>Paid</td>
            </tr>
        </>
    )
}

export default CustomerOrdersTableRow;