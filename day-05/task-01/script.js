function main() {
  var last_Name = "Dobariya";
  function lastName() {
    console.log(last_Name);
    return last_Name;
  }
  function firstName() {
    console.log("Brijesh");
    setTimeout(() => {
      lastName();
    }, 5000);
  }
  firstName();
}
main();
