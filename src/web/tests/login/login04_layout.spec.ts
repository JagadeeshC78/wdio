import { getUserRole, getObjective, getBrowser, getOs, getLanguage } from '../../../config/environmentVariablesSetup'
import { companySelection } from 'src/config/chooseCompany';

import lp from '@WebPages/login/login.page';

describe('Login 04 : verify login layout text', async () => {

    const osValue = getOs();
    const spectCompanyDetail = companySelection["login"];
    const company = spectCompanyDetail[osValue];

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

    it('01 : login layout', async () => {
        const eExp = ["Email", "Password", "Reset Password", "Sign In"];
        const fExp = ["Email", "Mot de passe", "Réinitialiser le mot de passe", "Se Connecter"];

        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                if (["English"].includes(getLanguage())) {
                    await lp.labelsMatch(eExp);
                } else if (["Français"].includes(getLanguage())) {
                    await lp.labelsMatch(fExp);
                }
            }
        }
    });

});