var nutPhai = document.querySelector('.nuts b.phai'),
    nutTrai = document.querySelector('.nuts b.trai'),
    slides = document.querySelectorAll('.cacslide ul li'),
    chiSoHienTai = 0,
    soLuongSlide = slides.length,
    trangThai = 'dangDungYen';
    
// xử lý nút phải
var chuyenSlideNutPhai = function (){

    // kiểm tra trạng thái
    if (trangThai == 'dangChuyenDong') { // nếu đang chuyển động k cho next
        return false;
    }
    trangThai = 'dangChuyenDong';
    trangThai2ChuyenDong = 0;

    // xác định chỉ số phần tử tiếp theo dựa trên phần tử hiện tại   
    var phanTuHienTai = slides[chiSoHienTai]; // lấy ra phần tử hiện tại
    if (chiSoHienTai < soLuongSlide - 1) { // chưa đến cuối -> thêm 1 vị trí
        chiSoHienTai += 1;
    }
    else { // khi đến slide cuối cho chỉ số về lại slide đầu
        chiSoHienTai = 0;
    }
    var phanTuTiepTheo = slides[chiSoHienTai];   

    // check chuyển động kết thúc
    var xuLyHienTaiKetThucCD = function (){
        this.classList.remove('active');
        this.classList.remove('bienMatKhiNext'); 
        trangThai2ChuyenDong++;
        if (trangThai2ChuyenDong == 2) { // sau khi chuyển động xong chuyển trạng thái về đứng yên và có thể bấm tiếp tục
            trangThai = 'dangDungYen';
        }       
    }
    phanTuHienTai.addEventListener('webkitAnimationEnd', xuLyHienTaiKetThucCD);

    var xuLyTiepTheoKetThucCD = function (){
        this.classList.add('active');
        this.classList.remove('hienKhiNext');
        trangThai2ChuyenDong++;
        if (trangThai2ChuyenDong == 2) { // sau khi chuyển động xong chuyển trạng thái về đứng yên và có thể bấm tiếp tục
            trangThai = 'dangDungYen';
        }   
    }
    phanTuTiepTheo.addEventListener('webkitAnimationEnd', xuLyTiepTheoKetThucCD);

     // tạo chuyển động sau khi xác định 2 phần tử
     phanTuHienTai.classList.add('bienMatKhiNext');
     phanTuTiepTheo.classList.add('hienKhiNext');

    //  trangThai = 'dangDungYen';
    
};

nutPhai.addEventListener('click', chuyenSlideNutPhai);
// xong nút phải

// xử lý nút trái
var chuyenSlideNutTrai = function (){

    // kiểm tra trạng thái
    if (trangThai == 'dangChuyenDong') { // nếu đang chuyển động k cho next
        return false;
    }
    trangThai = 'dangChuyenDong';
    trangThai2ChuyenDong = 0;

    var phanTuHienTai = slides[chiSoHienTai]; // lấy ra phần tử hiện tại
    if (chiSoHienTai > 0) { // nếu lớn hơn 0 là chưa về đầu -> trừ đi 1 vị trí
        chiSoHienTai--;
    }
    else { // đang ở đầu nên k lùi được nữa -> cho vị trí bằng vị trí cuối cùng của slide
        chiSoHienTai = soLuongSlide - 1;
    }
    var phanTuTiepTheo = slides[chiSoHienTai];
    
    // check chuyển động kết thúc
    var xuLyHienTaiKetThucCD = function (){
        this.classList.remove('active');
        this.classList.remove('bienMatKhiPrev'); 
        trangThai2ChuyenDong++;
        if (trangThai2ChuyenDong == 2) { // sau khi chuyển động xong chuyển trạng thái về đứng yên và có thể bấm tiếp tục
            trangThai = 'dangDungYen';
        }       
    }
    phanTuHienTai.addEventListener('webkitAnimationEnd', xuLyHienTaiKetThucCD);

    var xuLyTiepTheoKetThucCD = function (){
        this.classList.add('active');
        this.classList.remove('hienKhiPrev');
        trangThai2ChuyenDong++;
        if (trangThai2ChuyenDong == 2) { // sau khi chuyển động xong chuyển trạng thái về đứng yên và có thể bấm tiếp tục
            trangThai = 'dangDungYen';
        }   
    }
    phanTuTiepTheo.addEventListener('webkitAnimationEnd', xuLyTiepTheoKetThucCD);

     // tạo chuyển động sau khi xác định 2 phần tử
     phanTuHienTai.classList.add('bienMatKhiPrev');
     phanTuTiepTheo.classList.add('hienKhiPrev');
    
};

nutTrai.addEventListener('click', chuyenSlideNutTrai);
// xong nút trái


