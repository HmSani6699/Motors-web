import React from "react";

const PageLoading = () => {
  return (
    <div className="flex items-center justify-center pt-[300px]">
      <div>
        <div class="spinner-box">
          <div class="pulse-container">
            <div class="pulse-bubble pulse-bubble-1"></div>
            <div class="pulse-bubble pulse-bubble-2"></div>
            <div class="pulse-bubble pulse-bubble-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoading;
