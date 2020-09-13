$(document).ready(function() {

	$('a[href^="#"]').on('click', scrollToSection);
	$(window).scroll(activateRelevantSectionLink);

});

function scrollToSection(event) {
	event.preventDefault();
	$(document).off("scroll");
	$('a').each(function () {
		 $(this).removeClass('active');
	})
	$(this).addClass('active');

	var target = this.hash,
		 menu = target;
	$target = $(target);
	$('html, body').stop().animate({
		 'scrollTop': $target.offset().top+2
	}, 600, 'swing', function () {
		 window.location.hash = target;
	});
	$(mainMenu).removeClass("show");
}

function activateRelevantSectionLink() {
	var currScrollPos = $(window).scrollTop() + 1; // Current position.
	var homePos = $('#home').offset().top; // #home position.
	var portfolioPos = $('#portfolio').offset().top; // #portfolio position.
	var aboutPos = $('#about').offset().top; // #about position.
	var contactPos = $('#contact').offset().top; // #contact position.

	// If at main #home section, inactive all.
	if (currScrollPos < portfolioPos) {
		$("#aboutLink").removeClass("active");
		$("#contactLink").removeClass("active");
		$("#portfolioLink").removeClass("active");
	}

	// If you have scrolled to #portfolio, activate #porfolioLink.
	if (currScrollPos >= portfolioPos && currScrollPos < aboutPos) {
		$("#portfolioLink").addClass("active");
	} else {
		$("#portfolioLink").removeClass("active");
	}

	// If you have scrolled to #portfolio, activate #porfolioLink.
	if (currScrollPos >= aboutPos && currScrollPos < contactPos) {
		$("#aboutLink").addClass("active");
	} else {
		$("#aboutLink").removeClass("active");
	}

	// If you have scrolled to #portfolio, activate #porfolioLink.
	if (currScrollPos >= contactPos) {
		$("#contactLink").addClass("active");
	} else {
		$("#contactLink").removeClass("active");
	}

}

// function scrollToPortfolio(event) {
//    $('html, body').animate({scrollTop: $("#portfolio").offset().top}, 700);
//    $("#portfolioLink").addClass("active");
//    $("#aboutLink").removeClass("active");
//    $("#contactLink").removeClass("active");
// }
//
// function scrollToAbout(event) {
//    $('html, body').animate({scrollTop: $("#about").offset().top}, 700);
//    $("#portfolioLink").removeClass("active");
//    $("#aboutLink").addClass("active");
//    $("#contactLink").removeClass("active");
// }
//
// function scrollToContact(event) {
//    $('html, body').animate({scrollTop: $("#contact").offset().top}, 700);
//    $("#portfolioLink").removeClass("active");
//    $("#aboutLink").removeClass("active");
//    $("#contactLink").addClass("active");
// }
//
// function scrollToHome(event) {
//    $('html, body').animate({scrollTop: $("#home").offset().top}, 700);
//    $("#portfolioLink").removeClass("active");
//    $("#aboutLink").removeClass("active");
//    $("#contactLink").removeClass("active");
// }
