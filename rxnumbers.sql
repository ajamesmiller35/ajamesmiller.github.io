-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2018 at 02:02 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `refills`
--

-- --------------------------------------------------------

--
-- Table structure for table `rxnumbers`
--

CREATE TABLE `rxnumbers` (
  `id` int(11) NOT NULL,
  `session_ID` int(11) NOT NULL,
  `rxnumber` text,
  `message` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rxnumbers`
--

INSERT INTO `rxnumbers` (`id`, `session_ID`, `rxnumber`, `message`) VALUES
(1, 0, '89', 'test'),
(2, 0, '79', 'jfkdlsj;fdasf'),
(3, 0, '789', '159'),
(4, 0, '78979', '256'),
(5, 0, '78979', '256'),
(6, 0, '78979', '256'),
(7, 0, '78979', '256'),
(8, 0, '78979', '256'),
(9, 0, '3333', '4444'),
(10, 0, '8989', '4444'),
(11, 0, '8989', '4444'),
(12, 0, '8989', '4444'),
(13, 0, '8989', '4444'),
(14, 0, '8989', '4444'),
(15, 1, '456159', 'testing'),
(16, 1, '456159', 'testing'),
(17, 1, '784561', 'new one'),
(18, 1, '789744', 'fjkdsafl;jdasf'),
(19, 1, '742515', 'New test'),
(20, 1, '7552145', 'Please Deliver!'),
(21, 2, '789456', 'TEST'),
(22, 2, '785667', 'TESTING'),
(23, 3, '456123', '123132'),
(24, 3, '44884', '325453'),
(25, 4, '809156', 'Please Deliver'),
(26, 4, '789456', 'May be out of refills'),
(27, 5, '789456', 'teste'),
(29, 5, '789456', NULL),
(30, 5, '456123', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rxnumbers`
--
ALTER TABLE `rxnumbers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rxnumbers`
--
ALTER TABLE `rxnumbers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
