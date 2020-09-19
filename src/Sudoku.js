import React from 'react';
import './Sudoku.css';

const Grid = ({ numbers }) => {
  return (
  <div className='grid'>
    <table>
      <tbody>
      <tr>
        <td className='darker'>{numbers[0][0]}</td>
        <td className='darker'>{numbers[0][1]}</td>
        <td className='darker'>{numbers[0][2]}</td>
        <td>{numbers[0][3]}</td>
        <td>{numbers[0][4]}</td>
        <td>{numbers[0][5]}</td>
        <td className='darker'>{numbers[0][6]}</td>
        <td className='darker'>{numbers[0][7]}</td>
        <td className='darker'>{numbers[0][8]}</td>
      </tr>
      <tr>
        <td className='darker'>{numbers[1][0]}</td>
        <td className='darker'>{numbers[1][1]}</td>
        <td className='darker'>{numbers[1][2]}</td>
        <td>{numbers[1][3]}</td>
        <td>{numbers[1][4]}</td>
        <td>{numbers[1][5]}</td>
        <td className='darker'>{numbers[1][6]}</td>
        <td className='darker'>{numbers[1][7]}</td>
        <td className='darker'>{numbers[1][8]}</td>
      </tr>
      <tr>
        <td className='darker'>{numbers[2][0]}</td>
        <td className='darker'>{numbers[2][1]}</td>
        <td className='darker'>{numbers[2][2]}</td>
        <td>{numbers[2][3]}</td>
        <td>{numbers[2][4]}</td>
        <td>{numbers[2][5]}</td>
        <td className='darker'>{numbers[2][6]}</td>
        <td className='darker'>{numbers[2][7]}</td>
        <td className='darker'>{numbers[2][8]}</td>
      </tr>
      <tr>
        <td>{numbers[3][0]}</td>
        <td>{numbers[3][1]}</td>
        <td>{numbers[3][2]}</td>
        <td className='darker'>{numbers[3][3]}</td>
        <td className='darker'>{numbers[3][4]}</td>
        <td className='darker'>{numbers[3][5]}</td>
        <td>{numbers[3][6]}</td>
        <td>{numbers[3][7]}</td>
        <td>{numbers[3][8]}</td>
      </tr>
      <tr>
        <td>{numbers[4][0]}</td>
        <td>{numbers[4][1]}</td>
        <td>{numbers[4][2]}</td>
        <td className='darker'>{numbers[4][3]}</td>
        <td className='darker'>{numbers[4][4]}</td>
        <td className='darker'>{numbers[4][5]}</td>
        <td>{numbers[4][6]}</td>
        <td>{numbers[4][7]}</td>
        <td>{numbers[4][8]}</td>
      </tr>
      <tr>
        <td>{numbers[5][0]}</td>
        <td>{numbers[5][1]}</td>
        <td>{numbers[5][2]}</td>
        <td className='darker'>{numbers[5][3]}</td>
        <td className='darker'>{numbers[5][4]}</td>
        <td className='darker'>{numbers[5][5]}</td>
        <td>{numbers[5][6]}</td>
        <td>{numbers[5][7]}</td>
        <td>{numbers[5][8]}</td>
      </tr>
      <tr>
        <td className='darker'>{numbers[6][0]}</td>
        <td className='darker'>{numbers[6][1]}</td>
        <td className='darker'>{numbers[6][2]}</td>
        <td>{numbers[6][3]}</td>
        <td>{numbers[6][4]}</td>
        <td>{numbers[6][5]}</td>
        <td className='darker'>{numbers[6][6]}</td>
        <td className='darker'>{numbers[6][7]}</td>
        <td className='darker'>{numbers[6][8]}</td>
      </tr>
      <tr>
        <td className='darker'>{numbers[7][0]}</td>
        <td className='darker'>{numbers[7][1]}</td>
        <td className='darker'>{numbers[7][2]}</td>
        <td>{numbers[7][3]}</td>
        <td>{numbers[7][4]}</td>
        <td>{numbers[7][5]}</td>
        <td className='darker'>{numbers[7][6]}</td>
        <td className='darker'>{numbers[7][7]}</td>
        <td className='darker'>{numbers[7][8]}</td>
      </tr>
      <tr>
        <td className='darker'>{numbers[8][0]}</td>
        <td className='darker'>{numbers[8][1]}</td>
        <td className='darker'>{numbers[8][2]}</td>
        <td>{numbers[8][3]}</td>
        <td>{numbers[8][4]}</td>
        <td>{numbers[8][5]}</td>
        <td className='darker'>{numbers[8][6]}</td>
        <td className='darker'>{numbers[8][7]}</td>
        <td className='darker'>{numbers[8][8]}</td>
      </tr>
      </tbody>
    </table>
    <p>Hey {numbers[0][0]}</p>
  </div>
  );
}

const generateRandNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRandomSequence = () => {

  let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  let sequence = [];

  for (let i = 0; i <= 8; i++) {
    let r = generateRandNumber(i, 9);
    sequence.push(array[r]);
    let tmp = array[r];
    array[r] = array[i];
    array[i] = tmp;
  }

  return (sequence);
}

const fillBox = (puzzle, startX, startY) => {

  let sequence = getRandomSequence();
  let i = 0;

  for (let x = startX; x < startX + 3; x++) {
    for (let y = startY; y < startY + 3; y++) {
      puzzle[y][x] = sequence[i];
      i++;
    }
  }

}

const initPuzzle = () => {

  let puzzle = [
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""]
  ];

  return (puzzle);

}

const checkY = (puzzle, y, num) => {

  for (let i = 0; i < 9; i++)
  {
    if (puzzle[y][i] === num)
      return (false);
  }
  return (true);
}

const checkX = (puzzle, x, num) => {

  for (let i = 0; i < 9; i++)
  {
    if (puzzle[i][x] === num)
      return (false);
  }
  return (true);
}
const checkBox = (puzzle, num, x_loc, y_loc) => {

  let startX = (x_loc < 6 ? x_loc < 3 ? 0 : 3 : 6);
  let startY = (y_loc < 6 ? y_loc < 3 ? 0 : 3 : 6);

  for (let x = startX; x < startX + 3; x++) {
    for (let y = startY; y < startY + 3; y++) {
      if (puzzle[y][x] === num) {
        return (false);
      }
    }
  }
  return (true);
}

const isValidNum = (puzzle, num, x_loc, y_loc) => {
  if (!checkY(puzzle, y_loc, num) || !checkX(puzzle, x_loc, num) ||
  !checkBox(puzzle, num, x_loc, y_loc))
    return (false);
  return (true);
}

const findFirstEmpty = (puzzle) => {
  let x = 0;
  let y = 0;

  while (puzzle[y][x] !== "" && y < 9)
  {
    x++;
    if (x === 9)
    {
      x = 0;
      y++;
      if (y === 9)
        break ;
    }
  }
  return { x, y };
}

const solvePuzzle = (puzzle) => {

  let coords = findFirstEmpty(puzzle);
  let x = coords.x;
  let y = coords.y;
  let i;

  if (y === 9)
    return (true);
  for (i = 1; i <= 9; i++)
  {
    if (isValidNum(puzzle, i, x, y))
    {
      puzzle[y][x] = i;
      if (solvePuzzle(puzzle) === true)
        return (true);
      puzzle[y][x] = "";
    }
  }
  return (false);
}

const create2DCopy = (array) => array.map(inner => inner.slice());

const hasMultipleSolutions = (puzzleToTest) => {
  let solutionCount = 0;
  let puzzle = create2DCopy(puzzleToTest);

  const test = () => {
    let coords = findFirstEmpty(puzzle);
    let x = coords.x;
    let y = coords.y;
    let i;

    if (y === 9)
    {
      solutionCount++;
      return (true);
    }
    for (i = 1; i <= 9; i++)
    {
      if (isValidNum(puzzle, i, x, y))
      {
        puzzle[y][x] = i;
        if (test(puzzle) === true)
          return (solutionCount === 2 ? true : false);
        puzzle[y][x] = "";
      }
    }
    return (false);
  };

  return (test(puzzle));
}

const generateStartSeed = (puzzle) => {
  switch (generateRandNumber(0, 4)) {
    case 0:
      fillBox(puzzle, 0, 6);
      fillBox(puzzle, 3, 3);
      fillBox(puzzle, 6, 0);
    break ;
    case 1:
      fillBox(puzzle, 0, 0);
      fillBox(puzzle, 3, 3);
      fillBox(puzzle, 6, 6);
     break ;
    case 2:
      fillBox(puzzle, 0, 3);
      fillBox(puzzle, 3, 6);
      fillBox(puzzle, 6, 0);
      break ;
    default:
      fillBox(puzzle, 0, 3);
      fillBox(puzzle, 3, 0);
      fillBox(puzzle, 6, 6);
  }
}

const deleteCells = (solvedPuzzle) => {
  let puzzle = create2DCopy(solvedPuzzle);
  let delCount = 0;
  while (1) {
    let x = generateRandNumber(0, 9);
    let y = generateRandNumber(0, 9);
    let val = puzzle[y][x];

    if (val === "")
      continue ;
    puzzle[y][x] = "";
    if (hasMultipleSolutions(puzzle) === true) {
      puzzle[y][x] = val;
      break ;
    }
    delCount++;
  }
  console.log(delCount);
  return (puzzle);
}

const generateSolvedPuzzle = () => {
  let puzzle = initPuzzle();
  generateStartSeed(puzzle);
  console.log(solvePuzzle(puzzle));
  return (puzzle);
}

const Sudoku = () => {
  const solvedPuzzle = generateSolvedPuzzle();
  const emptyPuzzle = deleteCells(solvedPuzzle);
  console.log("Multiple solutions?", hasMultipleSolutions(emptyPuzzle));
  return (
    <div>
      <h1>Empty Puzzle</h1>
      <Grid numbers={emptyPuzzle} />
      <h1>Solved Puzzle</h1>
      <Grid numbers={solvedPuzzle} />
    </div>
  )
}

export default Sudoku;
