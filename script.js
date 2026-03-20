// --- Bảng quy ước tương ứng mã SKU và Tên Sản Phẩm ---
const skuMapping = {
    'LG-01': 'Quần lót PP cao cấp',
    'LG-02': 'Quần lót PP cao cấp',
    'LG-03': 'Quần lót PP cao cấp',
    'LG-04': 'Quần lót PP cao cấp',
    'LG-05': 'Quần lót PP cao cấp',
    'LG-06': 'Quần lót TC thường',
    'LG-07': 'Quần lót TC thường',
    'LG-08': 'Quần lót TC thường',
    'LG-09': 'Quần lót TC thường',
    'LG-10': 'Quần lót TC thường',
    'LG-11': 'Quần lót TC cao cấp',
    'LG-12': 'Quần lót TC cao cấp',
    'LG-13': 'Quần lót TC cao cấp',
    'LG-14': 'Quần lót TC cao cấp',
    'LG-15': 'Quần lót TC cao cấp',
    'KG-06': 'Khăn mặt Cotton dùng 1 lần',
    'TR-01': 'Chai tẩy Toilet 500ml',
    'TR-03': 'Cốc tẩy bồn cầu 180gr',
    'TR-04': 'Chai tẩy dầu mỡ 500ml',
    'TR-05': 'Siêu tẩy cặn Canxi 500ml',
    'TR-06': 'Sáp thơm hương Hoa Ly',
    'TR-07': 'Sáp thơm hương Đào',
    'TR-08': 'Sáp thơm hương Nước Hoa',
    'TR-09': 'Bột tẩy lồng máy giặt',
    'TR-11': 'Bột tẩy trắng quần áo 500gr',
    'KL-01': 'Khăn trẻ em siêu mềm SHINE 30x30cm',
    'KL-02': 'Khăn mặt siêu mềm trẻ em 30x30cm',
    'KL-03': 'Combo 3 khăn mặt trẻ em sợi tre 30x30cm',
    'KL-05': 'Combo 3 khăn trẻ em siêu mềm 28x32cm',
    'KL-11': 'Khăn mặt xơ tre cao cấp 30x50cm',
    'KL-15': 'Khăn mặt xơ tre hoa cao cấp 30x50cm',
    'KL-18': 'Khăn mặt Modan cao cấp 30x50cm',
    'KL-21': 'Khăn mặt cotton 28x46cm',
    'KL-24': 'Khăn mặt siêu mềm 28x46cm',
    'KL-25': 'Khăn mặt cotton 30x50cm',
    'KL-35': 'Khăn mặt tre 28x48cm',
    'KL-09': 'Khăn lau Gội đa năng 35x75cm',
    'KL-16': 'Khăn quấn đầu xơ tre 36x80cm',
    'KL-17': 'Khăn quấn đầu thể thao 36x80cm',
    'KL-33': 'Khăn quấn đầu siêu mềm 35x80cm',
    'KL-36': 'Khăn tắm cotton 50x100cm',
    'KL-12': 'Khăn tắm xơ tre 50x100cm',
    'KL-22': 'Khăn tắm Cotton 50x100cm',
    'KL-32': 'Khăn tắm siêu mềm 50x100cm',
    'KL-14': 'Khăn tắm 60x120cm Sợi tre',
    'KL-28': 'Khăn tắm 60x120cm cotton',
    'KL-34': 'Khăn tắm 60x120cm Siêu mềm',
    'KL-13': 'Khăn tắm xơ tre 70x140cm',
    'KL-23': 'Khăn tắm Logo Cotton 70x140cm',
    'KL-27': 'Khăn tắm Logo Cotton 70x140cm - 550Gram',
    'KL-31': 'Khăn tắm siêu mềm 70x140cm',
    'KL-07': 'Khăn lau tay treo bếp',
    'BS-03': 'Combo 2 khăn lau đa năng 30x30cm',
    'BS-04': 'Khăn lau đa năng 30x50cm',
    'BS-06': 'Combo 3 khăn lau đa năng 30x30cm',
    'BS-09': 'Bộ 5 khăn lau đa năng 30x30cm',
    'BS-01': 'Miếng bắc bếp dày cao cấp 14x17cm',
    'BS-02': 'Miếng bắc bếp cao cấp xuất khẩu 15x17cm',
    'BS-05': 'Lót nồi Vuông xuất khẩu 23x23cm',
    'BS-07': 'Lót nồi Tròn',
    'BS-08': 'Găng tay xuất khẩu',
    'BS-11': 'Tạp dề vải xuất khẩu 50 x 65 cm',
    'BS-12': 'Tạp dề tráng nhựa xuất khẩu 50x65cm',
    'BC-01': 'Bàn chải người lớn Shine - ECONOMY',
    'BC-02': 'Bàn chải hộp người lớn Shine - PRO',
    'BC-03': 'Bàn chải người lớn cán trong Shine Active - DIAMOND',
    'BCK-01': 'Bàn chải đánh răng trẻ em khủng long Shine Active - DINO',
    'TBL-01': 'Tăm bông người lớn thân nhựa túi 100',
    'TBL-02': 'Tăm bông người lớn thân nhựa túi 200',
    'TBL-03': 'Tăm bông người lớn thân nhựa Hộp 200',
    'TBL-04': 'Tăm bông người lớn thân Trúc túi 100',
    'TBL-05': 'Tăm bông người lớn thân Trúc túi 200',
    'TBL-06': 'Tăm bông người lớn thân Trúc hộp 200',
    'TBL-08': 'Tăm bông người lớn thân Giấy hộp 200',
    'TBE-01': 'Tăm bông trẻ em thân giấy hộp 180',
    'TBE-02': 'Tăm bông trẻ em thân nhựa túi 100',
    'TBE-03': 'Tăm bông trẻ em thân nhựa hộp 180',
    'TBE-04': 'Tăm bông sơ sinh thân giấy hộp 200 que',
    'TC-01': 'Tăm chỉ nha khoa Túi 80Pcs',
    'TC-05': 'Tăm chỉ nha khoa hộp chữ nhật 50pcs',
    'TC-06': 'Tăm nhựa hộp 70pcs',
    'TC-08': 'Tăm nhựa hộp 300pcs',
    'BT-01': 'Bông tắm dây cao cấp 9 nút',
    'BT-02': 'Bông tắm tròn Hoa có Mút',
    'BT-04': 'Bông tắm tròn Trơn',
    'KS-04': 'Khăn tắm sữa 4 lớp 74x85cm',
    'KS-05': 'Khăn tăm sữa 5 lớp',
    'KS-15': 'Khăn sữa 3 lớp 25x28cm',
    'KS-18': 'Khăn sữa 3 lớp 28x32cm',
    'KS-19': 'Khăn sữa 4 lớp 28x32cm',
    'GV-01': 'GVS K LÕI 4 lớp',
    'GV-02': 'GVS CÓ LÕI 4 lớp',
    'GV-03': 'GVS 3 lớp 1,2kg không lõi',
    'GV-04': 'GVS 3 lớp 1,2kg có lõi',
    'GV-05': 'GVS 6 cuộn',
    'GV-06': 'GVS 6 cuộn',
    'GA-04': 'Giấy rút Gói nhỏ 3 LỚP',
    'GA-05': 'Giấy rút Gói Trung 4 LỚP 410 tờ',
    'GA-06': 'Giấy rút Gói Đại 4 LỚP 548 tờ',
    'GA-08': 'Giấy rút đấy 1368 tờ',
    'GA-09': 'Giấy rút đấy 1000 tờ + 3 móc',
    'KG-02': 'Khăn ướt 100 tờ',
    'KG-03': 'Khăn ướt 80 tờ',
    'KG-04': 'Khăn ướt lau bếp 50 tờ',
    'KG-06': 'Khăn mặt Cotton dùng 1 lần',
    'KG-08': 'Khăn khô trẻ em gói 600 gram',
    'KG-05': 'Khăn bao sái',
    'GA-07': 'Hộp giấy lụa cao cấp',
    'KT-01': 'Khẩu trang 5D',
    'KT-02': 'Khẩu trang trẻ em',
    'KT-05': 'Khẩu trang 6A'
};

const normalizedMapping = {};
for (let key in skuMapping) {
    normalizedMapping[key.replace(/-/g, '').toUpperCase()] = {
        originalKey: key,
        productName: skuMapping[key]
    };
}

// --- DOM Elements ---
const fileInput = document.getElementById('file-input');
const uploadZone = document.getElementById('upload-zone');
const fileInfo = document.getElementById('file-info');
const fileNameDisplay = document.getElementById('file-name');
const removeFileBtn = document.getElementById('remove-file-btn');

// Dual Upload Elements
const singleUploadContainer = document.getElementById('single-upload-container');
const dualUploadContainer = document.getElementById('dual-upload-container');

const fileInputTiktok = document.getElementById('file-input-tiktok');
const uploadZoneTiktok = document.getElementById('upload-zone-tiktok');
const fileInfoTiktok = document.getElementById('file-info-tiktok');
const fileNameDisplayTiktok = document.getElementById('file-name-tiktok');
const removeFileBtnTiktok = document.getElementById('remove-file-btn-tiktok');

const fileInputShopee = document.getElementById('file-input-shopee');
const uploadZoneShopee = document.getElementById('upload-zone-shopee');
const fileInfoShopee = document.getElementById('file-info-shopee');
const fileNameDisplayShopee = document.getElementById('file-name-shopee');
const removeFileBtnShopee = document.getElementById('remove-file-btn-shopee');

const processBtn = document.getElementById('process-btn');
const resultsSection = document.getElementById('results-section');
const exportBtn = document.getElementById('export-btn');

const platformSelectionScreen = document.getElementById('platform-selection-screen');
const mainUploadSection = document.getElementById('main-upload-section');
const btnTiktok = document.getElementById('btn-tiktok');
const btnShopee = document.getElementById('btn-shopee');
const btnBoth = document.getElementById('btn-both');
const backHomeBtn = document.getElementById('back-home-btn');
const dynamicUploadHint = document.getElementById('dynamic-upload-hint');

const customAlert = document.getElementById('custom-alert');
const customAlertTitle = document.getElementById('custom-alert-title');
const customAlertMessage = document.getElementById('custom-alert-message');
const customAlertBtn = document.getElementById('custom-alert-btn');

function showAlert(title, message) {
    customAlertTitle.textContent = title;
    customAlertMessage.innerHTML = message.replace(/\n/g, '<br>');
    customAlert.classList.remove('hidden');
    // Force reflow for animation
    void customAlert.offsetWidth;
    customAlert.classList.add('active');
}

customAlertBtn.addEventListener('click', () => {
    customAlert.classList.remove('active');
    setTimeout(() => {
        customAlert.classList.add('hidden');
    }, 300);
});

const previewTabs = document.getElementById('preview-tabs');
const tabTiktok = document.getElementById('tab-tiktok');
const tabShopee = document.getElementById('tab-shopee');
const resultsTitle = document.getElementById('results-title');

let currentFile = null;
let currentFileTk = null;
let currentFileSh = null;

let currentPlatform = 'tiktok'; // default
let currentViewingTab = 'tiktok';

let appState = {
    tiktok: null,
    shopee: null
};

// --- Event Listeners Platform Selection ---
function showSingleUpload() {
    singleUploadContainer.classList.remove('hidden');
    dualUploadContainer.classList.add('hidden');
    previewTabs.classList.add('hidden');
    resultsTitle.classList.remove('hidden');
}

function showDualUpload() {
    singleUploadContainer.classList.add('hidden');
    dualUploadContainer.classList.remove('hidden');
    previewTabs.classList.remove('hidden');
    resultsTitle.classList.add('hidden');
}

btnTiktok.addEventListener('click', () => {
    currentPlatform = 'tiktok';
    platformSelectionScreen.classList.add('hidden');
    mainUploadSection.classList.remove('hidden');
    backHomeBtn.classList.remove('hidden');
    showSingleUpload();
    dynamicUploadHint.innerHTML = 'Hỗ trợ file định dạng <strong>.csv</strong><br>(Tên file thường bắt đầu bằng <em>"Tất cả đơn hàng..."</em>)';
    fileInput.accept = '.csv';
});

btnShopee.addEventListener('click', () => {
    currentPlatform = 'shopee';
    platformSelectionScreen.classList.add('hidden');
    mainUploadSection.classList.remove('hidden');
    backHomeBtn.classList.remove('hidden');
    showSingleUpload();
    dynamicUploadHint.innerHTML = 'Hỗ trợ file định dạng <strong>.xlsx</strong> hoặc <strong>.xls</strong><br>(Tên file thường bắt đầu bằng <em>"Order.all..."</em>)';
    fileInput.accept = '.xlsx, .xls';
});

btnBoth.addEventListener('click', () => {
    currentPlatform = 'both';
    platformSelectionScreen.classList.add('hidden');
    mainUploadSection.classList.remove('hidden');
    backHomeBtn.classList.remove('hidden');
    showDualUpload();
});

backHomeBtn.addEventListener('click', () => {
    currentFile = null; currentFileTk = null; currentFileSh = null;
    appState = { tiktok: null, shopee: null };
    
    fileInput.value = ''; fileInputTiktok.value = ''; fileInputShopee.value = '';
    fileInfo.classList.add('hidden'); uploadZone.classList.remove('hidden');
    fileInfoTiktok.classList.add('hidden'); uploadZoneTiktok.classList.remove('hidden');
    fileInfoShopee.classList.add('hidden'); uploadZoneShopee.classList.remove('hidden');

    processBtn.disabled = true;
    resultsSection.classList.add('hidden');
    platformSelectionScreen.classList.remove('hidden');
    mainUploadSection.classList.add('hidden');
    backHomeBtn.classList.add('hidden');
});

tabTiktok.addEventListener('click', () => {
    currentViewingTab = 'tiktok';
    tabTiktok.style.background = 'var(--primary)';
    tabTiktok.style.color = 'white';
    tabShopee.style.background = 'transparent';
    tabShopee.style.color = 'rgba(255,255,255,0.6)';
    if(appState.tiktok) renderTable(appState.tiktok);
});

tabShopee.addEventListener('click', () => {
    currentViewingTab = 'shopee';
    tabShopee.style.background = '#f53d2d';
    tabShopee.style.color = 'white';
    tabTiktok.style.background = 'transparent';
    tabTiktok.style.color = 'rgba(255,255,255,0.6)';
    if(appState.shopee) renderTable(appState.shopee);
});

function checkDualReadiness() {
    if (currentPlatform === 'both') {
       processBtn.disabled = !(currentFileTk && currentFileSh);
    }
}

// --- Upload file đơn ---
uploadZone.addEventListener('dragover', e => { e.preventDefault(); uploadZone.classList.add('dragover'); });
uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));
uploadZone.addEventListener('drop', e => { e.preventDefault(); uploadZone.classList.remove('dragover'); if (e.dataTransfer.files.length > 0) handleFileSelect(e.dataTransfer.files[0]); });
uploadZone.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', e => { if (e.target.files.length > 0) handleFileSelect(e.target.files[0]); });

removeFileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentFile = null; fileInput.value = '';
    fileInfo.classList.add('hidden'); uploadZone.classList.remove('hidden');
    processBtn.disabled = true; resultsSection.classList.add('hidden');
});

function validateFileName(file, platform) {
    if (platform === 'tiktok') {
        if (!file.name.endsWith('.csv')) { 
            showAlert("Sai Định Dạng", "TikTok yêu cầu file định dạng <strong>.csv</strong>"); 
            return false; 
        }
        if (!file.name.startsWith("Tất cả đơn hàng")) { 
            showAlert("Lỗi Tên File", "Tên file báo cáo TikTok phải bắt đầu bằng cụm <br><strong>'Tất cả đơn hàng...'</strong>"); 
            return false; 
        }
    } else if (platform === 'shopee') {
        if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) { 
            showAlert("Sai Định Dạng", "Shopee yêu cầu file định dạng <strong>.xlsx</strong> hoặc <strong>.xls</strong>"); 
            return false; 
        }
        if (!file.name.startsWith("Order.all")) { 
            showAlert("Lỗi Tên File", "Tên file báo cáo Shopee phải bắt đầu bằng cụm <br><strong>'Order.all...'</strong>"); 
            return false; 
        }
    }
    return true;
}

function handleFileSelect(file) {
    if (!validateFileName(file, currentPlatform)) return;
    
    currentFile = file;
    fileNameDisplay.textContent = file.name;
    uploadZone.classList.add('hidden'); fileInfo.classList.remove('hidden');
    processBtn.disabled = false; resultsSection.classList.add('hidden');
}

// --- Upload TikTok (Dual) ---
uploadZoneTiktok.addEventListener('dragover', e => { e.preventDefault(); uploadZoneTiktok.classList.add('dragover'); });
uploadZoneTiktok.addEventListener('dragleave', () => uploadZoneTiktok.classList.remove('dragover'));
uploadZoneTiktok.addEventListener('drop', e => { e.preventDefault(); uploadZoneTiktok.classList.remove('dragover'); if (e.dataTransfer.files.length > 0) handleDualFile(e.dataTransfer.files[0], 'tiktok'); });
uploadZoneTiktok.addEventListener('click', () => fileInputTiktok.click());
fileInputTiktok.addEventListener('change', e => { if (e.target.files.length > 0) handleDualFile(e.target.files[0], 'tiktok'); });

removeFileBtnTiktok.addEventListener('click', (e) => {
    e.stopPropagation();
    currentFileTk = null; fileInputTiktok.value = '';
    fileInfoTiktok.classList.add('hidden'); uploadZoneTiktok.classList.remove('hidden');
    checkDualReadiness();
});

// --- Upload Shopee (Dual) ---
uploadZoneShopee.addEventListener('dragover', e => { e.preventDefault(); uploadZoneShopee.classList.add('dragover'); });
uploadZoneShopee.addEventListener('dragleave', () => uploadZoneShopee.classList.remove('dragover'));
uploadZoneShopee.addEventListener('drop', e => { e.preventDefault(); uploadZoneShopee.classList.remove('dragover'); if (e.dataTransfer.files.length > 0) handleDualFile(e.dataTransfer.files[0], 'shopee'); });
uploadZoneShopee.addEventListener('click', () => fileInputShopee.click());
fileInputShopee.addEventListener('change', e => { if (e.target.files.length > 0) handleDualFile(e.target.files[0], 'shopee'); });

removeFileBtnShopee.addEventListener('click', (e) => {
    e.stopPropagation();
    currentFileSh = null; fileInputShopee.value = '';
    fileInfoShopee.classList.add('hidden'); uploadZoneShopee.classList.remove('hidden');
    checkDualReadiness();
});

function handleDualFile(file, type) {
    if (!validateFileName(file, type)) return;
    
    if (type === 'tiktok') {
        currentFileTk = file;
        fileNameDisplayTiktok.textContent = file.name;
        uploadZoneTiktok.classList.add('hidden'); fileInfoTiktok.classList.remove('hidden');
    } else {
        currentFileSh = file;
        fileNameDisplayShopee.textContent = file.name;
        uploadZoneShopee.classList.add('hidden'); fileInfoShopee.classList.remove('hidden');
    }
    checkDualReadiness();
}

function parseFilePromise(file) {
    return new Promise((resolve, reject) => {
        if (file.name.endsWith('.csv')) {
            Papa.parse(file, {
                header: true, skipEmptyLines: true,
                transformHeader: h => h.replace(/\t/g, '').trim(),
                complete: res => resolve(res.data), error: err => reject(err)
            });
        } else if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, {type: 'array'});
                    const firstSheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[firstSheetName];
                    const resultsData = XLSX.utils.sheet_to_json(worksheet, { defval: "", raw: false });
                    const cleanData = resultsData.map(row => {
                        let newRow = {};
                        for (let key in row) newRow[key.replace(/\t/g, '').trim()] = row[key];
                        return newRow;
                    });
                    resolve(cleanData);
                } catch (err) { reject(err); }
            };
            reader.onerror = err => reject(err);
            reader.readAsArrayBuffer(file);
        } else {
            reject(new Error("Không đúng định dạng"));
        }
    });
}

processBtn.addEventListener('click', async () => {
    processBtn.textContent = 'Đang xử lý...';
    processBtn.disabled = true;
    
    try {
        if (currentPlatform === 'both') {
            if (!currentFileTk || !currentFileSh) return;
            const [dataTk, dataSh] = await Promise.all([ parseFilePromise(currentFileTk), parseFilePromise(currentFileSh) ]);
            appState.tiktok = buildPivotState(dataTk, 'tiktok');
            appState.shopee = buildPivotState(dataSh, 'shopee');
            
            tabTiktok.click();
        } else {
            if (!currentFile) return;
            const data = await parseFilePromise(currentFile);
            appState[currentPlatform] = buildPivotState(data, currentPlatform);
            currentViewingTab = currentPlatform;
            renderTable(appState[currentViewingTab]);
        }
        
        processBtn.innerHTML = '<i class="ph ph-magic-wand"></i> Xử lí xong';
        processBtn.disabled = false;
        resultsSection.classList.remove('hidden');
        
    } catch (err) {
        console.error("Lỗi khi đọc file:", err);
        showAlert("Lỗi Đọc File", "Có lỗi xảy ra khi đọc file dữ liệu. Vui lòng kiểm tra lại file của bạn.");
        processBtn.innerHTML = '<i class="ph ph-magic-wand"></i> Xử lí dữ liệu';
        processBtn.disabled = false;
    }
});

function extractSkuData(rawSku) {
    if (!rawSku) return null;
    const cleanSku = rawSku.replace(/\t/g, '').trim().toUpperCase();
    const match = cleanSku.match(/^(\d*)([A-Z]+-?\d+)$/);
    if (match) {
        const multMatch = match[1];
        const multiplier = multMatch ? parseInt(multMatch, 10) : 1;
        const baseSku = match[2].replace(/-/g, '');
        return { multiplier, baseSku };
    }
    return null;
}

function parseDateStrToDate(dateStr) {
    const parts = dateStr.split('/');
    if(parts.length === 3) return new Date(parts[2], parts[1] - 1, parts[0]);
    return new Date(0);
}

// Hàm Xây Dựng Pivot Độc Lập Trả Về Object State
function buildPivotState(data, platform) {
    let state = {
        splitByDate: true,
        dailySales: {},
        minDateStr: "", maxDateStr: "",
        displayDateStr: "",
        uniqueDates: [],
        masterSkuList: []
    };

    let minDateObj = null; let maxDateObj = null;

    const globalSales = {};
    Object.keys(normalizedMapping).forEach(key => {
        let skuCode = normalizedMapping[key].originalKey;
        globalSales[skuCode] = { productName: normalizedMapping[key].productName, productCode: skuCode, total: 0 };
    });

    let skuCol = platform === 'tiktok' ? "Seller SKU" : "SKU phân loại hàng";
    let qtyCol = platform === 'tiktok' ? "Quantity" : "Số lượng";
    let statusCol = platform === 'tiktok' ? "Cancelation/Return Type" : "Trạng Thái Đơn Hàng";
    let dateCol = platform === 'tiktok' ? "Created Time" : "Ngày đặt hàng";

    data.forEach(row => {
        let rawDateStr = row[dateCol];
        if (!rawDateStr && platform === 'tiktok') {
            rawDateStr = row["Create Time"];
        }
        if (!rawDateStr) return;

        let isCancelled = false;
        let cancelType = row[statusCol];
        if (platform === 'tiktok') {
            if (cancelType !== undefined && cancelType.toString().replace(/\t/g, '').trim() !== '') {
                isCancelled = true;
            }
        } else {
            if (cancelType !== undefined && cancelType.toString().replace(/\t/g, '').trim().toLowerCase() === 'đã hủy') {
                isCancelled = true;
            }
        }
        if (isCancelled) return;

        let rawQty = row[qtyCol];
        if (rawQty === undefined || rawQty === null) return;
        let pQty = parseInt(rawQty.toString().replace(/\t/g, '').trim(), 10);
        if (isNaN(pQty)) return;

        let skuInfo = extractSkuData(row[skuCol]);
        if (!skuInfo) return; 

        let rawDate = rawDateStr.toString().replace(/\t/g, '').trim();
        let datePart = rawDate.split(' ')[0];
        
        let dParts = datePart.split(/[\/\-]/);
        let normalizedDateStr = "UNDATED";
        if (dParts.length === 3) {
            if (dParts[0].length === 4) {
                normalizedDateStr = `${dParts[2].padStart(2, '0')}/${dParts[1].padStart(2, '0')}/${dParts[0]}`;
            } else if (dParts[2].length === 4) {
                let day = dParts[0].padStart(2, '0');
                let month = dParts[1].padStart(2, '0');
                normalizedDateStr = `${day}/${month}/${dParts[2]}`;
            }
        }

        let currentObj = parseDateStrToDate(normalizedDateStr);
        if (currentObj.getTime() !== 0) {
            if (!minDateObj || currentObj < minDateObj) {
                minDateObj = currentObj;
                state.minDateStr = normalizedDateStr;
            }
            if (!maxDateObj || currentObj > maxDateObj) {
                maxDateObj = currentObj;
                state.maxDateStr = normalizedDateStr;
            }
        }

        let baseSku = skuInfo.baseSku;
        let mappedData = normalizedMapping[baseSku];
        if (!mappedData) return;

        let actualQtySold = pQty * skuInfo.multiplier;
        let displaySku = mappedData.originalKey;
        
        let aggDateStr = state.splitByDate ? normalizedDateStr : "ALL_DATES";
        
        if (!state.dailySales[aggDateStr]) {
            state.dailySales[aggDateStr] = {};
        }
        state.dailySales[aggDateStr][displaySku] = (state.dailySales[aggDateStr][displaySku] || 0) + actualQtySold;

        globalSales[displaySku].total += actualQtySold;
    });

    if (state.minDateStr === state.maxDateStr) {
        state.displayDateStr = state.minDateStr;
    } else if (state.minDateStr && state.maxDateStr) {
        state.displayDateStr = `${state.minDateStr} - ${state.maxDateStr}`;
    }

    let uniqueDates = Object.keys(state.dailySales);
    uniqueDates.sort((a, b) => {
        if (a === "ALL_DATES" || b === "ALL_DATES") return 0;
        return parseDateStrToDate(a) - parseDateStrToDate(b);
    });
    state.uniqueDates = uniqueDates;

    const groupTotals = {};
    const prefixTotals = {};
    const groupToPrefix = {};

    Object.values(globalSales).forEach(item => {
        const match = item.productCode.match(/^([A-Z]+)/);
        const prefix = match ? match[1] : 'OTHER';
        
        let groupKeyName = prefix;
        if (prefix === 'LG') groupKeyName = item.productName;

        if (!groupTotals[groupKeyName]) {
            groupTotals[groupKeyName] = 0;
            groupToPrefix[groupKeyName] = prefix;
        }
        groupTotals[groupKeyName] += item.total;
        
        if (!prefixTotals[prefix]) prefixTotals[prefix] = 0;
        prefixTotals[prefix] += item.total;
    });

    const sortedGroupKeys = Object.keys(groupTotals).sort((a, b) => {
        const pA = groupToPrefix[a];
        const pB = groupToPrefix[b];
        if (prefixTotals[pB] !== prefixTotals[pA]) return prefixTotals[pB] - prefixTotals[pA];
        if (pA !== pB) return pA.localeCompare(pB);
        return groupTotals[b] - groupTotals[a];
    });

    let masterSkuList = [];
    let currentPrefix = null;
    let currentGroup = null;

    sortedGroupKeys.forEach(gKey => {
        let itemsInGroup = Object.values(globalSales).filter(item => {
            const prefix = (item.productCode.match(/^([A-Z]+)/) || [])[1] || 'OTHER';
            const expectedGroup = prefix === 'LG' ? item.productName : prefix;
            return expectedGroup === gKey;
        });

        itemsInGroup.sort((a, b) => a.productCode.localeCompare(b.productCode));
        let itemCount = itemsInGroup.length;
        
        itemsInGroup.forEach((skuObj, idx) => {
            let prefix = (skuObj.productCode.match(/^([A-Z]+)/) || [])[1] || 'OTHER';
            skuObj.isFirstInPrefix = (prefix !== currentPrefix);
            skuObj.isFirstInGroup = (gKey !== currentGroup);
            if (idx === 0) {
                skuObj.groupRowspan = itemCount;
                skuObj.groupTotal = groupTotals[gKey];
            }
            currentPrefix = prefix;
            currentGroup = gKey;
            masterSkuList.push(skuObj);
        });
    });

    state.masterSkuList = masterSkuList;
    return state;
}

// Render dữ liệu vào thẻ bảng dãn ngang HTML
function renderTable(tableState) {
    const table = document.getElementById('results-table');
    table.innerHTML = '';
    table.style.whiteSpace = 'nowrap';
    
    if (!tableState || !tableState.masterSkuList || tableState.masterSkuList.length === 0) {
        table.innerHTML = '<tbody><tr><td style="text-align:center; padding: 2rem;">Không tìm thấy dữ liệu tải lên.</td></tr></tbody>';
        return;
    }

    const { uniqueDates, masterSkuList, dailySales, displayDateStr } = tableState;

    let theadHtml = `<thead><tr>`;
    theadHtml += `
        <th style="font-size: 0.95em; text-align: left; min-width: 250px; position: sticky; left: 0; background: #23224B; z-index: 10;">Tên sản phẩm</th>
        <th style="font-size: 0.95em; text-align: center; border-right: 3px solid rgba(255,255,255,0.4); min-width: 120px; position: sticky; left: 250px; background: #23224B; z-index: 10;">Mã sản phẩm</th>
    `;
    
    uniqueDates.forEach((date, i) => {
        let dStr = date === "ALL_DATES" ? displayDateStr : date;
        let bLeft = i > 0 ? 'border-left: 2px solid rgba(255,255,255,0.3);' : '';
        theadHtml += `<th style="text-align: center; font-size: 0.95em; ${bLeft} min-width: 110px;">${dStr}</th>`;
    });
    
    theadHtml += `<th style="font-size: 0.95em; text-align: center; border-left: 3px solid rgba(255,255,255,0.4); min-width: 150px; color: #a5b4fc;">Tổng số lượng bán</th>`;
    theadHtml += `<th style="font-size: 0.95em; text-align: center; border-left: 1px solid rgba(255,255,255,0.2); min-width: 120px; color: #fff;">Tổng Nhóm</th>`;
    theadHtml += `</tr></thead>`;
    table.innerHTML = theadHtml;

    let tbody = document.createElement('tbody');
    tbody.id = 'table-body';

    masterSkuList.forEach((skuObj, index) => {
        let tr = document.createElement('tr');
        
        let borderTopStyle = '';
        if (index > 0) {
            if (skuObj.isFirstInPrefix) {
                borderTopStyle = 'border-top: 3px solid #a5b4fc !important;';
            } else if (skuObj.isFirstInGroup) {
                borderTopStyle = 'border-top: 1px solid rgba(165, 180, 252, 0.4) !important;';
            }
        }

        let rowHtml = `
            <td style="${borderTopStyle} position: sticky; left: 0; background: #1C1A3B; z-index: 5;">${skuObj.productName}</td>
            <td style="text-align: center; border-right: 3px solid rgba(255,255,255,0.15); ${borderTopStyle} position: sticky; left: 250px; background: #1C1A3B; z-index: 5;">${skuObj.productCode}</td>
        `;
        
        uniqueDates.forEach((date, i) => {
            let qty = 0;
            if (dailySales[date] && dailySales[date][skuObj.productCode]) {
                qty = dailySales[date][skuObj.productCode];
            }
            
            let bLeft = i > 0 ? 'border-left: 2px solid rgba(255,255,255,0.25);' : '';
            let stylePart = `${borderTopStyle} ${bLeft}`;
            let highlightQty = qty > 0 ? 'color: #fff; font-weight: bold; background: rgba(52, 211, 153, 0.1);' : 'color: rgba(255,255,255,0.2);';

            rowHtml += `<td style="text-align: center; ${stylePart} ${highlightQty}">${qty}</td>`;
        });
        
        let grandTotal = skuObj.total;
        let highlightGrand = grandTotal > 0 ? 'color: #a5b4fc; font-weight: bold; font-size: 1.05em;' : 'color: rgba(165,180,252,0.3);';
        rowHtml += `<td style="text-align: center; border-left: 3px solid rgba(255,255,255,0.15); background: rgba(0,0,0,0.2); ${borderTopStyle} ${highlightGrand}">${grandTotal}</td>`;
        
        if (skuObj.groupRowspan !== undefined) {
             rowHtml += `<td rowspan="${skuObj.groupRowspan}" style="vertical-align: middle; text-align: center; border-left: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05); border-top: 1px solid rgba(165, 180, 252, 0.4); color: #fff; font-weight: bold; font-size: 1.05em;">${skuObj.groupTotal}</td>`;
        }
        
        tr.innerHTML = rowHtml;
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
}

function drawSheet(worksheet, tableState) {
    if (!tableState || !tableState.masterSkuList) return;
    const { uniqueDates, masterSkuList, dailySales, displayDateStr } = tableState;
    let N = uniqueDates.length;

    // --- Header ---
    let headerValues = ["Tên sản phẩm", "Mã sản phẩm"];
    uniqueDates.forEach(date => headerValues.push(date === "ALL_DATES" ? displayDateStr : date));
    headerValues.push("Tổng số lượng bán");
    headerValues.push("Tổng Nhóm");
    
    let headerRow = worksheet.addRow(headerValues);
    headerRow.height = 25;
    headerRow.eachCell((cell, colNum) => {
        cell.font = { bold: true };
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFD966' } };
        if (colNum === 1) cell.alignment.horizontal = 'left';
        
        let borderObj = { bottom: { style: 'medium', color: { argb: 'FF94A3B8' } } };
        if (colNum === 2) borderObj.right = { style: 'medium', color: { argb: 'FF94A3B8' } };
        else if (colNum > 2 && colNum < N + 3) borderObj.right = { style: 'thin', color: { argb: 'FFCBD5E1' } };
        else if (colNum === N + 3) {
            borderObj.left = { style: 'medium', color: { argb: 'FF94A3B8' } };
            borderObj.right = { style: 'medium', color: { argb: 'FF94A3B8' } };
        }
        cell.border = borderObj;
    });

    // --- Dữ liệu ---
    masterSkuList.forEach(skuObj => {
        let rowValues = [skuObj.productName, skuObj.productCode];
        uniqueDates.forEach(date => {
            let qty = 0;
            if (dailySales[date] && dailySales[date][skuObj.productCode]) qty = dailySales[date][skuObj.productCode];
            rowValues.push(qty);
        });
        rowValues.push(skuObj.total);

        let row = worksheet.addRow(rowValues);
        row.height = 20;
        
        row.getCell(1).alignment = { vertical: 'middle', horizontal: 'left' };
        for (let c = 2; c <= N + 3; c++) row.getCell(c).alignment = { vertical: 'middle', horizontal: 'center' };

        for (let i = 0; i < N; i++) {
            let cIndex = i + 3;
            let qtyVal = rowValues[cIndex - 1];
            if (qtyVal > 0) row.getCell(cIndex).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF93C5FD' } };
        }
        
        let totalCell = row.getCell(N + 3);
        totalCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFA7F3D0' } };
        totalCell.font = { bold: true, color: { argb: 'FF064E3B' } };
        
        let groupTotalCell = row.getCell(N + 4);
        groupTotalCell.value = skuObj.groupRowspan !== undefined ? skuObj.groupTotal : "";
        groupTotalCell.alignment = { vertical: 'middle', horizontal: 'center' };
        groupTotalCell.font = { bold: true, color: { argb: 'FF1E293B' } };
        groupTotalCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8FAFC' } };

        row.eachCell((cell, colNum) => {
            let borderObj = {};
            if (skuObj.isFirstInPrefix) borderObj.top = { style: 'medium', color: { argb: 'FF8B5CF6' } };
            else if (skuObj.isFirstInGroup) borderObj.top = { style: 'thin', color: { argb: 'FFD1D5DB' } };

            if (colNum === 2) borderObj.right = { style: 'medium', color: { argb: 'FF94A3B8' } };
            else if (colNum > 2 && colNum < N + 3) borderObj.right = { style: 'medium', color: { argb: 'FFCBD5E1' } };
            else if (colNum === N + 3) {
                borderObj.left = { style: 'medium', color: { argb: 'FF94A3B8' } };
                borderObj.right = { style: 'medium', color: { argb: 'FF94A3B8' } };
            }
            cell.border = borderObj;
        });
    });

    // Merge Cột Tổng Nhóm
    let currentRow = 2;
    masterSkuList.forEach(skuObj => {
        if (skuObj.groupRowspan && skuObj.groupRowspan > 1) {
            worksheet.mergeCells(currentRow, N + 4, currentRow + skuObj.groupRowspan - 1, N + 4);
        }
        currentRow++;
    });

    // Kích thước các cột tĩnh
    worksheet.getColumn(1).width = 40;
    worksheet.getColumn(2).width = 15;
    for (let c = 3; c <= N + 2; c++) worksheet.getColumn(c).width = 12;
    worksheet.getColumn(N + 3).width = 18;
    worksheet.getColumn(N + 4).width = 15;
}

// --- Xuất ra Excel (Dùng ExcelJS 1 Hàng hoặc 2 Hàng) ---
exportBtn.addEventListener('click', async () => {
    let hasData = false;
    if (currentPlatform === 'both') {
       if (appState.tiktok && appState.tiktok.masterSkuList && appState.tiktok.masterSkuList.length > 0) hasData = true;
       if (appState.shopee && appState.shopee.masterSkuList && appState.shopee.masterSkuList.length > 0) hasData = true;
    } else {
       if (appState[currentPlatform] && appState[currentPlatform].masterSkuList && appState[currentPlatform].masterSkuList.length > 0) hasData = true;
    }

    if (!hasData) {
        showAlert("Không Có Dữ Liệu", "Không có dữ liệu hợp lệ để xuất file Excel.");
        return;
    }

    const workbook = new ExcelJS.Workbook();
    let exportFileName = "";

    function createSheetAndDraw(name, stateData) {
        if (!stateData) return;
        const worksheet = workbook.addWorksheet(name, { views: [{ state: 'frozen', xSplit: 2, ySplit: 1, activeCell: 'C2' }] });
        drawSheet(worksheet, stateData);
    }

    let globalDateStr = "";

    if (currentPlatform === 'both') {
         createSheetAndDraw('TikTok', appState.tiktok);
         createSheetAndDraw('Shopee', appState.shopee);
         if (appState.tiktok && appState.tiktok.displayDateStr) globalDateStr = appState.tiktok.displayDateStr;
         else if (appState.shopee && appState.shopee.displayDateStr) globalDateStr = appState.shopee.displayDateStr;
         
         let safeDateStr = globalDateStr ? globalDateStr.replace(/\//g, '_') : "ALL";
         exportFileName = `Thong_Ke_TMDT_${safeDateStr}.xlsx`;
    } else {
         let sheetName = currentPlatform === 'tiktok' ? 'TikTok' : 'Shopee';
         createSheetAndDraw(sheetName, appState[currentPlatform]);
         if (appState[currentPlatform] && appState[currentPlatform].displayDateStr) globalDateStr = appState[currentPlatform].displayDateStr;
         
         let safeDateStr = globalDateStr ? globalDateStr.replace(/\//g, '_') : "ALL";
         exportFileName = currentPlatform === 'tiktok' ? `tiktok_${safeDateStr}.xlsx` : `shopee_${safeDateStr}.xlsx`;
    }

    try {
        const buffer = await workbook.xlsx.writeBuffer();
        saveAs(new Blob([buffer], { type: "application/octet-stream" }), exportFileName);
    } catch (err) {
        console.error("Lỗi xuất thư viện:", err);
        showAlert("Lỗi Xuất File", "Có lỗi xảy ra khi tạo file Excel.");
    }
});
