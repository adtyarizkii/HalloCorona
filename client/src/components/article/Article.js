import React from "react";
import { Link } from "react-router-dom";
import artikel from "../../assets/artikel.png";

export default function Article() {
  return (
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
          <Link to={`/patient/detailarticle`}>
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
                  belanja bahan makanan di supermarket atau pasar. Banyak orang
                  yang lebih memperhatikan kebersihan tangannya, tetapi
                  bagaimana dengan virus yang menempel pada makanan, termasuk
                  sayur dan buah?
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
