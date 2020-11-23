import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTask'
})
export class FilterTaskPipe implements PipeTransform {

  transform(tasks: any[], searchTerm: string): any {
    if (!tasks) return [];
    if (!searchTerm) return tasks;
    return tasks.filter(e => {
      return e.name.toLocaleLowerCase().match(searchTerm.toLocaleLowerCase());
    });
  }

}
