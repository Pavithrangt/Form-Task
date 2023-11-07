let div = document.createElement("div");
let form = document.createElement("form");

document.body.append(div);
div.append(form);

function createLabel(tagName, htmlFor, innerHTML) {
    let label = document.createElement(tagName);
    label.setAttribute("for", htmlFor);
    label.innerHTML = innerHTML;
    return label;
}

function createInput(type, id, name, value, placeholder) {
    let input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("id", id);
    input.setAttribute("name", name);
    input.setAttribute("value", value);
    input.setAttribute("placeholder", placeholder);
    return input;
}

function createBreak() {
    return document.createElement("br");
}

function createCheckbox(id, value) {
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", id);
    checkbox.setAttribute("value", value);

    let label = document.createElement("label");
    label.setAttribute("for", id);
    label.innerHTML = value;

    return [checkbox, label];
}

let label1 = createLabel("label", "in1", "Enter your first name");
let break1 = createBreak();
let input1 = createInput("text", "in1", "firstName", "", "Enter First Name");

let break2 = createBreak();

let label2 = createLabel("label", "in2", "Enter your last name");
let break3 = createBreak();
let input2 = createInput("text", "in2", "lastName", "", "Enter Last Name");

let break4 = createBreak();

let label3 = createLabel("label", "in3", "Address");
let break5 = createBreak();
let input3 = createInput("text", "in3", "address1", "", "Address Line 1");

let break6 = createBreak();

let label4 = createLabel("label", "in4", "Address");
let break7 = createBreak();
let input4 = createInput("text", "in4", "address2", "", "Address Line 2");

let break8 = createBreak();

let label5 = createLabel("label", "in5", "State");
let break9 = createBreak();
let input5 = createInput("text", "in5", "state", "", "Enter State");

let break10 = createBreak();

let label6 = createLabel("label", "in6", "Country");
let break11 = createBreak();
let input6 = createInput("text", "in6", "country", "", "Enter Country");

let break12 = createBreak();

let label7 = createLabel("label", "", "Gender");
let break13 = createBreak();

let maleRadio = createInput("radio", "male", "gender", "male", "");
let maleLabel = createLabel("label", "male", "Male");

let femaleRadio = createInput("radio", "female", "gender", "female", "");
let femaleLabel = createLabel("label", "female", "Female");

let break14 = createBreak();

let [northIndianCheckbox, northIndianLabel] = createCheckbox("northIndian", "North Indian");
let [southIndianCheckbox, southIndianLabel] = createCheckbox("southIndian", "South Indian");
let [chineseCheckbox, chineseLabel] = createCheckbox("chinese", "Chinese");
let [japaneseCheckbox, japaneseLabel] = createCheckbox("japanese", "Japanese");
let [seafoodCheckbox, seafoodLabel] = createCheckbox("seafood", "Seafood");

let break15 = createBreak();

let button = document.createElement("button");
button.innerHTML = "Submit";
button.id = "myButton";
button.addEventListener("click", function(event) {
    event.preventDefault(); 
    let firstName = document.getElementById("in1").value;
    let lastName = document.getElementById("in2").value;
    let address1 = document.getElementById("in3").value;
    let address2 = document.getElementById("in4").value;
    let state = document.getElementById("in5").value;
    let country = document.getElementById("in6").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    
    let selectedFood = [
        northIndianCheckbox.checked && northIndianCheckbox.value,
        southIndianCheckbox.checked && southIndianCheckbox.value,
        chineseCheckbox.checked && chineseCheckbox.value,
        japaneseCheckbox.checked && japaneseCheckbox.value,
        seafoodCheckbox.checked && seafoodCheckbox.value,
    ].filter(Boolean).join(", ");

    let outputDiv = document.createElement("div");
    outputDiv.classList.add("output");

    function displayData(title, value) {
        let row = document.createElement("div");
        row.classList.add("output-row");
        row.innerHTML = `<div class="output-title">${title}</div><div class="output-value">${value}</div>`;
        outputDiv.appendChild(row);
    }

    displayData("First Name:", firstName);
    displayData("Last Name:", lastName);
    displayData("Address Line 1:", address1);
    displayData("Address Line 2:", address2);
    displayData("State:", state);
    displayData("Country:", country);
    displayData("Gender:", gender ? gender.value : "Not selected");
    displayData("Food Choices:", selectedFood || "None selected");

    form.appendChild(outputDiv);
});

form.append(
    label1, break1, input1, break2,
    label2, break3, input2, break4,
    label3, break5, input3, break6,
    label4, break7, input4, break8,
    label5, break9, input5, break10,
    label6, break11, input6, break12,
    label7, break13, maleRadio, maleLabel, femaleRadio, femaleLabel, break14,
    northIndianCheckbox, northIndianLabel, 
    southIndianCheckbox, southIndianLabel, 
    chineseCheckbox, chineseLabel, 
    japaneseCheckbox, japaneseLabel, 
    seafoodCheckbox, seafoodLabel, break15,
    button
);
