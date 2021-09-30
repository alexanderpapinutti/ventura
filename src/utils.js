export function copyToClipboard(link, setAlert, text) {
  navigator.clipboard.writeText(link);

  setAlert({type: 'success', active: true, text})
}