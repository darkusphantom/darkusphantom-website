const isShowMenu = (menu) => {
	if(menu.display === 'block') {
		return true;
	} else {
		return false;
	}
}

export { isShowMenu };