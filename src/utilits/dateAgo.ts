type DateTimeFormatOptions = Intl.DateTimeFormatOptions

export function dateAgo(date: string) {
  const msMinute = 60 * 1000
  const msHour = msMinute * 60
  const msDay = msHour * 24

  const elapsed = new Date().valueOf() - new Date(date).valueOf()
  console.log(elapsed)

  if (elapsed < msMinute) {
    return Math.round(elapsed / 1000) + " Seconds ago"
  } else if (elapsed < msHour) {
    return Math.round(elapsed / msMinute) + " Minutes ago"
  }
  if (elapsed < msDay) {
    return Math.round(elapsed / msHour) + " Hours ago"
  } else {
    const options: DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric"
    }
    return new Date(date).toLocaleString("en-US", options)
  }
}