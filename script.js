async function khaliYoutubeN9i() {
    // نجيبو قاع لي بوطون تاع الاشتراك لي راهم مچارجين في الصفحة
    let buttons = document.querySelectorAll('ytd-subscribe-button-renderer button');
    
    console.log(`L9ina ${buttons.length} chaine... bdit n'supprimi!`);

    for (let i = 0; i < buttons.length; i++) {
        // نكليكيو على البوطون باش تخرج نافذة التأكيد
        buttons[i].click();
        
        // نستناو شوية باش النافذة تبان فـ DOM (500 ميلي ثانية)
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // نحوسو على بوطون التأكيد "Unsubscribe" ونكليكيو عليه
        let confirmButton = document.querySelector('#confirm-button button');
        if (confirmButton) {
            confirmButton.click();
            console.log(`[+] Supprimit la chaine numéro ${i + 1}`);
        }
        
        // نريحو شوية باش يوتيوب مايبلوكيناش (Anti-rate limit)
        await new Promise(resolve => setTimeout(resolve, 800));
    }
    
    console.log('Kmalna! Dir actualiser (F5) w chouf.');
}

// نعيطو للـ fonction باش تبدا تخدم
khaliYoutubeN9i();
