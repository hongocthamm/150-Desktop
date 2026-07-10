
  function data_needs_saving() {
    return true; // replace with real logic
  }

  window.addEventListener("beforeunload", function (e) {
    if (data_needs_saving()) {
      e.preventDefault();
      e.returnValue = "";
    }
  });
