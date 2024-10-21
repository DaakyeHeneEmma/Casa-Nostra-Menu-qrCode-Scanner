const ArrayData = (data) => {
    // let newdata = 0

    // for(let i = 0; i < data.length; i++){
    //     data[i] < newdata ? (newdata = data[i]): newdata
    // }
    // console.log(newdata)

         data.filter((item, index)=>(
         console.log( index, item)
    ))

    Array.from({length:3}).map((item, index, other)=>(
     
        console.log(item, index, 
            (other.map((image)=> image)))
    ))
}

ArrayData([1,2,3,54])