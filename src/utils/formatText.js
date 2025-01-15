export function format(input) {
    let text = input
    return {
        title: function () {
            // This function should take a string like `user_name`
            // and transform it to 'User Name'
            text = text
                .split('_')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
            return text
        },
        phone: function () {
            let cleaned = ('' + text).replace(/\D/g, '')

            if (cleaned.length > 3) {
                text = cleaned.slice(0, 3) + '-' + cleaned.slice(3, 6)
                if (cleaned.length > 6) {
                    text += '-' + cleaned.slice(6, 10)
                }
            } else {
                text = cleaned
            }

            return text
        },
        ssn: function () {
            // This function should take a string like `123333123`
            // and transform it to `123-33-1232`
            let cleaned = ('' + text).replace(/\D/g, '')
            if (cleaned.length > 3) {
                text = cleaned.slice(0, 3) + '-' + cleaned.slice(3, 5)
                if (cleaned.length > 5) {
                    text += '-' + cleaned.slice(5, 9)
                }
            } else {
                text = cleaned
            }

            return text
        },
        date: function (showTime) {
            // This function should take a string like `2024-08-27T17:35:58.946Z`
            // and transform it to `08/27/2024 12:36 pm`
            // it should take a prop that determines whether or not
            // to show the time.
            let options
            if (showTime) {
                options = {
                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true,
                }
            } else {
                options = {
                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric',
                }
            }
            const date = new Date(text)

            text = new Intl.DateTimeFormat('en-US', options).format(date)

            return text
        },
        address: function () {
            const { address_line_1, city, state, zip } = text
            let result = `${address_line_1} ${city}, ${state.toUpperCase()} ${zip}`
            text = result
            return text
        },
        number: function () {
            text = new Intl.NumberFormat('en-US').format(text)
            return text
        },
        currency: function () {
            text = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(text)
            return text
        },
    }
}

export const handleFormat = (input, type, showTime) => {
    const formatText = format(input)
    let result
    switch (type) {
        case 'title':
            result = formatText.title()
            break
        case 'phone':
            result = formatText.phone()
            break
        case 'date':
            result = formatText.date(showTime)
            break
        case 'ssn':
            result = formatText.ssn()
            break
        case 'address':
            result = formatText.address()
            break
        case 'number':
            result = formatText.number()
            break
        case 'currency':
            result = formatText.currency()
            break
        default:
            return input
    }
    return result
}
