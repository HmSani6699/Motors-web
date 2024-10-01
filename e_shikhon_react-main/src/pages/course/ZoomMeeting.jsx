import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ZoomMeeting = () => {
  const { state } = useLocation();
  return (
    <div className="flex items-center justify-center h-[750px] bg-gray-100">
      <iframe
        src={state}
        title="Zoom Meeting"
        width="100%"
        height="80%"
        allow="camera; microphone; speaker"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default ZoomMeeting;
