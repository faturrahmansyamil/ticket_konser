function pilihTiket(jenis) {
    document.getElementById("hasil").innerText =
        "Anda memilih tiket " + jenis;
}
// LOGIN
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "123") {
        alert("Login berhasil");
        window.location.href = "index.html";
        return false;
    } else {
        document.getElementById("pesan").innerText =
            "Username atau password salah";
        return false;
    }
}

// HITUNG HARGA TIKET
function hitung() {
    let jenis = document.getElementById("jenis").value;
    let jumlah = document.getElementById("jumlah").value;
    let harga = 0;

    if (jenis === "vip") {
        harga = 500000;
    } else {
        harga = 250000;
    }

    let total = harga * jumlah;

    document.getElementById("total").innerText =
        "Total Bayar: Rp " + total;
}
