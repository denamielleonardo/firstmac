import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[] | null | undefined, searchText: string | null = '', searchFields: string[] = []): any[] {
    // Ensure items is an array
    if (!Array.isArray(items)) return [];

    // If no searchText is provided, return the original items
    if (!searchText) return items;

    // Convert searchText to lowercase for case-insensitive search
    searchText = searchText.toLowerCase();

    return items.filter(item => {
      if (searchFields.length === 0) {
        // If no specific fields are given, check all fields in the item
        return Object.values(item).some((value: any) =>
          value.toString().toLowerCase().includes(searchText!)
        );
      } else {
        // Only search in specified fields
        return searchFields.some(field =>
          item[field] && item[field].toString().toLowerCase().includes(searchText!)
        );
      }
    });
  }
}
