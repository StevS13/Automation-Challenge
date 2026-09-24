# Automation-Challenge


Welcome to Rumah123 Automation Mobile Challenge, please follow below instruction for this chanllenge

## Requirement:
- use newest Appium Version
- use WebdriverIO as framework
- use CommonJS as a code
- use Page Object Model for code structure
- use Gherkin as Test Cases

## Test Cases:
- You are as an QA at 99, please download latest version of 99 (do not download the Pro Apps). You have the project to testing the revamp part on homepage, please scan all the locators and make it into the automation. so you can reduce testing time and also catch the bugs very sooner.
- How to access the homepage
1. please open the app
2. once it's open you will see the homepage


Rule:
- Please forking this repository
- Invite indra99co as collaborator
- once you done, please push into your branch and create the PR

---

## 🚀 QA Automation Implementation (My Solution)

QA Automation test suite for 99.co Android application built with WebdriverIO, Appium v2, and Cucumber BDD framework.

### 🛠️ Tech Stack
- **Framework:** WebdriverIO v8
- **Driver:** Appium v2
- **BDD Framework:** Cucumber
- **Module System:** CommonJS (`.cjs`)

### 🧪 Automated Test Scenarios
1. **Homepage Verification:** Verifies that the search bar section is displayed on launch.
2. **Search Interaction:** Clicks the search bar and inputs a location (`"Jakarta Barat"`).
3. **Bottom Navigation:** Navigates through bottom navigation tabs (`"Hunian Baru"` and `"Akun Saya"`).

### 📁 Project Structure
- `features/homepage.feature` : Gherkin feature scenarios
- `features/pageobjects/home.page.js` : Page Object Model locators and functions
- `features/step-definitions/steps.js` : Cucumber step implementation

### ▶️ How to Run Tests
1. Start your Android Emulator.
2. Execute the test command in your terminal:
   ```bash
   npx wdio run wdio.conf.cjs