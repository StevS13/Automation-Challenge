const path = require('path');

exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    port: 4723,

    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './features/**/*.feature'
    ],
    exclude: [],

    //
    // ============
    // Capabilities
    // ============
    maxInstances: 1,
    capabilities: [{
        // Capabilities untuk Native App Android
        'appium:platformName': 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'emulator-5554', // Sesuaikan dengan id emulator kamu di 'adb devices'
        
        // Path menuju file APK 99.co di folder app
        'appium:app': path.join(process.cwd(), './app/99co.apk'),
        
        'appium:appPackage': 'com.urbanindo.android',
        'appium:autoGrantPermissions': true,
        'appium:newCommandTimeout': 240
    }],

    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    // Test runner services
    services: ['appium'],

    // Framework
    framework: 'cucumber',
    reporters: ['spec'],

    // Cucumber configuration
    // Cucumber configuration
    cucumberOpts: {
        require: [
            './features/step-definitions/**/*.js',
            './features/step-definitions/**/*.cjs'
        ],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    }
}