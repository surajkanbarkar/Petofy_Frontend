import React, { useState } from "react";
import NocFile from "../Gov/NocFile";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CustomerOrdersTableRow = ({order}) => {
    console.log(order);
    const [show, setShow] = useState(false)
    const printDocument = () => {
        setShow(true)
        const input = document.getElementById('divToPrint');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
      }
    return (
        <>
        <div>
            
        </div>
        
            <tr>
                <td>{order.petsOrderId}</td>
                <td>{order.orderStatus === true ? 'true': 'false'}</td>
                <td>{order.orderInsertedDatetime}</td>
                <td>{order.expectedOrderDeliveryDatetime}</td>
                <td>{order.pets.petBreed}</td>
                <td>{order.pets.petPrice}</td>
                <td>Paid</td>
                <td><NocFile order={order} show={show}/></td>
                <td>
                    <button className="btn btn-sm btn-info"  onClick={printDocument}>Apply NOC</button>
                </td>
            </tr>
        </>
    )
}

export default CustomerOrdersTableRow;