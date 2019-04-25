export function formatDate (dateString) {
  const date = new Date(dateString)
  const language = navigator.language
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
  return date.toLocaleString(language, options)
}

export function renameProp (oldProp, newProp, { [oldProp]: old, ...others }) {
  return {
    [newProp]: old,
    ...others
  }
}

export function toUnixTimestamp (dateString) {
  return parseInt((new Date(dateString).getTime() / 1000).toFixed(0))
}