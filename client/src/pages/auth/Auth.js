import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Signup from "../../components/modal/Signup";
import Signin from "../../components/modal/Signin";
import bgImg from "../../assets/Jumbotron.png";
import iconbtn from "../../assets/iconbtn.png";
import artikel from "../../assets/artikel.png";

export default function Auth() {
  const title = "Home";
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
        style={{
          marginTop: "10vh",
          backgroundImage: `url(${bgImg})`,
          height: "58vh",
          width: "auto",
          backgroundPosition: "center top",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <button
          onClick={() => setSignInShow(true)}
          style={{
            // margin: "12rem",
            // padding: "2rem",
            border: "0px",
            backgroundColor: "white",
            height: "55px",
            marginTop: "15.5rem",
            marginLeft: "11.5rem",
            backgroundImage: `url(${iconbtn})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "15%",
            // backgroundPosition: "left center ",
            backgroundPositionX: "10px",
            backgroundPositionY: "center",
          }}
        >
          <span
            style={{
              fontWeight: "700",
              color: "#ff6185",
              fontSize: "20px",
              marginLeft: "4rem",
            }}
            className="py-5"
          >
            Konsultasi Dengan Dokter
          </span>
        </button>
      </div>
      <div>
        <h1
          className="text-center mt-3"
          style={{ height: "15vh", color: "#FF6185" }}
        >
          Today's Article
        </h1>
        <div className="row d-flex justify-content-start align-items-center m-2 p-2">
          {/* card map here.. */}
          <div className="col-md-3">
            <Link to={`/detailarticle`}>
              <div className="card shadow p-2 mb-4" style={{ width: "auto" }}>
                <img
                  src={artikel}
                  className="card-img-top img-size"
                  alt="Project image"
                />
                <div className="card-body">
                  <h5 className="title-article card-title">
                    Ini Alasan Buah dan Sayur dari Supermarket Harus Dicuci
                  </h5>
                  <span className="desc card-text text-muted mb-3">
                    Hallo Corona, Jakarta - Dengan adanya wabah yang menyerang,
                    banyak orang diharuskan untuk tetap tinggal di rumah. Namun,
                    setiap orang diperbolehkan untuk keluar rumah hanya untuk
                    belanja bahan makanan di supermarket atau pasar. Banyak
                    orang yang lebih memperhatikan kebersihan tangannya, tetapi
                    bagaimana dengan virus yang menempel pada makanan, termasuk
                    sayur dan buah?
                  </span>
                </div>
              </div>
            </Link>
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
  );
}
