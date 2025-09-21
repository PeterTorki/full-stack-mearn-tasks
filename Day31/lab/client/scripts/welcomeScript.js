const usersTable = document.getElementById("usersTable");
const loadBtn = document.getElementById("loadUsers");
const editCard = document.getElementById("editCard");
const editForm = document.getElementById("editForm");

let users = [];
loadBtn.addEventListener("click", async () => {
  const res = await fetch("/api/users");
  users = await res.json();

  if (!users.length) {
    usersTable.innerHTML = '<tr><td colspan="6" class="text-muted">No users found</td></tr>';
    return;
  }

  usersTable.innerHTML = users
    .map(
      (u, i) => `
              <tr>
                <td>${i + 1}</td>
                <td>${u.name}</td>
                <td>${u.email || "-"}</td>
                <td>${u.mobile || "-"}</td>
                <td>${u.address || "-"}</td>
                <td>
                  <button class="btn btn-sm btn-warning" onclick="startEdit(${i})">Edit</button>
                  <button class="btn btn-sm btn-danger ms-2" onclick="deleteUser(${i})">Delete</button>
                </td>
              </tr>
            `
    )
    .join("");
});

// Start Edit
function startEdit(index) {
  const user = users[index];
  document.getElementById("editIndex").value = index;
  document.getElementById("editName").value = user.name;
  document.getElementById("editEmail").value = user.email || "";
  document.getElementById("editMobile").value = user.mobile || "";
  document.getElementById("editAddress").value = user.address || "";

  editCard.style.display = "block";
  window.scrollTo({ top: editCard.offsetTop, behavior: "smooth" });
}

// Cancel Edit
function cancelEdit() {
  editCard.style.display = "none";
  editForm.reset();
}

// Submit Edit
editForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const index = document.getElementById("editIndex").value;

  const updatedUser = {
    name: document.getElementById("editName").value,
    email: document.getElementById("editEmail").value,
    mobile: document.getElementById("editMobile").value,
    address: document.getElementById("editAddress").value,
  };

  await fetch("/api/users", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ index, user: updatedUser }),
  });

  cancelEdit();
  loadBtn.click();
});

// Delete user
async function deleteUser(index) {
  if (!confirm("Are you sure?")) return;

  await fetch("/api/users", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ index }),
  });

  loadBtn.click();
}
