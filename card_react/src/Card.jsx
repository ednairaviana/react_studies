import kittyPic from "./assets/kitty.jpeg";

function Card() {
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img className="card__img" src={kittyPic} alt="" />
      </div>
      <div className="card__content-wrapper">
        <div className="card__content-header">
          <h2 className="card__heading">Title</h2>
          <p className="card__text">
            This is just placeholder text. Dont be alarmed, this is just here
            to fill up space since your finalized copy isnt ready yet.
          </p>
        </div>
        <div className="card__content-footer">
          <p className="card__text-footer">Read More ➤</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
