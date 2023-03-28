function runCode() {
    var code = document.getElementById("code").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/compile", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        document.getElementById("output").innerHTML = response.output;
      }
    };
    xhr.send(JSON.stringify({ code: code }));
  }
  