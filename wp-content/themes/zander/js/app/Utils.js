const getPosition = (direction, el) => {
	if (direction === 'left') {
		return el.getBoundingClientRect().left + el.offsetWidth;
	}
	return el.getBoundingClientRect().top + el.offsetHeight;
};

const fromHalf = () => window.innerWidth / 2;

export { getPosition, fromHalf };
