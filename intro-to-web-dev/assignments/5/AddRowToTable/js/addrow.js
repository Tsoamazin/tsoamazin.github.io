/*jslint browser: true,
    devel: true,
    plusplus: true,
    maxerr: 1,
    indent: 4,
    maxlen: 85 */

window.onload = function () {
    "use strict";

    var button = document.getElementsByTagName("button")[0],
        qty,
        description,
        cost;

    function addRow() {
        var tbody = document.getElementsByTagName("tbody")[0]
        qty = document.getElementById("qty").value;
        description = document.getElementById("description").value;
        cost = document.getElementById("cost").value;
        /* Add your code below this line. */
        var qtyTextNode = document.createTextNode(qty)
        var desTextNode = document.createTextNode(description)
        var cstTextNode = document.createTextNode(cost)
        var tdqty = document.createElement("td")
        var tddes = document.createElement("td")
        var tdcst = document.createElement("td")
        var tr = document.createElement("tr")
        tdqty.appendChild(qtyTextNode)
        tddes.appendChild(desTextNode)
        tdcst.appendChild(cstTextNode)
        tr.appendChild(tdqty)
        tr.appendChild(tddes)
        tr.appendChild(tdcst)
        tbody.appendChild(tr)
        /* Add your code above this line. */
    }

    button.addEventListener("click", addRow, false);
};
