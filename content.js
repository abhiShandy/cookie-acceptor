const commonSelectors = [
	'button#onetrust-accept-btn-handler',
	'div[aria-label="Sign in with Google"] div#close'
	// Add more common selectors here
];

function findAndClickButton(selectors) {
	for (const selector of selectors) {
		const button = document.querySelector(selector);
		if (button) {
			button.click();
			console.log(`Button clicked using selector: ${selector}`);
			return true;
		}
	}
	return false;
}

function dismissPrompts() {
	if (!findAndClickButton(commonSelectors)) {
		console.log('No cookie prompt found');
	}
}

function runDismissPrompts() {
	setTimeout(dismissPrompts, 1000);
}

function initializePromptDismissor() {
	runDismissPrompts();
	document.addEventListener('DOMContentLoaded', runDismissPrompts);
}

initializePromptDismissor();