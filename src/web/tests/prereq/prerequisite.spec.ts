import { getUserRole, getObjective, getOs, getLanguage } from '@WebConfig/environmentVariablesSetup';
import { companySelection } from 'src/config/chooseCompany';

import lp from '@WebPages/login/login.page';
import rfp from '@WebPages/setup/reusableFunctions.page';
import tp from '@WebPages/templates/templates.page';

/** Execution Time : ~ x mins. */

describe('Setup 00 : pre-requsities', () => {

    const osValue = getOs();
    const featureValue = getObjective();
    const spectCompanyDetail = companySelection["defaulttemplate"][featureValue];
    const company = spectCompanyDetail[osValue];

    it('00 : admin a company', async () => {
        if (["PreReq"].includes(getObjective())) {
            if (["SYSAD"].includes(getUserRole())) {
                await lp.selectCompany(company);
            }
        }
    });

    it('01 : import latest set of templates in company 1', async () => {
        if (["PreReq"].includes(getObjective())) {
            if (["SYSAD"].includes(getUserRole())) {
                await rfp.navtoSideMenu("templates");

                await tp.importNoVersionTemplate("icx-pick-and-price");

                await tp.selectTemplate("icx-pick-and-price");
                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Set as Default P&P Template");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Paramétrer un modèle CFP par défaut");
                }


                await tp.importNoVersionTemplate("icx-rate-and-rank");

                await tp.selectTemplate("icx-rate-and-rank");
                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Set as Default R&R Template");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Paramétrer un modèle EC par défaut");
                }


                await tp.importNoVersionTemplate("icx-ask-and-answer");

                await tp.selectTemplate("icx-ask-and-answer");
                if (["English"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Set as Default A&A Template");
                } else if (["Français"].includes(getLanguage())) {
                    await tp.sEllipsisOption("Définir comme modèle Q-R par défaut");
                }
            }
        }
    });

}); 