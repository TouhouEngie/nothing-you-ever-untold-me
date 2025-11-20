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
        msg.classList.add("rounded-md", messages[i].color, "w-9/10", "m-1", "text-white", "border", "border-black");
        msg.innerHTML = `<p>${messages[i].sender}<p>${messages[i].text}<p>`;
        if (messages[i].sender === "Nathan Lee") {
          msg.classList.remove('text-white');
          msg.classList.add('translate-x-1/9', 'text-black');
        }
        output.appendChild(msg);
    }
}
updateMessagePanel();

