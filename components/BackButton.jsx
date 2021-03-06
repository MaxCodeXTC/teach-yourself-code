import Router from "next/router";

const backButton = () => (
  <div>
    <button
      className="back-btn"
      onClick={() => Router.back()}
      style={{
        textDecoration: "underline",
        padding: "1em 0em",
        background: "transparent",
        border: "none",
      }}
    >
      back
    </button>
  </div>
);

export default backButton;
