set sql_safe_updates = 0;
create database sunbeam_db;
use sunbeam_db;
show databases;

create table users(
	email varchar(20) primary key,
    password varchar(20),
    role enum("admin", "student")
);

alter table users 
modify column email varchar(50);

create table courses(
	course_id int primary key,
    course_name varchar(20),
    description varchar(50),
    fees float,
    start_date date,
    end_date date,
    video_expire_days int
);

create table students(
	reg_no int primary key auto_increment,
    name varchar(20),
    email varchar(20),
    course_id int,
    mobile_no varchar(10),
    profile_pic blob,
    constraint fk1 foreign key(email) references users(email) on update cascade on delete cascade,
    constraint fk2 foreign key(course_id) references courses(course_id) on update cascade on delete cascade
);

alter table students 
modify column email varchar(50);

create table videos(
	video_id int primary key,
    course_id int,
    title varchar(20),
    description varchar(50),
    youtube_url varchar(20),
    added_at date,
    constraint fk3 foreign key(course_id) references courses(course_id) on update cascade on delete cascade
);

-- INSERT INTO users
INSERT INTO users (email, password, role) VALUES
('admin@sunbeam.com', 'admin123', 'admin'),
('rahul@gmail.com', 'rahul123', 'student'),
('priya@gmail.com', 'priya123', 'student'),
('arjun@gmail.com', 'arjun123', 'student'),
('neha@gmail.com', 'neha123', 'student');

-- INSERT INTO courses
INSERT INTO courses (course_id, course_name, description, fees, start_date, end_date, video_expire_days) VALUES
(101, 'Java', 'Core + Advanced Java', 15000, '2025-01-10', '2025-04-10', 90),
(102, 'Python', 'Python with Django', 14000, '2025-02-01', '2025-05-01', 100),
(103, 'Data Science', 'ML + AI Basics', 25000, '2025-03-05', '2025-07-05', 120),
(104, 'Web Dev', 'HTML CSS JS + React', 18000, '2025-01-20', '2025-04-20', 75),
(105, 'C++', 'Programming in C++', 12000, '2025-02-15', '2025-05-15', 60);

-- INSERT INTO students
INSERT INTO students (name, email, course_id, mobile_no, profile_pic) VALUES
('Rahul Sharma', 'rahul@gmail.com', 101, '9876543210', NULL),
('Priya Singh', 'priya@gmail.com', 102, '9123456780', NULL),
('Arjun Mehta', 'arjun@gmail.com', 103, '9898989898', NULL),
('Neha Kulkarni', 'neha@gmail.com', 104, '9001234567', NULL),
('Rohit Verma', 'admin@sunbeam.com', 105, '9012345678', NULL);

-- INSERT INTO videos
INSERT INTO videos (video_id, course_id, title, description, youtube_url, added_at) VALUES
(1, 101, 'Intro to Java', 'Basics of Java programming', 'yt_java_101', '2025-01-12'),
(2, 102, 'Python Basics', 'Intro to Python syntax', 'yt_python_102', '2025-02-03'),
(3, 103, 'ML Intro', 'Basics of Machine Learning', 'yt_ml_103', '2025-03-07'),
(4, 104, 'React Start', 'Intro to React Components', 'yt_react_104', '2025-01-22'),
(5, 105, 'C++ Basics', 'Getting started with C++', 'yt_cpp_105', '2025-02-18');

INSERT INTO courses (course_id, course_name, description, fees, start_date, end_date, video_expire_days) VALUES
(5, 'Data Science', 'Data Science Course', 15000, '2025-12-01', '2026-02-01', 15)
ON DUPLICATE KEY UPDATE course_name = VALUES(course_name);

INSERT INTO users (email, password, role) VALUES
('newstudent.s@example.com', 'password_new', 'student')
ON DUPLICATE KEY UPDATE password = VALUES(password);

INSERT INTO students (reg_no, name, email, course_id, mobile_no) VALUES
(7, 'New Student', 'newstudent.s@example.com', 5, '8888888888')
ON DUPLICATE KEY UPDATE name = VALUES(name);

INSERT INTO videos (video_id, course_id, title, description, youtube_url, added_at) VALUES
(20, 5, 'DS Intro', 'Recent Video for DS', 'url_v20', '2025-12-10')
ON DUPLICATE KEY UPDATE title = VALUES(title);

INSERT INTO videos (video_id, course_id, title, description, youtube_url, added_at) VALUES
(21, 5, 'DS Old', 'Expired Video for DS', 'url_v21', '2025-11-01')
ON DUPLICATE KEY UPDATE title = VALUES(title);

INSERT INTO videos (video_id, course_id, title, description, youtube_url, added_at) VALUES
(22, 1, 'MERN video 15', 'Recent MERN Video', 'url_v22', '2025-12-10')
ON DUPLICATE KEY UPDATE title = VALUES(title);

truncate table users;
truncate table students;
truncate table courses;
truncate table videos;

delete from users;
delete from students;
delete from courses;
delete from videos;

insert into users values ('admin@sunbeam', 'admin123', 'admin'),
('shyamgmail.com', '123', 'student'),
('rajeshgmail.com', '123', 'student');

insert into courses (course_id, course_name, description, fees, start_date, end_date, video_expire_days) values (101, 'java', 'good', 10000, '2025-12-09', '2026-01-05', 90),
(102, 'mern', 'good', 10000, '2025-12-09', '2026-01-05', 90),
(103, 'aids', 'good', 10000, '2025-12-09', '2026-01-05', 90);

insert into students(name, email, course_id, mobile_no, profile_pic) values ('shyam', 'shyamgmail.com', 101, '1234', null),
('rajesh', 'rajeshgmail.com', 102, '1234', null);

insert into videos values (1,101, 'java in 1 hour', 'good', 'url1', current_date());

desc videos;

-- INSERT USERS
INSERT INTO users (email, password, role) VALUES
('admin@sunbeam.com', 'admin123', 'admin'),
('rahul@gmail.com', 'rahul123', 'student'),
('priya@gmail.com', 'priya123', 'student');

-- INSERT COURSES
INSERT INTO courses (course_id, course_name, description, fees, start_date, end_date, video_expire_days) VALUES
(101, 'Java', 'Core + Advanced Java', 15000, '2025-01-10', '2025-04-10', 90),
(102, 'Python', 'Python with Django', 14000, '2025-02-01', '2025-05-01', 100);

-- INSERT STUDENTS
INSERT INTO students (name, email, course_id, mobile_no, profile_pic) VALUES
('Rahul Sharma', 'rahul@gmail.com', 101, '9876543210', NULL),
('Priya Singh', 'priya@gmail.com', 102, '9123456780', NULL);

-- INSERT VIDEOS
INSERT INTO videos (video_id, course_id, title, description, youtube_url, added_at) VALUES
-- Java video (for Rahul – ensures join works)
(1, 101, 'Java Intro', 'Basics of Java', 'url_j1', '2025-01-15'),

-- Valid (non-expired) Python video (for Priya)
(2, 102, 'Python Basics', 'Python Intro', 'url_p1', '2025-12-01'),

-- Expired Python video (should NOT appear in video_email output)
(3, 102, 'Old Python Video', 'Expired content', 'url_p2', '2024-01-01');





-- 1. --
select * from courses;

-- 2--
select reg_no, name, email, mobile_no, course_id, course_name 
from students natural join courses;

-- 3--
DELIMITER $$
create procedure fetchemail(temp_email varchar(20))
begin
	select * from students natural join courses
    where email = temp_email;
end $$
DELIMITER ;

call fetchemail('rahul@gmail.com')

-- 4 -- 
DELIMITER $$
CREATE PROCEDURE video_email(temp_email VARCHAR(50))
BEGIN
    SELECT course_id, course_name, start_date, end_date, video_expire_days,
           video_id, title, added_at
    FROM students 
    NATURAL JOIN courses 
    NATURAL JOIN videos
    WHERE email = temp_email
      AND DATE_ADD(added_at, INTERVAL video_expire_days DAY) > CURRENT_DATE();
END $$
DELIMITER ;


drop procedure video_email;

call video_email('shyamgmail.com');


select * from courses natural join videos natural join students;