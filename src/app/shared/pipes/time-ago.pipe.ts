import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: number): string {
    if (!value) {
      return '';
    }

    const now = new Date().getTime();
    const diff = now - value;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30.44);
    const years = Math.floor(days / 365);

    if (years >= 1) {
      // More than a year
      return this.formatDate(new Date(value));
    } else if (months >= 1) {
      // Between 1 and 11 months
      return `${months} month${months > 1 ? 's' : ''} ago`;
    } else if (weeks >= 1) {
      // Between 1 and 4 weeks
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if (days >= 1) {
      // Between 1 and 6 days
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours >= 1) {
      // Beyond 60 minutes
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes >= 1) {
      // Between 1 and 4 minutes
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      // Less than a minute
      return 'Just Now';
    }
  }

  private formatDate(date: Date): string {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US');
  }

}
