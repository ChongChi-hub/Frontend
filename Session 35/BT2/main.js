let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
renderBookmarks();

function addBookmark() {
  const name = document.getElementById("bookmarkName").value.trim();
  const link = document.getElementById("bookmarkLink").value.trim();

  if (name === "" || link === "") {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  const bookmark = { name, link };
  bookmarks.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  renderBookmarks();

  document.getElementById("bookmarkName").value = "";
  document.getElementById("bookmarkLink").value = "";
}

function renderBookmarks() {
  const table = document.getElementById("bookmarkList");
  table.innerHTML = "";

  bookmarks.forEach((bookmark, index) => {
    const row = `
      <tr>
        <td>
          <a href="${bookmark.link}" target="_blank">🔗 ${bookmark.name}</a>
        </td>
        <td>
          <button onclick="deleteBookmark(${index})">Xoá</button>
        </td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

function deleteBookmark(index) {
  if (confirm("Bạn có chắc muốn xoá bookmark này không?")) {
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    renderBookmarks();
  }
}
