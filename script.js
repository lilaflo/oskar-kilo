document.addEventListener("DOMContentLoaded", () => {
  const alphabet = {
    A: "Alpha", B: "Bravo", C: "Charlie", D: "Delta", E: "Echo",
    F: "Foxtrot", G: "Golf", H: "Hotel", I: "India", J: "Juliett",
    K: "Kilo", L: "Lima", M: "Mike", N: "November", O: "Oscar",
    P: "Papa", Q: "Quebec", R: "Romeo", S: "Sierra", T: "Tango",
    U: "Uniform", V: "Victor", W: "Whiskey", X: "Xray", Y: "Yankee",
    Z: "Zulu"
  };

  const reverseAlphabet = Object.fromEntries(
    Object.entries(alphabet).map(([k, v]) => [v.toLowerCase(), k.toLowerCase()])
  );

  const input = document.querySelector("input");
  const textarea = document.querySelector("textarea");

  function encode(text) {
    return text.toUpperCase()
      .split("")
      .map(c => {
        if (c === " ") return " ";
        if (c === "/") return " ";
        if (alphabet[c]) return alphabet[c];
        return c;
      })
      .join(" ");
  }

  function decode(text) {
    return text.toUpperCase()
      .split(/\s+/)
      .map(word => reverseAlphabet[word.toLowerCase()] || word)
      .join(" ");
  }

  input.addEventListener("input", () => {
    textarea.value = encode(input.value);
  });

  textarea.addEventListener("input", () => {
    input.value = decode(textarea.value);
  });

  textarea.addEventListener("click", () => {
    navigator.clipboard.writeText(textarea.value).catch(err => {
      console.error("Clipboard failed:", err);
    });
  });
});
