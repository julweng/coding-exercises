// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number 
// of times she breaks her season record for most points and least points in a game. Points scored in the first game establish 
// her record for the season, and she begins counting from there.

// For example, assume her scores for the season are represented in the array [12, 24, 10, 24]. Scores are in the same order 
// as the games played. She would tabulate have broken her lowest scored record once, and highest score record once.
// write a function that takes in an array of scores and output: 
// array [timesHighestScoreRecordBroken, timesLowestScoreRecordBroken]


function breakingRecords(score) {
     let min = score[0];
  let max = score[0];
  let breakMin = 0;
  let breakMax = 0;
  
  score.forEach(num => {
    if (num > max) {
      max = num;
      breakMax++;
    }
    if (num < min) {
      min = num;
      breakMin++;
    }
  });
  
    return [breakMax, breakMin];
}

let score = [10, 5, 20, 20, 4, 5, 2, 25, 1];
console.log(breakingRecords(score));