export function convertToISOForPrisma(date: string): string {
  return new Date(date).toISOString();
}
