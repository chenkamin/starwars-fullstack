import React, { useState } from "react";
function ErrorHandler({error}) {
  return (
    <div role="alert">
      <div>An error occurred:</div>
      <div>{error.message}</div>
      <div>please reset and try again</div>

    </div>
  )
}

export default ErrorHandler;
