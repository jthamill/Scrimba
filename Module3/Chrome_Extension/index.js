let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));


if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
}
render(myLeads);


function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
      // Wrap the lead in an anchor tag (<a>) inside the <li>
      // Can you make the link open in a new tab?
      // listItems += '<li><a target="_blank" href=' +myLeads[i] + '>' + myLeads[i] + '</a></li>'
      listItems += `
      <li>
        <a target="_blank" href="${leads[i]}">${leads[i]}</a>
      </li>`;
      // re-factored with string literal
  }
  ulEl.innerHTML = listItems;  
}


inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    console.log(localStorage.getItem("myLeads"));
})

deleteBtn.addEventListener("dblclick", () =>{
  localStorage.clear();
  myLeads = [];
  render(myLeads);
})