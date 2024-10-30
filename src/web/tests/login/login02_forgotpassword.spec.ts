import { getUserRole, getOs, getLanguage, getObjective } from '../../../config/environmentVariablesSetup'
import { companySelection } from 'src/config/chooseCompany';

import lp from '@WebPages/login/login.page';
import rfp from '@WebPages/setup/reusableFunctions.page';

import logcon from 'src/web/constant/login';

describe('Login 02 : verify forgot password scenarios', async () => {

    const osValue = getOs();
    const spectCompanyDetail = companySelection["login"];
    const company = spectCompanyDetail[osValue];

    const fUser = "zFuser1@firstinsight.com";

    it('change language', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                await lp.signOff();

                if (["Français"].includes(getLanguage())) {
                    await lp.chooseLanguage('Français');
                    await browser.pause(5000);
                }
            }
        }
    });

    it('01 : tests password reset using an empty user, which is invalid', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                await lp.sNextBtn();
                await lp.forgetPassword("");
                await lp.sBtnResetPassword1(true);
                if (["English"].includes(getLanguage())) {
                    expect(await lp.hasEmptyUserMessage(logcon.eEMAIL));
                    await lp.clickCancel();
                    expect(await lp.isLoginPage("Sign In"));
                } else if (["Français"].includes(getLanguage())) {
                    expect(await lp.hasEmptyUserMessage(logcon.fEMAIL));
                    await lp.clickCancel();
                    expect(await lp.isLoginPage("Se Connecter"));
                }
            }
        }
    });

    it('02 : tests password reset using a user that does not exist, which is invalid', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                await lp.sNextBtn();
                await lp.forgetPassword("junk");
                await lp.sBtnResetPassword1(true);
                if (["English"].includes(getLanguage())) {
                    expect(await lp.hasPasswordInformationMessage(logcon.eINST));
                    expect(await lp.isLoginPage("Sign In"));
                } else if (["Français"].includes(getLanguage())) {
                    expect(await lp.hasPasswordInformationMessage(logcon.fINST));
                    expect(await lp.isLoginPage("Se Connecter"));
                }
            }
        }
    });

    it('03 : tests password reset using a valid user name', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                await rfp.refreshApplication();

                await lp.sNextBtn();
                await lp.forgetPassword(fUser);
                await lp.sBtnResetPassword1(true);
                if (["English"].includes(getLanguage())) {
                    expect(await lp.hasPasswordInformationMessage(logcon.eINST));
                    expect(await lp.isLoginPage("Sign In"));
                } else if (["Français"].includes(getLanguage())) {
                    expect(await lp.hasPasswordInformationMessage(logcon.fINST));
                    expect(await lp.isLoginPage("Se Connecter"));
                }
            }
        }
    });

});