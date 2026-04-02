/* commenting this out to stop it from occuring whenever i open index.html while the server is running
fetch("/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "testuser123",
    password: "venangel",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
*/
