export const getClassAnimationList = (length: number) => {
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


export const getClassAnimationTest = (string: 'back' | 'next' | 'current') => {
  if(string === 'back') {
    return 'classNameBackAnimation'
  }
  if(string === 'next') {
    return 'classNameNextAnimation'
  }
}
