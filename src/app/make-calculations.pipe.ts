import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeCalculations',
})
export class MakeCalculationsPipe implements PipeTransform {
  private static mathStringRegex = /-?\d+ ?[+-] ?-?\d+[+\-\s\d]*/g;
  private static mathDict = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  private static calculate(calcStr: string): string {
    const ops = calcStr
      .split(/(\d+)/)
      .map((char) => char.trim())
      .filter((char) => char !== '');
    let result = Number(ops[0]);
    for (let i = 1; i < ops.length - 1; i += 2) {
      result = MakeCalculationsPipe.mathDict[ops[i]](result, +ops[i + 1]);
    }
    return `<span class="math-result">${result.toString()}<span class="math-expression">${calcStr}</span></span> `;
  }

  transform(text: string): string {
    return text.replace(MakeCalculationsPipe.mathStringRegex, (match) => {
      return MakeCalculationsPipe.calculate(match);
    });
  }
}
