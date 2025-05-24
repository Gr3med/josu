document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('.marriott-banner');
    if (banner) {
        // *******************************************************************
        // ** يرجى استبدال هذه الروابط بروابط صور فندق ماريوت الفعلية **
        // ** يمكنك إضافة أو إزالة الصور حسب الحاجة **
        // *******************************************************************
        const images = [
            'img/hotel_slideshow/slide1.jpg', // مثال: 'img/hotel1.jpg' أو رابط URL كامل
            'img/hotel_slideshow/slide2.jpg',
            'img/hotel_slideshow/slide3.jpg',
            'img/hotel_slideshow/slide4.jpg'
            // تأكد من أن هذه الصور موجودة في المسار الصحيح أو روابطها صحيحة
        ];

        // إذا لم تكن هناك صور في القائمة، لا تقم بتشغيل العرض
        if (images.length === 0) {
            console.warn("Slideshow: No images provided for the banner.");
            // يمكنك تعيين صورة ثابتة افتراضية هنا إذا أردت
            // banner.style.backgroundImage = `url('img/default-banner.jpg')`;
            // banner.style.opacity = '1';
            return;
        }

        let currentImageIndex = 0;

        // Preload images for smoother transitions
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
        
        // Function to change image
        function changeBannerImage() {
            banner.style.opacity = '0'; // Start fade out
            setTimeout(() => {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                banner.style.backgroundImage = `url('${images[currentImageIndex]}')`;
                banner.style.opacity = '1'; // Fade in
            }, 1000); // Wait for fade out to complete (matches CSS transition duration)
        }

        // Set initial image
        banner.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        banner.style.opacity = '1'; // Make sure initial image is visible

        // Start the slideshow if there's more than one image
        if (images.length > 1) {
            setInterval(changeBannerImage, 6000); // Change image every 6 seconds (1s fade + 5s display)
        }
    } else {
        // console.warn("Slideshow: Banner element (.marriott-banner) not found.");
    }
});