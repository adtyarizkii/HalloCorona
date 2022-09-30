import React from "react";
import { Card, Button } from "react-bootstrap";
import Patient from "../../assets/dropdown/patient.png";
import Doctor from "../../assets/dropdown/doctor.png";

export default function Inbox() {
  return (
    <div>
      <div
        className="container p-5"
        style={{ marginTop: "10vh", marginRight: "50px" }}
      >
        <h2 style={{ color: "#FF6185", fontWeight: "700" }}>Consultation</h2>
      </div>
      <Card className="container p-3">
        <Card.Body>
          <div className="inbox-ctnr">
            <div className="inbox-left">
              <img
                className="rounded-circle"
                src={Patient}
                alt="Patient"
                style={{ width: "55px", border: "3px solid #ff6185" }}
              />
            </div>
            <div className="inbox-right">
              <h4 style={{ fontWeight: "700" }}>Sakit kepala berlebih</h4>
              <small className="text-muted">16 April 2022</small>
              <div className="mt-1 cons-box">
                Keluhan: dok mengapa ya saya suka sakit kepala terutama saat
                tidak punya uang.. apakah memang sudah takdirnya seperti itu
                atau ada permasalahan lain yang menyebabkan kepala sangat sakit?
              </div>
            </div>
            <small style={{ fontWeight: "700" }}>16 April 2022</small>
          </div>
        </Card.Body>
        {/* <Card.Footer className="text-muted">
          <div className="d-flex justify-content-center align-items-center p-4">
            <h4 style={{ fontWeight: "700" }}>Waiting For Reply</h4>
          </div>
        </Card.Footer> */}
        <Card.Footer className="d-flex justify-content-center align-items-center">
          <div className="footctn">
            <div className="inboxfoot-left">
              <img
                className="rounded-circle"
                src={Doctor}
                alt="Doctor"
                style={{ width: "55px", border: "3px solid #ff6185" }}
              />
            </div>
            <div className="inboxfoot-right mt-3">
              Hi Adit hari ini adalah jadwal konsultasi kamu, silahkan klik link
              berikut untuk melakukan konsultasi secara lansung kepada saya:
              <a
                href="https://meet.google.com/imk-zydn-biu"
                target="_blank"
                className="ms-2"
              >
                Here
              </a>
              <p className="mt-2">Dr. Anto Ariza</p>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}
