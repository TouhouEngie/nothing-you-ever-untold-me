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
    const messages = await getJsonData(json, "unused.json");
    const output = document.getElementById("messagearea");
    for (var i in messages) {
        var msg = document.createElement("p");
        msg.innerHTML = `${messages[i].text}`;
        output.appendChild(msg);
    }
}
updateMessagePanel();

