const shell = require('electron').shell;
$('.open-in-browser').click((event) => {
		event.preventDefault();
		shell.openExternal(event.target.href);
});