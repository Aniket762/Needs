const listings = [
	{
		id: 1,
		title: "Monster Nike shoes",
		description: "The shoes you need to win race",
		images: [{ fileName: "nike-shoes" }],
		categoryId: 1,
		price: 950,
		userId: 2,
		location: {
			latitude: 23.520445,
			longitude: 87.311920,
		},
	},
	{
		id: 2,
		title: "Silver watch with perfect crystals",
		images: [{ fileName: "watch" }],
		categoryId: 5,
		price: 1200,
		userId: 2,
		location: {
			latitude: 23.520445,
			longitude: 87.311920,
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
