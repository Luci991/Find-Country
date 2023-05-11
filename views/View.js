export default class View {
  _message = `Bookmark a country :).`;
  /**
   * @template render is a function for render a date on the view
   * @param {object} data
   */
  render(data) {
    if (!data || (Array.isArray(data) && data.length == 0)) return;
    this._data = data;
    const markup = this._generateMarkup(data);
    this._clearParent();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner() {
    const markup = `
    <figure class="box-spinner">
      <div class="spinner">
        <ion-icon name="airplane" class="spinner__icon"></ion-icon>
      </div>
    </figure>
    `;
    this._clearParent();
    this._parentEl.insertAdjacentHTML("beforeend", markup);
  }

  renderError() {
    this._clearParent();
    const markup = `<figure class="box-error">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="icon-error"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
    <p>${this._errormessage}<br />Try again with another name!</p>
  </figure>`;

    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _clearParent() {
    this._parentEl.innerHTML = "";
  }

  eventLoadPage(handler) {
    ["load", "hashchange"].forEach((event) => {
      window.addEventListener(event, function (e) {
        const query = this.location.hash.slice(1);

        handler(query);
      });
    });
  }

  renderMessage(message = this._message) {
    const markup = `
    <div class="box-message">
        <p class="message">${message}</p>
    </div>
    `;

    this._clearParent();
    this._parentEl.insertAdjacentHTML("beforeend", markup);
  }
}
