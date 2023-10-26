export const createErrorElement = (errorMessage) => {
  const element = document.createElement("div");
  element.classList.add("popup");
  element.classList.add("error-message");
  element.id = "popup";

  element.innerHTML = String.raw`
      <div class="popup-content">
          <span class="close" id="closePopup">&times;</span>
          <div class="text">
            <h2>Uh oh! Something went wrong...</h2>
            <p>${errorMessage}</p>
          </div>
      </div>
  `;
  return element;
};
