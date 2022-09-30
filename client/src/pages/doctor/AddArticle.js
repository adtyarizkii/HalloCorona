import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function AddArticle() {
  const title = "Add Article";
  document.title = "Hallo Corona | " + title;

  return (
    <div>
      <div
        className="container p-5"
        style={{ marginTop: "10vh", marginRight: "50px" }}
      >
        <h2 style={{ color: "#FF6185", fontWeight: "700" }}>Add Article</h2>
      </div>
      <div className="container" style={{ marginRight: "50px" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="label">Title</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="label">Upload Image</Form.Label>
            <Form.Control type="file" />
            <Form.Text>Max size: 2MB</Form.Text>
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
              Post
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
