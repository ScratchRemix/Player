var projectID = window.location.hash;
projectID = projectID.replace("#", "");

document.getElementById('if').src='https://scratch.mit.edu/projects/'+projectID+'/embed';
