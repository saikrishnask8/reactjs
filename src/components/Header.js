import "../../src/App.css";

export function Header() {
  function cnt() {
    var x = document.getElementById("i3").value;
    var len = x.length - 1;
    var count = 1;
    if (x.length === 0) {
      document.getElementById("val").innerHTML = "0";
      return;
    }
    for (let i = 0; i < len; i++) {
      if (x[i] === " " && x[i + 1] === " ") {
        count = count + 0;
      } else if (x[i] === " ") {
        count = count + 1;
      }
    }
    document.getElementById("val").innerHTML = count;
    return count;
  }
  return (
    <div id="i1" className="bg-light">
      <h1 id="i2">Responsive Paragraph word count</h1>
      <textarea id="i3" onKeyUp={cnt} cols={40} rows={5} />

      <br />
      <br />
      <p>
        Word Count: <span id="val">0</span>
        <br />
      </p>
    </div>
  );
}
