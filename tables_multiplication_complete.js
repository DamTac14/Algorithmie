for (let i = 1; i <= 9; i++) {
    console.log(`\nTable de multiplication pour ${i}: `);
    for (let j = 1; j <= 10; j++) {
      const resultat = i * j;
      process.stdout.write(`${i} * ${j} = ${resultat}\t`);
    }
  }
  