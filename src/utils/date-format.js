import dayjs from "dayjs";
export const formatMonthDay = (date) => {
    return dayjs(date).format("MM月DD日")
}

export const getDaysDiff = (start, end) => {
    return dayjs(end).diff(start, 'day')
}

export const formatMonthDotDay = date => {
    let month = dayjs(date).month() + 1
    return month + "." + dayjs(date).date()
}