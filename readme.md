Populate the database and run the file.

Use the following POST commands to add:

To add Batch:
localhost:port/admin/batches

To add Course:
localhost:port/courses

To add Subject:
localhost:port/subjects

To add Teacher:
localhost:port/teachers

To add Student:
localhost:port/students

To add Lecture:
localhost:port/courses/:courseId/batches/:batchId/lectures

--
-- Dumping data for table `batches`
--

INSERT INTO `batches` (`id`, `name`, `courseId`) VALUES
(1, 'spring2018', 1),
(2, 'fall2018', 2);


--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`) VALUES
(1, 'science'),
(2, 'music');


INSERT INTO `lectures` (`id`, `name`, `batchId`) VALUES
(1, 'lecture1', 1),
(2, 'lecture2', 1),
(3, 'lecture3', 1);


INSERT INTO `studentbatchmaps` (`batchId`, `studentId`) VALUES
(1, 1),
(2, 1),
(2, 2);


--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`) VALUES
(1, 'Sarvarth'),
(2, 'Parth');

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `name`) VALUES
(1, 'Physics'),
(2, 'Chemistry');


-- Dumping data for table `subteachmaps`
--

INSERT INTO `subteachmaps` (`id`, `subjectId`, `teacherId`, `lectureId`) VALUES
(1, 1, 1, 1),
(2, 2, 2, 3),
(3, 1, 2, 2);

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `name`) VALUES
(1, 'Arnav'),
(2, 'Ritika');

