import { getUserRole, getObjective, getOs, getLanguage } from '../../../config/environmentVariablesSetup'
import { companySelection } from 'src/config/chooseCompany';

import lp from '@WebPages/login/login.page';

import logcon from 'src/web/constant/login';

describe('Login 03 : verify login invalid scenarios', async () => {

    const osValue = getOs();
    const spectCompanyDetail = companySelection["login"];
    const company = spectCompanyDetail[osValue];

    const invalidPass = "junk";
    const user = "babAdmin@firstinsight.com";

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

    it('01 : test invalid user and password', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                await lp.performLogin("junk", invalidPass);
                if (["English"].includes(getLanguage())) {
                    expect(await lp.hasError(logcon.eLOGIN));
                } else if (["Français"].includes(getLanguage())) {
                    expect(await lp.hasError(logcon.fLOGIN));
                }
            }
        }
    });

    it('02 : test valid user invalid password', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                await lp.performLogin(user, invalidPass);
                if (["English"].includes(getLanguage())) {
                    expect(await lp.hasError(logcon.eLOGIN));
                } else if (["Français"].includes(getLanguage())) {
                    expect(await lp.hasError(logcon.fLOGIN));
                }
            }
        }
    });

    it('03 : test valid user empty password', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                await lp.performLogin(user, "");
                if (["English"].includes(getLanguage())) {
                    expect(await lp.hasError(logcon.eLOGIN));
                } else if (["Français"].includes(getLanguage())) {
                    expect(await lp.hasError(logcon.fLOGIN));
                }
            }
        }
    });

    it('04 : test empty user invalid password', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                await lp.performLogin("", invalidPass);
                if (["English"].includes(getLanguage())) {
                    expect(await lp.hasError(logcon.eLOGIN));
                } else if (["Français"].includes(getLanguage())) {
                    expect(await lp.hasError(logcon.fLOGIN));
                }
            }
        }
    });

});