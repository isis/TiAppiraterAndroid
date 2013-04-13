var TiAppirater = require('jp.isisredirect.appirater');
TiAppirater.load({
	/*
	 Set your Apple generated software id here.
	 */
	appid: "552035781",
	/*
	 Users will need to have the same version of your app installed for this many
	 days before they will be prompted to rate it.
	 */
	daysUntilPrompt: 1,
	/*
	 An example of a 'use' would be if the user launched the app. Bringing the app
	 into the foreground (on devices that support it) would also be considered
	 a 'use'. 
	 Users need to 'use' the same version of the app this many times before
	 before they will be prompted to rate it.
	 */
	usesUntilPrompt: 2,
	/*
	 Once the rating alert is presented to the user, they might select
	 'Remind me later'. This value specifies how long (in days) Appirater
	 will wait before reminding them.
	 */
	timeBeforeReminding: 2,
	/*
	 'YES' will show the Appirater alert everytime. Useful for testing how your message
	 looks and making sure the link to your app's review page works.
	 */
	debug: true
});


var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

// Trigger the "opened" event when the app becomes active
win.addEventListener('open',function(e){
	TiAppirater.opened();
})

var label = Ti.UI.createLabel();
win.add(label);
win.open();
