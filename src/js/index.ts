let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("input");
let toGramButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("toGramButton");
let toOuncesButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("toOuncesButton");
let outputElement: HTMLOutputElement = <HTMLOutputElement> document.getElementById("output");

toGramButton.addEventListener("click", ConvertToGram);

function ConvertToGram(): void {
    var convertedValue = parseInt(inputElement.value) * 28.34952;
    outputElement.innerHTML = inputElement.value + " ounces = " + convertedValue + " grams";
    inputElement.value = null;
}

toOuncesButton.addEventListener("click", ConvertToOunces);

function ConvertToOunces(): void{
    var convertedValue = parseInt(inputElement.value) / 28.34952;
    outputElement.innerHTML = inputElement.value + " grams = " + convertedValue + " ounces";
    inputElement.value = null;
}