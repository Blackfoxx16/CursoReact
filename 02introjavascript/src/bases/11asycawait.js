const apiKey = '4wlOYWgRvcJwNxxtwUKjMujPt0tLvbmg';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/* peticion
    .then( resp => resp.json())
    .then(({data}) => {
        const {url} =data.images.original

        const img = document.createElement('img')
        img.src = url;
        document.body.append(img)
    })
    .catch(console.warn) */


    const getImage = async() => {


        try {
        
            const apiKey = '4wlOYWgRvcJwNxxtwUKjMujPt0tLvbmg';
            const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
            const {data} = await peticion.json();
            
            const {url} =data.images.original
            const img = document.createElement('img')
            img.src = url;
            document.body.append(img)
        } catch (error) {
            console.warn(error);
        }
        
    }

    getImage();