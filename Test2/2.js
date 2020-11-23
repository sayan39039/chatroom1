// var load = $('#load-text').text();
    
// function load_animation(){
    
//     // for(i = 0; i < load.length; i++)
//     // {
//         $('#load-text').fadeIn('slow');
        
//     // }
// }
var x = 1;
var p = 0;



function send_message(){
    var value = $('#inpu').val();
    var d = new Date();
    var add_date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();

    var add_time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
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
            $('#main-addition').append('<div class="d-flex mb-3 bg-none"><div class="p-2 ml-auto" id = "added1"><span class="pl-1 pr-1 ml-auto" id = "added3">' + add_time + ' on ' + add_date + '</span><br>' + value + '</div> </div>');
            x = 2;
        }

        else if(x === 2)
        {
            $('#main-addition').append('<div class="d-flex mb-3 bg-none"><div class="p-2 mr-auto" id = "added2"><span class="pl-1 pr-1 mr-auto" id = "added3">' + add_time + ' on ' + add_date + '</span><br>' + value + '</div> </div>');
            x = 1;
        }
    }
    $('#inpu').val("");
}

$('document').ready(function(){
    
    $('#inpu').focus();
    // load_animation();
    $('#send').click(function(){
        send_message();
    })



    $('#inpu').keydown(function(e){
        
        if(e.keyCode === 13){
            send_message();
        }
        
    })

    $('#refresh').click(function(){
        $('#inpu').focus();
        $('#middle-wrapper').empty();
    });


});