const nums = [1, 2, 3 ,4 ,5 ,6 ,7 ,8 ,9, 10];

// No caso do break, ele interrompe o laço e sai do fluxo
for (x in nums) {
  if (x == 5) {
    break;
  }
  console.log(`${x} = ${nums[x]}`);
}

// No caso do continue, ele interrompe o laço e vai para a próxima repetição
for (y in nums) {
  if ( y == 5) {
    continue;
  }
  console.log(`${y} = ${nums[x]}`);
}

externo : for (a in nums) {
  for (b in nums) {
    if(a == 2 && b == 3) {
      break externo;
      console.log(`Par = ${a},${b}`);
    }
  }
}