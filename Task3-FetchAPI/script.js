async function getJoke() {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();

  document.getElementById("joke").innerHTML = `
    <h3>${data.setup}</h3>
    <p><b>${data.punchline}</b></p>
  `;
}
