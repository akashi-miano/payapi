import React from "react";

const Card = ({ img, title, description }) => {
  return (
    <div className="card text-center flow-content--m">
      <div className="img-wrapper flex justify-center">
        <img
          src={img}
          alt={`${title}'s Image`}
          className="w-[100px] h-[100px]"
        />
      </div>
      <header className="flow-content--s">
        <h3 className="card__title text-lg font-bold text-[#36536B]">
          {title}
        </h3>
        <p className="card__description text-[#6C8294] max-w-[450px] mx-auto">
          {description}
        </p>
      </header>
    </div>
  );
};

export default Card;
