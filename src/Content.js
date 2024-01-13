import React from "react";

function Content({ loggedIn, style }) {
  return loggedIn && (
    <div>
     <p style={style}>CONTENT</p>
    </div>
    )
}

export default Content;