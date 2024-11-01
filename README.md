# HKMU_Auto_Refresh

Auto refresh the Class Activities(for students) page of HKMU OLE.

## Description

This project demonstrates how to leverage Node.js and Puppeteer to create a web scraper that automatically refreshes a specified webpage at defined intervals. Puppeteer, a powerful Node library, provides a high-level API to control headless Chrome or Chromium, allowing for seamless interactions with web pages. The auto-refresh functionality is implemented to ensure the latest content is captured without manual intervention. Simply configure the desired URL and refresh interval in the script, and run the application to start scraping data in real-time.

## Getting Started

### Dependencies

* Linux
* Node.js version >= 20.16.0

### Installing

* Download the source from latest release.
* Create new folder to contain js file and package.json.

### Executing program

* Open the terminal in the directory of js file and package.json.

```
npm install
```

```
node auto.js
```

## Setup

* Get via open the course activites of the course first, copy the link and open in chrome incognito window to get.

```
wait page.goto(''); // Course Login URL
```

* Get via course activites of the course, require login.

```
const url = ''; // Course Class Activities Refresh URL
```

* Here to fill in the studentID and password.

```
const username = ''; // studentid
const password = ''; //password
```

* Here to set the target weekday.

```
if (today.getDay() !== 2) { // 1 is monday ...
```

* Here to set the Start time and End time

```
const startTime = new Date();
startTime.setHours(9, 0, 0, 0); // Start Time
const endTime = new Date();
endTime.setHours(11, 10, 0, 0); // End Time
```

* Default will refresh every 5 minutes during the time period. You can edit it from here:
  ```
  await new Promise(resolve => setTimeout(resolve, 300000)); // 5 minutes (unit in milliseconds.)
  ```


## Sample Crontab To Run The Script

* Run at every wednesday 16:00 and generate auto.log everytime for logging.
```
0 16 * * 3 . $HOME/.nvm/nvm.sh && rm -f /home/student/auto_s689f_lecture/auto.log && cd /home/student/auto_s689f_lecture && /home/student/.nvm/versions/node/v20.16.0/bin/node auto.js >> /home/student/auto_s689f_lecture/auto.log 2>&1<br>
<br>Run at every wednesday 16:00 and generate auto.log everytime for logging.
```

## Authors

[@shamough1792](https://github.com/shamough1792)

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Poe](https://poe.com/)
