// JavaScript for calculator functionality
const display = document.getElementById("display");

/* Thêm ký tự vào hiển thị */
function appendToDisplay(input) {
  display.value += input;
}

/* AC – xoá toàn bộ */
function clearDisplay() {
  display.value = "";
}

/* X – xoá 1 ký tự */
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

/* = – tính toán */
function calculate() {
  try {
    // Chỉ eval khi biểu thức kết thúc bằng số hoặc ')'
    if (!/[\d)]$/.test(display.value)) return;

    const result = eval(display.value);

    if (result !== undefined && !isNaN(result)) {
      display.value = result;
    }
  } catch {
    // Sai thì KHÔNG làm gì → giữ nguyên
  }
}

/* ± – đổi dấu số cuối cùng */
function toggleSign() {
  let value = display.value;

  if (value === "") return;

  // Tìm số cuối cùng trong biểu thức
  const match = value.match(/(-?\d+\.?\d*)$/);

  if (!match) return;

  const number = match[0];
  const index = value.lastIndexOf(number);

  // Nếu số đang âm → đổi thành dương
  if (number.startsWith("-")) {
    display.value = value.slice(0, index) + number.slice(1);
  }
  // Nếu số đang dương → đổi thành âm
  else {
    display.value = value.slice(0, index) + "-" + number;
  }
}
