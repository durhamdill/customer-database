//console.log(customers);
let customerBuild = () => {
//
  let customerGrid = document.querySelector(".customerGrid");
//
  for (let x=0; x<customers.results.length; x++){
//
// // ES6 function format: let multiply = (0,y) => {return 0*y};

    let customerProfile = `
      <div class="customerBox">
        <img src="${customers.results[x].picture.large}">
        <h1 class="name">${customers.results[x].name.first} ${customers.results[x].name.last}</h1>
        <a class = "email" href="mailto:${customers.results[x].email}">${customers.results[0].email}</a>
        <p class="address">${customers.results[x].location.street}</p>
        <p class="address">${customers.results[x].location.city}, ${customers.results[x].location.state} ${customers.results[x].location.postcode}</p>
        <p class="phone">${customers.results[x].phone}</p>
        <p class="ssn">${customers.results[x].id.value}</p>
      </div>
    `;

document.querySelector('.customerGrid').innerHTML += customerProfile;
}
}

customerBuild();
//
//attempts to reformat phone number:

//placeholder="555-55-5555" pattern="\d{3}-?\d{2}-?\d{4}"
//.val().replace(/[\s().+-]/g, '');
