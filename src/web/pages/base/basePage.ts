import { WebdriverIOElement } from "src/config/webelements";
import { Key } from "webdriverio";

export default class Page {
    element: any;

    /** THIS FUNCTION IS TO MAXIMIZE THE WINDOW AND TO PASS THE APPLICATION URL */
    protected async open(path: string) {
        try {
            await browser.maximizeWindow();
            return browser.url(path);
        } catch (error) {
            console.error("FAILED TO LOAD APPLICATON URL ::", error);
        }
    }

    /** THIS FUNCTION IS TO LOCATE AND PASS SINGLE ELEMENT BASED ON LOCATOR TYPE */
    protected getElement(element: string) {
        try {
            return $(element);
        } catch (error) {
            console.error("getElement - WEB ELEMENT NOT FOUND ::", error);
        }
    }

    /** THIS FUNCTION IS TO LOCATE AND PASS LIST OF WEB ELEMENTS */
    protected getElements(element: any) {
        try {
            return $$(element);
        } catch (error) {
            console.error("LIST OF WEB ELEMENTS NOT FOUND ::", error);
        }
    }

    /** THIS FUNCTION IS TO PERFORM CLICK ACTION FOR ALL CLICKS */
    protected async clickElement(element: WebdriverIOElement) {
        try {
            await element.waitForDisplayed({ timeout: 5000 });
            await element.waitForClickable();
            await element.click();
        } catch (error) {
            console.error("clickElement - ELEMENT IS NOT FOUND TO PERFROM CLICK ACTION ::", error);
        }
    }

    /** THIS FUNCTION IS TO PERFORM CLICK ACTION FOR ALL CLICKS */
    protected async performClick(element: WebdriverIOElement) {
        try {
            await element.waitForDisplayed({ timeout: 5000 });
            await element.waitForClickable();
            await element.click();
            await browser.pause(4000);
        } catch (error) {
            console.error("performClick - ELEMENT IS NOT FOUND IS PERFORM CLICK ACTION ::", error);
        }
    }

    /** THIS FUNCTION IS TO PERFORM DOUBLE CLICK */
    protected async doubleClick(element: WebdriverIOElement) {
        try {
            await element.waitForDisplayed({ timeout: 5000 });
            await element.waitForClickable();
            await element.doubleClick();
            await browser.pause(3000);
        } catch (error) {
            console.error("doubleClick - ELEMENT IS NOT FOUND IS PERFORM DOUBLE CLICK ACTION ::", error);
        }
    }

    /** THIS FUNCTION IS TO ENTER THE VALUE FOR ANY WEB ELEMENT */
    protected async setData(element: WebdriverIOElement, value: string | number, waitTime: number = 5000) {
        try {
            await element.waitForDisplayed();
            await element.clearValue();
            await element.click();
    
            if (!value || value.toString().trim() === "") {
                await element.setValue("a");
                await browser.keys(Key.Backspace);
                await element.setValue("1");
                await browser.keys(Key.Backspace);
            } else {
                await element.setValue(value);
            }
    
            // Use waitTime from parameters or default
            await browser.pause(waitTime);
        } catch (error) {
            console.log(element);
            console.error("setData - ELEMENT IS NOT FOUND TO ENTER THE VALUE ::", error);
        }
    }

    /** THIS FUNCTION IS TO VALIDATE WEB ELEMENT IS ENABLED */
    protected async elementIsEnabled(element: WebdriverIOElement) {
        try {
            await element.waitForDisplayed();
            let result = await element.isEnabled();
            expect(result).toBe(true);
        } catch (error) {
            console.error("elementIsEnabled - ERROR:", error);
            throw error;
        }
    }

    /** THIS FUNCTION IS TO VALIDATE WEB ELEMENT IS DISABLED */
    protected async elementIsDisabled(element: WebdriverIOElement) {
        try {
            await element.waitForDisplayed();
            let result = await element.isEnabled();
            if (result) {
                await browser.pause(1000);
                const classAttributeValue = await this.getAttribute(element, "class");
                const ariaChecked = await this.getAttribute(element, "aria-checked");
                const ariaDisabled = await this.getAttribute(element, "aria-disabled");
                const disabled = await this.getAttribute(element, "disabled");
                result = !classAttributeValue.includes('disabled') && ariaChecked == 'true' && ariaDisabled == 'true' && disabled == 'true';
            }
            expect(result).toBe(false);
        } catch (error) {
            console.error("elementIsDisabled - ERROR:", error);
            throw error;
        }
    }

    /** THIS FUNCTION IS TO VALIDATE ELEMENT IS DISPLAYED */
    protected async elementIsDisplayed(element: WebdriverIOElement) {
        try {
            await browser.pause(1000);
            let result = await element.isDisplayed();
            expect(result).toBe(true);
        } catch (error) {
            console.error("elementIsEnabled - ERROR:", error);
            throw error;
        }
    }

    /** THIS FUNCTION IS TO VALIDATE ELEMENT IS SELECTED */
    protected async elementIsSelected(element: WebdriverIOElement) {
        try {
            await browser.pause(1000);
            let selected = await element.isSelected();
            expect(selected).toBe(true);
        } catch (error) {
            console.error("elementIsSelected - ERROR:", error);
            throw error;
        }
    }

    /** THIS FUNCTION IS TO VALIDATE WEB ELEMENT IS NOT SELECTED */
    protected async elementIsNotSelected(element: WebdriverIOElement) {
        try {
            await element.waitForDisplayed();
            const selected = await element.isSelected();
            expect(selected).toBe(false);
        } catch (error) {
            console.error("elementIsNotSelected - ERROR:", error);
            throw error;
        }
    }

    /** THIS FUNCTION IS TO VALIDATE WEB ELEMENT IS NOT SELECTED */
    protected async radioButtonElementIsNotSelected(element: WebdriverIOElement) {
        try {
            await element.waitForDisplayed();
            const selected = !(await element.isSelected());
            expect(selected).toBe(false);
        } catch (error) {
            console.error("elementIsNotSelected - ERROR:", error);
            throw error;
        }
    }

    /** THIS FUNCTION IS TO GET THE ACTUAL TEXT ASSOCIATED FOR WEB ELEMENT */
    protected async getText(element: WebdriverIOElement, timeout = 5000) {
        try {
            await element.waitForDisplayed({ timeout });
            return (await element.getText()).trim();
        } catch (error) {
            console.error("getText - WEB ELEMENT NOT FOUND TO GET TEXT THE VALUE ::", error);
        }
    }

    /** THIS FUNCTION IS TO GET THE VALUE FROM A WEB ELEMENT */
    protected async getValue(element: WebdriverIOElement) {
        try {
            await element.waitForDisplayed();
            return element.getValue();
        } catch (error) {
            console.error("WEB ELEMENT NOT FOUND TO GET THE VALUE ::", error);
        }
    }

    /** THIS FUNCTION IS TO GET THE ACTUAL VALUE FROM ATTRIBUTE */
    protected async getAttribute(element: WebdriverIOElement, attributeName: string) {
        try {
            await element.waitForDisplayed();
            await browser.pause(3000);
            return element.getAttribute(attributeName);
        } catch (error) {
            console.error("getAttribute - WEB ELEMENT NOT FOUND TO FETCH THE ATTRIBUTE VALUE ::", error);
        }
    }

    /** THIS FUNCTION IS TO NAVIGATE TO REQUIRED FEATURE BASED ON FEATURE VALUE PASSED */
    protected async tabElements(tabId: string) {
        try {
            const tabElement = this.getElement("//*[@id='" + tabId + "']");
            await tabElement.waitForDisplayed();
            await this.clickElement(tabElement);
        } catch (error) {
            console.error("TAB ELEMENT NOT FOUND  ::", error);
        }
    }

    /** THIS FUNCTION IS TO SCROLL WEB ELEMENT */
    protected async scrollToElement(element: WebdriverIOElement) {
        try {
            await element.waitForDisplayed();
            await element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
            await browser.pause(1000);
        } catch (error) {
            console.log(element);
            console.error("scrollToElement - WEB ELEMENT NOT FOUND TO GET THE VALUE ::", error);
        }
    }

    /** THIS FUNCTION IS TO SCROLL WEB ELEMENT */
    protected async scrollTillElement(element: WebdriverIOElement) {
        try {
            await element.isDisplayed();
            await element.scrollIntoView();
        } catch (error) {
            console.log(element);
            console.error("scrollTillElement - WEB ELEMENT NOT FOUND TO GET THE VALUE ::", error);
        }
    }

    /** THIS FUNCTION IS TO MOUSE OVER WEB ELEMENT */
    protected async mouseOverOnElement(element: WebdriverIOElement) {
        try {
            //await element.waitForDisplayed();
            await element.moveTo();
            await browser.pause(1000);
        } catch (error) {
            console.error("mouseOverOnElement - WEB ELEMENT NOT FOUND TO GET THE VALUE ::", error);
        }
    }

    /** THIS FUNCTION IS TO PERFORM REQUIRED ACTION USING KEYBOARD / KEYS */
    protected async keyActionsOnElement(element: WebdriverIOElement, action: string) {
        try {
            await element.waitForDisplayed();
            await browser.pause(1000);
            await browser.keys(action);
            // ArrowRight || https://w3c.github.io/webdriver/#keyboard-actions || Need to check and update value accordingly
        } catch (error) {
            console.error("keyActionsOnElement - WEB ELEMENT NOT FOUND TO GET THE VALUE ::", error);
        }
    }

    /** THIS FUNCTION IS TO HIGHLIGHT WEB ELEMENT */
    protected async highlightElement(element: WebdriverIOElement, color: string = 'red') {
        const validColors = ['red', 'green'];
        if (!validColors.includes(color)) {
            throw new Error(`Invalid color "${color}". Valid colors are: ${validColors.join(', ')}`);
        }
        browser.addCommand('highlightElement', async function (element) {
            await browser.execute(`arguments[0].style.outline = "${color} solid 2px";`, element);
        });
    }

}