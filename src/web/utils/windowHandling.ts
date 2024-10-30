export const moveToChildTab = async (url) => {
    await browser.execute(() => {
        window.open('', '_blank');
    });

    await browser.waitUntil(async () => {
        const handles = await browser.getWindowHandles();
        return handles.length > 1;
    }, { timeout: 5000, timeoutMsg: 'New tab not created within 5 seconds' });

    const handles = await browser.getWindowHandles();
    const newTabHandle = handles[handles.length - 1];

    if (newTabHandle) {
        await browser.switchToWindow(newTabHandle);
        await browser.url(url);
        await browser.maximizeWindow();
        await browser.pause(5000);
    } else {
        console.error('Failed to switch to the new tab.');
    }
};

export const moveToParentTab = async () => {
    await browser.closeWindow();
    await browser.pause(5000);

    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[0])
    await browser.pause(5000);
};

export const switchToParentTab = async () => {
    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[0])
    await browser.pause(5000);
};

export const closeCurrent_moveToPrevious = async () => {
    await browser.closeWindow();
    await browser.pause(5000);

    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[handles.length - 1]);
    await browser.pause(10000);
};

export const moveToChild = async () => {
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[handles.length - 1]);
    await browser.pause(10000);
};

export const closeCurrent_jumpToParent = async () => {
    const handles1 = await browser.getWindowHandles();
    await browser.switchToWindow(handles1[1]);
    await browser.closeWindow();
    await browser.pause(2000);

    const handles2 = await browser.getWindowHandles();
    await browser.switchToWindow(handles2[0]);
    await browser.pause(2000);
};