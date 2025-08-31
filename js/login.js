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

// // login api
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // منع الريلود

  const email = document.getElementById("mail").value;
  const password = document.getElementById("pass").value;

  try {
    const res = await fetch(
      "https://megahubproject.runasp.net/api/Auth/Login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    if (res.ok) {
      const data = await res.json();
      console.log("Login response:", data);

      // تحقق هل السيرفر بيرجع token فعلاً
      if (!data.token) {
        alert("No token returned from server!");
        return;
      }

      // خزن التوكن
      localStorage.setItem("userToken", data.token);

      alert("Login successful! Fetching user details...");

      // نادِ الدالة عشان يجيب بياناتك
      await getUserDetails();

      // تحويل بعد ما يجيب بياناتك
      window.location.href = "desktop-2.html";
    } else {
      const errorMessage = await res.text();
      alert("Login failed: " + errorMessage);
      console.error("Server error:", errorMessage);
    }
  } catch (err) {
    console.error("Error connecting to server:", err);
    alert("Error connecting to server.");
  }
});

async function getUserDetails() {
  try {
    const token = localStorage.getItem("userToken");

    if (!token) {
      alert("No token found, please login first.");
      return;
    }

    const res = await fetch(
      "https://megahubproject.runasp.net/api/Auth/GetUserDetails",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    const contentType = res.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const userData = await res.json();
      console.log("User details:", userData);

      // عرض البيانات في الصفحة (لو موجود عناصر)
      if (document.getElementById("username"))
        document.getElementById("username").innerText = userData.username;
      if (document.getElementById("email"))
        document.getElementById("email").innerText = userData.email;
    } else {
      const errorText = await res.text();
      console.error("Non-JSON response:", errorText);
      alert("Server did not return JSON: " + errorText);
    }
  } catch (err) {
    console.error("Error fetching user details:", err);
    alert("Error: " + err.message);
  }
}
