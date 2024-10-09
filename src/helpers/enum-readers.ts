export function timeSlotReader(value: string): string {
  return value
    .replace('T', '')
    .replaceAll('COLON', ':')
    .replaceAll('__', ' - ')
    .replaceAll('_', '');
}
