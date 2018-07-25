const bags = async () => {
    let response = await fetch("https://soft-crab-63.localtunnel.me/api/bag")
    .then(async(response)=>{
        response = await response.json()
        return response
    })
    .catch(err => {
        return err
    })
    response.map((res)=> {
        document.getElementById("bag-card").innerHTML = document.getElementById("bag-card").innerHTML + 
        `<div>
        <div class="card mt-3" style="width: 15rem;">
          <img class="card-img-top" src="${res.image_url}" alt="Follower Avatar">
          <div class="card-body">
            <h5 class="card-title">Number ${res.id}</h5>
          </div>
        </div>
        </div>`
    })
}

bags();