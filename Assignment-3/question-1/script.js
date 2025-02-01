const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];

const filteredStates = states.filter(state => {
    const firstLetter = state.charAt(0).toLowerCase();
    return !['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
});

const statesList = document.getElementById('states-list');

filteredStates.forEach(state => {
    const listItem = document.createElement('li');
    listItem.textContent = state;
    statesList.appendChild(listItem);
});