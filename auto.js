const puppeteer = require('puppeteer');

async function login(page, username, password) {
    await page.goto(''); // Course Login URL

    // Wait for the username input field to load and fill it
    await page.waitForSelector('input[name="Ecom_User_ID"]'); // Using the name selector for username
    await page.type('input[name="Ecom_User_ID"]', username); // Fill in the username

    // Wait for the password input field to load and fill it
    await page.waitForSelector('input[name="Ecom_Password"]'); // Using the name selector for password
    await page.type('input[name="Ecom_Password"]', password); // Fill in the password

    // Wait for the login button to be available and click it
    await page.waitForSelector('input[name="loginButton2"]'); // Using the name selector for the login button
    await page.click('input[name="loginButton2"]'); // Click the login button

    // Wait for navigation after logging in
    await page.waitForNavigation();

    console.log('Logged in successfully!');
}

async function refreshWebsite(page, url) {
    await page.goto(url);

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const date = String(now.getDate()).padStart(2, '0');
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

    console.log(`Refreshed ${url} at ${year}-${month}-${date} ${time}`);
}

async function run() {
const browser = await puppeteer.launch({
    headless: true, // This should remain false to see the browser
});
const page = await browser.newPage();

    // Replace with your login credentials
    const username = ''; // studentid
    const password = ''; //password

    // Target website URL
    const url = ''; // Course Class Activities Refresh URL

    // Check Day
    const today = new Date();
    if (today.getDay() !== 2) { // 1 is monday ...
        console.log('Today is not Tuesday. Exiting...');
        await browser.close();
        return;
    }

    // Define the time period
    const startTime = new Date();
    startTime.setHours(9, 0, 0, 0); // Start Time
    const endTime = new Date();
    endTime.setHours(11, 10, 0, 0); // End Time

    // Proceed with login
    await login(page, username, password);

    // Start the automated refresh process
    while (new Date() >= startTime && new Date() <= endTime) {
        await refreshWebsite(page, url);
        await new Promise(resolve => setTimeout(resolve, 300000)); // 5 minutes
    }

    console.log('Time period has ended. Closing the browser...'); // Termination message
    await browser.close();
}

run().catch(console.error);

