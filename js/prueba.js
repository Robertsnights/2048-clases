let deferredPrompt;
const butInstall = document.getElementsByClassName("descargar");

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    console.log("nice", "beforeinstallprompt", event);
    window.deferredPrompt = event;
    //divInstall.classList.toggle('hidden', false);
});


butInstall.addEventListener('click', async () => {
    console.log("ok", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();
    const result = await promptEvent.userChoise;
    console.log("ok", "userChoise", result);
    window.deferredPrompt = null;
})

