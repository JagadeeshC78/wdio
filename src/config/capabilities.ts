export const macChromeCapabilities = [ {
        browserName: 'chrome',
        services: [['chromeDriver', {
            }
        ]],
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['disable-gpu'],
            "excludeSwitches": ["enable-automation"],
            "useAutomationExtension": false,
            'prefs': {
                'credentials_enable_service': false,
                'profile': {
                    'password_manager_enabled': false
                }
            }
        }
    }
]

export const macFirefoxCapabilities = [ {
        browserName: 'firefox',
        services: [['firefoxDriver', {
            }
        ]],
    }
]

export const winChromeCapabilities = [ {
        browserName: 'chrome',
        services: [['chromeDriver', {
            }
        ]],
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['disable-gpu'],
            "excludeSwitches": ["enable-automation"],
            "useAutomationExtension": false,
            'prefs': {
                'credentials_enable_service': false,
                'profile': {
                    'password_manager_enabled': false
                }
            }
        }
    }
]

export const winFirefoxCapabilities = [ {
        browserName: 'firefox',
        services: [['firefoxDriver', {
            }
        ]],
    }
]

export const multiCapabilities = {
    "Chrome": [...macChromeCapabilities],
    "Firefox": [...macFirefoxCapabilities],
    "WinChrome": [...winChromeCapabilities],
    "WinFirefox": [...winFirefoxCapabilities],
};