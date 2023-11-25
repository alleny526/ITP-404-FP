export function saveBookmark(data) {
  return fetch(`http://localhost:5000/bookmarks`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

export function deleteBookmark(id) {
  return fetch(`http://localhost:5000/bookmarks/${id}`, {
    method: "DELETE",
  }).then((response) => {
    return response.json();
  });
}

export function updateRating(id, rating) {
  return fetch(`http://localhost:5000/bookmarks/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ personal_rating: rating }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}
