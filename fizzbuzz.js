    for (let i = 1; i <= 100; i++) {
        let sortie = '';

        if (i % 3 === 0) {
            sortie += 'Fizz';
        }

        if (i % 5 === 0) {
            sortie += 'Buzz';
        }

        if (i % 15 === 0) {
            sortie = 'FizzBuzz';
        }

        if (i % 10 === 9) {
            sortie += ' Bonus';
        }

        if (sortie === '') {
            sortie = i;
        }

        process.stdout.write(sortie + ' ');
    }

