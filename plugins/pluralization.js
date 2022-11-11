export default ({ app }) => {
    app.i18n.pluralizationRules.ru = function (choice) {
        const min = Math.abs(choice) % 100
        const num = min % 10
    
        if (min > 10 && min < 20) {
            return 2
        }
    
        if (num > 1 && num < 5) {
            return 1
        }
    
        if (num === 1) {
            return 0
        }
    
        return 2
    }
}