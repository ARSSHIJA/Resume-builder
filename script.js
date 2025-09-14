// Handle form submission
if (document.getElementById("resumeForm")) {
  document.getElementById("resumeForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Save data in localStorage
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("role", document.getElementById("role").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("phone", document.getElementById("phone").value);
    localStorage.setItem("location", document.getElementById("location").value);
    localStorage.setItem("objective", document.getElementById("objective").value);
    localStorage.setItem("education", document.getElementById("education").value);
    localStorage.setItem("skills", document.getElementById("skills").value);
    localStorage.setItem("projects", document.getElementById("projects").value);
    localStorage.setItem("internshipTitle", document.getElementById("internshipTitle").value);
    localStorage.setItem("internshipDesc", document.getElementById("internshipDesc").value);
    localStorage.setItem("certifications", document.getElementById("certifications").value);
    localStorage.setItem("softskills", document.getElementById("softskills").value);
    localStorage.setItem("languages", document.getElementById("languages").value);

    // Redirect to resume page
    window.location.href = "resume.html";
  });
}

// Utility: Create bullet lists
function fillList(id, data) {
  const container = document.getElementById(id);
  if (container) {
    container.innerHTML = "";
    if (data) {
      data.split("\n").forEach(item => {
        if (item.trim() !== "") {
          const li = document.createElement("li");
          li.textContent = item.trim();
          container.appendChild(li);
        }
      });
    }
  }
}

// Utility: Education with degree | year
function fillEducation(id, data) {
  const container = document.getElementById(id);
  if (container && data) {
    container.innerHTML = "";
    data.split("\n").forEach(line => {
      if (line.trim() !== "") {
        const parts = line.split("|"); // Format: "Degree | Year"
        const li = document.createElement("li");
        li.innerHTML = `<span class="edu-degree">${parts[0].trim()}</span>
                        <span class="edu-year">${parts[1] ? parts[1].trim() : ""}</span>`;
        container.appendChild(li);
      }
    });
  }
}

// On resume.html page
if (document.getElementById("r-name")) {
  document.getElementById("r-name").textContent = localStorage.getItem("name");
  document.getElementById("r-role").textContent = localStorage.getItem("role");
  document.getElementById("r-email").textContent = "📧 " + localStorage.getItem("email");
  document.getElementById("r-phone").textContent = "📞 " + localStorage.getItem("phone");
  document.getElementById("r-location").textContent = localStorage.getItem("location");
  document.getElementById("r-objective").textContent = localStorage.getItem("objective");

  // Lists
  fillEducation("r-education", localStorage.getItem("education"));
  fillList("r-skills", localStorage.getItem("skills"));
  fillList("r-projects", localStorage.getItem("projects"));
  fillList("r-certifications", localStorage.getItem("certifications"));
  fillList("r-softskills", localStorage.getItem("softskills"));
  fillList("r-languages", localStorage.getItem("languages"));

  // Internship
  document.getElementById("r-internship-title").textContent = localStorage.getItem("internshipTitle");
  document.getElementById("r-internship-desc").textContent = localStorage.getItem("internshipDesc");
}

// PDF Download button
if (document.getElementById("downloadBtn")) {
  document.getElementById("downloadBtn").addEventListener("click", () => {
    window.print();
  });
}
