function storeData(data) {
  localStorage.setItem("user", JSON.stringify(data));
}

function getData() {
  let user = JSON.parse(localStorage.getItem("user"));
  return user;
}

function deleteData() {
  localStorage.removeItem("user");
}

export { storeData, getData, deleteData };
