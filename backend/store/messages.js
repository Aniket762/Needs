const messages = [
	{
		fromUserId: 2,
		toUserId: 1,
		listingId: 1,
		content: "Hi! are you selling the watch?",
		id: 1,
		dateTime: 1586044521956,
	},
	{
		fromUserId: 2,
		toUserId: 1,
		listingId: 1,
		content: "Can we re-negotiate?I think you are charging more.",
		id: 2,
		dateTime: 1586044521956,
	},
	{
		fromUserId: 2,
		toUserId: 1,
		listingId: 1,
		content: "Hi! I really like the monster shoes",
		id: 3,
		dateTime: 1586044521956,
	},
];

const getMessagesForUser = (toUserId) =>
	messages.filter((message) => message.toUserId === toUserId);

const add = (message) => {
	message.id = messages.length + 1;
	message.dateTime = Date.now();
	messages.push(message);
};

module.exports = { add, getMessagesForUser };
