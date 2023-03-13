import { css } from "@emotion/react";
import { BlobProvider, Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";
import PSPDFKit from "../../Common/PSPDFKit";

const NocFile = ({order, show}) => {
    const printDocument = () => {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save("download.pdf");
          })
          setTimeout(function(){
            window.location.reload();
        }.bind(this), 1000)
      }

      return <div>
        {show ? 
        <div>
            <button onClick={printDocument} className="btn btn-info">Print</button>
            <div id="divToPrint" className="mt4" style={{
                backgroundColor: '#f5f5f5',
                width: '210mm',
                minHeight: '260mm',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
            <div className="container justify-content-center">
                <br/>
                <br/>
                <h3>Pune Municipal Corporation</h3>
                <p>PMC Main Building, Near. Mangla Theatre, Shivajinagar, Pune- 411 005</p>
                <hr />
                <div style={{textAlign: 'left'}}>
                <br/>
                
                    <div className="row">
                        <div className="col">
                            <p style={{fontWeight: "bold", fontSize: '15px'}}>Service Name</p>
                        </div>
                        <div className="col">
                            <p>Dog keeping license</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p style={{fontWeight: "bold", fontSize: '15px'}}>Department Name</p>
                        </div>
                        <div className="col">
                            <p>Health</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p style={{fontWeight: "bold", fontSize: '15px'}}>Applicant Name</p>
                        </div>
                        <div className="col">
                            <p style={{fontWeight: "bold", fontSize: '15px'}}>Suraj</p>
                        </div>
                    </div>
                </div>
                    <table className="table" style={{textAlign: "left"}}>
                        <thead>
                            <tr>
                                <th>SR.NO.</th>
                                <th>Dog breed</th>
                                <th>Particulars</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Receipt no:</td>
                                <td>{order.petsOrderId}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Dog breed</td>
                                <td>{order.pets.petBreed}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Receipt date:</td>
                                <td>{order.orderInsertedDatetime}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Mode of payment:</td>
                                <td>CASH</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Payment status:</td>
                                <td>PAID</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>
                    <h5 style={{textAlign: 'left'}}>Dog license fees </h5>
                    <table className="table" style={{textAlign: "left"}}>
                        <thead>
                            <tr>
                                <th>SR.NO.</th>
                                <th>Particulars</th>
                                <th>Fees per head</th>
                                <th>Total Amount</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Dog license fee:</td>
                                <td>50</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Final Amount In Words</td>
                                <td></td>
                                <td></td>
                                <td>Fifty</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>
                    <p>Payment Once Done For The Mentioned Service Shall Not Be Refunded.</p>
                    <br/>
                    <br/>
                    <br/>
            </div>
            </div>
            </div>
            :
            null
        }
       
      </div>
  }

  export default NocFile;