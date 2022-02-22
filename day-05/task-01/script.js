function firstName() {
  var first_name = "Brijesh";
  document.getElementById("fname").textContent = first_name;
  console.log(first_name);
}

function lastName(lname) {
  console.log(lname);
}

async function main() {
  var last_name = "Dobariya";
  firstName();

  // we wait till this execution finish so we used await to pause
  await new Promise((res, rej) => {
    setTimeout(() => {
      res(lastName(last_name));
    }, 5000);
  });

  // after it finish we can continue rest of the process
  setTimeout((res, rej) => {
    document.getElementById("lname").textContent = last_name;
  }, 5000);
}

main();
