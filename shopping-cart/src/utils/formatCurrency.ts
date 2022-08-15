const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: 'EUR', 
    style: 'currency'
})

export const formatCurrency = (number: string) => {
    const toNumber = parseFloat(number)
   return  CURRENCY_FORMATTER.format(toNumber)
}

export const formatCurrencyCart = (number: number) => {
   return  CURRENCY_FORMATTER.format(number)
}