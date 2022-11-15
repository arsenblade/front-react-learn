export const getClassAnimation = (length: number) => {
  if(length === 1) {
    return 'dropdownListAnimation1'
  }

  if(length === 2) {
    return 'dropdownListAnimation2'
  }

  if(length === 3) {
    return 'dropdownListAnimation3'
  }
}