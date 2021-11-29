const timeElement = document.querySelector('#time')
const currentTime = new Date().toLocaleTimeString()
timeElement.textContent = `The time is: ${currentTime}`

chrome.action.setBadgeText({
    text: "TIME"
}, () => {
    console.log("Finished setting badge text.")
})