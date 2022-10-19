import React from "react";

const NoticeNoArtifact = ():React.ReactElement => {
  return (
    <p>
      Cannot find <span className="code">HelloWorld</span> contract artifact. Please
      complete the above preparation first, then restart the react dev server.
    </p>
  )
}

export default NoticeNoArtifact
