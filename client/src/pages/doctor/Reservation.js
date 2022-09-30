import React, { useState } from "react";
import { Table, Card, Dropdown, Button, Modal, Form } from "react-bootstrap";
import action from "../../assets/action.png";
import satu from "../../assets/1.png";
import dua from "../../assets/2.png";
import tiga from "../../assets/3.png";

const styles = {
  cardd: {
    backgroundColor: "white",
    marginTop: "10vh",
  },
};

export default function Reservation() {
  const title = "List Reservasi";
  document.title = "Halo Corona | " + title;

  const value = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <div>
      <Card style={styles.cardd}>
        <Card.Body className="m-3">
          <h2 className="mb-4" style={{ color: "#FF6185", fontWeight: "700" }}>
            Reservasi Data
          </h2>
          <Table striped hover variant="light">
            <thead>
              <tr className="text-dark">
                <th>No</th>
                <th>Users</th>
                <th>Subject</th>
                <th>Date of Complaint</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Aditya rizki</td>
                <td>Sakit kepala</td>
                <td>18 April 2018</td>
                <td
                  className="text-success"
                  // className={
                  //   item.status == "success"
                  //     ? "text-success"
                  //     : item.status == "pending"
                  //     ? "text-warning"
                  //     : "text-danger"
                  // }
                >
                  {/* {item.status == "success"
                      ? "Waiting Live Consultation"
                      : item.status == "pending"
                      ? "Waiting Approved Consultation Live"
                      : "Cancel"} */}
                  Waiting Live Consultation
                </td>
                <td>
                  <button
                    style={{
                      border: "0px",
                    }}
                    onClick={() => handleShow(value)}
                  >
                    <img src={action} alt="action" />
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <div className="container mt-4 rsv-modal">
            <div className="rsv-left mt-4">
              <h4 style={{ fontWeight: "700" }}>Sakit Kepala Berlebih</h4>
              <p>
                Dok kenapa ya disetiap malam kepala saya suka sakit kepa
                berlebih terlebih lagi kalau tidak mempunyai uang lalu terkadang
                tenggorokan saya suka sakit gitu dok, dan masih banyak lagi yang
                lain nya dok segera di response dok ya kapan kira-kira bisa
                konsultasinya terimakasih
              </p>
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
                <p className="text-muted">5 Juli 2022</p>
                <h5>Live Consultation</h5>
                <p className="text-muted">25 Januari 2023</p>
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
                <td className="text-muted">Aditya rizki</td>
                <td className="text-muted">Male</td>
                <td className="text-muted">083829800185</td>
                <td className="text-muted">21</td>
                <td className="text-muted">170</td>
                <td className="text-muted">45</td>
              </tr>
            </tbody>
          </Table>
          <div className="p-4">
            <h5 style={{ fontWeight: "700" }}>Give Response</h5>
            <Form>
              <Form.Control
                type="text"
                as="textarea"
                style={{ height: "170px" }}
              />
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
