export function convertToDateFormat(date: number): string {
  return new Intl.DateTimeFormat('pt-BR', {
    month: 'long',
    day: '2-digit',
  }).format(new Date(date));
}
