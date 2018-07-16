function Excuse() {
	
	var randomBodyParts = ['armpit', 'nose', 'hand', 'leg', 'hand', 'heart', 'liver', 'kidney', 'toes', 
		'fingers', 'butt', ];
	
	
	var randomAdjectives = ['smells', 'ate', 'peer-reviewed', 'destroyed', 'deleted', 'erased', 'remixed', 'twitched', 'recycled', 'livetweeted',
	'undermined', 'underbid', 'upcycled', 'gave away', 'plagiarised', 'confiscated', 'barfed on', 'stole', 'ransomed', 'spilled water on', 
	'lost', 'misplaced', 'buried', 'shredded', 'hid', 'liberated', 'left with', 'ebayed', 'craigslisted', 'etsyed', 'tweeted', 'instagrammed',
	'snapchatted', 'youtubed', 'dunked on', 'subteweeted', 'favorited', 'upvoted', 'downvoted', 'live cast', 'pinned', 'vlogged', 'blogged about'];
	
	
	var randomWords = ['homework', 'project', 'essay', 'film project', 'visualization', 'infographic', 'pre-writing', 'term paper', 'lab report', 
	'reading log', 'summary', 'article', 'flash cards', 'study guide', 'textbook', 'workbook', 'reading book', 'diorama', 'poster', 'dreams', 'laptop', 
	'computer', 'tablet', 'momentum', 'report', 'slideshow', 'slide deck', 'presentation', 'worksheet', 'handout', 'notes', 'portfolio', 'blog post', 'comment'];
	
	// Pick a random body part from the randomBodyParts array:
	var who = randomBodyParts[Math.floor(Math.random()* (randomBodyParts.length-1))];
	
	// Pick a random adjective from the randomAdjectives array:
	var did = randomAdjective[Math.floor(Math.random()* (randomAdjectives.length-1))];
	
	// Pick a random word from the randomWords array:
	var what = randomWord[Math.floor(Math.random()* (randomWords.length-1))];
	
	// Join all the random strings into a sentence:
	var random insults = "Your " + randomBodyPart + "is like a " + randomAdjective + " " + randomWord + "!!!";
	randomInsult;
	
	document.getElementById('excuses').innerHTML = '<div>My ' + who + ' ' + did + '<br> my ' + what + '.</div>'
	
}