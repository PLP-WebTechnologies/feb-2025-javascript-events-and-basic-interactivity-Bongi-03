// Event Handling 🎈
document.getElementById("clickMeBtn").addEventListener("click", () => {
    alert("Button clicked!");
  });
  
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("Secret Double Click Activated! 🤫");
  });
  
  document.addEventListener("keydown", (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // Image Gallery 🎮
  let images = [
    "https://via.placeholder.com/200?text=Image+1",
    "https://via.placeholder.com/200?text=Image+2",
    "https://via.placeholder.com/200?text=Image+3"
  ];
  let currentIndex = 0;
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("mainImage").src = images[currentIndex];
  }
  
  // Tabs 🎮
  function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(tab => {
      tab.style.display = "none";
    });
    document.getElementById(tabId).style.display = "block";
  }
  
  // Form Validation 📋✅
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let email = document.getElementById("email");
    let password = document.getElementById("password");
  
    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email.value)) {
      email.classList.add("error");
      email.classList.remove("success");
    } else {
      email.classList.add("success");
      email.classList.remove("error");
    }
  
    // Password validation
    if (password.value.length < 8) {
      password.classList.add("error");
      password.classList.remove("success");
    } else {
      password.classList.add("success");
      password.classList.remove("error");
    }
  });
  
  // Real-time feedback
  document.getElementById("password").addEventListener("input", function () {
    if (this.value.length >= 8) {
      this.classList.add("success");
      this.classList.remove("error");
    } else {
      this.classList.add("error");
      this.classList.remove("success");
    }
  });
  