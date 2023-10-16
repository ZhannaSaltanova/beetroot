const API_URL = 'https://newsapi.org/v2/everything';
const API_KEY = 'e974469d356c490c89c26ce9ca5590a0';
let base_q = 'tesla';

$.ajax({
    url:API_URL,
    method: 'get',
    dataType: 'json',
    data: {
        apiKey: API_KEY,
        q: base_q
    },
    success: function(data){
        render(data);
        console.log(data);
    },
    error: function(jqXHR, exception) {
        console.log(jqXHR);
        console.log(exception);
    }
})

function render (data) {
    let items = data.articles;
    for (let i = 0; i < items.length; i++) {
        if(i === 20){
            break;
        }
        let layout = `<article>
                        <h3>${items[i].author}</h3>
                        <h4>${items[i].title}</h4>
                        <h5>${items[i].content}</h5>
                        <p>${items[i].description}</p>
                        <img src = "${items[i].urlToImage}" >
                      </article>`
        $(".all-articles").append(layout);
    }
}
