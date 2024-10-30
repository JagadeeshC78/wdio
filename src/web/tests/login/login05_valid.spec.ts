import { getUserRole, getObjective, getBrowser, getOs, getLanguage } from '../../../config/environmentVariablesSetup'
import { companySelection } from 'src/config/chooseCompany';

import lp from '@WebPages/login/login.page';
import rfp from '@WebPages/setup/reusableFunctions.page';

import comcon from 'src/web/constant/common';

/* Execution Time : ~ x mins. */

describe('Login 05 : verify login valid scenarios', async () => {

    const osValue = getOs();
    const spectCompanyDetail = companySelection["login"];
    const company = spectCompanyDetail[osValue];

    const compAdmin = "cppcad@firstinsight.com";
    const compUser = "cppbuy@firstinsight.com";

    it('change language', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                await lp.signOff();

                if (["Français"].includes(getLanguage())) {
                    await lp.chooseLanguage("Français");
                }
            }
        }
    });

    it('01 : login as company admin', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                await lp.performLogin(compAdmin, comcon.PASS);
                await lp.selectCompany(company);

                if (getLanguage() == "English") {
                    await lp.isInsightsMainPage("Insights");
                } else if (getLanguage() == "Français") {
                    await lp.isInsightsMainPage("Aperçus");
                }
            }
        }
    });

    it('02 : login as company user', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                await lp.signOff();

                await lp.performLogin(compUser, comcon.PASS);
                await lp.selectCompany(company);

                if (getLanguage() == "English") {
                    await lp.isInsightsMainPage("Insights");
                } else if (getLanguage() == "Français") {
                    await lp.isInsightsMainPage("Aperçus");
                }
            }
        }
    });

}); 