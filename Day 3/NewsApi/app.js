$(function(){
    $('#loader').hide();
   $.ajax({
       type: "GET",
       url: "https://newsapi.org/v2/everything?q=tesla&from=2021-06-08&sortadsadBy=publishedAt&apiKey=c3308f030508428f87c69cb808f4ac01",
       data: "data",
       dataType: "JSON",
       beforeSend:function () {
           $('#loader').show();
       },
       complete:function(){
        $('#loader').hide();
       },
       success: function (response) {
           let output='';
            for(let i in response.articles){
            output += ` <div class="col-md-4">
            <div class="card" >
                <img src=${response.articles[i].urlToImage} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${response.articles[i].title}</h5>
                  <p class="card-text">${response.articles[i].description}</p>
                  <a href=${response.articles[i].url} class="btn btn-primary">Read More</a>
                </div>
              </div>
        </div>`;
        }
           $('#result').html(output);
       }
   });
});