// Mendapatkan elemen-elemen yang dibutuhkan
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const vinyl = document.getElementById('vinyl');
const openInvitationBtn = document.getElementById('btn-open-invitation');

// Fungsi untuk play atau pause audio
function togglePlayPause() {
    if (audio.paused) {
        audio.play().then(() => {
            playPauseBtn.innerHTML = '&#10074;&#10074;';
            vinyl.style.animation = 'spin 6s linear infinite';
        }).catch((error) => {
            console.error("Error playing audio:", error);
        });
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '&#9658;';
        vinyl.style.animation = 'none';
    }
}

// Event listener untuk tombol buka undangan
openInvitationBtn.addEventListener('click', () => {
    // Memulai audio dari awal saat tombol diklik
    audio.currentTime = 0; // Memulai audio dari awal
    audio.play().then(() => {
        playPauseBtn.innerHTML = '&#10074;&#10074;';
        vinyl.style.animation = 'spin 6s linear infinite';
    }).catch((error) => {
        console.error("Error playing audio:", error);
    });
});

function toggleGuestInput(isAttending, buttonId) {
    const guestInput = document.getElementById("guest-input");
    const attendButton = document.getElementById("btn-attend");
    const declineButton = document.getElementById("btn-decline");

    if (isAttending) {
        guestInput.classList.remove("hidden");
    } else {
        guestInput.classList.add("hidden");
    }

    if (buttonId === "btn-attend") {
        attendButton.classList.add("bg-white", "text-black");
        attendButton.classList.remove("bg-none", "text-white");

        declineButton.classList.remove("bg-white", "text-black");
        declineButton.classList.add("bg-none", "text-white");
    } else {
        declineButton.classList.add("bg-white", "text-black");
        declineButton.classList.remove("bg-none", "text-white");

        attendButton.classList.remove("bg-white", "text-blace");
        attendButton.classList.add("bg-none", "text-white");
    }
}


let aset1 = document.getElementById('aset1');
let aset2 = document.getElementById('aset2')
let aset3 = document.getElementById('aset3')
let aset4 = document.getElementById('aset4');
let aset5 = document.getElementById('aset5');
let aset6 = document.getElementById('aset6');
let aset7 = document.getElementById('aset7');
let aset8 = document.getElementById('aset8');
let aset9 = document.getElementById('aset9');
let aset10 = document.getElementById('aset10');
let aset11 = document.getElementById('aset11');
let aset12 = document.getElementById('aset12');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // parallax 1
    aset1.style.top = -30 + value * -0.07 + 'px';
    aset2.style.top = -10 + value * -0.07 + 'px';
    aset3.style.top = -10 + value * -0.07 + 'px';
    aset4.style.top = 60 + value * -0.07 + 'px';
    aset5.style.top = 70 + value * -0.07 + 'px';
    aset6.style.top = 80 + value * -0.07 + 'px';
    aset7.style.top = 240 + value * -0.07 + 'px';
    aset8.style.top = 220 + value * -0.07 + 'px';
    aset9.style.top = 220 + value * -0.07 + 'px';
    aset10.style.top = 420 + value * -0.07 + 'px';
    aset11.style.top = 400 + value * -0.07 + 'px';
    aset12.style.top = 400 + value * -0.07 + 'px';
});


var countDownDate = new Date("Dec 31, 2025 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the respective elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    
    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);


document.addEventListener("DOMContentLoaded", function() {
    // Pastikan bahwa saat halaman di-refresh, #awal ditampilkan dan #home disembunyikan
    document.getElementById("awal").style.display = 'block';
    document.getElementById("home").style.display = 'none';
  
    document.getElementById("btn-open-invitation").addEventListener("click", function() {
      // Menambahkan animasi scroll-up ke #content
      document.getElementById('content').classList.add('fade-out');
      
      // Setelah animasi scroll selesai, sembunyikan #awal dan tampilkan #home
      setTimeout(function() {
        // Menyembunyikan section #awal
        document.getElementById("awal").style.display = 'none';
        
        // Menampilkan section #home
        const home = document.getElementById("home");
        home.style.display = 'block'; // Pastikan #home ada di DOM
        home.classList.add('show'); // Memulai transisi opacity
      }, 1500); // Durasi animasi scroll-up
    });
    
    // Event untuk menangani scroll dan efek parallax
    window.addEventListener('scroll', function() {
      const home = document.getElementById('home');
      const scrollPosition = window.scrollY;
    
      // Mengatur posisi latar belakang berdasarkan scroll
      home.style.backgroundPosition = `center ${scrollPosition * 0.5}px`; // Adjust the multiplier for scroll speed
    });
});




// Data tambahan
const additionalMessages = [
    {
      name: "Tenten",
      message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam enim provident tempora accusantium obcaecati quas aspernatur!",
    },
    {
      name: "Hima",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae ea tempore ex nostrum unde?",
    },
    {
      name: "Nina",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam autem placeat nobis magnam!",
    },
    {
      name: "Siti",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores recusandae numquam autem nobis.",
    },
  ];

  const messageContainer = document.getElementById("messageContainer");
  const loadMoreButton = document.getElementById("loadMore");

  // Tambahkan event listener untuk tombol
  loadMoreButton.addEventListener("click", () => {
    additionalMessages.forEach(({ name, message }) => {
      // Buat elemen baru untuk pesan
      const newMessageDiv = document.createElement("div");
      newMessageDiv.className = "font-sans text-left mb-10 md:mb-8";

      const nameElement = document.createElement("h1");
      nameElement.className = "text-sm md:text-sm font-semibold";
      nameElement.textContent = name;

      const messageElement = document.createElement("p");
      messageElement.className = "text-sm md:text-sm";
      messageElement.textContent = message;

      newMessageDiv.appendChild(nameElement);
      newMessageDiv.appendChild(messageElement);
      messageContainer.appendChild(newMessageDiv);
    });

    // Aktifkan scroll dan ubah overflow
    messageContainer.classList.remove("overflow-hidden");
    messageContainer.classList.add("overflow-y-scroll");

    // Sembunyikan tombol setelah semua pesan dimuat
    loadMoreButton.style.display = "none";
  });