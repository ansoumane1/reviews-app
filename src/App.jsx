import { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];
  function checkNumber(number) {
    if (number < 0) {
      return reviews.length - 1;
    }
    if (number >= reviews.length - 1) {
      return 0;
    }
    return number;
  }
  function prevPerson() {
    setIndex((prev) => {
      const newIndex = prev - 1;
      // if (newIndex < 0) {
      //   return reviews.length - 1;
      // }
      // return newIndex;
      return checkNumber(newIndex);
    });
  }
  function nextPerson() {
    setIndex((prev) => {
      const newIndex = prev + 1;
      // if (newIndex > reviews.length - 1) {
      //   return 0;
      // }
      // return newIndex;
      return checkNumber(newIndex);
    });
  }

  function randomPerson() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkNumber(randomIndex));
  }
  return (
    <div>
      <main>
        <article className="review">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button className="btn btn-hipster" onClick={randomPerson}>
            suprise me
          </button>
        </article>
      </main>
    </div>
  );
};
export default App;
