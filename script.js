
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // mencegah reload halaman

    // Ambil semua input
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value.trim();
    const job = document.getElementById("job").value.trim();
    const hobby = document.getElementById("hobby").value.trim();

    const message = document.getElementById("message");

    // Validasi sederhana untuk contoh login (dummy data)
    if (username === "user" && password === "123456") {
        message.style.color = "green";
        message.textContent = "Login berhasil! Data Anda telah dicatat.";

        console.log("DATA PENGGUNA:");
        console.log("Nama:", username);
        console.log("Email:", email);
        console.log("Telepon:", phone);
        console.log("Alamat:", address);
        console.log("Jenis Kelamin:", gender);
        console.log("Umur:", age);
        console.log("Pekerjaan:", job);
        console.log("Hobi:", hobby);
    } else {
        message.style.color = "red";
        message.textContent = "Username atau password salah.";
    }
});
