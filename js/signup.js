document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const firstName = "fisrst name ";
  const lastName = "Last name";
  const userName = document.getElementById("user").value;
  const email = document.getElementById("mail").value;
  const password = document.getElementById("pass").value;

  try {
    const res = await fetch(
      "https://megahubproject.runasp.net/api/Auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          userName: userName,
          email: email,
          password: password,
        }),
      }
    );

    if (res.ok) {
      // If the response is successful (2xx status), it's JSON.
      const data = await res.json();
      alert("Registration successful! Welcome, " + data.username);
      console.log("Full user data:", data);

      localStorage.setItem("userToken", data.token);
      localStorage.setItem("username", data.username);
      localStorage.setItem("usermail", data.email);
      localStorage.setItem("userRoles", JSON.stringify(data.roles));
      window.location.href = "desktop-2.html";
    } else {
      // If the response is not successful (e.g., 400 Bad Request), it's likely plain text.
      const errorMessage = await res.text();
      alert("Error: " + errorMessage);
      console.error("Server error:", errorMessage);
    }
  } catch (err) {
    // This catches network errors or issues with the fetch request itself.
    console.error("Error connecting to the server:", err);
    alert(
      "Error connecting to the server. Please check your network connection."
    );
  }
});

// ====== GET USER DETAILS ====== //
async function getUserDetails() {
  try {
    const token = localStorage.getItem("userToken");

    if (!token) {
      alert("No token found, please login/signup first.");
      return;
    }

    const res = await fetch(
      "https://megahubproject.runasp.net/api/Auth/GetUserDetails",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      const errMessage = await res.text();
      throw new Error(errMessage);
    }

    const userData = await res.json();
    console.log("User details:", userData);

    // مثال: عرض بيانات اليوزر في الصفحة
    document.getElementById("username").innerText = userData.username;
    document.getElementById("emailDisplay").innerText = userData.email;
  } catch (err) {
    console.error("Error fetching user details:", err);
    alert("Error: " + err.message);
  }
}

function togglePassword(inputId, icon) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    icon.src = "imgs/images.png"; // صورة العين وعليها خط
  } else {
    input.type = "password";
    icon.src = "imgs/mdi_eye-outline.svg"; // صورة العين العادية
  }
}
