// Tarihleri Ayarlayın
// Ali Koç'un başkanlık başlangıç tarihi
const aliKocStartDate = new Date("2018-06-03T00:00:00");

// Fenerbahçe'nin son şampiyonluk tarihi
const fbLastChampionshipDate = new Date("2014-05-11T00:00:00");

// Sayaçları Güncelleyen Fonksiyon
function updateCounters() {
    const now = new Date();

    // Ali Koç'un başkanlık süresini hesapla
    const aliKocDuration = calculateDuration(aliKocStartDate, now);
    document.getElementById("ali-koc-counter").textContent = formatDuration(aliKocDuration);

    // Fenerbahçe'nin şampiyon olamama süresini hesapla
    const fbDuration = calculateDuration(fbLastChampionshipDate, now);
    document.getElementById("fb-counter").textContent = formatDuration(fbDuration);
}

// Tarih farkını yıl, ay, gün, saat, dakika, saniye cinsinden hesaplayan fonksiyon
function calculateDuration(startDate, endDate) {
    const totalSeconds = Math.floor((endDate - startDate) / 1000);

    const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
    const remainingAfterYears = totalSeconds % (365 * 24 * 60 * 60);

    const months = Math.floor(remainingAfterYears / (30 * 24 * 60 * 60));
    const remainingAfterMonths = remainingAfterYears % (30 * 24 * 60 * 60);

    const days = Math.floor(remainingAfterMonths / (24 * 60 * 60));
    const remainingAfterDays = remainingAfterMonths % (24 * 60 * 60);

    const hours = Math.floor(remainingAfterDays / (60 * 60));
    const remainingAfterHours = remainingAfterDays % (60 * 60);

    const minutes = Math.floor(remainingAfterHours / 60);
    const seconds = remainingAfterHours % 60;

    return { years, months, days, hours, minutes, seconds };
}

// Süreyi uygun biçimde yazdıran fonksiyon
function formatDuration(duration) {
    return `${duration.years} yıl ${duration.months} ay ${duration.days} gün ` +
           `${duration.hours} saat ${duration.minutes} dakika ${duration.seconds} saniye`;
}

// Sayaçları sürekli güncelle
setInterval(updateCounters, 1000);

// Sayfa ilk yüklendiğinde sayaçları güncelle
updateCounters();