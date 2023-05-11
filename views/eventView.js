class EventView {
  #parentEl = document.querySelector(".search-form");
  eventHandler(handler) {
    this.#parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      const value = document.querySelector(".search-bar").value;
      handler(value);
    });
  }
}

export default new EventView();
