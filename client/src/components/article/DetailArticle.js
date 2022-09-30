import React from "react";
import artikel from "../../assets/artikel.png";

export default function DetailArticle() {
  const title = "Detail Article";
  document.title = "Halo Corona | " + title;
  return (
    <div>
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
      </div>
    </div>
  );
}
