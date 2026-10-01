USE master;
GO
IF DB_ID('SmartLibrary2026DB') IS NOT NULL
BEGIN
    ALTER DATABASE SmartLibrary2026DB SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE SmartLibrary2026DB;
END
GO
CREATE DATABASE SmartLibrary2026DB;
GO
USE SmartLibrary2026DB;
GO

CREATE TABLE CATEGORY (
    CategoryID VARCHAR(10) NOT NULL,
    CategoryName NVARCHAR(50) NOT NULL,
    ShelfLocation VARCHAR(20) NULL,
    Description NVARCHAR(100) NULL,
    CONSTRAINT PK_CATEGORY PRIMARY KEY (CategoryID)
);
GO

CREATE TABLE AUTHOR (
    AuthorID VARCHAR(10) NOT NULL,
    AuthorName NVARCHAR(50) NOT NULL,
    Biography NVARCHAR(100) NULL,
    Country NVARCHAR(30) NULL,
    CONSTRAINT PK_AUTHOR PRIMARY KEY (AuthorID)
);
GO

CREATE TABLE BOOK (
    BookID VARCHAR(10) NOT NULL,
    Title NVARCHAR(100) NOT NULL,
    CategoryID VARCHAR(10) NOT NULL,
    AuthorID VARCHAR(10) NOT NULL,
    TotalCopies INT NOT NULL,
    AvailableCopies INT NOT NULL,
    CONSTRAINT PK_BOOK PRIMARY KEY (BookID),
    CONSTRAINT FK_BOOK_CATEGORY FOREIGN KEY (CategoryID) REFERENCES CATEGORY(CategoryID),
    CONSTRAINT FK_BOOK_AUTHOR FOREIGN KEY (AuthorID) REFERENCES AUTHOR(AuthorID),
    CONSTRAINT CK_BOOK_Total_Available CHECK (TotalCopies >= AvailableCopies),
    CONSTRAINT CK_BOOK_AvailableCopies CHECK (AvailableCopies >= 0)
);
GO

CREATE TABLE MEMBER (
    MemberID VARCHAR(10) NOT NULL,
    FullName NVARCHAR(50) NOT NULL,
    MemberType NVARCHAR(20) NOT NULL,
    ExpiryDate DATETIME2 NOT NULL,
    Phone VARCHAR(15) NULL,
    CONSTRAINT PK_MEMBER PRIMARY KEY (MemberID)
);
GO

CREATE TABLE BORROW_RECORD (
    RecordID VARCHAR(15) NOT NULL,
    MemberID VARCHAR(10) NOT NULL,
    BookID VARCHAR(10) NOT NULL,
    BorrowDate DATETIME2 NOT NULL CONSTRAINT DF_BORROW_BorrowDate DEFAULT GETDATE(),
    DueDate DATETIME2 NOT NULL,
    ActualReturnDate DATETIME2 NULL,
    CONSTRAINT PK_BORROW_RECORD PRIMARY KEY (RecordID),
    CONSTRAINT FK_BORROW_MEMBER FOREIGN KEY (MemberID) REFERENCES MEMBER(MemberID),
    CONSTRAINT FK_BORROW_BOOK FOREIGN KEY (BookID) REFERENCES BOOK(BookID),
    CONSTRAINT CK_BORROW_DueDate CHECK (DueDate > BorrowDate)
);
GO

CREATE TABLE FINE_PAYMENT (
    PaymentID VARCHAR(15) NOT NULL,
    RecordID VARCHAR(15) NOT NULL,
    OverdueDays INT NOT NULL,
    FineAmount DECIMAL(10,2) NOT NULL,
    PaymentDate DATETIME2 NOT NULL,
    CONSTRAINT PK_FINE_PAYMENT PRIMARY KEY (PaymentID),
    CONSTRAINT FK_FINE_BORROW FOREIGN KEY (RecordID) REFERENCES BORROW_RECORD(RecordID),
    CONSTRAINT CK_FINE_FineAmount CHECK (FineAmount >= 0)
);
GO

INSERT INTO CATEGORY (CategoryID, CategoryName, ShelfLocation, Description) VALUES
('CAT01', N'Công nghệ thông tin', 'A1-01', N'Sách chuyên ngành khoa học máy tính và phần mềm'),
('CAT02', N'Hệ thống thông tin', 'A1-02', N'Phân tích thiết kế hệ thống và cơ sở dữ liệu'),
('CAT03', N'Khoa học dữ liệu', 'A2-01', N'Học máy thống kê và trí tuệ nhân tạo'),
('CAT04', N'Mạng máy tính', 'A2-02', N'Hạ tầng mạng viễn thông và bảo mật hệ thống'),
('CAT05', N'An toàn thông tin', 'A3-01', N'Mật mã học điều tra số và an ninh mạng'),
('CAT06', N'Toán ứng dụng', 'B1-01', N'Giải tích đại số tuyến tính và xác suất thống kê'),
('CAT07', N'Kỹ thuật phần mềm', 'B1-02', N'Kiến trúc phần mềm kiểm thử và quy trình Agile'),
('CAT08', N'Kinh tế số', 'B2-01', N'Thương mại điện tử tài chính số và Fintech'),
('CAT09', N'Trí tuệ nhân tạo', 'B2-02', N'Thị giác máy tính và xử lý ngôn ngữ tự nhiên'),
('CAT10', N'Điện toán đám mây', 'C1-01', N'Kiến trúc Cloud microservices và Kubernetes'),
('CAT11', N'IoT và Nhúng', 'C1-02', N'Hệ thống nhúng vi điều khiển và cảm biến'),
('CAT12', N'Khoa học cơ bản', 'C2-01', N'Vật lý đại cương và phương pháp nghiên cứu');
GO

INSERT INTO AUTHOR (AuthorID, AuthorName, Biography, Country) VALUES
('AUT01', N'Nguyễn Văn An', N'Chuyên gia Cơ sở dữ liệu và T-SQL', N'Việt Nam'),
('AUT02', N'Trần Minh Tâm', N'Tiến sĩ Hệ thống thông tin phân tán', N'Việt Nam'),
('AUT03', N'Lê Quốc Bảo', N'Chuyên gia An toàn thông tin mạng', N'Việt Nam'),
('AUT04', N'Phạm Thu Hà', N'Nhà nghiên cứu Trí tuệ nhân tạo', N'Việt Nam'),
('AUT05', N'Hoàng Đức Trọng', N'Kỹ sư trưởng giải pháp Cloud', N'Việt Nam'),
('AUT06', N'Andrew Ng', N'Chuyên gia Machine Learning hàng đầu', N'Hoa Kỳ'),
('AUT07', N'Martin Fowler', N'Tác giả kiến trúc phần mềm và Refactoring', N'Vương quốc Anh'),
('AUT08', N'Abraham Silberschatz', N'Tác giả giáo trình Database System Concepts', N'Hoa Kỳ'),
('AUT09', N'Vũ Hải Đăng', N'Giảng viên chuyên ngành Khoa học dữ liệu', N'Việt Nam'),
('AUT10', N'Đỗ Thị Mai', N'Thạc sĩ Kỹ thuật mạng máy tính', N'Việt Nam'),
('AUT11', N'Robert C. Martin', N'Tác giả bộ sách Clean Code', N'Hoa Kỳ'),
('AUT12', N'Ngô Bảo Châu', N'Nhà toán học đạt giải thưởng Fields', N'Việt Nam');
GO

INSERT INTO BOOK (BookID, Title, CategoryID, AuthorID, TotalCopies, AvailableCopies) VALUES
('BK001', N'Lập trình T-SQL nâng cao', 'CAT01', 'AUT01', 10, 5),
('BK002', N'Cơ sở dữ liệu nâng cao', 'CAT01', 'AUT01', 8, 3),
('BK003', N'Database System Concepts', 'CAT02', 'AUT08', 15, 9),
('BK004', N'Thiết kế Hệ thống thông tin doanh nghiệp', 'CAT02', 'AUT02', 12, 6),
('BK005', N'Machine Learning cơ bản', 'CAT03', 'AUT06', 20, 11),
('BK006', N'Phân tích dữ liệu với Python', 'CAT03', 'AUT09', 14, 8),
('BK007', N'Quản trị mạng máy tính', 'CAT04', 'AUT10', 8, 4),
('BK008', N'An ninh mạng thực chiến', 'CAT05', 'AUT03', 10, 6),
('BK009', N'Deep Learning và ứng dụng', 'CAT09', 'AUT04', 12, 7),
('BK010', N'Clean Architecture', 'CAT07', 'AUT11', 15, 10),
('BK011', N'Kiến trúc Cloud Native', 'CAT10', 'AUT05', 7, 2),
('BK012', N'Xác suất thống kê trong Tin học', 'CAT06', 'AUT12', 18, 12),
('BK013', N'Kỹ nghệ phần mềm hiện đại', 'CAT07', 'AUT07', 10, 5),
('BK014', N'Lập trình Web hiện đại', 'CAT01', 'AUT01', 12, 0),
('BK015', N'IoT công nghiệp và cảm biến', 'CAT11', 'AUT10', 6, 6);
GO

INSERT INTO MEMBER (MemberID, FullName, MemberType, ExpiryDate, Phone) VALUES
('MB001', N'Nguyễn Hoàng Long', N'Giảng viên', '2027-12-31 00:00:00', '0901234567'),
('MB002', N'Trần Thị Bích', N'Giảng viên', '2028-06-30 00:00:00', '0912345678'),
('MB003', N'Lê Tuấn Kiệt', N'Giảng viên', '2026-05-15 00:00:00', '0923456789'),
('MB004', N'Phạm Minh Châu', N'Nghiên cứu sinh', '2026-11-20 00:00:00', '0934567890'),
('MB005', N'Võ Hoàng Nam', N'Nghiên cứu sinh', '2027-04-10 00:00:00', '0945678901'),
('MB006', N'Đặng Phương Thảo', N'Sinh viên', '2026-09-01 00:00:00', '0956789012'),
('MB007', N'Bùi Thanh Tùng', N'Sinh viên', '2026-10-15 00:00:00', '0967890123'),
('MB008', N'Dương Ngọc Ánh', N'Sinh viên', '2027-01-20 00:00:00', '0978901234'),
('MB009', N'Hồ Trọng Trí', N'Học viên cao học', '2026-12-10 00:00:00', '0989012345'),
('MB010', N'Đinh Hữu Phước', N'Nghiên cứu sinh', '2026-08-30 00:00:00', '0990123456'),
('MB011', N'Lâm Khánh Chi', N'Sinh viên', '2027-08-15 00:00:00', '0909876543'),
('MB012', N'Trương Công Vinh', N'Giảng viên', '2029-01-01 00:00:00', '0918765432');
GO

INSERT INTO BORROW_RECORD (RecordID, MemberID, BookID, BorrowDate, DueDate, ActualReturnDate) VALUES
('REC001', 'MB001', 'BK001', '2026-01-10 08:30:00', '2026-01-24 17:00:00', '2026-01-22 10:00:00'),
('REC002', 'MB001', 'BK002', '2026-02-05 09:00:00', '2026-02-19 17:00:00', '2026-02-25 14:00:00'),
('REC003', 'MB002', 'BK003', '2026-02-15 10:15:00', '2026-03-01 17:00:00', '2026-03-05 16:30:00'),
('REC004', 'MB004', 'BK001', '2026-03-01 14:00:00', '2026-03-15 17:00:00', '2026-03-25 09:00:00'),
('REC005', 'MB005', 'BK005', '2026-03-10 11:30:00', '2026-03-24 17:00:00', '2026-03-24 15:00:00'),
('REC006', 'MB006', 'BK001', '2026-04-05 08:00:00', '2026-04-19 17:00:00', '2026-04-26 11:00:00'),
('REC007', 'MB007', 'BK006', '2026-04-12 13:45:00', '2026-04-26 17:00:00', '2026-05-02 10:30:00'),
('REC008', 'MB008', 'BK008', '2026-05-02 15:00:00', '2026-05-16 17:00:00', '2026-05-25 09:15:00'),
('REC009', 'MB006', 'BK004', '2026-06-01 09:30:00', '2026-06-15 17:00:00', NULL),
('REC010', 'MB007', 'BK009', '2026-06-10 10:00:00', '2026-06-24 17:00:00', NULL),
('REC011', 'MB002', 'BK010', '2026-07-01 14:20:00', '2026-07-15 17:00:00', '2026-07-14 16:00:00'),
('REC012', 'MB003', 'BK011', '2026-08-05 08:45:00', '2026-08-19 17:00:00', '2026-08-28 15:00:00'),
('REC013', 'MB004', 'BK013', '2026-08-20 10:30:00', '2026-09-03 17:00:00', NULL),
('REC014', 'MB005', 'BK014', '2026-09-18 09:00:00', '2026-10-02 17:00:00', NULL),
('REC015', 'MB001', 'BK005', '2025-11-10 10:00:00', '2025-11-24 17:00:00', '2025-11-28 11:00:00');
GO

INSERT INTO FINE_PAYMENT (PaymentID, RecordID, OverdueDays, FineAmount, PaymentDate) VALUES
('PAY001', 'REC002', 6, 30000.00, '2026-02-25 14:30:00'),
('PAY002', 'REC003', 4, 20000.00, '2026-03-05 16:45:00'),
('PAY003', 'REC004', 10, 50000.00, '2026-03-25 09:30:00'),
('PAY004', 'REC006', 7, 35000.00, '2026-04-26 11:30:00'),
('PAY005', 'REC007', 6, 30000.00, '2026-05-02 11:00:00'),
('PAY006', 'REC008', 9, 45000.00, '2026-05-25 10:00:00'),
('PAY007', 'REC012', 9, 45000.00, '2026-08-28 15:30:00'),
('PAY008', 'REC015', 4, 20000.00, '2025-11-28 11:30:00'),
('PAY009', 'REC004', 5, 25000.00, '2026-06-15 08:30:00'),
('PAY010', 'REC006', 3, 15000.00, '2026-07-20 14:00:00'),
('PAY011', 'REC002', 2, 10000.00, '2026-08-10 09:15:00'),
('PAY012', 'REC007', 4, 20000.00, '2026-09-05 16:00:00');
GO

SELECT b.BookID, b.Title, c.CategoryName, b.AvailableCopies, b.TotalCopies
FROM BOOK b
INNER JOIN CATEGORY c ON b.CategoryID = c.CategoryID
WHERE c.CategoryName = N'Công nghệ thông tin' AND b.AvailableCopies > 0;
GO

SELECT a.AuthorID, a.AuthorName, COUNT(b.BookID) AS TotalBooks
FROM AUTHOR a
LEFT JOIN BOOK b ON a.AuthorID = b.AuthorID
GROUP BY a.AuthorID, a.AuthorName;
GO

SELECT MemberID, FullName, MemberType, ExpiryDate, Phone
FROM MEMBER
WHERE MemberType = N'Giảng viên' AND YEAR(ExpiryDate) > 2026;
GO

SELECT TOP 1 WITH TIES b.BookID, b.Title, COUNT(br.RecordID) AS TotalBorrows
FROM BOOK b
INNER JOIN BORROW_RECORD br ON b.BookID = br.BookID
GROUP BY b.BookID, b.Title
ORDER BY TotalBorrows DESC;
GO

SELECT b.BookID, b.Title
FROM BOOK b
WHERE b.BookID NOT IN (
    SELECT br.BookID
    FROM BORROW_RECORD br
    WHERE YEAR(br.BorrowDate) = 2026
);
GO

SELECT MONTH(PaymentDate) AS PaymentMonth, SUM(FineAmount) AS TotalFineAmount
FROM FINE_PAYMENT
WHERE YEAR(PaymentDate) = 2026
GROUP BY MONTH(PaymentDate)
ORDER BY PaymentMonth ASC;
GO

WITH OverdueStats AS (
    SELECT m.MemberID, m.FullName,
           COUNT(CASE WHEN br.ActualReturnDate > br.DueDate OR (br.ActualReturnDate IS NULL AND br.DueDate < GETDATE()) THEN 1 END) AS OverdueCount
    FROM MEMBER m
    LEFT JOIN BORROW_RECORD br ON m.MemberID = br.MemberID
    GROUP BY m.MemberID, m.FullName
)
SELECT MemberID, FullName, OverdueCount
FROM OverdueStats
WHERE OverdueCount > (SELECT AVG(CAST(OverdueCount AS FLOAT)) FROM OverdueStats);
GO

UPDATE MEMBER
SET ExpiryDate = DATEADD(YEAR, 1, ExpiryDate)
WHERE MemberType = N'Nghiên cứu sinh';
GO

SELECT RecordID, MemberID, BookID, BorrowDate, DueDate, ActualReturnDate,
       CASE 
           WHEN ActualReturnDate IS NULL AND DueDate < GETDATE() THEN N'Quá hạn'
           WHEN ActualReturnDate IS NULL THEN N'Đang mượn'
           ELSE N'Đã trả'
       END AS ReturnStatus
FROM BORROW_RECORD;
GO

SELECT TOP 1 WITH TIES m.MemberID, m.FullName, SUM(fp.FineAmount) AS TotalFinesPaid
FROM MEMBER m
INNER JOIN BORROW_RECORD br ON m.MemberID = br.MemberID
INNER JOIN FINE_PAYMENT fp ON br.RecordID = fp.RecordID
GROUP BY m.MemberID, m.FullName
ORDER BY TotalFinesPaid DESC;
GO

CREATE VIEW v_OverdueBorrowings AS
SELECT m.MemberID, m.FullName, m.Phone, b.Title AS BookTitle,
       DATEDIFF(DAY, br.DueDate, GETDATE()) AS OverdueDays,
       br.BorrowDate, br.DueDate
FROM BORROW_RECORD br
INNER JOIN MEMBER m ON br.MemberID = m.MemberID
INNER JOIN BOOK b ON br.BookID = b.BookID
WHERE br.ActualReturnDate IS NULL AND br.DueDate < GETDATE();
GO

CREATE VIEW v_CategoryBookStock AS
SELECT c.CategoryID, c.CategoryName,
       ISNULL(SUM(b.AvailableCopies), 0) AS InStockCopies,
       ISNULL(SUM(b.TotalCopies - b.AvailableCopies), 0) AS CirculatingCopies,
       ISNULL(SUM(b.TotalCopies), 0) AS TotalCopies
FROM CATEGORY c
LEFT JOIN BOOK b ON c.CategoryID = b.CategoryID
GROUP BY c.CategoryID, c.CategoryName;
GO

CREATE VIEW v_TopBorrowedBooks2026 AS
SELECT TOP 10 b.BookID, b.Title, COUNT(br.RecordID) AS TotalBorrows
FROM BOOK b
INNER JOIN BORROW_RECORD br ON b.BookID = br.BookID
WHERE YEAR(br.BorrowDate) = 2026
GROUP BY b.BookID, b.Title
ORDER BY TotalBorrows DESC;
GO

CREATE VIEW v_FrequentBorrowerClub AS
SELECT m.MemberID, m.FullName, m.MemberType, COUNT(br.RecordID) AS TotalBorrows
FROM MEMBER m
INNER JOIN BORROW_RECORD br ON m.MemberID = br.MemberID
WHERE YEAR(br.BorrowDate) = 2026
  AND m.MemberID NOT IN (
      SELECT br2.MemberID
      FROM BORROW_RECORD br2
      WHERE br2.ActualReturnDate IS NULL AND br2.DueDate < GETDATE()
  )
GROUP BY m.MemberID, m.FullName, m.MemberType
HAVING COUNT(br.RecordID) > 20;
GO

CREATE VIEW v_FinesSummaryByYear AS
SELECT YEAR(PaymentDate) AS PaymentYear,
       COUNT(PaymentID) AS OverdueCasesCount,
       SUM(FineAmount) AS TotalFineAmount
FROM FINE_PAYMENT
GROUP BY YEAR(PaymentDate);
GO