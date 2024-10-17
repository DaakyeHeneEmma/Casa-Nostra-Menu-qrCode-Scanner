const ArrayData = (data) => {
    let newdata = 0

    for(let i = 0; i < data.length; i++){
        data[i] < newdata ? (newdata = data[i]): newdata
    }
    console.log(newdata)
}

ArrayData([1,2,3,54])