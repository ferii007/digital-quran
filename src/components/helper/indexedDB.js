// Fungsi untuk membuka atau membuat koneksi dengan database IndexedDB
function openIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open('d-quran-db', 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            // Membuat toko (store) bernama 'daftarSurah' jika belum ada
            if (!db.objectStoreNames.contains('daftarSurah')) {
                db.createObjectStore('daftarSurah', { keyPath: 'nomor' });
            }

            // Membuat toko (store) 'detailSurah' jika belum ada
            if (!db.objectStoreNames.contains('detailSurah')) {
                db.createObjectStore('detailSurah', { keyPath: 'nomor' });
            }
        };

        request.onsuccess = (event) => {
            const db = event.target.result;
            resolve(db);
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
}

// Fungsi untuk menyimpan data surah ke dalam IndexedDB
export async function saveDataSurahToIndexedDB(data) {
    try {
        const db = await openIndexedDB();
        const transaction = db.transaction('daftarSurah', 'readwrite');
        const store = transaction.objectStore('daftarSurah');

        // Loop melalui data yang diterima dari API dan menyimpannya ke dalam toko (store)
        data.forEach((item) => {
            store.put(item);
        });

        transaction.oncomplete = () => {
            console.log('Data berhasil disimpan ke dalam IndexedDB.');
        };
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
}

// Fungsi untuk mengambil data surah dari IndexedDB
export async function getDataSurahFromIndexedDB() {
    try {
        const db = await openIndexedDB();
        const transaction = db.transaction('daftarSurah', 'readonly');
        const store = transaction.objectStore('daftarSurah');

        const data = await new Promise((resolve, reject) => {
            const request = store.getAll();
            request.onsuccess = (event) => {
                resolve(event.target.result);
            };
            request.onerror = (event) => {
                reject(event.target.error);
            };
        });

        // Data sekarang tersimpan dalam variabel 'data', Anda dapat menggunakannya untuk menampilkan atau melakukan operasi lain.
        // console.log('Data dari IndexedDB:', data);

        return data;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
}

// Fungsi untuk menyimpan data detail surah ke dalam IndexedDB
export async function saveDetailSurahToIndexedDB(data) {
    console.log('data', data)
    try {
        const db = await openIndexedDB();
        const transaction = db.transaction('detailSurah', 'readwrite');
        const store = transaction.objectStore('detailSurah');

        // menyimpannya ke dalam toko (store)
        store.put(data);

        transaction.oncomplete = () => {
            console.log('Data berhasil disimpan ke dalam IndexedDB.');
        };
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
}

// Fungsi untuk mengambil data detail surah dari IndexedDB
export async function getDetailSurahFromIndexedDB(noSurah) {
    try {
        const db = await openIndexedDB();
        const transaction = db.transaction('detailSurah', 'readonly');
        const store = transaction.objectStore('detailSurah');

        // const data = await new Promise((resolve, reject) => {
        //     const request = store.getAll();
        //     request.onsuccess = (event) => {
        //         resolve(event.target.result);
        //     };
        //     request.onerror = (event) => {
        //         reject(event.target.error);
        //     };
        // });
        const data = await store.get(noSurah)

        // Data sekarang tersimpan dalam variabel 'data', Anda dapat menggunakannya untuk menampilkan atau melakukan operasi lain.
        // console.log('Data dari IndexedDB:', data);
        if (data !== undefined) {
            return data; // Mengembalikan data jika ditemukan
        } else {
            return null; // Mengembalikan null jika tidak ditemukan
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return null;
    }
}