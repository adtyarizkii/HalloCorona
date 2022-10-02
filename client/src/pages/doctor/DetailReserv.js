import React from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import satu from "../../assets/1.png";
import dua from "../../assets/2.png";
import tiga from "../../assets/3.png";
import { API } from "../../config/api";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import moment from "moment";

export default function DetailReserv({
  show,
  setShow,
  fullscreen,
  selectedId,
}) {
  let id = selectedId;
  console.log("ini adalah id:", id);

  let { data: consultation } = useQuery("consultCache", async () => {
    const response = await API.get("/consultation/" + id);
    return response.data.data;
  });
  // console.log(consultation);
  return (
    <div>
      <Modal
        id={selectedId}
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <div className="container mt-4 rsv-modal">
            <div className="rsv-left mt-4">
              <h4 style={{ fontWeight: "700" }}>{consultation?.subject}</h4>
              <p>{consultation?.desc}</p>
            </div>
            <div className="rsv-right d-flex mt-4">
              <div className="rsv-icon d-block ms-5">
                <img src={satu} alt="" />
                <br />
                <img src={dua} alt="" className="ms-2 mt-1" />
                <br />
                <img src={tiga} alt="" />
              </div>
              <div className="rsv-date ms-3">
                <h5>Date of Complaint</h5>
                <p className="text-muted">
                  {moment(consultation?.createdAt).format("DD MMMM YYYY")}
                </p>
                <h5>Live Consultation</h5>
                <p className="text-muted">
                  {moment(consultation?.liveConsul).format("DD MMMM YYYY")}
                </p>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Table striped variant="light">
            <thead>
              <tr>
                <th>No</th>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Height</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-muted">1</td>
                <td className="text-muted">{consultation?.fullname}</td>
                <td className="text-muted">{consultation?.gender}</td>
                <td className="text-muted">{consultation?.phone}</td>
                <td className="text-muted">{consultation?.age}</td>
                <td className="text-muted">{consultation?.height}</td>
                <td className="text-muted">{consultation?.weight}</td>
              </tr>
            </tbody>
          </Table>
          <div className="p-4">
            <h4 style={{ fontWeight: "700", color: "black" }}>Give Response</h4>
            <Form>
              <Form.Control
                type="text"
                as="textarea"
                style={{ height: "170px" }}
              />
              <Form.Group className="mb-3">
                <Form.Label className="label m-2">
                  Link Live Consultation
                </Form.Label>
                <Form.Control
                  type="text"
                  name="linkLive"
                  id="linkLive"
                  // onChange={handleChange}
                />
              </Form.Group>
              <div className="btn-rsv d-flex justify-content-end mt-2">
                <Button
                  onClick={() => setShow(false)}
                  variant="danger"
                  className="me-4"
                  style={{ fontWeight: "700" }}
                >
                  Cancel
                </Button>
                <Button
                  variant="success"
                  className="me-2"
                  style={{ fontWeight: "700" }}
                >
                  Approve
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
