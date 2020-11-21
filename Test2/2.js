// var load = $('#load-text').text();
    
// function load_animation(){
    
//     // for(i = 0; i < load.length; i++)
//     // {
//         $('#load-text').fadeIn('slow');
        
//     // }
// }



$('document').ready(function(){
    var x = 1;
    var p = 0;
    $('#inpu').focus();
    // load_animation();
    $('#send').click(function(){
        
        var value = $('#inpu').val();

        if(value == "")
        {
            alert('where is your message??');
        }

        else{

            

            if(x === 1)
            {
                if(p === 0)
                {
                    $('#middle-wrapper').append('<div class = "col-sm-12 p-3" id="main-addition"></div>');
                    p = 1;
                }
                $('#main-addition').append('<div class="d-flex mb-3 bg-none"> <div class="p-2 ml-auto" id = "added1">' + value + '</div> </div>');
                x = 2;
            }

            else if(x === 2)
            {
                $('#main-addition').append('<div class="d-flex mb-3 bg-none "> <div class="p-2 mr-auto" id = "added2">' + value + '</div> </div>');
                x = 1;
            }
        }
        $('#inpu').val("");
    })



    $('#inpu').keydown(function(e){
        
        if(e.keyCode === 13){
            var value = $('#inpu').val();
            if(value == "")
            {
                alert('where is your message??');
            }

            else{
                if(x === 1)
                {
                    if(p === 0)
                    {
                        $('#middle-wrapper').append('<div class = "col-sm-12 p-3" id="main-addition"></div>');
                        p = 1;
                    }
                    $('#main-addition').append('<div class="d-flex mb-3 bg-none"> <div class="p-2 ml-auto" id = "added1">' + value + '</div> </div>');
                    x = 2;
                }

                else if(x === 2)
                {
                    $('#main-addition').append('<div class="d-flex mb-3 bg-none "> <div class="p-2 mr-auto" id = "added2">' + value + '</div> </div>');
                    x = 1;
                }
            }
            $('#inpu').val("");
        }
        
    })


    $('#refresh').click(function(){
        $('#middle-wrapper').empty();
    });


});