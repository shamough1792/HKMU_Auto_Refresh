# HKMU_Auto_Refresh

Auto refresh the Class Activities(for students) page of HKMU OLE.

<h1>Quick Start</h1>

Linux

0. Node.js <strong>version >= 20.16.0</strong>
1. npm install puppeteer
2. npm start

<h1>Setup</h1>
<strong>**await page.goto(''); // Course Login URL**</strong> <br>
<br>
Get via open the course activites of the course first, copy the link and open in chrome incognito window to get.<br>
<br><strong>**const url = ''; // Course Class Activities Refresh URL**</strong><br>
<br>Get via course activites of the course, require login.

<br><strong>**const username = ''; // studentid**</strong> <br>
<strong>**const password = ''; //password**</strong>

Here to fill in the studentID and password.

<br><strong>**if (today.getDay() !== 2) { // 1 is monday ...**</strong><br>
<br>Here to set the target weekday.

<br><strong>**// Define the time period
const startTime = new Date();
startTime.setHours(9, 0, 0, 0); // Start Time
const endTime = new Date();
endTime.setHours(11, 10, 0, 0); // End Time**</strong><br>
<br>Here to set the Start time and End time

<br>Default will refresh every 5 minutes during the time period.

<h1>Sample Crontab To Run The Script</h1>
0 16 * * 3 . $HOME/.nvm/nvm.sh && rm -f /home/student/auto_s689f_lecture/auto.log && cd /home/student/auto_s689f_lecture && /home/student/.nvm/versions/node/v20.16.0/bin/node auto.js >> /home/student/auto_s689f_lecture/auto.log 2>&1<br>
<br>Run at every wednesday 16:00 and generate auto.log everytime for logging.

<h1>Credits</h1>
- POE
