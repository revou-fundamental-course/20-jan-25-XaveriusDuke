function reset_data() {
    document.getElementById('input-berat-badan').value = '';
    document.getElementById('input-tinggi-badan').value = '';
    document.getElementById('input-usia').value = '';
    document.getElementById('result-bmi').innerText = '0.00';
    document.querySelector('.nilai-hasil').innerText = '';
}

function calculate() {
    // Mendapatkan nilai dari input
    let weight = parseFloat(document.getElementById('input-berat-badan').value);
    let height = parseFloat(document.getElementById('input-tinggi-badan').value) / 100; // Mengonversi cm ke meter
    let age = parseFloat(document.getElementById('input-usia').value);

    // Memeriksa apakah semua input telah diisi
    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("Mohon isi semua bagian form yang tersedia");
        return; // Menghentikan eksekusi jika ada input yang tidak valid
    }

    if (height <= 0 || age <= 0 || weight <= 0) {
        alert("Mohon isi semua bagian form dengan data yang valid");
        return; // Menghentikan eksekusi jika ada input yang tidak valid
    }

    // Menghitung BMI
    const bmi = weight / (height * height);
    document.getElementById('result-bmi').innerText = bmi.toFixed(2);
    displayBMI(bmi, weight, height, age);
}

function displayBMI(bmi, weight, height, age) {
    let category, nilai, explanation;

    // Kategori BMI
    if (bmi < 18.5) {
        category = "Kekurangan Berat Badan";
        nilai = "Hasil BMI berada di bawah 18,5";
        explanation = "Anda berada dalam kategori kekurangan berat badan. Cara terbaik untuk meningkatkan berat badan adalah meningkatkan pola makan dengan memilih makanan padat kalori dan melakukan kegiatan olahraga. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk meningkatkan berat badan hingga batas ideal.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Berat Badan Ideal";
        nilai = "Hasil BMI berada di antara 18 dan 25";
        explanation = "Anda berada dalam kategori normal (ideal). Cara terbaik untuk mempertahankan berat badan adalah mengatur dan mempertahankan pola makanan yang dikonsumsi dan melakukan kegiatan olahraga. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk mempertahankan berat badan yang ideal ini.";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Berat Badan Berlebih";
        nilai = "Hasil BMI berada di antara 25 dan 30";
        explanation = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah mengatur kalori makanan yang dikonsumsi dan melakukan kegiatan olahraga. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    } else {
        category = "Obesitas";
        nilai = "Hasil BMI berada di atas 30";
        explanation = "Anda berada dalam kategori obesitas. Cara terbaik untuk menurunkan berat badan adalah mengatur kalori makanan yang dikonsumsi dan melakukan kegiatan olahraga. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    }

    // Menampilkan kategori dan penjelasan
    document.querySelector(".identitas-diri").innerText = `Identitas Diri :`;
    document.querySelector(".keterangan-hasil").innerText = `Anda Memiliki ${category}`;
    document.querySelector(".informasi-hasil").innerText = `${explanation}`;
    document.querySelector(".berat-badan").innerText   = `● Berat Badan   : ${weight} kg`;
    document.querySelector(".tinggi-badan").innerText  = `● Tinggi Badan  : ${height} m`;
    document.querySelector(".usia").innerText          = `● Usia          : ${age} tahun`;
    document.querySelector(".nilai-hasil").innerText = `${nilai}`;
}