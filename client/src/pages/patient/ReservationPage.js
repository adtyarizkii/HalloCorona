import React from "react";
import { Form, Button } from "react-bootstrap";

export default function ReservationPage() {
  const title = "Konsultasi dengan dokter";
  document.title = "Hallo Corona | " + title;

  return (
    <div>
      <div
        className="container p-5"
        style={{ marginTop: "10vh", marginRight: "50px" }}
      >
        <h2 style={{ color: "#FF6185", fontWeight: "700" }}>
          Reservasi Consultation
        </h2>
      </div>
      <div className="container" style={{ marginRight: "50px" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="label">Full Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="label">Phone</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <div className="d-flex">
            <Form.Group className="mb-3 col-4">
              <Form.Label className="label">Born Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3 col-2 ms-5">
              <Form.Label className="label">Age</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3 col-3 ms-4">
              <Form.Label className="label">Height</Form.Label>
              <Form.Control type="number" />
              <Form.Text muted>in .Cm</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 col-2 ms-3">
              <Form.Label className="label">Weight</Form.Label>
              <Form.Control type="number" />
              <Form.Text muted>in .Kg</Form.Text>
            </Form.Group>
          </div>
          <Form.Group className="mb-3">
            <Form.Label className="label">Gender</Form.Label>
            <Form.Select>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="label">Subject</Form.Label>
            <Form.Control type="text" />
            <Form.Text muted>contoh: "Sakit kepala"</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="label">Live Consultation Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="label">Description</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              style={{ height: "200px" }}
            />
          </Form.Group>
          <div className="d-flex justify-content-center align-items-center mb-5 mt-4">
            <Button
              style={{
                background: "#ff6185",
                border: "1px solid #ff6185",
                height: "35px",
                width: "15rem",
                fontWeight: "700",
              }}
              type="submit"
            >
              Send
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
