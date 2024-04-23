export const formatCurrency = (value) =>
  new Intl.NumberFormat('bg-BG', { style: 'currency', currency: 'BGN' }).format(
    value
  )

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function formatDate(dateString) {
  const dateObj = new Date(dateString)
  const day = dateObj.getDate()
  const month = capitalizeFirstLetter(
    dateObj.toLocaleDateString('en', {
      month: 'short',
    })
  )
  const year = dateObj.getFullYear()

  return `${day<10 ? '0'+day : day} ${month} ${year}`
}

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

