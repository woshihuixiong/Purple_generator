const formatTime1 = date => {
  const month = date.getMonth() + 1
  const day = date.getDate()

  if(day < 10 && month < 10) return '0' + month + '月' + '0' + day + '日'
  else if(day < 10 && month >= 10) return month + '月' + '0' + day + '日'
  else if(day >= 10 && month < 10) return '0' + month + '月' + day + '日'
  else return month + '月' + day + '日'
}

const formatTime2 = date => {
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime1: formatTime1,
  formatTime2: formatTime2
}
