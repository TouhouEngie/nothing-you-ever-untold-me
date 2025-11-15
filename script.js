const json = "https://comment-walt-warrior-donated.trycloudflare.com/drive/webpage_data";

async function getJsonData(url, file) {
  var finale = [];
  const signal = await fetch(url.concat("/json/", file));
  const json = await signal.json();
  for (var i in json) {
    finale.push(json[i]);
  }
  return finale[0];
}

async function updateMessagePanel() {
    const messages = await getJsonData(json, "homework/unused.json");
    const output = document.getElementById("messagearea");
    for (var i in messages) {
        var msg = document.createElement("div");
        msg.classList.add("rounded-md", "bg-sky-300", "w-9/10");
        msg.innerHTML = `<p>${messages[i].sender}<p>${messages[i].text}<p>`;
        if (messages[i].sender === "Nathan Lee") {
        msg.classList.remove('bg-sky-300');
          msg.classList.add('bg-stone-300', 'translate-x-1/9');
        }
        output.appendChild(msg);
    }
}
updateMessagePanel();

