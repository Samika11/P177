$(document).ready(function () {
    getTemplate();
})

function getTemplate() {
    
$.ajax({
    url:"/get-template",
    type:"get",
    success:function(result){
        displayTemplate(result.template)
    },
    error:function(result){
        alert(result.responseJSON.message)
    }
})
		
}
function displaytTemplate(template) {
    
    $("#template_title").html(template.title)

    $("#bank_words").empty();

    for (let i = 0; i < template.words.length; i++) {
        let html = `<button class="word_bank_button">${template.words[i]}</button>`
        $("#bank_words").append(html)
    }

    $("#input_fields").empty();
    for (let i = 0; i < template.inputs; i++) {
        let input_html = `<input type="text" class="input_field" id="input_${i}" placeholder="Input ${i + 1}"/>`
        $("#input_fields").append(input_html)
    }

    $("#template_text").html(template.template)
    
    $("#template_id").val(template.template_id)
}

$(function () {
    $(".input_field").keyup(function () {
        let id = $(this).attr("id");
        let input_number = id.split("_")[1]
        $(".rep_input").eq(input_number).html($(this).val());
    })

    $("#submit_template").click(function () {
      
	  let values = []
        for (let i = 0; i < $(".input_field").length; i++) {
            values.push($(".input_field").eq(i).val())
        }
        let data = {
            "template_id": $("#template_id").val(),
            "values": values
        }
        $.ajax({
            url: "/post-answers",
            type: "post",
            data: JSON.stringify(data),
            dataType: "json",
            contentType: 'application/json',
            success: function (result) {
                $("#result").html(result.result)
                $("#result_container").removeClass("hidden")
            },
            error: function (result) {
                alert(result.responseJSON.message)
            }
        })  
	  
	  
    })
})



