import React from "react";

function FecharPopUp({SetPopUp}) {
  return (
    <div
      className="FecharPopUp"
      onClick={() => {
        SetPopUp(false);
      }}
    >
      <i class="bx bx-x"></i>
    </div>
  );
}

export default FecharPopUp;
