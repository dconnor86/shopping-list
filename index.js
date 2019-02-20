function registerEventHandler() {
    $(".shopping-item-delete").click(function(e){
        $(e.target).closest("li").remove();
      });
      
    $(".shopping-item-toggle").click(function(e){
        $(e.target).closest('li').toggleClass("shopping-item__checked");
    })
}


$(document).ready(function(){
 registerEventHandler();

  
  $("#js-shopping-list-form").submit (function(e){
    var text = $('#shopping-list-entry').val();
    var elm = `<li>
    <span class="shopping-item">${text}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
    $('.shopping-list').append(elm).toggleClass("shopping-item")
    e.preventDefault();
    registerEventHandler();
  })



  
});
