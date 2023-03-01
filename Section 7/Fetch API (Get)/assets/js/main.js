const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send()
    
        xhr.addEventListener('load', () => {
             if (xhr.status >= 200 && xhr.status < 300) {
                 resolve(xhr.responseText);
             } else {
                 reject(xhr.statusText)
             }
        })
    })
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        LoadingPage(el)
    }
});

async function LoadingPage(el) {
    const href = el.getAttribute('href')

    const objConfig = {
        method: 'GET',
        url: href,
    }

    try {
        const response = await request(objConfig)
        loadResult(response)
    } catch(e) {
        console.log(e)
    }

}

const loadResult = response => {
    const result = document.querySelector('.result')
    result.innerHTML = response
}


fetch('pag 1.html')
    .then(asnwer => {
        if(asnwer.status !== 200) throw new Error('ERROR 404 NOSSO')
        return asnwer.text()
    })
    .then(html => console.log(html))
    .catch(e => console.log(e))