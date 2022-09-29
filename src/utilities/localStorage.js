
const addToLocalStorage = (time) => {

    let breakTime = getLocalStorageData();
    breakTime = time.break;
    localStorage.setItem("break-time", JSON.stringify(breakTime))
}

const getLocalStorageData = () => {
    const breakTime = localStorage.getItem("break-time");
    const parseBreakTime = JSON.parse(breakTime);
    return parseBreakTime;
}

export {
    addToLocalStorage,
    getLocalStorageData
}