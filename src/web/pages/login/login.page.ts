import Page from "@WebPages/base/basePage";

class loginPage extends Page {

    /*************************************************** Web Elements **************************************************/

    get toast()                 { return this.getElement('simple-snack-bar.mat-simple-snackbar span') }

    get enterUserName()         { return this.getElement("#username") }
    get enterPassword()         { return this.getElement("#password") }
    get btnNext()               { return this.getElement("#nextBtn") }
    get clickLogin()            { return this.getElement("#submitBtn") }
    get clearCompanyName()      { return this.getElement("//button[@aria-label='Clear']") }
    get companyName()           { return this.getElement("//input[@id='companySelectorAutoComplete']") }
    get companyOption1()        { return this.getElement("(//mat-option)[1]") }
    get clickContinue()         { return this.getElement("#continueButton") }
    get newPasswordField()      { return this.getElement("#password-new") }
    get nameField()             { return this.getElement("#namefield") }
    get confirmPasswordField()  { return this.getElement("#password-confirm") }
    get loginTitle()            { return this.getElement("h1.fi-form-title") }
    get resetPasswordLink()     { return this.getElement("//*[@class='fi-reset']/a") }
    get passwordInfoMsg()       { return this.getElement("div.fi-info-alert p") }
    get passwordErrorMsg()      { return this.getElement("div.fi-error-alert p") }
    get loginerror()            { return this.getElement("div.fi-error-alert") }
    get cancelLink()            { return this.getElement("#kc-reset-password-form div.fi-reset a") }
    get loginFailMsg()          { return this.getElement("/html/body/div/div/div/div/div/div/p") }
    get pageTitle()             { return this.getElement("#pageTitle") }
    get msgLoginBanner()        { return this.getElement("//div[contains(@class, 'fi-message-container')]/p") }
    get newPass()               { return this.getElement("#password-new") }
    get newPassConfirm()        { return this.getElement("#password-confirm") }
    get gMailUId()              { return this.getElement("//input[@id='identifierId']") }
    get gMailPassword()         { return this.getElement("//input[@type='password']") }
    get nextBtn()               { return this.getElements("//button") }
    get primaryEmail()          { return this.getElements("//div[@class='aDP']/div[1]/div[@class='Cp']/div[1]/table/tbody/tr") }
    get linkRP()                { return this.getElement("//a[contains(@href, 'test-vcv')]") }
    get resetPassword()         { return this.getElement("//a[contains(text(),'Reset Password')]") }
    get resetPasswordEmail()    { return this.getElement("//input[@id='username']") }
    get languagePicker()        { return this.getElement('#languagePicker') }
    get expandCollapseMenus()   { return this.getElement("//*[@id='toggleBtn']/button") }
    get collapseMenu()          { return this.getElement("//*[@id='expandedToggleBtn']/button") }
    get logOff()                { return this.getElement('#signOffBtn') }

    protected okButton;
    
    /***************************************************    Methods   **************************************************/

    /***** login to insight suite *****/
    async performLogin(username: string, password: string) {
        await this.enterUserName.clearValue();
        await this.enterUserName.setValue(username);
        await browser.pause(1000);

        await this.clickElement(this.btnNext);
        await browser.pause(3000);

        await this.enterPassword.clearValue();
        await this.enterPassword.setValue(password);
        await browser.pause(1000);
        
        await this.clickElement(this.clickLogin);
        await browser.pause(8000);
    }

    /** click next button */
    async sNextBtn() {
        await this.clickElement(this.btnNext);
        await browser.pause(3000);
    }

    /** select a company and continue */
    async selectCompany(company: string, timeout = 10000) {
        const eToast = `You are now administering company ${company}.`;
        const fToast = `Vous êtes maintenant administrateur de l’entreprise ${company}.`;
    
        try {
            if (await this.clearCompanyName.isDisplayed()) {
                await this.clearCompanyName.click();
                await browser.pause(1000);
            }

            await this.companyName.setValue(company);
            await browser.pause(3000);

            await this.clickElement(this.companyOption1);
            await browser.pause(1000);
            
            await this.clickElement(this.clickContinue);

            await this.toast.waitForDisplayed({ timeout });
            expect(this.toast.getText()).toBe(eToast || fToast);
            await browser.pause(5000);
        } catch (error) {
            console.error("An error occurred while administering the company:", error);
            throw error;
        }
    }

    /***** select between English and French during login *****/
    // English || Français
    async chooseLanguage(language : string) {
        if (language=="Français") {
            await this.clickElement(this.languagePicker);
            await browser.pause(2000);

            const element = $("//*[@id='languageDropdown']/a[text()='" + language + "']");
            await this.clickElement(element);
            await browser.pause(5000);
        }
    }
	
    /** Sign Off */
    async signOff() {
        if (await this.expandCollapseMenus.isDisplayed() == true) {
            await this.clickElement(this.expandCollapseMenus);
        }
        await browser.pause(2000);
        await this.scrollToElement(this.logOff);
        await browser.pause(2000);
        await this.clickElement(this.logOff);
        await browser.pause(5000);
    }

    async collapseMenus() {
        await this.clickElement(this.collapseMenu);
        await browser.pause(2000);
    }

    async expandMenus() {
        await this.clickElement(this.expandCollapseMenus);
        await browser.pause(2000);
    }

	/***** verify login failure *****/
	async loginApplicationFail(uName: string, pass: string, msg: string) {
        await this.enterUserName.clearValue();
        await this.enterUserName.setValue(uName);
        await browser.pause(1000);

        await this.clickElement(this.btnNext);
        await browser.pause(3000);

        await this.enterPassword.clearValue();
        await this.enterPassword.setValue(pass);
		await browser.pause(1000);
		
		await this.clickElement(this.clickLogin);
		expect(await this.loginFailMsg.getText()).toContain(msg);
		return;
	}
	
	/***** provide details and click reset password button *****/
    async resetAPassword(password1: string, password2: string) {
        await this.newPasswordField.setValue(password1);
    	await this.confirmPasswordField.setValue(password2);
        await browser.pause(2000);
        await this.clickElement(this.clickLogin);
        await browser.pause(2000);
    }
    
    /***** very if a specific error is displayed *****/
    async hasError(err: string) {
        if (await this.loginerror.getText()==err) {
            return true;
        } else {
            return false;
        }
    }
    
    /***** verify login error message *****/
    async loginErrMsg(err: string) {
    	if (await this.passwordErrorMsg.getText()==err) {
    		return true;
    	} else {
    		return false;
    	}
    }
    
    /***** select forgot password button and provide email id *****/
    async forgetPassword(user: string) {
        await this.clickElement(this.resetPasswordLink);
        await browser.pause(3000);
        
        await this.enterUserName.setValue(user);
        await browser.pause(2000);
    }
    
    /***** select reset password button *****/
    async sBtnResetPassword1(waitForMessage: boolean) {
    	await this.clickElement(this.clickLogin);
        await browser.pause(3000);
        if(!waitForMessage) {
            await this.clickElement(this.okButton);
            await browser.pause(2000);
        }
    }
    
    //	select cancel button
    async clickCancel() {
        await this.clickElement(this.cancelLink);
        await browser.pause(2000);
    }
    
    //	verify if user message is empty
    async hasEmptyUserMessage(msg: string) {
        if (await this.passwordErrorMsg.getText()==msg) {
            return true;
        } else {
            return false;
        }
    }
    
    /***** verify login page title *****/
    async isLoginPage(text: string) {
    	await browser.pause(3000);
    	if(this.enterUserName.isDisplayed() && this.loginTitle.isDisplayed()) {
            if ((await this.loginTitle.getText()==text)) {
                return true;
            }
    	}
		return false;
    }
    
    /***** verify reset password message *****/
    //  english : "Instructions to reset your password have been sent to your email address."
    //  french : "Les instructions pour réinitialiser votre mot de passe ont été envoyées à votre adresse courriel."
    async hasPasswordInformationMessage(msg: string) {
        if (await this.passwordInfoMsg.getText()==msg) {
            return true;
        } else {
            return false;
        }
    }

    /***** verify labels for english login page *****/
    async labelsMatch(expVal: Array<string>) {
        await browser.pause(3000);
        const actVal = [ await this.enterUserName.getAttribute("placeholder"), 
                        await this.enterPassword.getAttribute("placeholder"), 
                        await this.resetPasswordLink.getAttribute("textContent"), 
                        await this.clickLogin.getAttribute("textContent") ];
        if (actVal==expVal) {
            return true;
        } else {
            return false;
        }
    }
    
    /***** verify Insights main page title *****/
    async isInsightsMainPage(text: String) {
    	if((await this.pageTitle.getText()==text)) {
    		return true;
    	} else {
    		return false;
    	}
	}

    /***** read banner msg in login page and verify *****/
	async vLoginBanner(msg: string) {
		expect(await this.msgLoginBanner.getText()).toBe(msg);
	}

    /***** select reset password button, provide email address and click submit button *****/
	async sBtnResetPassword2(mail: string) {
		await this.clickElement(this.resetPassword);
		await browser.pause(10000);
	    	
		await this.resetPasswordEmail.setValue(mail);
		await browser.pause(1000);
	    	
		await this.clickElement(this.clickLogin);
		await browser.pause(10000);
	}

    /***** update new password *****/
	async updatePass(pass: string) {
		await this.newPass.setValue(pass);
		await this.newPassConfirm.setValue(pass);
		await browser.pause(1000);
		
		await this.clickElement(this.clickLogin);
		await browser.pause(5000);
	}

    /***** provide gmail user and password *****/
	async gmailUsernPass(user: string, pass: string) {
		await this.gMailUId.setValue(user);
		await browser.pause(1000);
	    	
		await this.clickElement(this.nextBtn[2]);
		await browser.pause(5000);
	    	
		await this.gMailPassword.setValue(pass);
		await browser.pause(1000);
	    	
		await this.clickElement(this.nextBtn[1]);
		await browser.pause(10000);
	    	
		await this.clickElement(this.primaryEmail[0]);
		await browser.pause(3000);
	    	
		await this.clickElement(this.linkRP);
		await browser.pause(7000);
	}

}

export default new loginPage();