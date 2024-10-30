import { getUserRole, getObjective, getOs, getLanguage, getUserCredentials } from '../../../config/environmentVariablesSetup'
import { companySelection } from 'src/config/chooseCompany';
import { Key } from 'webdriverio';

import locatorValues from 'src/web/constant/static/locatorValues';
import InputValues from 'src/web/constant/static/inputValues';

import lp from '@WebPages/login/login.page';
import rfp from '@WebPages/setup/reusableFunctions.page';
import tp from '@WebPages/templates/templates.page';

import comcon from 'src/web/constant/common';
import temcon from 'src/web/constant/templates';

/** Execution Time: ~ 10 mins. */

describe('Templates 01 : Common scenarios, edit name and notes', async () => {

    const osValue = getOs();
    const featureValue = getObjective();
    const spectCompanyDetail = companySelection["templates"][featureValue];
    const company = spectCompanyDetail[osValue];

    const temName = "temp_" + getObjective().replace("Template", "");

    it('000 : admin a company', async () => {
        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
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

    it('001 : verify side nav menu options', async () => {
        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                await rfp.sideNavOptions();

                await rfp.navigateToRequiredTabs(locatorValues.LEFTMENU_TEMPLATES);

                if (["English"].includes(getLanguage())) {
                    await rfp.vPageTitle("Manage Templates");
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.vPageTitle("Gérer les modèles");
                }
            }
        }
    });

    it('002 : import invalid extension', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                await tp.importTemplate(temcon.PATH3, temcon.ppInvExtn);
                if (["English"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.EMSG1);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.FMSG1);
                }
            } else if (["RnRTemplate"].includes(getObjective())) {
                await tp.importTemplate(temcon.PATH3, temcon.rrInvExtn);
                if (["English"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.EMSG1);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.FMSG1);
                }
            }
        }
    });

    it('003 : import invalid contents', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                await tp.importTemplate(temcon.PATH3, temcon.ppInvForm);
                if (["English"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.EMSG2);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.FMSG2);
                }
            } else if (["RnRTemplate"].includes(getObjective())) {
                await tp.importTemplate(temcon.PATH3, temcon.rrInvForm);
                if (["English"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.EMSG2);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.FMSG2);
                }
            }
        }
    });

    it('004 : image import failure', async () => {
        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                await tp.importTemplate(temcon.PATH3, temcon.FILE1);
                if (["English"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.EMSG1);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.FMSG1);
                }
            }
        }
    });

    it('005 : zip import invalid', async () => {
        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                await tp.importTemplate(temcon.PATH3, temcon.FILE2);
                if (["English"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.EMSG3);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.FMSG3);
                }
            }
        }
    });

    it('006 : import old format', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["PnPTemplate"].includes(getObjective())) {
                await tp.importTemplate(temcon.PATH3, temcon.ppTempOld);
                await browser.pause(5000);
                if (["English"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.EMSG3);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.FMSG3);
                }
            } else if (["RnRTemplate"].includes(getObjective())) {
                await tp.importTemplate(temcon.PATH3, temcon.rrTempOld);
                await browser.pause(5000);
                if (["English"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.EMSG3);
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.FMSG3);
                }
            }
        }
    });

    it('007 : import latest template', async () => {
        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
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
    });

    it('008 : copy template negative scenarios', async () => {
        const ipap = await rfp.templateSelect("icx-pick-and-price");
        const irar = await rfp.templateSelect("icx-rate-and-rank");
        const iaaa = await rfp.templateSelect("icx-ask-and-answer");

        const pnpInput = ["<", ">", ";", null, await rfp.strBuild(129, "a"), ipap[1]];
        const rnrInput = ["<", ">", ";", null, await rfp.strBuild(129, "a"), irar[1]];
        const anaInput = ["<", ">", ";", null, await rfp.strBuild(129, "a"), iaaa[1]];

        const eErr = [...Array(3).fill(comcon.ESPL1), comcon.EREQ, comcon.EMAX.replace("<n>", "128"), temcon.eDUPE];
        const fErr = [...Array(3).fill(comcon.FSPL1), comcon.FREQ, comcon.FMAX.replace("<n>", "128"), temcon.fDUPE];

        if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
            if (["COMAD"].includes(getUserRole())) {
                await lp.signOff();
                console.log("Signed off as System Admin");

                const userDetails = getUserCredentials();
                await lp.performLogin(userDetails.userName, userDetails.password);
                console.log("Signed in as Company Admin");
                await lp.selectCompany(company);

                await rfp.navigateToRequiredTabs(locatorValues.LEFTMENU_TEMPLATES);
            }

            if (["PnPTemplate"].includes(getObjective())) {
                await tp.selectTemplate(ipap[1]);

                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Copy");
                    for (var i = 0; i < pnpInput.length; i++) {
                        await tp.updateCopyName(pnpInput[i]);
                        await tp.vError1(0, eErr[i]);
                        await tp.dSave2EnableStatus(false);
                    }
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Copier");
                    for (var i = 0; i < pnpInput.length; i++) {
                        await tp.updateCopyName(pnpInput[i]);
                        await tp.vError1(0, fErr[i]);
                        await tp.dSave2EnableStatus(false);
                    }
                }
                await tp.updateCopyName(ipap[1]);
                if (["English"].includes(getLanguage())) {
                    await tp.vError1(0, temcon.eDUPE);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vError1(0, temcon.fDUPE);
                }
                await tp.dSave2EnableStatus(false);
            } else if (["RnRTemplate"].includes(getObjective())) {
                await tp.selectTemplate(irar[1]);

                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Copy");
                    for (var i = 0; i < rnrInput.length; i++) {
                        await tp.updateCopyName(rnrInput[i]);
                        await tp.vError1(0, eErr[i]);
                        await tp.dSave2EnableStatus(false);
                    }
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Copier");
                    for (var i = 0; i < rnrInput.length; i++) {
                        await tp.updateCopyName(rnrInput[i]);
                        await tp.vError1(0, fErr[i]);
                        await tp.dSave2EnableStatus(false);
                    }
                }
                await tp.updateCopyName(irar[1]);
                if (["English"].includes(getLanguage())) {
                    await tp.vError1(0, temcon.eDUPE);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vError1(0, temcon.fDUPE);
                }
                await tp.dSave2EnableStatus(false);
            } else if (["AnATemplate"].includes(getObjective())) {
                await tp.selectTemplate(iaaa[1]);

                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Copy");
                    for (var i = 0; i < anaInput.length; i++) {
                        await tp.updateCopyName(anaInput[i]);
                        await tp.vError1(0, eErr[i]);
                        await tp.dSave2EnableStatus(false);
                    }
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Copier");
                    for (var i = 0; i < anaInput.length; i++) {
                        await tp.updateCopyName(anaInput[i]);
                        await tp.vError1(0, fErr[i]);
                        await tp.dSave2EnableStatus(false);
                    }
                }
                await tp.updateCopyName(iaaa[1]);
                if (["English"].includes(getLanguage())) {
                    await tp.vError1(0, temcon.eDUPE);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vError1(0, temcon.fDUPE);
                }
                await tp.dSave2EnableStatus(false);
            }
        }
    });

    it('009 : copy template cancel and confirm', async () => {
        const ipap = await rfp.templateSelect("icx-pick-and-price");
        const irar = await rfp.templateSelect("icx-rate-and-rank");
        const iaaa = await rfp.templateSelect("icx-ask-and-answer");

        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                await tp.updateCopyName("icx_copy");
                await tp.dSave2EnableStatus(true);
                await tp.dialog2Save(false);

                const stat = await tp.vTemplateinList("icx_copy");
                expect(stat).toBe(false);

                if (["PnPTemplate"].includes(getObjective())) {
                    await tp.selectTemplate(ipap[1]);
                } else if (["RnRTemplate"].includes(getObjective())) {
                    await tp.selectTemplate(irar[1]);
                } else if (["AnATemplate"].includes(getObjective())) {
                    await tp.selectTemplate(iaaa[1]);
                }
                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Copy");
                    await tp.updateCopyName("icx_copy");
                    await tp.dialog2Save(true);
                    if (["PnPTemplate"].includes(getObjective())) {
                        await rfp.getSnackToast(temcon.eCOPIED.replace("<origT>", ipap[1]).replace("<copyT>", "icx_copy"));
                    } else if (["RnRTemplate"].includes(getObjective())) {
                        await rfp.getSnackToast(temcon.eCOPIED.replace("<origT>", irar[1]).replace("<copyT>", "icx_copy"));
                    } else if (["AnATemplate"].includes(getObjective())) {
                        await rfp.getSnackToast(temcon.eCOPIED.replace("<origT>", iaaa[1]).replace("<copyT>", "icx_copy"));
                    }
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Copier");
                    await tp.updateCopyName("icx_copy");
                    await tp.dialog2Save(true);
                    if (["PnPTemplate"].includes(getObjective())) {
                        await rfp.getSnackToast(temcon.fCOPIED.replace("<origT>", ipap[1]).replace("<copyT>", "icx_copy"));
                    } else if (["RnRTemplate"].includes(getObjective())) {
                        await rfp.getSnackToast(temcon.fCOPIED.replace("<origT>", irar[1]).replace("<copyT>", "icx_copy"));
                    } else if (["AnATemplate"].includes(getObjective())) {
                        await rfp.getSnackToast(temcon.fCOPIED.replace("<origT>", iaaa[1]).replace("<copyT>", "icx_copy"));
                    }
                }
            }
        }
    });

    it('010 : validate copy template options are', async () => {
        const et1 = ["Edit", "Copy", "Lock", "Delete", "Archive", "Export"];
        const ft1 = ["Éditer", "Copier", "Verrouiller", "Supprimer définitivement", "Archiver", "Exporter"];

        const et2 = ["Edit", "Copy", "Lock", "Archive"];
        const ft2 = ["Éditer", "Copier", "Verrouiller", "Archiver"];

        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                await tp.selectTemplate("icx_copy");
                if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                    if (["English"].includes(getLanguage())) {
                        await tp.vEllipsisOptionList(et1);
                    } else if (["Français"].includes(getLanguage())) {
                        await tp.vEllipsisOptionList(ft1);
                    }
                } else if (["COMAD"].includes(getUserRole())) {
                    if (["English"].includes(getLanguage())) {
                        await tp.vEllipsisOptionList(et2);
                    } else if (["Français"].includes(getLanguage())) {
                        await tp.vEllipsisOptionList(ft2);
                    }
                }
                await browser.keys(Key.Escape);
                await browser.pause(5000);
            }
        }
    })

    it('011 : navigate to templates and lock cancel', async () => {
        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                await tp.selectTemplate("icx_copy");
                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Lock");
                    await rfp.valDialogTitle(1, "Lock Template");
                    await rfp.validateMessageInPopUp(temcon.eLOCK);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Verrouiller");
                    await rfp.valDialogTitle(1, "Verrouiller le modèle");
                    await rfp.validateMessageInPopUp(temcon.fLOCK);
                }
                await tp.cancelAction();
            }
        }
    });

    it('012 : lock confirm', async () => {
        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                await tp.selectTemplate("icx_copy");
                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Lock");
                    await rfp.valDialogTitle(1, "Lock Template");
                    await rfp.validateMessageInPopUp(temcon.eLOCK);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Verrouiller");
                    await rfp.valDialogTitle(1, "Verrouiller le modèle");
                    await rfp.validateMessageInPopUp(temcon.fLOCK);
                }
                await tp.confirmAction();
                if (["English"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.eLOCKED.replace("<template>", "icx_copy"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.fLOCKED.replace("<template>", "icx_copy"));
                }
            }
        }
    });

    it('013 : unlock cancel', async () => {
        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                if (["SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                    await lp.signOff();
                    console.log("Signed off as Sales/ Account/ Company Admin");

                    await lp.performLogin(comcon.USER1, comcon.PASS);
                    console.log("Signed in as System Admin");
                    await lp.selectCompany(company);

                    await rfp.navigateToRequiredTabs(locatorValues.LEFTMENU_TEMPLATES);
                }

                await tp.selectTemplate("icx_copy");
                if (["English"].includes(getLanguage())) {
                    await tp.vOptionDisabled("Edit");
                    await tp.vOptionEnabled("Copy");
                    await tp.vOptionEnabled("Archive");
                    if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                        await tp.vOptionEnabled("Unlock");
                        await tp.vOptionDisabled("Delete");
                        await tp.vOptionEnabled("Export");
                    }
                    await tp.sEllipsisOption("Unlock");
                    await rfp.valDialogTitle(1, "Unlock Template");
                    await rfp.validateMessageInPopUp(temcon.eUNLOCK);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vOptionDisabled("Éditer");
                    await tp.vOptionEnabled("Copier");
                    await tp.vOptionEnabled("Archiver");
                    if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                        await tp.vOptionEnabled("Déverrouiller");
                        await tp.vOptionDisabled("Supprimer définitivement");
                        await tp.vOptionEnabled("Export");
                    }
                    await tp.sEllipsisOption("Déverrouiller");
                    await rfp.valDialogTitle(1, "Déverrouiller le modèle");
                    await rfp.validateMessageInPopUp(temcon.fUNLOCK);
                }
                await tp.cancelAction();
            }
        }
    });

    it('014 : unlock confirm', async () => {
        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                await tp.selectTemplate("icx_copy");
                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Unlock");
                    await rfp.valDialogTitle(1, "Unlock Template");
                    await rfp.validateMessageInPopUp(temcon.eUNLOCK);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Déverrouiller");
                    await rfp.valDialogTitle(1, "Déverrouiller le modèle");
                    await rfp.validateMessageInPopUp(temcon.fUNLOCK);
                }
                await tp.confirmAction();
                if (["English"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.eUNLOCKED.replace("<template>", "icx_copy"));
                } else if (["Français"].includes(getLanguage())) {
                    await rfp.getSnackToast(temcon.fUNLOCKED.replace("<template>", "icx_copy"));
                }
            }
        }
    });

    it('016 : verify different tabs of a template', async () => {
        const eTab = ["General", "Global Settings", "Locale Settings"];
        const fTab = ["Général", "Paramètres généraux", "Paramètres locaux"];

        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                if (["SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                    await lp.signOff();
                    console.log("Signed off as System Admin");

                    const userDetails = getUserCredentials();
                    await lp.performLogin(userDetails.userName, userDetails.password);
                    console.log("Signed in as Sales/ Account/ Company Admin");
                    await lp.selectCompany(company);

                    await rfp.navigateToRequiredTabs(locatorValues.LEFTMENU_TEMPLATES);
                }

                await tp.selectTemplate("icx_copy");
                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Edit");
                    await tp.vTemplateTabText(eTab);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Éditer");
                    await tp.vTemplateTabText(fTab);
                }
            }
        }
    });

    it('017 : template name edit, stay on page and discard change', async () => {
        const ipap = await rfp.templateSelect("icx-pick-and-price");
        const irar = await rfp.templateSelect("icx-rate-and-rank");
        const iaaa = await rfp.templateSelect("icx-ask-and-answer");

        const ePlh = ["TEMPLATE NAME", "GAME TYPE", "NOTES"];
        const fPlh = ["NOM DU MODÈLE", "TYPE DE JEU", "NOTES"];

        const inpt = ["<", ">", ";", " ", await rfp.strBuild(129, "a")];

        const eErr = [...Array(3).fill(comcon.ESPL1), comcon.EREQ, comcon.EMAX.replace("<n>", "128")];
        const fErr = [...Array(3).fill(comcon.FSPL1), comcon.FREQ, comcon.FMAX.replace("<n>", "128")];

        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                if (["English"].includes(getLanguage())) {
                    await tp.vAllLocalesIconNText(0, "All Locales");

                    await tp.vNamePlaceholder(ePlh);

                    for (var i = 0; i < inpt.length; i++) {
                        await tp.generalInput(0, inpt[i]);
                        await tp.vError2(0, eErr[i]);
                        await tp.dSave2EnableStatus(false);
                    }

                    if (["PnPTemplate"].includes(getObjective())) {
                        await tp.generalInput(0, ipap[1]);
                        await tp.vError2(0, temcon.eDUPE);
                        await tp.dSave2EnableStatus(false);
                    } else if (["RnRTemplate"].includes(getObjective())) {
                        await tp.generalInput(0, irar[1]);
                        await tp.vError2(0, temcon.eDUPE);
                        await tp.dSave2EnableStatus(false);
                    } else if (["AnATemplate"].includes(getObjective())) {
                        await tp.generalInput(0, iaaa[1]);
                        await tp.vError2(0, temcon.eDUPE);
                        await tp.dSave2EnableStatus(false);
                    }
                    await tp.generalInput(0, "$iCXTemplate");

                    await tp.sBackToTemplates();
                    await rfp.valDialogTitle(1, "Exit");
                    await rfp.validateMessageInPopUp(temcon.eDC);
                    await tp.stayOnPage_discardChanges("sop");

                    await tp.sBackToTemplates();
                    await rfp.valDialogTitle(1, "Exit");
                    await rfp.validateMessageInPopUp(temcon.eDC);
                    await tp.stayOnPage_discardChanges("dc");

                    await tp.selectTemplate("icx_copy");
                    await tp.sEllipsisOption("Edit");
                    await tp.generalInput(0, "$iCXTemplate");
                    await tp.dialog2Save(true);
                    await rfp.getSnackToast(temcon.eUPD.replace("<template>", "$iCXTemplate"));
                } else if (["Français"].includes(getLanguage())) {
                    await tp.vAllLocalesIconNText(0, "Toutes les régions");

                    await tp.vNamePlaceholder(fPlh);

                    for (var i = 0; i < inpt.length; i++) {
                        await tp.generalInput(0, inpt[i]);
                        await tp.vError2(0, fErr[i]);
                        await tp.dSave2EnableStatus(false);
                    }

                    if (["PnPTemplate"].includes(getObjective())) {
                        await tp.generalInput(0, ipap[1]);
                        await tp.vError2(0, temcon.fDUPE);
                        await tp.dSave2EnableStatus(false);
                    } else if (["RnRTemplate"].includes(getObjective())) {
                        await tp.generalInput(0, irar[1]);
                        await tp.vError2(0, temcon.fDUPE);
                        await tp.dSave2EnableStatus(false);
                    } else if (["AnATemplate"].includes(getObjective())) {
                        await tp.generalInput(0, iaaa[1]);
                        await tp.vError2(0, temcon.fDUPE);
                        await tp.dSave2EnableStatus(false);
                    }
                    await tp.generalInput(0, "$iCXTemplate");

                    await tp.sBackToTemplates();
                    await rfp.valDialogTitle(1, "Quitter");
                    await rfp.validateMessageInPopUp(temcon.fDC);
                    await tp.stayOnPage_discardChanges("sop");

                    await tp.sBackToTemplates();
                    await rfp.valDialogTitle(1, "Quitter");
                    await rfp.validateMessageInPopUp(temcon.fDC);
                    await tp.stayOnPage_discardChanges("dc");

                    await tp.selectTemplate("icx_copy");
                    await tp.sEllipsisOption("Éditer");
                    await tp.generalInput(0, "$iCXTemplate");
                    await tp.dialog2Save(true);
                    await rfp.getSnackToast(temcon.fUPD.replace("<template>", "$iCXTemplate"));
                }
            }
        }
    });

    it('018 : game type verification', async () => {
        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                await tp.selectTemplate("$iCXTemplate");
                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Edit");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Éditer");
                }
                if (["PnPTemplate"].includes(getObjective())) {
                    await tp.vDialogLBL(2, "NOTES");

                    if (["English"].includes(getLanguage())) {
                        await tp.vGameType("GAME TYPE", "Pick and Price", "icon-pp");
                    } else if (["Français"].includes(getLanguage())) {
                        await tp.vGameType("TYPE DE JEU", "Choisir et fixer un prix", "icon-pp");
                    }
                } else if (["RnRTemplate"].includes(getObjective())) {
                    await tp.vDialogLBL(2, "NOTES");

                    if (["English"].includes(getLanguage())) {
                        await tp.vGameType("GAME TYPE", "Rate and Rank", "icon-rr");
                    } else if (["Français"].includes(getLanguage())) {
                        await tp.vGameType("TYPE DE JEU", "Évaluer et classifier", "icon-rr");
                    }
                } else if (["AnATemplate"].includes(getObjective())) {
                    await tp.vDialogLBL(2, "NOTES");

                    if (["English"].includes(getLanguage())) {
                        await tp.vGameType("GAME TYPE", "Ask and Answer", "icon-aa");
                    } else if (["Français"].includes(getLanguage())) {
                        await tp.vGameType("TYPE DE JEU", "question et réponses", "icon-aa");
                    }
                }
            }
        }
    })

    it('019 : edit notes', async () => {
        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                if (["English"].includes(getLanguage())) {
                    await tp.generalInput(2, await rfp.strBuild(1025, "a"));
                    await tp.vError2(0, comcon.EMAX.replace("<n>", "1024"));
                    await tp.dSave2EnableStatus(false);

                    await tp.generalInput(2, "This is a copy of the iCX Template. Can be used for different insights created for this company only.");
                    await tp.dialog2Save(true);
                    await rfp.getSnackToast(temcon.eUPD.replace("<template>", "$iCXTemplate"));
                } else if (["Français"].includes(getLanguage())) {
                    await tp.generalInput(2, await rfp.strBuild(1025, "a"));
                    await tp.vError2(0, comcon.FMAX.replace("<n>", "1024"));
                    await tp.dSave2EnableStatus(false);

                    await tp.generalInput(2, "Ceci est une copie du modèle. Peut être utilisé pour différentes informations créées pour cette entreprise uniquement.");
                    await tp.dialog2Save(true);
                    await rfp.getSnackToast(temcon.fUPD.replace("<template>", "$iCXTemplate"));
                }
            }
        }
    });

    it('020 : verify side nav menu options and export template', async () => {
        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                await tp.sBackToTemplates();

                if (["COMAD"].includes(getUserRole())) {
                    await lp.signOff();
                    console.log("Signed off as Company Admin");

                    await lp.performLogin(InputValues.ADMIN_USERNAME, InputValues.PASSWORD);
                    console.log("Signed in as System Admin");
                    await lp.selectCompany(company);

                    await rfp.navigateToRequiredTabs(locatorValues.LEFTMENU_TEMPLATES);
                }

                await tp.selectTemplate("$iCXTemplate");
                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Export");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Exporter");
                }
                await browser.pause(20000);
            }
        }
    });

    it('022 : delete cancel', async () => {
        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                await tp.selectTemplate("$iCXTemplate");
                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Delete");
                    await rfp.valDialogTitle(1, "Delete Template");
                    await rfp.validateMessageInPopUp(temcon.eDELETE);
                    await tp.cancelAction();
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Supprimer définitivement");
                    await rfp.valDialogTitle(1, "Supprimer le modèle");
                    await rfp.validateMessageInPopUp(temcon.fDELETE);
                    await tp.cancelAction();
                }
            }
        }
    });

    it('023 : delete copied template', async () => {
        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                await tp.selectTemplate("$iCXTemplate");
                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Delete");
                    await tp.deleteAction();
                    await rfp.getSnackToast(temcon.eDELETED.replace("<template>", "$iCXTemplate"));
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Supprimer définitivement");
                    await tp.deleteAction();
                    await rfp.getSnackToast(temcon.fDELETED.replace("<template>", "$iCXTemplate"));
                }
            }
        }
    });

    it('024 : Should validate Show All filter dropdown options', async () => {
        const ipap = await rfp.templateSelect("icx-pick-and-price");
        const irar = await rfp.templateSelect("icx-rate-and-rank");
        const iaaa = await rfp.templateSelect("icx-ask-and-answer");

        const allTp = [temName, iaaa[1], irar[1], ipap[1]];

        const unlockedTp = [temName];

        const lockedTp = [iaaa[1], irar[1], ipap[1]];

        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                await tp.sFiltermenu("All");
                await tp.vTemplateList(allTp);

                await tp.sFiltermenu("Unlocked");
                await tp.vTemplateList(unlockedTp);

                await tp.sFiltermenu("Locked");
                await tp.vTemplateList(lockedTp);
            }
        }
    });

    it('025 : Should validate All Sorting Options', async () => {
        const ipap = await rfp.templateSelect("icx-pick-and-price");
        const irar = await rfp.templateSelect("icx-rate-and-rank");
        const iaaa = await rfp.templateSelect("icx-ask-and-answer");

        const ascTp = [iaaa[1], ipap[1], irar[1], temName];

        const dscTp = [ temName, irar[1], ipap[1], iaaa[1]];

        const newTp = [temName, iaaa[1], irar[1], ipap[1]];

        const oldTp = [ipap[1], irar[1], iaaa[1], temName];

        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                await rfp.refreshApplication();

                await tp.sSortmenu("Name Ascending");
                await tp.vTemplateList(ascTp);

                await tp.sSortmenu("Name Descending");
                await tp.vTemplateList(dscTp);

                await tp.sSortmenu("Newest");
                await tp.vTemplateList(newTp);

                await tp.sSortmenu("Oldest");
                await tp.vTemplateList(oldTp);

                await tp.sSortmenu("Most Recently Updated");
                await tp.vTemplateList(newTp);
            }
        }
    });

    it('026 : delete imported template', async () => {
        if (["PnPTemplate", "RnRTemplate", "AnATemplate"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD", "COMAD"].includes(getUserRole())) {
                await tp.selectTemplate(temName);
                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Delete");
                    await tp.deleteAction();
                    await tp.templateToastMsg(temName, temcon.eDELETED);
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Supprimer définitivement");
                    await tp.deleteAction();
                    await tp.templateToastMsg(temName, temcon.fDELETED);
                }
            }
        }
    });

});