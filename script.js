document.addEventListener("DOMContentLoaded", () => {
    const secretBtn = document.getElementById("secretBtn");
    const bgMusic = document.getElementById("bgMusic");

    // Xử lý sự kiện khi ấn vào nút bí mật
    secretBtn.addEventListener("click", () => {
        // Tự động bật nhạc nếu trình duyệt chặn tự động phát
        if (bgMusic.paused) {
            bgMusic.play().catch(error => console.log("Cần tương tác để phát nhạc: ", error));
        }

        // Hiện thông điệp ngọt ngào bất ngờ
        alert("Bí mật là... Tớ lỡ crush cậu mất rồi! Chúc cậu một ngày thật vui vẻ nhé! 💕");
    });

    // Tạo hiệu ứng bong bóng lãng mạn bay lơ lửng ở nền
    const particleContainer = document.querySelector(".background-particles");
    
    for (let i = 0; i < 35; i++) {
        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.backgroundColor = "rgba(255, 255, 255, " + Math.random() * 0.3 + ")";
        
        const size = Math.random() * 6 + 2;
        particle.style.width = size + "px";
        particle.style.height = size + "px";
        particle.style.borderRadius = "50%";
        
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = Math.random() * 100 + "vh";
        
        particle.style.transform = `scale(${Math.random()})`;
        
        particleContainer.appendChild(particle);
    }
});
