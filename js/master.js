// sign up validation

function getData() {
  var user = document.getElementById("user").value;
  var mail = document.getElementById("mail").value;
  var pass = document.getElementById("pass").value;
  var confirm = document.getElementById("confirm").value;
  var result = document.getElementById("result");

  result.setAttribute("class", "validation");

  if (user == "" && mail == "" && pass == "" && confirm == "") {
    result.innerHTML = "Enter Data In Form";
    return false;
  } else if (user.length < 3 || user.length > 15) {
    result.innerHTML = "Enter 5-15 caracter in Username";
    return false;
  } else if (mail.indexOf("@", 3) == -1 || mail.indexOf(".com") == -1) {
    result.innerHTML = "Enter Valied Email";
    return false;
  } else if (pass.length < 8) {
    result.innerHTML = "Enter 8 character in password";
    return false;
  } else if (pass != confirm) {
    result.innerHTML = "Matched password";
    return false;
  }
}

function Data() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var result = document.getElementById("results");

  results.setAttribute("class", "validat");

  if (email == "" && password == "") {
    result.innerHTML = "Enter Data In Form";
    return false;
  } else if (email.indexOf("@", 3) == -1 || email.indexOf(".com") == -1) {
    result.innerHTML = "Enter Valied Email";
    return false;
  } else if (password.length < 8) {
    result.innerHTML = "Enter 8 character in password";
    return false;
  }
}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4, // عدد الكروت اللي تظهر جنب بعض
  spaceBetween: 10, // مسافة بين الكروت
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// for podcast img
const images = [
  "imgs/Property 1=Frame 77.svg",
  "imgs/Property 1=Frame 79.svg",
  "imgs/Property 1=Frame 81.svg",
  "imgs/Property 1=Frame 83.svg",
  "imgs/Property 1=Variant5.svg",
];

let index = 0;
const imgElement = document.querySelector(".podcast img");

setInterval(() => {
  // غير المؤشر للصورة اللي بعدها
  index = (index + 1) % images.length;
  // غيّر مصدر الصورة
  imgElement.src = images[index];
}, 3000); // 5000 ملي ثانية = 5 ثواني

// مصفوفة
const quotes = [
  '"Keep going — every small step forward is still progress toward your bigger dream."',
  '"Believe in yourself and you will be unstoppable."',
  '"Success is the sum of small efforts repeated day in and day out."',
  '"Don’t stop until you’re proud."',
  '"Your only limit is your mind."',
  '"Dream big, work hard, stay focused, and surround yourself with good people."',
  '"It always seems impossible until it’s done."',
  '"Push yourself, because no one else is going to do it for you."',
  '"Great things never come from comfort zones."',
  '"Stay positive, work hard, make it happen."',
  '"If you get tired, learn to rest, not to quit."',
  '"Doubt kills more dreams than failure ever will."',
  '"Do something today that your future self will thank you for."',
  '"Small progress is still progress."',
  '"Discipline is the bridge between goals and accomplishment."',
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("motivation-text").textContent = randomQuote;

//api sign up

// document.getElementById("signupForm").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const firstName = "fisrst name ";
//   const lastName = "Last name";
//   const userName = document.getElementById("user").value;
//   const email = document.getElementById("mail").value;
//   const password = document.getElementById("pass").value;

//   try {
//     const res = await fetch(
//       "http://megahubproject.runasp.net/api/Auth/register",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           firstName: firstName,
//           lastName: lastName,
//           userName: userName,
//           email: email,
//           password: password,
//         }),
//       }
//     );

//     if (res.ok) {
//       // If the response is successful (2xx status), it's JSON.
//       const data = await res.json();
//       alert("Registration successful! Welcome, " + data.username);
//       console.log("Full user data:", data);

//       localStorage.setItem("userToken", data.token);
//       localStorage.setItem("username", data.username);
//       localStorage.setItem("usermail", data.email);
//       localStorage.setItem("userRoles", JSON.stringify(data.roles));
//       window.location.href = "desktop-2.html";
//     } else {
//       // If the response is not successful (e.g., 400 Bad Request), it's likely plain text.
//       const errorMessage = await res.text();
//       alert("Error: " + errorMessage);
//       console.error("Server error:", errorMessage);
//     }
//   } catch (err) {
//     // This catches network errors or issues with the fetch request itself.
//     console.error("Error connecting to the server:", err);
//     alert(
//       "Error connecting to the server. Please check your network connection."
//     );
//   }
// });

// // ====== GET USER DETAILS ====== //
// async function getUserDetails() {
//   try {
//     const token = localStorage.getItem("userToken");

//     if (!token) {
//       alert("No token found, please login/signup first.");
//       return;
//     }

//     const res = await fetch(
//       "http://megahubproject.runasp.net/api/Auth/GetUserDetails",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     if (!res.ok) {
//       const errMessage = await res.text();
//       throw new Error(errMessage);
//     }

//     const userData = await res.json();
//     console.log("User details:", userData);

//     // مثال: عرض بيانات اليوزر في الصفحة
//     document.getElementById("username").innerText = userData.username;
//     document.getElementById("emailDisplay").innerText = userData.email;
//   } catch (err) {
//     console.error("Error fetching user details:", err);
//     alert("Error: " + err.message);
//   }
// }

//login

// function togglePassword(inputId, icon) {
//   const input = document.getElementById(inputId);
//   if (input.type === "password") {
//     input.type = "text";
//     icon.src = "imgs/images.png"; // صورة العين وعليها خط
//   } else {
//     input.type = "password";
//     icon.src = "imgs/mdi_eye-outline.svg"; // صورة العين العادية
//   }
// }

// // // login api
// document.getElementById("loginForm").addEventListener("submit", async (e) => {
//   e.preventDefault(); // منع الريلود

//   const email = document.getElementById("mail").value;
//   const password = document.getElementById("pass").value;

//   try {
//     const res = await fetch("http://megahubproject.runasp.net/api/Auth/Login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     if (res.ok) {
//       const data = await res.json();
//       console.log("Login response:", data);

//       // تحقق هل السيرفر بيرجع token فعلاً
//       if (!data.token) {
//         alert("No token returned from server!");
//         return;
//       }

//       // خزن التوكن
//       localStorage.setItem("userToken", data.token);

//       alert("Login successful! Fetching user details...");

//       // نادِ الدالة عشان يجيب بياناتك
//       await getUserDetails();

//       // تحويل بعد ما يجيب بياناتك
//       window.location.href = "desktop-2.html";
//     } else {
//       const errorMessage = await res.text();
//       alert("Login failed: " + errorMessage);
//       console.error("Server error:", errorMessage);
//     }
//   } catch (err) {
//     console.error("Error connecting to server:", err);
//     alert("Error connecting to server.");
//   }
// });

// async function getUserDetails() {
//   try {
//     const token = localStorage.getItem("userToken");

//     if (!token) {
//       alert("No token found, please login first.");
//       return;
//     }

//     const res = await fetch(
//       "http://megahubproject.runasp.net/api/Auth/GetUserDetails",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + token,
//         },
//       }
//     );

//     const contentType = res.headers.get("content-type");

//     if (contentType && contentType.includes("application/json")) {
//       const userData = await res.json();
//       console.log("User details:", userData);

//       // عرض البيانات في الصفحة (لو موجود عناصر)
//       if (document.getElementById("username"))
//         document.getElementById("username").innerText = userData.username;
//       if (document.getElementById("email"))
//         document.getElementById("email").innerText = userData.email;
//     } else {
//       const errorText = await res.text();
//       console.error("Non-JSON response:", errorText);
//       alert("Server did not return JSON: " + errorText);
//     }
//   } catch (err) {
//     console.error("Error fetching user details:", err);
//     alert("Error: " + err.message);
//   }
// }
