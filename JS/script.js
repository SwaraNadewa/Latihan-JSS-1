//ini javasript//

function replaceName() {

    let name = prompt("Siapa Nama Anda ?", "")
    document.getElementById("name"), innerHTML = name
}

document.getElementById('tombol').addEventListener("click", function() {
    replaceName();

})