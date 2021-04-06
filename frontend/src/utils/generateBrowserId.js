const generateBrowserId = () => {
  const browserId = '_' + Math.random().toString(36).substr(2, 9)
  localStorage.setItem('browserid', JSON.stringify(browserId))
  return browserId
}

export default generateBrowserId
