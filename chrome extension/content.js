/* 
* @Author: tiffany chen
* @Date:   02-15-2015
* @Last Modified by:   tiffchen01
* @Last Modified time: 2015-02-15
*/

'use strict';

// This get my code runs every 10 ms. So that it can catch any changes happened on the uesr's page.
var myVar = setInterval(function () {myTimer()}, 10);

// This is a hash table to store all the names I have changed.
var changed_names = new Object();

function myTimer() {
	// Change names in chat list
	var friend_names = document.getElementsByClassName('_55lr');

	var index;
	for (index = 0; index < friend_names.length; ++index)  {
		// This makes sure I won't change names that are already on my celebreits list
		if (presidents.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		// If I have changed target name before, it should be on the hash table. So a hash table lookup is necessary. If there is a match, I have to change target name to the same as the one in hash table. This is to guarentee consistency.
		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * presidents.length);
			changed_names[friend_names[index].textContent] = presidents[random_number];
			friend_names[index].textContent = presidents[random_number];
		}

		
	}

	/***********************************************************************/

	// Change names in chat window
	friend_names = document.getElementsByClassName('titlebarText');
	for (index = 0; index < friend_names.length; ++index)  {
		if (presidents.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * presidents.length);
			changed_names[friend_names[index].textContent] = presidents[random_number];
			friend_names[index].textContent = presidents[random_number];
		}
	}

	/***********************************************************************/

	// Change names in comments
	var temp_names = document.querySelectorAll('span');
	friend_names = [];
	var comments_pattern = new RegExp("\\$author");
	for (var i = temp_names.length - 1; i >= 0; i--) {
		if(comments_pattern.test(temp_names[i].getAttribute('data-reactid'))) {
			friend_names.push(temp_names[i]);
		}
	};

	for (index = 0; index < friend_names.length; ++index)  {
		if (presidents.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * presidents.length);
			changed_names[friend_names[index].textContent] = presidents[random_number];
			friend_names[index].textContent = presidents[random_number];
		}
	}

	/***********************************************************************/

	// Change names in posts
	temp_names = document.querySelectorAll('a');
	friend_names = [];
	var posts_pattern = new RegExp("user.php");
	for (var i = temp_names.length - 1; i >= 0; i--) {
		if((posts_pattern.test(temp_names[i].getAttribute('data-hovercard')))
		&& !temp_names[i].hasAttribute('aria-hidden')) {
			friend_names.push(temp_names[i]);
		}
	};

	for (index = 0; index < friend_names.length; ++index)  {
		if (presidents.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * presidents.length);
			changed_names[friend_names[index].textContent] = presidents[random_number];
			friend_names[index].textContent = presidents[random_number];
		}
	}

	/***********************************************************************/

	// Change names in hovercard!!!!!!
	friend_names = document.getElementsByClassName('ellipsis');
	for (index = 0; index < friend_names.length; ++index)  {
		if (presidents.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * presidents.length);
			changed_names[friend_names[index].textContent] = presidents[random_number];
			friend_names[index].textContent = presidents[random_number];
		}
	}

	/***********************************************************************/

	// Change names in profile homepage title
	friend_names = document.getElementsByClassName('_8_2');
	for (index = 0; index < friend_names.length; ++index)  {
		if (presidents.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * presidents.length);
			changed_names[friend_names[index].textContent] = presidents[random_number];
			friend_names[index].textContent = presidents[random_number];
		}
	}

	/***********************************************************************/

	// Change names in people you may know
	friend_names = document.getElementsByClassName('nameText');
	for (index = 0; index < friend_names.length; ++index)  {
		if (presidents.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * presidents.length);
			changed_names[friend_names[index].textContent] = presidents[random_number];
			friend_names[index].textContent = presidents[random_number];
		}
	}

	/***********************************************************************/

	// Change names in profileLink
	friend_names = document.getElementsByClassName('profileLink');
	for (index = 0; index < friend_names.length; ++index)  {
		if (presidents.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * presidents.length);
			changed_names[friend_names[index].textContent] = presidents[random_number];
			friend_names[index].textContent = presidents[random_number];
		}
	}

	/***********************************************************************/

	// Change names in friends on profile page
	friend_names = document.getElementsByClassName('mas name');
	for (index = 0; index < friend_names.length; ++index)  {
		if (presidents.indexOf(friend_names[index].textContent) != -1) {
			continue;
		}

		if (friend_names[index].textContent in changed_names) {
			friend_names[index].textContent = changed_names[friend_names[index].textContent];
		} else {
			var random_number = Math.floor(Math.random() * presidents.length);
			changed_names[friend_names[index].textContent] = presidents[random_number];
			friend_names[index].textContent = presidents[random_number];
		}
	}

}

// presidents
var presidents = [
'George Washington',
'John Adams', 
'Thomas Jefferson',
'James Madison',
'James Monroe',
'John Quincy Adams',
'Andrew Jackson', 
'Martin Van Buren', 
'William Henry Harrison', 
'John Tyler', 
'James Knox Polk', 
'Zachary Taylor', 
'Millard Fillmore', 
'Franklin Pierce',
'James Buchanan', 
'Abraham Lincoln', 
'Andrew Johnson', 
'Ulysses Simpson Grant',
'Rutherford Birchard Hayes', 
'James Abram Garfield', 
'Chester Alan Arthur', 
'Grover Cleveland', 
'Benjamin Harrison', 
'Grover Cleveland', 
'William McKinley', 
'Theodore Roosevelt', 
'William Howard Taft', 
'Woodrow Wilson', 
'Warren Gamaliel Harding', 
'Calvin Coolidge', 
'Herbert Clark Hoover', 
'Franklin Delano Roosevelt', 
'Harry S Truman', 
'Dwight David Eisenhower', 
'John Fitzgerald Kennedy', 
'Lyndon Baines Johnson', 
'Richard Milhous Nixon',
'Gerald Rudolph Ford Jr', 
'James Earl Carter', 
'Ronald Wilson Reagan', 
'George Herbert Walker Bush',
'William Jefferson Clinton', 
'George W. Bush', 
'Barack Obama', 
];