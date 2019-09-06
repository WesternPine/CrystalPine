function copy() {
  let textarea = document.getElementById("copyText");
  textarea.select();
  document.execCommand("copy");
}