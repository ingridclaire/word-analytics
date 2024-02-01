import PropTypes from "prop-types";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span className={`stat__number ${number < 0 && "stat__number--limit"}`}>
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}

export default function Stats({ text }) {
  const words = text.split(" ").filter((word) => word !== "").length;
  const characters = text.length;
  return (
    <section className="stats">
      <Stat number={words} label={"words"} />
      <Stat number={characters} label={"characters"} />
      <Stat
        number={INSTAGRAM_MAX_CHARACTERS - characters}
        label={"Instagram"}
      />
      <Stat number={FACEBOOK_MAX_CHARACTERS - characters} label={"Facebook"} />
    </section>
  );
}

Stat.propTypes = {
  number: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

Stats.propTypes = {
  text: PropTypes.string.isRequired,
};
