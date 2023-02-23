import React from "react";
type Props = {};

export default function Team({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      {" "}
      <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl">
        Team
      </h3>
      <div className="card w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src="https://media.gettyimages.com/id/898172236/pt/foto/artificial-intelligence-of-deep-learning.jpg?s=612x612&w=0&k=20&c=o7yp33qFp-7l22ni6Ejr3miyPPKB49ifJfvx1lNgBXI="
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Catarina Costa</h2>
        </div>
      </div>
      <div className="card w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src="https://media.gettyimages.com/id/898172236/pt/foto/artificial-intelligence-of-deep-learning.jpg?s=612x612&w=0&k=20&c=o7yp33qFp-7l22ni6Ejr3miyPPKB49ifJfvx1lNgBXI="
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Diogo Paiva</h2>
        </div>
      </div>
      <div className="card w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src="https://media.gettyimages.com/id/898172236/pt/foto/artificial-intelligence-of-deep-learning.jpg?s=612x612&w=0&k=20&c=o7yp33qFp-7l22ni6Ejr3miyPPKB49ifJfvx1lNgBXI="
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Gonçalo Silva</h2>
        </div>
      </div>
      <div className="card w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src="https://media.gettyimages.com/id/898172236/pt/foto/artificial-intelligence-of-deep-learning.jpg?s=612x612&w=0&k=20&c=o7yp33qFp-7l22ni6Ejr3miyPPKB49ifJfvx1lNgBXI="
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">João Fonseca</h2>
        </div>
      </div>
      <div className="card w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src="https://media.gettyimages.com/id/898172236/pt/foto/artificial-intelligence-of-deep-learning.jpg?s=612x612&w=0&k=20&c=o7yp33qFp-7l22ni6Ejr3miyPPKB49ifJfvx1lNgBXI="
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Pedo Rasinhas</h2>
        </div>
      </div>
      <br></br>
    </div>
  );
}
