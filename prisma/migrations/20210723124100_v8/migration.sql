-- CreateTable
CREATE TABLE `Attendances` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `session_start` DATETIME(0) NOT NULL,
    `session_end` DATETIME(0) NOT NULL,
    `status` ENUM('opened', 'closed') NOT NULL DEFAULT 'opened',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Classes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255),
    `course` VARCHAR(255),
    `date_start` DATE,
    `date_end` DATE,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClassTutors` (
    `class_id` INTEGER NOT NULL,
    `tutor_id` VARCHAR(191) NOT NULL,

    INDEX `fk_ClassTutor_Class_id`(`class_id`),
    INDEX `fk_ClassTutor_Tutor_id`(`tutor_id`),
    PRIMARY KEY (`class_id`, `tutor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Students` (
    `id` VARCHAR(191) NOT NULL,
    `class_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Students.id_unique`(`id`),
    INDEX `fk_StudentClass_id`(`class_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StudentAttendances` (
    `student_id` VARCHAR(191) NOT NULL,
    `class_id` INTEGER NOT NULL,
    `attendance_id` INTEGER NOT NULL,

    INDEX `fk_StudentAttendance_Student_id`(`student_id`),
    INDEX `fk_StudentAttendance_Class_id`(`class_id`),
    INDEX `fk_StudentAttendance_Attendance_id`(`attendance_id`),
    PRIMARY KEY (`student_id`, `class_id`, `attendance_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tutors` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Tutors.id_unique`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` VARCHAR(191) NOT NULL,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM('scholar', 'admin') DEFAULT 'scholar',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users.email_unique`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ClassTutors` ADD FOREIGN KEY (`class_id`) REFERENCES `Classes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassTutors` ADD FOREIGN KEY (`tutor_id`) REFERENCES `Tutors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Students` ADD FOREIGN KEY (`class_id`) REFERENCES `Classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Students` ADD FOREIGN KEY (`id`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentAttendances` ADD FOREIGN KEY (`attendance_id`) REFERENCES `Attendances`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentAttendances` ADD FOREIGN KEY (`class_id`) REFERENCES `Classes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentAttendances` ADD FOREIGN KEY (`student_id`) REFERENCES `Students`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tutors` ADD FOREIGN KEY (`id`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
