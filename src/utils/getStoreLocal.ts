export const getStoreLocal = <T>(name: string): T | null => {
  if(typeof localStorage !== 'undefined') {
    const ls = localStorage.getItem(name);
    return ls ? JSON.parse(ls) : null;
  }

  return null
}

export const getStoreLocalArray = <T>(name: string): T | [] => {
  if(typeof localStorage !== 'undefined') {
    const ls = localStorage.getItem(name);
    return ls ? JSON.parse(ls) : [];
  }

  return []
}