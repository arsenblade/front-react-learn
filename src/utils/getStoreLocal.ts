export const getStoreLocal = <T>(name: string): T | null => {
  if(typeof localStorage !== 'undefined') {
    const ls = localStorage.getItem(name);
    return ls ? JSON.parse(ls) : null;
  }

  return null
}