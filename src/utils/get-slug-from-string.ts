export function getSlugFromString(name: string) {
  if (!name) return '';
  if (typeof name !== 'string') return name;
  return name.toLowerCase().split(' ').join('-');
}
