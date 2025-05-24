const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let totalPrice = 0;
	const priceElement = document.querySelectorAll('.prices');
	priceElement.forEach(cell => {
		totalPrice += parseFloat(cell.textContent);
	})
	const table = document.querySelector('table');
	const totalRow = document.createElement('tr');
	const totalCell = document.createElement('td');
	totalCell.colSpan = 2;
	totalCell.textContent = `Total price: Rs ${totalPrice}`;
	totalRow.appendChild(totalCell);
	table.appendChild(totalRow);

	getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);

