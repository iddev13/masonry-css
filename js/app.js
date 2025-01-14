function setMasonryHeight() {
	const itemsCols = 5;
	const initialGapYPx = 4;
	const itemsOffsetHeight = {
		first: 0,
		second: 0,
		third: 0,
		fourth: 0,
		fifth: 0,
	};
	const breakItem = 4;
	const itemsContainer = document.querySelector('.items');
	const itemsList = document.querySelectorAll('.item');
	const itemsLength = itemsList.length - breakItem;

	let containerHeight = 0;
	let columnsNumber = 0;
	let counter = 0;

	function f1(varN) {
		for (let i = varN; i < itemsLength; i = i + itemsCols) {
			counter++;
			itemsOffsetHeight[Object.keys(itemsOffsetHeight)[varN]] =
				itemsOffsetHeight[Object.keys(itemsOffsetHeight)[varN]] +
				itemsList[i].offsetHeight;
		}
		columnsNumber = counter / itemsCols;
	}

	for (let i = 0; i < itemsCols; i++) f1(i);
	for (const key in itemsOffsetHeight) {
		if (itemsOffsetHeight[key] > containerHeight) {
			containerHeight = itemsOffsetHeight[key];
		}
	}

	let gapY = initialGapYPx * columnsNumber;

	itemsContainer.style.height = containerHeight + gapY + 'px';

	// !EXAMPLE DELETE
	// first 78 + 204 + 114 = 396
	// second 150 + 150 + 204 = 504
	// third 114 + 132 + 78 = 324
	// fourth 204 + 132 + 204 = 540
	// fifth 78 + 150 + 132 = 360
}

setMasonryHeight();
