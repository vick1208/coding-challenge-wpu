// 14/366
// Get grade

function getGrade(...s) {
  const score = s.reduce((acc, current) => acc + current) / s.length;
  if (score < 60) return 'F';
  if (score < 70) return 'D';
  if (score < 80) return 'C';
  if (score < 90) return 'B';
  return 'A';
}

console.log(getGrade(90, 70, 59));