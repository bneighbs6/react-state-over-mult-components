import React from "react";

function Content({ loggedIn, style }) {
  return loggedIn && (
    <div style={style}>
     <p>CONTENT</p>
    </div>
    )
}

export default Content;