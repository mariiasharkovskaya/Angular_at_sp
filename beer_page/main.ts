const getBeer = async(): Promise<string> => {
    const response = await fetch(`https://api.punkapi.com/v2/beers`)
    let content: any = await response.json()
    return content;
    let beer: number; 
    for (let beer in content) {
        document.body.innerHTML += `
        <div class="card">
             <div class="id">${content[beer].id}</div>
             <div class="name">${content[beer].name}</div>
             <div class="tagline">${content[beer].tagline}</div>
             <div class="contain">
             <div class="image"><img src="${content[beer].image_url}"></div>
             <div class="description">${content[beer].description}</div>
             </div>
             <div class="first_brewed">${content[beer].first_brewed}</div>
         </div>
        `
    }
}
getBeer()