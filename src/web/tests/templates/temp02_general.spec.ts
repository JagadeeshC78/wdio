import { getUserRole, getObjective, getOs, getLanguage, getUserCredentials } from '../../../config/environmentVariablesSetup'
import { companySelection } from 'src/config/chooseCompany';
import locatorValues from 'src/web/constant/static/locatorValues';
import InputValues from 'src/web/constant/static/inputValues';

import lp from '@WebPages/login/login.page';
import rfp from '@WebPages/setup/reusableFunctions.page';
import tp from '@WebPages/templates/templates.page';
import rmlp from '@WebPages/results/resultsManageLocales.page';

import comcon from 'src/web/constant/common';
import temcon from 'src/web/constant/templates';

/** Execution Time : ~ 6 mins. */

describe('Templates 02 : General', () => {

    const osValue = getOs();
    const featureValue = getObjective();
    const spectCompanyDetail = companySelection["templates"][featureValue];
    const company = spectCompanyDetail[osValue];

    const temName = "temp" + getObjective().replace("Template", "");

    it('TC_0000 : admin a company', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["COMAD"].includes(getUserRole())) {
                    await lp.signOff();
                    console.log("Signed off as Company Admin");

                    await lp.performLogin(InputValues.ADMIN_USERNAME, InputValues.PASSWORD);
                    console.log("Signed in as System Admin");
                }

                await lp.selectCompany(company);
            }
        }
    });

    it('TC_0001 : import latest PaP/ RaR/ AaA template', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await rfp.navigateToRequiredTabs(locatorValues.LEFTMENU_TEMPLATES);

                if (["PnPTemplate"].includes(getObjective())) {
                    await tp.importNoVersionTemplateNoToast("icx-pick-and-price");
                } else if (["RnRTemplate"].includes(getObjective())) {
                    await tp.importNoVersionTemplateNoToast("icx-rate-and-rank");
                } else if (["AnATemplate"].includes(getObjective())) {
                    await tp.importNoVersionTemplateNoToast("icx-ask-and-answer");
                }

                await tp.sTemplate(0);
                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Edit");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Éditer");
                }
                await tp.generalInput(0, temName);
                await tp.dialog2Save(true);
                if (["English"].includes(getLanguage())) {
                    await rfp.getSnackToast(temName + " has been updated.");
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.getSnackToast(temName + " a été mis à jour.");
                }
            }
        }
    });

    it('TC_0002 : tab header validation', async () => {
        const eText = ["General", "Global Settings", "Locale Settings"];
        const fText = ["Général", "Paramètres généraux", "Paramètres locaux"];

        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["COMAD"].includes(getUserRole())) {
                    await lp.signOff();
                    console.log("Signed off as System Admin");

                    const userDetails = getUserCredentials();
                    await lp.performLogin(userDetails.userName, userDetails.password);
                    console.log("Signed in as Company Admin");
                    await lp.selectCompany(company);

                    await rfp.navigateToRequiredTabs(locatorValues.LEFTMENU_TEMPLATES);
                }

                await tp.selectTemplate(temName);
                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Edit");
                    await tp.vTemplateTabText(eText);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Éditer");
                    await tp.vTemplateTabText(fText);
                }
            }
        }
    });

    it('TC_0003 : Should Validate the Yellow Bar text and Icons for All Locales and Back to Templates', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await rmlp.validateLocaleSymbol();
                if (["English"].includes(getLanguage())) {
                    await tp.vAllLocalesPage("All Locales");
                    await tp.vBackToTemplatesIcon();
                    await tp.vBackToTemplatesText("BACK TO TEMPLATES");
                    await tp.vNamePlaceholder(["TEMPLATE NAME", "GAME TYPE", "NOTES"]);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vAllLocalesPage("Toutes les régions");
                    await tp.vBackToTemplatesIcon();
                    await tp.vBackToTemplatesText("RETOUR AUX MODÈLES");
                    await tp.vNamePlaceholder(["NOM DU MODÈLE", "TYPE DE JEU", "NOTES"]);
                }
            }
        }
    });

    it('TC_0006_Should Validate Template Preview Text and Pixel Text', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.valTemplatePreviewText("TEMPLATE PREVIEW");
                    await tp.valTemplatePixel("400 x 300 px");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.valTemplatePreviewText("APERÇU DU MODÈLE");
                    await tp.valTemplatePixel("400 x 300 px");
                }
            }
        }
    });

    it('TC_0007_Should Validate Browse, Delete Template Text and Image Is Displayed in the Page or Not', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.validateImageDispayed();
                    await tp.vBrowseBtnText("BROWSE");
                    await tp.vDeleteTemplateBtnText("DELETE TEMPLATE");
                    await tp.vCanelBtnText("CANCEL");
                    await tp.vSave2BtnText("SAVE");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.validateImageDispayed();
                    await tp.vBrowseBtnText("PARCOURIR");
                    await tp.vDeleteTemplateBtnText("SUPPRIMER LE MODÈLE");
                    await tp.vCanelBtnText("ANNULER");
                    await tp.vSave2BtnText("SAUVEGARDER");
                }
            }
        }
    });

    it('TC_0008_Should Validate Enabled and Disabled Features when Image Is Displayed in the Page', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.vRemoveRResetBtnEnableStatus(true);
                await tp.vDelTemplateEnableStatus(true);
                await tp.dCancelEnableStatus(true);
                await tp.dSave2EnableStatus(false);
            }
        }
    });

    it('TC_0009_Should Click Remove Image and Validate Enabled and Disabled Features', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.selectRemoveRReset();
                await tp.vNoImageDisplayed();
                await tp.vRemoveRResetBtnEnableStatus(false);
                await tp.vDelTemplateEnableStatus(false);
                await tp.dCancelEnableStatus(true);
                await tp.dSave2EnableStatus(true);
            }
        }
    });

    it('TC_0010_Should Click Back to Templates and validate Exit Page Details', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.sBackToTemplates();
                    await rfp.valDialogTitle(1, "Exit");
                    await rfp.validateMessageInPopUp(temcon.eDC);
                    await tp.stayOnPage_discardChanges("sop");

                    await tp.sBackToTemplates();
                    await rfp.valDialogTitle(1, "Exit");
                    await rfp.validateMessageInPopUp(temcon.eDC);
                    await tp.stayOnPage_discardChanges("dc");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sBackToTemplates();
                    await rfp.valDialogTitle(1, "Quitter");
                    await rfp.validateMessageInPopUp(temcon.fDC);
                    await tp.stayOnPage_discardChanges("sop");

                    await tp.sBackToTemplates();
                    await rfp.valDialogTitle(1, "Quitter");
                    await rfp.validateMessageInPopUp(temcon.fDC);
                    await tp.stayOnPage_discardChanges("dc");

                }
            }
        }
    });

    it('TC_0011_Should Select the Imported Template Ellipsis Menu and Click on Edit', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            await tp.selectTemplate(temName);
            if (["English"].includes(getLanguage())) {
                await tp.sEllipsisOption("Edit");
            } else if (["Français"].includes(getLanguage())) {
                await tp.sEllipsisOption("Éditer");
            }
        }
    });

    it('TC_0012_Should Click Remove Template and Upload Invalid File Format and Upload Valid file', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.selectRemoveRReset();
                await browser.pause(2000);
                await tp.templatePreviewImage('src/resources/insights/zip_csv_xls_xlsx/itemUploadAmpersandTest.xls');
                if (["English"].includes(getLanguage())) {
                    await tp.vImgErrorMsg(temcon.eIMGErr);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vImgErrorMsg(temcon.fIMGErr);
                }
                await tp.sCloseImgErrorMsg();

                await tp.templatePreviewImage('src/resources/insights/media/Fshirt.jpg');
                await tp.validateImageDispayed();
                await tp.generalInput(2, "Sample Test");
                await tp.dialog2Save(true);
                if (["English"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.eUPD.replace("<template>", temName));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.fUPD.replace("<template>", temName));
                }

                await tp.sBackToTemplates();
            }
        }
    });

    it('TC_0013_Should Select the Imported Template Ellipsis Menu and Click on Edit', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            await tp.selectTemplate(temName);
            if (["English"].includes(getLanguage())) {
                await tp.sEllipsisOption("Edit");
            } else if (["Français"].includes(getLanguage())) {
                await tp.sEllipsisOption("Éditer");
            }
        }
    });

    it('TC_0014_Should Validate Error Messages in Template Name Field by Entering No Data ', async () => {
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

    it('TC_0015_Should Validate Error Messages in Template Name Field by Entering Maximum Characters ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.generalInput(0, await rfp.strBuild(129, "a"));
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "128"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "128"));
                }

            }
        }
    });

    it('TC_0016_Should Validate Error Messages in Template Name Field by Entering Special Characters ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.generalInput(0, "<>;");
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.ESPL1);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FSPL1);
                }

            }
        }
    });

    it('TC_0017_Should Validate Error Messages in Template Notes Field by Entering Maximum Characters ', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.generalInput(0, "Test");
                await tp.generalInput(2, await rfp.strBuild(1025, "a"));
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EMAX.replace("<n>", "1024"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FMAX.replace("<n>", "1024"));
                }
            }
        }
    });

    it('TC_0018_Should Validate Save Button When Space is Entered in Template Name Field', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.generalInput(2, "Notes field updated");
                await tp.generalInput(0, " ");
                if (["English"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.EREQ);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vMatError(0, comcon.FREQ);
                }
                await tp.dSave2EnableStatus(false);
            }
        }
    });

    it('TC_0019_Should Validate Game Type Field Details and Icon', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vGameType("GAME TYPE", "Pick and Price", "icon-pp");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vGameType("TYPE DE JEU", "Choisir et fixer un prix", "icon-pp");
                }
            } else if (["RnRTemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vGameType("GAME TYPE", "Rate and Rank", "icon-rr");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vGameType("TYPE DE JEU", "Évaluer et classifier", "icon-rr");
                }
            } else if (["AnATemplate"].includes(getObjective())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vGameType("GAME TYPE", "Ask and Answer", "icon-aa");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vGameType("TYPE DE JEU", "question et réponses", "icon-aa");
                }
            }
        }
    });

    it('TC_0020_Should Click Back To Templates and Perform Discard Changes', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
                await tp.sBackToTemplates();
                await tp.stayOnPage_discardChanges("dc");
            }
        }
    });

});