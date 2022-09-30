import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Signup from "../../components/modal/Signup";
import Signin from "../../components/modal/Signin";
import artikel from "../../assets/artikel.png";

export default function DetailArticleAuth() {
  const title = "Detail Article";
  document.title = "Halo Corona | " + title;

  const [signUpShow, setSignUpShow] = useState(false);
  const [signInShow, setSignInShow] = useState(false);

  const signInHere = (e) => {
    e.preventDefault();
    setSignInShow(false);
    setSignUpShow(true);
  };

  const signUpHere = (e) => {
    e.preventDefault();
    setSignUpShow(false);
    setSignInShow(true);
  };
  return (
    <div>
      <Navbar bg="white" expand="lg" fixed="top" style={{ height: "10vh" }}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Halo corona" style={{ width: "150px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <button
              className="btnlogin me-2"
              onClick={() => setSignUpShow(true)}
            >
              Sign Up
            </button>
            <button className="btnregist" onClick={() => setSignInShow(true)}>
              Sign In
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        className="container p-5"
        style={{ marginTop: "10vh", marginRight: "50px" }}
      >
        <h2 className="">
          Ini Alasan Buah dan Sayur dari Supermarket Harus Dicuci
        </h2>
        <small className="text-muted">17 April 2020</small>
        <p className="mt-1">
          Author: <span style={{ color: "#FF6185" }}>Dr. Anto Ariza</span>
        </p>
        <div className="col-md-12">
          <div className="card shadow p-2 mb-4" style={{ width: "1000px" }}>
            <img
              src={artikel}
              className="card-img-top img-size-detail"
              alt="Project image"
            />
            <div className="card-body mb-5 p-5">
              <span>
                Hallo Corona, Jakarta - Dengan adanya wabah yang menyerang,
                banyak orang diharuskan untuk tetap tinggal di rumah. Namun,
                setiap orang diperbolehkan untuk keluar rumah hanya untuk
                belanja bahan makanan di supermarket atau pasar. Banyak orang
                yang lebih memperhatikan kebersihan tangannya, tetapi bagaimana
                dengan virus yang menempel pada makanan, termasuk sayur dan
                buah?
              </span>
            </div>
          </div>
        </div>

        {/* modal */}
        <Signup
          signUpHere={signUpHere}
          signUpShow={signUpShow}
          setSignUpShow={setSignUpShow}
        />
        <Signin
          signInHere={signInHere}
          signInShow={signInShow}
          setSignInShow={setSignInShow}
        />
      </div>
    </div>
  );
}
