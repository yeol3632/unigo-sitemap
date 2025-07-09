import { DetailItem } from "./CategorySelector";

export interface MajorCategory {
	id: string;
	name: string;
	count: number;
}

export interface SubCategory {
	id: string;
	name: string;
	majorId: string;
}
export const majorCategories: MajorCategory[] = [
	{ id: "engineering", name: "공학계열", count: 8 },
	{ id: "natural", name: "자연계열", count: 5 },
	{ id: "medical", name: "의학계열", count: 3 },
	{ id: "social", name: "사회계열", count: 7 },
	{ id: "humanities", name: "인문계열", count: 4 },
	{ id: "arts", name: "예술계열", count: 6 },
	{ id: "education", name: "교육계열", count: 2 },
	{ id: "business", name: "상경계열", count: 9 },
];

export const subCategories: SubCategory[] = [
	// Engineering subcategories
	{ id: "eng-all", name: "전체", majorId: "engineering" },
	{ id: "eng-business", name: "경영/경제", majorId: "engineering" },
	{ id: "eng-law", name: "법", majorId: "engineering" },
	{ id: "eng-social", name: "사회과학", majorId: "engineering" },

	// Natural science subcategories
	{ id: "nat-all", name: "전체", majorId: "natural" },
	{ id: "nat-physics", name: "물리학", majorId: "natural" },
	{ id: "nat-chemistry", name: "화학", majorId: "natural" },
	{ id: "nat-biology", name: "생물학", majorId: "natural" },

	// Medical subcategories
	{ id: "med-all", name: "전체", majorId: "medical" },
	{ id: "med-medicine", name: "의학", majorId: "medical" },
	{ id: "med-nursing", name: "간호학", majorId: "medical" },

	// Social subcategories
	{ id: "soc-all", name: "전체", majorId: "social" },
	{ id: "soc-psychology", name: "심리학", majorId: "social" },
	{ id: "soc-sociology", name: "사회학", majorId: "social" },
	{ id: "soc-politics", name: "정치학", majorId: "social" },

	// Add more subcategories for other majors...
];

export const detailItems: DetailItem[] = [
	// Engineering - Business subcategory
	{ id: "eng-bus-all", name: "전체", subId: "eng-business", selected: false },
	{
		id: "eng-bus-1",
		name: "경영 경영정보 기술경영",
		subId: "eng-business",
		selected: true,
	},
	{
		id: "eng-bus-2",
		name: "경영 경영정보 기술경영 2",
		subId: "eng-business",
		selected: true,
	},
	{
		id: "eng-bus-3",
		name: "경영 경영정보 기술경영 3",
		subId: "eng-business",
		selected: true,
	},
	{
		id: "eng-bus-4",
		name: "경영 경영정보 기술경영 4",
		subId: "eng-business",
		selected: true,
	},

	// Natural - Physics subcategory
	{ id: "nat-phy-all", name: "전체", subId: "nat-physics", selected: false },
	{
		id: "nat-phy-1",
		name: "이론물리학",
		subId: "nat-physics",
		selected: false,
	},
	{
		id: "nat-phy-2",
		name: "응용물리학",
		subId: "nat-physics",
		selected: false,
	},
	{
		id: "nat-phy-3",
		name: "천체물리학",
		subId: "nat-physics",
		selected: false,
	},

	// Medical - Medicine subcategory
	{ id: "med-med-all", name: "전체", subId: "med-medicine", selected: false },
	{ id: "med-med-1", name: "내과학", subId: "med-medicine", selected: false },
	{ id: "med-med-2", name: "외과학", subId: "med-medicine", selected: false },
	{
		id: "med-med-3",
		name: "소아과학",
		subId: "med-medicine",
		selected: false,
	},

	// Add more detail items for other subcategories...
];
