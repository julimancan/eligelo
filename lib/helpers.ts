export const formatByType = (num: number, format: string): string => {

    if (!format) {
        return String(num);
    }

    return `${format === 'money' ? '$' : ''}` + num.toLocaleString('es-ES', {
        useGrouping: true,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}