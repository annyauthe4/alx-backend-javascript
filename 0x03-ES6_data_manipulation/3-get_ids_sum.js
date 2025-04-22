export default function getStudentIdsSum(students) {
  const numbers = students.map((student) => student.id);
  return numbers.reduce((sum, n) => sum + n, 0);
}
