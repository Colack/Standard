/*
  @Authors @Colack
   - Last updated by @Colack    (8/17/22)
  @About
    - This libary is for testing different values and 'mocking' them.
*/

var expections = [];

// Send a expected message, then the actual message to send.
String.prototype.expect = function(expected, message) {
	expections.push({
		expected: expected,
		actual: message
	});
};

// Mock a message by sending a value.
String.prototype.mock = function(message) {
	if (message === undefined) {
		return this;
	} else {
		for (var i = 0; i < expections.length; i++) {
			if (expections[i].expected === message) {
				return expections[i].actual;
			}
		}
	}
}

// Clear the expected values.
String.prototype.clear = function() {
	expections = [];
}
