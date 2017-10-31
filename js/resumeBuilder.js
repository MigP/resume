var bio = {
	"name": "Miguel Pinto",
	"role": "Web Developer",
	"contacts": {
		"mobile": "(+32) (0)479 51 55 84",
		"email": "mig06@hotmail.co.uk",
		"github": "http://github.com/MigP",
		"location": "Brussels, Belgium"
	},
	"welcomeMessage": "Welcome to my resume page",
	"skills": [
		"SQL", "AJAX", "Joomla", "PHP", "Javascript", "Jquery", "CSS", "HTML", "XML", "JSON", "Excel", "Word", "Outlook", "Illustrator", "Dreamweaver", "Flash", "After Effects", "Premiere", "InDesign", "Photoshop", "Languages"
	],
	"biopic": "images/miguel.jpg",
	"display": function() {
	// Creates variables with formatted bio data and displays that data	
		// Shows name and role
			var formattedName = HTMLheaderName.replace("%data%", bio.name);
			var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
			$("#header").prepend(formattedRole);
			$("#header").prepend(formattedName);
		// Shows contacts data
			var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
			var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
			var formattedLocation= HTMLlocation.replace("%data%", bio.contacts.location);
			$("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
		// Shows picture and welcome message
			var formattedBioPic= HTMLbioPic.replace("%data%", bio.biopic);
			var formattedWelcomeMsg= HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
			$("#header").append(formattedBioPic, formattedWelcomeMsg);
		// Shows skills section only if there are any skills present
			if (work.jobs.length > 0) {
				$("#header").append(HTMLskillsStart);
				var formattedSkills;
				for (var a= 0; a < bio.skills.length; a++) {
					formattedSkills = HTMLskills.replace("%data%", bio.skills[a]);
					$("#skills").append(formattedSkills);
				}
			}
	}
};

var education = {
	"schools": [{
		"name": "European School of Luxembourg",
		"location": "Luxembourg, Luxembourg",
		"degree": "European Baccalaureate Certificate (BAC)",
		"majors": ["(High school)"],
		"dates": "Sep 1987–Jul 1993",
		"url": "http://www.euroschool.lu/"
	},{
		"name": "Université Libre de Bruxelles (ULB) ",
		"location": "Brussels, Belgium",
		"degree": "(first year only)",
		"majors": ["Computing (Informatique)"],		
		"dates": "Sep 1993–Jul 1994",
		"url": "https://www.ulb.ac.be/"
	},{
		"name": "South Bank University (SBU)",
		"location": "London, UK",
		"degree": "BSc",
		"majors": ["Software Engineering"],
		"dates": "Sep 1994–Aug 1998",
		"url": "https://www.lsbu.ac.uk/"
	},{
		"name": "Oxford House Computer Training",
		"location": "London, UK",		
		"degree": "Microsoft Certified Web Design Certificate",
		"majors": ["Web Design"],
		"dates": "Jan 2001–Jul 2001",
		"url": "http://www.ohcenglish.com/"
	}],
	"onlineCourses": [{
		"title": "Front-End Web Developer",
		"school": "Udacity",
		"dates": "29 Mar 2017-in progress",
		"url": "http://classroom.udacity.com/nanodegrees/nd001/syllabus"
	},{
		"title": "Intro to AJAX",
		"school": "Udacity",
		"dates": "21 May 2017-22 May 2017",
		"url": "http://classroom.udacity.com/courses/ud110"
	}],
	"display": function() {
	// Creates variables with formatted education data and displays that data
		// Shows schools section only if there are any schools present
			if (education.schools.length > 0) {
				var formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor;
				for (var school = 0; school < education.schools.length; school++) {
					$("#education").append(HTMLschoolStart);
					formattedSchoolName = (HTMLschoolName.replace("%data%", education.schools[school].name)).replace("#", education.schools[school].url);
					formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
					formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
					formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
					for (var major = 0; major < education.schools[school].majors.length; major++) {
						formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
					}
					$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor);
				}
			}
		// Shows online classes section only if there are any online classes present
			if (education.onlineCourses.length > 0) {
				var formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineUrl;
				$("#education").append(HTMLonlineClasses);
				for (var onlineClass = 0; onlineClass < education.onlineCourses.length; onlineClass++) {
					$("#education").append(HTMLschoolStart);
					formattedOnlineTitle = (HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title)).replace("#", education.onlineCourses[onlineClass].url);
					formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school);
					formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].dates);
					formattedOnlineUrl = (HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url)).replace("#", education.onlineCourses[onlineClass].url);
					$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineUrl);
				}
			}
	}
};

var work = {
	"jobs": [{
		"employer": "European Parliament",
		"title": "Freelance data entry (with some basic translation)",
		"location": "Luxembourg, Luxembourg",
		"dates": "Dec 1992–Dec 1994",
		"description": "Added specialised data to terminology databases in French, English, and Portuguese, and verified whether the correct translations were used.",
		"url": "http://www.europarl.europa.eu/"
	},{
		"employer": "Awesome Interiors",
		"title": "Database maintenance and general secretarial work",
		"location": "London, UK",
		"dates": "Nov 1998–Apr 2001",
		"description": "Maintained and updated the company’s databases with products, clients, and sales.",
		"url": "http://www.awesome-interiors.co.uk/"
	},{
		"employer": "ERIO (European Roma Information Office)",
		"title": "Graphic/Web design and digital media (volunteer)",
		"location": "Brussels, Belgium",
		"dates": "Sep 2012-Present",
		"description": "Provided web and graphic design for various projects and the company’s own web page. Created and edited digital media content for various projects, such as video documentaries and awareness campaigns.",
		"url": "http://www.erionet.eu/"
	}],
	"display": function() {
	// Creates variables with formatted work data and displays that data
		// Shows jobs section only if there are any jobs present
			if (work.jobs.length > 0) {
				var formattedEmployer, formattedTitle, formattedDates, formattedLocation, formattedDescription;
				for (var job = 0; job < work.jobs.length; job++) {
					$("#workExperience").append(HTMLworkStart);
					formattedEmployer = (HTMLworkEmployer.replace("%data%", work.jobs[job].employer)).replace("#", work.jobs[job].url);
					formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
					formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
					formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
					formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
					$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
				}
			}
	}
};

var projects = {
	"projects": [{
		"title": "Project 1",
		"dates": "in progress",
		"description": "Future project",
		"url": "",
		"images": ["images/1.jpg", "images/2.jpg"]
	},{
		"title": "Project 2",
		"dates": "in progress",
		"description": "Future project",
		"images": ["images/3.jpg", "images/4.jpg"]
	}],
	"display": function() {
	// Creates variables with formatted ptojects data and displays that data
		// Shows projects section only if there are any projects present
			if (projects.projects.length > 0) {
				var formattedTitle, formattedDates, formattedDescription, formattedImages;
				for (var project = 0; project < projects.projects.length; project++) {
					$("#projects").append(HTMLprojectStart);
					formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
					formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
					formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
					formattedImages = "";
					for (var images = 0; images < projects.projects[project].images.length; images++) {
						formattedImages += HTMLprojectImage.replace("%data%", projects.projects[project].images[images]);
					}
					$(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImages);
				 }
			}
	}
};

bio.display();
education.display();
projects.display();
work.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

function locationizer(work_obj) {
	var locations = [];
	for (var job = 0; job < work_obj.jobs.length; job++) {
		locations.push(work_obj.jobs[job].location);
	}
	return locations;
}

function inName(names) {
	var name = "";
	names = names.trim().split(" ");
	for (var a = 0; a < names.length; a++) {
		if (a === names.length-1) {
			name += names[a].toUpperCase();
		} else {
			name += names[a].slice(0,1).toUpperCase() + names[a].slice(1).toLowerCase() + " ";
		}
	}
	return name;
}