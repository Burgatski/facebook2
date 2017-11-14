

var tdList = $('#tdlApp ul');


function showTask(){  //отображение записанного в value localstorage
  var islen = localStorage.length;
  if(islen > 0){
    for (var i=0;i<islen;i++){
      key = localStorage.key(i);
       $('<li></li>').addClass('tdItem')
            .attr('data-itemid', key)
            .text(localStorage.getItem(key))
            .appendTo(tdList);
      }
    }
  }

showTask();

$('#tdlApp textarea').on('keydown', function(e){
  if(e.keyCode != 13)
    return;
  var str = e.target.value;
  e.target.value = "";

  if(str.length > 0){ //создаем новый элемент и добавляем его в список
    nId = 0;
    tdList.children().each(function(index, el){   //ищем идентификатор проходясь по каждому из элементов списка
      var jelId = $(el).attr('data-itemid').slice();
      if(jelId > nId)
      nId = jelId;
    })
    nId++;

    localStorage.setItem(nId, str);//установка элемента ключ, значение
    $('<li></li>').addClass('tdItem')
    .attr('data-itemid', nId)
    .text(str).appendTo(tdList);
  }
})

$(document).on('click','.tdItem', function(e){
var jet = $(e.target);
localStorage.removeItem(jet.attr('data-itemid'));
jet.remove();
})

$('.sidebar').on('click', 'button', function(){ /*блок рекламы*/
  $(this).closest('.sidebar').find('.tic').slideDown();
})

//localStorage.1="111111" - доделать редактирование
