const facts = [
	'Moni is possibly the worlds biggest hot cheeto fan. It is a part of life and survival for Moni.',
	"She knows approximately 89.7% of all Disney songs to date. That's accurate. You can trust me.",
	'If you are familiar with the name "Menacing Moni", then you know better than to mess with Moni when she\'s hungry.',
	'She is one of the most selfless people ever. Not a day goes by where she is not putting someone else before her.',
	'Moni is a master mini-golfer. No one has managed a lead in a game of mini golf, when she is the opponent.',
	"If you predicted that Moni is a huge SZA fan, then you'd be correct. ",
	'If you leave your snack unattended, expect Moni to sample to them while you are gone.',
	'Believe it or not, but Moni does a pretty good impression of Kermit the Frog.',
	'She is an amazing artist. She puts even the most minute details into all of her work. Everything she creates results into a masterpiece.',
	"She won't admit it, but she can get pretty close to Mariah Carey's whistle note. My eardrums are still ringing to this day.",
	'Winnie the Pooh and Snoopy are two of her favorite characters within the Disney Universe.',
	'If you think trying to convince her that a type of food or a tv show is good, she will not listen until she tries it on her own.',
	'She is the best friend that anyone could ever ask for. Anyone who thinks otherwise is a nerd and lame.',
	'Sushi is her #1 favorite food in the entire world. Thai food and Vietnamese food are a close second.',
	'If you question her knowledge, she is the queen of immediately googling whatever is being discussed, then rubbing it in your face.',
];

const factSpitter = () => {
	return facts[Math.floor(Math.random() * facts.length)];
};

module.exports = { factSpitter };
