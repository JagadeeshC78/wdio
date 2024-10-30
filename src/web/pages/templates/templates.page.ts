import { Key } from "webdriverio";
import Page from "@WebPages/base/basePage";
import rfp from "@WebPages/setup/reusableFunctions.page";

class templatesPage extends Page {
    get dHeader() {
        return this.getElement("//md-dialog/md-toolbar/div/h2");
    }
    
    get txtLabel() {
        return this.getElements("//md-input-container/input");
    }
    get txtInput() {
        return this.getElements("//md-input-container/input");
    } // to be verified
    get dClose() {
        return this.getElement("//button/span/mat-icon[text()='close']");
    }
    get dDropdown() {
        return this.getElement("//mat-select[@role='combobox']");
    }
    get dDropdownDefTxt() {
        return this.getElement("//mat-select/div[1]/div[1]/span[1]/span[1]");
    }
    get dSave2() {
        return this.getElement("//button[@color='primary'][contains(@id, 'ave')]");
    }
    get dCancel() {
        return this.getElement("//button[contains(@id,'ancel')]");
    }
    get dLBL() {
        return this.getElements("//mat-label");
    }
    get chkboxLBL() {
        return this.getElement("//span[@class='mat-caption text-label']");
    }
    get imgTCard() {
        return this.getElements("//mat-card/div");
    }

    /** common - verify label in the dialog */
    async vDialogLBL(i: number, label: string) {
        expect(await this.dLBL[i].getText()).toBe(label);
    }

    /** common - verify if the save button is enabled or disabled */
    async dSave2EnableStatus(yes: boolean) {
        expect(await this.dSave2.isEnabled()).toBe(yes);
    }

    /**** validate cancel button text in a dialog */
    async vSave2BtnText(expValue: string) {
        expect(await this.dSave2.getText()).toBe(expValue);
    }

    /** common - verify cancel button is enabled */
    async dCancelEnableStatus(yes: boolean) {
        expect(await this.dCancel.isEnabled()).toBe(yes);
    }

    /**** validate cancel button text in a dialog */
    async vCanelBtnText(expValue: string) {
        expect(await this.dCancel.getText()).toBe(expValue);
    }

    /** common - save the content changes of the dialog */
    async dialog2Save(yes: boolean) {
        if (yes) {
            await this.clickElement(this.dSave2);
            // toast
        } else {
            await this.clickElement(this.dCancel);
            await browser.pause(5000);
        }
    }

    /** select reset button in a reset dialog */
    async dReset() {
        await this.clickElement(this.btnDialogReset);
        await browser.pause(2000);
    }

    /** ensure dialog reset button is disabled */
    async dResetEnableStatus(yes: boolean) {
        expect(await this.btnDialogReset.isEnabled()).toBe(yes);
    }

    /**************************************************** Generic - Template ****************************************************/

    get templateCards() {
        return this.getElements("//fiis-template-card/mat-card");
    }
    get templateNames() {
        return this.getElements(
            "//fiis-template-card/mat-card/div[2]/div[contains(@class, 'template-name-container')]"
        );
    }
    get btnEllipsis() {
        return this.getElements("//button[contains(@class, 'managing-menu')]");
    }
    get optionEllipsis() {
        return this.getElements(
            "//div[contains(@class, 'template-card-menu')]/div[1]/button"
        );
    }
    get pTitle() {
        return this.getElement("#pageTitle");
    }
    get gInput() {
        return this.getElements("//input[contains(@id, 'mat-input')]");
    }
    get msgERR1() {
        return this.getElements("//mat-error[contains(@id, 'mat-error')]");
    }
    get msgERR2() {
        return this.getElements("//mat-error[contains(@class, 'mat-error')]");
    }
    
    get tabTemplate() {
        return this.getElements("//div/div[contains(@class, 'fi-tab-text')]/span");
    }
    get defOptionSelected() {
        return this.getElements("//mat-select");
    }
    get importPage() {
        return this.getElement("//button[@id='importTemplateBtn']");
    }
    get importTemp0() {
        return this.getElement("(//*[@class='hidden-input-field'])[0]");
    }
    get importTemp1() {
        return this.getElement("(//*[@class='hidden-input-field'])[1]");
    }
    get importTemp2() {
        return this.getElement("(//*[@class='hidden-input-field'])[2]");
    }
    get importTemp3() {
        return this.getElement("(//*[@class='hidden-input-field'])[3]");
    }
    get importTemp4() {
        return this.getElement("(//*[@class='hidden-input-field'])[4]");
    }
    get actPositive() {
        return this.getElement("#confirmDialogPositiveBtn-0");
    }
    get actNegative() {
        return this.getElement("//button[@id='confirmDialogNegativeBtn-1']");
    }
    get actDelete() {
        return this.getElement("#confirmDialogDeletePositiveBtn-0");
    }
    get getTTab() {
        return this.getElements("//div[contains(@class, 'fi-tab-text')]/span");
    }
    get btnBack2Temp() {
        return this.getElement("//button[contains(@class, 'back-to-templates')]");
    }
    get iconBack2Temp() {
        return this.getElement(
            "//button[contains(@class, 'back-to-templates')]/span[1]/mat-icon"
        );
    }
    get txtBack2Temp() {
        return this.getElement(
            "//button[contains(@class, 'back-to-templates')]/span[1]/span[1]"
        );
    }
    get deleteTemplate() {
        return this.getElement("//button[@color='warn']");
    }
    get showAll() {
        return this.getElement("#all");
    }
    get showOnlyUnlocked() {
        return this.getElement("#unlocked");
    }
    get showOnlyLocked() {
        return this.getElement("#locked");
    }
    get sortbyNameAsc() {
        return this.getElement("#name-asc");
    }
    get sortbyNameDesc() {
        return this.getElement("#name-desc");
    }
    get sortbyNewest() {
        return this.getElement("#newest");
    }
    get sortbyOldest() {
        return this.getElement("#oldest");
    }
    get sortbyMRU() {
        return this.getElement("#updated");
    }
    get sortbyDateArc() {
        return this.getElement("#archived");
    }
    get templEllip() {
        return this.getElements("//fiis-template-card/mat-card/div[2]/button[1]");
    }
    get getTabText() {
        return this.getElements("//div[contains(@class, 'fi-tab')]/div[1]/span");
    }
    get lblImgPrev() {
        return this.getElement(
            "//fiis-fi-template-image-upload/div[1]/div[1]/span[1]"
        );
    }
    get lblImgRes() {
        return this.getElement(
            "//fiis-fi-template-image-upload/div[1]/div[1]/span[2]"
        );
    }
    get btnReset() {
        return this.getElement(
            "//button[@id='generalTabTemplateEdit-resetButton']"
        );
    }
    get btnBrowse() {
        return this.getElement("//button[@id='fileBrowseBtn']");
    }
    get imgDefault() {
        return this.getElement(
            "//img[contains(@src, 'default-mobile-start-end.png')]"
        );
    }
    get iconAllLocales() {
        return this.getElements("//*[contains(@class,'locale-flag')]");
    }
    get txtAllLocales() {
        return this.getElements("//fiis-fi-locale/div[1]/span");
    }
    get msgErrorImg() {
        return this.getElement("//div[@id='errorMsg']/span");
    }
    get btnImgErrClose() {
        return this.getElement("//div[@id='errorMsg']//mat-icon");
    }

    /** navigate to Live or Archived template page */
    async nav2TemplatePage(page: string) {
        const tabTexts = await Promise.all(
            await this.tabTemplate.map((tab) => tab.getText())
        );
        const index = tabTexts.findIndex((text) => text === page);

        if (index !== -1) {
            await this.clickElement(this.tabTemplate[index]);
            await browser.pause(5000);
        }
    }

    /** verify list of templates based on name */
    async vTemplateList(expVal: Array<string>) {
        const templateTexts = await Promise.all(
            await this.templateNames.map((template) => template.getText())
        );

        expect(templateTexts).toStrictEqual(expVal);
    }

    /** verify if a template exist in the list based on name */
    async vTemplateinList(exp: string) {
        const actVal = await Promise.all(
            await this.templateNames.map((template) => template.getText())
        );
        return actVal.includes(exp);
    }

    /* validate a list of placeholders, as applicable acrosss screens */
    async vNamePlaceholder(expectedTexts: Array<string>) {
        const actualTexts = await Promise.all(
            await this.namePlaceholder.map((placeholder) => placeholder.getText())
        );

        expect(actualTexts).toEqual(expectedTexts);
    }

    /* validate a specific placeholder, as applicable acrosss screens */
    async vPlaceholderName(i: number, text: string) {
        expect(await this.namePlaceholder[i].getText()).toBe(text);
    }

    /** filter by all, locked, unlocked */
    async sFiltermenu(option: string) {
        await this.clickElement(this.defOptionSelected[0]);
        await browser.pause(4000);

        if (option == "All") {
            await this.clickElement(this.showAll);
        } else if (option == "Unlocked") {
            await this.clickElement(this.showOnlyUnlocked);
        } else if (option == "Locked") {
            await this.clickElement(this.showOnlyLocked);
        }
        await browser.pause(5000);
    }

    /** sort by name ascending, name descending, newest, oldest, most recently updated, date archived */
    async sSortmenu(option: string) {
        await this.clickElement(this.defOptionSelected[1]);
        await browser.pause(4000);

        if (option == "Name Ascending") {
            await this.clickElement(this.sortbyNameAsc);
        } else if (option == "Name Descending") {
            await this.clickElement(this.sortbyNameDesc);
        } else if (option == "Newest") {
            await this.clickElement(this.sortbyNewest);
        } else if (option == "Oldest") {
            await this.clickElement(this.sortbyOldest);
        } else if (option == "Most Recently Updated") {
            await this.clickElement(this.sortbyMRU);
        } else if (option == "Date Archived") {
            await this.clickElement(this.sortbyDateArc);
        }
        await browser.pause(5000);
    }

    /** import template (general function) */
    async importTemplate(path: string, file: string) {
        await this.clickElement(this.importPage);
        await browser.pause(3000);

        await rfp.showHiddenInputField1(0);
        const filepath = path + file;
        const remoteFilePath = await browser.uploadFile(filepath);
        await this.importTemp1.waitForDisplayed();
        await this.importTemp1.setValue(remoteFilePath);
        // don't change the timing here. if required, adjust in spec file.
    }

    /** import template (general function) */
    async importNoVersionTemplate(filename: string) {
        await this.clickElement(this.importPage);
        await browser.pause(5000);

        await rfp.showHiddenInputField1(0);

        const [tPath, tName] = await rfp.templateSelect(filename);
        const remoteFilePath = await browser.uploadFile(tPath);

        const eToast = `${tName} has been successfully imported.`;
        const fToast = `${tName} a été importé avec succès.`;

        await this.importTemp1.waitForDisplayed();
        await this.importTemp1.setValue(remoteFilePath);

        await rfp.getSnackToast(eToast || fToast);
    }

    /** import template (general function) */
    async importNoVersionTemplateNoToast(filename: string) {
        await this.clickElement(this.importPage);
        await browser.pause(5000);

        await rfp.showHiddenInputField1(0);

        const [tPath, tName] = await rfp.templateSelect(filename);
        const remoteFilePath = await browser.uploadFile(tPath);

        await this.importTemp1.waitForDisplayed();
        await this.importTemp1.setValue(remoteFilePath);
        await browser.pause(30000);
    }

    /**** verify 'import template' button is not displayed ****/
    async vImportTemplDisplayStatus(yes: boolean) {
        const btnImportTemplate = $("#importTemplateBtn");
        expect(await btnImportTemplate.isDisplayed()).toBe(yes);
    }

    /** validate template toast msg, delete ,archive ,delete */
    async templateToastMsg(filename: string, toastMsg: string) {
        const templates = [
            "icx-pick-and-price",
            "icx-rate-and-rank",
            "icx-ask-and-answer",
        ];

        const isTemplateFile = templates.some((template) =>
            filename.includes(template)
        );
        const values = isTemplateFile
            ? await rfp.templateSelect(filename)
            : [filename];
        const msg = toastMsg.replace("<template>", values[1] || values[0]);

        await rfp.getSnackToast(msg);
    }

    /** validate toast msg,when updating template in insetup */
    async updateTemplateToastMsg(filename: string, insightName: string) {
        const templates = [
            "icx-pick-and-price",
            "icx-rate-and-rank",
            "icx-ask-and-answer",
        ];

        const isTemplateFile = templates.some((template) =>
            filename.includes(template)
        );
        const values = isTemplateFile
            ? await rfp.templateSelect(filename)
            : [filename];
        const templateValue = isTemplateFile ? values[1] : filename;

        const eMsg = `${insightName} has been updated with the latest changes from ${templateValue}.`;
        const fMsg = `${insightName} a été mis à jour en incluant les dernières modifications de ${templateValue}.`;
            
        await rfp.getSnackToast(eMsg || fMsg);
    }

    /** select a template based on name and click on its ellipsis menu */
    //  'filename' is 'icx-pick-and-price' / 'icx-rate-and-rank' / 'icx-ask-and-answer'
    //  assuming only PATH1 is used. needs to be updated otherwise
    async selectTemplate(filename: string) {
        const templates = [
            "icx-pick-and-price",
            "icx-rate-and-rank",
            "icx-ask-and-answer",
        ];

        const values = templates.some((template) => filename.includes(template))
            ? await rfp.templateSelect(filename)
            : [filename];

        const templateNames = await Promise.all(
            await this.templateNames.map((template) =>
                template.getText().then((text) => text.trim())
            )
        );

        for (let i = 0; i < templateNames.length; i++) {
            await this.btnEllipsis[i].scrollIntoView();
            await browser.pause(1000);

            if (templateNames[i] === values[1] || templateNames[i] === values[0]) {
                await this.clickElement(this.btnEllipsis[i]);
                await browser.pause(10000);
                break;
            }
        }
    }

    /** select live template based on index position */
    //  'i' starts from 0
    async sTemplate(i: number) {
        await this.clickElement(this.templEllip[i]);
        await browser.pause(3000);
    }

    /** select an ellipsis option after selecting ellipsis menu of template based on name */
    //  'option' is
    //  English - Edit, Copy, Lock, Unlock, Delete, Archive, Unarchive, Export
    //  French - Éditer, Copier, Verrouiller, Déverrouiller, Supprimer définitivement, Archiver, Désarchiver, Exporter
    async sEllipsisOption(option: string) {
        const ellOptions = await Promise.all(
            await this.optionEllipsis.map((el) => el.getText())
        );
        const index = ellOptions.findIndex((text) => text.trim() === option);

        if (index !== -1) {
            await this.clickElement(this.optionEllipsis[index]);
            if (option !== "Unarchive" && option !== "Désarchiver") {
                await browser.pause(5000);
            }
        }
    }

    /** verify total no of banner button  */
    async vBannerMsgButton(expVal: number) {
        let btnCount = $$("//fiis-show-validation-errors//button").length;
        expect(btnCount).toBe(expVal);
    }

    /** verify ellipsis option list */
    async vEllipsisOptionList(expectedValues: Array<string>) {
        const actualValues = await Promise.all(
            await this.optionEllipsis.map((option) => option.getText())
        );

        expect(actualValues).toStrictEqual(expectedValues);
    }

    /** verify ellipsis option list */
    async vEllipOptNotListed(unlisted: Array<string>) {
        const actualValues = await Promise.all(
            await this.optionEllipsis.map((option) =>
                option.getText().then((text) => text.trim())
            )
        );

        for (const item of unlisted) {
            if (actualValues.includes(item)) {
                console.log(
                    "GS/ LS Button is not expected to be listed. Breaking here..."
                );
                break;
            }
        }
    }

    /** verify ellipsis option is visible */
    async vEllipsisOptionList2(expVal: string) {
        for (let i = 0; i < (await this.optionEllipsis.length); i++) {
            if ((await this.optionEllipsis[i].getText()) == expVal) {
                return false;
            } else {
                return true;
            }
        }
    }

    /** verify if a specific option is enabled */
    //  'option' is EDIT || COPY || LOCK || UNLOCK || DELETE || ARCHIVE || UNARCHIVE || EXPORT
    //  French translation not required.
    async vOptionEnabled(option: string) {
        const optionElements = await Promise.all(
            await this.optionEllipsis.map(async (el) => {
                const id = await el.getAttribute("id");
                const isEnabled = await el.isEnabled();
                return { id, isEnabled };
            })
        );

        const matchingOption = optionElements.find((el) => el.id === option);
        if (matchingOption) {
            expect(matchingOption.isEnabled).toBe(true);
        }
    }

    /** verify if a specific option is disabled */
    //  'option' is EDIT || COPY || LOCK || UNLOCK || DELETE || ARCHIVE || UNARCHIVE || EXPORT
    //  French translation not required.
    async vOptionDisabled(option: string) {
        const optionElements = await Promise.all(
            await this.optionEllipsis.map(async (el) => {
                const id = await el.getAttribute("id");
                const isEnabled = await el.isEnabled();
                return { id, isEnabled };
            })
        );

        const matchingOption = optionElements.find((el) => el.id === option);
        if (matchingOption) {
            expect(matchingOption.isEnabled).toBe(false);
        }
    }

    /** can be used for most of the positive actions, mostly SAVE */
    async confirmAction() {
        await this.clickElement(this.actPositive);
    }

    /** can be used for most of the negative actions, mostly CANCEL */
    async cancelAction() {
        await this.clickElement(this.actNegative);
        await browser.pause(5000);
    }

    /** Select DELETE button in pop up dialog when deleting a template */
    async deleteAction() {
        await this.clickElement(this.actDelete);
        //  toast
    }

    /** update the template name of a copied template */
    async updateCopyName(name: string) {
        await this.setData(this.copyName, name);
        await browser.keys[Key.Tab];
        await browser.pause(3000);
    }

    /** verify template tab text */
    async vTemplateTabText(expectedTabs: Array<string>) {
        const actualTabs = await Promise.all(
            await this.getTabText.map((tab) => tab.getText())
        );

        expect(actualTabs).toStrictEqual(expectedTabs);
    }

    async tempTabStatus(expectedTabs: Array<string>) {
        const tabElements = await Promise.all(
            await this.getTTab.map(async (tabElement) => {
                const text = await tabElement.getText();
                const isEnabled = await tabElement.isEnabled();
                return { text, isEnabled };
            })
        );

        for (const expectedTab of expectedTabs) {
            const matchingTab = tabElements.find((tab) => tab.text === expectedTab);
            if (matchingTab) {
                expect(matchingTab.isEnabled).toBe(true);
            }
        }
    }

    /** navigate to general, global settings, locale settings of a template */
    //  'i' is 0 - general, 1 - global settings, 2 - locale settings
    async sTemplateTab(i: number) {
        await this.clickElement(this.getTTab[i]);
        await browser.pause(10000);
    }

    /** verify the error thrown */
    async vError1(i: number, error1: string) {
        expect(await this.msgERR1[i].getText()).toBe(error1);
    }

    /** verify the error thrown */
    async vError2(i: number, error2: string) {
        expect(await this.msgERR2[i].getText()).toBe(error2);
    }

    /** validate 'BACK TO TEMPLATES' button is displayed in general tab */
    async vBackToTemplatesIcon() {
        await this.elementIsDisplayed(this.iconBack2Temp);
    }

    /** validate 'BACK TO TEMPLATES' button is displayed in general tab */
    async vBackToTemplatesText(text: string) {
        expect(await this.txtBack2Temp.getText()).toBe(text);
    }

    /**** select back to templates button in any of the template tabs ****/
    async sBackToTemplates() {
        await this.performClick(this.btnBack2Temp);
    }

    /** verify dialog heading */
    async vDialogHeading(heading: string) {
        expect(await this.dHeader.getText()).toBe(heading);
    }

    /** close the dialog using X button */
    async closeDialog() {
        await this.clickElement(this.dClose);
        await browser.pause(2000);
    }

    /********************************************* General Settings *********************************************/

    get copyName() {
        return this.getElement("#copyTemplateFormInput");
    }
    get gTypeText() {
        return this.getElement("//input[@formcontrolname='gameType']");
    }
    get gTypeIcon() {
        return this.getElement(
            "//mat-form-field[@id='templateGameType']/div[1]/div[1]/div[1]/span[1]/mat-icon"
        );
    }
    get namePlaceholder() {
        return this.getElements("//label/mat-label");
    }
    get lblPlaceholder() {
        return this.getElements("//mat-label[contains(@class, 'title-label')]");
    }
    get lblTemplatePreview() {
        return this.getElement("//*[@class='fi-caption-label']");
    }
    get lblTemplatePixel() {
        return this.getElement("//span[@class='mat-caption']");
    }
    get iconNoImg() {
        return this.getElement("//*[contains(@src,'preview-not-available')]");
    }
    get txtBtnBrowse() {
        return this.getElement("(//*[@id='fileBrowseBtn']/span)[1]");
    }
    get txtDeleteBtn() {
        return this.getElement("//*[@id='deleteTemplate']/button/span/span");
    }

    /** general tab - provide input to name, game type, notes, labels, links etc. */
    //  'i' is 0 - name, 1 - gametype, 2 - notes
    async generalInput(i: number, text: string) {
        await this.setData(this.gInput[i], text);
    }

    /**** verify if general input is enabled or disabled based on index ****/
    async vGInputEnableStatus(i: number, yes: boolean) {
        expect(await this.gInput[i].isEnabled()).toBe(yes);
    }

    /** general tab - verify the user is in general or global settings of a template */
    async allLocales(text: string) {
        expect(await this.localeInfo.isEnabled()).toBe(true);
        expect(await this.localeInfo.getText()).toBe(text);
    }

    /** general tab - verify the game type of a template */
    //  'type' could be 'Pick and Price', 'Rate and Rank', 'Ask and Answer'
    //  'icon' could be 'icon-pp' or 'icon-rr' or 'icon-aa'
    async vGameType(title: string, type: string, icon: string) {
        expect(await this.lblPlaceholder[0].getText()).toBe(title);
        //expect(await this.gTypeText.getText()).toBe(type);    to be checked
        expect(await this.gTypeIcon.getAttribute("svgicon")).toBe(icon);
        expect(await this.gTypeIcon.isSelected()).toBe(false);
    }

    /** verify Media Preview basics in general tab */
    async imagePreviewBasics(name: string, pix: string) {
        expect(await this.lblImgPrev.getText()).toBe(name);
        expect(await this.lblImgRes.getText()).toBe(pix);
        expect(await this.btnReset.getText()).toBe("remove_circle_outline REMOVE");
        expect(await this.btnBrowse.getText()).toBe("BROWSE");
        expect(await this.imgDefault.isDisplayed()).toBe(true);
    }

    /** general tab - verify the default image in a template card */
    async defaultImg(i: number) {
        expect(this.imgTCard[i].getAttribute("style")).toContain(
            "default-mobile-start-end"
        );
    }

    /** general tab - verify whether fi image is displayed after removing default image */
    async fiImg(i: number) {
        expect(this.imgTCard[i].getAttribute("style")).toContain(
            "/app/images/preview-not-available.svg"
        );
    }

    /* validate if no image is displayed for desktop or mobile */
    async vNoImageDisplayed() {
        await this.elementIsDisplayed(this.iconNoImg);
    }

    /* validate label template preview */
    async valTemplatePreviewText(expValue: string) {
        expect(await this.lblTemplatePreview.getText()).toBe(expValue);
    }

    /* validate label template preview */
    async valTemplatePixel(expValue: string) {
        expect(await this.lblTemplatePixel.getText()).toBe(expValue);
    }

    /** general tab - update template preview image */
    async templatePreviewImage(filepath: string) {
        await rfp.showHiddenInputField1(0);

        const remoteFilePath = await browser.uploadFile(filepath);
        await this.importTemp1.waitForDisplayed();
        await this.importTemp1.setValue(remoteFilePath);
        await browser.pause(7000);
    }

    /**** validate image upload error message ****/
    async vImgErrorMsg(expValue: string) {
        expect(await this.msgErrorImg.getText()).toBe(expValue);
    }

    /**** close image error message ****/
    async sCloseImgErrorMsg() {
        await this.clickElement(this.btnImgErrClose);
        await browser.pause(2000);
    }

    /** general tab - remove template preview image */
    async selectRemoveRReset() {
        await this.clickElement(this.btnReset);
        await browser.pause(3000);
    }

    /**** validate remove / reset btn enabled or disabled ****/
    async vRemoveRResetBtnEnableStatus(yes: boolean) {
        expect(await this.btnReset.isEnabled()).toBe(yes);
    }

    /**** validate browse button text in general tab of a template or
     * customize banner and internal page - global settings ****/
    async vBrowseBtnText(expValue: string) {
        expect(await this.txtBtnBrowse.getText()).toBe(expValue);
    }

    /**** validate delete button text in general tab ****/
    async vDeleteTemplateBtnText(expValue: string) {
        expect(await this.txtDeleteBtn.getText()).toBe(expValue);
    }

    /** general tab - delete a template using delete button in general tab */
    async deleteTemplateGeneralPage() {
        await this.clickElement(this.deleteTemplate);
        await browser.pause(2000);
    }

    /**** verify 'delete template' button is disabled or not ****/
    async vDelTemplateEnableStatus(yes: boolean) {
        expect(await this.deleteTemplate.isEnabled()).toBe(yes);
    }

    /** general tab - select between 'stay on page' and 'discard options' options */
    //  sop - stay on page, dc - discard changes
    async stayOnPage_discardChanges(option: string) {
        if (option == "sop") {
            await this.clickElement(this.actPositive);
            await browser.pause(1000);
        } else if (option == "dc") {
            await this.clickElement(this.actNegative);
            await browser.pause(3000);
        }
    }

    /********************************************* Common to Global and Locale Settings *********************************************/

    get btnNameGS_GSLSB() {
        return this.getElements(
            "//*[contains(@class,'mat-button-base mat-primary')]//*[@class='mat-button-wrapper']"
        );
    }
    get btnGSLSB() {
        return this.getElements(
            "//fiis-fi-descriptive-button/div/button[contains(@class, 'mat-primary')]"
        );
    }
    get msgBtnGS_GSLSB() {
        return this.getElements("//*[contains(@class,'button-description-text')]");
    }
    get localeInfo() {
        return this.getElement("//fiis-fi-locale/div[1]/span");
    }
    get btnRedirect() {
        return this.getElement("#REDIRECT_BUTTON");
    }
    get localeValue() {
        return this.getElements("//fiis-fi-locale/div[1]/span[1]");
    }
    get sectionHeader() {
        return this.getElements("//*[contains(@class,'section-header')]");
    }

    /**** validate section headers in global and locale settings ****/
    async vSectionHeaderText(expectedValues: Array<string>) {
        const actualValues = await Promise.all(
            await this.sectionHeader.map((header) => header.getText())
        );

        expect(actualValues).toEqual(expectedValues);
    }

    /** global and locale settings - verify the banner and internal page text */
    async txtBannerNInternal(expectedTexts: Array<string>) {
        const actualTexts = await Promise.all(
            await this.txtBNI.map((banner) => banner.getText())
        );

        expect(actualTexts).toEqual(expectedTexts);
    }

    /** global and locale settings - verify the banner and internal page text */
    async txtLandingNEnding(expected: Array<string>) {
        const actualTexts = await Promise.all(
            await this.txtLNE.map((element) => element.getText())
        );

        expect(actualTexts).toEqual(expected);
    }

    /** global and locale settings - verify game settings buttons name as an array */
    async vGSBtnNameList(expected: Array<string>) {
        const actual = await Promise.all(
            await this.btnNameGS_GSLSB.map((button) =>
                button.getText().then((text) => text.trim())
            )
        );

        expect(actual).toEqual(expected);
    }

    /** global and locale settings - verify game settings buttons name does not contain specific buttons */
    async vGSBtnNameMissingList(expected: Array<string>) {
        const actualNames = await Promise.all(
            await this.btnNameGS_GSLSB.map((button) =>
                button.getText().then((text) => text.trim())
            )
        );

        return expected.some((name) => actualNames.includes(name));
    }

    /** global and locale settings - verify game settings button name based on index position */
    async vGSBtnName(i: number, name: string) {
        expect(await this.btnNameGS_GSLSB[i].getText()).toBe(name);
    }

    /* global and locale settings - verify game settings button based on name */
    async vGSLSBtnEnableStatus(name: string, expectedStatus: boolean) {
        const buttonStatuses = await Promise.all(
            await this.btnGSLSB.map(async (button) => {
                const text = await button.getText();
                const isEnabled = await button.isEnabled();
                return { text, isEnabled };
            })
        );

        const matchingButton = buttonStatuses.find(
            (button) => button.text === name
        );
        if (matchingButton) {
            expect(matchingButton.isEnabled).toBe(expectedStatus);
        }
    }

    /** global and locale settings - verify game settings button texts as an array */
    async vGSBtnTextList(expected: Array<string>) {
        const actualTexts = await Promise.all(
            await this.msgBtnGS_GSLSB.map((button) =>
                button.getText().then((text) => text.trim())
            )
        );

        expect(actualTexts).toEqual(expected);
    }

    /** global and locale settings - verify game settings button text based on index position */
    //  'i' starts from 0
    async vGSBtnMsg(i: number, text: string) {
        expect(await this.msgBtnGS_GSLSB[i].getText()).toBe(text);
    }

    /** global and locale settings - select a specific button in global/ locale settings tabs based on name */
    async selectButton(name: string) {
        const btn_name = $('//button/span[text()=" ' + name + ' "]');
        await this.clickElement(btn_name);
        await browser.pause(2000);
    }

    /** global and locale settings - select one of the options a list */
    // for 'Comments' popup -
    //      'Hide Comment button and Prompt for comments' or 'Show Comment button'
    //      'Masquer le Bouton des commentaires, puis inviter à commenter' or 'Afficher le Bouton des commentaires'
    // for 'Redirect Button' popup -
    //      'Do not show Redirect button' or 'Show one Redirect button' or 'Show two Redirect Buttons' or
    //      'Redirect upon click of image'
    //      'Ne pas afficher le bouton de redirection' or 'Afficher un bouton de redirection' or
    //      'Afficher deux boutons de redirection' or 'Rediriger en cliquant sur l'image'
    // for 'Game Start Setting' popup -
    //      'Start upon click of Game button' or 'Start upon click of Landing Page image'
    //      'Démarrer en cliquant sur le bouton de jeu' or 'Démarrer en cliquant sur l'image de la page d'accueil'
    async selectDDOption(option: string) {
        await this.clickElement(this.dDropdown);
        await browser.pause(2000); // Consider reducing the pause time if possible

        const options = $$("//mat-option/span");
        const optionTexts = await Promise.all(
            await options.map((opt) => opt.getText())
        );

        const index = optionTexts.findIndex((text) => text === option);
        if (index !== -1) {
            await this.clickElement(options[index]);
            await browser.pause(1000);
        }
    }

    /**** validate all locales icon ****/
    //  'i' starts from 0
    async vAllLocalesIconNText(i: number, text: string) {
        await this.elementIsEnabled(this.iconAllLocales[i]);
        expect(await this.txtAllLocales[i].getText()).toBe(text);
    }

    /************************************************** Global Settings **************************************************/

    get imgBNI() {
        return this.getElement("//*[@class='example-img']");
    }
    get popCheckbox() {
        return this.getElement("//mat-dialog-content//mat-checkbox");
    }
    get txtBNI() {
        return this.getElements("//ol/li");
    }
    get txtLNE() {
        return this.getElements("//li/span");
    }
    get chkBox() {
        return this.getElement("//mat-checkbox");
    }
    get btnBNIConfigure() {
        return this.getElement("#customizeBannerInternalPageButton");
    }
    get logoReset() {
        return this.getElement("#customizeBannerEdit-resetButton");
    }
    get inpColors() {
        return this.getElements("//input[contains(@id, 'mat-input-')]");
    }
    get btnDialogReset() {
        return this.getElement("//button[contains(@id, 'Reset')]");
    }
    get lblCustomizeDPixel() {
        return this.getElement("//mat-dialog-content//*[@class='mat-caption']");
    }
    get logoCBI() {
        return this.getElement("//*[@id='templateImageDropZone']");
    }
    get txtCustomizeBtn() {
        return this.getElement(
            "(//*[@id='customizeBannerInternalPageButton']/span)[1]"
        );
    }
    get gsCaptionsBNI() {
        return this.getElements("//*[@class='img-help']/li");
    }
    get eleColourPickerContainer() {
        return this.getElements("//*[@class='color-picker-container']");
    }
    get eleBannerColourContainer() {
        return this.getElement("(//*[@class='color-picker-container'])[1]");
    }
    get eleBannerColourArrow() {
        return this.getElement(
            "(//*[@class='arrow ng-star-inserted arrow-bottom'])[1]"
        );
    }

    /** global and locale settings - verify the locale value */
    //  'i' is 1 - locale settings tab, 2 - global settings tab
    async verifyAllLocalesGlobalDialogs(i: number, locale: string) {
        expect(await this.localeValue[i].getText()).toBe(locale);
    }

    /**** global settings - validate customize button text for banner and internal ****/
    async vCustomizeTextBNI(expValue: string) {
        expect(await this.txtCustomizeBtn.getText()).toBe(expValue);
    }

    /**** global settings - validate customize banner n internal page image display ****/
    async vGS_BNIImageDisplayStatus() {
        await this.elementIsDisplayed(this.imgBNI);
    }

    async vAllLocalesPage(locale: string) {
        const text = $("//fiis-fi-locale/div[1]/span[1]").getText();
        expect(text).toBe(locale);
    }

    async vAllLocalesDialog(locale: string) {
        const text = $(
            "//*[contains(@class,'mat-dialog-title')]//fiis-fi-locale/div[1]/span[1]"
        ).getText();
        expect(text).toBe(locale);
    }

    /**** global settings - validate image captions for customize banner and internal */
    async vImageCaptionsBNI(expectedValues: Array<string>) {
        const actualValues = await Promise.all(
            await this.gsCaptionsBNI.map((caption) => caption.getText())
        );

        expect(actualValues).toEqual(expectedValues);
    }

    /** global settings - enable or disable checkbox in most pop-ups */
    async enable_disableCheckbox1() {
        await this.clickElement(this.popCheckbox);
        await browser.pause(2000);
    }

    /** global and internal page - click 'customize' button of banner and internal page */
    async clickCustomizeBannerandIntenal() {
        await this.clickElement(this.btnBNIConfigure);
        await browser.pause(4000);
    }

    /** global and internal page - customize banner logo */
    async tempCustomizeBannerLogo(filepath: string) {
        await rfp.showHiddenInputField1(0);

        const remoteFilePath = await browser.uploadFile(filepath);
        await this.importTemp1.isDisplayed();
        await this.importTemp1.setValue(remoteFilePath);
        await browser.pause(7000);
    }

    /** global and internal page - customize banner logo reset */
    async resetCustomizeBannerLogo() {
        await this.clickElement(this.logoReset);
        await browser.pause(2000);
    }

    /* */
    async vResetCustomizeBannerLogoDisplayStatus(yes: boolean) {
        expect(await this.logoReset.isDisplayed()).toBe(yes);
    }

    /* */
    async vResetCustomizeBannerLogoEnableStatus(yes: boolean) {
        expect(await this.logoReset.isEnabled()).toBe(yes);
    }

    /* validate pixel info in globa settings - customize dialog */
    async valCustTemplatePixel(expValue: string) {
        expect(await this.lblCustomizeDPixel.getText()).toBe(expValue);
    }

    /* validate the logo displayed in global settings - customize banner and internal page */
    async validateImageDispayed() {
        await this.elementIsDisplayed(this.logoCBI);
    }

    /** game settings - select any of the game settings button based on name */
    //  'name' is
    //  GS  English -   Colors, Comments, Redirect Button, Sentiment Setting,
    //                  Game Analytics, Game Start Setting, Progress Display Setting,
    //                  Video Setting, Captcha Setting
    //                  OR
    //      French -    Couleurs, Commentaires, Bouton Redirection, Configuration de l’impression,
    //                  Analyses du jeu, Réglage du début du jeu, Paramètres d\'affichage de la progression,
    //                  Paramètres vidéo, Paramètre Captcha
    //  LS  English -   Game Button Labels, Comments, Redirect Button,
    //                  Item Message, Comment Prompt, Price Scale Label,
    //                  Rank Message, Follow up Page, Respondent Consent
    //                  Or
    //      French -    Étiquettes de boutons du jeu, Titre du navigateur web, Bouton Redirection,
    //                  Message produit, Invite de commentaire, Étiquette du barème des prix,
    //                  Message classement, Page de suivi, Consentement des Répondant
    async sGameSettingsBtn(name: string) {
        const elem = $(`//button/span[text()=" ${name} "]`);
        await elem.scrollIntoView();
        await browser.pause(1000);
        await this.clickElement(elem);
        await browser.pause(5000);
    }

    async vGSBtnEnableStatus(name: string) {
        const elem = $('//button/span[text()=" ' + name + ' "]'); // added dou
        await elem.scrollIntoView();
        await browser.pause(1000);
        await this.clickElement(elem);
        await browser.pause(5000);
    }

    //  colors - select a specific color input field based on index
    //  'i' is  0 - Active Navigation Button, 1 - Active Button Font, 2 - Inactive Navigation Button,
    //          3 - Inactive Button Font, 4 - Game Font, 5 - Selection, 6 - Comment Popup Background,
    //          7 - Comment Popup Font, 8 - Redirect Button, 9 - Redirect Button Font, 10 - Landing Page Overlay,
    //          11 - Landing Page Font, 12 - Landing Page Opacity, 13 - Ending Page Overlay, 14 - Ending Page Font,
    //          15 - Ending Page Opacity
    async sColorInput(i: number, code: string) {
        await this.inpColors[i].moveTo();
        await this.setData(this.inpColors[i], code);
    }

    /** validate color picker container based on index */
    //  'i' starts from 0
    async vColourPickerContainer(expCount: number) {
        const count = await this.eleColourPickerContainer.length;
        expect(count).toBe(expCount);
        for (let i = 0; i < count; i++) {
            await this.scrollToElement(this.eleColourPickerContainer[i]);
            await this.elementIsDisplayed(this.eleColourPickerContainer[i]);
        }
    }

    /** select banner color container button */
    async clickBannerColourContainer() {
        await this.clickElement(this.eleBannerColourContainer);
        await browser.pause(2000);
    }

    /** THIS FUNCTION IS TO VALIDATE BANNER COLOUR CONTAINER ARROW  */
    async valBannerColourArrow() {
        await this.elementIsDisplayed(this.eleBannerColourArrow);
        await this.elementIsEnabled(this.eleBannerColourArrow);
    }

    /**** select price scale close (x) button ****/
    async sPriceScaleClose() {
        const btnPSC = $("#priceScaleClose");

        await this.clickElement(btnPSC);
        await browser.pause(5000);
    }

    /** select custom button */
    //  'option' = 'customizeLandingScreenButton' || 'customizeEndButton'
    async sCustomBtn(option: string) {
        const elem = $("//button[contains(@id,'" + option + "')]");

        await this.clickElement(elem);
        await browser.pause(4000);
    }

    get dContent() {
        return this.getElements("//mat-dialog-content/div[1]");
    }

    /** verify dialog content */
    //  'i' starts from 0
    async vDialogContent(i: number, text: string) {
        expect(await this.getText(this.dContent[i])).toBe(text);
    }

    get dPlaceholder2() {
        return this.getElement("//span[contains(@class, 'mat-caption')]");
    }

    /** input text box placeholder */
    async vDialogPlaceholder2(text: string) {
        expect(await this.dPlaceholder2.getText()).toBe(text);
    }

    /** game settings - enable or disable checkbox */
    async enable_disableCheckbox2() {
        await this.clickElement(this.chkBox);
        await browser.pause(2000);
    }

    /** verify redirect button is disabled in locale settings tab */
    async localeRedirectEnableStatus(yes: boolean) {
        expect(await this.btnRedirect.isEnabled()).toBe(yes);
    }

    /************************************************** Locale Settings **************************************************/

    get btnResetDeskUpl() {
        return this.getElement("#desktopUpload-resetButton");
    }
    get btnResetMobUpl() {
        return this.getElement("#mobileUpload-resetButton");
    }
    get message() {
        return this.getElement("#message");
    }
    get applyAll() {
        return this.getElement("#applyToAllLocales");
    }
    get btnCustomLP() {
        return this.getElement("#customizeLandingScreenButton");
    }
    get btnCustomEP() {
        return this.getElement("#customizeEndButton");
    }
    get importImage() {
        return this.getElement("(//*[@class='hidden-input-field'])[4]");
    }
    get eleMobileImgBrowseText() {
        return this.getElement(
            "(//*[@id='mobileUpload-file-button']/button/span)[1]"
        );
    }
    get eleDesktopImgBrowseText() {
        return this.getElement(
            "(//*[@id='desktopUpload-file-button']/button/span)[1]"
        );
    }
    get eleDesktopImgBrowse() {
        return this.getElement("//*[@id='desktopUpload-file-button']");
    }

    /** locale settings - select a locale */
    //  'code' is 'en_US', 'fr_FR' etc.
    async selectLocale(code: string) {
        await this.clickElement(this.dDropdown);
        await browser.pause(2000);

        const elem = $("//mat-option[@id='" + code + "']");
        await this.clickElement(elem);
        await browser.pause(5000);
    }

    /** locale settings - click on landing page button */
    async sLandingPage() {
        await this.clickElement(this.btnCustomLP);
        await browser.pause(4000);
    }

    /** locale settings - click on ending page button */
    async sEndingPage() {
        await this.clickElement(this.btnCustomEP);
        await browser.pause(4000);
    }

    /** landing, ending page - reset desktop image */
    async landing_endingResetDesktopImg() {
        await this.clickElement(this.btnResetDeskUpl);
        await browser.pause(2000);
    }

    /** landing, ending page - reset desktop image enable status */
    async landing_endingResetDesktopImgEnableStatus(yes: boolean) {
        expect(await this.btnResetDeskUpl.isEnabled()).toBe(yes);
    }

    /** landing, ending page - reset mobile image */
    async landing_endingResetMobileImg() {
        await this.clickElement(this.btnResetMobUpl);
        await browser.pause(2000);
    }

    /** landing, ending page - reset mobile image */
    async landing_endingResetMobileImgEnableStatus(yes: boolean) {
        expect(await this.btnResetMobUpl.isEnabled()).toBe(yes);
    }

    /** THIS FUNCTION IS TO VALIDATE DISABLED RESET BUTTON IN CUSTOMIZE LANDING PAGE */
    async valCustDisabledReset(idx: string) {
        const element = $(
            "(//mat-dialog-content//*[contains(@class,'mat-button-disabled')])[" +
            idx +
            "]"
        );

        await this.elementIsDisplayed(element);
        await this.elementIsDisabled(element);
    }

    /** landing, ending page - edit image */
    //  'i' is 1 - desktop, 2 - mobile
    async editLandingEndingImg(i: number, filepath: string) {
        const remoteFilePath = await browser.uploadFile(filepath);
        if (i == 1) {
            await rfp.showHiddenInputField1(0);
            await this.importTemp1.setValue(remoteFilePath);
        } else if (i == 2) {
            await rfp.showHiddenInputField1(2);
            await this.importTemp3.setValue(remoteFilePath);
        }
        await browser.pause(7000);
    }

    async ImportImageLandingEnding(path1: string) {
        await rfp.showHiddenInputField1(3);
        const filepath = path1;
        const remoteFilePath = await browser.uploadFile(filepath);
        await this.importImage.waitForDisplayed();
        await this.importImage.setValue(remoteFilePath);
        if (path1.includes(".zip")) {
            await browser.pause(150000);
        } else {
            await browser.pause(10000);
        }
    }

    /** THIS FUNCTION IS TO VALIDATE BROWSE TEXT IN DESKTOP IMAGE IN CUSTOMIZE PAGE */
    async valDesktopImgBrowseText(expValue: string) {
        expect(await this.getText(this.eleDesktopImgBrowseText)).toBe(expValue);
    }

    /** THIS FUNCTION IS TO CLICK DESKTOP IMAGE BROWSE BUTTON  */
    async clickDesktopImgBrowse() {
        await this.performClick(this.eleDesktopImgBrowse);
    }

    /** THIS FUNCTION IS TO VALIDATE BROWSE TEXT IN MOBILE IMAGE IN CUSTOMIZE PAGE */
    async valMobileImgBrowseText(expValue: string) {
        expect(await this.getText(this.eleMobileImgBrowseText)).toBe(expValue);
    }

    /*********************************************** pending rearrange *************************************/

    get eleInsideRoundCursor() {
        return this.getElement("(//*[@class='cursor'])[1]");
    }
    get eleOutsideRoundCursor() {
        return this.getElement("(//*[@class='cursor'])[2]");
    }
    get eleSelectedColour() {
        return this.getElement("//*[@class='selected-color']");
    }
    get eleBannerColourNumber() {
        return this.getElement(
            "(//*[contains(@class,'mat-form-field-autofill-control')])[1]"
        );
    }
    get eleFontColourContainer() {
        return this.getElement("(//*[@class='color-picker-container'])[2]");
    }
    get eleFontColourArrow() {
        return this.getElement(
            "(//*[@class='arrow ng-star-inserted arrow-bottom'])[2]"
        );
    }
    get eleFontInsideRoundCursor() {
        return this.getElement("(//*[@class='cursor'])[5]");
    }
    get eleFontOutsideRoundCursor() {
        return this.getElement("(//*[@class='cursor'])[6]");
    }
    get eleSelectedFontColour() {
        return this.getElement("(//*[@class='selected-color'])[2]");
    }
    get eleFontColourNumber() {
        return this.getElement(
            "(//*[contains(@class,'mat-form-field-autofill-control')])[2]"
        );
    }
    get eleRedSettingsIndicator() {
        return this.getElements("//*[contains(@class,'red settings-indicator')]");
    }
    get eleGreenSettingsIndicator() {
        return this.getElements("//*[contains(@class,'green settings-indicator')]");
    }
    get eleSectionTitleText() {
        return this.getElements("//*[@class='mat-caption section-title']");
    }
    get eleCustColorsLabelsText() {
        return this.getElements(
            "//*[contains(@id,'mat-form-field-label')]/mat-label"
        );
    }
    get eleOpacityPercent() {
        return this.getElements("//*[contains(@class,'opacity-percent')]");
    }
    get eleOpacityText() {
        return this.getElements("//*[@class='mat-caption opacity-text']");
    }
    get eleCustClose() {
        return this.getElement("//*[@id='customizeColorClose']");
    }
    get eleDropdownArrow() {
        return this.getElement("//*[contains(@class,'mat-select-arrow-wrapper')]");
    }
    get eleDDText() {
        return this.getElements("//*[@class='mat-option-text']");
    }
    get eleLocaleSettingsDropdownArrow() {
        return this.getElement(
            "//mat-dialog-content//*[contains(@class,'mat-select-arrow-wrapper')]"
        );
    }
    get eleSelectedDefaultText() {
        return this.getElement("//*[contains(@class,'mat-select-value-text')]/span");
    }
    get eleCheckboxSelNotSel() {
        return this.getElement("//*[contains(@class,'mat-checkbox-input')]");
    }
    get eleCheckbox() {
        return this.getElement("//*[contains(@id,'mat-checkbox')]/label");
    }
    get eleEnabledLabel() {
        return this.getElement("//*[contains(@class,'mat-label no-transform')]");
    }
    get eleSelectLocaleArrow() {
        return this.getElement("//*[contains(@class,'mat-select-arrow-wrapper')]");
    }
    get eleImageLocale() {
        return this.getElements("//*[@class='page-setting-content']/img");
    }
    get eleClickLandingEndClose() {
        return this.getElement("//*[@id='landEndPageClose']");
    }
    get eleLandingCustomizeText() {
        return this.getElement("(//*[@id='customizeLandingScreenButton']/span)[1]");
    }
    get eleEndPageCustomizeText() {
        return this.getElement("(//*[@id='customizeEndButton']/span)[1]");
    }
    get eleLandEndImgHelpCaptions() {
        return this.getElements("//*[@class='mat-caption']/li/span");
    }
    get eleLandingCustomize() {
        return this.getElement("//*[@id='customizeLandingScreenButton']");
    }
    get eleCustLabelText() {
        return this.getElements(
            "//*[contains(@class,'mat-form-field-label-wrapper')]/label/mat-label"
        );
    }
    get eleLandingSave() {
        return this.getElement("//*[@id='landEndPageSave']");
    }
    get eleLandingCancel() {
        return this.getElement("//*[@id='landEndPageCancel']");
    }
    get eleGameButtonCancel() {
        return this.getElement("//*[@id='gameButtonLabelCancelBtn']");
    }
    get eleCustCaptionText() {
        return this.getElements("//*[@class='fi-caption-label']");
    }
    get eleCustImagePixels() {
        return this.getElements(
            "//*[@class='image-upload-container']//*[@class='mat-caption']"
        );
    }
    get eleApplyToCheckbox() {
        return this.getElement("//*[@class='mat-checkbox-inner-container']");
    }
    get eleApplyToCheckedorUnchecked() {
        return this.getElement("//*[@class='mat-checkbox-inner-container']/input");
    }
    get eleApplyToAllLocalesText() {
        return this.getElements("//*[@class='mat-caption']/span");
    }
    get eleCustImage() {
        return this.getElements("//*[@id='templateImageDropZone']");
    }
    get eleMobileImgBrowse() {
        return this.getElement("//*[@id='mobileUpload-file-button']");
    }

    /** THIS FUNCTION IS TO CAPTURE AND VALIDATE THE ERROR MESSAGE IN BANNER COLOUR FIELD */
    async validateAlertMessages(idx: string, expMsg: string) {
        const element = $("(//*[@role='alert'])[" + idx + "]");
        await this.scrollToElement(element);
        const actMsg = await this.getText(element);
        expect(actMsg).toBe(expMsg);
    }

    //***************** GLOBAL SETTINGS **************************/

    /** THIS FUNCTION IS TO VALIDATE ROUND CURSOR INSIDE THE CONTAINER   */
    async valInsideRoundCursor() {
        await this.elementIsEnabled(this.eleInsideRoundCursor);
    }

    /** THIS FUNCTION IS TO VALIDATE ROUND CURSOR INSIDE THE CONTAINER   */
    async valOutsideRoundCursor() {
        await this.elementIsEnabled(this.eleOutsideRoundCursor);
    }

    /** THIS FUNCTION IS TO VALIDATE SELECTED COLOUR ROUND ELEMENT INSIDE THE CONTAINER   */
    async valSelectedColour() {
        await this.elementIsEnabled(this.eleSelectedColour);
    }

    /** THIS FUNCTION IS TO CLICK BANNER COLOUR TEXT NUMBER AREA  */
    async clickBannerColourNumber() {
        await this.clickElement(this.eleBannerColourNumber);
    }

    /** THIS FUNCTION IS TO ENTER DATA IN BANNER COLOUR FIELD */
    async enterValueInBannerColour(enterVal: string) {
        await this.setData(this.eleBannerColourNumber, enterVal);
    }

    /** THIS FUNCTION IS TO CLICK FONT COLOUR CONTAINER BUTTON */
    async clickFontColourContainer() {
        await this.clickElement(this.eleFontColourContainer);
        await browser.pause(3000);
    }

    /** THIS FUNCTION IS TO VALIDATE BANNER COLOUR CONTAINER ARROW  */
    async valFontColourArrow() {
        await this.elementIsDisplayed(this.eleFontColourArrow);
        await this.elementIsEnabled(this.eleFontColourArrow);
    }

    /** THIS FUNCTION IS TO VALIDATE FONT COLOUR ROUND CURSOR INSIDE THE CONTAINER   */
    async valFontInsideRoundCursor() {
        await this.elementIsDisplayed(this.eleFontInsideRoundCursor);
        await this.elementIsEnabled(this.eleFontInsideRoundCursor);
    }

    /** THIS FUNCTION IS TO VALIDATE FONT COLOUR ROUND CURSOR INSIDE THE CONTAINER   */
    async valFontOutsideRoundCursor() {
        await this.elementIsDisplayed(this.eleFontOutsideRoundCursor);
        await this.elementIsEnabled(this.eleFontOutsideRoundCursor);
    }

    /** THIS FUNCTION IS TO VALIDATE SELECTED FONT COLOUR ROUND ELEMENT INSIDE THE CONTAINER   */
    async valSelectedFontColour() {
        await this.elementIsDisplayed(this.eleSelectedFontColour);
        await this.elementIsEnabled(this.eleSelectedFontColour);
    }

    /** THIS FUNCTION IS TO CLICK FONT COLOUR TEXT NUMBER AREA  */
    async clickFontColourNumber() {
        await this.clickElement(this.eleFontColourNumber);
        await browser.pause(2000);
    }

    /** THIS FUNCTION IS TO ENTER DATA IN FONT COLOUR FIELD */
    async enterValueInFontColour(enterVal: string) {
        await this.setData(this.eleFontColourNumber, enterVal);
    }

    /** THIS FUNCTION IS TO VALIDATE RED SETTINGS INDICATOR  */
    async valRedSettingsIndicator(expcount: number) {
        const count = await this.eleRedSettingsIndicator.length;
        expect(count).toBe(expcount);
        for (let i = 0; i < count; i++) {
            await this.elementIsDisplayed(this.eleRedSettingsIndicator[i]);
        }
    }

    /** THIS FUNCTION IS TO VALIDATE RED SETTINGS INDICATOR BASED ON INDEX POSITION */
    async valRedIndicator(idx: string) {
        let indicatorRed = $(
            "(//*[contains(@class,'red settings-indicator')])[" + idx + "]"
        );
        await this.elementIsDisplayed(indicatorRed);
    }

    /** THIS FUNCTION IS TO VALIDATE GREEN SETTINGS INDICATOR BASED ON INDEX POSITION */
    async valGreenIndicator(idx: string) {
        let indicatorGreen = $(
            "(//*[contains(@class,'green settings-indicator')])[" + idx + "]"
        );
        await this.elementIsDisplayed(indicatorGreen);
    }

    /** THIS FUNCTION IS TO VALIDATE GREEN SETTINGS INDICATOR  */
    async valGreenSettingsIndicator(expcount: number) {
        const count = await this.eleGreenSettingsIndicator.length;
        expect(count).toBe(expcount);
        for (let i = 0; i < count; i++) {
            await this.elementIsDisplayed(this.eleGreenSettingsIndicator[i]);
        }
    }

    /* global settings - verify indicator count for green and red */
    //  'm' for red, 'n' for green
    async gsIndicatorCount(m: number, n: number) {
        const red = $$("//div[contains(@class, 'red settings-indicator')]");
        const green = $$("//div[contains(@class, 'green settings-indicator')]");
        expect(red.length).toEqual(m);
        expect(green.length).toEqual(n);
    }

    // /* global settings - verify a specific indicator is green or red */
    // //  'i' - starts from 0
    // async vGSColorIndicator(i: number, color: string) {
    //     const indicator = $$("//fiis-fi-descriptive-button/div[1]/div[1]/div[1]");
    //     expect(await indicator[i].getAttribute('class')).toContain(color);
    // }

    /** THIS FUNCTION IS TO ENTER DATA IN FONT COLOUR FIELDS BASED ON INDEX POSITION */
    async enterValueInColourFields(idx: string, enterVal: string) {
        let enterValueInColourFields = $("(//*[contains(@class,'mat-form-field-autofill-control')])[" + idx + "]");

        await this.scrollTillElement(enterValueInColourFields);
        await this.setData(enterValueInColourFields, enterVal);
    }

    /** THIS FUNCTION IS TO VALIDATE SECTION TITLE TEXT */
    async valSectionTitleText(expValue: Array<string>) {
        const actualMessages = await Promise.all(
            await this.eleSectionTitleText.map((element) => element.getText())
        );

        expect(actualMessages).toEqual(expValue);
    }

    /** THIS FUNCTION IS TO VALIDATE LABEL TEXT */
    async valCustColorsLabelsText(expValue: Array<string>) {
        const actualMessages = await Promise.all(
            await this.eleCustColorsLabelsText.map((element) => element.getText())
        );

        expect(actualMessages).toEqual(expValue);
    }

    /** THIS FUNCTION IS TO VALIDATE OPACITY PERCENTAGE */
    async valOpacityPercent(expValue: Array<string>) {
        const actualMessages = await Promise.all(
            await this.eleOpacityPercent.map((element) => element.getText())
        );

        expect(actualMessages).toEqual(expValue);
    }

    /** THIS FUNCTION IS TO VALIDATE OPACITY TEXT */
    async valOpacityText(expValue: Array<string>) {
        const actualMessages = await Promise.all(
            await this.eleOpacityText.map((element) => element.getText())
        );

        expect(actualMessages).toEqual(expValue);
    }

    /** THIS FUNCTION IS TO CLICK CLOSE CUSTOMIZE COLORS POPUP */
    async clickCustomizeColorsClose() {
        await this.clickElement(this.eleCustClose);
        await browser.pause(2000);
    }

    /** THIS FUNCTION IS TO CLICK DROPDOWN ARROW */
    async clickDropdownArrow() {
        await this.clickElement(this.eleDropdownArrow);
        await browser.pause(2000);
    }

    /** THIS FUNCTION IS TO VALIDATE DROPDOWN  TEXT */
    async valDropdownText(expValue: Array<string>) {
        const textPromises = await this.eleDDText.map((element) => element.getText());
        const actualMessages = await Promise.all(textPromises);

        expect(actualMessages).toEqual(expValue);

        await browser.keys(Key.Escape);
        await browser.pause(2000);
    }

    /** THIS FUNCTION IS TO CLICK DROPDOWN ARROW IN LOCALE SETTINGS RESPONDENT CONSENT */
    async clickLocaleSettingsDropdownArrow() {
        await this.clickElement(this.eleLocaleSettingsDropdownArrow);
        await browser.pause(2000);
    }

    /** THIS FUNCTION IS TO CLICK DROPDOWN OPITONS TEXT IN COMMENTS PAGE */
    async selectCommentsDropdownOption(optionText: string) {
        let eleCommentsDropdownOption = $("//*[@id='commentWorkflow-" + optionText + "']");

        await this.clickElement(eleCommentsDropdownOption);
        await browser.pause(2000);
    }
    // HIDE_COMMENT_BUTTON_AND_PROMPT || SHOW_COMMENT_BUTTON

    /** THIS FUNCTION IS TO VALIDATE SAVE BUTTON IS ENABLED BY ENTERING OPTION TEXT */
    async validateCancelOrSaveEnabled(optionText: string) {
        const element = $(
            "//mat-dialog-actions//*[contains(@id,'" + optionText + "')]"
        );
        await this.elementIsEnabled(element);
    }

    // Cancel || Save

    /** THIS FUNCTION IS TO VALIDATE SAVE BUTTON IS DISABLED BY ENTERING OPTION TEXT */
    async validateCancelOrSaveDisabled(optionText: string) {
        let eleCommentsDropdownOption = $("//*[@id='commentWorkflow-" + optionText + "']");

        await this.elementIsDisabled(eleCommentsDropdownOption);
    }
    // Cancel || Save

    /** THIS FUNCTION IS TO CLICK SAVE BUTTON IS ENABLED BY ENTERING OPTION TEXT */
    async clickCancelOrSave(optionText: string) {
        let btnCancelOrSave = $("//mat-dialog-actions//*[contains(@id,'" + optionText + "')]");

        await this.clickElement(btnCancelOrSave);
        await browser.pause(2000);
    }
    // Cancel || Save

    /** THIS FUNCTION IS TO VALIDATE CANCEL BUTTON IS ENABLED BY ENTERING OPTION TEXT */
    async validateCustCancelEnabled(optionText: string) {
        let btnCustCancel = $("//*[contains(@id,'customize" + optionText + "Cancel')]");

        await this.elementIsEnabled(btnCustCancel);
        // Color || CommentTypeSave || Redirect || Sentiment || GameAnalytics || StartGameSetting || ProgressIndicator
    }

    /** THIS FUNCTION IS TO VALIDATE CANCEL BUTTON IS DISABLED BY ENTERING OPTION TEXT */
    async validateCustCancelDisabled(optionText: string) {
        let btnCustCancel = $("//*[contains(@id,'customize" + optionText + "Cancel')]");

        await this.elementIsDisabled(btnCustCancel);
        // Color || CommentTypeSave || Redirect || Sentiment || GameAnalytics || StartGameSetting || ProgressIndicator
    }

    /** THIS FUNCTION IS TO CLICK CANCEL BUTTON IS ENABLED BY ENTERING OPTION TEXT */
    async clickCustCancel(optionText: string) {
        let btnCustCancel = $("//*[contains(@id,'customize" + optionText + "Cancel')]");

        await this.clickElement(btnCustCancel);
        await browser.pause(5000);
        // Color || CommentTypeSave || Redirect || Sentiment || GameAnalytics || StartGameSetting || ProgressIndicator
    }

    /** THIS FUNCTION IS TO VALIDATE DEFAULT SELECTED TEXT IN GAME SETTINGS BUTTONS TABS */
    async valSelectedDefaultText(expValue: string) {
        const actMsg = await this.getText(this.eleSelectedDefaultText);
        expect(actMsg).toBe(expValue);
    }

    /** THIS FUNCTION IS TO CLICK DROPDOWN OPITONS TEXT IN REDIRECT BUTTON PAGE */
    async selectDropdownOption(optionText: string) {
        let dropdownOption = $("//*[@id='gameStartSetting-" + optionText + "']");

        await this.clickElement(dropdownOption);
        await browser.pause(2000);
        //  REDIRECT_OPTION_NONE || REDIRECT_OPTION_SINGLE || REDIRECT_OPTION_MULTIPLE || 
        //  REDIRECT_OPTION_IMAGE || START_GAME_ON_CLICK_OF_LANDING_PAGE_OFF || START_GAME_ON_CLICK_OF_LANDING_PAGE_ON
    }
    
    /** THIS FUNCTION IS TO VALIDATE SENTIMENT REQUIRED, GAME ANALYTICS, PROGRESS DISPLAY, VIDEO SETTING LABEL TEXT BY PASSING OPTION TEXT */
    async valLabelText(optionText: string, expValue: string) {
        let labelText = $("//*[@class='mat-caption " + optionText + "-label']");

        expect(await this.getText(labelText)).toBe(expValue);
    }

    // sentiment-required || game-analytics  || progress-indicator   || text

    /** THIS FUNCTION IS TO VALIDATE SENTIMENT CHECKBOX IS NOT SELECTED BY DEFAULT */
    async valCheckboxNotSel() {
        await this.elementIsNotSelected(this.eleCheckboxSelNotSel);
    }

    /** THIS FUNCTION IS TO VALIDATE SENTIMENT CHECKBOX IS NOT SELECTED BY DEFAULT */
    async valCheckboxIsSelected() {
        await this.elementIsSelected(this.eleCheckboxSelNotSel);
    }

    /** THIS FUNCTION IS TO CLICK SENTIMENT CHECKBOX  */
    async clickCheckbox() {
        await this.performClick(this.eleCheckbox);
    }

    /** THIS FUNCTION IS TO VALIDATE ENABLED TEXT */
    async valEnabledLabelText(expValue: string) {
        expect(await this.getText(this.eleEnabledLabel)).toBe(expValue);
    }

    //*************** THE BELOW FUNCTIONS ARE RELATED TO LOCALE SETTINGS TAB ****************/

    /** THIS FUNCTION IS TO CLICK SELECT LOCALE ARROW BUTTON IN LOCALE SETTINGS TAB */
    async clickLocaleArrow() {
        await this.performClick(this.eleSelectLocaleArrow);
    }

    /** THIS FUNCTION IS TO VALIDATE IMAGES IS DISPLAYED IN LOCALE SETTINGS PAGE  */
    async validateLocaleImagesDisp(expcount: number) {
        const count = await this.eleImageLocale.length;
        expect(count).toBe(expcount);
        for (let i = 0; i < count; i++) {
            await this.elementIsDisplayed(this.eleImageLocale[i]);
        }
    }

    /** THIS FUNCTION IS TO CLICK ON IMAGES AND CHECK IF THE CUSTOMIZE LANDING AND END PAGES ARE OPENED */
    async clickImage(idx: string) {
        let clickImage = $("(//*[@class='page-setting-content']/img)[" + idx + "]");

        await this.performClick(clickImage);
    }

    /** THIS FUNCTION IS TO CLICK CLOSE CUSTOMIZE LANDING PAGE */
    async clickLandingEndClose() {
        await this.performClick(this.eleClickLandingEndClose);
    }

    /** THIS FUNCTION IS TO VALIDATE LANDING PAGE CUSTOMIZE TEXT IN LOCALE SETTINGS TAB */
    async valLandingCustomizeText(expValue: string) {
        expect(await this.getText(this.eleLandingCustomizeText)).toBe(expValue);
    }

    /** THIS FUNCTION IS TO VALIDATE END PAGE CUSTOMIZE TEXT IN LOCALE SETTINGS TAB */
    async valEndPageCustomizeText(expValue: string) {
        expect(await this.getText(this.eleEndPageCustomizeText)).toBe(expValue);
    }

    /** THIS FUNCTION IS TO VALIDATE LANDING AND END PAGE IMAGE HELP CAPTIONS IN LOCALE SETTINS PAGE */
    async valLandEndImgHelpCaptions(expValue: Array<string>) {
        const actualMessages = await Promise.all(
            await this.eleLandEndImgHelpCaptions.map((el) => el.getText())
        );

        expect(actualMessages).toEqual(expValue);
    }

    /** THIS FUNCTION IS TO CLICK LANDING CUSTOMIZE BUTTON IN LOCALE SETTINGS TAB */
    async clickLandingCustomize() {
        await this.performClick(this.eleLandingCustomize);
    }

    /** THIS FUNCTION IS TO VALIDATE HEADER LABEL TEXT IN CUSTOMIZE LANDING PAGE */
    async valCustLabelText(expValue: Array<string>) {
        const actualMessages = await Promise.all(
            await this.eleCustLabelText.map((el) => el.getText())
        );

        expect(actualMessages).toEqual(expValue);
    }

    /** THIS FUNCTION IS TO ENTER DATA IN ANY NAME FIELDS */
    async enterTextInField(idx: string, enterVal: string) {
        let headlineField = $("(//*[contains(@class,'mat-form-field-autofill-control')])[" + idx + "]");
        
        await this.setData(headlineField, enterVal);
    }

    /** THIS FUNCTION IS TO VALIDATE LANDING PAGE SAVE BUTTON IS ENABLED  */
    async validateLandingSaveEnabled() {
        await this.elementIsEnabled(this.eleLandingSave);
    }

    /** THIS FUNCTION IS TO VALIDATE LANDING PAGE SAVE BUTTON IS DISABLED  */
    async validateLandingSaveDisabled() {
        await this.elementIsDisabled(this.eleLandingSave);
    }

    /** THIS FUNCTION IS TO CLICK LANDING PAGE SAVE BUTTON  */
    async clickLandingEndingSave() {
        await this.performClick(this.eleLandingSave);
    }

    /** THIS FUNCTION IS TO CLICK LANDING PAGE CANCEL BUTTON IS DISABLED  */
    async clickLandingCancel() {
        await this.performClick(this.eleLandingCancel);
    }

    /** THIS FUNCTION IS TO CLICK LANDING PAGE CANCEL BUTTON IS DISABLED  */
    async clickGameButtonCancel() {
        await this.performClick(this.eleGameButtonCancel);
    }

    /** THIS FUNCTION IS TO VALIDATE CAPTION TEXT IN CUSTOMIZE LANDING PAGE */
    async valCustCaptionText(expValue: Array<string>) {
        const actualMessages = await Promise.all(
            await this.eleCustCaptionText.map((el) => el.getText())
        );

        expect(actualMessages).toEqual(expValue);
    }

    /** THIS FUNCTION IS TO VALIDATE IMAGE PIXELS IN CUSTOMIZE LANDING PAGE */
    async valCustImagePixels(expValue: Array<string>) {
        const actualMessages = await Promise.all(
            await this.eleCustImagePixels.map((el) => el.getText())
        );

        expect(actualMessages).toEqual(expValue);
    }

    /** THIS FUNCTION IS TO CLICK APPLY TO CHECKBOX  */
    async clickApplyToCheckbox() {
        await this.performClick(this.eleApplyToCheckbox);
    }

    /** THIS FUNCTION IS TO VALIDATE APPLY TO CHECKBOX IS NOT SELECTED BY DEFAULT */
    async valApplyToCheckboxNotSel() {
        await this.elementIsNotSelected(this.eleApplyToCheckedorUnchecked);
    }

    /** THIS FUNCTION IS TO VALIDATE APPLY TO CHECKBOX IS SELECTED */
    async valApplyToCheckboxSelected() {
        await this.elementIsSelected(this.eleApplyToCheckedorUnchecked);
    }

    /** THIS FUNCTION IS TO VALIDATE APPLY TO AND ALL LOCALES TEXT IN CUSTOMIZE LANDING PAGE */
    async valApplyToAllLocalesText(expValue: Array<string>) {
        const actualMessages = await Promise.all(
            await this.eleApplyToAllLocalesText.map((el) => el.getText())
        );

        expect(actualMessages).toEqual(expValue);
    }

    /** THIS FUNCTION IS TO VALIDATE IMAGES ARE DISPLAYED IN CUSTOMIZE LANDING PAGE  */
    async validateCustImageDisplayed(expCount: number) {
        expect(await this.eleCustImage.length).toBe(expCount);

        const displayPromises = await this.eleCustImage.map((el) =>
            el.isDisplayed()
        );
        await Promise.all(displayPromises);
    }
}

export default new templatesPage();
