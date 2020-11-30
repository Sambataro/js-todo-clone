//
// Esercizio: creare una to-do list, come quella fatta insieme stamattina, utilizzando Handlebars come templating engine.
// Consiglio: fate uno step alla volta, prima caricate Handlebars da CDN in pagina, poi provate a seguire i primi step della sezione "Usage", modificando le proprietà dell'oggetto context.
//

$(document).ready(
  function(){

    // creo un array di memo
    var todoList = [
      "seguire la lezione",
      "studiare le slide",
      "fare pause regolari",
      "riposare la vista",
    ];

    // collego handlebars
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);


    // navigo dentro l'array
    for (var i = 0; i < todoList.length; i++) {
      // creo template
      var context = {
        item: todoList[i]
      };
      var html = template(context);
      $(".todo").append(html);
    }
    console.log(context);
    console.log(todoList);


    // al click le note si cancellano, anche quelle generate dopo
    $(document).on( "click" , ".delete",
      function() {
        $(this).parent().remove();
      }
    )

    // schiacciando enter si crea un nuovo item nella lista utilizzando il template, pulisco anche il value all'invio
    $(".enter").keydown(
      function(event) {
        if(event.which == 13 || event.keycode == 13) {
          var inputItem = $("[name = add-items]").val();

          var context = {
            item: inputItem
          };
          var html = template(context);
          $(".todo").append(html);
          $(this).val("");
        }
      }
    )

  }
);
