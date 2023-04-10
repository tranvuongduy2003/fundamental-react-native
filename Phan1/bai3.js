const HocVi = {
  CU_NHAN: "Cử nhân",
  THAC_SI: "Thạc sĩ",
  TIEN_SI: "Tiến sĩ",
};

const ChucVu = {
  TRUONG_PHONG: "Trưởng phòng",
  PHO_PHONG: "Phó phòng",
  NHAN_VIEN: "Nhân viên",
};

const Khoa = {
  CNPM: "Công nghệ phần mềm",
  HTTT: "Hệ thống thông tin",
  KTMT: "Kỹ thuật máy tính",
  MMT: "Mạng máy tính & truyền thông",
  KHMT: "Khoa học máy tính",
  FIT: "Khoa học & kỹ thuật thông tin",
};

const PhongBan = {
  TC_HC: "Tổ chức - Hành chính",
  KH_TC: "Kế hoạch - Tài chính",
  DTDH: "Đào tạo đại học",
  SDH: "Đào tạo SĐH & KHCN",
  QHDN: "Quan hệ đối ngoại",
  QTTB: "Quản trị thiết bị",
  CTSV: "Công tác sinh viên",
  QLCS: "Quản lý cơ sở",
  DLACNTT: "Dữ liệu & CNTT",
  CTDB: "Văn phòng các CTĐB",
  TV: "Thư viện,",
};

const LoaiCanBo = {
  GIANG_VIEN: "Giảng Viên",
  NHAN_VIEN: "Nhân Viên",
};

const bangPhuCap = new Map([
  [HocVi.CU_NHAN, 300],
  [HocVi.THAC_SI, 500],
  [HocVi.TIEN_SI, 1000],
  [ChucVu.TRUONG_PHONG, 2000],
  [ChucVu.PHO_PHONG, 1000],
  [ChucVu.NHAN_VIEN, 500],
]);

const DSCanBo = [
  {
    loai: LoaiCanBo.NHAN_VIEN,
    hoten: "Tran Van A",
    heSoLuong: 1.3,
    phongBan: PhongBan.CTDB,
    chucVu: ChucVu.NHAN_VIEN,
    soNgayCong: 11,
  },
  {
    loai: LoaiCanBo.GIANG_VIEN,
    hoten: "Nguyen Van A",
    heSoLuong: 1.3,
    khoa: Khoa.CNPM,
    trinhDo: HocVi.CU_NHAN,
    soTietDay: 10,
  },
  {
    loai: LoaiCanBo.NHAN_VIEN,
    hoten: "Tran Van C",
    heSoLuong: 1.2,
    phongBan: PhongBan.DLACNTT,
    chucVu: ChucVu.TRUONG_PHONG,
    soNgayCong: 13,
  },
  {
    loai: LoaiCanBo.NHAN_VIEN,
    hoten: "Tran Van D",
    heSoLuong: 1.3,
    phongBan: PhongBan.DTDH,
    chucVu: ChucVu.TRUONG_PHONG,
    soNgayCong: 14,
  },
  {
    loai: LoaiCanBo.GIANG_VIEN,
    hoten: "Nguyen Van B",
    heSoLuong: 1.5,
    khoa: Khoa.HTTT,
    trinhDo: HocVi.THAC_SI,
    soTietDay: 11,
  },
  {
    loai: LoaiCanBo.NHAN_VIEN,
    hoten: "Tran Van E",
    heSoLuong: 1.4,
    phongBan: PhongBan.KH_TC,
    chucVu: ChucVu.PHO_PHONG,
    soNgayCong: 15,
  },
  {
    loai: LoaiCanBo.GIANG_VIEN,
    hoten: "Nguyen Van C",
    heSoLuong: 1.7,
    khoa: Khoa.FIT,
    trinhDo: HocVi.TIEN_SI,
    soTietDay: 12,
  },
  {
    loai: LoaiCanBo.NHAN_VIEN,
    hoten: "Tran Van F",
    heSoLuong: 1.5,
    phongBan: PhongBan.QHDN,
    chucVu: ChucVu.NHAN_VIEN,
    soNgayCong: 10,
  },
  {
    loai: LoaiCanBo.GIANG_VIEN,
    hoten: "Nguyen Van D",
    heSoLuong: 1.1,
    khoa: Khoa.KHMT,
    trinhDo: HocVi.TIEN_SI,
    soTietDay: 13,
  },
  {
    loai: LoaiCanBo.GIANG_VIEN,
    hoten: "Nguyen Van E",
    heSoLuong: 1.3,
    khoa: Khoa.KTMT,
    trinhDo: HocVi.THAC_SI,
    soTietDay: 14,
  },
  {
    loai: LoaiCanBo.NHAN_VIEN,
    hoten: "Tran Van B",
    heSoLuong: 1.1,
    phongBan: PhongBan.CTSV,
    chucVu: ChucVu.PHO_PHONG,
    soNgayCong: 12,
  },
  {
    loai: LoaiCanBo.GIANG_VIEN,
    hoten: "Nguyen Van F",
    heSoLuong: 1.3,
    khoa: Khoa.MMT,
    trinhDo: HocVi.CU_NHAN,
    soTietDay: 15,
  },
];

class Canbo {
  hoTen;
  phuCap;
  heSoLuong;
  loai;

  constructor(hoTen, heSoLuong) {
    this.hoTen = hoTen;
    this.heSoLuong = heSoLuong;
  }

  display() {}
  getLuong() {}
}

class GiangVien extends Canbo {
  khoa;
  trinhDo;
  soTietDay;

  constructor(hoten, heSoLuong, khoa, trinhDo, soTietDay) {
    super();
    this.hoTen = hoten;
    this.heSoLuong = heSoLuong;
    this.loai = LoaiCanBo.GIANG_VIEN;
    this.khoa = khoa;
    this.soTietDay = soTietDay;
    this.trinhDo = trinhDo;
    this.phuCap = bangPhuCap.get(trinhDo);
  }

  display() {
    const displayText = `Hoten: ${this.hoTen} - Khoa: ${this.khoa} - Trinh do: ${this.trinhDo} - So tiet day: ${this.soTietDay} - Phu cap: ${this.phuCap} - He so luong: ${this.heSoLuong}`;
    console.log(displayText);
  }

  getLuong() {
    return this.heSoLuong * 1130 + this.phuCap + this.soTietDay * 85;
  }
}

class NhanVien extends Canbo {
  phongBan;
  soNgayCong;
  chucVu;

  constructor(hoten, heSoLuong, phongBan, soNgayCong, chucVu) {
    super();
    this.hoTen = hoten;
    this.heSoLuong = heSoLuong;
    this.loai = LoaiCanBo.NHAN_VIEN;
    this.phongBan = phongBan;
    this.soNgayCong = soNgayCong;
    this.chucVu = chucVu;
    this.phuCap = bangPhuCap.get(chucVu);
  }

  display() {
    const displayText = `Hoten: ${this.hoTen} - Phong ban: ${this.phongBan} - Chuc vu: ${this.chucVu} - So ngay cong: ${this.soNgayCong} - Phu cap: ${this.phuCap} - He so luong: ${this.heSoLuong}`;
    console.log(displayText);
  }

  getLuong() {
    return this.heSoLuong * 1130 + this.phuCap + this.soNgayCong * 250;
  }
}

function getGiangVienLuongCaoNhat(dsGiangVien) {
  let giangVienTop = dsGiangVien[0];
  dsGiangVien.forEach((giangVien) => {
    if (giangVien.getLuong() > giangVienTop.getLuong()) {
      giangVienTop = giangVien;
    }
  });
  return giangVienTop;
}

function printCanbo(dsCanBo) {
  dsCanBo.forEach((canbo) => {
    canbo.display();
  });
}

function printGiangVienLuongCaoNhat(dsCanBo) {
  let luongMax = 0;
  dsCanBo.forEach((canbo) => {
    if (canbo.getLuong() > luongMax) {
      luongMax = canbo.getLuong();
    }
  });

  dsCanBo.forEach((canbo) => {
    if (canbo.getLuong() === luongMax) {
      canbo.display();
    }
  });
}

function main() {
  const dsCanBo = DSCanBo.map((canbo) => {
    let person;
    switch (canbo.loai) {
      case LoaiCanBo.GIANG_VIEN: {
        const { hoten, heSoLuong, khoa, trinhDo, soTietDay } = canbo;
        person = new GiangVien(hoten, heSoLuong, khoa, trinhDo, soTietDay);
        break;
      }
      case LoaiCanBo.NHAN_VIEN: {
        const { hoten, heSoLuong, phongBan, soNgayCong, chucVu } = canbo;
        person = new NhanVien(hoten, heSoLuong, phongBan, soNgayCong, chucVu);
        break;
      }
      default:
        break;
    }
    return person;
  });

  // In danh sach can bo
  console.log("In danh sach can bo: ");
  printCanbo(dsCanBo);

  //break line
  console.log();

  // In Giang vien luong cao nhat
  console.log("In Giang vien luong cao nhat: ");
  printGiangVienLuongCaoNhat(dsCanBo);
}

main();
