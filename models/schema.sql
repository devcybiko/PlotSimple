ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'hokxan9Mysql';

create database if not exists testdb;
use testdb;


-- drop table if exists salarys

create table if not exists salarys (
    yearID  int,
    teamID varchar(255),
    lgID varchar(255),
    playerID varchar(255),
    salary decimal);

-- drop table if exists teams;

create table if not exists teams (
yearID int,
lgID varchar(255),
teamID varchar(255),
franchID varchar(255),
divID varchar(255),
theRank varchar(255),
G varchar(255),
Ghome varchar(255),
W varchar(255),
L varchar(255),
DivWin varchar(255),
WCWin varchar(255),
LgWin varchar(255),
WSWin varchar(255),
R varchar(255),
AB varchar(255),
H varchar(255),
the2B varchar(255),
the3B varchar(255),
HR varchar(255),
BB varchar(255),
SO varchar(255),
SB varchar(255),
CS varchar(255),
HBP varchar(255),
SF varchar(255),
RA varchar(255),
ER varchar(255),
ERA varchar(255),
CG varchar(255),
SHO varchar(255),
SV varchar(255),
IPouts varchar(255),
HA varchar(255),
HRA varchar(255),
BBA varchar(255),
SOA varchar(255),
E varchar(255),
DP varchar(255),
FP varchar(255),
name varchar(255),
park varchar(255),
attendance int,
BPF varchar(255),
PPF varchar(255),
teamIDBR varchar(255),
teamIDlahman45 varchar(255),
teamIDretro varchar(255)

);