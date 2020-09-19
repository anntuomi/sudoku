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
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
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

const getValidNum = (puzzle, x_loc, y_loc) => {

  let num = puzzle[y_loc][x_loc] + 1;
  while (num <= 9)
  {
    if (isValidNum(puzzle, num, x_loc, y_loc))
      return (num);
    num++;
  }
  return (0);
}

const solvePuzzle = (puzzle) => {
  let x = 0;
  let y = 0;
  let i;

  console.log(puzzle);
  while (puzzle[y][x] !== 0 && y < 9)
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
  if (y === 9)
    return (true);
  for (i = 1; i <= 9; i++)
  {
    if (isValidNum(puzzle, i, x, y))
    {
      puzzle[y][x] = i;
      if (solvePuzzle(puzzle) === true)
        return (true);
      puzzle[y][x] = 0;
    }
  }
  return (false);
}

const generateStartSeed = (puzzle) => {
    fillBox(puzzle, 0, 6);
    fillBox(puzzle, 3, 3);
    fillBox(puzzle, 6, 0);
}

const generatePuzzle = () => {
  let puzzle = initPuzzle();
  generateStartSeed(puzzle);
  console.log(solvePuzzle(puzzle, 0, 0));
  return (puzzle);
}

const Sudoku = () => {
  const solvedPuzzle = generatePuzzle();
  return (
    <div>
      <Grid numbers={solvedPuzzle} />
    </div>
  )
}

export default Sudoku;
