export function toDate(date) {
  if (!date) return null
  const [day, month, year] = date.split("/")
  return new Date(`${month}/${day}/${year}`)
}
