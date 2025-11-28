// course.js
// Simple helper for the Course Registration feature

function registerCourse(studentId, courseId) {
  // naive in-memory representation for demo purposes
  return {
    success: true,
    studentId,
    courseId,
    message: `Student ${studentId} registered for course ${courseId}`
  };
}

module.exports = { registerCourse };
