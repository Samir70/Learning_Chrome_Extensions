window.onload  =  function() {
    document.addEventListener("selectionchange", () => {
        text = document.getSelection()
        alert("You highlighted: " + text)
      });
}