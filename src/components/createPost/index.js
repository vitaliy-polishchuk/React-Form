

export const dateNow = () => {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date();
    const mon = month[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();
    return mon + " " + day + ", " + year;
}
