// only number input type text
export const filterText = (text: string) => {
	return text.replace(/[^0-9]/g, "");
};
