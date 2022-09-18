// validation for empty field
const validation = () => {
  let id = document.f1.user.value;
  let ps = document.f1.pass.value;
  if (id.length == "" && ps.length == "") {
    alert("Username and Password fields are empty");
    return false;
  } else {
    if (id.length == "") {
      alert("Username is empty");
      return false;
    }
    if (ps.length == "") {
      alert("Password field is empty");
      return false;
    }
  }
};
