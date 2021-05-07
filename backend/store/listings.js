const listings = [
	{
		id: 1,
		title: "Best Cycle",
		images: [{ fileName: "cycle" }],
		price: 1500,
		categoryId: 5,
		userId: 1,
		location: {
			latitude: 23.5204,
			longitude: 87.3119,
		},
	},
	{
		id: 2,
		title: "66+1 Diarios book",
		images: [{ fileName: "book" }],
		categoryId: 1,
		price: 200,
		userId: 2,
		location: {
			latitude: 23.5204,
			longitude: 87.3119,
		},
	},
	{
		id: 3,
		title: "Bose headphones",
		images: [{ fileName: "headphone" }],
		categoryId: 1,
		price: 700,
		userId: 2,
		location: {
			latitude: 23.5204,
			longitude: 87.3119,
		},
	},
	{
		id: 4,
		title: "Monster running shoes",
		images: [{ fileName: "shoes" }],
		categoryId: 1,
		price: 800,
		userId: 2,
		location: {
			latitude: 23.5204,
			longitude: 87.3119,
		},
	},
	{
		id: 5,
		title: "Smart Watch fitbit",
		images: [{ fileName: "watch" }],
		categoryId: 1,
		price: 600,
		userId: 2,
		location: {
			latitude: 23.5204,
			longitude: 87.3119,
		},
	},
];

const addListing = (listing) => {
	listing.id = listings.length + 1;
	listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
	addListing,
	getListings,
	getListing,
	filterListings,
};
