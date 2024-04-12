-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2024 at 01:16 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sguedu`
--

-- --------------------------------------------------------

--
-- Table structure for table `ctlichthi`
--

CREATE TABLE `ctlichthi` (
  `STT` int(11) NOT NULL,
  `MASO` char(10) NOT NULL,
  `STTPHONGTHI` int(11) DEFAULT NULL,
  `TENSV` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ctlichthi`
--

INSERT INTO `ctlichthi` (`STT`, `MASO`, `STTPHONGTHI`, `TENSV`) VALUES
(1, '3120410412', 20, 'Nguyễn Thiên Phúc'),
(2, '3120410412', 25, 'Nguyễn Thiên Phúc');

-- --------------------------------------------------------

--
-- Table structure for table `ctnkhk`
--

CREATE TABLE `ctnkhk` (
  `MSSV` char(10) NOT NULL,
  `STTNKHK` int(11) NOT NULL,
  `DIEMQTHE10` float DEFAULT NULL,
  `DIEMQTHE4` float DEFAULT NULL,
  `HPDADONG` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `diem`
--

CREATE TABLE `diem` (
  `MAMH` char(6) NOT NULL,
  `MASO` char(10) NOT NULL,
  `STT` int(11) NOT NULL,
  `THUCHANH` bit(1) NOT NULL,
  `DIEMQUATRINH10` float DEFAULT NULL,
  `DIEMCUOIKY10` float DEFAULT NULL,
  `DIEMTONGKET10` float DEFAULT NULL,
  `DIEMTONGKET4` float DEFAULT NULL,
  `XEPLOAI` char(1) DEFAULT NULL,
  `KETQUA` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `diem`
--

INSERT INTO `diem` (`MAMH`, `MASO`, `STT`, `THUCHANH`, `DIEMQUATRINH10`, `DIEMCUOIKY10`, `DIEMTONGKET10`, `DIEMTONGKET4`, `XEPLOAI`, `KETQUA`) VALUES
('841020', '3120410412', 1, b'0', 8.5, 8, 8.25, 3, 'B', b'1'),
('841021', '3120410412', 1, b'0', 9, 8, 8.5, 4, 'A', b'1'),
('841044', '3120410412', 1, b'0', 8, 7.5, 7.75, 3, 'B', b'1'),
('841108', '3120410412', 1, b'0', 7, 7, 7, 3, 'B', b'1'),
('841110', '3120410412', 1, b'0', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `khoa`
--

CREATE TABLE `khoa` (
  `MAKHOA` char(10) NOT NULL,
  `TENKHOA` varchar(55) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `TRUONGKHOA` varchar(55) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `PHONG` varchar(15) DEFAULT NULL,
  `SDT` char(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `khoa`
--

INSERT INTO `khoa` (`MAKHOA`, `TENKHOA`, `TRUONGKHOA`, `PHONG`, `SDT`) VALUES
('CNTT', 'CÔNG NGHỆ THÔNG TIN', 'PHẠM THẾ BẢO', 'C301', '093765365'),
('DTVT', 'ĐIỆN - ĐIỆN TỬ', 'TRẦN TUẤN NGỌC', 'C305', '099875764'),
('LUXH', 'LUẬT - XÃ HỘI HỌC', 'NGUYỄN THANH TRÚC', 'C201', '093764543'),
('NNDL', 'NGOẠI NGỮ - DU LỊCH', 'LÊ TUẤN MINH', 'C203', '099984742'),
('TCKT', 'TÀI CHÍNH KẾ TOÁN', 'LÊ HUYỀN TRÂN', 'C205', '098376622');

-- --------------------------------------------------------

--
-- Table structure for table `lichthi`
--

CREATE TABLE `lichthi` (
  `STT` int(11) NOT NULL,
  `MAMH` int(11) DEFAULT NULL,
  `TENMH` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `SISO` int(11) DEFAULT NULL,
  `NGAYTHI` date DEFAULT NULL,
  `GIOBD` time DEFAULT NULL,
  `PHONGTHI` varchar(5) DEFAULT NULL,
  `COSO` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lichthi`
--

INSERT INTO `lichthi` (`STT`, `MAMH`, `TENMH`, `SISO`, `NGAYTHI`, `GIOBD`, `PHONGTHI`, `COSO`) VALUES
(1, 841020, 'Cơ sở lập trình', 15, '2024-04-23', '09:00:00', 'CA505', 'C'),
(2, 841044, 'Lập trình hướng đối tượng', 20, '2024-04-24', '07:00:00', 'CE305', 'C');

-- --------------------------------------------------------

--
-- Table structure for table `lop`
--

CREATE TABLE `lop` (
  `MALOP` char(10) NOT NULL,
  `KHOA` char(10) DEFAULT NULL,
  `NIENKHOA` varchar(80) DEFAULT NULL,
  `SISO` int(11) DEFAULT NULL,
  `CVHT` varchar(55) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lop`
--

INSERT INTO `lop` (`MALOP`, `KHOA`, `NIENKHOA`, `SISO`, `CVHT`) VALUES
('DAN1203', 'NNDL', '2020-2025', 50, 'NGỌC ANH'),
('DCT1201', 'CNTT', '2020-2025', 43, 'LÃNG PHIÊU'),
('DCT12010', 'CNTT', '2020-2025', 55, 'HỮU TRÍ'),
('DCT1203', 'CNTT', '2020-2025', 45, 'NGỌC LOAN'),
('DCT1204', 'CNTT', '2020-2025', 40, 'TẤN KHOA'),
('DCT1205', 'CNTT', '2020-2025', 35, 'TUẤN ĐĂNG'),
('DCT1207', 'CNTT', '2020-2025', 40, 'THẾ BẢO'),
('DCT1209', 'CNTT', '2020-2025', 50, 'HỒNG ANH'),
('DKE1201', 'DTVT', '2020-2025', 35, 'MINH TRÍ'),
('DNT1205', 'TCKT', '2020-2025', 55, 'QUỐC CƯỜNG'),
('LUX1208', 'LUXH', '2020-2025', 45, 'THẢO MY');

-- --------------------------------------------------------

--
-- Table structure for table `monhoc`
--

CREATE TABLE `monhoc` (
  `MAMH` char(6) NOT NULL,
  `TENMH` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `NHOM` int(11) NOT NULL,
  `SISO` int(11) DEFAULT NULL,
  `STC` int(11) DEFAULT NULL,
  `LOP` char(10) DEFAULT NULL,
  `THU` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `TIETBD` int(11) DEFAULT NULL,
  `SOTIET` int(11) DEFAULT NULL,
  `PHONG` varchar(5) DEFAULT NULL,
  `GIANGVIEN` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `TUANBD` int(11) DEFAULT NULL,
  `HOCPHI` float DEFAULT NULL,
  `KHOA` char(10) DEFAULT NULL,
  `THUCHANH` bit(1) NOT NULL,
  `ISSELECTED` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `monhoc`
--

INSERT INTO `monhoc` (`MAMH`, `TENMH`, `NHOM`, `SISO`, `STC`, `LOP`, `THU`, `TIETBD`, `SOTIET`, `PHONG`, `GIANGVIEN`, `TUANBD`, `HOCPHI`, `KHOA`, `THUCHANH`, `ISSELECTED`) VALUES
('841020', 'CƠ SỞ LẬP TRÌNH', 1, 45, 3, 'DCT1204', 'NĂM', 1, 3, 'A302', 'NGUYỄN NHỰT ĐÔNG', 1, 1110000, 'CNTT', b'0', b'0'),
('841020', 'CƠ SỞ LẬP TRÌNH', 1, 45, 3, 'DCT1204', 'NĂM', 4, 2, 'A107', 'NGUYỄN NHỰT ĐÔNG', 1, 1110000, 'CNTT', b'1', b'0'),
('841021', 'KIẾN TRÚC MÁY TÍNH', 3, 50, 3, 'DCT1205', 'TƯ', 1, 2, 'E102', 'NGUYỄN TẤN CÔNG', 1, 1110000, 'CNTT', b'0', b'0'),
('841021', 'KIẾN TRÚC MÁY TÍNH', 3, 50, 3, 'DCT1205', 'TƯ', 3, 2, 'A105', 'NGUYỄN TẤN CÔNG', 1, 1110000, 'CNTT', b'1', b'0'),
('841044', 'LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG', 2, 49, 4, 'DCT1206', 'HAI', 1, 2, 'E402', 'PHẠM HỒNG ANH', 1, 1480000, 'CNTT', b'0', b'0'),
('841044', 'LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG', 2, 49, 4, 'DCT1206', 'BA', 6, 2, 'A003', 'PHẠM HỒNG ANH', 1, 1480000, 'CNTT', b'1', b'0'),
('841108', 'CẤU TRÚC DỮ LIỆU VÀ GIẢI THUẬT', 1, 49, 4, 'DCT1208', 'BA', 3, 2, 'E106', 'PHAN TẤN QUỐC', 1, 1480000, 'CNTT', b'0', b'0'),
('841108', 'CẤU TRÚC DỮ LIỆU VÀ GIẢI THUẬT', 1, 49, 4, 'DCT1208', 'BA', 1, 2, 'A106', 'PHAN TẤN QUỐC', 1, 1480000, 'CNTT', b'1', b'0'),
('841109', 'CƠ SỞ DỮ LIỆU', 2, 50, 4, 'DCT1206', 'HAI', 1, 3, 'E602', 'TRƯƠNG TẤN KHOA', 1, 1480000, 'CNTT', b'0', b'0'),
('841109', 'CƠ SỞ DỮ LIỆU', 2, 50, 4, 'DCT1206', 'TƯ', 4, 2, 'A203', 'TRƯƠNG TẤN KHOA', 1, 1480000, 'CNTT', b'1', b'0'),
('841110', 'CƠ SỞ TRÍ TUỆ NHÂN TẠO', 1, 54, 4, 'DCT1206', 'SÁU', 1, 3, 'E502', 'NGUYỄN TUẤN ĐĂNG', 1, 1480000, 'CNTT', b'0', b'0'),
('841110', 'CƠ SỞ TRÍ TUỆ NHÂN TẠO', 1, 54, 4, 'DCT1206', 'BA', 6, 2, 'A103', 'NGUYỄN TUẤN ĐĂNG', 1, 1480000, 'CNTT', b'1', b'0'),
('841303', 'KỸ THUẬT LẬP TRÌNH', 2, 40, 4, 'DCT1206', 'SÁU', 1, 2, 'E105', 'PHAN TẤN QUỐC', 1, 1480000, 'CNTT', b'0', b'0'),
('841303', 'KỸ THUẬT LẬP TRÌNH', 2, 40, 4, 'DCT1206', 'SÁU', 3, 2, 'A108', 'PHAN TẤN QUỐC', 1, 1480000, 'CNTT', b'1', b'0'),
('841403', 'CẤU TRÚC RỜI RẠC', 4, 50, 4, 'DCT1205', 'TƯ', 6, 2, 'E106', 'PHẠM THẾ BẢO', 1, 1480000, 'CNTT', b'0', b'0'),
('841403', 'CẤU TRÚC RỜI RẠC', 4, 50, 4, 'DCT1205', 'TƯ', 8, 2, 'A109', 'PHẠM THẾ BẢO', 1, 1480000, 'CNTT', b'1', b'0'),
('841404', 'MẠNG MÁY TÍNH', 1, 50, 3, 'DCT1208', 'HAI', 4, 2, 'E106', 'BÙI CÔNG GIAO', 1, 1110000, 'CNTT', b'0', b'0'),
('841404', 'MẠNG MÁY TÍNH', 1, 50, 3, 'DCT1208', 'HAI', 6, 2, 'A106', 'BÙI CÔNG GIAO', 1, 1110000, 'CNTT', b'1', b'0');

-- --------------------------------------------------------

--
-- Table structure for table `nienkhoahocky`
--

CREATE TABLE `nienkhoahocky` (
  `STT` int(11) NOT NULL,
  `HOCKY` int(11) DEFAULT NULL,
  `TGBATDAU` date DEFAULT NULL,
  `TGKETTHUC` date DEFAULT NULL,
  `NIENKHOA` varchar(35) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `HPCHUAGIAM` float DEFAULT NULL,
  `HPMIENGIAM` float DEFAULT NULL,
  `HPPHAITHU` float DEFAULT NULL,
  `HPDATHU` float DEFAULT NULL,
  `HPCONNO` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nienkhoahocky`
--

INSERT INTO `nienkhoahocky` (`STT`, `HOCKY`, `TGBATDAU`, `TGKETTHUC`, `NIENKHOA`, `HPCHUAGIAM`, `HPMIENGIAM`, `HPPHAITHU`, `HPDATHU`, `HPCONNO`) VALUES
(1, 2, '2024-03-06', '2024-05-20', '2024-2025', NULL, NULL, NULL, NULL, NULL),
(2, 1, '2024-07-20', '2024-12-07', '2025-2026', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tailieu`
--

CREATE TABLE `tailieu` (
  `STT` int(11) NOT NULL,
  `TIEUDE` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `NGAYDANG` date DEFAULT NULL,
  `LINKTAI` text DEFAULT NULL,
  `MASO` char(10) DEFAULT NULL,
  `TENMONHOC` varchar(350) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tailieu`
--

INSERT INTO `tailieu` (`STT`, `TIEUDE`, `NGAYDANG`, `LINKTAI`, `MASO`, `TENMONHOC`) VALUES
(1, 'Cấu trúc rời rạc chương 1', '2024-03-31', 'https://drive.google.com/uc?export=download&id=1-A71jAvX53fgd2RrCEyo-_FnY-pAeHKt', '3120410412', 'Cấu trúc rời rạc'),
(2, 'Cấu trúc rời rạc chương 2', '2024-03-31', 'https://drive.google.com/uc?export=download&id=1KKQSTAyzV1LDB3DqOaZPxyWNfo68pzrs', '3120410412', 'Cấu trúc rời rạc'),
(3, 'Cấu trúc rời rạc chương 3', '2024-04-01', 'https://drive.google.com/uc?export=download&id=1mMjw9BVIKkDUSv7RYIue57oHLGXL3uoe', '3120410412', 'Cấu trúc rời rạc'),
(4, 'Cấu trúc rời rạc chương 4', '2024-04-01', 'https://drive.google.com/uc?export=download&id=1hOp-xNPNmt-xRvt8MYfGu0UAPMwgRUfS', '3120410412', 'Cấu trúc rời rạc'),
(5, 'Cấu trúc rời rạc chương 5', '2024-04-01', 'https://drive.google.com/uc?export=download&id=19Z4bCGBlLH52UeH06LXOQuIktRCGSQTM', '3120410412', 'Cấu trúc rời rạc'),
(6, 'Cấu trúc rời rạc chương 6', '2024-04-01', 'https://drive.google.com/uc?export=download&id=1tH13Fb_Y9l-X3TvyNrj087r4nv8tBGZJ', '3120410412', 'Cấu trúc rời rạc');

-- --------------------------------------------------------

--
-- Table structure for table `thongbao`
--

CREATE TABLE `thongbao` (
  `STT` int(11) NOT NULL,
  `NGAYCHINHSUA` datetime DEFAULT NULL,
  `TIEUDE` varchar(55) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `NOIDUNG` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `MASO` char(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `thongbao`
--

INSERT INTO `thongbao` (`STT`, `NGAYCHINHSUA`, `TIEUDE`, `NOIDUNG`, `MASO`) VALUES
(1, '2024-04-09 15:31:15', 'Lịch đăng ký học phần hk3', 'Sinh viên đăng ký học phần tại đây https://dkmh.com', '3115885312'),
(2, '2024-04-08 15:32:41', 'Thông tin dự lễ tốt nghiệp đợt 1 2024-2025', 'Do giới hạn không gian yêu cầu sinh viên chỉ mời tối đa 3 người dự lễ tốt nghiệp', '3115885312'),
(3, '2024-04-04 15:34:23', 'Thông tin đi quân sự học phần quốc phòng III, IV', 'Sinh viên đóng 326.000 tiền ăn, ở tại trường Nguyễn Bỉnh Khiêm', '3115885312'),
(4, '2024-04-25 15:36:07', 'Đánh giá giảng dạy học kỳ II', 'Sinh viên tham gia đánh giá giảng dạy tại link ...', '3115885312');

-- --------------------------------------------------------

--
-- Table structure for table `thongtincanhan`
--

CREATE TABLE `thongtincanhan` (
  `MASO` char(10) NOT NULL,
  `HOTEN` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `NGAYSINH` date DEFAULT NULL,
  `DIACHI` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `EMAIL` varchar(350) NOT NULL,
  `LOP` char(10) DEFAULT NULL,
  `NGANH` varchar(55) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `KHOA` char(10) DEFAULT NULL,
  `NIENKHOA` varchar(55) DEFAULT NULL,
  `HINHANH` text DEFAULT NULL,
  `MATKHAU` varchar(15) DEFAULT NULL,
  `QUYEN` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `thongtincanhan`
--

INSERT INTO `thongtincanhan` (`MASO`, `HOTEN`, `NGAYSINH`, `DIACHI`, `EMAIL`, `LOP`, `NGANH`, `KHOA`, `NIENKHOA`, `HINHANH`, `MATKHAU`, `QUYEN`) VALUES
('3115885312', 'Từ Lãng Phiêu', '1978-04-02', '122/4 Lũy Bán Bích Q Tân Phú', 'tulangphieu@sguedu.com', 'DCT1203', 'Kỹ thuật phần mềm', 'CNTT', '2020-2025', '../Storage/Avatar/TuLangPhieu-e1699612530472.jpg', '12345', b'1'),
('3120410030', 'Nguyễn Đức Anh', '2002-03-11', 'Hẻm 15, Đường 835B, Xã Phước Lý, Huyện Cần Giuộc, Tỉnh Long An', 'shinichikudo@gmail.com', 'DCT1204', 'Kỹ thuật phần mềm', 'CNTT', '2020-2025', '../Storage/Avatar/DucAnhavatar.PNG', '12345', b'0'),
('3120410046', 'Đặng Chí Bảo', '2002-10-03', 'Phường Lạc Đạo, Thành Phố Phan Thiết, Bình Thuận', 'chibaodang@gmail.com', 'DCT1209', 'Kỹ thuật phần mềm', 'CNTT', '2020-2025', '../Storage/Avatar/Chibaoavatar.PNG', '12345', b'0'),
('3120410232', 'Lê Bá Khải', '2002-05-12', '12 Đường Quang Trung Q12 TPCHM', 'lbkhai@gamil.com', 'DCT12010', 'Kỹ thuật phần mềm', 'CNTT', '2020-2025', '../Storage/Avatar/Bakhaiavatar.png', '12345', b'0'),
('3120410412', 'Nguyễn Thiên Phúc', '2002-03-02', '66/2/5A Tôn Thất Thuyết P15 Q4', 'paulphuc98@gmail.com', 'DCT1203', 'Kỹ thuật phần mềm', 'CNTT', '2020-2025', '../Storage/Avatar/20220326_112243.jpg', 'serenata02', b'0'),
('3120410413', 'Trang Thanh Phúc', '2002-05-15', '123 Dương Bá Trạc Q8 TPHCM', 'trangthanhphuc91@gmail.com', 'DCT1204', 'KTPM', 'CNTT', '2020-2025', '../Storage/Avatar/Capture.PNG', NULL, b'0');

-- --------------------------------------------------------

--
-- Table structure for table `ykien`
--

CREATE TABLE `ykien` (
  `STT` int(11) NOT NULL,
  `THOIGIAN` datetime DEFAULT NULL,
  `TIEUDE` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `NOIDUNG` varchar(550) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `MASO` char(10) DEFAULT NULL,
  `STATUS` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ykien`
--

INSERT INTO `ykien` (`STT`, `THOIGIAN`, `TIEUDE`, `NOIDUNG`, `MASO`, `STATUS`) VALUES
(1, '2024-04-10 10:29:41', 'Wifi khu tự học B yếu', 'Wifi ở khu tự học B quá yếu, em mong nhà trường cải thiện nhiều hơn', '3120410030', b'0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ctlichthi`
--
ALTER TABLE `ctlichthi`
  ADD PRIMARY KEY (`STT`,`MASO`),
  ADD KEY `MASO` (`MASO`);

--
-- Indexes for table `ctnkhk`
--
ALTER TABLE `ctnkhk`
  ADD PRIMARY KEY (`MSSV`,`STTNKHK`),
  ADD KEY `STTNKHK` (`STTNKHK`);

--
-- Indexes for table `diem`
--
ALTER TABLE `diem`
  ADD PRIMARY KEY (`MASO`,`MAMH`,`STT`,`THUCHANH`),
  ADD KEY `MAMH` (`MAMH`),
  ADD KEY `STT` (`STT`);

--
-- Indexes for table `khoa`
--
ALTER TABLE `khoa`
  ADD PRIMARY KEY (`MAKHOA`);

--
-- Indexes for table `lichthi`
--
ALTER TABLE `lichthi`
  ADD PRIMARY KEY (`STT`);

--
-- Indexes for table `lop`
--
ALTER TABLE `lop`
  ADD PRIMARY KEY (`MALOP`);

--
-- Indexes for table `monhoc`
--
ALTER TABLE `monhoc`
  ADD PRIMARY KEY (`MAMH`,`NHOM`,`THUCHANH`),
  ADD KEY `KHOA` (`KHOA`);

--
-- Indexes for table `nienkhoahocky`
--
ALTER TABLE `nienkhoahocky`
  ADD PRIMARY KEY (`STT`);

--
-- Indexes for table `tailieu`
--
ALTER TABLE `tailieu`
  ADD PRIMARY KEY (`STT`),
  ADD KEY `MASO` (`MASO`);

--
-- Indexes for table `thongbao`
--
ALTER TABLE `thongbao`
  ADD PRIMARY KEY (`STT`),
  ADD KEY `MASO` (`MASO`);

--
-- Indexes for table `thongtincanhan`
--
ALTER TABLE `thongtincanhan`
  ADD PRIMARY KEY (`MASO`),
  ADD KEY `LOP` (`LOP`),
  ADD KEY `KHOA` (`KHOA`);

--
-- Indexes for table `ykien`
--
ALTER TABLE `ykien`
  ADD PRIMARY KEY (`STT`),
  ADD KEY `MASO` (`MASO`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ctlichthi`
--
ALTER TABLE `ctlichthi`
  MODIFY `STT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `lichthi`
--
ALTER TABLE `lichthi`
  MODIFY `STT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `nienkhoahocky`
--
ALTER TABLE `nienkhoahocky`
  MODIFY `STT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tailieu`
--
ALTER TABLE `tailieu`
  MODIFY `STT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `thongbao`
--
ALTER TABLE `thongbao`
  MODIFY `STT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ykien`
--
ALTER TABLE `ykien`
  MODIFY `STT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ctlichthi`
--
ALTER TABLE `ctlichthi`
  ADD CONSTRAINT `ctlichthi_ibfk_1` FOREIGN KEY (`STT`) REFERENCES `lichthi` (`STT`),
  ADD CONSTRAINT `ctlichthi_ibfk_2` FOREIGN KEY (`MASO`) REFERENCES `thongtincanhan` (`MASO`);

--
-- Constraints for table `ctnkhk`
--
ALTER TABLE `ctnkhk`
  ADD CONSTRAINT `ctnkhk_ibfk_1` FOREIGN KEY (`MSSV`) REFERENCES `thongtincanhan` (`MASO`),
  ADD CONSTRAINT `ctnkhk_ibfk_2` FOREIGN KEY (`STTNKHK`) REFERENCES `nienkhoahocky` (`STT`);

--
-- Constraints for table `diem`
--
ALTER TABLE `diem`
  ADD CONSTRAINT `diem_ibfk_1` FOREIGN KEY (`MASO`) REFERENCES `thongtincanhan` (`MASO`),
  ADD CONSTRAINT `diem_ibfk_2` FOREIGN KEY (`MAMH`) REFERENCES `monhoc` (`MAMH`),
  ADD CONSTRAINT `diem_ibfk_3` FOREIGN KEY (`STT`) REFERENCES `nienkhoahocky` (`STT`);

--
-- Constraints for table `monhoc`
--
ALTER TABLE `monhoc`
  ADD CONSTRAINT `monhoc_ibfk_1` FOREIGN KEY (`KHOA`) REFERENCES `khoa` (`MAKHOA`);

--
-- Constraints for table `tailieu`
--
ALTER TABLE `tailieu`
  ADD CONSTRAINT `tailieu_ibfk_1` FOREIGN KEY (`MASO`) REFERENCES `thongtincanhan` (`MASO`);

--
-- Constraints for table `thongbao`
--
ALTER TABLE `thongbao`
  ADD CONSTRAINT `thongbao_ibfk_1` FOREIGN KEY (`MASO`) REFERENCES `thongtincanhan` (`MASO`);

--
-- Constraints for table `thongtincanhan`
--
ALTER TABLE `thongtincanhan`
  ADD CONSTRAINT `thongtincanhan_ibfk_1` FOREIGN KEY (`LOP`) REFERENCES `lop` (`MALOP`),
  ADD CONSTRAINT `thongtincanhan_ibfk_2` FOREIGN KEY (`KHOA`) REFERENCES `khoa` (`MAKHOA`);

--
-- Constraints for table `ykien`
--
ALTER TABLE `ykien`
  ADD CONSTRAINT `ykien_ibfk_1` FOREIGN KEY (`MASO`) REFERENCES `thongtincanhan` (`MASO`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
