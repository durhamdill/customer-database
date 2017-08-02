//console.log(customers);

let customerProfile = `
  <div>
    <img src="${customers.results[0].picture.large}">
    <h1 class="name">${customers.results[0].name.first} ${customers.results[0].name.last}</h1>
    <a href="mailto:${customers.results[0].email}">${customers.results[0].email}</a>
    <p class="address">${customers.results[0].location.city}, ${customers.results[0].location.state} ${customers.results[0].location.postcode}</p>
    <p class="phone">${customers.results[0].phone}</p>
    <p class="ssn">${customers.results[0].id.value}</p>

  </div>

`;

document.querySelector('.customerGrid').innerHTML = customerProfile;


//attempts to reformat phone number:

//placeholder="555-55-5555" pattern="\d{3}-?\d{2}-?\d{4}"
//.val().replace(/[\s().+-]/g, '');
