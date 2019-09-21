function onCreate(ev) {
  ev.preventDefault();

  let data = {
    manufacturer: String(document.getElementById("manufacturer").value),
    processor: String(document.getElementById("processor").value),
    hardDiskSize: String(document.getElementById("hardDisk").value),
    numOfProcessorCores: String(document.getElementById("numOfCores").value)
  };

  fetch("http://localhost:2403/computers", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => console.log("Success", JSON.stringify(res)))
    .catch(err => console.error("Error:", err));

  onRead();
  $("#myModal").modal("hide");
}

function parseCompToTableRow(Comp) {
  var row = document.createElement("tr");

  row.addEventListener("dblclick", openUpdateModal);

  id = document.createElement("th");
  id.innerText = Comp["id"];
  row.appendChild(id);

  manufacturer = document.createElement("td");
  manufacturer.innerText = Comp["manufacturer"];
  row.appendChild(manufacturer);

  processor = document.createElement("td");
  processor.innerText = Comp["processor"];
  row.appendChild(processor);

  hardDiskSize = document.createElement("td");
  hardDiskSize.innerText = Comp["hardDiskSize"];
  row.appendChild(hardDiskSize);

  numOfProcessorCores = document.createElement("td");
  numOfProcessorCores.innerText = Comp["numOfProcessorCores"];
  row.appendChild(numOfProcessorCores);

  var deleteTd = document.createElement("td");
  var deleteBtn = document.createElement("button");
  deleteBtn.id = id.innerHTML;
  deleteBtn.className = "btn";
  deleteBtn.innerHTML = "<i class='fa fa-trash '></i>";
  //deleteBtn.addEventListener("click", onDelete);
  deleteTd.appendChild(deleteBtn);
  row.appendChild(deleteTd);

  return row;
}

function openUpdateModal(ev) {
  $("#updateModal").modal();
  document.getElementById("updComp").value = ev.target.closest(
    "tr"
  ).childNodes[0].innerHTML;
  document.getElementById("updManufacturer").value = ev.target.closest(
    "tr"
  ).childNodes[1].innerHTML;
  document.getElementById("updProcessor").value = ev.target.closest(
    "tr"
  ).childNodes[2].innerHTML;
  document.getElementById("updHardDisk").value = ev.target.closest(
    "tr"
  ).childNodes[3].innerHTML;
  document.getElementById("updNumOfCores").value = ev.target.closest(
    "tr"
  ).childNodes[4].innerHTML;
}

function onUpdate(ev) {
  ev.preventDefault();

  let data = {
    manufacturer: String(document.getElementById("updManufacturer").value),
    processor: String(document.getElementById("updProcessor").value),
    hardDiskSize: String(document.getElementById("updHardDisk").value),
    numOfProcessorCores: String(document.getElementById("updNumOfCores").value)
  };

  fetch("http://localhost:2403/computers/" + ev.target.value, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => console.log("Success", JSON.stringify(res)))
    .catch(err => console.error("Error:", err));

  onRead();
  $("#updateModal").modal("hide");
  location.reload();
}

function onRead() {
  fetch("http://localhost:2403/computers", {
    headers: {
      "Content-Type": "application-json"
    }
  })
    .then(res => {
      return res.json();
    })
    .then(computer => {
      var tbody = document.getElementById("tbody");
      tbody.innerHTML = "";
      computer.map(function (nthComp) {
        tbody.appendChild(parseCompToTableRow(nthComp));
      });

      var table = document.getElementById("tbody").parentElement;
      table.replaceChild(tbody, document.getElementById("tbody"));
      tbody.id = "tbody";
    })
    .catch(err => console.error("Error:", err));
}

(function () {
  document.getElementById("addComp").addEventListener("click", onCreate);
  document.getElementById("updComp").addEventListener("click", onUpdate);
  document.getElementById("refresh").addEventListener("click", onRead);
  onRead();
})();
