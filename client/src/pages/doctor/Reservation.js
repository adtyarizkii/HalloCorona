import React, { useState } from "react";
import { Table, Card } from "react-bootstrap";
import action from "../../assets/action.png";
import { useQuery } from "react-query";
import { API } from "../../config/api";
import moment from "moment";
import DetailReserv from "./DetailReserv";

const styles = {
  cardd: {
    backgroundColor: "white",
    marginTop: "10vh",
  },
};

export default function Reservation() {
  const title = "List Reservasi";
  document.title = "Halo Corona | " + title;

  let { data: consultations } = useQuery("cacheConsultations", async () => {
    const response = await API.get("/consultations");
    return response.data.data;
  });
  // console.log(consultations);

  const value = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const handleId = (id) => {
    setSelectedId(id);
    handleShow(value);
  };

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
              {consultations?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.user.fullname}</td>
                  <td>{item.subject}</td>
                  <td>{moment(item.createdAt).format("D MMMM YYYY")}</td>
                  <td
                    className={
                      item.status == "waiting"
                        ? "text-success"
                        : item.status == "pending"
                        ? "text-warning"
                        : "text-danger"
                    }
                  >
                    {item.status == "waiting"
                      ? "Waiting Live Consultation"
                      : item.status == "pending"
                      ? "Waiting Approved Consultation Live"
                      : "Cancel"}
                  </td>
                  <td>
                    <button
                      style={{
                        border: "0px",
                      }}
                      onClick={() => handleId(item.id)}
                      // onClick={() => handleShow(value)}
                    >
                      {/* <Link to="/doctor/reservation/:id"> */}
                      <img src={action} alt="action" />
                      {/* </Link> */}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* modal */}
      <DetailReserv
        show={show}
        fullscreen={fullscreen}
        setShow={setShow}
        selectedId={selectedId}
      />
    </div>
  );
}
