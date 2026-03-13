const display = document.getElementById("display") as HTMLInputElement;

function press(value: string): void {
  display.value += value;
}

function calculate(): void {
  display.value = eval(display.value);
}

function clearDisplay(): void {
  display.value = "";
}
