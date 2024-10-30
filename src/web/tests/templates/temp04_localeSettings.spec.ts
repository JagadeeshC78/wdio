import { getUserRole, getObjective, getOs, getLanguage } from '../../../config/environmentVariablesSetup'
import { companySelection } from 'src/config/chooseCompany';
import { switchToParentTab } from 'src/web/utils/windowHandling';
import locatorValues from 'src/web/constant/static/locatorValues';

import lp from '@WebPages/login/login.page';
import rfp from '@WebPages/setup/reusableFunctions.page';
import tp from '@WebPages/templates/templates.page';
import csgp from '@WebPages/companysettings/general.page';
import cspp from '@WebPages/companysettings/privacy.page';
import ms1p from '@WebPages/surveysandsegments/mngsurveys.page';
import scip from '@WebPages/setup/createinsight.page';
import sop from '@WebPages/setup/overview.page';
import sip from '@WebPages/setup/items.page';
import ss1p from '@WebPages/setup/setupsurvey.page';
import sgsp from '@WebPages/setup/gamesettings.page';

import comcon from 'src/web/constant/common';
import surcon from 'src/web/constant/survey';
import temcon from 'src/web/constant/templates';
import sitemcon from 'src/web/constant/setup/items';

/** Execution Time : ~ 16 mins. */

/** Does not cover : Captcha Setting */

describe('Templates 04 : Locale Settings', () => {

    const osValue = getOs();
    const featureValue = getObjective();
    const spectCompanyDetail = companySelection["templates"][featureValue];
    const company = spectCompanyDetail[osValue];

    const ins_name = getObjective() + "Test";
    const temName = "temp" + getObjective().replace("Template", "");

    it('001 : admin a company', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await lp.selectCompany(company);
            }
        }
    });

    it('002 : select latest template and edit option', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await rfp.navigateToRequiredTabs(locatorValues.LEFTMENU_TEMPLATES);

                await tp.selectTemplate(temName);
                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Edit");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Éditer");
                }
            }
        }
    });

    it('003 : locale settings tab - select en_US and validate section header texts', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.sTemplateTab(2);
                await tp.selectLocale("en_US");
                if (["English"].includes(getLanguage())) {
                    await tp.vSectionHeaderText(["LANDING PAGE", "END PAGE", "GAME SETTINGS"]);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vSectionHeaderText(["PAGE D'ATTERRISSAGE", "PAGE DE CLÔTURE", "PARAMÈTRES DU JEU"]);
                }
            }
        }
    });

    it('004 : validate Images Displayed and Click on Each Image and Check If Customize Langing and End Page is Opened ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.validateLocaleImagesDisp(2);
                await tp.clickImage("1");
                if (["English"].includes(getLanguage())) {
                    await rfp.valDialogTitle(1, "Customize Landing Page");
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.valDialogTitle(1, "Personnaliser la page d'atterrissage");
                }
                await tp.clickLandingEndClose();

                await tp.clickImage("2");
                if (["English"].includes(getLanguage())) {
                    await rfp.valDialogTitle(1, "Customize End Page");
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.valDialogTitle(1, "Personnaliser la page de clôture");
                }
                await tp.clickLandingEndClose();
            }
        }
    });

    it('005 : Validate Landing and End Page Customize Text in Locale Settings Page', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.valLandingCustomizeText("CUSTOMIZE");
                    await tp.valEndPageCustomizeText("CUSTOMIZE");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.valLandingCustomizeText("PERSONNALISER");
                    await tp.valEndPageCustomizeText("PERSONNALISER");
                }
            }
        }
    });

    it('006 : Validate Image Help Captions Text in Page ', async () => {
        const eCaptions = ["Landing Page Headline", "Landing Page Message", "Main Image", "End Page Headline",
            "End Page Message", "Main Image"]
        const fCaptions = ["En-tête de la page d'atterrissage", "Message de la page d'atterrissage", "Image principale",
            "En-tête de la page de clôture", "Message de la page de clôture", "Image principale"]

        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.valLandEndImgHelpCaptions(eCaptions);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.valLandEndImgHelpCaptions(fCaptions);
                }
            }
        }
    });

    it('007 : Click Landing Customize Button and Validate the Details in Page ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.clickLandingCustomize();
                    await rfp.valDialogTitle(1, "Customize Landing Page");
                    await rfp.getLocaleName("English / USD");
                    await tp.valCustLabelText(["HEADLINE", "MESSAGE"]);
                    await tp.validateLandingSaveDisabled();
                } else if (["Français"].includes(getLanguage())) {
                    await tp.clickLandingCustomize();
                    await rfp.valDialogTitle(1, "Personnaliser la page d'atterrissage");
                    await rfp.getLocaleName("Anglais / USD");
                    await tp.valCustLabelText(["EN-TÊTE", "MESSAGE"]);
                    await tp.validateLandingSaveDisabled();
                }
            }
        }
    });

    it('008 : Validate Error Messages in Headline Name Field by Entering Maximum Characters ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", await rfp.strBuild(66, "a"));
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "65"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "65"));
                }
            }
        }
    });

    it('009 : Validate Error Messages in Message Name Field by Entering Maximum Characters ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", "TELL US WHAT YOU THINK..");
                await tp.validateLandingSaveEnabled();
                await tp.enterTextInField("2", await rfp.strBuild(301, "a"));
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "300"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "300"));
                }
            }
        }
    });

    it('010 : Validate Caption Text, Images, Pixels and Apply To and All Locales Text in Customize Landing Page ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.enterTextInField("2", "Help us pick the hottest trends! What do you think about these products?");
                if (["English"].includes(getLanguage())) {
                    await tp.valCustCaptionText(["MAIN IMAGES", "DESKTOP", "MOBILE"]);
                    await tp.valCustImagePixels(["1920 x 1080 px", "900 x 1600 px"]);
                    await tp.valApplyToAllLocalesText(["Apply to", "All Locales"]);
                    await tp.validateCustImageDisplayed(2);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.valCustCaptionText(["IMAGES PRINCIPALES", "BUREAU", "MOBILE"]);
                    await tp.valCustImagePixels(["1920 x 1080 px", "900 x 1600 px"]);
                    await tp.valApplyToAllLocalesText(["Appliquer à", "Toutes les régions"]);
                    await tp.validateCustImageDisplayed(2);
                }
            }
        }
    });

    it('011 : Validate Checkbox is Not Selected By Default and Click Checkbox in Customize Landing Page ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.valApplyToCheckboxNotSel();
                await tp.clickApplyToCheckbox();
                await tp.valApplyToCheckboxSelected();
                await tp.clickApplyToCheckbox();
            }
        }
    });

    it('012 : Validate Disabled Reset Buttons and Browse Text in Customize Landing Page ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.valCustDisabledReset("1");
                await tp.valCustDisabledReset("2");
                if (["English"].includes(getLanguage())) {
                    await tp.valDesktopImgBrowseText("BROWSE");
                    await tp.valMobileImgBrowseText("BROWSE");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.valDesktopImgBrowseText("PARCOURIR");
                    await tp.valMobileImgBrowseText("PARCOURIR");
                }
            }
        }
    });

    it('013 : Click Desktop and Mobile Browse Buttons and Upload New Image and Validate Reset Enabled in Customize Landing Page ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.editLandingEndingImg(1, 'src/resources/insights/zip_csv_xls_xlsx/itemUploadAmpersandTest.xls');
                if (["English"].includes(getLanguage())) {
                    await tp.vImgErrorMsg(temcon.eIMGErr);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vImgErrorMsg(temcon.fIMGErr);
                }
                await tp.sCloseImgErrorMsg();
                await tp.editLandingEndingImg(1, 'src/resources/insights/media/Fshirt.jpg');
                await tp.landing_endingResetDesktopImgEnableStatus(true);
                await tp.landing_endingResetDesktopImg();

                await tp.editLandingEndingImg(2, 'src/resources/insights/zip_csv_xls_xlsx/itemUploadAmpersandTest.xls');
                if (["English"].includes(getLanguage())) {
                    await tp.vImgErrorMsg(temcon.eIMGErr);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vImgErrorMsg(temcon.fIMGErr);
                }
                await tp.sCloseImgErrorMsg();
                await tp.editLandingEndingImg(2, 'src/resources/insights/media/Fshirt.jpg');
                await tp.landing_endingResetMobileImgEnableStatus(true);
                await tp.landing_endingResetMobileImg();
                await tp.clickLandingCancel();
            }
        }
    });

    it('014 : Click End Page Customize Button and Validate the Details in Page ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await rfp.refreshApplication();
                await tp.sEndingPage();
                if (["English"].includes(getLanguage())) {
                    await rfp.valDialogTitle(1, "Customize End Page");
                    await rfp.getLocaleName("English / USD");
                    await tp.valCustLabelText(["HEADLINE", "MESSAGE"]);
                    await tp.validateLandingSaveDisabled();
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.valDialogTitle(1, "Personnaliser la page de clôture");
                    await rfp.getLocaleName("Anglais / USD");
                    await tp.valCustLabelText(["EN-TÊTE", "MESSAGE"]);
                    await tp.validateLandingSaveDisabled();
                }
            }
        }
    });

    it('015 : Validate Error Messages in Headline Name Field by Entering Maximum Characters ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", await rfp.strBuild(66, "a"));
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "65"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "65"));
                }
            }
        }
    });

    it('016 : Validate Error Messages in Message Name Field by Entering Maximum Characters ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", "TELL US WHAT YOU THINK..");
                await tp.validateLandingSaveEnabled();
                await tp.enterTextInField("2", await rfp.strBuild(301, "a"));
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "300"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "300"));
                }
            }
        }
    });

    it('017 : Validate Caption Text, Images, Pixels and Apply To and All Locales Text in Customize End Page ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.enterTextInField("2", "Help us pick the hottest trends! What do you think about these products?");
                if (["English"].includes(getLanguage())) {
                    await tp.valCustCaptionText(["MAIN IMAGES", "DESKTOP", "MOBILE"]);
                    await tp.valCustImagePixels(["1920 x 1080 px", "900 x 1600 px"]);
                    await tp.valApplyToAllLocalesText(["Apply to", "All Locales"]);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.valCustCaptionText(["IMAGES PRINCIPALES", "BUREAU", "MOBILE"]);
                    await tp.valCustImagePixels(["1920 x 1080 px", "900 x 1600 px"]);
                    await tp.valApplyToAllLocalesText(["Appliquer à", "Toutes les régions"]);
                }
                await tp.validateCustImageDisplayed(2);
            }
        }
    });

    it('018 : Validate Checkbox is Not Selected By Default and Click Checkbox in Customize End Page ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.valApplyToCheckboxNotSel();
                await tp.clickApplyToCheckbox();
                await tp.valApplyToCheckboxSelected();
                await tp.clickApplyToCheckbox();
            }
        }
    });

    it('019 : Validate Disabled Reset Buttons and Browse Text in Customize Landing Page ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.valCustDisabledReset("1");
                await tp.valCustDisabledReset("2");
                if (["English"].includes(getLanguage())) {
                    await tp.valDesktopImgBrowseText("BROWSE");
                    await tp.valMobileImgBrowseText("BROWSE");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.valDesktopImgBrowseText("PARCOURIR");
                    await tp.valMobileImgBrowseText("PARCOURIR");
                }
            }
        }
    });

    it('020 : Click Desktop and Mobile Browse Buttons and Upload New Image and Validate Reset Enabled in Customize Landing Page ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.editLandingEndingImg(1, 'src/resources/insights/zip_csv_xls_xlsx/itemUploadAmpersandTest.xls');
                if (["English"].includes(getLanguage())) {
                    await tp.vImgErrorMsg(temcon.eIMGErr);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vImgErrorMsg(temcon.fIMGErr);
                }
                await tp.sCloseImgErrorMsg();
                await tp.editLandingEndingImg(1, 'src/resources/insights/media/Fshirt.jpg');
                await tp.landing_endingResetDesktopImgEnableStatus(true);
                await tp.landing_endingResetDesktopImg();

                await tp.editLandingEndingImg(2, 'src/resources/insights/zip_csv_xls_xlsx/itemUploadAmpersandTest.xls');
                if (["English"].includes(getLanguage())) {
                    await tp.vImgErrorMsg(temcon.eIMGErr);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vImgErrorMsg(temcon.fIMGErr);
                }
                await tp.sCloseImgErrorMsg();
                await tp.editLandingEndingImg(2, 'src/resources/insights/media/Fshirt.jpg');
                await tp.landing_endingResetMobileImgEnableStatus(true);
                await tp.landing_endingResetMobileImg();
                await tp.dialog2Save(false);
            }
        }
    });

    it('021 : Validate Game Settings Buttons Texts In Locale Settings Page', async () => {
        const ePnPBtnTxt = ["CUSTOMIZE", "CUSTOMIZE", "GAME BUTTON LABELS", "WEB BROWSER TITLE", 
            "REDIRECT BUTTON", "COMMENT PROMPT", "PRICE SCALE LABEL", "RESPONDENT CONSENT", 
            "CAPTCHA SETTING"]
        const fPnPBtnTxt = ["PERSONNALISER", "PERSONNALISER", "ÉTIQUETTES DE BOUTONS DU JEU ", 
            "TITRE DU NAVIGATEUR WEB", "BOUTON REDIRECTION", "INVITE DE COMMENTAIRE", 
            "ÉTIQUETTE DU BARÈME DES PRIX", "TEXTE DE CONSENTEMENT", "PARAMÈTRE CAPTCHA"]

        const eRnRBtnTxt = ["CUSTOMIZE", "CUSTOMIZE", "GAME BUTTON LABELS", "WEB BROWSER TITLE", 
            "REDIRECT BUTTON", "ITEM MESSAGE", "COMMENT PROMPT", "RANK MESSAGE", "FOLLOW UP PAGE", 
            "RESPONDENT CONSENT", "CAPTCHA SETTING"]
        const fRnRBtnTxt = ["PERSONNALISER", "PERSONNALISER", "ÉTIQUETTES DE BOUTONS DU JEU ", 
            "TITRE DU NAVIGATEUR WEB", "BOUTON REDIRECTION", "MESSAGE PRODUIT", "INVITE DE COMMENTAIRE", 
            "MESSAGE CLASSEMENT", "PAGE DE SUIVI", "TEXTE DE CONSENTEMENT", "PARAMÈTRE CAPTCHA"]

        const eAnABtnTxt = ["CUSTOMIZE", "CUSTOMIZE", "GAME BUTTON LABELS", "WEB BROWSER TITLE", 
            "REDIRECT BUTTON", "RESPONDENT CONSENT", "CAPTCHA SETTING"]
        const fAnABtnTxt = ["PERSONNALISER", "PERSONNALISER", "ÉTIQUETTES DE BOUTONS DU JEU ", 
            "TITRE DU NAVIGATEUR WEB", "BOUTON REDIRECTION", "TEXTE DE CONSENTEMENT", "PARAMÈTRE CAPTCHA"]

        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            await rfp.refreshApplication();

            if (["PnPTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vGSBtnNameList(ePnPBtnTxt);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vGSBtnNameList(fPnPBtnTxt);
                }
            } else if (["RnRTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vGSBtnNameList(eRnRBtnTxt);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vGSBtnNameList(fRnRBtnTxt);
                }
            } else if (["AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vGSBtnNameList(eAnABtnTxt);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vGSBtnNameList(fAnABtnTxt);
                }
            }
        }
    });

    it('022 : Validate Game Settings Buttons Texts in Locale Settings Page', async () => {
        const ePnPBtnDesTxt = ["Set the text for button labels",
            "Configure the browser tab / window title settings.",
            "Set the button label and link.",
            "Set the prompt title and placeholder text.",
            "Set the text for price scale label",
            "Configure the consent capture settings.",
            "Captcha is ON"]
        const fPnPBtnDesTxt = ["Définir le texte pour les étiquettes de boutons",
            "Configurer les paramètres du titre de l'onglet ou de la fenêtre du navigateur.",
            "Paramétrer le nom du bouton et le lien.",
            "Paramétrer le titre de l'invite et le texte de remplacement.",
            "Définir le texte de l'étiquette du barème des prix",
            "Configurez les paramètres de capture du consentement.",
            "Captcha activé"]
        const eRnRBtnDesTxt = ["Set the text for button labels",
            "Configure the browser tab / window title settings.",
            "Set the button label and link.",
            "Set the title that appears above each item as the respondent rates the item.",
            "Set the prompt title and placeholder text.",
            "Set the instructions for the ranking page.",
            "Set title and instructions for the follow up page, and prompt and placeholder text of the popup comment.",
            "Configure the consent capture settings.",
            "Captcha is ON"]
        const fRnRBtnDesTxt = ["Définir le texte pour les étiquettes de boutons",
            "Configurer les paramètres du titre de l'onglet ou de la fenêtre du navigateur.",
            "Paramétrer le nom du bouton et le lien.",
            "Paramétrer le titre de l'invite et le texte de remplacement.",
            "Paramétrer le titre qui apparaît au-dessus de chaque produit lorsque le répondant l'évalue.",
            "Paramétrer le titre de l'invite et le texte de remplacement.",
            "Paramétrer les instructions de la page de classement.",
            "Paramétrer le titre et les instructions de la page de suivi ainsi que le texte d'invite et de remplacement du commentaire contextuel.",
            "Configurez les paramètres de capture du consentement.",
            "Captcha activé"]

        const eAnABtnDesTxt = ["Set the text for button labels",
            "Configure the browser tab / window title settings.",
            "Set the button label and link.",
            "Configure the consent capture settings.",
            "Captcha is ON"]
        const fAnABtnDesTxt = ["Définir le texte pour les étiquettes de boutons",
            "Configurer les paramètres du titre de l'onglet ou de la fenêtre du navigateur.",
            "Paramétrer le nom du bouton et le lien.",
            "Configurez les paramètres de capture du consentement.",
            "Captcha activé"]

        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(ePnPBtnDesTxt);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(fPnPBtnDesTxt);
                }
            } else if (["RnRTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(eRnRBtnDesTxt);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(fRnRBtnDesTxt);
                }
            } else if (["AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(eAnABtnDesTxt);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(fAnABtnDesTxt);
                }
            }
        }
    });

    it('023 : Validate GAME BUTTON LABELS Page Elements', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Game Button Labels");
                    await rfp.valDialogTitle(1, "Game Button Labels");
                    await rfp.getLocaleName("English / USD");
                    await tp.vDialogContent(0, "LANDING PAGE");
                    await tp.vPlaceholderName(0, "START BUTTON");
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.enterTextInField("1", await rfp.strBuild(21, "a"));
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "20"));
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Étiquettes de boutons du jeu");
                    await rfp.valDialogTitle(1, "Étiquettes de boutons du jeu ");
                    await rfp.getLocaleName("Anglais / USD");
                    await tp.vDialogContent(0, "PAGE D'ATTERRISSAGE");
                    await tp.vPlaceholderName(0, "BOUTON DE DÉMARRAGE");
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.enterTextInField("1", await rfp.strBuild(21, "a"));
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "20"));
                }
            }
        }
    });

    it('024 : Validate Error Messages in Start Button Name Field by Entering No Data ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.generalInput(0, null);
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EREQ);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FREQ);
                }
            }
        }
    });

    it('025 : Validate Eanbled Save Button when New Text is Entered in Start Button Name Field ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", "START PLAY");
                await tp.validateCancelOrSaveEnabled("Save");
                await tp.clickGameButtonCancel();
            }
        }
    });

    it('026 : Validate WEB BROWSER TITLE Page Elements', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Web Browser Title");
                    await rfp.valDialogTitle(1, "Web Browser Title");
                    await rfp.getLocaleName("English / USD");
                    await tp.vPlaceholderName(0, "BROWSER TITLE TEXT");
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.enterTextInField("1", await rfp.strBuild(101, "a"));
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "100"));
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Titre du navigateur web");
                    await rfp.valDialogTitle(1, "Titre du navigateur web");
                    await rfp.getLocaleName("Anglais / USD");
                    await tp.vPlaceholderName(0, "TEXTE DU TITRE DU NAVIGATEUR");
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.enterTextInField("1", await rfp.strBuild(101, "a"));
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "100"));
                }
            }
        }
    });

    it('027 : Validate Error Messages in Browser Title Text Field by Entering No Data ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.generalInput(0, null);
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EREQ);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FREQ);
                }
            }
        }
    });

    it('028 : Validate Eanbled Save Button when New Text is Entered in Browser Title Text Field ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", "PnPTemplate");
                await tp.validateCancelOrSaveEnabled("Save");
                await tp.clickCancelOrSave("Cancel");
            }
        }
    });

    it('029 : Validate Redirect Button Is Disabled By Default in Locale Settings Page And Enable It by Changing Option in Global Settings Page ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.vGSLSBtnEnableStatus("Redirect Button", false);

                await tp.sTemplateTab(1);

                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Redirect Button");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Bouton Redirection");
                }
                await tp.clickDropdownArrow();
                await tp.selectDropdownOption("REDIRECT_OPTION_SINGLE");
                await tp.clickCancelOrSave("Save");
                if (["English"].includes(getLanguage())) {
                    await rfp.getSnackToast(comcon.ESAVE);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.getSnackToast(comcon.FSAVE);
                }
            }
        }
    });

    it('030 : Validate REDIRECT BUTTON Page Elements', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sTemplateTab(2);

                    if (["English"].includes(getLanguage())) {
                        await tp.sGameSettingsBtn("Redirect Button");
                        await rfp.valDialogTitle(1, "Redirect Button");
                        await rfp.getLocaleName("English / USD");
                        await tp.vNamePlaceholder(["BUTTON 1 LABEL", "BUTTON 1 LINK"]);
                    } else if (["Français"].includes(getLanguage())) {
                        await tp.sGameSettingsBtn("Bouton Redirection");
                        await rfp.valDialogTitle(1, "Bouton Redirection");
                        await rfp.getLocaleName("Anglais / USD");
                        await tp.vNamePlaceholder(["ÉTIQUETTE BOUTON 1", "LIEN BOUTON 1"]);
                    }
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.enterTextInField("1", await rfp.strBuild(21, "a"));
                    if (["English"].includes(getLanguage())) {
                        await rfp.vMatError(0, comcon.EMAX.replace("<n>", "20"));
                    } else if (["Français"].includes(getLanguage())) {
                        await rfp.vMatError(0, comcon.FMAX.replace("<n>", "20"));
                    }
                }
            }
        }
    });

    it('031 : Validate Error Messages in Button 1 Label Field by Entering No Data ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.generalInput(0, null);
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EREQ);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FREQ);
                }
            }
        }
    });

    it('032 : Validate Error Messages in Button 1 Label Field by Entering Special Characters Data ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", "<>;;");
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.ESPL1);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FSPL1);
                }
            }
        }
    });

    it('033 : Validate Error Messages in Button 1 Link Field by Entering No Data ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.generalInput(0, "SAMPLE SHOP");
                await tp.generalInput(1, null);
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EREQ);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FREQ);
                }
            }
        }
    });

    it('034 : Validate Error Messages in Button 1 Link Field by Entering Invalid Data ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", "BUY NOW");
                await tp.enterTextInField("2", "AnA");
                if (["English"].includes(getLanguage())) {
                    await tp.validateAlertMessages("1", "Enter a full URL or Web address, beginning with http:// OR https://");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.validateAlertMessages("1", "Saisissez une URL complet ou une adresse Web commençant par http:// OU https://");
                }
            }
        }
    });

    it('035 : Validate Enabled Save Button when New Text is Entered in Browser Title Text Field ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.enterTextInField("2", "http://www.firstinsight.com");
                await tp.validateCancelOrSaveEnabled("Save");
                await tp.clickCancelOrSave("Cancel");
            }
        }
    });

    it('036 : Validate COMMENT PROMPT Page Elements', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Comment Prompt");
                    await rfp.valDialogTitle(1, "Comment Prompt");
                    await rfp.getLocaleName("English / USD");
                    await tp.vNamePlaceholder(["POPUP TITLE", "PLACEHOLDER TEXT"]);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Invite de commentaire");
                    await rfp.valDialogTitle(1, "Invite de commentaire");
                    await rfp.getLocaleName("Anglais / USD");
                    await tp.vNamePlaceholder(["TITRE DE LA FENÊTRE CONTEXTUELLE", "TEXTE DE REMPLACEMENT"]);
                }
                await tp.validateCancelOrSaveDisabled("Save");
                await tp.enterTextInField("1", await rfp.strBuild(65, "a"));
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "64"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "64"));
                }
            } else if (["RnRTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Comment Prompt");
                    await rfp.valDialogTitle(1, "Comment Prompt");
                    await rfp.getLocaleName("English / USD");
                    await tp.vNamePlaceholder(["POPUP TITLE ON NEGATIVE SENTIMENT", "POPUP TITLE ON POSITIVE SENTIMENT", "PLACEHOLDER TEXT"]);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Invite de commentaire");
                    await rfp.valDialogTitle(1, "Invite de commentaire");
                    await rfp.getLocaleName("Anglais / USD");
                    await tp.vNamePlaceholder(["TITRE CONTEXTUEL SUR IMPRESSION NÉGATIVE", "TITRE CONTEXTUEL SUR IMPRESSION POSITIVE", "TEXTE DE REMPLACEMENT"]);
                }
                await tp.validateCancelOrSaveDisabled("Save");
                await tp.enterTextInField("1", await rfp.strBuild(65, "a"));
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "64"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "64"));
                }
            }
        }
    });

    it('037 : Validate Error Messages in Popup Title Field by Entering No Data ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate"].includes(getObjective())) {
                await tp.generalInput(0, null);
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EREQ);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FREQ);
                }
            }
        }
    });

    it('038 : Validate Error Messages in Place Holder Text Field by Entering No Data ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", "Test");
                await tp.generalInput(1, null);
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EREQ);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FREQ);
                }
            }
        }
    });

    it('039 : Validate Error Messages in Place Holder Text Field by Entering Maximum Characters ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                await tp.enterTextInField("2", await rfp.strBuild(257, "a"));
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "256"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "256"));
                }
            } else if (["RnRTemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", "Tell Us More ");
                await tp.enterTextInField("2", await rfp.strBuild(65, "a"));
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "64"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "64"));
                }
            }
        }
    });

    it('040 : Validate Enabled Save Button when New Text is Entered and Click Cancel ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", "Tell us More");
                await tp.enterTextInField("2", "Test");
                await tp.validateCancelOrSaveEnabled("Save");
                await tp.clickCancelOrSave("Cancel");
            } else if (["RnRTemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", "Why did you Dislike? ");
                await tp.enterTextInField("2", "Tell us more ");
                await tp.validateCancelOrSaveEnabled("Save");
                await tp.enterTextInField("3", await rfp.strBuild(257, "a"));
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "256"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "256"));
                }

                await tp.generalInput(2, null);
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EREQ);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FREQ);
                }
                await tp.clickCancelOrSave("Cancel");
            }
        }
    });

    it('041 : Validate PRICE SCALE LABEL Page Elements', async () => {
        if (["SYSAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Price Scale Label");
                    await rfp.valDialogTitle(1, "Price Scale Label");
                    await rfp.getLocaleName("English / USD");
                    await tp.vNamePlaceholder(["PRICE SCALE LABEL TEXT"]);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Étiquette du barème des prix");
                    await rfp.valDialogTitle(1, "Étiquette du barème des prix");
                    await rfp.getLocaleName("Anglais / USD");
                    await tp.vNamePlaceholder(["TEXTE DE L'ÉTIQUETTE DU BARÈME DES PRIX"]);
                }
                await tp.validateCancelOrSaveDisabled("Save");
                await tp.enterTextInField("1", await rfp.strBuild(101, "a"));
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "100"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "100"));
                }
            }
        } else if (["SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Price Scale Label");
                    await rfp.valDialogTitle(1, "Price Scale Label");
                    await rfp.getLocaleName("English / USD");
                    await tp.vNamePlaceholder(["PRICE SCALE LABEL TEXT"]);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Étiquette du barème des prix");
                    await rfp.valDialogTitle(1, "Étiquette du barème des prix");
                    await rfp.getLocaleName("Anglais / USD");
                    await tp.vNamePlaceholder(["TEXTE DE L'ÉTIQUETTE DU BARÈME DES PRIX"]);
                }
                await tp.validateCancelOrSaveDisabled("Save");
                await tp.clickCancelOrSave("Cancel");
            }
        }
    });

    it('042 : Validate Error Messages in Price Scale Label Text Field by Entering No Data ', async () => {
        if (["SYSAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                await tp.generalInput(0, null);
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EREQ);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FREQ);
                }
            }
        }
    });

    it('043 : Validate Enabled Save Button when New Text is Entered in Price Scale Label Text Field ', async () => {
        if (["SYSAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", "Pick a new price");
                await tp.validateCancelOrSaveEnabled("Save");
                await tp.clickCancelOrSave("Cancel");
            }
        }
    });

    it('044 : Validate ITEM MESSAGE Page Elements', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["RnRTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Item Message");
                    await rfp.valDialogTitle(1, "Item Message");
                    await rfp.getLocaleName("English / USD");
                    await tp.vPlaceholderName(0, "ITEM TITLE");
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.enterTextInField("1", await rfp.strBuild(141, "a"));
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "140"));
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Message produit");
                    await rfp.valDialogTitle(1, "Message produit");
                    await rfp.getLocaleName("Anglais / USD");
                    await tp.vPlaceholderName(0, "TITRE PRODUIT");
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.enterTextInField("1", await rfp.strBuild(141, "a"));
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "140"));
                }
            }
        }
    });

    it('045 : Validate Enabled Save Button when New Text is Entered in Item Title Text Field ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["RnRTemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", "Test");
                await tp.validateCancelOrSaveEnabled("Save");
                await tp.clickCancelOrSave("Cancel");
            }
        }
    });

    it('046 : Validate RANK MESSAGE Page Elements', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["RnRTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Rank Message");
                    await rfp.valDialogTitle(1, "Rank Message");
                    await rfp.getLocaleName("English / USD");
                    await tp.vNamePlaceholder(["PAGE TITLE", "RANKING INSTRUCTIONS"]);
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.enterTextInField("1", await rfp.strBuild(201, "a"));
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "200"));
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Message classement");
                    await rfp.valDialogTitle(1, "Message classement");
                    await rfp.getLocaleName("Anglais / USD");
                    await tp.vNamePlaceholder(["TITRE DE LA PAGE", "INSTRUCTIONS CLASSEMENT"]);
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.enterTextInField("1", await rfp.strBuild(201, "a"));
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "200"));
                }
            }
        }
    });

    it('047 : Validate Error Messages in Page Title Field by Entering No Data ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["RnRTemplate"].includes(getObjective())) {
                await tp.generalInput(0, null);
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EREQ);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FREQ);
                }
            }
        }
    });

    it('048 : Validate Error Messages in Ranking Instructions Field by Entering Maximum Chracters ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["RnRTemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", "Test");
                await tp.enterTextInField("2", await rfp.strBuild(201, "a"));
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "200"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "200"));
                }
            }
        }
    });

    it('049 : Validate Error Messages in Ranking Instructions Field by Entering No Data ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["RnRTemplate"].includes(getObjective())) {
                await tp.generalInput(1, null);
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EREQ);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FREQ);
                }
            }
        }
    });

    it('050 : Validate Enabled Save Button when New Text is Entered in Page Title and Ranking Instructions Text Fields ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["RnRTemplate"].includes(getObjective())) {
                await tp.enterTextInField("2", "Please Rank Your Favorites");
                await tp.enterTextInField("2", "Here are your favorites. Please tell us which you like best, starting with number 1.");
                await tp.validateCancelOrSaveEnabled("Save");
                await tp.clickCancelOrSave("Cancel");
            }
        }
    });

    it('051 : Validate FOLLOW UP PAGE Page Elements', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["RnRTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Follow up Page");
                    await rfp.valDialogTitle(1, "Follow up Page");
                    await rfp.getLocaleName("English / USD");
                    await tp.vNamePlaceholder(["PAGE TITLE", "MESSAGE", "COMMENT PROMPT", "PLACEHOLDER TEXT"]);
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.enterTextInField("1", await rfp.strBuild(201, "a"));
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "200"));
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Page de suivi");
                    await rfp.valDialogTitle(1, "PAGE DE SUIVI");
                    await rfp.getLocaleName("Anglais / USD");
                    await tp.vNamePlaceholder(["Titre de la page", "MESSAGE", "INVITE DE COMMENTAIRE", "TEXTE DE REMPLACEMENT"]);
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.enterTextInField("1", await rfp.strBuild(201, "a"));
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "200"));
                }
            }
        }
    });

    it('052 : Validate Error Messages in Page Title Field by Entering No Data ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["RnRTemplate"].includes(getObjective())) {
                await tp.generalInput(0, null);
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EREQ);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FREQ);
                }
            }
        }
    });

    it('053 : Validate Error Messages in Message Field by Entering Maximum Characters ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["RnRTemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", "Test");
                await tp.enterTextInField("2", await rfp.strBuild(201, "a"));
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "200"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "200"));
                }
            }
        }
    });

    it('054 : Validate Error Messages in Comment Prompt Field by Entering Maximum Characters ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["RnRTemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", "Test");
                await tp.enterTextInField("2", "Test1");
                await tp.enterTextInField("3", await rfp.strBuild(71, "a"));
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "70"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "70"));
                }
            }
        }
    });

    it('055 : Validate Error Messages in Comment Prompt Field by Entering No Data ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["RnRTemplate"].includes(getObjective())) {
                await tp.generalInput(2, null);
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EREQ);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FREQ);
                }
            }
        }
    });

    it('056 : Validate Error Messages in Place Holder Text Field by Entering Maximum Characters ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["RnRTemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", "Test1");
                await tp.enterTextInField("2", "Test2");
                await tp.enterTextInField("3", "Test3");
                await tp.enterTextInField("4", await rfp.strBuild(257, "a"));
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "256"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "256"));
                }
            }
        }
    });

    it('057 : Validate Enabled Save Button when New Text is Entered in All Fields ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["RnRTemplate"].includes(getObjective())) {
                await tp.enterTextInField("1", "Test1");
                await tp.enterTextInField("2", "Test2");
                await tp.enterTextInField("3", "Test3");
                await tp.enterTextInField("4", "Test4");
                await tp.validateCancelOrSaveEnabled("Save");
                await tp.clickCancelOrSave("Cancel");
                await tp.vGSLSBtnEnableStatus("Redirect Button", false);
            }
        }
    });

    it('058 : Validate DISABLED RESPONDENT CONSENT BUTTON and Enable in CS-Privay tab ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await rfp.navigateToRequiredTabs(locatorValues.LEFTMENU_SETTING);

                if (["English"].includes(getLanguage())) {
                    await csgp.nav2CSTab("Privacy");
                } else if (["Français"].includes(getLanguage())) {
                    await csgp.nav2CSTab("Confidentialite");
                }
                await cspp.clickEditButton("1");
                await cspp.clickCaptureConsentCheckbox(true);
                await ss1p.enterRichTextValue("Test");
                await cspp.clickAndEnterTextInPBT("Start");
                await cspp.clickAndEnterTextInNBT("Stop");
                await cspp.clickCancelOrSave("Save");
            }
        }
    });

    it('059 : Select the Imported Template Ellipsis Menu and Click on Edit', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            await rfp.navigateToRequiredTabs(locatorValues.LEFTMENU_TEMPLATES);

            await tp.selectTemplate(temName);
            if (["English"].includes(getLanguage())) {
                await tp.sEllipsisOption("Edit");
            } else if (["Français"].includes(getLanguage())) {
                await tp.sEllipsisOption("Éditer");
            }
            await tp.sTemplateTab(2);
            
            await rfp.refreshApplication(); //  to be removed once bug fixed. FI-73350
    
            await tp.selectLocale("en_US");
        }
    });

    it('063 : Validate Preview Gameplay When Double Quotes are added in Headline on Landing and Ending page ', async () => {
        const question1 = "Gender 01"
        const ch01 = "Male"
        const ch02 = "Female"

        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.clickLandingCustomize();
                await tp.enterTextInField("1", "\"Landing Page Double Quotes Test\"");
                await tp.clickLandingEndingSave();

                await tp.sEndingPage();
                await tp.enterTextInField("1", "\"Ending Page Double Quotes Test\"");
                await tp.clickLandingEndingSave();

                await rfp.navigateToRequiredTabs(locatorValues.LEFTMENU_INSETUP);

                if (["PnPTemplate"].includes(getObjective())) {
                    await scip.createInsightwithLocale(ins_name, "PnP", "en_US");
                    await rfp.goToInsSetupTab("items", false);
                    await browser.pause(4000);
                    await sip.goToAddItemsWindow()
                    await sip.enterItemName("TestItem1");
                    await sip.enterItemDescription("Fancy Dress");
                    await sip.enterTestPrice("50");
                    await sip.uploadImageOrVideoFile02();
                    await sip.saveItems();
                    if (["English"].includes(getLanguage())) {
                        await rfp.getSnackToast(sitemcon.eItAd);
                    } else if (["Français"].includes(getLanguage())) {
                        await rfp.getSnackToast(sitemcon.fItAd);
                    }
                } else if (["RnRTemplate"].includes(getObjective())) {
                    await scip.createInsightwithLocale(ins_name, "RnR", "en_US");
                    await rfp.goToInsSetupTab("items", false);
                    await browser.pause(4000);
                    await sip.goToAddItemsWindow()
                    await sip.enterItemName("TestItem1");
                    await sip.enterItemDescription("Fancy Dress");
                    await sip.uploadImageOrVideoFile02();
                    await sip.saveItems();
                    if (["English"].includes(getLanguage())) {
                        await rfp.getSnackToast(sitemcon.eItAd);
                    } else if (["Français"].includes(getLanguage())) {
                        await rfp.getSnackToast(sitemcon.fItAd);
                    }
                } else if (["AnATemplate"].includes(getObjective())) {
                    await scip.createInsightwithLocale(ins_name, "AnA", "en_US");
                }
                await rfp.goToInsSetupTab("surveys-and-segments", false);
                await rfp.navigateToRequiredTabs("addOneOffQuestionBtn");
                await ms1p.enterQuestion(question1);
                await ms1p.enterChoiceMng("1", ch01);
                await ms1p.enterChoiceMng("2", ch02);
                await ss1p.SaveOrAddDialog();
                if (["English"].includes(getLanguage())) {
                    await rfp.getSnackToast(surcon.eAddSur);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.getSnackToast(surcon.fAddSur);
                }
                await rfp.goToInsSetupTab("design", false);
                await sgsp.sTempbyIndex(2);
                await sgsp.sPreview();
                await switchToParentTab();
                //  preview verification missing
                await rfp.goToInsSetupTab("overview", false);
                await sop.deleteInsight();
                await sop.insDeleteConfirm(true, ins_name);
            }
        }
    });

});