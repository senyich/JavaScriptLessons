class Matrix {
  constructor(m, n) {
    this.m = m;
    this.n = n;
    this.max = 50;
    this.generate(m, n);
  }

  generate(m, n) {
    this.a = Array.from({ length: m }, () => Array(n).fill(0)); // создаем пустой массив
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        this.a[i][j] = Math.floor(Math.random() * (2 * this.max + 1)) - this.max; // заполняем массив случайными числами
      }
    }
  }

  clear() {
    this.a = Array.from({ length: this.m }, () => Array(this.n).fill(0)); // создаем пустой массив
  }

  divide() {
    for (let i = 0; i < this.m; i++) {
      for (let j = 0; j < this.n; j++) {
        this.a[i][j] = j === 0 ? 0 : Math.floor(this.a[i][j] / (j + 1)); // избегаем деления на 0
      }
    }
  }

  print(header) {
    if (!this.a || this.a.length === 0) {
      console.log('Матрица пуста');
      return;
    }

    console.log(header);
    let headerRow = '   ';
    for (let j = 0; j < this.n; j++) {
      headerRow += `${j + 1})`.padStart(5);
    }
    console.log(headerRow);

    for (let i = 0; i < this.m; i++) {
      let row = `${(i + 1).toString().padStart(3)} `;
      for (let j = 0; j < this.n; j++) {
        row += `${this.a[i][j].toString().padStart(5)}`;
      }
      console.log(row);
    }
    console.log();
  }
}
