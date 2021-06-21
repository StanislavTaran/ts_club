const addMemberBtn = document.getElementById('add_member_btn');
const nameInput = document.getElementById('member_form_name');
const emailInput = document.getElementById('member_form_email');

addMemberBtn.addEventListener('click', async (e) => {
  if (nameInput.checkValidity() && emailInput.checkValidity()) {
    const body = {
      name: nameInput.value,
      email: emailInput.value,
    };
    let data;
    const res = await fetch('/members/create', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => handleErrors(res))
      .then((res) => res.json())
      .then((newData) => (data = newData.data))
      .then((data) => addRow(data))
      .catch((e) => {
        console.log(e);
      });
  } else {
    console.log('Invalid data');
  }
});

function addRow(data) {
  const tableRef = document.getElementById('members_table');

  const newRow = tableRef.insertRow(data.id);
  const name = document.createElement('span');
  name.innerHTML = data.name;
  newRow.insertCell(0).appendChild(name);
  const email = document.createElement('span');
  email.innerHTML = data.email;
  newRow.insertCell(1).appendChild(email);
  const reg_date = document.createElement('span');
  reg_date.innerHTML = data.reg_date;
  newRow.insertCell(2).appendChild(reg_date);
}

function handleErrors(response) {
  if (response.status === 400) {
    response.json().then(function (object) {
      alert(`Error. ${object.message}. Please check input data.`);
    });
  } else if (response.status >= 200 && response.status < 300) {
    return response;
  }
}
