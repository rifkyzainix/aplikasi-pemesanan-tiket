function hitungTotal() {
    const nama = document.getElementById("nama").value;
    const tujuan = document.getElementById("tujuan").value;
    const hargaTiket = document.getElementById("hargaTiket").options[document.getElementById("hargaTiket").selectedIndex].text;
    const jumlahTiket = document.getElementById("jumlahTiket").value;
    const diskon = document.getElementById("diskon").options[document.getElementById("diskon").selectedIndex].text;
    
    // Perbarui rincian tiket
    document.getElementById("namaTiket").textContent = nama;
    document.getElementById("tujuanTiket").textContent = tujuan;
    document.getElementById("hargaTiketTiket").textContent = hargaTiket;
    document.getElementById("jumlahTiketTiket").textContent = jumlahTiket;
    document.getElementById("diskonTiket").textContent = diskon;
    
    const hargaTiketNumerik = parseFloat(document.getElementById("hargaTiket").value);
    const jumlahTiketNumerik = parseInt(jumlahTiket);
    const isMember = document.getElementById("member").checked;
    const diskonNumerik = parseFloat(document.getElementById("diskon").value);

    let totalBayar = hargaTiketNumerik * jumlahTiketNumerik;

    if (isMember) {
        totalBayar *= 0.9; // Diskon 10% untuk member
    }

    if (diskonNumerik > 0) {
        totalBayar -= (totalBayar * (diskonNumerik / 100)); // Mengurangkan diskon tambahan
    }

    document.getElementById("totalBayar").value = "Rp " + totalBayar.toFixed(2); // Menampilkan total dengan dua desimal
    
    // Tampilkan rincian tiket
    document.getElementById("rincianTiket").style.display = "block";
}
