import { useState } from "react";
import PropTypes from "prop-types";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [warningMessage, setWarningMessage] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarningMessage("No scripts allowed!");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningMessage("No @ symbol allowed!");
      newText = newText.replace("@", "");
    } else {
      setWarningMessage("");
    }
    setText(newText);
  };
  return (
    <div className="textarea">
      <textarea
        value={text}
        placeholder="Enter your text"
        spellCheck="false"
        onChange={handleChange}
      />
      {warningMessage && <Warning message={warningMessage} />}
    </div>
  );
}

Textarea.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
};
