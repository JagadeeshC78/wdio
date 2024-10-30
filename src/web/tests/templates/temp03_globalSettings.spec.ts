import { getUserRole, getObjective, getOs, getLanguage } from '../../../config/environmentVariablesSetup'
import { companySelection } from 'src/config/chooseCompany';
import locatorValues from 'src/web/constant/static/locatorValues';

import lp from '@WebPages/login/login.page';
import rfp from '@WebPages/setup/reusableFunctions.page';
import tp from '@WebPages/templates/templates.page';

import comcon from 'src/web/constant/common';
import temcon from 'src/web/constant/templates';

/** Execution Time : ~ 12 mins. */

describe('Templates 03 : Global Settings', () => {

    const osValue = getOs();
    const featureValue = getObjective();
    const spectCompanyDetail = companySelection["templates"][featureValue];
    const company = spectCompanyDetail[osValue];

    const temName = "temp" + getObjective().replace("Template", "");

    it('000 : admin a company', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await lp.selectCompany(company);
            }
        }
    });

    it('001 : select a template and navigate to global settings tab', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await rfp.navigateToRequiredTabs(locatorValues.LEFTMENU_TEMPLATES);

                await tp.selectTemplate(temName);
                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Edit");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Éditer");
                }
                await tp.sTemplateTab(1);
            }
        }
    });

    it('002 : Should Validate the Section Header Texts ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vSectionHeaderText(["BANNER AND INTERNAL PAGE", "GAME SETTINGS"]);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vSectionHeaderText(["BANNIÈRE ET PAGE INTERNE", "PARAMÈTRES DU JEU"]);
                }
            }
        }
    });

    it('003 : Should Validate Sample Image is Displayed in Page ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.vGS_BNIImageDisplayStatus();
            }
        }
    });

    it('004 : Should Validate Customize Text in Page ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vCustomizeTextBNI("CUSTOMIZE");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vCustomizeTextBNI("PERSONNALISER");
                }
            }
        }
    });

    it('005 : Should Validate Image Help Captions Text in Page ', async () => {
        const eCaps1 = ["Logo Image", "Banner Color", "Progress Font Color"];
        const fCaps1 = ["Image du logo", "Couleur de la bannière", "Couleur de la police de progression"];

        const eCaps2 = ["Logo Image", "Banner Color"];
        const fCaps2 = ["Image du logo", "Couleur de la bannière"];

        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vImageCaptionsBNI(eCaps1);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vImageCaptionsBNI(fCaps1);
                }
            } else if (["AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vImageCaptionsBNI(eCaps2);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vImageCaptionsBNI(fCaps2);
                }
            }
        }
    });

    it('006 : Should Click Customize Button and Validate the Details in Page ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.clickCustomizeBannerandIntenal();
                if (["English"].includes(getLanguage())) {
                    await rfp.valDialogTitle(1, "Customize Banner and Internal Page");
                    await tp.vAllLocalesIconNText(1, "All Locales");

                    await tp.valTemplatePreviewText("LOGO - DESKTOP AND MOBILE");
                    await tp.valCustTemplatePixel("336 x 40 px");
                    await tp.validateImageDispayed();
                    await tp.vBrowseBtnText("BROWSE");
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.valDialogTitle(1, "Personnaliser la bannière et la page interne");
                    await tp.vAllLocalesIconNText(1, "Toutes les régions");

                    await tp.valTemplatePreviewText("LOGO - BUREAU ET MOBILE");
                    await tp.valCustTemplatePixel("336 x 40 px");
                    await tp.validateImageDispayed();
                    await tp.vBrowseBtnText("PARCOURIR");
                }
                await tp.vResetCustomizeBannerLogoDisplayStatus(true);
                await tp.vResetCustomizeBannerLogoEnableStatus(false);
                await tp.validateCancelOrSaveDisabled("Save");

                await tp.tempCustomizeBannerLogo('src/resources/insights/zip_csv_xls_xlsx/itemUploadAmpersandTest.xls');
                if (["English"].includes(getLanguage())) {
                    await tp.vImgErrorMsg(temcon.eIMGErr);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vImgErrorMsg(temcon.fIMGErr);
                }
                await tp.sCloseImgErrorMsg();
                await tp.tempCustomizeBannerLogo('src/resources/insights/media/Fshirt.jpg');

                await tp.vResetCustomizeBannerLogoEnableStatus(true);
                await tp.validateCancelOrSaveEnabled("Save");
                await tp.resetCustomizeBannerLogo();
            }
        }
    });

    it('007 : Should Validate Banner Colour Picker Container Elements in Customize Page ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate"].includes(getObjective())) {
                await tp.vColourPickerContainer(2);
                await tp.clickBannerColourContainer();
                await tp.valBannerColourArrow();
                await tp.valInsideRoundCursor();
                await tp.valOutsideRoundCursor();
                await tp.valSelectedColour();
                await tp.clickBannerColourNumber();
                await tp.enterValueInBannerColour("#123456");
                await tp.validateCancelOrSaveEnabled("Save");
            } else if (["AnATemplate"].includes(getObjective())) {
                await tp.vColourPickerContainer(1);
                await tp.clickBannerColourContainer();
                await tp.valBannerColourArrow();
                await tp.valInsideRoundCursor();
                await tp.valOutsideRoundCursor();
                await tp.valSelectedColour();
                await tp.clickBannerColourNumber();
                await tp.enterValueInBannerColour("#123456");
                await tp.validateCancelOrSaveEnabled("Save");
            }
        }
    });

    it('008 : Should Validate Mandate Error Message in Banner Colour Field', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.enterValueInBannerColour("#");
                    await tp.validateAlertMessages("1", temcon.eCODE);
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.enterValueInBannerColour("#675899");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.enterValueInBannerColour("#");
                    await tp.validateAlertMessages("1", temcon.fCODE);
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.enterValueInBannerColour("#675899");
                }
            }
        }
    });

    it('009 : Should Validate Font Colour Picker Container Elements in Customize Page ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate"].includes(getObjective())) {
                await tp.clickFontColourContainer();
                await tp.valFontColourArrow();
                await tp.valFontInsideRoundCursor();
                await tp.valFontOutsideRoundCursor();
                await tp.valSelectedFontColour();
                await tp.clickFontColourNumber();
                await tp.enterValueInFontColour("#dddddd");
                await tp.validateCancelOrSaveEnabled("Save");
            }
        }
    });

    it('010 : Should Validate Mandate Error Message in Font Colour Field', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.enterValueInFontColour("#");
                    await tp.validateAlertMessages("1", temcon.eCODE);
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.enterValueInFontColour("#bbbbbb");
                    await tp.dialog2Save(false);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.enterValueInFontColour("#");
                    await tp.validateAlertMessages("1", temcon.fCODE);
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.enterValueInFontColour("#bbbbbb");
                    await tp.dialog2Save(false);
                }
            }
        }
    });

    it('011 : Should Validate Game Settings Buttons Texts', async () => {
        const ePnPBtnTxt_FA = ["CUSTOMIZE", "COLORS", "COMMENTS", "REDIRECT BUTTON",
            "SENTIMENT SETTING", "GAME ANALYTICS", "GAME START SETTING",
            "PROGRESS DISPLAY SETTING", "VIDEO SETTING"]
        const fPnPBtnTxt_FA = ["PERSONNALISER", "COULEURS", "COMMENTAIRES", "BOUTON REDIRECTION",
            "CONFIGURATION DE L’IMPRESSION", "ANALYSES DU JEU", "RÉGLAGE DU DÉBUT DU JEU",
            "PARAMÈTRES D'AFFICHAGE DE LA PROGRESSION", "PARAMÈTRES VIDÉO"]

        const ePnPBtnTxt_CA = ["CUSTOMIZE", "COLORS", "COMMENTS", "REDIRECT BUTTON",
            "SENTIMENT SETTING", "GAME START SETTING", "PROGRESS DISPLAY SETTING",
            "VIDEO SETTING"]
        const fPnPBtnTxt_CA = ["PERSONNALISER", "COULEURS", "COMMENTAIRES", "BOUTON REDIRECTION",
            "CONFIGURATION DE L’IMPRESSION", "RÉGLAGE DU DÉBUT DU JEU", "PARAMÈTRES D'AFFICHAGE DE LA PROGRESSION",
            "PARAMÈTRES VIDÉO"]

        const eRnRBtnTxt_FA = ["CUSTOMIZE", "COLORS", "REDIRECT BUTTON", "GAME START SETTING",
            "PROGRESS DISPLAY SETTING", "VIDEO SETTING"]
        const fRnRBtnTxt_FA = ["PERSONNALISER", "COULEURS", "BOUTON REDIRECTION", "RÉGLAGE DU DÉBUT DU JEU",
            "PARAMÈTRES D'AFFICHAGE DE LA PROGRESSION", "PARAMÈTRES VIDÉO"]

        const eRnRBtnTxt_CA = ["CUSTOMIZE", "COLORS", "REDIRECT BUTTON", "GAME START SETTING",
            "PROGRESS DISPLAY SETTING", "VIDEO SETTING"]
        const fRnRBtnTxt_CA = ["PERSONNALISER", "COULEURS", "BOUTON REDIRECTION", "RÉGLAGE DU DÉBUT DU JEU",
            "PARAMÈTRES D'AFFICHAGE DE LA PROGRESSION", "PARAMÈTRES VIDÉO"]

        const eAnABtnTxt_FA = ["CUSTOMIZE", "COLORS", "REDIRECT BUTTON", "GAME START SETTING"]
        const fAnABtnTxt_FA = ["PERSONNALISER", "COULEURS", "BOUTON REDIRECTION", "RÉGLAGE DU DÉBUT DU JEU"]

        const eAnABtnTxt_CA = ["CUSTOMIZE", "COLORS", "REDIRECT BUTTON", "GAME START SETTING"]
        const fAnABtnTxt_CA = ["PERSONNALISER", "COULEURS", "BOUTON REDIRECTION", "RÉGLAGE DU DÉBUT DU JEU"]

        if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await rfp.refreshApplication();

                if (["PnPTemplate"].includes(getObjective())) {
                    if (["English"].includes(getLanguage())) {
                        await tp.vGSBtnNameList(ePnPBtnTxt_FA);
                    } else if (["Français"].includes(getLanguage())) {
                        await tp.vGSBtnNameList(fPnPBtnTxt_FA);
                    }
                } else if (["RnRTemplate"].includes(getObjective())) {
                    if (["English"].includes(getLanguage())) {
                        await tp.vGSBtnNameList(eRnRBtnTxt_FA);
                    } else if (["Français"].includes(getLanguage())) {
                        await tp.vGSBtnNameList(fRnRBtnTxt_FA);
                    }
                } else if (["AnATemplate"].includes(getObjective())) {
                    if (["English"].includes(getLanguage())) {
                        await tp.vGSBtnNameList(eAnABtnTxt_FA);
                    } else if (["Français"].includes(getLanguage())) {
                        await tp.vGSBtnNameList(fAnABtnTxt_FA);
                    }
                }
            }
        } else if (["COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await rfp.refreshApplication();

                if (["PnPTemplate"].includes(getObjective())) {
                    if (["English"].includes(getLanguage())) {
                        await tp.vGSBtnNameList(ePnPBtnTxt_CA);
                    } else if (["Français"].includes(getLanguage())) {
                        await tp.vGSBtnNameList(fPnPBtnTxt_CA);
                    }
                } else if (["RnRTemplate"].includes(getObjective())) {
                    if (["English"].includes(getLanguage())) {
                        await tp.vGSBtnNameList(eRnRBtnTxt_CA);
                    } else if (["Français"].includes(getLanguage())) {
                        await tp.vGSBtnNameList(fRnRBtnTxt_CA);
                    }
                } else if (["AnATemplate"].includes(getObjective())) {
                    if (["English"].includes(getLanguage())) {
                        await tp.vGSBtnNameList(eAnABtnTxt_CA);
                    } else if (["Français"].includes(getLanguage())) {
                        await tp.vGSBtnNameList(fAnABtnTxt_CA);
                    }
                }
            }
        }
    });

    it('012 : Should Validate Game Settings Buttons Texts', async () => {
        const ePnPBtnDesTxt_FA = ["Colors settings will allow you to edit colors of the buttons and fonts you see throughout the game.",
            "Hide Comment button and Prompt for comments",
            "Do not show Redirect button",
            "Sentiment is NOT required",
            "Analytics is OFF",
            "Start upon click of Game button",
            "Do not display Numerical Progress Indicator",
            "Play audio when clicking on the video"]
        const fPnPBtnDesTxt_FA = ["Les paramètres de couleurs vous permettent de modifier la couleur des boutons et des polices que vous voyez dans le jeu.",
            "Masquer le bouton des commentaires, puis inviter à commenter",
            "Ne pas afficher le bouton de redirection",
            "Impression NON requise",
            "Analytics est désactivé",
            "Démarrer en cliquant sur le bouton de jeu",
            "Ne pas afficher l\'indicateur de progression numérique",
            "Lire l’audio en cliquant sur la vidéo"]

        const eRnRBtnDesTxt_FA = ["Colors settings will allow you to edit colors of the buttons and fonts you see throughout the game.",
            "Do not show Redirect button",
            "Start upon click of Game button",
            "Do not display Numerical Progress Indicator",
            "Play audio when clicking on the video"]
        const fRnRBtnDesTxt_FA = ["Les paramètres de couleurs vous permettent de modifier la couleur des boutons et des polices que vous voyez dans le jeu.",
            "Ne pas afficher le bouton de redirection",
            "Démarrer en cliquant sur le bouton de jeu",
            "Ne pas afficher l\'indicateur de progression numérique",
            "Lire l’audio en cliquant sur la vidéo"]

        const eAnABtnDesTxt_FA = ["Colors settings will allow you to edit colors of the buttons and fonts you see throughout the game.",
            "Do not show Redirect button",
            "Start upon click of Game button"]
        const fAnABtnDesTxt_FA = ["Les paramètres de couleurs vous permettent de modifier la couleur des boutons et des polices que vous voyez dans le jeu.",
            "Ne pas afficher le bouton de redirection",
            "Démarrer en cliquant sur le bouton de jeu"]

        const ePnPBtnDesTxt_CA = ["Colors settings will allow you to edit colors of the buttons and fonts you see throughout the game.",
            "Hide Comment button and Prompt for comments",
            "Do not show Redirect button",
            "Sentiment is NOT required",
            "Start upon click of Game button",
            "Do not display Numerical Progress Indicator",
            "Play audio when clicking on the video"]
        const fPnPBtnDesTxt_CA = ["Les paramètres de couleurs vous permettent de modifier la couleur des boutons et des polices que vous voyez dans le jeu.",
            "Masquer le bouton des commentaires, puis inviter à commenter",
            "Ne pas afficher le bouton de redirection",
            "Impression NON requise",
            "Démarrer en cliquant sur le bouton de jeu",
            "Ne pas afficher l\'indicateur de progression numérique",
            "Lire l’audio en cliquant sur la vidéo"]

        const eRnRBtnDesTxt_CA = ["Colors settings will allow you to edit colors of the buttons and fonts you see throughout the game.",
            "Do not show Redirect button",
            "Start upon click of Game button",
            "Do not display Numerical Progress Indicator",
            "Play audio when clicking on the video"]
        const fRnRBtnDesTxt_CA = ["Les paramètres de couleurs vous permettent de modifier la couleur des boutons et des polices que vous voyez dans le jeu.",
            "Ne pas afficher le bouton de redirection",
            "Démarrer en cliquant sur le bouton de jeu",
            "Ne pas afficher l\'indicateur de progression numérique",
            "Lire l’audio en cliquant sur la vidéo"]

        const eAnABtnDesTxt_CA = ["Colors settings will allow you to edit colors of the buttons and fonts you see throughout the game.",
            "Do not show Redirect button",
            "Start upon click of Game button"]
        const fAnABtnDesTxt_CA = ["Les paramètres de couleurs vous permettent de modifier la couleur des boutons et des polices que vous voyez dans le jeu.",
            "Ne pas afficher le bouton de redirection",
            "Démarrer en cliquant sur le bouton de jeu"]

        if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(ePnPBtnDesTxt_FA);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(fPnPBtnDesTxt_FA);
                }
            } else if (["RnRTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(eRnRBtnDesTxt_FA);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(fRnRBtnDesTxt_FA);
                }
            } else if (["AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(eAnABtnDesTxt_FA);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(fAnABtnDesTxt_FA);
                }
            }
        } else if (["COMAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(ePnPBtnDesTxt_CA);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(fPnPBtnDesTxt_CA);
                }
            } else if (["RnRTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(eRnRBtnDesTxt_CA);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(fRnRBtnDesTxt_CA);
                }
            } else if (["AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(eAnABtnDesTxt_CA);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vGSBtnTextList(fAnABtnDesTxt_CA);
                }
            }
        }
    });

    it('013 : Should Validate Red and Green Settings Indicator Beside Game Settings Buttons ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                    await tp.valRedSettingsIndicator(6);
                    await tp.valGreenSettingsIndicator(1);
                } else if (["COMAD"].includes(getUserRole())) {
                    await tp.valRedSettingsIndicator(5);
                    await tp.valGreenSettingsIndicator(1);
                }
            } else if (["RnRTemplate"].includes(getObjective())) {
                await tp.valRedSettingsIndicator(3);
                await tp.valGreenSettingsIndicator(1);
            } else if (["AnATemplate"].includes(getObjective())) {
                await tp.valRedSettingsIndicator(2);
            }
        }
    });

    it('014 : Should Click Game Settings- Colors Button and Validate the Page Elements', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Colors");
                    await rfp.valDialogTitle(1, "Customize Colors");
                    await tp.vAllLocalesIconNText(1, "All Locales");
                    await tp.validateCancelOrSaveDisabled("Save");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Couleurs");
                    await rfp.valDialogTitle(1, "Personnaliser les couleurs");
                    await tp.vAllLocalesIconNText(1, "Toutes les régions");
                    await tp.validateCancelOrSaveDisabled("Save");
                }
            }
        }
    });

    it('015 : Should Enter Values in All Colour Picker Fields Based on Index Position', async () => {
        const eLblTxt1 = ["ACTIVE NAVIGATION BUTTON", "ACTIVE BUTTON FONT", "INACTIVE NAVIGATION BUTTON",
            "INACTIVE BUTTON FONT", "GAME FONT", "SELECTION", "COMMENT POPUP BACKGROUND",
            "COMMENT POPUP FONT", "REDIRECT BUTTON", "REDIRECT BUTTON FONT",
            "OVERLAY", "FONT", "OVERLAY", "FONT"]
        const fLblTxt1 = ["BOUTON DE NAVIGATION ACTIF", "POLICE DU BOUTON ACTIF", "BOUTON DE NAVIGATION INACTIF",
            "POLICE DU BOUTON INACTIF", "POLICE DU JEU", "SÉLECTION", "FOND DE LA FENÊTRE CONTEXTUELLE",
            "POLICE DE LA FENÊTRE CONTEXTUELLE", "BOUTON REDIRECTION", "POLICE DE CARACTÈRES DU BOUTON REDIRECTION",
            "COUCHE", "POLICE", "COUCHE", "POLICE"]

        const eLblTxt2 = ["ACTIVE NAVIGATION BUTTON", "ACTIVE BUTTON FONT", "INACTIVE NAVIGATION BUTTON",
            "INACTIVE BUTTON FONT", "GAME FONT", "SELECTION", "REDIRECT BUTTON",
            "REDIRECT BUTTON FONT", "OVERLAY", "FONT", "OVERLAY", "FONT"]
        const fLblTxt2 = ["BOUTON DE NAVIGATION ACTIF", "POLICE DU BOUTON ACTIF", "BOUTON DE NAVIGATION INACTIF",
            "POLICE DU BOUTON INACTIF", "POLICE DU JEU", "SÉLECTION", "BOUTON REDIRECTION",
            "POLICE DE CARACTÈRES DU BOUTON REDIRECTION", "COUCHE", "POLICE", "COUCHE", "POLICE"]

        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.valCustColorsLabelsText(eLblTxt1);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.valCustColorsLabelsText(fLblTxt1);
                }
                await tp.enterValueInColourFields("1", "#cb1329");
                await tp.enterValueInColourFields("2", "#3a0d0d");
                await tp.enterValueInColourFields("3", "#511717");
                await tp.enterValueInColourFields("4", "#aaaaaa");
                await tp.enterValueInColourFields("5", "#113545");
                await tp.enterValueInColourFields("6", "#bd4e5c");
                await tp.enterValueInColourFields("7", "#882c2c");
                await tp.enterValueInColourFields("8", "#942b2b");
                await tp.enterValueInColourFields("9", "#ad737a");
                await tp.enterValueInColourFields("10", "#d34545");
                await tp.enterValueInColourFields("11", "#cfb5b5");
                await tp.enterValueInColourFields("12", "#ab9898");
                await tp.enterValueInColourFields("13", "56");
                await tp.enterValueInColourFields("14", "#7f3e3e");
                await tp.enterValueInColourFields("15", "#e3cccc");
                await tp.enterValueInColourFields("16", "88");
                await tp.validateCancelOrSaveEnabled("Save");
                await tp.vColourPickerContainer(14);
                await tp.valOpacityPercent(["%", "%"]);
                await tp.clickCustomizeColorsClose();
            } else if (["AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.valCustColorsLabelsText(eLblTxt2);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.valCustColorsLabelsText(fLblTxt2);
                }
                await tp.enterValueInColourFields("1", "#cb1329");
                await tp.enterValueInColourFields("2", "#3a0d0d");
                await tp.enterValueInColourFields("3", "#511717");
                await tp.enterValueInColourFields("4", "#aaaaaa");
                await tp.enterValueInColourFields("5", "#113545");
                await tp.enterValueInColourFields("6", "#bd4e5c");
                await tp.enterValueInColourFields("7", "#882c2c");
                await tp.enterValueInColourFields("8", "#942b2b");
                await tp.enterValueInColourFields("9", "#ad737a");
                await tp.enterValueInColourFields("10", "#d34545");
                await tp.enterValueInColourFields("11", "56");
                await tp.enterValueInColourFields("12", "#7f3e3e");
                await tp.enterValueInColourFields("13", "#e3cccc");
                await tp.enterValueInColourFields("14", "88");
                await tp.validateCancelOrSaveEnabled("Save");
                await tp.vColourPickerContainer(12);
                await tp.valOpacityPercent(["%", "%"]);
                await tp.clickCustomizeColorsClose();
            }
        }
    });

    it('016 : Should Validate Section Title Text', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Colors");
                    await tp.valSectionTitleText(["LANDING PAGE", "END PAGE"]);
                    await tp.valOpacityText(["OPACITY", "OPACITY"]);
                    await tp.clickCustCancel("Color");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Couleurs");
                    await tp.valSectionTitleText(["PAGE D'ATTERRISSAGE", "PAGE DE CLÔTURE"]);
                    await tp.valOpacityText(["OPACITÉ", "OPACITÉ"]);
                    await tp.validateCancelOrSaveEnabled("Save");
                    await tp.clickCustCancel("Color");
                }
            }
        }
    });

    it('017 : Should Validate Comments Page Elements', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Comments");
                    await rfp.valDialogTitle(1, "Comments");
                    await tp.vAllLocalesIconNText(1, "All Locales");
                    await rfp.vBannerMsg1(0,  temcon.EMSG5)
                    await tp.valSelectedDefaultText("Hide Comment button and Prompt for comments");
                    await tp.clickDropdownArrow();
                    await tp.valDropdownText(["Hide Comment button and Prompt for comments",
                        "Show Comment button"]);
                    await tp.clickDropdownArrow();
                    await tp.selectCommentsDropdownOption("HIDE_COMMENT_BUTTON_AND_PROMPT");
                    await tp.dSave2EnableStatus(false);
                    await tp.clickDropdownArrow();
                    await tp.selectCommentsDropdownOption("SHOW_COMMENT_BUTTON");
                    await tp.dSave2EnableStatus(true);
                    await tp.dialog2Save(false);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Commentaires");
                    await rfp.valDialogTitle(1, "Commentaires");
                    await tp.vAllLocalesIconNText(1, "Toutes les régions");
                    await rfp.vBannerMsg1(0,  temcon.FMSG5)
                    await tp.valSelectedDefaultText("Masquer le Bouton des commentaires, puis Inviter à commenter");
                    await tp.clickDropdownArrow();
                    await tp.valDropdownText(["Masquer le Bouton des commentaires, puis Inviter à commenter",
                        "Afficher le Bouton des commentaires"]);
                    await tp.clickDropdownArrow();
                    await tp.selectCommentsDropdownOption("HIDE_COMMENT_BUTTON_AND_PROMPT");
                    await tp.dSave2EnableStatus(false);
                    await tp.clickDropdownArrow();
                    await tp.selectCommentsDropdownOption("SHOW_COMMENT_BUTTON");
                    await tp.dSave2EnableStatus(true);
                    await tp.dialog2Save(false);
                }
            }
        }
    });

    it('018 : Should Validate Redirect Button Page Elements', async () => {
        const eDDText = ["Do not show Redirect button", "Show one Redirect button",
            "Show two Redirect buttons", "Redirect upon click of image"]
        const fDDText = ["Ne pas afficher le bouton de redirection", "Afficher un bouton de redirection",
            "Afficher deux boutons de redirection", "Rediriger en cliquant sur l'image"]

        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Redirect Button");
                    await rfp.valDialogTitle(1, "Redirect Button");
                    await tp.vAllLocalesIconNText(1, "All Locales");
                    await tp.valSelectedDefaultText("Do not show Redirect button");
                    await tp.clickDropdownArrow();
                    await tp.valDropdownText(eDDText);
                    await tp.clickDropdownArrow();
                    await tp.selectDropdownOption("REDIRECT_OPTION_NONE");
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.clickDropdownArrow();
                    await tp.selectDropdownOption("REDIRECT_OPTION_SINGLE");
                    await tp.validateCancelOrSaveEnabled("Save");
                    await tp.clickCustCancel("Redirect");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Bouton Redirection");
                    await rfp.valDialogTitle(1, "Bouton Redirection");
                    await tp.vAllLocalesIconNText(1, "Toutes les régions");
                    await tp.valSelectedDefaultText("Ne pas afficher le bouton de redirection");
                    await tp.clickDropdownArrow();
                    await tp.valDropdownText(fDDText);
                    await tp.clickDropdownArrow();
                    await tp.selectDropdownOption("REDIRECT_OPTION_NONE");
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.clickDropdownArrow();
                    await tp.selectDropdownOption("REDIRECT_OPTION_SINGLE");
                    await tp.validateCancelOrSaveEnabled("Save");
                    await tp.clickCustCancel("Redirect");
                }
            }
        }
    });

    it('019 : Should Validate Sentiment Setting Page Elements', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Sentiment Setting");
                    await rfp.valDialogTitle(1, "Sentiment Setting");
                    await tp.vAllLocalesIconNText(1, "All Locales");
                    await tp.valLabelText("sentiment-required", "SENTIMENT REQUIRED");
                    await tp.valCheckboxNotSel();
                    await tp.valEnabledLabelText("ENABLED");
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.clickCheckbox();
                    await tp.validateCancelOrSaveEnabled("Save");
                    await tp.clickCustCancel("Sentiment");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Configuration de l’impression");
                    await rfp.valDialogTitle(1, "Configuration de l’impression");
                    await tp.vAllLocalesIconNText(1, "Toutes les régions");
                    await tp.valLabelText("sentiment-required", "IMPRESSION REQUISE");
                    await tp.valCheckboxNotSel();
                    await tp.valEnabledLabelText("ENABLED");
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.clickCheckbox();
                    await tp.validateCancelOrSaveEnabled("Save");
                    await tp.clickCustCancel("Sentiment");
                }
            }
        }
    });

    it('020 : Should Validate Game Analytics Page Elements', async () => {
        if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Game Analytics");
                    await rfp.valDialogTitle(1, "Game Analytics");
                    await tp.vAllLocalesIconNText(1, "All Locales");
                    await tp.valLabelText("game-analytics", "USE GOOGLE ANALYTICS");
                    await tp.valCheckboxNotSel();
                    await tp.valEnabledLabelText("ENABLED");
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.clickCheckbox();
                    await tp.validateCancelOrSaveEnabled("Save");
                    await tp.clickCustCancel("GameAnalytics");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Analyses du jeu");
                    await rfp.valDialogTitle(1, "Analyses du jeu");
                    await tp.vAllLocalesIconNText(1, "Toutes les régions");
                    await tp.valLabelText("game-analytics", "UTILISER GOOGLE ANALYTICS");
                    await tp.valCheckboxNotSel();
                    await tp.valEnabledLabelText("ENABLED");
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.clickCheckbox();
                    await tp.validateCancelOrSaveEnabled("Save");
                    await tp.clickCustCancel("GameAnalytics");
                }
            }
        }
    });

    it('021 : Should Validate Game Start Setting Page Elements', async () => {
        const engDDText = ["Start upon click of Game button",
            "Start upon click of Landing Page image"]
        const frenDDText = ["Démarrer en cliquant sur le Bouton de jeu",
            "Démarrer en cliquant sur l'image de la Page d'accueil"]

        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Game Start Setting");
                    await rfp.valDialogTitle(1, "Game Start Setting");
                    await tp.vAllLocalesIconNText(1, "All Locales");
                    await tp.valSelectedDefaultText("Start upon click of Game button");
                    await tp.clickDropdownArrow();
                    await tp.valDropdownText(engDDText);
                    await tp.clickDropdownArrow();
                    await tp.selectDropdownOption("START_GAME_ON_CLICK_OF_LANDING_PAGE_OFF");
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.clickDropdownArrow();
                    await tp.selectDropdownOption("START_GAME_ON_CLICK_OF_LANDING_PAGE_ON");
                    await tp.validateCancelOrSaveEnabled("Save");
                    await tp.clickCustCancel("StartGameSetting");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Réglage du début du jeu");
                    await rfp.valDialogTitle(1, "Réglage du début du jeu");
                    await tp.vAllLocalesIconNText(1, "Toutes les régions");
                    await tp.valSelectedDefaultText("Démarrer en cliquant sur le Bouton de jeu");
                    await tp.clickDropdownArrow();
                    await tp.valDropdownText(frenDDText);
                    await tp.clickDropdownArrow();
                    await tp.selectDropdownOption("START_GAME_ON_CLICK_OF_LANDING_PAGE_OFF");
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.clickDropdownArrow();
                    await tp.selectDropdownOption("START_GAME_ON_CLICK_OF_LANDING_PAGE_ON");
                    await tp.validateCancelOrSaveEnabled("Save");
                    await tp.clickCustCancel("StartGameSetting");
                }
            }
        }
    });

    it('022 : Should Validate Progress Display Page Elements', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Progress Display Setting");
                    await rfp.valDialogTitle(1, "Progress Display");
                    await tp.vAllLocalesIconNText(1, "All Locales");
                    await tp.valLabelText("progress-indicator", "NUMERICAL PROGRESS INDICATOR");
                    await tp.valCheckboxNotSel();
                    await tp.valEnabledLabelText("ENABLED");
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.clickCheckbox();
                    await tp.validateCancelOrSaveEnabled("Save");
                    await tp.clickCustCancel("ProgressIndicator");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Paramètres d\'affichage de la progression");
                    await rfp.valDialogTitle(1, "Affichage de la progression");
                    await tp.vAllLocalesIconNText(1, "Toutes les régions");
                    await tp.valLabelText("progress-indicator", "INDICATEUR DE PROGRESSION NUMÉRIQUE");
                    await tp.valCheckboxNotSel();
                    await tp.valEnabledLabelText("ENABLED");
                    await tp.validateCancelOrSaveDisabled("Save");
                    await tp.clickCheckbox();
                    await tp.validateCancelOrSaveEnabled("Save");
                    await tp.clickCustCancel("ProgressIndicator");
                }
            }
        }
    });

    it('023 : Should Validate Video Setting Page Elements', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Video Setting");
                    await rfp.valDialogTitle(1, "Video Setting");
                    await tp.vAllLocalesIconNText(1, "All Locales");
                    await tp.valLabelText("text", "AUTOMATICALLY PLAY AUDIO");
                    await tp.valCheckboxIsSelected();
                    await tp.valEnabledLabelText("ENABLED");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sGameSettingsBtn("Paramètres vidéo");
                    await rfp.valDialogTitle(1, "Paramètres vidéo");
                    await tp.vAllLocalesIconNText(1, "Toutes les régions");
                    await tp.valLabelText("text", "LECTURE AUDIO AUTOMATIQUE");
                    await tp.valCheckboxIsSelected();
                    await tp.valEnabledLabelText("ACTIVÉ");
                }
                await tp.dSave2EnableStatus(false);
                await tp.clickCheckbox();
                await tp.dSave2EnableStatus(true);
                await tp.dialog2Save(false);
            }
        }
    });

    it('024 : Should Validate Game Analytics Is On or Off Text and Its Green and Red Indicator', async () => {
        if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
            await rfp.refreshApplication();

            if (["PnPTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vGSBtnMsg(4, "Analytics is OFF");
                    await tp.valRedIndicator("4");
                    await tp.sGameSettingsBtn("Game Analytics");
                    await tp.clickCheckbox();
                    await tp.clickCancelOrSave("Save");
                    await rfp.getSnackToast(comcon.ESAVE);

                    await rfp.refreshApplication();

                    await tp.vGSBtnMsg(4, "Analytics is ON");
                    await tp.valGreenIndicator("1")
                    await tp.sGameSettingsBtn("Game Analytics");
                    await tp.clickCheckbox();
                    await tp.clickCancelOrSave("Save");
                    await rfp.getSnackToast(comcon.ESAVE);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vGSBtnMsg(4, "Analytics est désactivé");
                    await tp.valRedIndicator("4");
                    await tp.sGameSettingsBtn("Analyses du jeu");
                    await tp.clickCheckbox();
                    await tp.clickCancelOrSave("Save");
                    await rfp.getSnackToast(comcon.FSAVE);

                    await rfp.refreshApplication();

                    await tp.vGSBtnMsg(4, "Analytics est activé");
                    await tp.valGreenIndicator("1")
                    await tp.sGameSettingsBtn("Analyses du jeu");
                    await tp.clickCheckbox();
                    await tp.clickCancelOrSave("Save");
                    await rfp.getSnackToast(comcon.FSAVE);
                }
            }
        }
    });

});