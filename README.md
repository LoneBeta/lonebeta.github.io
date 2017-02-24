<h1>Sky Dev: Weather App</h1>
<p>This is my work for the sky development test/</p>
<p>It's around 3 hours worth of work. All of the code is reusable and can be extended. It allows for 5 daily weather forecasts, or can take data for more.</p>
<h3>What could be done different?</h3>
<ul>
	<li>Building with either Laravel or React would have reduced the amount of code would have writen to under 50 lines of code. This didn't seem appropriate for a development test.</li>
	<li>24 hour forecasts could be provided upon clicking on a specific day.</li>
	<li>This application doesn't currently validate the city name. Connecting the search box to something like Select2 would allow for a pre-validated list of city names.</li>
	<li>The weather icon pack I have used doesn't work seamlessly with the data provided by the weather api. More would be required to get this to work.</li>
	<li>Use of a JS library such as D3 would allow us to provide aestehtically pleasing graphs to show in-depth weather data.</li>
	<li>Vagrant is set up to work with this application but isn't being used on the hosted version of this app.</li>
	<li>A nicer design would work well.</li>
	<li>The JS written for this app is all old style objects. None of the newer ES6 syntax has been used. It could easily be converted to us it.</li>
</ul>
<h3>How does it work</h3>
<ul>
	<li>Open the the page here: http://139.59.181.122/public/</li>
	<li>Enter the city name in the search above at the top of the page</li>
	<li>Click "Go"</li>
	<li>Your 5 day weather forecast will display. 6 may display depending on what time of day you use the application.</li>
</ul>
