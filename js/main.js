const bags = async () => {
    let response = await fetch("http://localhost:3000/api/bag")
    .then(async(response)=>{
        response = await response.json()
        return response
    })
    .catch(err => {
        return err
    })
    response.map((res)=> {
        document.getElementById("bag-card").innerHTML = document.getElementById("bag-card")
    })
}