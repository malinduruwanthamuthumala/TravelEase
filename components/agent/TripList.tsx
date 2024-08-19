
import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import "../common.css";

const TripList = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped tripListTable">
                        <thead>
                            <tr>
                                <th scope="col">Trip ID</th>
                                <th scope="col">Primary Location</th>
                                <th scope="col">Participants</th>
                                <th scope="col">Start Data</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TripList;