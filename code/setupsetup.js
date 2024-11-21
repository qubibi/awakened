let is_forandroidtaisaku = false

function isAndroid() {
	if (navigator.userAgentData) return navigator.userAgentData.platform === 'Android';
	else return /Android/i.test(navigator.userAgent);
	}
function showAndroidWarning() {
	is_forandroidtaisaku = isAndroid()
	// console.log(is_android);
	// if (is_android) {
	//   const warningMessage = "Please note that this application has limited support for Android devices. For the best experience, we recommend using other platforms. We are working to improve Android compatibility.";
	//   const warningElement = document.createElement('div');
	//   warningElement.style.padding = '5rem';
	//   warningElement.style.fontSize = "20px"
	//   warningElement.textContent = warningMessage;
	//   document.body.insertBefore(warningElement, document.body.firstChild);
	// }
}
// document.addEventListener('DOMContentLoaded', showAndroidWarning);

showAndroidWarning()



const getOS = () => {
    const p = navigator.userAgentData?.platform?.toLowerCase() || navigator.platform.toLowerCase();
    const u = navigator.userAgent.toLowerCase();
    return p.includes('win') || u.includes('windows') ? 'Windows'
         : p.includes('mac') || u.includes('mac') ? 'macOS'
         : 'Other';
};

const macwin = getOS();


if (macwin == "Windows") is_forandroidtaisaku = true;