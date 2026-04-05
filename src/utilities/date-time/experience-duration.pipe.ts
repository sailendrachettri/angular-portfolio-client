import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experienceDuration'
})
export class ExperienceDurationPipe implements PipeTransform {

  private parseDate(input: string): Date {
    if (!input) return new Date();

    if (input.toLowerCase() === 'present') {
      return new Date();
    }

    const [month, year] = input.split('-').map(Number);
    return new Date(year, month - 1);
  }

  transform(start: string, end: string): string {
    if (!start || !end) return '';

    const startDate = this.parseDate(start);
    const endDate = this.parseDate(end);

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    // 🔥 Short format logic
    if (years === 0 && months === 0) {
      return '<1m';
    }

    if (years === 0) {
      return `${months}m`;
    }

    if (months === 0) {
      return `${years}y`;
    }

    return `${years}y ${months}m`;
  }
}